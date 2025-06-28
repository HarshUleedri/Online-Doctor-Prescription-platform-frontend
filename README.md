# 🩺 MediConnect: Online Doctor Prescription Platform

MediConnect is a responsive and modern online prescription platform built for doctors and patients. It provides a seamless interface for user authentication, secure login/signup, and digital prescription management.

---

## 🚀 Features

- 🔐 Separate login/signup for Doctors and Patients
- 📄 Digital prescription creation and history
- 🧑‍⚕️ Doctor dashboard to manage patients and consultations
- 🧑‍💼 Patient dashboard to view prescriptions and request consultations
- 🧭 Protected routes and session handling
- 🌙 Modern, responsive UI using Tailwind CSS

---

## 🛠️ Tech Stack

- **Frontend Framework:** React + TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS
- **Routing:** React Router DOM
- **State Management:** Custom React Hooks and Global Store
- **Form Handling:** React Hook Form
- **HTTP Client:** Axios

---

## 📁 Project Structure

```
src/
│
├── components/          # Reusable UI components (buttons, inputs, layout, etc.)
├── pages/              # All main pages (Signup, Login, Dashboard, etc.)
│   ├── auth/           # Login/Signup pages for Doctors and Patients
│   ├── doctor/         # Doctor-specific pages
│   └── patient/        # Patient-specific pages
├── api/                # Axios instances, API service functions
├── store/              # Global state management (e.g., auth store)
├── routes/             # Route configuration (protected and public)
├── utils/              # Utility functions/helpers
├── assets/             # Images, icons, etc.
├── types/              # TypeScript type definitions
└── App.tsx             # Main application component
```

---

## 🔗 Routes

### Public Routes

| Path | Description |
|------|-------------|
| `/` | Home / Landing Page |
| `/doctor/login` | Doctor Login |
| `/doctor/signup` | Doctor Signup |
| `/patient/login` | Patient Login |
| `/patient/signup` | Patient Signup |

### Protected Routes

| Path | Description |
|------|-------------|
| `/doctor/dashboard` | Doctor Dashboard |
| `/doctor/prescriptions` | View/Create Prescriptions |
| `/doctor/patients` | Manage Patients |
| `/patient/dashboard` | Patient Dashboard |
| `/patient/prescriptions` | View Received Prescriptions |
| `/patient/consultations` | Request/View Consultations |

> 🔒 All protected routes check for authentication before rendering the page.

---

## 📦 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/mediconnect.git
cd mediconnect
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
```

### 3. Environment Setup

Create a `.env` file in the root directory:

```env
VITE_API_BASE_URL=http://localhost:3000/api
VITE_APP_NAME=MediConnect
```

### 4. Start Development Server

```bash
npm run dev
# or
yarn dev
```

The application will be available at `http://localhost:5173`

### 5. Build for Production

```bash
npm run build
# or
yarn build
```

### 6. Preview Production Build

```bash
npm run preview
# or
yarn preview
```

---

## 🧪 Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |
| `npm run lint:fix` | Fix ESLint errors |
| `npm run type-check` | Run TypeScript type checking |

---

## 🔧 Configuration

### Tailwind CSS

Tailwind is configured using `tailwind.config.ts`. You can extend it for custom themes:

```typescript
// tailwind.config.ts
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#3B82F6',
        secondary: '#10B981',
        // Add your custom colors
      }
    }
  },
  plugins: []
}
```

### TypeScript

Type definitions are organized in the `src/types/` directory:

```typescript
// src/types/user.ts
export interface Doctor {
  id: string;
  name: string;
  specialization: string;
  license: string;
}

export interface Patient {
  id: string;
  name: string;
  email: string;
  phone: string;
}
```

---

## 🔐 Authentication Flow

1. **User Registration:** Separate signup flows for doctors and patients
2. **Login:** JWT-based authentication
3. **Route Protection:** Private routes check for valid tokens
4. **Session Management:** Automatic token refresh and logout

---

## 📱 Responsive Design

The application is fully responsive and optimized for:

- 📱 Mobile devices (320px and up)
- 📱 Tablets (768px and up)
- 💻 Desktop (1024px and up)
- 🖥️ Large screens (1440px and up)

---

## ✏️ Developer Notes

- Always use TypeScript interfaces for API responses and form schemas
- Follow the established folder structure for consistency
- Use semantic commit messages (feat, fix, docs, style, refactor, test, chore)
- Implement proper error handling and loading states
- Test components before pushing to main branch
- Follow accessibility best practices (ARIA labels, keyboard navigation)

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'feat: add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---