# Task Manager API

A RESTful API for managing tasks and users, built with **Node.js**, **Express**, **Prisma**, and **TypeScript**. Includes JWT-based authentication, task CRUD with filtering and pagination, rate limiting, and more.

## Setup & Installation

### Clone the Repository

```git clone https://github.com/yourusername/task-manager-api.git```
```cd task-manager-api ```

### Install Dependencies
``` npm install```

### Create a .env file
Create a .env file in the root directory and add:
```DATABASE_URL=mongodb+srv://<username>:<password>@<cluster>/<collection>?retryWrites=true&w=majority```
```JWT_SECRET=your_jwt_secret```

### Start the Development Server
```npm run dev```

Server will run on http://localhost:4000

Current Service URL: The application is live and running at https://task-manager-backend-vt6n.onrender.com/

---

# Deploying a Web Service on Render

This guide walks you through the steps required to deploy a Node.js web service on [Render](https://render.com/).

## Prerequisites
- A GitHub account with your project repository.
- A Render account (create one at [render.com](https://render.com) or log in if you already have an account).
- Your project should use Node.js and include scripts for building and starting the app (e.g., using `yarn`).

## Steps to Deploy

### 1. Create or Log In to Render
- Visit [https://render.com](https://render.com)
- Click **Sign Up** or **Log In** at the top right corner.

### 2. Create a New Web Service
- Once logged in, click **New** at the top right of the Render dashboard.
- Select **Web Service** from the dropdown.

### 3. Connect Your Repository
- Choose a Git repository from GitHub or another connected Git provider.
- Authorize access if prompted.

### 4. Configure Your Web Service
Fill in the following fields accordingly:

- **Name**: Provide a meaningful name for your service (e.g., `my-node-app`).
- **Environment**: Select **Node** as the runtime environment.
- **Branch**: Choose the branch to deploy from (e.g., `main` or `dev`).
- **Root Directory**: Leave this field **blank** unless your code is inside a subfolder.

### 5. Define Build and Start Commands
- **Build Command**:  
  ```bash
  yarn install && yarn build
  ```
- **Start Command**:  
  ```bash
  yarn start
  ```

### 6. Set Environment Variables
- Scroll down to the **Environment** section.
- Add all necessary environment variables (API keys, secrets, etc.) as needed for your app.

### 7. Deploy the Web Service
- Click **Create Web Service** to start the deployment process.
- Render will begin building and deploying your app. Once complete, your service will be live at the generated Render URL.

---

Note: Render's free tier services automatically spin down after 15 minutes of inactivity. If the service has been idle, it may take 3 to 4 minutes to restart when you make a request. Please be patient while the server resumes operation.
