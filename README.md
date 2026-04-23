# ReactApp2 - Personal Portfolio Website

A modern, responsive portfolio website built with React and TypeScript, showcasing my projects, skills, and professional background.

## ��� Project Overview

This is a multi-page portfolio application created as part of Assignment 2 for MWD4C (React Development). The website features:

- **Home Page**: Introduction and overview of skills and expertise
- **Projects Page**: Showcase of sample projects with descriptions and technologies used
- **About Page**: Detailed background, education, skills, and goals
- **Contact Page**: Interactive contact form with validation

## ��� Technologies Used

- **React 19.2.5**: UI library for building component-based interfaces
- **TypeScript 6.0.2**: Type-safe JavaScript for better code quality
- **React Router DOM**: Client-side routing for multi-page navigation
- **Vite 8.0.10**: Fast build tool and development server
- **CSS3**: Custom styling with responsive design

## ��� Installation

1. Clone the repository:
```bash
git clone https://github.com/rukkybb85/ReactApp2.git
cd ReactApp2
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## ���️ Project Structure

```
ReactApp2/
├── src/
│   ├── components/         # Reusable components
│   │   ├── Navigation.tsx  # Site navigation component
│   │   └── Navigation.css
│   ├── pages/              # Page components
│   │   ├── Home.tsx        # Home/landing page
│   │   ├── Projects.tsx    # Projects showcase
│   │   ├── About.tsx       # About/background page
│   │   ├── Contact.tsx     # Contact form page
│   │   └── *.css          # Page-specific styles
│   ├── App.tsx            # Main app component with routing
│   ├── App.css            # Global styles
│   └── main.tsx           # Application entry point
├── public/                 # Static assets
├── package.json           # Dependencies and scripts
└── README.md             # Project documentation
```

## ��� Features

### Navigation
- Fixed navigation bar with active page highlighting
- Smooth transitions and hover effects
- Responsive design for mobile devices

### Home Page
- Hero section with introduction
- Skills overview cards
- Call-to-action buttons

### Projects Page
- Grid layout of project cards
- Technology tags for each project
- Links to demos and source code

### About Page
- Professional background and experience
- Timeline of education and career
- Categorized technical skills
- Personal goals and aspirations

### Contact Page
- Validated contact form with error messaging
- Name, email, subject, and message fields
- Contact information display
- Success notification on submission

## ��� Responsive Design

The website is fully responsive and optimized for:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (< 768px)

## ��� Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## ��� Code Quality

All code follows best practices:
- Comprehensive comments explaining functionality
- TypeScript interfaces for type safety
- Modular component architecture
- Clean, maintainable CSS
- Semantic HTML structure

## ��� Author

Created by a student at triOS College / Eastern College as part of the React Development course (MWD4C).

## ��� License

This project is created for educational purposes as part of Assignment 2.

## ��� Repository

GitHub: https://github.com/rukkybb85/ReactApp2.git

---

**Assignment**: MWD4C (React) - Assignment 2  
**Course**: React Development  
**Institution**: triOS College / Eastern College
