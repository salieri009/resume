# Product Requirements Document (PRD): Salieri's Portfolio Website

## 1. Project Overview
A single-page, static portfolio website for "Salieri" targeting the role of Enterprise Software Developer / Cloud Engineer. The portfolio highlights a strict, disciplined persona with analytical perfectionism and a hidden passion, represented through a "Winter Cool Tone Deep" (Dark Navy/Charcoal) base with "Char's Deep Red" accents.

## 2. Target Audience
- IT Recruiters and Hiring Managers (Enterprise, Cloud, Backend roles)
- Fellow Developers

## 3. Technology Stack (Proposed)
- **Framework:** Next.js (React) or Vite (React)
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion (for smooth scroll fade-ins, cursor glow, hover effects)
- **Deployment:** Vercel (Static Export)

## 4. Design & Color System
- **Background:** `#121212` (Deep Charcoal) or `#0F172A` (Dark Navy)
- **Primary Text:** `#E2E8F0` (Slate / Light Gray for a cold, sharp, clean look)
- **Accent Color:** `#9E1B11` (Deep Red for highlights, buttons, interactive glows)
- **Typography:** Modern, structured sans-serif (e.g., Inter, Roboto, or JetBrains Mono for code-like sections)

## 5. Information Architecture & Page Structure (Single Page Scroll)

### 5.1 Hero Section
- **Visuals:** Deep Navy background, minimalist typography. A subtle Deep Red cursor glow effect tracking mouse movement.
- **Head Copy:** "Architecting Systems with Disciplined Passion"
- **Sub Copy:** "Hello, I'm **Salieri**. Enterprise Software Developer & Cloud Enthusiast."
- **Call to Action (CTA):** `[ View Projects ]` button with a fill animation in Deep Red on hover.

### 5.2 About Me
- **Core Message:** Emphasizes identity beyond an ordinary coder—a developer growing steadily through iron discipline (daily routines and weight training).
- **Detail:** Highlighting a scholarly and methodical approach towards Cloud Infrastructure and AI/Deep Learning.
- **Quote:** *"꾸준한 루틴이 견고한 시스템을 만든다고 믿습니다."* (Consistent routines build robust systems.)

### 5.3 Tech Stack & Goals
- **Skills:** Java, Python, SQL, Cloud, DevOps, AI/ML.
- **2026 Milestones (Timeline UI):**
  - Target: April 2026 - CKA (Certified Kubernetes Administrator)
  - In Progress: AWS SAA Preparation
  - Portrays the candidate as continually evolving and milestone-driven.

### 5.4 Projects (with Scroll Fade-in Animations)
- **Amadeus:** Server Anomaly Detection System (Highlights analytical, perfectionist backend/cloud capability).
- **Cohesion & AnChak:** Team Matching & International Student Platform (Demonstrates practical and user-centric development experience).
- **StevTech Pipeline:** Drone Image Data Ingestion Pipeline (Showcases practical data processing and cloud pipeline experience from the SDS course).

### 5.5 Epilogue / Contact (Footer)
- **Links:** Email, GitHub, LinkedIn.
- **Easter Eggs:**
  - Subtle text in bottom right: *"Deployed 3 times faster"* (A Char Aznable reference).
  - GitHub Commit Graph styling customized to Deep Red.

## 6. Functional Requirements
- **Responsive Design:** Must be flawlessly responsive across Mobile, Tablet, and Desktop.
- **Performance:** High Lighthouse scores, fast load times (Static Generation).
- **Animations:** Subtle, non-intrusive animations (fade-in on scroll, hover transformations) that enhance the premium feel.
- **SEO & Meta tags:** Proper Open Graph tags and meta descriptions for link sharing.

## 7. Next Steps
1. Initialize the `Frontend` directory with the chosen framework (e.g., Next.js or Vite).
2. Configure Tailwind CSS and color variables.
3. Build structural components (Hero, About, Stack, Projects, Footer).
4. Implement interactivity (Framer Motion).
5. Deploy to Vercel.
