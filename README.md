# S7 Restaurant

A modern and interactive restaurant web application frontend built with React, Vite, and Material-UI.

## Features

- **Modern User Interface:** Built with Material-UI and Emotion for responsive, accessible, and beautiful components.
- **Form Handling & Validation:** Utilizes React Hook Form and Yup for robust form data management and validation (e.g., for reservations or orders).
- **Animations:** Features smooth, dynamic transitions and animations powered by Framer Motion and GSAP.
- **PDF Generation:** Capabilities to generate and download PDFs using `html2pdf.js` and `jspdf` (e.g., for menus, invoices, or receipts).
- **Interactive Carousels:** Interactive image sliders and carousels using Swiper.
- **Routing:** Seamless single-page navigation with React Router DOM.
- **Date Handling:** Efficient date and time manipulation using Day.js for scheduling and reservations.

## Tech Stack

- **Framework:** React 19
- **Build Tool:** Vite
- **Styling:** Material-UI (MUI), @emotion
- **Animations:** Framer Motion, GSAP
- **Forms:** React Hook Form, Yup
- **Routing:** React Router DOM
- **Utilities:** Day.js, Swiper, html2pdf.js, jsPDF

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn package manager

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url> # replace with actual URL
   ```
   
2. Navigate to the project directory:
   ```bash
   cd s7-restaurant
   ```

3. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

4. Install dependencies:
   ```bash
   npm install
   ```

### Running the Application Locally

To start the development server, run:
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser to view the application.

### Building for Production

To build the application for production, run:
```bash
npm run build
```
This will compile and bundle the React code into the `frontend/dist` directory, ready to be deployed.