const nodemailer = require('nodemailer');

module.exports = async (req, res) => {
    // Enable CORS
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
    res.setHeader(
        'Access-Control-Allow-Headers',
        'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
    );

    // Handle OPTIONS request (CORS preflight)
    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }

    if (req.method !== 'POST') {
        return res.status(405).json({ success: false, error: 'Method Not Allowed' });
    }

    const { name, email, message, time } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ success: false, error: 'Missing required fields' });
    }

    const gmailUser = process.env.GMAIL_USER;
    const gmailPass = process.env.GMAIL_PASS; // This must be a Gmail App Password

    if (!gmailUser || !gmailPass) {
        console.error('SMTP Error: GMAIL_USER or GMAIL_PASS environment variables are not configured.');
        return res.status(500).json({ 
            success: false, 
            error: 'SMTP credentials missing. Please configure GMAIL_USER and GMAIL_PASS in your Vercel Environment Variables.' 
        });
    }

    // Create Transporter
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        host: 'smtp.gmail.com',
        port: 465,
        secure: true, // Use SSL
        auth: {
            user: gmailUser,
            pass: gmailPass
        }
    });

    // Verify SMTP connection configuration
    try {
        await transporter.verify();
        console.log('SMTP connection verified successfully.');
    } catch (verifyError) {
        console.error('SMTP Connection/Authentication Error:', verifyError);
        return res.status(500).json({ 
            success: false, 
            error: 'SMTP connection failed. Check your Gmail App Password and username.',
            details: verifyError.message 
        });
    }

    // Email content layout
    const mailOptions = {
        from: `"${name}" <${gmailUser}>`, // Must be from gmailUser because Google rewrites the 'from' address
        to: 'farazahmed54@gmail.com',
        replyTo: email,
        subject: `New Portfolio Message from ${name}`,
        text: `Subject: New Portfolio Message from ${name}\nFrom: ${email}\nMessage:\n${message}\nTime: ${time || new Date().toLocaleString()}\n`
    };

    // Send Mail
    try {
        const info = await transporter.sendMail(mailOptions);
        console.log('Email sent successfully:', info.messageId);
        return res.status(200).json({ success: true, message: 'Email sent successfully' });
    } catch (sendError) {
        console.error('Failed to send email:', sendError);
        return res.status(500).json({ 
            success: false, 
            error: 'Failed to send email via SMTP service.',
            details: sendError.message 
        });
    }
};
