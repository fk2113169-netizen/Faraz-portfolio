# Faraz Ahmed | Professional Portfolio Website

Modern, high-performance portfolio website built for **Faraz Ahmed**, AI Systems Engineer & Agentic Workflow Developer based in Islamabad, Pakistan. Built using raw, optimized HTML5, CSS3, and JavaScript, and deployed using Vercel.

Live Website: [https://faraz-portfolio-chi.vercel.app](https://faraz-portfolio-chi.vercel.app)

---

## 🚀 Key Features

* **Interactive Hero Particle Network**: Responsive HTML5 Canvas particle system that connects nodes, tracks mouse interactions, and dynamically updates theme colors on dark/light toggle.
* **Typing Headline Loop**: Dynamic typewriter cycle detailing key professional specialties.
* **Layout Stability**: Solves scrollbar-related shifts (`scrollbar-gutter: stable;`) and avoids layout thrashing by caching browser metrics (`canvasRect`, `headerHeight`) outside frame loops.
* **Responsive Styling**: Built with mobile-first grid and flex configurations.
* **Digital Resume CV**: Stylized CV page (`resume.html`) configured with `@media print` rules, formatting instantly into a professional CV upon printing or saving to PDF.
* **SEO Optimized**: Standard structural meta properties, Open Graph schemas, and keywords.

---

## 🛠️ Technology Stack

* **Structure**: Semantic HTML5 markup
* **Styling**: Vanilla CSS3 Custom Variables (Themes, Gradients, and Transitions)
* **Logic & Animations**: Modern ES6+ JavaScript, Canvas API, and IntersectionObserver API
* **Icons**: [Lucide Icons](https://lucide.dev/)
* **Deployment**: Vercel CI/CD

---

## 💻 Local Development Setup

To run this site locally:
1. Clone this repository:
   ```bash
   git clone <your-repository-url>
   ```
2. Navigate to the project directory:
   ```bash
   cd faraz-portfolio
   ```
3. Open `index.html` directly in your web browser, or use a local dev server:
   ```bash
   npx serve .
   ```

---

## ☁️ Deployment

This project is deployed to **Vercel** with automatic production aliases. Any changes pushed to `master` will trigger a Vercel preview or production deployment build automatically.
