# Component Library App

This React app displays a list of categories and components, allowing users to search, filter, and view components based on category and search terms. 

## Features
- **Search Functionality**: Search for components by name.
- **Category Filtering**: Filter components by category.
- **Dynamic Category Display**: Only categories with at least one matching component are displayed when a search term is provided.
- **Component Count**: Displays the number of components in each category.
- **Responsive Design**: The app is responsive and adapts to various screen sizes.

## Data Structure

The components and categories are defined as follows:

```typescript
export interface Component {
    Name: string;
    Categories: string[];
}

export interface LibraryType {
    Components: Component[];
    Categories: string[];
}
```
## Installation

To get started with the app, follow these steps:

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/component-library.git
cd component-library
```
### 2. Install dependencies

```bash
npm install
```

### 2. Start the development server

```bash
npm run dev
```

## Running tests
To run the tests with Jest, use the following command:
```bash
npm test
```

## File Structure
- `src/components/Library`: Contains the main library component, which displays the list of categories and components.
- `src/components/CategoryList`: Displays the list of categories.
- `src/components/ComponentList`: Displays the list of components.
- `src/components/SearchBar`: The search bar used to filter components.
- `src/helpers/objectTransformations`: Utility functions to filter and transform data.

## Technologies Used

- React
- TypeScript
- Bootstrap (for responsive layout)
- Jest (for testing)
- Vite (for bundling and development)

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

