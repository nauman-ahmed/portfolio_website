import React, { useState } from 'react'
import ProjectBox from '../components/ProjectBox'
import { GrReactjs } from "react-icons/gr";
import { SiFlask } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiD3Dotjs } from "react-icons/si";
import { SiPostgresql } from "react-icons/si";
import { SiTypescript } from "react-icons/si"; 
import { SiJest } from "react-icons/si";

const allTechs = [
    { name: 'React', icon: <GrReactjs className='mx-1 ' /> }, 
    { name: 'TypeScript', icon: <SiTypescript className='mx-1 ' /> }, 
    { name: 'Jest', icon: <SiJest className='mx-1 ' /> }, 
    { name: 'Flask (py)', icon: <SiFlask className='mx-1 ' /> }, 
    { name: 'Node', icon: <FaNodeJs className='mx-1 ' /> }, 
    { name: 'MongoDB', icon: <SiMongodb className='mx-1 ' /> }, 
    { name: 'PostgreSQL', icon: <SiPostgresql className='mx-1 ' /> }, 
    { name: 'D3.js', icon: <SiD3Dotjs className='mx-1 ' /> }
]

const projectsData = [
    {
        "title": "To-Do App",
        "videoPath": "/videos/todoAppDemo.mp4",
        "techs": ["React", "Zustand", "TypeScript", "Tailwind CSS"],
        "modalsArray": [
          {
            "btnText": "Info",
            "title": "General Information",
            "content": `
              <p>The <strong>To-Do App</strong> is a modern task management application built using React, Zustand for state management, TypeScript for type safety, and Tailwind CSS for styling. It provides an intuitive interface for creating, managing, and completing tasks.</p>
              <p>Users can add new tasks, mark tasks as completed or incomplete, and delete tasks. The app features a clean and responsive design optimized for both desktop and mobile devices.</p>
            `
          },
          {
            "btnText": "Description",
            "title": "Project Description",
            "content": `
              <h4>1. TodoInput Component:</h4>
              <ul>
                <li>Allows users to input new tasks.</li>
                <li>Validates input to prevent empty task entries.</li>
                <li>Provides a responsive layout with an input field and an "Add" button.</li>
              </ul>
              
              <h4>2. TodoList Component:</h4>
              <ul>
                <li>Displays the list of tasks dynamically based on the store's state.</li>
                <li>Allows users to toggle a task's completed state by clicking on it.</li>
                <li>Includes a "Remove" button for deleting tasks, with hover effects.</li>
              </ul>
              
              <h4>3. Zustand Store:</h4>
              <ul>
                <li>Manages the state of the application, including the task list.</li>
                <li>Provides actions for adding, toggling, and removing tasks.</li>
                <li>Uses efficient state management techniques to ensure seamless updates.</li>
              </ul>
            `
          },
          {
            "btnText": "Tech",
            "title": "Technologies Used",
            "content": `
              <p><strong>Frontend:</strong></p>
              <ul>
                <li><strong>React:</strong> For building the user interface with reusable components.</li>
                <li><strong>TypeScript:</strong> For adding static typing and ensuring reliable code.</li>
                <li><strong>Tailwind CSS:</strong> For responsive and modern utility-first styling.</li>
              </ul>
              
              <p><strong>State Management:</strong></p>
              <ul>
                <li><strong>Zustand:</strong> For managing the state of the to-do list with lightweight efficiency.</li>
              </ul>
            `
          },
          {
            "btnText": "Libraries",
            "title": "Libraries Used",
            "content": `
              <ul>
                <li><strong>Zustand:</strong> For state management in the to-do application.</li>
                <li><strong>Tailwind CSS:</strong> For styling the input and list components.</li>
                <li><strong>React:</strong> Core library for building the user interface.</li>
                <li><strong>React Testing Library:</strong> For writing and running tests on the app's functionality.</li>
              </ul>
            `
          }
        ]
    },
          
    {
        "title": "Calculator App",
        videoPath: "/videos/calculatorDemo.mp4",
        "techs": ["React", "Zustand", "TypeScript", "Tailwind CSS", "Jest"],
        "modalsArray": [
          {
            "btnText": "Info",
            "title": "General Information",
            "content": `
              <p>The <strong>Calculator App</strong> is a responsive, modern calculator built using React, Zustand for state management, TypeScript for type safety, and Tailwind CSS for styling. It provides a basic calculator interface and a history log feature to recall past calculations.</p>
              <p>Users can perform standard arithmetic operations, view their calculation history, and restore results from the history log. The app also features smooth animations and user-friendly controls.</p>
            `
          },
          {
            "btnText": "Description",
            "title": "Project Description",
            "content": `
              <h4>1. Calculator Component:</h4>
              <ul>
                <li>Provides a user interface for arithmetic operations.</li>
                <li>Features a grid layout for buttons and a display area for showing calculations and results.</li>
                <li>Includes essential buttons for digits, operations, clear functionality, and accessing history.</li>
              </ul>
              
              <h4>2. History Component:</h4>
              <ul>
                <li>Displays a list of past calculations in a visually appealing card.</li>
                <li>Allows users to click on a previous calculation to restore its result.</li>
                <li>Features smooth animations for showing and hiding the history log.</li>
              </ul>
              
              <h4>3. CalculatorBox Component:</h4>
              <ul>
                <li>Serves as a container to manage the visibility and interaction between Calculator and History components.</li>
                <li>Uses useState for toggling the history view.</li>
                <li>Ensures clean and modular architecture by separating concerns.</li>
              </ul>
              
              <h4>4. Zustand Store:</h4>
              <ul>
                <li>Handles application state, including the current display and calculation history.</li>
                <li>Provides actions to append values, clear the display, calculate results, and restore previous calculations.</li>
              </ul>
            `
          },
          {
            "btnText": "Tech",
            "title": "Technologies Used",
            "content": `
              <p><strong>Frontend:</strong></p>
              <ul>
                <li><strong>React:</strong> For building the user interface with functional components.</li>
                <li><strong>TypeScript:</strong> For adding static typing and ensuring robust, error-free code.</li>
                <li><strong>Tailwind CSS:</strong> For responsive, modern, and utility-first styling.</li>
              </ul>
              
              <p><strong>State Management:</strong></p>
              <ul>
                <li><strong>Zustand:</strong> For lightweight and efficient state management in the calculator store.</li>
              </ul>
            `
          },
          {
            "btnText": "Libraries",
            "title": "Libraries Used",
            "content": `
              <ul>
                <li><strong>Zustand:</strong> For state management in the calculator application.</li>
                <li><strong>Tailwind CSS:</strong> For styling the calculator and history components.</li>
                <li><strong>React:</strong> Core library for building the user interface.</li>
                <li><strong>React Testing Library:</strong> For writing and running tests on the app's functionality and UI.</li>
                <li><strong>Jest:</strong> For unit testing and verifying app behavior.</li>
              </ul>
            `
          }
        ]
    },

    {
        title: 'Sheet Scoring System',
        videoPath: "/videos/excelScoring.mp4",
        techs: ['React', 'Flask (py)', 'MongoDB'],
        modalsArray: [
            {
                btnText: "Info",
                title: "General Information",
                content: `
                                    <p>The <strong>Sheet Scoring System</strong> is a web-based platform designed to streamline the process of conducting simulation-based learning, with two main user views: <strong>student</strong> and <strong>admin</strong>.</p>

                                    <p>On the <strong>student side</strong>, users can register, edit their profiles, and enroll in simulations. Once registered, students download an Excel sheet containing simulation tasks, perform the necessary calculations, and upload the completed sheet. The system automatically processes the uploaded file, calculates scores based on predefined formulas, and provides instant feedback to the student.</p>

                                    <p>On the <strong>admin side</strong>, admins can create and manage simulations by uploading Excel sheets, setting time limits, and monitoring student participation. They can view detailed reports, track student submissions, and manage all student data, including profile edits and score updates.</p>

                                    <p>Built using <strong>React</strong> for the frontend, <strong>Flask</strong> for backend logic, and <strong>MongoDB</strong> for data management, the system offers an efficient and automated way to conduct and score simulations while providing real-time feedback to students and giving admins full control over the simulation process.</p>

                                    `
            },
            {
                btnText: "Description",
                title: "Project Description",
                content: `
                                    <h4>1. Student Side (User Interface):</h4>

                                    <p><strong>1. Student Registration:</strong></p>
                                    <ul>
                                        <li>Students can <strong>register an account</strong> by providing their personal details.</li>
                                        <li>Allow students to <strong>edit their profile</strong> information after registration.</li>
                                    </ul>

                                    <p><strong>2. Simulation Registration:</strong></p>
                                    <ul>
                                        <li>Students can <strong>register for a simulation</strong> from a list of available simulations.</li>
                                        <li>Display available simulations, their deadlines, and any instructions.</li>
                                    </ul>

                                    <p><strong>3. Download Simulation Excel Sheet:</strong></p>
                                    <ul>
                                        <li>Students can <strong>download the simulation Excel file</strong> uploaded by the admin.</li>
                                        <li>Ensure students can only download simulations they have registered for.</li>
                                    </ul>

                                    <p><strong>4. Perform and Upload Calculations:</strong></p>
                                    <ul>
                                        <li>Students can complete the calculations on the downloaded Excel sheet.</li>
                                        <li>Enable students to <strong>upload the completed Excel sheet</strong> back into the system for scoring.</li>
                                        <li>Restrict uploads to only those students who are registered for the simulation.</li>
                                    </ul>

                                    <p><strong>5. Scoring System:</strong></p>
                                    <ul>
                                        <li>The system will <strong>automatically calculate the student’s score</strong> based on the uploaded Excel file.</li>
                                        <li>Display the <strong>score to the student</strong> after calculation is complete.</li>
                                    </ul>

                                    <p><strong>6. Simulation Time Limits:</strong></p>
                                    <ul>
                                        <li>Ensure that students cannot upload the simulation sheet after the <strong>time limit expires</strong>.</li>
                                    </ul>

                                    <p><strong>7. Error Handling:</strong></p>
                                    <ul>
                                        <li>Display appropriate <strong>error messages</strong> if the uploaded Excel sheet is invalid or fails to meet required conditions (e.g., wrong format, missing fields).</li>
                                    </ul>

                                    <hr>

                                    <h4>2. Admin Side (Management Interface):</h4>

                                    <p><strong>1. Add Simulations:</strong></p>
                                    <ul>
                                        <li>The admin can <strong>create new simulations</strong> by uploading an Excel file.</li>
                                        <li>Assign a <strong>time limit</strong> to each simulation (start date, end date).</li>
                                        <li>Set parameters for <strong>scoring logic</strong> that will calculate student scores based on uploaded files.</li>
                                    </ul>

                                    <p><strong>2. Track Participants:</strong></p>
                                    <ul>
                                        <li>The admin can <strong>track all participants</strong> who have registered for a particular simulation.</li>
                                        <li>See detailed participant information, including their <strong>registration status</strong>, time of upload, and scores.</li>
                                    </ul>

                                    <p><strong>3. Restrict Uploads:</strong></p>
                                    <ul>
                                        <li>Enforce restrictions on student uploads based on the <strong>simulation time limit</strong>.</li>
                                        <li>Prevent students from uploading after the time window for the simulation has passed.</li>
                                    </ul>

                                    <p><strong>4. View Simulation Results:</strong></p>
                                    <ul>
                                        <li>The admin can view <strong>detailed results of each simulation</strong>, including:</li>
                                        <ul>
                                            <li>List of participants.</li>
                                            <li>Their uploaded Excel sheets.</li>
                                            <li>Their calculated scores.</li>
                                        </ul>
                                    </ul>

                                    <p><strong>5. Manage Student Information:</strong></p>
                                    <ul>
                                        <li>Allow the admin to <strong>view and update all student details</strong>, including their registration information and simulation history.</li>
                                        <li>The admin can also <strong>edit or delete student profiles</strong> if necessary.</li>
                                    </ul>

                                    <p><strong>6. Simulation Status Management:</strong></p>
                                    <ul>
                                        <li>Admins can <strong>change the status of a simulation</strong> (e.g., open, closed).</li>
                                        <li>Control when a simulation is <strong>active or inactive</strong>, affecting whether students can participate.</li>
                                    </ul>

                                    <p><strong>7. Scoring and Results Overview:</strong></p>
                                    <ul>
                                        <li>Admins can <strong>view and modify scores</strong> if required.</li>
                                        <li>Provide <strong>downloadable reports</strong> of simulation results, including scores and participant details.</li>
                                    </ul>

                                    `
            },
            {
                btnText: "Tech",
                title: "Technologies Used",
                content: `
                              <p><strong>1. Frontend:</strong></p>
                              <ul>
                                  <li><strong>React</strong> for building the user interface for both student and admin views.</li>
                                  <li>Ensure <strong>dynamic interaction</strong> and seamless user experience using React components.</li>
                              </ul>

                              <p><strong>2. Backend:</strong></p>
                              <ul>
                                  <li><strong>Flask (Python)</strong> as the web application framework for handling server-side logic and processing.</li>
                                  <li><strong>REST APIs</strong> to enable communication between the frontend and backend, particularly for file uploads, score calculations, and fetching data.</li>
                              </ul>

                              <p><strong>3. Database:</strong></p>
                              <ul>
                                  <li><strong>MongoDB</strong> for storing:</li>
                                  <ul>
                                      <li>Student data (profile, registration details).</li>
                                      <li>Simulation data (uploaded Excel files, results).</li>
                                      <li>Scores and participant information.</li>
                                  </ul>
                              </ul>

                              `
            },
            {
                btnText: "Libraries",
                title: "Libraries Used",
                content: `
                            

                            <p><strong>1. @fortawesome/free-solid-svg-icons</strong> and <strong>@fortawesome/react-fontawesome</strong>: Provides a collection of Font Awesome icons for React applications, allowing for rich iconography.</p>

                            <p><strong>2. @testing-library/jest-dom, @testing-library/react, @testing-library/user-event</strong>: Testing utilities for React applications, useful for building test suites and simulating user interactions.</p>

                            <p><strong>3. antd</strong>: Ant Design, a UI component library for React, providing a set of components for building a modern, professional-looking UI.</p>

                            <p><strong>4. axios</strong>: For making HTTP requests, commonly used for API calls and data fetching.</p>

                            <p><strong>5. bootstrap</strong> and <strong>react-bootstrap</strong>: CSS frameworks that provide responsive and pre-styled components for UI consistency and faster development.</p>

                            <p><strong>6. formik</strong>: A library for building and managing forms in React, including validation, handling submissions, and managing form state.</p>

                            <p><strong>7. js-cookie</strong>: Manages cookies on the client side, useful for storing session tokens and other small data.</p>

                            <p><strong>8. moment</strong> and <strong>moment-timezone</strong>: Libraries for handling and manipulating dates and times, including timezone support.</p>

                            <p><strong>9. react</strong> and <strong>react-dom</strong>: Core libraries for building and rendering user interfaces in React.</p>

                            <p><strong>10. react-icons</strong>: Provides a set of popular icons as React components.</p>

                            <p><strong>11. react-router-dom</strong>: Manages routing in single-page applications built with React.</p>

                            <p><strong>12. react-scripts</strong>: Scripts and configuration for running and building React applications.</p>

                            <p><strong>13. react-table</strong>: A library for creating data tables in React, supporting sorting, pagination, and filtering.</p>

                            <p><strong>14. react-toastify</strong>: Provides customizable toast notifications in React applications.</p>

                            <p><strong>15. reactstrap</strong>: Bootstrap components specifically for React, simplifying the integration of Bootstrap UI elements.</p>

                            <p><strong>16. recharts</strong>: A charting library for React, offering a variety of customizable chart types for data visualization.</p>

                            <p><strong>17. web-vitals</strong>: Provides metrics for measuring web performance, useful for optimization.</p>

                            <p><strong>18. xlsx</strong> and <strong>XlsxWriter</strong>: Libraries for reading and writing Excel files, often used for importing and exporting data.</p>

                            <p><strong>19. yup</strong>: A schema validation library often used with Formik for form validation in React applications.</p>

                            <h4>Backend Libraries:</h4>

                            <p><strong>20. Flask</strong>: A lightweight web framework for Python, used for handling backend logic and API endpoints.</p>

                            <p><strong>21. Flask-Cors</strong>: Middleware to enable Cross-Origin Resource Sharing in Flask applications.</p>

                            <p><strong>22. Flask-PyMongo</strong>: Integrates MongoDB with Flask, simplifying MongoDB interactions in Flask applications.</p>

                            <p><strong>23. gunicorn</strong>: A WSGI HTTP server for running Python applications in production.</p>

                            <p><strong>24. mongoengine</strong>: An ORM (Object-Relational Mapping) library for MongoDB, providing a structured way to work with MongoDB data.</p>

                            <p><strong>25. pymongo</strong>: The official MongoDB driver for Python, used for connecting and interacting with MongoDB.</p>

                            <p><strong>26. openpyxl</strong> and <strong>et-xmlfile</strong>: Libraries for reading and writing Excel files in Python, often used for data processing and analysis.</p>

                            <p><strong>27. numpy</strong> and <strong>pandas</strong>: Essential libraries for data manipulation, analysis, and numerical calculations in Python.</p>

                            <p><strong>28. PyJWT</strong>: Handles JSON Web Token (JWT) encoding and decoding, often used for user authentication.</p>

                            <p><strong>29. email_validator</strong> and <strong>dnspython</strong>: Validates email addresses and handles DNS queries, adding an extra layer of validation.</p>

                            <p><strong>30. Werkzeug</strong>: Provides utility functions and middleware for Flask, handling request/response management and security.</p>

                            <p><strong>31. Jinja2</strong> and <strong>MarkupSafe</strong>: Templating libraries for generating HTML responses in Flask.</p>

                            <p><strong>32. pydantic</strong>: A data validation and parsing library for Python, used for defining and validating data structures.</p>

                            <p><strong>33. python-dateutil</strong>, <strong>pytz</strong>, and <strong>tzdata</strong>: Libraries for handling dates, times, and timezones in Python.</p>
                          
                            `
            },
        ]
    },

    {
        title: 'D3 Visualization Project',
        videoPath: "/videos/d3visualization.mp4",
        techs: ['React', 'D3.js'],
        modalsArray: [
            {
                btnText: "Info",
                title: "General Information",
                content: `<p><strong>The D3 Visualization Project</strong> is a web-based tool that allows users to upload datasets and visualize data using various chart types created with <strong>D3.js</strong>.</p>

                                    <p><strong>Project Overview:</strong></p>

                                    <p><strong>1. Dataset Upload:</strong><br>
                                    Users can upload datasets, which are displayed in a data table for easy viewing and management.</p>

                                    <p><strong>2. Basic Visualizations:</strong><br>
                                    Users can create <strong>scatter plots</strong> and <strong>radar plots</strong> based on the uploaded data. The interface allows selecting specific variables, generating customized, interactive visualizations.</p>

                                    <p><strong>3. Advanced Dashboard:</strong><br>
                                    A preloaded liver cirrhosis dataset from <strong>Kaggle</strong> enables more complex visualizations, including bar charts and density plots, revealing deeper insights and trends within the dataset.</p>

                                    <p><strong>Interactive Features:</strong><br>
                                    Throughout the project, users can interact with charts, zoom in for detailed views, and explore the data dynamically.</p>

                                    <p><strong>Technologies Used:</strong><br>
                                    Built with <strong>React</strong> and <strong>D3.js</strong>, the system provides a responsive and customizable interface for data analysis and visualization.</p>`
            },
            {
                btnText: "Description",
                title: "Project Description",
                content: `<p><strong>1. Data Upload and Display:</strong></p>
                                    
                                    <p><strong>Data Upload:</strong><br>
                                    - Users can upload datasets.<br>
                                    - The system parses and validates the uploaded data to ensure correct format for visualization.</p>

                                    <p><strong>Data Display:</strong><br>
                                    - Uploaded data is displayed in a tabular format.<br>
                                    - Users can view the full dataset, including columns and rows.<br>
                                    - Optional: Implement sorting or filtering features on the table.</p>

                                    <hr>

                                    <p><strong>2. Basic Visualization Section:</strong></p>

                                    <p><strong>Scatter Plot:</strong><br>
                                    - Users can create scatter plots to visualize relationships between two numerical variables.<br>
                                    - Options to select x-axis and y-axis variables from the dataset.<br>
                                    - Customizable features: color by third variable, size, tooltips for points.</p>

                                    <p><strong>Radar Plot:</strong><br>
                                    - Enables visualization of multi-dimensional data in a radar (spider) plot.<br>
                                    - Allows selection of multiple variables for axes.<br>
                                    - Interactive features like hovering to see values.</p>

                                    <hr>

                                    <p><strong>3. Dashboard Section (Liver Cirrhosis Dataset):</strong></p>

                                    <p><strong>Dataset Integration:</strong><br>
                                    - Preloaded liver cirrhosis dataset from Kaggle displayed in a tabular format for reference.</p>

                                    <p><strong>Data Visualization with D3.js:</strong><br>
                                    - Multiple visualizations (scatter plot, bar chart, density plot) implemented with the liver cirrhosis dataset.<br>
                                    - Interactive exploration with D3.js features:<br>
                                      &nbsp;&nbsp;&bull; Zooming and panning for detailed views.<br>
                                      &nbsp;&nbsp;&bull; Tooltips showing additional info when hovering over elements.</p>

                                    <p><strong>Insights and Analytics:</strong><br>
                                    - Visualize trends, distributions, and correlations in the data.<br>
                                    - Example: Distribution of variables like age, disease stages, treatment outcomes via bar or density plots.</p>

                                    <hr>

                                    <p><strong>4. Additional Features:</strong></p>

                                    <p><strong>Customization of Visualizations:</strong><br>
                                    - Options for customizing charts: axis labels, color schemes, legends.<br>
                                    - Ability to resize or rearrange charts in different layouts.</p>

                                    <p><strong>Dynamic Interaction:</strong><br>
                                    - Ensures visualizations are responsive and interactive, adapting to various screen sizes and input methods.</p>

                                    `
            },
            {
                btnText: "Tech",
                title: "Technologies Used",
                content: `
                              <strong>1. Frontend:</strong><br>
                              - React is used for building the user interface and managing the interactive components of the system.<br><br>

                              <strong>2. Data Visualization:</strong><br>
                              - D3.js is used for rendering the visualizations (scatter plot, radar plot, bar chart, density plot), enabling custom, interactive data charts.<br><br>

                              <strong>3. Dataset Integration:</strong><br>
                              - The liver cirrhosis dataset from Kaggle is preloaded in the dashboard for advanced data analysis and visualization.`
            },
            {
                btnText: "Libraries",
                title: "Libraries Used",
                content: `
               
                1. <strong>React</strong> - Used for building the user interface and managing interactive components.<br>
                2. <strong>Reactstrap</strong> - Provides pre-built Bootstrap-styled components for a responsive UI design.<br>
                3. <strong>D3.js</strong> - Renders custom, interactive data visualizations (scatter plot, radar plot, bar chart, density plot).<br>
                4. <strong>React-D3-Library</strong> - Bridges D3 visualizations with React components for seamless integration.<br>
                5. <strong>PapaParse</strong> - Parses and loads CSV data, enabling easy handling of the liver cirrhosis dataset from Kaggle for advanced analysis.
              `
            },
        ]
    },

    {
        title: 'Wedding Management System',
        videoPath: "/videos/shutterdown.mp4",
        techs: ['React', 'Node', 'MongoDB'],
        modalsArray: [
            {
                btnText: "Info",
                title: "General Information",
                content: `
                              <p><strong>The Event/Wedding Management System</strong> is a comprehensive platform designed to streamline event management for multiple roles: <strong>Admin</strong>, <strong>Manager</strong>, <strong>Shooter</strong>, and <strong>Editor</strong>, each with distinct sub-roles and responsibilities.</p>

                              <p><strong>System Features:</strong></p>

                              <p><strong>1. Event Creation and Role Assignment:</strong><br>
                              Managers can create events, assign deliverables such as cinematography, photos, albums, and pre-wedding tasks, and allocate specific roles to shooters and editors.</p>

                              <p><strong>2. Calendar View with Color-Coded Scheduling:</strong><br>
                              The system includes a <strong>calendar view</strong> that displays event density with intuitive color-coding: green for one event, yellow for two events, and red for three or more, helping managers schedule tasks efficiently.</p>

                              <p><strong>3. Client Communication:</strong><br>
                              Managers can communicate directly with clients via <strong>WhatsApp</strong> through the application for streamlined coordination.</p>

                              <p><strong>4. Task and Deliverable Management:</strong><br>
                              Shooters and editors can view their assigned events, update task statuses, and manage deliverables, ensuring that everyone stays informed and on schedule.</p>

                              <p><strong>5. Admin Controls:</strong><br>
                              Admins have full control over user management, role assignments, and can create custom options for events and deliverables, allowing for flexible system configuration.</p>

                              <p><strong>6. User Authentication and Profile Management:</strong><br>
                              The system supports <strong>Google Sign-In</strong>, password recovery, and profile updates for all users, enhancing ease of access and security.</p>

                              <p><strong>Technologies Used:</strong><br>
                              Built with <strong>React</strong> for the frontend, <strong>Node.js</strong> and <strong>REST APIs</strong> for the backend, and <strong>MongoDB</strong> for data storage, the system offers a seamless, role-based workflow for efficient event planning and management.</p>

                            `
            },
            {
                btnText: "Description",
                title: "Project Description",
                content: `
                              <p><strong>1. Admin Role:</strong></p>

                              <p><strong>User Management:</strong><br>
                              Admin can <strong>create, edit, and delete users</strong>.<br>
                              Admin can assign different roles (Manager, Shooter, Editor) to the users.<br>
                              Admin can set <strong>access control</strong>, defining what each role can view or edit.</p>

                              <p><strong>Custom Options Management:</strong><br>
                              Admin can <strong>add custom options</strong> for events (like custom event categories or deliverable types).<br>
                              Admin can configure default settings for events and deliverables.</p>

                              <p><strong>Global Access Control:</strong><br>
                              Admin can view and manage <strong>all events</strong>, users, and tasks in the system.<br>
                              Ability to <strong>generate reports</strong> for events, deliverables, and user performance.</p>

                              <p><strong>Role Assignments Overview:</strong><br>
                              Admin can view <strong>which users are assigned to which roles</strong> in a given event (Manager, Shooter, Editor).</p>

                              <hr>

                              <p><strong>2. Manager Role:</strong></p>

                              <p><strong>Event Creation:</strong><br>
                              Manager can <strong>create events/weddings</strong> by entering all the necessary details (e.g., event name, date, location).<br>
                              Manager can view the <strong>number of events</strong> on a particular date, with color-coded indicators:<br>
                              - <strong>Green</strong> for one event.<br>
                              - <strong>Yellow</strong> for two events.<br>
                              - <strong>Red</strong> for three or more events.</p>

                              <p><strong>Deliverables Assignment:</strong><br>
                              Manager can assign <strong>deliverables</strong> for each event, such as:<br>
                              - <strong>Cinematographer</strong><br>
                              - <strong>Photos</strong><br>
                              - <strong>Albums</strong><br>
                              - <strong>Pre-wedding tasks</strong><br>
                              Manager can assign editors or shooters to each deliverable.</p>

                              <p><strong>Task Management:</strong><br>
                              Manager can assign specific <strong>tasks to editors</strong> through the task section.<br>
                              Managers can view task statuses and update progress as needed.</p>

                              <p><strong>Calendar and List View:</strong><br>
                              In the <strong>calendar section</strong>, Managers can view the number of events scheduled for a particular day or month.<br>
                              In the <strong>list view</strong>, Managers can assign users (Shooters, Editors) to their respective roles for the event.</p>

                              <p><strong>Client and Event Overview:</strong><br>
                              Managers can view a detailed list of <strong>clients and their events</strong>.<br>
                              Each event will show <strong>assigned employees</strong>, their roles, and their specific deliverables.</p>

                              <p><strong>Communication:</strong><br>
                              Managers can <strong>send WhatsApp messages</strong> to clients directly through the application for quick communication.</p>

                              <hr>

                              <p><strong>3. Shooter Role:</strong></p>

                              <p><strong>Event Overview:</strong><br>
                              Shooters can <strong>view details of events</strong> where they are assigned.<br>
                              Shooters can see their role and the deliverables they are responsible for (e.g., photos, cinematography).</p>

                              <p><strong>Task Status Overview:</strong><br>
                              Shooters can see the <strong>status of deliverables and tasks</strong> assigned to them.</p>

                              <hr>

                              <p><strong>4. Editor Role:</strong></p>

                              <p><strong>Event Overview:</strong><br>
                              Editors can <strong>view details of events</strong> where they are assigned.<br>
                              Editors can view <strong>deliverables</strong> they are responsible for (e.g., albums, photo editing).</p>

                              <p><strong>Task Management:</strong><br>
                              Editors can <strong>update the status</strong> of tasks assigned to them (e.g., completed, in progress).<br>
                              Editors can view their list of assigned tasks and make updates directly from the task section.</p>

                              <hr>

                              <p><strong>5. Global Features:</strong></p>

                              <p><strong>User Authentication:</strong><br>
                              <strong>Google Sign-In</strong> functionality for secure and easy login.<br>
                              <strong>Forget password</strong> feature allowing users to reset their password if needed.</p>

                              <p><strong>User Profile Management:</strong><br>
                              Users (across all roles) can <strong>update their profile details</strong>.<br>
                              Users can <strong>upload files</strong> (e.g., profile pictures, work samples) to their profiles.</p>

                              `
            },
            {
                btnText: "Tech",
                title: "Technologies Used",
                content: `
                              <p><strong>1. Frontend:</strong><br>
                              <strong>React</strong> for building the user interface, providing a responsive and dynamic experience for all roles (Admin, Manager, Shooter, Editor).</p>

                              <p><strong>2. Backend:</strong><br>
                              <strong>Node.js</strong> as the backend runtime environment to manage server-side logic.<br>
                              <strong>REST APIs</strong> to enable communication between the frontend and backend, allowing users to interact with events, tasks, and deliverables.</p>

                              <p><strong>3. Database:</strong><br>
                              <strong>MongoDB</strong> to store:</p>
                              <ul>
                                  <li>Event data (event details, dates, assigned users).</li>
                                  <li>User profiles (personal information, assigned roles).</li>
                                  <li>Deliverables, tasks, and client information.</li>
                              </ul>
                            `
            },
            {
                btnText: "Libraries",
                title: "Libraries Used",
                content: `
                           

                            <p><strong>1. Frontend Libraries</strong></p>

                            <p><strong>@react-oauth/google</strong>: Google OAuth for authentication.</p>
                            <p><strong>@react-pdf/renderer</strong>: Generates PDFs directly in React.</p>
                            <p><strong>@reduxjs/toolkit</strong>: State management for React using Redux.</p>
                            <p><strong>axios</strong>: For making HTTP requests from the frontend to the backend.</p>
                            <p><strong>bootstrap</strong> and <strong>react-bootstrap</strong>: CSS framework for responsive and mobile-first web design.</p>
                            <p><strong>date-fns</strong>, <strong>dayjs</strong>, <strong>moment</strong>: Date manipulation libraries.</p>
                            <p><strong>draft-js</strong> and <strong>draft-js-export-html</strong>: For creating and exporting rich text editors in React.</p>
                            <p><strong>html2canvas</strong>: Takes screenshots of web pages.</p>
                            <p><strong>js-cookie</strong>: Manages cookies on the client side.</p>
                            <p><strong>jspdf</strong>: Generates PDFs from web pages.</p>
                            <p><strong>jwt-decode</strong>: Decodes JSON Web Tokens (JWT).</p>
                            <p><strong>react-calendar</strong>: Calendar component for React.</p>
                            <p><strong>react-draft-wysiwyg</strong>: WYSIWYG editor for React.</p>
                            <p><strong>react-icons</strong>: Provides popular icons as React components.</p>
                            <p><strong>react-phone-input-2</strong>, <strong>react-phone-number-input</strong>: For phone number input formatting.</p>
                            <p><strong>react-pro-sidebar</strong>: Sidebar menu for React applications.</p>
                            <p><strong>react-redux</strong>: Connects React with Redux for state management.</p>
                            <p><strong>react-select</strong>: Customizable select input control for React.</p>
                            <p><strong>react-toastify</strong>: Provides toast notifications.</p>
                            <p><strong>reactstrap</strong>: React components for Bootstrap.</p>
                            <p><strong>socket.io-client</strong>: Client for real-time, bidirectional, event-based communication.</p>

                            <p><strong>2. Backend Libraries</strong></p>

                            <p><strong>body-parser</strong>: Parses incoming request bodies in a middleware.</p>
                            <p><strong>config</strong>: Manages configuration files.</p>
                            <p><strong>cookie-parser</strong>: Parses cookies attached to the client request object.</p>
                            <p><strong>cors</strong>: Allows cross-origin resource sharing.</p>
                            <p><strong>dotenv</strong>: Loads environment variables from <code>.env</code> files.</p>
                            <p><strong>express</strong>: Web framework for Node.js.</p>
                            <p><strong>gridfs-stream</strong>: Streams files to and from MongoDB GridFS.</p>
                            <p><strong>mongodb</strong>, <strong>mongoose</strong>: Database driver and ODM for MongoDB.</p>
                            <p><strong>multer</strong>: Middleware for handling <code>multipart/form-data</code>, primarily for file uploads.</p>
                            <p><strong>node-cron</strong>: Schedules tasks to run periodically.</p>
                            <p><strong>nodemailer</strong>: Sends emails from Node.js applications.</p>
                            <p><strong>socket.io</strong>: Real-time communication library.</p>

                            `
            },
        ]
    },

    {
        title: 'User Side (Sales Interface)',
        videoPath: "/videos/pos.mp4",
        techs: ['React', 'Node', 'MongoDB'],
        modalsArray: [
            {
                btnText: "Info",
                title: "General Information",
                content: `
                <p>The <strong>User Side (Sales Interface)</strong> of the system allows users to browse and select from a list of available products, with the option to search for specific items using a search bar. Selected products appear in a billing panel on the right side, where individual prices, quantities, and the total amount are automatically calculated and displayed. Users can adjust product quantities, with the total price updating dynamically. Discounts can be applied on individual products, showing a discounted price, and coupon codes can be entered at checkout, with automatic validation. If the coupon is valid, the discount applies to the total; if not, an error message appears. The final billing screen shows the total amount after discounts, with options to finalize the sale and either print or email the receipt.</p>

                <p>On the <strong>Admin Side (Management Interface)</strong>, admins can manage product categories, create, edit, or remove products, and assign products to categories. Admins can also set product prices, descriptions, and available quantities. For discount management, admins can create, edit, or delete discount coupons, setting details like discount percentage, validity, and usage conditions, with options to track coupon usage and expiration. A daily sales overview provides a summary of total revenue, transaction count, and average transaction value, with filters for date, category, or product. The reporting section allows admins to view sales by category, product, or timeframe and to generate/export reports in formats like CSV or PDF. Finally, the user permissions feature lets admins create roles (e.g., cashier, manager) with specific permissions, controlling access to features such as report viewing or product modification.</p>


              `
            },
            {
                btnText: "Description",
                title: "Project Description",
                content: `
                              <h4>1. User Side (Sales Interface):</h4>

                              <p><strong>1. Product Selection:</strong></p>
                              <ul>
                                  <li>Display a <strong>list of available products</strong> to the user.</li>
                                  <li>Enable users to <strong>select products</strong> by clicking or tapping.</li>
                                  <li>Allow users to <strong>search for products</strong> using a search bar.</li>
                              </ul>

                              <p><strong>2. Billing Panel:</strong></p>
                              <ul>
                                  <li>Display selected products in a <strong>billing section</strong> (right side of the interface).</li>
                                  <li><strong>Automatically calculate</strong> and display the total amount of the selected products.</li>
                                  <li>Display the <strong>individual prices</strong> of selected products along with total quantity.</li>
                              </ul>

                              <p><strong>3. Adjusting Quantities:</strong></p>
                              <ul>
                                  <li>Enable users to <strong>increase or decrease the quantity</strong> of selected products.</li>
                                  <li>Update the <strong>total price dynamically</strong> based on quantity adjustments.</li>
                              </ul>

                              <p><strong>4. Applying Discounts:</strong></p>
                              <ul>
                                  <li>Allow users to <strong>apply discounts</strong> on individual products.</li>
                                  <li>Display a <strong>discounted price</strong> after applying the discount to a product.</li>
                              </ul>

                              <p><strong>5. Coupon Codes:</strong></p>
                              <ul>
                                  <li>Enable users to <strong>enter discount coupon codes</strong> at checkout.</li>
                                  <li>Automatically <strong>validate the coupon code</strong> and apply the discount to the total price.</li>
                                  <li><strong>Display an error message</strong> if the coupon is invalid or expired.</li>
                              </ul>

                              <p><strong>6. Final Billing:</strong></p>
                              <ul>
                                  <li>Show the <strong>final total amount</strong> after discounts.</li>
                                  <li>Display an option to <strong>finalize the sale</strong> and process the transaction.</li>
                                  <li>Option to <strong>print or email the receipt</strong> after the sale.</li>
                              </ul>

                              <hr>

                              <h4>2. Admin Side (Management Interface):</h4>

                              <p><strong>1. Product and Category Management:</strong></p>
                              <ul>
                                  <li>Allow the admin to <strong>create and manage product categories</strong>.</li>
                                  <li>Enable the admin to <strong>add, edit, or remove products</strong> from the system.</li>
                                  <li>Include functionality to <strong>set prices</strong>, descriptions, and available quantities for each product.</li>
                                  <li>Allow the admin to <strong>assign products to categories</strong>.</li>
                              </ul>

                              <p><strong>2. Discount Coupon Management:</strong></p>
                              <ul>
                                  <li>Allow the admin to <strong>create, edit, or delete discount coupons</strong>.</li>
                                  <li>Enable the admin to set <strong>coupon details</strong>, including discount percentage, validity period, and conditions (e.g., minimum purchase amount).</li>
                                  <li>Option to <strong>track coupon usage</strong> and expiration dates.</li>
                              </ul>

                              <p><strong>3. Daily Sales Overview:</strong></p>
                              <ul>
                                  <li>Display a <strong>summary of daily sales</strong> including total revenue, number of transactions, and average transaction value.</li>
                                  <li>Allow filtering sales by <strong>date, category, or product</strong>.</li>
                              </ul>

                              <p><strong>4. Reporting Section:</strong></p>
                              <ul>
                                  <li>Provide a <strong>sales report</strong> that breaks down sales by category, product, or time frame.</li>
                                  <li>Include an option to <strong>generate and export reports</strong> (e.g., CSV or PDF formats).</li>
                                  <li>Provide a <strong>real-time view of current sales trends</strong> and inventory levels.</li>
                              </ul>

                              <p><strong>5. User Permissions:</strong></p>
                              <ul>
                                  <li>Allow the admin to create <strong>multiple user roles</strong> (e.g., cashier, manager).</li>
                                  <li>Enable the admin to set <strong>permissions</strong> for each role, controlling access to different features (e.g., some users can only view reports, others can modify products).</li>
                              </ul>


                              `
            },
            {
                btnText: "Tech",
                title: "Technologies Used",
                content: `
                              <p><strong>1. Frontend:</strong></p>
                              <ul>
                                  <li><strong>React+Vite</strong> for building the user interface, providing a responsive and dynamic experience for all users.</li>
                              </ul>
                              </br>
                              <p><strong>2. Backend:</strong></p>
                              <ul>
                                  <li><strong>Node.js</strong> as the backend runtime environment to manage server-side logic.</li>
                                  <li><strong>REST APIs</strong> to enable communication between the frontend and backend.</li>
                              </ul>
                              </br>
                              <p><strong>3. Database:</strong></p>
                              <ul>
                                  <li><strong>MongoDB</strong> to store:
                                      <ul>
                                          <li>Categories data</li>
                                          <li>Products</li>
                                          <li>Gift Coupon, user data, and order history</li>
                                      </ul>
                                  </li>
                              </ul>

                            `
            },
            {
                btnText: "Libraries",
                title: "Libraries Used",
                content: `
                           
                            <ol>
                                <li><strong>axios</strong>: For making HTTP requests, commonly used for API interactions.</li>
                                <li><strong>bcrypt</strong>: For hashing passwords, adding a layer of security.</li>
                                <li><strong>cors</strong>: Enables Cross-Origin Resource Sharing, allowing API resources to be accessed from different origins.</li>
                                <li><strong>dotenv</strong>: Loads environment variables from a <code>.env</code> file, securing sensitive data.</li>
                                <li><strong>express</strong>: A web framework for Node.js, managing server-side routing and handling requests.</li>
                                <li><strong>html-to-image</strong>: Converts HTML elements to images, useful for capturing content as an image.</li>
                                <li><strong>moment</strong>: Provides date and time manipulation capabilities.</li>
                                <li><strong>mongodb</strong> and <strong>mongoose</strong>: Used for database management, with MongoDB as the database and Mongoose as an ORM.</li>
                                <li><strong>multer</strong>: Middleware for handling file uploads, primarily for images or other files.</li>
                                <li><strong>nodemon</strong>: A development tool that automatically restarts the server when file changes are detected.</li>
                                <li><strong>puppeteer</strong>: Headless browser automation, useful for generating PDFs or scraping data.</li>
                                <li><strong>@reduxjs/toolkit</strong>: State management for React applications using Redux.</li>
                                <li><strong>antd</strong>: Ant Design, a popular React UI library providing ready-made components.</li>
                                <li><strong>bootstrap</strong>: CSS framework for responsive and mobile-first design.</li>
                                <li><strong>framer-motion</strong>: Provides animations and transitions for React components.</li>
                                <li><strong>react-jwt</strong>: Handles decoding and managing JSON Web Tokens in React.</li>
                                <li><strong>react-redux</strong>: Connects React with Redux for state management.</li>
                                <li><strong>react-toastify</strong>: Enables toast notifications in React applications.</li>
                                <li><strong>reactstrap</strong>: Bootstrap components specifically for React.</li>
                                <li><strong>redux</strong>: Manages state in JavaScript applications, especially useful in React.</li>
                            </ol>


                            `
            },
        ]
    },

    {
        title: 'IoT Management System',
        videoPath: "/videos/dewa.mp4",
        techs: ['React', 'Node', 'PostgreSQL', 'D3.js'],
        modalsArray: [
            {
                btnText: "Info",
                title: "General Information",
                content: `
                              <p>The <strong>IoT Management System</strong> is a comprehensive platform designed to visualize, manage, and schedule IoT devices within a building. The system allows users to upload or retrieve <strong>IoT metrics data</strong> and display it in various formats, including line charts, bar charts, and scatter plots.</p>

                              <p>One of the standout features is the <strong>3D visualization</strong>, where users can interact with a 3D model of the building, displaying devices and their locations on different floors. The system also supports <strong>multi-level device classification</strong>, allowing users to filter devices by floor and type, providing a hierarchical view of device statuses and activity.</p>

                              <p>Additionally, users can <strong>schedule tasks for devices</strong>, such as turning them on or off at specific times, with scheduling data stored in a <strong>PostgreSQL database</strong>. The app provides real-time monitoring and control of devices, making it easy to manage multiple devices from a central interface.</p>

                              <p>Built using <strong>React + Vite</strong> for the frontend, <strong>Node.js</strong> for the backend, and <strong>PostgreSQL</strong> for data storage, the system efficiently handles large volumes of data while providing dynamic visualizations and device control features.</p>

                            `
            },
            {
                btnText: "Description",
                title: "Project Description",
                content: `
                              <h4>1. Data Visualization:</h4>

                              <p><strong>1. Data Metrics Visualization:</strong></p>
                              <ul>
                                  <li>The system should allow users to view <strong>various IoT metrics</strong> (e.g., temperature, device activity, energy consumption) in real-time or using dummy data.</li>
                                  <li><strong>Multiple types of charts/plots</strong> (e.g., line charts, bar charts, scatter plots) are used to display the metrics for easy interpretation.</li>
                                  <li>The visualization updates dynamically based on the data retrieved from the database or APIs.</li>
                              </ul>

                              <p><strong>2. Historical Data View:</strong></p>
                              <ul>
                                  <li>Users can view <strong>historical data</strong> of the recorded metrics.</li>
                                  <li>Allow users to <strong>filter or select specific time ranges</strong> to view trends over time (e.g., daily, weekly, monthly views).</li>
                              </ul>

                              <hr>

                              <h4>2. 3D Visualization:</h4>

                              <p><strong>1. 3D Model Integration:</strong></p>
                              <ul>
                                  <li>Implemented a <strong>3D visualization</strong> for representing building layouts or device locations in the system for the first time.</li>
                                  <li>Users can <strong>interact with the 3D model</strong>, rotate, zoom, and explore different views of the floor plan or device layout.</li>
                              </ul>

                              <p><strong>2. Device Visualization in 3D:</strong></p>
                              <ul>
                                  <li>The 3D model includes <strong>visual markers for devices</strong>, such as sensors or IoT equipment, showing where they are located within the building structure.</li>
                                  <li>Devices in the 3D model should be clickable, displaying <strong>additional information</strong> (e.g., status, last active, scheduled tasks) when selected.</li>
                              </ul>

                              <hr>

                              <h4>3. Multi-level Device Classification:</h4>

                              <p><strong>1. Device Classification by Floor:</strong></p>
                              <ul>
                                  <li>Devices are classified and organized based on their <strong>location in a building</strong>.</li>
                                  <li>Users can view devices on different <strong>floors or areas</strong> of the building by navigating through the classification hierarchy (e.g., floor, room, section).</li>
                              </ul>

                              <p><strong>2. Filter Devices by Category:</strong></p>
                              <ul>
                                  <li>Provide filtering capabilities where users can filter devices by <strong>type or function</strong> (e.g., sensors, actuators, cameras).</li>
                                  <li>Display relevant metrics for each category of devices in real-time or historical views.</li>
                              </ul>

                              <hr>

                              <h4>4. Device Scheduling:</h4>

                              <p><strong>1. Schedule Management:</strong></p>
                              <ul>
                                  <li>The system allows users to <strong>schedule tasks or actions</strong> for specific devices (e.g., turn on/off, adjust settings).</li>
                                  <li>Scheduling information is stored in the <strong>PostgreSQL database</strong> for persistence.</li>
                                  <li>Users can set <strong>recurring schedules</strong> (e.g., daily, weekly, at a specific time) or one-time schedules.</li>
                              </ul>

                              <p><strong>2. View and Modify Schedules:</strong></p>
                              <ul>
                                  <li>Users can view a <strong>list of scheduled tasks</strong> for all devices or specific devices.</li>
                                  <li>The system allows users to <strong>modify or cancel scheduled tasks</strong> if needed.</li>
                              </ul>

                              <hr>

                              <h4>5. Device Control and Monitoring:</h4>

                              <p><strong>1. Real-time Monitoring:</strong></p>
                              <ul>
                                  <li>The system provides <strong>real-time monitoring</strong> of device statuses (e.g., on/off, active/inactive).</li>
                                  <li>Users can see the <strong>current state of devices</strong> and view logs of recent activity.</li>
                              </ul>

                              <p><strong>2. Control Devices Remotely:</strong></p>
                              <ul>
                                  <li>Allow users to <strong>remotely control devices</strong> through the app, triggering actions such as turning devices on or off or adjusting configurations based on the device type.</li>
                              </ul>

                              <hr>

                              <h4>6. Data Management:</h4>

                              <p><strong>1. PostgreSQL Integration:</strong></p>
                              <ul>
                                  <li><strong>PostgreSQL</strong> is used to store data, including device schedules, device information, and metrics history.</li>
                                  <li>Ensure efficient querying of data for real-time updates and historical views.</li>
                              </ul>

                              <p><strong>2. REST API Backend:</strong></p>
                              <ul>
                                  <li>A <strong>Node.js</strong> backend with <strong>REST APIs</strong> handles communication between the frontend and the database, fetching data for visualizations, device scheduling, and control.</li>
                              </ul>



                              `
            },
            {
                btnText: "Tech",
                title: "Technologies Used",
                content: `
                              <p><strong>1. Frontend:</strong></p>
                              <ul>
                                  <li><strong>React + Vite</strong> for building the user interface, providing fast load times and efficient development using modern front-end technologies.</li>
                              </ul>

                              <p><strong>2. Backend:</strong></p>
                              <ul>
                                  <li><strong>Node.js</strong> for the backend, managing API requests and database interactions.</li>
                                  <li><strong>PostgreSQL</strong> for persisting device schedules, metrics data, and device classification.</li>
                              </ul>

                              <p><strong>3. Visualization and 3D Modelling:</strong></p>
                              <ul>
                                  <li><strong>D3.js</strong> and other relevant 3D libraries for implementing <strong>charts, plots, and 3D visualizations</strong>.</li>
                              </ul>

                            `
            },
            {
                btnText: "Libraries",
                title: "Libraries Used",
                content: `
                         

                            <p><strong>1. @fullcalendar/daygrid, @fullcalendar/interaction, @fullcalendar/list, @fullcalendar/react, @fullcalendar/timegrid</strong>: Provides a calendar interface with different views (e.g., day grid, time grid) and supports interaction like event creation and drag-and-drop.</p>

                            <p><strong>2. @react-three/drei and @react-three/fiber</strong>: Tools for building 3D interfaces and visualizations with Three.js in React, especially useful for 3D modeling and interactive scenes.</p>

                            <p><strong>3. axios</strong>: For making HTTP requests, commonly used for API interactions.</p>

                            <p><strong>4. crypto-js</strong>: Used for encryption and decryption, providing various cryptographic functions.</p>

                            <p><strong>5. dayjs and luxon</strong>: Date and time manipulation libraries, with Luxon offering extensive timezone support.</p>

                            <p><strong>6. echarts and echarts-for-react</strong>: Provides powerful charting options for data visualization, including line charts, bar charts, scatter plots, and more.</p>

                            <p><strong>7. react-calendar</strong>: Adds a calendar component for date selection in React applications.</p>

                            <p><strong>8. react-google-charts</strong>: A library for integrating Google Charts with React, useful for rich data visualizations.</p>

                            <p><strong>9. react-icons</strong>: Offers a collection of popular icons as React components.</p>

                            <p><strong>10. react-router-dom</strong>: Manages client-side routing, essential for single-page applications in React.</p>

                            <p><strong>11. react-select</strong>: A customizable select dropdown component for React, supporting multi-select and other advanced features.</p>

                            <p><strong>12. react-tailwindcss-datepicker</strong>: A date picker component styled with Tailwind CSS, for seamless integration into Tailwind-based UIs.</p>

                            <p><strong>13. react-toastify</strong>: Enables customizable toast notifications in React applications.</p>

                            <p><strong>14. react-tooltip</strong>: Adds tooltips to elements in React applications, providing contextual information.</p>

                            <p><strong>15. recharts</strong>: Another library for data visualization in React, with easy-to-use chart components like bar, line, and pie charts.</p>

                            <p><strong>16. three</strong>: A JavaScript library for creating 3D graphics in the browser, commonly used with React Three Fiber for interactive 3D elements.</p>

                            <h4>Backend Libraries:</h4>

                            <p><strong>17. cors</strong>: Middleware to enable Cross-Origin Resource Sharing, allowing the API to be accessed from different domains.</p>

                            <p><strong>18. dotenv</strong>: Loads environment variables from a <code>.env</code> file, essential for managing sensitive data like API keys.</p>

                            <p><strong>19. express</strong>: A web framework for Node.js, handling server-side routing and middleware.</p>

                            <p><strong>20. nodemon</strong>: A development tool that automatically restarts the server when changes are detected, aiding in faster development.</p>

                            <p><strong>21. pg</strong>: A PostgreSQL client for Node.js, enabling connection and queries to PostgreSQL databases.</p>

                            <p><strong>22. pg-hstore</strong>: Serializes and deserializes JSON data for PostgreSQL, used with Sequelize for PostgreSQL support.</p>

                            <p><strong>23. sequelize and sequelize-cli</strong>: An ORM (Object Relational Mapping) for managing PostgreSQL, allowing for easier interaction with the database and model-based querying.</p>



                            `
            },
        ]
    },

    {
        title: 'Stock Tracking App',
        videoPath: "/videos/myRizq.mp4",
        techs: ['React', 'Node', 'MongoDB'],
        modalsArray: [
            {
                btnText: "Info",
                title: "General Information",
                content: `
                <p>The <strong>Stock Tracking Application</strong> is a web-based platform that helps users track stocks that adhere to Shariah laws, offering both free and paid membership plans. Users can <strong>sign up, sign in, and select between free or paid access</strong>, with secure payment processing available for upgrades.</p>

                <p>The app features a <strong>stock search function</strong> powered by the Yahoo API, allowing users to find stocks. Paid users gain additional benefits, such as the ability to create a <strong>watchlist</strong> for their selected stocks and provide <strong>feedback notes</strong> for personal tracking.</p>

                <p>The application includes a <strong>dashboard</strong> tailored to each user type—free users can search stocks, while paid users have access to watchlist and feedback features. Other sections include <strong>FAQ and Contact Us pages</strong> for user support and a <strong>Reviews section</strong> for user testimonials.</p>

                <p>Styled with the <strong>Argon Design System by Creative Tim</strong>, the app offers a cohesive, modern UI. Built with <strong>React</strong> on the frontend, a <strong>Node.js backend with REST APIs</strong>, and <strong>MongoDB</strong> for data management, the application provides a user-friendly experience for tracking compliant investments.</p>

              `
            },
            {
                btnText: "Description",
                title: "Project Description",
                content: `
                              <h4>1. User Management:</h4>

                              <p><strong>1. Sign-Up and Sign-In:</strong></p>
                              <ul>
                                  <li>The system includes <strong>sign-up and sign-in pages</strong> for new and existing users.</li>
                                  <li>New users can create an account, while existing users can log in with their credentials.</li>
                                  <li>Users can choose between <strong>free and paid membership plans</strong> during sign-up.</li>
                              </ul>

                              <p><strong>2. User Types and Access Control:</strong></p>
                              <ul>
                                  <li>The application supports two user types: <strong>Free</strong> and <strong>Paid</strong>.</li>
                                  <li><strong>Free users</strong> have limited access, while <strong>paid users</strong> have access to additional features like watchlists and feedback functionality.</li>
                              </ul>

                              <p><strong>3. Payment Gateway Integration (Stripe):</strong></p>
                              <ul>
                                  <li>Integrated <strong>payment gateways</strong> allow users to securely upgrade to paid membership plans.</li>
                                  <li>Payment plans are managed, allowing users to choose and pay for plans according to their requirements.</li>
                              </ul>

                              <p><strong>4. Dashboard Access for Signed-Up Users:</strong></p>
                              <ul>
                                  <li>Upon logging in, users access a <strong>dashboard</strong> that displays relevant information and accessible features based on their membership type.</li>
                              </ul>

                              <hr>

                              <h4>2. Stock Search and Tracking:</h4>

                              <p><strong>1. Stock Search Functionality (Yahoo API):</strong></p>
                              <ul>
                                  <li>Users can search for <strong>Stocks</strong> using the <strong>Yahoo API</strong>.</li>
                                  <li>Search functionality is <strong>restricted to logged-in users</strong> only, providing an additional layer of control.</li>
                              </ul>

                              <p><strong>2. Watchlist Feature (Paid Users Only):</strong></p>
                              <ul>
                                  <li><strong>Paid users</strong> can add specific stocks to a personal <strong>watchlist</strong> for easy tracking.</li>
                                  <li>Users can view, manage, and update their watchlist within their dashboard.</li>
                              </ul>

                              <p><strong>3. User Feedback on Stocks:</strong></p>
                              <ul>
                                  <li>Paid users can leave <strong>feedback on specific stocks</strong>, adding notes or personal insights.</li>
                                  <li>Feedback is saved and displayed within the user’s account for reference.</li>
                              </ul>

                              <hr>

                              <h4>3. Additional User Features:</h4>

                              <p><strong>1. FAQ and Contact Us Pages:</strong></p>
                              <ul>
                                  <li>A <strong>FAQ page</strong> provides answers to common questions about the application and stocks.</li>
                                  <li>A <strong>Contact Us page</strong> allows users to send inquiries or feedback to the application support team.</li>
                              </ul>

                              <p><strong>2. Reviews Section:</strong></p>
                              <ul>
                                  <li>The application includes a <strong>reviews section</strong> where users can read testimonials or reviews from other users about the platform.</li>
                              </ul>

                              <hr>

                              <h4>4. User Dashboard:</h4>

                              <p><strong>1. Dashboard for Free Users:</strong></p>
                              <ul>
                                  <li>Free users have access to a basic dashboard, allowing them to:</li>
                                  <ul>
                                      <li>Perform limited searches on stocks.</li>
                                      <li>View information on stocks but without the ability to save them.</li>
                                  </ul>
                              </ul>

                              <p><strong>2. Dashboard for Paid Users:</strong></p>
                              <ul>
                                  <li>Paid users access an enhanced dashboard with additional features, including:</li>
                                  <ul>
                                      <li><strong>Watchlist management</strong> to add, view, and update stocks.</li>
                                      <li><strong>Feedback section</strong> to leave notes on stocks they are tracking.</li>
                                  </ul>
                              </ul>

                              <hr>

                              <h4>5. Theme and User Interface:</h4>

                              <p><strong>1. UI Theme Implementation:</strong></p>
                              <ul>
                                  <li>The application uses a design theme based on <strong>Argon Design System by Creative Tim</strong>.</li>
                                  <li>Consistent styling across pages (dashboard, search, FAQ, etc.) creates a unified look and feel.</li>
                              </ul>

                              `
            },
            {
                btnText: "Tech",
                title: "Technologies Used",
                content: `
                              <p><strong>1. Frontend:</strong></p>
                              <ul>
                                  <li><strong>React</strong> for building the user interface, ensuring a dynamic and interactive experience.</li>
                              </ul>

                              <p><strong>2. Backend and API Integration:</strong></p>
                              <ul>
                                  <li><strong>Node.js</strong> with <strong>REST API</strong> endpoints to handle user authentication, stock search functionality, and dashboard features.</li>
                                  <li><strong>Yahoo API</strong> integration for retrieving stock data.</li>
                              </ul>

                              <p><strong>3. Database:</strong></p>
                              <ul>
                                  <li><strong>MongoDB</strong> for managing user accounts, storing user feedback, managing watchlists, and tracking payment plan data.</li>
                              </ul>

                            `
            },
            {
                btnText: "Libraries",
                title: "Libraries Used",
                content: `
                            <h3>Libraries used:</h3>

                            <p><strong>1. @stripe/react-stripe-js</strong> and <strong>@stripe/stripe-js</strong>: Integrates Stripe for handling secure payment processing on the frontend.</p>

                            <p><strong>2. bootstrap</strong>: CSS framework for building responsive, mobile-first interfaces.</p>

                            <p><strong>3. classnames</strong>: Utility for conditionally joining CSS class names in JavaScript.</p>

                            <p><strong>4. headroom.js</strong>: Adds sticky header functionality that hides the header on scroll down and reveals it on scroll up.</p>

                            <p><strong>5. moment</strong>: Library for handling and manipulating dates and times.</p>

                            <p><strong>6. nouislider</strong>: Provides interactive slider components, useful for forms and data input.</p>

                            <p><strong>7. react</strong> and <strong>react-dom</strong>: Core libraries for building and rendering user interfaces in React.</p>

                            <p><strong>8. react-chartjs-2</strong>: Adds charting capabilities to React using Chart.js for data visualization.</p>

                            <p><strong>9. react-circular-progressbar</strong>: Displays circular progress bars in React applications.</p>

                            <p><strong>10. react-datetime</strong>: A date and time picker component for React.</p>

                            <p><strong>11. react-input-suggestions</strong>: Provides suggestions as users type into an input field.</p>

                            <p><strong>12. react-modal</strong>: Creates accessible modal dialogs in React applications.</p>

                            <p><strong>13. react-router-dom</strong>: Manages routing in single-page applications built with React.</p>

                            <p><strong>14. react-scripts</strong>: Scripts and configuration for running and building React applications.</p>

                            <p><strong>15. react-slick</strong>: Implements carousels and sliders in React, based on the Slick carousel library.</p>

                            <p><strong>16. reactstrap</strong>: Provides Bootstrap components specifically for React.</p>

                            <p><strong>17. sass</strong>: A CSS preprocessor that adds advanced styling features and variables to CSS.</p>

                            <p><strong>18. sweetalert</strong>: Creates popup alerts and notifications, with customizable styling.</p>

                            <h4>Backend Libraries:</h4>

                            <p><strong>19. cors</strong>: Middleware to enable Cross-Origin Resource Sharing, allowing API access from different domains.</p>

                            <p><strong>20. csv-reader</strong> and <strong>csv-writer</strong>: Read from and write to CSV files, useful for importing and exporting data.</p>

                            <p><strong>21. dotenv</strong>: Loads environment variables from a <code>.env</code> file, essential for managing sensitive data securely.</p>

                            <p><strong>22. express</strong>: Web framework for Node.js, handling routing and middleware on the backend.</p>

                            <p><strong>23. fs</strong> and <strong>fs-extra</strong>: Provides utilities for working with the file system, with additional features in <strong>fs-extra</strong>.</p>

                            <p><strong>24. mongoose</strong>: An ODM (Object Data Modeling) library for MongoDB, used to manage and interact with MongoDB databases.</p>

                            <p><strong>25. stripe</strong>: Official Stripe library for handling payment transactions on the backend.</p>

                            <p><strong>26. yahoo-finance</strong> and <strong>yahoo-finance2</strong>: Fetch financial data from Yahoo Finance, useful for retrieving stock data in real-time.</p>

                            `
            },
        ]
    },
];


export default function Projects() {
    const [projectsToShow, setProjectsToShow] = useState(projectsData);
    const [selectedTechs, setSelectedTechs] = useState([])
    const [animateProjects, setAnimatePojects] = useState(false)


    return (
        <section className="project py-5" id="project">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center mx-auto col-12">
                        <div className="col-lg-8 mx-auto">
                            <h2>Things I have developed as a <br></br> Full Stack Developer/AI Engineer</h2>
                        </div>
                        <div className='d-flex justify-content-center align-items-center flex-row flex-wrap mt-5'>
                            {allTechs.map((tech, i) => <button key={i} style={{ width: '140px' }} className={`m-1 d-flex align-items-center justify-content-center btn ${selectedTechs.includes(tech.name) && 'custom-btn-bg'}  custom-btn custom-btn-tech `}
                                onClick={() => {
                                    
                                    let updatedTechs;
                                    if (selectedTechs.includes(tech.name)) {
                                        updatedTechs = selectedTechs.filter(techName => techName !== tech.name)
                                    } else {
                                        updatedTechs = [...selectedTechs, tech.name]
                                    }
                                    setSelectedTechs(updatedTechs)

                                    if (updatedTechs.length > 0) {
                                        
                                        projectsData?.filter(project => project.techs.some(projectTech => console.log("selectedTechs",projectTech)));
                                        const filteredProjects = projectsData?.filter(project => project.techs.some(projectTech => updatedTechs.includes(projectTech)));
                                        setProjectsToShow(filteredProjects)
                                    } else {
                                        setProjectsToShow(projectsData)
                                    }
                                    setAnimatePojects(true)


                                    setTimeout(() => setAnimatePojects(false), 700)

                                }}
                            >
                                {tech.icon}
                                {tech.name}
                            </button>)}
                        </div>
                        <div className={`row mt-3 animate__animated animate__faster ${animateProjects ? 'animate__fadeInUp' : ''}`}>
                            {projectsToShow?.map((projectData, i) => <ProjectBox key={i} projectData={projectData} />)}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
