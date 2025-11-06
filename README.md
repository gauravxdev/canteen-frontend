# School Canteen Frontend

A modern web application for managing school canteen operations, built with React, TypeScript, and Vite.

## Features

- View and manage student information
- Browse available meals and snacks
- Track orders and meal plans
- Responsive design for all devices

## Prerequisites

- Node.js (v16 or higher)
- npm (v7 or higher) or yarn
- Git

## Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/school-canteen-frontend.git
   cd school-canteen-frontend
   ```

2. **Install dependencies**
   Using npm:
   ```bash
   npm install
   ```
   
   Or using yarn:
   ```bash
   yarn
   ```

3. **Environment Setup**
   Create a `.env` file in the root directory and add the following environment variables:
   ```env
   VITE_API_BASE_URL=http://your-backend-api-url
   # Add other environment variables as needed
   ```

4. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```
   The application will be available at `http://localhost:5173`

## Available Scripts

- `dev` - Start the development server
- `build` - Build the application for production
- `preview` - Preview the production build locally
- `lint` - Run ESLint
- `typecheck` - Check TypeScript types

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
