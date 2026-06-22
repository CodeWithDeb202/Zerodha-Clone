# Zerodha Clone Backend

This folder contains the Node.js and Express backend for the Zerodha Clone project. It provides user authentication, MongoDB persistence, session verification, and API endpoints used by the public frontend and trading dashboard.

> This backend supports an educational trading simulation. It does not connect to a real stock exchange or execute real financial transactions.

## Backend Features

- Express REST API
- MongoDB connection with Mongoose
- User registration and login
- Password hashing with bcrypt
- JWT authentication
- HTTP-only authentication cookies
- Session verification and logout
- CORS support for local frontend applications
- Order creation and retrieval
- Holdings creation, updating, retrieval, and deletion
- Positions retrieval
- Validation and API error responses

## Technology Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- JSON Web Token
- bcryptjs
- cookie-parser
- CORS
- dotenv
- body-parser
- Nodemon

## Folder Structure

```text
backend/
|-- controllers/
|   `-- AuthController.js       # Signup, login, and logout logic
|
|-- Middlewares/
|   `-- AuthMiddleware.js       # JWT cookie verification
|
|-- model/
|   |-- HoldingsModel.js
|   |-- OrdersModel.js
|   |-- PositionsModel.js
|   `-- UserModel.js
|
|-- Routes/
|   `-- AuthRoutes.js           # Authentication endpoint definitions
|
|-- schemas/
|   |-- HoldingsSchema.js
|   |-- OrdersSchema.js
|   |-- PositionsSchema.js
|   `-- UserSchema.js
|
|-- utils/
|   `-- SecretToken.js          # JWT creation helper
|
|-- .env                        # Local environment variables
|-- .gitignore
|-- index.js                    # Server setup and trading endpoints
|-- package.json
`-- README.md
```

## Prerequisites

Install the following:

- Node.js
- npm
- MongoDB locally or a MongoDB Atlas account

The public frontend normally runs at:

```text
http://localhost:5173
```

The trading dashboard normally runs at:

```text
http://localhost:5174
```

## Installation

From the project root:

```bash
cd backend
npm install
```

## Environment Variables

Create `backend/.env`:

```env
MONGO_URL=your_mongodb_connection_string
TOKEN_KEY=your_long_random_secret
PORT=5000
```

### Variable descriptions

| Variable | Required | Description |
| --- | --- | --- |
| `MONGO_URL` | Yes | MongoDB connection string |
| `TOKEN_KEY` | Recommended | Secret used to sign and verify JWTs |
| `PORT` | No | API port; defaults to `5000` |

Use a strong, private value for `TOKEN_KEY`. The source code contains a development fallback, but that fallback must not be used in production.

The `.env` file is ignored by Git and must not be committed.

## Run the Server

Start the backend with Nodemon:

```bash
npm start
```

The server connects to MongoDB before listening for requests.

When successful, the terminal displays:

```text
Connected MongoDB Successfully
Server is running on http://localhost:5000
```

If MongoDB cannot be reached within the configured timeout, the application logs the connection error and exits.

On Windows PowerShell systems where script execution is restricted, use:

```powershell
npm.cmd start
```

## Available Script

```bash
npm start
```

Runs:

```bash
nodemon index.js
```

Nodemon automatically restarts the server when backend files change.

## API Base URL

```text
http://localhost:5000
```

## Authentication Endpoints

### Create an account

```http
POST /signup
```

Example request:

```json
{
  "username": "Deb",
  "email": "deb@example.com",
  "password": "secret123"
}
```

Successful response:

```json
{
  "success": true,
  "message": "Signup successful",
  "user": {
    "id": "mongodb-user-id",
    "username": "Deb",
    "email": "deb@example.com"
  }
}
```

The endpoint:

- Requires a username, email, and password
- Rejects duplicate email addresses
- Applies Mongoose validation
- Hashes the password before saving
- Creates a JWT
- Sends the JWT in an HTTP-only cookie

### Log in

```http
POST /login
```

Example request:

```json
{
  "email": "deb@example.com",
  "password": "secret123"
}
```

The endpoint finds the user, compares the password with the stored bcrypt hash, and creates a new authentication cookie.

### Verify a session

```http
POST /verify
```

The endpoint:

- Reads the `token` cookie
- Verifies the JWT signature and expiration
- Finds the user in MongoDB
- Excludes the password from the response
- Returns an unauthorized response for missing or invalid tokens

Example successful response:

```json
{
  "status": true,
  "user": {
    "_id": "mongodb-user-id",
    "username": "Deb",
    "email": "deb@example.com"
  }
}
```

### Log out

```http
POST /logout
```

Clears the authentication cookie and returns a successful logout response.

## Trading Endpoints

| Method | Endpoint | Purpose |
| --- | --- | --- |
| `GET` | `/allHoldings` | Retrieve holdings |
| `DELETE` | `/holding/:id` | Delete a holding by MongoDB ID |
| `GET` | `/allPositions` | Retrieve positions |
| `POST` | `/newOrder` | Create a BUY or SELL order |
| `GET` | `/allOrders` | Retrieve all orders |

### Create an order

```http
POST /newOrder
```

Example request:

```json
{
  "name": "INFY",
  "qty": 2,
  "price": 1450.5,
  "mode": "BUY"
}
```

The server converts `qty` and `price` to numbers and converts `mode` to uppercase.

For a BUY order:

1. The order is stored in the Orders collection.
2. The server searches for an existing holding with the same stock name.
3. If the holding exists, its quantity and weighted average price are updated.
4. If it does not exist, a new holding is created.

Weighted average price:

```text
new average =
((old quantity * old average) + (new quantity * new price))
/ total quantity
```

For a SELL order, the order is stored. The dashboard separately calls the holding deletion endpoint when selling an entire holding.

### Delete a holding

```http
DELETE /holding/:id
```

Returns `404` when the requested holding does not exist.

## Database Models

### User

| Field | Type | Rules |
| --- | --- | --- |
| `username` | String | Required, trimmed, minimum 3 characters |
| `email` | String | Required, unique, lowercase, trimmed |
| `password` | String | Required, minimum 6 characters, stored as a hash |
| `createdAt` | Date | Added automatically |
| `updatedAt` | Date | Added automatically |

The User schema uses a Mongoose `pre("save")` hook to hash modified passwords with bcrypt using 12 salt rounds.

### Order

| Field | Type |
| --- | --- |
| `name` | String |
| `qty` | Number |
| `price` | Number |
| `mode` | String |

### Holding

| Field | Type |
| --- | --- |
| `name` | String |
| `qty` | Number |
| `avg` | Number |
| `price` | Number |
| `net` | String |
| `day` | String |

### Position

| Field | Type |
| --- | --- |
| `product` | String |
| `name` | String |
| `qty` | Number |
| `avg` | Number |
| `price` | Number |
| `net` | String |
| `day` | String |
| `isLoss` | Boolean |

## Cookie Configuration

The authentication cookie currently uses:

```js
{
  httpOnly: true,
  sameSite: "lax",
  secure: false,
  maxAge: 3 * 24 * 60 * 60 * 1000
}
```

- `httpOnly` prevents client-side JavaScript from reading the token.
- `sameSite: "lax"` provides basic cross-site request protection.
- `secure: false` allows local HTTP development.
- `maxAge` keeps the cookie for three days.

For production HTTPS deployment, use environment-specific cookie settings and set `secure: true`.

## CORS Configuration

The backend accepts:

- Requests without an Origin header, such as some API clients
- Localhost and `127.0.0.1` origins on any port
- `GET`, `POST`, `PUT`, and `DELETE` methods
- Credentialed requests containing cookies

The current CORS policy is intended for local development. Production should use an explicit allowlist of trusted deployed domains.

Frontend Axios requests that use authentication must include:

```js
{
  withCredentials: true
}
```

## Common Errors

### MongoDB connection error

Check:

- The `MONGO_URL` value
- MongoDB Atlas network access
- Database credentials
- Internet connection
- Whether a local MongoDB service is running

### No token found

Confirm that:

- The user completed signup or login
- Axios uses `withCredentials: true`
- The frontend origin is accepted by CORS
- Cookies are enabled in the browser

### Invalid token

The cookie may be expired, corrupted, or signed with a different `TOKEN_KEY`. Log in again after confirming the same key is used for token creation and verification.

### User already exists

Each email address must be unique. Log in with the existing account or use a different email.

## What I Learned from the Backend

Building this backend helped me learn:

- Creating an Express server and REST API
- Organizing backend code into routes, controllers, middleware, schemas, models, and utilities
- Connecting Node.js to MongoDB with Mongoose
- Creating schemas and models for application data
- Reading configuration values with dotenv
- Hashing passwords with bcrypt
- Comparing login passwords with stored hashes
- Creating and verifying JSON Web Tokens
- Storing authentication tokens in HTTP-only cookies
- Writing authentication middleware
- Returning appropriate HTTP status codes
- Handling duplicate database values and validation errors
- Configuring CORS for multiple local applications
- Sending and receiving credentialed browser requests
- Implementing BUY and SELL order workflows
- Updating holding quantities and weighted average prices
- Writing asynchronous database operations with `async` and `await`
- Handling database failures with `try` and `catch`
- Keeping secrets and dependencies out of Git
- Using Nodemon during backend development

## Current Limitations

- Orders, holdings, and positions are not associated with individual users.
- Trading endpoints are not currently protected by authentication middleware.
- Request validation for order values is limited.
- SELL orders do not support partial holding quantity updates.
- The frontend API address is configured for local development.
- The JWT development fallback must not be used in production.
- Cookie settings are intended for local HTTP use.
- CORS accepts any localhost port.
- There are no automated backend tests yet.
- There is no centralized error-handling middleware.
- Passport packages are installed but are not currently used by the implemented authentication flow.

## Future Improvements

- Associate every order, holding, and position with a user ID
- Protect trading routes with authentication middleware
- Validate requests with a dedicated validation library
- Support partial sales and prevent selling unavailable quantities
- Add MongoDB transactions for related order and holding updates
- Add order timestamps and status fields
- Add pagination, filtering, and sorting
- Add centralized error handling and structured logging
- Add rate limiting and security headers
- Use explicit production CORS origins
- Configure secure cookies for HTTPS deployment
- Add unit and integration tests
- Add API documentation with OpenAPI or Swagger
- Remove unused dependencies

## Related Applications

This backend is one part of the complete repository:

- `../frontend` contains the public website, signup, and login pages.
- `../dashboard` contains the protected trading dashboard.
- `../README.md` contains documentation for the complete project.

## Author

**Debabrata Andia**

- GitHub: [CodeWithDeb202](https://github.com/CodeWithDeb202)
