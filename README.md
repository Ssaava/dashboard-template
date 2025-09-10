# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from "eslint-plugin-react-x";
import reactDom from "eslint-plugin-react-dom";

export default tseslint.config([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs["recommended-typescript"],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```

# komu-hms

## Template Documentation

This template provides a robust and scalable foundation for building modern web applications with React, TypeScript, and Vite. It includes a pre-configured dashboard layout, a responsive sidebar, and a collection of reusable UI components.

### Project Structure

The project is organized into a logical and maintainable structure:

- `public/`: Static assets.
- `src/`: Main application source code.
  - `assets/`: Images and other static assets used in the application.
  - `components/`: Reusable React components.
    - `sidebar/`: Components related to the application sidebar (e.g., `app-sidebar.tsx`, `nav-dropdown-link.tsx`).
    - `ui/`: Shadcn-like UI components (e.g., `avatar.tsx`, `button.tsx`, `input.tsx`).
  - `hooks/`: Custom React hooks for reusable logic (e.g., `use-mobile.ts`).
  - `layouts/`: Application layouts (e.g., `main-layout.tsx`).
  - `lib/`: Utility functions (e.g., `utils.ts`).
  - `routes/`: Application routing definitions (e.g., `dashboard-routes.tsx`, `home-routes.tsx`).
  - `store/`: State management (e.g., `store.ts`).
  - `App.tsx`: Main application component.
  - `index.css`: Global styles.
  - `main.tsx`: Entry point of the application.
  - `types.ts`: Global TypeScript type definitions.
  - `vite-env.d.ts`: Vite environment type definitions.

### Getting Started

Follow these steps to set up and run the project locally:

1.  **Clone the repository:**
    ```bash
    git clone [repository-url]
    cd dashboard-template
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    ```
3.  **Run the development server:**

    ```bash
    npm run dev
    ```

    This will start the Vite development server, and you can view the application in your browser, usually at `http://localhost:5173`.

4.  **Build for production:**
    ```bash
    npm run build
    ```
    This command bundles the application for production, outputting static files to the `dist` directory.

### Key Features

- **Dashboard Layout:** A pre-configured `main-layout.tsx` provides a consistent structure for your dashboard pages, including a header and a sidebar.
- **Responsive Sidebar:** The `app-sidebar.tsx` component offers a responsive navigation experience, adapting to different screen sizes.
- **UI Components:** A collection of accessible and customizable UI components in `src/components/ui/` to accelerate development.
- **Routing:** Organized routing with `react-router-dom` defined in `src/routes/` for easy navigation management.
- **State Management:** Basic state management setup in `src/store/store.ts` (you might want to integrate a more robust solution like Zustand, Redux, or Jotai for complex applications).
- **TypeScript:** Full TypeScript support for type safety and improved developer experience.
- **Vite:** Fast development server with Hot Module Replacement (HMR) and optimized build process.

### Customization

- **Styling:** Global styles are defined in `src/index.css`. You can extend or modify these styles to match your brand. For component-specific styling, consider using CSS modules or a CSS-in-JS library.
- **Theming:** The UI components are designed to be easily themeable. Refer to the `src/components/ui/` files for individual component styling and customization options.
- **Routes:** Modify `src/routes/dashboard-routes.tsx` and `src/routes/home-routes.tsx` to add, remove, or change application routes.
- **Sidebar Navigation:** Customize the sidebar links and structure by editing the components within `src/components/sidebar/`.
- **Components:** Extend existing UI components or create new ones in `src/components/` to build out your application's unique features.
