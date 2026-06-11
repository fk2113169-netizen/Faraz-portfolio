const nodemailer = require('nodemailer');
const { Resend } = require('resend');

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

    // Try Resend first if API key is provided
    const resendApiKey = process.env.RESEND_API_KEY;
    if (resendApiKey) {
        try {
            const resend = new Resend(resendApiKey);
            const { data, error } = await resend.emails.send({
                from: 'onboarding@resend.dev',
                to: 'farazahm54@gmail.com',
                reply_to: email,
                subject: `New Portfolio Message from ${name}`,
                text: `Subject: New Portfolio Message from ${name}\nFrom: ${email}\nMessage:\n${message}\nTime: ${time || new Date().toLocaleString()}\n`
            });

            if (error) {
                console.error('Resend Error Response:', error);
                throw new Error(error.message);
            }

            console.log('Email sent successfully via Resend API:', data.id);
            return res.status(200).json({ success: true, message: 'Email sent successfully via Resend' });
        } catch (resendError) {
            console.error('Failed to send email via Resend API:', resendError);
            return res.status(500).json({ 
                success: false, 
                error: 'Failed to send email via Resend API.',
                details: resendError.message 
            });
        }
    }

    // Otherwise, try Gmail SMTP
    const gmailUser = process.env.GMAIL_USER;
    const gmailPass = process.env.GMAIL_PASS; // App Password

    if (!gmailUser || !gmailPass) {
        console.error('SMTP/Resend Error: No environment variables configured (RESEND_API_KEY or GMAIL_USER/GMAIL_PASS missing).');
        return res.status(500).json({ 
            success: false, 
            error: 'Backend unconfigured. Please set RESEND_API_KEY or GMAIL_USER/GMAIL_PASS in Vercel Environment Variables.' 
        });
    }

    // Create Transporter for Gmail SMTP
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        host: 'smtp.gmail.com',
        port: 465,
        secure: true, // SSL
        auth: {
            user: gmailUser,
            pass: gmailPass
        }
    });

    // Verify SMTP connection configuration
    try {
        await transporter.verify();
    } catch (verifyError) {
        console.error('SMTP Connection/Authentication Error:', verifyError);
        return res.status(500).json({ 
            success: false, 
            error: 'SMTP connection failed. Check your Gmail App Password and username.',
            details: verifyError.message 
        });
    }

    // Email content options
    const mailOptions = {
        from: `"${name}" <${gmailUser}>`,
        to: 'farazahmed54@gmail.com',
        replyTo: email,
        subject: `New Portfolio Message from ${name}`,
        text: `Subject: New Portfolio Message from ${name}\nFrom: ${email}\nMessage:\n${message}\nTime: ${time || new Date().toLocaleString()}\n`
    };

    // Send Mail
    try {
        const info = await transporter.sendMail(mailOptions);
        console.log('Email sent successfully via Gmail SMTP:', info.messageId);
        return res.status(200).json({ success: true, message: 'Email sent successfully via Gmail' });
    } catch (sendError) {
        console.error('Failed to send email via Gmail SMTP:', sendError);
        return res.status(500).json({ 
            success: false, 
            error: 'Failed to send email via SMTP service.',
            details: sendError.message 
        });
    }
};
