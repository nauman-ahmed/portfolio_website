# Stock Tracking App

**Stack:** React, Node, MongoDB

> Extracted from the portfolio site during the phase 03 content pass.
> Kept here as project documentation; the site now carries a short overview only.

## General Information

The **Stock Tracking Application** is a web-based platform that helps users track stocks that adhere to Shariah laws, offering both free and paid membership plans. Users can **sign up, sign in, and select between free or paid access**, with secure payment processing available for upgrades.

The app features a **stock search function** powered by the Yahoo API, allowing users to find stocks. Paid users gain additional benefits, such as the ability to create a **watchlist** for their selected stocks and provide **feedback notes** for personal tracking.

The application includes a **dashboard** tailored to each user type—free users can search stocks, while paid users have access to watchlist and feedback features. Other sections include **FAQ and Contact Us pages** for user support and a **Reviews section** for user testimonials.

Styled with the **Argon Design System by Creative Tim**, the app offers a cohesive, modern UI. Built with **React** on the frontend, a **Node.js backend with REST APIs**, and **MongoDB** for data management, the application provides a user-friendly experience for tracking compliant investments.

## Project Description

### 1. User Management:

**1. Sign-Up and Sign-In:**

- The system includes **sign-up and sign-in pages** for new and existing users.

- New users can create an account, while existing users can log in with their credentials.

- Users can choose between **free and paid membership plans** during sign-up.

**2. User Types and Access Control:**

- The application supports two user types: **Free** and **Paid**.

- **Free users** have limited access, while **paid users** have access to additional features like watchlists and feedback functionality.

**3. Payment Gateway Integration (Stripe):**

- Integrated **payment gateways** allow users to securely upgrade to paid membership plans.

- Payment plans are managed, allowing users to choose and pay for plans according to their requirements.

**4. Dashboard Access for Signed-Up Users:**

- Upon logging in, users access a **dashboard** that displays relevant information and accessible features based on their membership type.

---

### 2. Stock Search and Tracking:

**1. Stock Search Functionality (Yahoo API):**

- Users can search for **Stocks** using the **Yahoo API**.

- Search functionality is **restricted to logged-in users** only, providing an additional layer of control.

**2. Watchlist Feature (Paid Users Only):**

- **Paid users** can add specific stocks to a personal **watchlist** for easy tracking.

- Users can view, manage, and update their watchlist within their dashboard.

**3. User Feedback on Stocks:**

- Paid users can leave **feedback on specific stocks**, adding notes or personal insights.

- Feedback is saved and displayed within the user’s account for reference.

---

### 3. Additional User Features:

**1. FAQ and Contact Us Pages:**

- A **FAQ page** provides answers to common questions about the application and stocks.

- A **Contact Us page** allows users to send inquiries or feedback to the application support team.

**2. Reviews Section:**

- The application includes a **reviews section** where users can read testimonials or reviews from other users about the platform.

---

### 4. User Dashboard:

**1. Dashboard for Free Users:**

- Free users have access to a basic dashboard, allowing them to:

- Perform limited searches on stocks.

- View information on stocks but without the ability to save them.

**2. Dashboard for Paid Users:**

- Paid users access an enhanced dashboard with additional features, including:

- **Watchlist management** to add, view, and update stocks.

- **Feedback section** to leave notes on stocks they are tracking.

---

### 5. Theme and User Interface:

**1. UI Theme Implementation:**

- The application uses a design theme based on **Argon Design System by Creative Tim**.

- Consistent styling across pages (dashboard, search, FAQ, etc.) creates a unified look and feel.

## Technologies Used

**1. Frontend:**

- **React** for building the user interface, ensuring a dynamic and interactive experience.

**2. Backend and API Integration:**

- **Node.js** with **REST API** endpoints to handle user authentication, stock search functionality, and dashboard features.

- **Yahoo API** integration for retrieving stock data.

**3. Database:**

- **MongoDB** for managing user accounts, storing user feedback, managing watchlists, and tracking payment plan data.

## Libraries Used

Libraries used:

**1. @stripe/react-stripe-js** and **@stripe/stripe-js**: Integrates Stripe for handling secure payment processing on the frontend.

**2. bootstrap**: CSS framework for building responsive, mobile-first interfaces.

**3. classnames**: Utility for conditionally joining CSS class names in JavaScript.

**4. headroom.js**: Adds sticky header functionality that hides the header on scroll down and reveals it on scroll up.

**5. moment**: Library for handling and manipulating dates and times.

**6. nouislider**: Provides interactive slider components, useful for forms and data input.

**7. react** and **react-dom**: Core libraries for building and rendering user interfaces in React.

**8. react-chartjs-2**: Adds charting capabilities to React using Chart.js for data visualization.

**9. react-circular-progressbar**: Displays circular progress bars in React applications.

**10. react-datetime**: A date and time picker component for React.

**11. react-input-suggestions**: Provides suggestions as users type into an input field.

**12. react-modal**: Creates accessible modal dialogs in React applications.

**13. react-router-dom**: Manages routing in single-page applications built with React.

**14. react-scripts**: Scripts and configuration for running and building React applications.

**15. react-slick**: Implements carousels and sliders in React, based on the Slick carousel library.

**16. reactstrap**: Provides Bootstrap components specifically for React.

**17. sass**: A CSS preprocessor that adds advanced styling features and variables to CSS.

**18. sweetalert**: Creates popup alerts and notifications, with customizable styling.

### Backend Libraries:

**19. cors**: Middleware to enable Cross-Origin Resource Sharing, allowing API access from different domains.

**20. csv-reader** and **csv-writer**: Read from and write to CSV files, useful for importing and exporting data.

**21. dotenv**: Loads environment variables from a .env file, essential for managing sensitive data securely.

**22. express**: Web framework for Node.js, handling routing and middleware on the backend.

**23. fs** and **fs-extra**: Provides utilities for working with the file system, with additional features in **fs-extra**.

**24. mongoose**: An ODM (Object Data Modeling) library for MongoDB, used to manage and interact with MongoDB databases.

**25. stripe**: Official Stripe library for handling payment transactions on the backend.

**26. yahoo-finance** and **yahoo-finance2**: Fetch financial data from Yahoo Finance, useful for retrieving stock data in real-time.
