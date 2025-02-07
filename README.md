# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Available Scripts

In the project directory, you can run:

### Installation

#### Clone the repository:

`git clone <repository-url>`

`cd <project-folder>`

#### Install dependencies:

`yarn install`

### Running the Development Server

To start the development server, run:

`yarn dev`

The app will be available at http://localhost:5173 by default.

### Build for Production

To create a production build, run:

`yarn build`

The output will be in the dist folder.

### The output will be in the dist folder.

To lint the project:

`yarn lint`

To format the code:

`yarn format`

### `yarn deploy`

Deploy the project into the gh-pages to update the live site

## Deployment

### `1. Commit and push changes on portfolio-app branch`

### `2. Open PR from portfolio-app to main branch and merge it`

### `3. Checkout to main branch and run 'yarn deploy'`

### `4. Go to gh-pages settings and add:`

    Add the https://michalismavromatakis.com/ domain in Custom domain in gihub/settings/Pages
    and CNAME file will be added to gh-pages branch

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
