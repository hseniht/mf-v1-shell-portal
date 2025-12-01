# Shell Portal

A micro-frontend shell portal application built with React and Vite, using Module Federation for scalable component composition.

## Overview

This project serves as the shell/host application in a micro-frontend architecture, enabling dynamic loading and coordination of remote modules. It provides a minimal but powerful setup with React, Vite, HMR (Hot Module Replacement), and ESLint configuration.

## Tech Stack

- **React** 19.2.0 - UI library
- **Vite** 7.2.2 - Next-generation build tool and dev server
- **Module Federation** (@originjs/vite-plugin-federation) - Micro-frontend architecture support
- **ESLint** 9.39.1 - Code quality and style enforcement

## Getting Started

### Prerequisites

- Node.js (v16 or higher recommended)
- npm or yarn

### Installation

```bash
npm install
```

### Development

Start the development server with hot module replacement:

```bash
npm run dev
```

The application will be available at `http://localhost:5173` (or your configured Vite port).

### Build

Create a production-ready build:

```bash
npm run build
```

### Preview

Preview the production build locally:

```bash
npm run preview
```

The preview will run on `http://localhost:3000`.

### Linting

Run ESLint to check code quality:

```bash
npm run lint
```

## Project Structure

```
shell-portal/
├── src/
│   ├── App.jsx          # Main application component
│   ├── main.jsx         # React entry point
│   ├── App.css          # Application styles
│   ├── index.css        # Global styles
│   └── assets/          # Static assets
├── public/              # Public static files
├── vite.config.js       # Vite configuration
├── eslint.config.js     # ESLint configuration
└── package.json         # Project dependencies and scripts
```

## Configuration

### Vite Configuration

See `vite.config.js` for build and dev server configuration, including Module Federation settings.

### ESLint Configuration

See `eslint.config.js` for linting rules and code quality standards.

## Module Federation

This application uses Module Federation via `@originjs/vite-plugin-federation` to enable micro-frontend architecture. Configure remote modules in the `vite.config.js` file.

## Performance

- **Hot Module Replacement (HMR)**: Fast development feedback with preserved component state
- **Fast Refresh**: React-specific HMR for optimized developer experience
- **Optimized Bundling**: Vite's built-in tree-shaking and code splitting

## Best Practices

- Use ESLint to maintain code quality before committing
- Leverage Vite's dev server for fast feedback during development
- Configure Module Federation carefully to avoid circular dependencies
- Test micro-frontend interactions before deployment

## Troubleshooting

### Port Already in Use
If port 5173 is already in use during development, Vite will automatically use the next available port.

### Module Federation Issues
Ensure that remote modules are properly configured and accessible. Check the Vite config and network connectivity.

## Additional Resources

- [Vite Documentation](https://vitejs.dev)
- [React Documentation](https://react.dev)
- [Module Federation Guide](https://webpack.js.org/concepts/module-federation/)
- [ESLint Documentation](https://eslint.org/docs/latest/)
