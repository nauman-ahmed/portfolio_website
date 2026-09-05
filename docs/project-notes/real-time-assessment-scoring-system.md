# Real Time Assessment Scoring System

**Stack:** React, Flask (py), MongoDB

> Extracted from the portfolio site during the phase 03 content pass.
> Kept here as project documentation; the site now carries a short overview only.

## General Information

The **Real Time Assessment Scoring System** is a web-based platform designed to streamline the process of conducting simulation-based learning, with two main user views: **student** and **admin**.

On the **student side**, users can register, edit their profiles, and enroll in simulations. Once registered, students download an Excel sheet containing simulation tasks, perform the necessary calculations, and upload the completed sheet. The system automatically processes the uploaded file, calculates scores based on predefined formulas, and provides instant feedback to the student.

On the **admin side**, admins can create and manage simulations by uploading Excel sheets, setting time limits, and monitoring student participation. They can view detailed reports, track student submissions, and manage all student data, including profile edits and score updates.

Built using **React** for the frontend, **Flask** for backend logic, and **MongoDB** for data management, the system offers an efficient and automated way to conduct and score simulations while providing real-time feedback to students and giving admins full control over the simulation process.

## Project Description

### 1. Student Side (User Interface):

**1.1. Student Registration:**

- Students can **register an account** by providing their personal details.

- Allow students to **edit their profile** information after registration.

**1.2. Simulation Registration:**

- Students can **register for a simulation** from a list of available simulations.

- Display available simulations, their deadlines, and any instructions.

**1.3. Download Simulation Excel Sheet:**

- Students can **download the simulation Excel file** uploaded by the admin.

- Ensure students can only download simulations they have registered for.

**1.4. Perform and Upload Calculations:**

- Students can complete the calculations on the downloaded Excel sheet.

- Enable students to **upload the completed Excel sheet** back into the system for scoring.

- Restrict uploads to only those students who are registered for the simulation.

**1.5. Scoring System:**

- The system will **automatically calculate the student’s score** based on the uploaded Excel file.

- Display the **score to the student** after calculation is complete.

**1.6. Simulation Time Limits:**

- Ensure that students cannot upload the simulation sheet after the **time limit expires**.

**1.7. Error Handling:**

- Display appropriate **error messages** if the uploaded Excel sheet is invalid or fails to meet required conditions (e.g., wrong format, missing fields).

---

### 2. Admin Side (Management Interface):

**2.1. Add Simulations:**

- The admin can **create new simulations** by uploading an Excel file.

- Assign a **time limit** to each simulation (start date, end date).

- Set parameters for **scoring logic** that will calculate student scores based on uploaded files.

**2.2. Track Participants:**

- The admin can **track all participants** who have registered for a particular simulation.

- See detailed participant information, including their **registration status**, time of upload, and scores.

**2.3. Restrict Uploads:**

- Enforce restrictions on student uploads based on the **simulation time limit**.

- Prevent students from uploading after the time window for the simulation has passed.

**2.4. View Simulation Results:**

- The admin can view **detailed results of each simulation**, including:

- List of participants.

- Their uploaded Excel sheets.

- Their calculated scores.

**2.5. Manage Student Information:**

- Allow the admin to **view and update all student details**, including their registration information and simulation history.

- The admin can also **edit or delete student profiles** if necessary.

**2.6. Simulation Status Management:**

- Admins can **change the status of a simulation** (e.g., open, closed).

- Control when a simulation is **active or inactive**, affecting whether students can participate.

**2.7. Scoring and Results Overview:**

- Admins can **view and modify scores** if required.

- Provide **downloadable reports** of simulation results, including scores and participant details.

## Technologies Used

**1. Frontend:**

- **React** for building the user interface for both student and admin views.

- Ensure **dynamic interaction** and seamless user experience using React components.

**2. Backend:**

- **Flask (Python)** as the web application framework for handling server-side logic and processing.

- **REST APIs** to enable communication between the frontend and backend, particularly for file uploads, score calculations, and fetching data.

**3. Database:**

- **MongoDB** for storing:

- Student data (profile, registration details).

- Simulation data (uploaded Excel files, results).

- Scores and participant information.

## Libraries Used

**1. @fortawesome/free-solid-svg-icons** and **@fortawesome/react-fontawesome**: Provides a collection of Font Awesome icons for React applications, allowing for rich iconography.

**2. @testing-library/jest-dom, @testing-library/react, @testing-library/user-event**: Testing utilities for React applications, useful for building test suites and simulating user interactions.

**3. antd**: Ant Design, a UI component library for React, providing a set of components for building a modern, professional-looking UI.

**4. axios**: For making HTTP requests, commonly used for API calls and data fetching.

**5. bootstrap** and **react-bootstrap**: CSS frameworks that provide responsive and pre-styled components for UI consistency and faster development.

**6. formik**: A library for building and managing forms in React, including validation, handling submissions, and managing form state.

**7. js-cookie**: Manages cookies on the client side, useful for storing session tokens and other small data.

**8. moment** and **moment-timezone**: Libraries for handling and manipulating dates and times, including timezone support.

**9. react** and **react-dom**: Core libraries for building and rendering user interfaces in React.

**10. react-icons**: Provides a set of popular icons as React components.

**11. react-router-dom**: Manages routing in single-page applications built with React.

**12. react-scripts**: Scripts and configuration for running and building React applications.

**13. react-table**: A library for creating data tables in React, supporting sorting, pagination, and filtering.

**14. react-toastify**: Provides customizable toast notifications in React applications.

**15. reactstrap**: Bootstrap components specifically for React, simplifying the integration of Bootstrap UI elements.

**16. recharts**: A charting library for React, offering a variety of customizable chart types for data visualization.

**17. web-vitals**: Provides metrics for measuring web performance, useful for optimization.

**18. xlsx** and **XlsxWriter**: Libraries for reading and writing Excel files, often used for importing and exporting data.

**19. yup**: A schema validation library often used with Formik for form validation in React applications.

### Backend Libraries:

**20. Flask**: A lightweight web framework for Python, used for handling backend logic and API endpoints.

**21. Flask-Cors**: Middleware to enable Cross-Origin Resource Sharing in Flask applications.

**22. Flask-PyMongo**: Integrates MongoDB with Flask, simplifying MongoDB interactions in Flask applications.

**23. gunicorn**: A WSGI HTTP server for running Python applications in production.

**24. mongoengine**: An ORM (Object-Relational Mapping) library for MongoDB, providing a structured way to work with MongoDB data.

**25. pymongo**: The official MongoDB driver for Python, used for connecting and interacting with MongoDB.

**26. openpyxl** and **et-xmlfile**: Libraries for reading and writing Excel files in Python, often used for data processing and analysis.

**27. numpy** and **pandas**: Essential libraries for data manipulation, analysis, and numerical calculations in Python.

**28. PyJWT**: Handles JSON Web Token (JWT) encoding and decoding, often used for user authentication.

**29. email_validator** and **dnspython**: Validates email addresses and handles DNS queries, adding an extra layer of validation.

**30. Werkzeug**: Provides utility functions and middleware for Flask, handling request/response management and security.

**31. Jinja2** and **MarkupSafe**: Templating libraries for generating HTML responses in Flask.

**32. pydantic**: A data validation and parsing library for Python, used for defining and validating data structures.

**33. python-dateutil**, **pytz**, and **tzdata**: Libraries for handling dates, times, and timezones in Python.
