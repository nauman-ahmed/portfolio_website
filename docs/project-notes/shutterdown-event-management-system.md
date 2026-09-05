# ShutterDown - Event Management System

**Stack:** React, Node.js, MongoDB, Express.js, Socket.io

> Extracted from the portfolio site during the phase 03 content pass.
> Kept here as project documentation; the site now carries a short overview only.

## General Information

The **ShutterDown** is a comprehensive photography event management system designed specifically for wedding photography studios. It provides a complete solution for managing the entire client lifecycle from initial booking to final delivery of photography services.

The system features **role-based access control** with different user types including photographers, admins, and clients. It manages client information, wedding events, deliverables tracking, team assignments, attendance monitoring, and real-time communication through WhatsApp integration.

Built with **React** for the frontend, **Node.js** with Express for the backend, and **MongoDB** for data persistence, the system offers real-time updates through Socket.io, automated backup systems, and comprehensive reporting capabilities.

The platform handles complex workflows including pre-wedding shoots, main wedding events, deliverable management (albums, photos, videos), team scheduling, attendance tracking, and client communication, making it an all-in-one solution for photography businesses.

## Project Description

### 1. Client Management System:

**Client Registration & Information:**

- Complete client profiles with bride/groom details, contact information, and wedding dates.

- Payment tracking with status monitoring and pending amount calculations.

- Project status management (Open, In Progress, Completed).

- Pre-wedding shoot planning with photographer and equipment requirements.

**Event Management:**

- Wedding event scheduling with multiple dates support.

- Pre-wedding shoot coordination with photographer assignments.

- Event-specific deliverables tracking and requirements.

- Checklist management for each event type.

---

### 2. Team & Resource Management:

**User Management:**

- Role-based access control (Admin, Photographer, Assistant).

- Complete employee profiles with personal and professional details.

- Document management (Aadhar, PAN, Driving License, etc.).

- Google Calendar integration for scheduling.

**Attendance System:**

- Real-time attendance tracking with mobile check-in/out.

- Work-from-home (WFH) tracking and approval system.

- Holiday management and leave tracking.

- Attendance reports and analytics.

---

### 3. Deliverables & Project Tracking:

**Deliverable Management:**

- Comprehensive deliverable tracking (Photos, Albums, Videos, Cinematography).

- Pre-wedding deliverables with specific requirements.

- Raw photos and edited photos management.

- Hard drives, pen drives, and physical deliverables tracking.

**Project Workflow:**

- Deadline management with automated notifications.

- Task assignment and progress tracking.

- Quality control and approval workflows.

- Client feedback and revision management.

---

### 4. Communication & Notifications:

**Real-time Communication:**

- WhatsApp integration for client communication.

- Real-time notifications using Socket.io.

- Email notifications for important updates.

- Team collaboration tools and messaging.

**Reporting & Analytics:**

- Comprehensive reporting dashboard with charts and graphs.

- Team performance analytics and attendance reports.

- Client satisfaction tracking and feedback analysis.

- Financial reporting and payment tracking.

---

### 5. System Administration:

**Data Management:**

- Automated backup system with scheduled backups.

- Data recovery and restoration capabilities.

- System monitoring and health checks.

- User activity logging and audit trails.

**Security & Access Control:**

- JWT-based authentication with secure token management.

- Role-based permissions and access control.

- Secure file upload and storage management.

- API security with CORS and request validation.

## Technologies Used

**1. Frontend Technologies:**

- **React 18.2.0** - Modern UI framework with hooks and functional components

- **React Router DOM 6.21.1** - Client-side routing and navigation

- **Redux Toolkit 2.0.1** - Global state management for complex application state

- **Zustand 5.0.1** - Lightweight state management for specific features

- **Jotai 2.10.0** - Atomic state management for component-level state

**2. Backend Technologies:**

- **Node.js** - JavaScript runtime for server-side development

- **Express.js 4.18.2** - Web application framework for RESTful APIs

- **Socket.io 4.7.5** - Real-time bidirectional communication

- **JWT (JSON Web Tokens)** - Secure authentication and authorization

- **Multer 1.4.5** - File upload handling and processing

**3. Database & Storage:**

- **MongoDB 6.8.1** - NoSQL database for flexible data storage

- **Mongoose 6.13.4** - MongoDB object modeling for Node.js

- **GridFS** - MongoDB file storage system for large files

- **MongoDB Database Tools** - Backup and data management utilities

**4. UI/UX Libraries:**

- **Bootstrap 5.3.2** - CSS framework for responsive design

- **React Bootstrap 2.9.2** - Bootstrap components for React

- **Reactstrap 9.2.1** - Additional Bootstrap components

- **FullCalendar 6.1.10** - Advanced calendar component for scheduling

- **Chart.js 4.4.9** - Data visualization and analytics charts

**5. Integration & Services:**

- **Google APIs 144.0.0** - Google Calendar integration

- **Nodemailer 6.9.15** - Email service for notifications

- **Node-cron 3.0.3** - Scheduled tasks and automated processes

- **React OAuth Google** - Google authentication integration

## Libraries Used

### Frontend Libraries:

**Core React Libraries:**

- **react** (18.2.0) & **react-dom** (18.2.0) - Core React framework

- **react-router-dom** (6.21.1) - Client-side routing

- **react-scripts** (5.0.1) - Create React App build tools

**State Management:**

- **@reduxjs/toolkit** (2.0.1) - Redux state management

- **react-redux** (9.0.4) - React-Redux bindings

- **zustand** (5.0.1) - Lightweight state management

- **jotai** (2.10.0) - Atomic state management

**UI Components & Styling:**

- **bootstrap** (5.3.2) - CSS framework

- **react-bootstrap** (2.9.2) - Bootstrap React components

- **reactstrap** (9.2.1) - Additional Bootstrap components

- **react-pro-sidebar** (0.7.1) - Professional sidebar component

- **react-icons** (4.12.0) - Icon library

- **react-tippy** (1.4.0) & **tippy.js** (6.3.7) - Tooltip components

**Data Visualization & Calendar:**

- **chart.js** (4.4.9) - Charting library

- **react-chartjs-2** (5.3.0) - Chart.js React wrapper

- **@fullcalendar/react** (6.1.10) - Calendar component

- **@fullcalendar/daygrid** (6.1.10) - Day grid view

- **@fullcalendar/timegrid** (6.1.10) - Time grid view

- **@fullcalendar/list** (6.1.10) - List view

- **@fullcalendar/interaction** (6.1.10) - Interaction features

- **react-calendar** (4.8.0) - Additional calendar component

**Forms & Input:**

- **react-select** (5.8.0) - Select input component

- **react-phone-input-2** (2.15.1) - Phone number input

- **react-phone-number-input** (3.3.8) - Alternative phone input

- **react-draft-wysiwyg** (1.15.0) - Rich text editor

- **draft-js** (0.11.7) - Rich text framework

- **draft-js-export-html** (1.4.1) - HTML export for Draft.js

**PDF & Document Generation:**

- **@react-pdf/renderer** (3.4.4) - PDF generation

- **jspdf** (2.5.1) - PDF creation library

- **html2canvas** (1.4.1) - HTML to canvas conversion

**HTTP & API:**

- **axios** (1.6.3) - HTTP client

- **@tanstack/react-query** (5.62.0) - Data fetching and caching

- **socket.io-client** (4.7.5) - Real-time communication

**Authentication & Security:**

- **@react-oauth/google** (0.12.1) - Google OAuth

- **jwt-decode** (4.0.0) - JWT token decoding

- **js-cookie** (3.0.5) - Cookie management

**Date & Time:**

- **moment** (2.30.1) - Date manipulation

- **dayjs** (1.11.10) - Lightweight date library

- **date-fns** (3.3.1) - Modern date utility library

**Notifications & UI Feedback:**

- **react-toastify** (9.1.3) - Toast notifications

- **web-vitals** (2.1.4) - Performance monitoring

### Backend Libraries:

**Core Framework:**

- **express** (4.18.2) - Web application framework

- **cors** (2.8.5) - Cross-origin resource sharing

- **body-parser** (1.20.1) - Request body parsing

- **cookie-parser** (1.4.6) - Cookie parsing middleware

**Database & ODM:**

- **mongoose** (6.13.4) - MongoDB object modeling

- **mongodb** (6.8.1) - MongoDB driver

- **gridfs-stream** (1.1.1) - GridFS file streaming

**Authentication & Security:**

- **jsonwebtoken** (9.0.2) - JWT token handling

- **dotenv** (16.4.7) - Environment variable management

**File Handling:**

- **multer** (1.4.5-lts.1) - File upload middleware

- **mime-types** (2.1.35) - MIME type detection

- **stream** (0.0.3) - Stream utilities

**Communication & Integration:**

- **socket.io** (4.7.5) - Real-time communication

- **nodemailer** (6.9.15) - Email service

- **googleapis** (144.0.0) - Google APIs integration

**Scheduling & Automation:**

- **node-cron** (3.0.3) - Cron job scheduling

**Date & Time:**

- **moment** (2.30.1) - Date manipulation

- **dayjs** (1.11.13) - Lightweight date library

**Configuration:**

- **config** (3.3.12) - Configuration management

**Development Tools:**

- **nodemon** (2.0.20) - Development server with auto-restart
