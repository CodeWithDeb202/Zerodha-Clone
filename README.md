# Zerodha Clone

A full-stack stock trading platform inspired by Zerodha, built as a major web development project. It includes a public landing website, user authentication, a protected trading dashboard, portfolio views, order management, and data visualization.

> This project was created for learning and portfolio purposes. It is not affiliated with Zerodha and must not be used for real financial trading.

## Project Overview

The application is divided into three parts:

- **Frontend** - the public website, product pages, pricing, support, signup, and login
- **Dashboard** - the protected trading interface for orders, holdings, positions, funds, and user information
- **Backend** - the Express API, authentication logic, MongoDB models, and trading data endpoints

The frontend runs on port `5173`, the dashboard on port `5174`, and the backend on port `5000`.

## Features

### Landing website

- Responsive Zerodha-inspired home page
- About, products, pricing, and support pages
- Shared navigation bar and footer
- Signup and login forms
- Client-side form validation
- Toast notifications for success and error messages
- Custom 404 page

### Authentication

- User registration and login
- Password hashing with bcrypt
- JWT-based authentication
- HTTP-only authentication cookie
- Protected dashboard access
- Session verification when the dashboard loads
- Logout functionality
- Duplicate-email and validation error handling

### Trading dashboard

- Personalized dashboard greeting
- Watchlist interface
- Buy and sell order windows
- Orders table with BUY/SELL status
- MongoDB-backed holdings and positions
- Automatic holding creation and quantity updates after a buy order
- Holding removal and sell-order creation
- Portfolio profit and loss calculations
- User profile and order statistics
- Holdings and portfolio charts

### Testing

- Component testing with Vitest
- DOM testing with React Testing Library
- jest-dom matchers
- jsdom test environment
- Tests for the home hero image and signup button

## Technology Stack

### Frontend and dashboard

- React
- Vite
- React Router
- Axios
- React Toastify
- Material UI
- Chart.js
- react-chartjs-2
- CSS and Bootstrap-style utility classes

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JSON Web Token
- bcryptjs
- cookie-parser
- CORS
- dotenv
- Nodemon

### Testing and development

- Vitest
- React Testing Library
- jest-dom
- jsdom
- ESLint
- Git and GitHub

## Project Structure

```text
Zerodha Clone/
|-- backend/
|   |-- controllers/       # Signup, login, and logout logic
|   |-- Middlewares/       # JWT cookie verification
|   |-- model/             # Mongoose models
|   |-- Routes/            # Authentication routes
|   |-- schemas/           # User, order, holding, and position schemas
|   |-- utils/             # JWT creation helper
|   `-- index.js           # Express server and trading API routes
|
|-- dashboard/
|   |-- public/
|   `-- src/
|       |-- components/    # Dashboard, watchlist, orders, charts, etc.
|       |-- data/          # Sample market data
|       `-- main.jsx
|
|-- frontend/
|   |-- public/media/      # Images and visual assets
|   `-- src/
|       |-- landing_page/  # Public pages and authentication UI
|       |-- test/          # Component tests
|       `-- main.jsx
|
`-- README.md
```

## Getting Started

### Prerequisites

Install the following before running the project:

- Node.js
- npm
- MongoDB locally or a MongoDB Atlas account
- Git

### 1. Clone the repository

```bash
git clone https://github.com/CodeWithDeb202/Zerodha-Clone.git
cd "Zerodha Clone"
```

### 2. Configure the backend

Create `backend/.env`:

```env
MONGO_URL=your_mongodb_connection_string
TOKEN_KEY=your_long_random_secret
PORT=5000
```

Do not commit the `.env` file or expose real credentials.

Install and start the backend:

```bash
cd backend
npm install
npm start
```

The API will run at:

```text
http://localhost:5000
```

### 3. Start the public frontend

Open another terminal:

```bash
cd frontend
npm install
npm run dev
```

The landing website will run at:

```text
http://localhost:5173
```

The frontend optionally supports this environment variable in `frontend/.env`:

```env
VITE_DASHBOARD_URL=http://localhost:5174
```

### 4. Start the dashboard

Open another terminal:

```bash
cd dashboard
npm install
npm run dev
```

The dashboard will run at:

```text
http://localhost:5174
```

The dashboard optionally supports this environment variable in `dashboard/.env`:

```env
VITE_LANDING_URL=http://localhost:5173
```

Keep all three services running while using the complete application.

### Run all services with one command

After installing the dependencies, run this command from the project root:

```bash
npm run dev
```

It starts the backend, frontend, and dashboard together with labeled terminal output.

To install dependencies for the root and all three applications at once, run:

```bash
npm run install:all
```

Press `Ctrl + C` to stop all services.

If port `5000`, `5173`, or `5174` is already in use, stop the existing server before running the combined command.

## Available Scripts

### Frontend

```bash
npm run dev       # Start the Vite development server
npm run build     # Create a production build
npm run lint      # Run ESLint
npm test          # Run Vitest in watch mode
npm test -- --run # Run the tests once
npm run preview   # Preview the production build
```

### Dashboard

```bash
npm run dev
npm run build
npm run lint
npm run preview
```

### Backend

```bash
npm start
```

## API Endpoints

| Method | Endpoint | Purpose |
| --- | --- | --- |
| `POST` | `/signup` | Register a user and create an auth cookie |
| `POST` | `/login` | Authenticate a user |
| `POST` | `/verify` | Verify the logged-in session |
| `POST` | `/logout` | Clear the authentication cookie |
| `GET` | `/allHoldings` | Fetch all holdings |
| `DELETE` | `/holding/:id` | Remove a holding |
| `GET` | `/allPositions` | Fetch all positions |
| `POST` | `/newOrder` | Place a BUY or SELL order |
| `GET` | `/allOrders` | Fetch all orders |

## What I Learned

This project helped me understand how separate frontend applications and a backend API work together as one complete product. The main things I learned include:

- Breaking a large React application into reusable components
- Building multi-page navigation with React Router
- Managing forms and interface state with React hooks
- Sending API requests and handling asynchronous operations with Axios
- Creating REST API endpoints with Express
- Designing MongoDB schemas and accessing data through Mongoose models
- Registering users and validating login credentials
- Hashing passwords instead of storing plain-text passwords
- Creating and verifying JWTs
- Using HTTP-only cookies for authentication
- Protecting a dashboard and redirecting unauthenticated users
- Configuring CORS for communication between multiple local applications
- Implementing basic BUY and SELL order workflows
- Updating holdings after an order is placed
- Displaying database data in tables and charts
- Calculating portfolio values and profit/loss
- Showing useful loading, success, and error states
- Writing component tests with Vitest and React Testing Library
- Using `MemoryRouter` when testing components that contain router links
- Using accessible queries such as `getByRole` and `getByAltText`
- Keeping tests isolated with DOM cleanup
- Debugging JSX, test configuration, routing context, and dependency issues
- Managing source code and project history with Git and GitHub

## Current Limitations

- Stock prices are sample values and are not connected to a live market API.
- Orders simulate a trading workflow and do not execute real trades.
- Some dashboard summary values are static.
- API URLs are currently configured for local development.
- Authentication cookie settings are intended for local HTTP development.
- The project currently has a small test suite and needs broader test coverage.
- Production deployment configuration is not included yet.

## Future Improvements

- Connect to a live or sandbox market-data API
- Add user-specific holdings, positions, and orders
- Add order validation and transaction handling
- Add search, sorting, filtering, and pagination
- Improve mobile responsiveness and accessibility
- Move all API base URLs into environment variables
- Add backend validation and centralized error handling
- Add unit, integration, and end-to-end tests
- Add password reset and email verification
- Configure secure cookies before any future deployment
- Add loading skeletons and better API error states

## Author

**Debabrata Andia**

- GitHub: [CodeWithDeb202](https://github.com/CodeWithDeb202)

## Disclaimer

This is an independent educational project inspired by Zerodha's product design. Zerodha's name, branding, and assets belong to their respective owners. This application does not provide financial advice, brokerage services, or real trading functionality.
