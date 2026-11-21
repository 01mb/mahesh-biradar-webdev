# Mahesh Biradar — Developer Portfolio

A responsive, single-page developer portfolio for **Mahesh Biradar**, a Front-End & Web Developer specializing in React.js, FinTech, AdTech, WordPress, and WooCommerce.

The portfolio presents professional experience, technical skills, key projects, education, and contact details. It also includes a dark/light theme switch, project category filtering, modal dialogs, smooth navigation, and clipboard copy actions.

## Highlights

- Responsive overview, skills, experience, projects, education, and contact sections
- Dark and light themes
- Filterable project showcase for FinTech, AdTech, and React applications
- Detailed project and digital resume modals
- Smooth in-page navigation
- Email and phone copy-to-clipboard actions with toast notifications
- Centralized profile, skills, experience, education, and project data
- Animated gradient backgrounds and Tailwind CSS styling

## Tech Stack

- React 19
- Vite 8
- Tailwind CSS 4
- JavaScript (ES6+)
- Lucide React
- ESLint
- React Compiler

## Project Structure

```text
src/
  components/
    common/
      Toast.jsx
    layout/
      Footer.jsx
      Navbar.jsx
    modals/
      ProjectModal.jsx
      ResumeModal.jsx
    sections/
      ContactSection.jsx
      EducationSection.jsx
      ExperienceSection.jsx
      HeroSection.jsx
      ProjectsSection.jsx
      SkillsSection.jsx
  data/
    portfolioData.js
  App.jsx
  index.css
  main.jsx
```

## Getting Started

### Prerequisites

- Node.js 20.19 or newer
- npm

### Installation

```bash
npm install
```

### Run Locally

```bash
npm run dev
```

Open the local address printed by Vite, usually `http://localhost:5173`.

### Production Build

```bash
npm run build
```

### Preview the Build

```bash
npm run preview
```

### Run ESLint

```bash
npm run lint
```

## Customizing the Portfolio

Most portfolio content is stored in `src/data/portfolioData.js`. Update this file to change:

- Personal profile and contact information
- Professional summary
- Skills and category lists
- Work experience
- Project details and demo links
- Education details

Section layout and behavior can be customized in `src/components/sections/`. Global page composition is managed in `src/App.jsx`, and Tailwind styles are primarily applied directly in the React components.

## Main Features

### Professional Profile

The hero section includes a professional introduction, location, experience summary, contact actions, LinkedIn link, and navigation buttons.

### Skills

Skills are grouped by frontend, CMS/e-commerce, backend/API, and development tools. The skills section supports category filtering.

### Experience

The career timeline covers roles in FinTech, payment gateways, WooCommerce, AdTech, rich-media advertisements, PHP, MySQL, React.js, and WordPress.

### Project Showcase

The project section includes professional and React project categories. Each project can open a modal with architecture details and impact, and projects with demo links can open them in a new tab.

### Digital Resume

The navigation bar opens a modal-based resume view containing the profile summary, skills, experience, education, and contact information.

## Featured Demo Projects

- [PixelCraft Studios](https://pixelcraft-react-website.vercel.app/)
- [AuraStore](https://aurastore-react.vercel.app/)
- [Interactive Kanban Board](https://todo-react-swart-tau.vercel.app/)

## Contact

- Email: [maheshbiradar010@gmail.com](mailto:maheshbiradar010@gmail.com)
- Phone: [+91 8668392182](tel:+918668392182)
- LinkedIn: [Mahesh Biradar](https://linkedin.com/in/mahesh-biradar-482a051b7)
- Location: Mumbai, India
