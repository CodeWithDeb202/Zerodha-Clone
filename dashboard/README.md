# Zerodha Clone Dashboard

This folder contains the protected trading dashboard for the Zerodha Clone project. It provides a Zerodha Kite-inspired interface where authenticated users can view market data, place simulated buy and sell orders, inspect holdings and positions, and review account information.

> This dashboard is an educational simulation. It is not affiliated with Zerodha, does not use live market prices, and cannot execute real financial trades.

## Dashboard Features

- Authentication check before dashboard access
- Automatic redirect to the login page when a session is invalid
- Personalized greeting and user avatar
- Dashboard navigation with active menu states
- Profile dropdown and logout
- Market index display
- Stock watchlist with price and movement indicators
- Hover actions for buying and selling stocks
- Simulated buy and sell order window
- MongoDB-backed orders, holdings, and positions
- Portfolio value and profit/loss calculations
- Holdings and watchlist charts
- User order statistics
- Funds interface

## Dashboard Routes

| Route | Page | Description |
| --- | --- | --- |
| `/` | Summary | Account greeting, margin, holdings, and P&L summary |
| `/orders` | Orders | List of submitted BUY and SELL orders |
| `/holdings` | Holdings | Current stock holdings, values, P&L, and sell actions |
| `/positions` | Positions | Current trading positions and profit/loss |
| `/funds` | Funds | Add-funds and withdrawal interface |
| `/app` | Profile | User details and order statistics |

## Technology Stack

- React
- Vite
- React Router
- Axios
- React Context API
- Material UI
- Material UI Icons
- Emotion
- Chart.js
- react-chartjs-2
- CSS
- ESLint

## Folder Structure

```text
dashboard/
|-- public/
|   `-- logo.png
|
|-- src/
|   |-- components/
|   |   |-- App.jsx                 # User profile and order statistics
|   |   |-- AuthContext.jsx         # Session verification and logout
|   |   |-- BuyActionWindow.jsx     # Buy/sell order form
|   |   |-- BuyActionWindow.css
|   |   |-- Dashboard.jsx           # Dashboard route definitions
|   |   |-- DoughnoutChart.jsx      # Watchlist doughnut chart
|   |   |-- Funds.jsx
|   |   |-- GeneralContext.jsx      # Order-window state
|   |   |-- Holdings.jsx
|   |   |-- Home.jsx                # Protected dashboard shell
|   |   |-- Menu.jsx
|   |   |-- Orders.jsx
|   |   |-- Positions.jsx
|   |   |-- Summary.jsx
|   |   |-- Topbar.jsx
|   |   |-- Verticalgraph.jsx       # Holdings bar chart
|   |   `-- Watchlist.jsx
|   |
|   |-- data/
|   |   `-- data.js                 # Sample watchlist market data
|   |
|   |-- index.css
|   `-- main.jsx
|
|-- eslint.config.js
|-- package.json
|-- vite.config.js
`-- README.md
```

## Prerequisites

Before running the dashboard, install:

- Node.js
- npm

The backend must be running at:

```text
http://localhost:5000
```

The public landing and authentication frontend should run at:

```text
http://localhost:5175
```

The user must sign up or log in through the frontend before opening the protected dashboard.

## Installation

From the project root:

```bash
cd dashboard
npm install
```

## Environment Variables

Create `dashboard/.env` if you want to override the address used when redirecting users to the public frontend:

```env
VITE_LANDING_URL=http://localhost:5175
```

The dashboard uses `http://localhost:5175` when this variable is not provided.

Do not commit `.env` files containing private values.

## Run the Dashboard

Start the Vite development server:

```bash
npm run dev
```

Open:

```text
http://localhost:5174
```

The Vite configuration uses port `5174` with `strictPort` enabled. Vite will report an error when this port is unavailable instead of choosing another port.

Keep the frontend, backend, and dashboard running together to use the complete authentication and trading flow.

## Available Scripts

```bash
npm run dev
```

Starts the Vite development server.

```bash
npm run build
```

Creates an optimized production build in `dist`.

```bash
npm run preview
```

Previews the production build locally.

```bash
npm run lint
```

Checks the dashboard source code with ESLint.

On Windows PowerShell systems where script execution is restricted, use `npm.cmd`:

```powershell
npm.cmd run dev
npm.cmd run build
```

## Authentication Flow

The dashboard is wrapped by `AuthProvider`.

1. When the application loads, `AuthContext` sends a request to `/verify`.
2. Axios uses `withCredentials: true` so the backend can read the JWT cookie.
3. If the cookie is valid, the authenticated user is stored in context.
4. While verification is running, the dashboard displays a session-checking message.
5. If verification fails, the browser redirects to the frontend login page.
6. The username is used in the summary, profile menu, and account page.
7. Logout sends a request to `/logout`, clears the local user, and redirects to the landing page.

### Authentication Endpoints

| Method | URL | Purpose |
| --- | --- | --- |
| `POST` | `http://localhost:5000/verify` | Verify the JWT authentication cookie |
| `POST` | `http://localhost:5000/logout` | Clear the authentication cookie |

## Trading Flow

### Placing an order

1. Move the pointer over a stock in the watchlist.
2. Select **Buy** or **Sell**.
3. `GeneralContext` opens the shared order window with the stock name, mode, and current sample price.
4. Enter the quantity and price.
5. Submit the order.
6. Axios sends the order to the backend.
7. The backend stores it in MongoDB.
8. BUY orders create or update a holding.
9. The order appears on the Orders page.

### Selling a holding

1. Open the Holdings page.
2. Select **Sell** for a holding.
3. The dashboard creates a SELL order.
4. The holding is removed through the backend.
5. Local state updates immediately.
6. The application navigates to the Orders page.

## Backend API Used by the Dashboard

| Method | Endpoint | Dashboard usage |
| --- | --- | --- |
| `POST` | `/verify` | Check the current user session |
| `POST` | `/logout` | Log the user out |
| `GET` | `/allOrders` | Display orders and profile statistics |
| `POST` | `/newOrder` | Submit BUY and SELL orders |
| `GET` | `/allHoldings` | Display current holdings |
| `DELETE` | `/holding/:id` | Remove a sold holding |
| `GET` | `/allPositions` | Display current positions |

## State Management

The dashboard uses two React contexts:

### `AuthContext`

Provides:

- `user`
- `isCheckingAuth`
- `logout()`

It controls authentication state and protects dashboard access.

### `GeneralContext`

Provides:

- `openBuyWindow(uid, mode, price)`
- `closeBuyWindow()`

It manages the shared buy/sell window without passing state through many component levels.

## Charts and Data Visualization

The dashboard uses Chart.js through `react-chartjs-2`.

- The watchlist displays a doughnut chart based on sample stock prices.
- The holdings page displays a vertical bar chart of holding prices.
- Chart elements, tooltips, legends, scales, and titles are registered in the chart components.

The watchlist data is currently stored locally in `src/data/data.js`. Holdings chart data comes from the backend response.

## What I Learned from the Dashboard

Building this dashboard helped me learn:

- Structuring a larger React application with reusable components
- Creating nested dashboard routes with React Router
- Protecting an application with an authentication context
- Sharing user information across components
- Redirecting unauthenticated users to a separate application
- Sending cookies with Axios using `withCredentials`
- Managing global interface state with the Context API
- Opening and closing a shared modal-style order window
- Passing stock names, prices, and order modes between components
- Fetching orders, holdings, and positions from a REST API
- Posting buy and sell orders to an Express backend
- Updating local state after deleting a holding
- Calculating current value and profit/loss from quantity and price
- Displaying database records in tables
- Applying conditional profit and loss styles
- Building charts with Chart.js and react-chartjs-2
- Using Material UI icons, tooltips, and transitions
- Creating profile statistics from order data
- Handling loading and API failure states
- Coordinating three local services on different ports

## Current Limitations

- Watchlist prices and market indices are static sample values.
- Orders are simulations and are not sent to a real exchange.
- Holdings and orders are not currently filtered by individual user.
- Some summary and funds values are static.
- The search input is visual and does not currently filter stocks.
- Analytics and more-action buttons do not yet open additional tools.
- API URLs are fixed to `http://localhost:5000`.
- The dashboard does not currently include automated tests.
- Production deployment and secure cross-site cookie settings are not configured.

## Future Improvements

- Move the backend API URL into a Vite environment variable
- Add live or sandbox market data
- Store orders and holdings separately for each authenticated user
- Add order validation and confirmation dialogs
- Add market, limit, stop-loss, and intraday order types
- Add working watchlist search and stock filtering
- Add loading indicators and user-facing API errors
- Calculate all summary and funds values from backend data
- Add responsive mobile and tablet layouts
- Improve accessibility and keyboard navigation
- Add component and end-to-end tests
- Add transaction history and order cancellation
- Add production deployment configuration

## Related Applications

This dashboard is one part of the complete repository:

- `../frontend` contains the landing website, signup, and login pages.
- `../backend` contains authentication, MongoDB models, and trading APIs.
- `../README.md` contains documentation for the complete project.

## Author

**Debabrata Andia**

- GitHub: [CodeWithDeb202](https://github.com/CodeWithDeb202)
