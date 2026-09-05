# POS System

**Stack:** React, Node, MongoDB

> Extracted from the portfolio site during the phase 03 content pass.
> Kept here as project documentation; the site now carries a short overview only.

## General Information

The **POS System** of the system allows users to browse and select from a list of available products, with the option to search for specific items using a search bar. Selected products appear in a billing panel on the right side, where individual prices, quantities, and the total amount are automatically calculated and displayed. Users can adjust product quantities, with the total price updating dynamically. Discounts can be applied on individual products, showing a discounted price, and coupon codes can be entered at checkout, with automatic validation. If the coupon is valid, the discount applies to the total; if not, an error message appears. The final billing screen shows the total amount after discounts, with options to finalize the sale and either print or email the receipt.

On the **Admin Side (Management Interface)**, admins can manage product categories, create, edit, or remove products, and assign products to categories. Admins can also set product prices, descriptions, and available quantities. For discount management, admins can create, edit, or delete discount coupons, setting details like discount percentage, validity, and usage conditions, with options to track coupon usage and expiration. A daily sales overview provides a summary of total revenue, transaction count, and average transaction value, with filters for date, category, or product. The reporting section allows admins to view sales by category, product, or timeframe and to generate/export reports in formats like CSV or PDF. Finally, the user permissions feature lets admins create roles (e.g., cashier, manager) with specific permissions, controlling access to features such as report viewing or product modification.

## Project Description

### 1. User Side (Sales Interface):

**1. Product Selection:**

- Display a **list of available products** to the user.

- Enable users to **select products** by clicking or tapping.

- Allow users to **search for products** using a search bar.

**2. Billing Panel:**

- Display selected products in a **billing section** (right side of the interface).

- **Automatically calculate** and display the total amount of the selected products.

- Display the **individual prices** of selected products along with total quantity.

**3. Adjusting Quantities:**

- Enable users to **increase or decrease the quantity** of selected products.

- Update the **total price dynamically** based on quantity adjustments.

**4. Applying Discounts:**

- Allow users to **apply discounts** on individual products.

- Display a **discounted price** after applying the discount to a product.

**5. Coupon Codes:**

- Enable users to **enter discount coupon codes** at checkout.

- Automatically **validate the coupon code** and apply the discount to the total price.

- **Display an error message** if the coupon is invalid or expired.

**6. Final Billing:**

- Show the **final total amount** after discounts.

- Display an option to **finalize the sale** and process the transaction.

- Option to **print or email the receipt** after the sale.

---

### 2. Admin Side (Management Interface):

**1. Product and Category Management:**

- Allow the admin to **create and manage product categories**.

- Enable the admin to **add, edit, or remove products** from the system.

- Include functionality to **set prices**, descriptions, and available quantities for each product.

- Allow the admin to **assign products to categories**.

**2. Discount Coupon Management:**

- Allow the admin to **create, edit, or delete discount coupons**.

- Enable the admin to set **coupon details**, including discount percentage, validity period, and conditions (e.g., minimum purchase amount).

- Option to **track coupon usage** and expiration dates.

**3. Daily Sales Overview:**

- Display a **summary of daily sales** including total revenue, number of transactions, and average transaction value.

- Allow filtering sales by **date, category, or product**.

**4. Reporting Section:**

- Provide a **sales report** that breaks down sales by category, product, or time frame.

- Include an option to **generate and export reports** (e.g., CSV or PDF formats).

- Provide a **real-time view of current sales trends** and inventory levels.

**5. User Permissions:**

- Allow the admin to create **multiple user roles** (e.g., cashier, manager).

- Enable the admin to set **permissions** for each role, controlling access to different features (e.g., some users can only view reports, others can modify products).

## Technologies Used

**1. Frontend:**

- **React+Vite** for building the user interface, providing a responsive and dynamic experience for all users.

**2. Backend:**

- **Node.js** as the backend runtime environment to manage server-side logic.

- **REST APIs** to enable communication between the frontend and backend.

**3. Database:**

- **MongoDB** to store:

- Categories data

- Products

- Gift Coupon, user data, and order history

## Libraries Used

- **axios**: For making HTTP requests, commonly used for API interactions.

- **bcrypt**: For hashing passwords, adding a layer of security.

- **cors**: Enables Cross-Origin Resource Sharing, allowing API resources to be accessed from different origins.

- **dotenv**: Loads environment variables from a .env file, securing sensitive data.

- **express**: A web framework for Node.js, managing server-side routing and handling requests.

- **html-to-image**: Converts HTML elements to images, useful for capturing content as an image.

- **moment**: Provides date and time manipulation capabilities.

- **mongodb** and **mongoose**: Used for database management, with MongoDB as the database and Mongoose as an ORM.

- **multer**: Middleware for handling file uploads, primarily for images or other files.

- **nodemon**: A development tool that automatically restarts the server when file changes are detected.

- **puppeteer**: Headless browser automation, useful for generating PDFs or scraping data.

- **@reduxjs/toolkit**: State management for React applications using Redux.

- **antd**: Ant Design, a popular React UI library providing ready-made components.

- **bootstrap**: CSS framework for responsive and mobile-first design.

- **framer-motion**: Provides animations and transitions for React components.

- **react-jwt**: Handles decoding and managing JSON Web Tokens in React.

- **react-redux**: Connects React with Redux for state management.

- **react-toastify**: Enables toast notifications in React applications.

- **reactstrap**: Bootstrap components specifically for React.

- **redux**: Manages state in JavaScript applications, especially useful in React.
