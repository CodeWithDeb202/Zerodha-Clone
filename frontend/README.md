# Zerodha Clone Frontend

This folder contains the public-facing React application for the Zerodha Clone project. It introduces the platform, presents its products and pricing, provides support information, and allows users to create an account or log in before entering the separate trading dashboard.

> This application is an educational clone created for learning and portfolio purposes. It is not affiliated with Zerodha and does not support real financial trading.

## Frontend Features

- Zerodha-inspired responsive landing page
- Shared navigation bar and footer
- Home, About, Products, Pricing, and Support pages
- Signup and login forms
- Client-side form validation
- Backend authentication integration with Axios
- HTTP-only cookie support through credentialed requests
- Toast notifications for success and error messages
- Redirect to the trading dashboard after successful authentication
- Custom page for unknown routes
- Component tests using Vitest and React Testing Library

## Routes

| Route | Page | Description |
| --- | --- | --- |
| `/` | Home | Main landing page and platform introduction |
| `/signup` | Signup | Create a new user account |
| `/login` | Login | Log in with an existing account |
| `/about` | About | Company and team information |
| `/product` | Products | Trading products and platform ecosystem |
| `/pricing` | Pricing | Pricing and brokerage information |
| `/support` | Support | Help topics and ticket categories |
| `*` | Not Found | Fallback page for invalid routes |

## Technology Stack

- React
- Vite
- React Router
- Axios
- React Toastify
- CSS
- Vitest
- React Testing Library
- jest-dom
- jsdom
- ESLint

## Folder Structure

```text
frontend/
|-- public/
|   |-- media/images/          # Logos, illustrations, and page assets
|   `-- logo.png
|
|-- src/
|   |-- landing_page/
|   |   |-- about/             # About page components
|   |   |-- home/              # Home page components
|   |   |-- pricing/           # Pricing page components
|   |   |-- product/           # Product page components
|   |   |-- signup/            # Signup, login, and auth styles
|   |   |-- support/           # Support page components
|   |   |-- Footer.jsx
|   |   |-- Navbar.jsx
|   |   |-- NotFoundPage.jsx
|   |   `-- OpenAccount.jsx
|   |
|   |-- test/
|   |   `-- Hero.test.jsx      # Home Hero component tests
|   |
|   |-- index.css
|   `-- main.jsx               # Application routes and entry point
|
|-- eslint.config.js
|-- package.json
|-- vite.config.js
`-- README.md
```

## Prerequisites

Before running the frontend, install:

- Node.js
- npm

For signup and login to work, the project backend must also be running at:

```text
http://localhost:5000
```

The trading dashboard should run at:

```text
http://localhost:5174
```

## Installation

From the project root:

```bash
cd frontend
npm install
```

## Environment Variables

Create a `frontend/.env` file if you want to override the default dashboard address:

```env
VITE_DASHBOARD_URL=http://localhost:5174
```

The application uses `http://localhost:5174` when this variable is not provided.

Do not commit `.env` files containing private values.

## Run the Application

Start the Vite development server:

```bash
npm run dev
```

Open:

```text
http://localhost:5173
```

The Vite configuration uses port `5173` with `strictPort` enabled. The application will report an error instead of silently selecting another port when `5173` is already occupied.

## Available Scripts

```bash
npm run dev
```

Starts the development server with hot module replacement.

```bash
npm run build
```

Creates an optimized production build in the `dist` directory.

```bash
npm run preview
```

Serves the production build locally for inspection.

```bash
npm run lint
```

Checks the frontend source code with ESLint.

```bash
npm test
```

Starts Vitest in watch mode.

```bash
npm test -- --run
```

Runs the test suite once and exits.

On Windows PowerShell systems where script execution is restricted, use `npm.cmd`:

```powershell
npm.cmd run dev
npm.cmd test -- --run
```

## Authentication Flow

1. A user opens the signup or login page.
2. The form validates the entered values in the browser.
3. Axios sends the request to the Express backend.
4. The request uses `withCredentials: true` so the browser can receive the authentication cookie.
5. The backend validates the user and creates an HTTP-only JWT cookie.
6. A toast message reports success or failure.
7. After successful authentication, the browser redirects to the dashboard.

### Authentication API Requests

| Method | URL | Purpose |
| --- | --- | --- |
| `POST` | `http://localhost:5000/signup` | Create an account |
| `POST` | `http://localhost:5000/login` | Log in to an account |

## Testing

The frontend test environment is configured in `vite.config.js`:

```js
test: {
  environment: 'jsdom',
}
```

The current `Hero.test.jsx` suite checks that:

- The home hero image is displayed.
- The image has the expected source.
- The signup button is displayed.
- The signup button has the expected CSS class.

`MemoryRouter` provides routing context because the Hero component contains a React Router `Link`.

DOM cleanup runs after each test so rendered elements from one test do not affect another test.

Run the tests with:

```bash
npm test -- --run
```

## What I Learned from the Frontend

Building this frontend helped me learn:

- Creating reusable React components
- Organizing components by page and feature
- Configuring a React application with Vite
- Building routes with React Router
- Creating shared layout components such as a navbar and footer
- Managing form values and loading states with `useState`
- Validating usernames, email addresses, and passwords
- Sending asynchronous HTTP requests with Axios
- Handling backend responses and API errors
- Sending cookies through cross-origin requests
- Displaying user feedback with React Toastify
- Redirecting users between separate frontend applications
- Working with assets from Vite's `public` directory
- Styling authentication pages and reusable sections with CSS
- Building a custom fallback page for invalid URLs
- Configuring Vitest with a jsdom browser environment
- Testing React components with React Testing Library
- Querying elements accessibly with `getByRole` and `getByAltText`
- Providing router context during component tests
- Keeping tests isolated with cleanup
- Debugging JSX file extensions, test imports, and DOM query errors

## Current Limitations

- The backend URL is currently fixed to `http://localhost:5000`.
- The frontend depends on separately running backend and dashboard applications.
- Only the Hero component currently has automated tests.
- Some page content and visual assets are based on the original Zerodha website.
- Production deployment settings have not been added.
- More accessibility and responsive-design testing is needed.

## Future Improvements

- Move the backend API URL into a Vite environment variable
- Add tests for signup, login, routing, navbar, and other pages
- Mock API requests in authentication tests
- Add loading skeletons and more detailed error states
- Improve accessibility and keyboard navigation
- Add stronger mobile responsiveness
- Create reusable form input components
- Add end-to-end tests for signup and login
- Add deployment configuration

## Related Applications

This frontend is one part of the complete repository:

- `../backend` contains the Express and MongoDB API.
- `../dashboard` contains the protected trading dashboard.
- `../README.md` contains documentation for the complete project.

## Author

**Debabrata Andia**

- GitHub: [CodeWithDeb202](https://github.com/CodeWithDeb202)
