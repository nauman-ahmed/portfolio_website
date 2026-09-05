# Shannon Associates - Digital Artist Platform

**Stack:** React, Node.js, Express.js, MongoDB, Redux, JWT, AWS S3, Axios, Webflow

> Extracted from the portfolio site during the phase 03 content pass.
> Kept here as project documentation; the site now carries a short overview only.

## General Information

**Shannon Associates** is a comprehensive full-stack web application that serves as a premier digital rtist agency platform, connecting talented artists, illustrators, and authors with clients across publishing, advertising, entertainment, design, architecture, and tech industries.

**Project Overview:**

**1. Full-Stack Architecture:**

Complete React frontend with Node.js/Express.js backend, featuring secure JWT authentication, MongoDB database integration, and AWS S3 cloud storage for comprehensive artist portfolio management.

**2. Multi-User Platform:**

Three distinct user experiences: public client browsing interface, secure artist portal for portfolio management, and comprehensive admin dashboard for agency staff management.

**3. Advanced Portfolio Management:**

Sophisticated image upload system with automatic processing, cropping, and thumbnail generation. Support for multi-image uploads with content categorization by divisions (Illustration, Photography, Medical, Motion, CGI).

**4. Diversity & Inclusion Focus:**

Dedicated BIPOC (Black, Indigenous, People of Color) artist showcase sections, specialized kid artist support, and comprehensive diversity initiatives in creative representation.

**5. Client Discovery & Communication:**

Advanced search functionality, interactive image galleries, direct communication channels, and automated email notification systems for seamless client-artist connections.

## Project Description

**1. Frontend Architecture (React/Redux):**

**User Interface:**

- React 17.0.2 with React Router for single-page application navigation.

- Redux with Redux Toolkit for centralized state management.

- Custom components integrated with Webflow design system.

- Responsive design optimized for mobile and desktop browsing.

**Artist Portal Features:**

- Secure authentication system with JWT tokens for artist account management.

- Multi-image upload system with automatic processing and optimization.

- Image cropping and thumbnail generation using React Image Crop.

- Drag-and-drop functionality for content organization using React Beautiful DnD.

- AI protection integration with Glaze tool to protect artists' work.

---

**2. Backend Architecture (Node.js/Express):**

**API Development:**

- RESTful API with modular route structure and comprehensive error handling.

- JWT-based authentication with secure token management.

- Password hashing using bcryptjs for enhanced security.

- CORS configuration for cross-origin requests.

**Database & Data Management:**

- MongoDB with Mongoose ODM for NoSQL database operations and data modeling.

- Account status management (active, pending, suspended).

- Advanced filtering and sorting capabilities with keyword-based categorization.

---

**3. File & Image Processing:**

**Cloud Storage & Processing:**

- AWS S3 integration for secure cloud storage of artist images and portfolios.

- Sharp library for image processing, optimization, and dimension calculation.

- Multer for handling multipart/form-data file uploads.

- Support for multiple image formats with validation and metadata management.

---

**4. Multi-User Support System:**

**Regular Artists:**

- Full portfolio management capabilities with profile customization.

- Image upload and organization features with bio management.

**Kid Artists Section:**

- Specialized interface for young artists with age-appropriate content management.

- Parental oversight features and specialized categorization.

**BIPOC Artists Support:**

- Dedicated support for Black, Indigenous, and People of Color artists.

- Specialized categorization and promotion features for diverse creative talent.

---

**5. Administrative & Communication Features:**

**Admin Dashboard:**

- Complete system administration capabilities with user account management.

- Artist registration approval system with review workflow.

- Dynamic banner system and content management for various page types.

- Analytics dashboard for tracking submissions and platform activity.

**Communication System:**

- Nodemailer for automated email notifications and password reset functionality.

- Automated password generation and secure email delivery.

- Support ticket system integration with professional email templates.

## Technologies Used

**1. Frontend Technologies:**

- React 17.0.2 for building the user interface and managing interactive components.

- Redux with Redux Toolkit for centralized application state management.

- React Router for client-side routing and navigation between different sections.

- Axios for HTTP requests and API communication with backend services.

**2. Backend Framework:**

- Node.js serves as the runtime environment for the server-side application.

- Express.js provides the web application framework with middleware support.

- RESTful API with modular route structure and comprehensive error handling.

**3. Database & Data Management:**

- MongoDB with Mongoose ODM for NoSQL database operations and data modeling.

- JWT (JSON Web Tokens) for secure authentication and session management.

- bcryptjs for secure password hashing and verification.

**4. File & Image Processing:**

- AWS S3 integration for secure cloud storage of artist images and portfolios.

- Sharp library for image processing, optimization, and dimension calculation.

- Multer for handling multipart/form-data file uploads.

**5. Communication & Integration:**

- Nodemailer for automated email notifications and password reset functionality.

- CORS middleware for cross-origin resource sharing configuration.

- Input validation and sanitization for enhanced security.

## Libraries & Dependencies

**Frontend Libraries:**

1. **React** - Core framework for building the user interface and managing interactive components.

2. **Redux Toolkit** - State management library for predictable state updates across the application.

3. **React Router DOM** - Client-side routing for single-page application navigation.

4. **Axios** - HTTP client for API requests and backend communication.

5. **React Image Crop** - Image cropping and thumbnail generation for artist portfolios.

6. **React Beautiful DnD** - Drag and drop functionality for content organization.

7. **React JWT** - JWT token decoding and authentication management.

8. **React Quill** - Rich text editor for content management.

9. **React Slick** - Carousel and slider components for image galleries.

10. **Bootstrap** - CSS framework for responsive design and UI components.

11. **Webflow** - Design system integration for custom styling and animations.

**Backend Libraries:**

12. **Express.js** - Web application framework for Node.js with middleware support.

13. **Mongoose** - MongoDB object modeling tool for Node.js with schema validation.

14. **jsonwebtoken** - JWT implementation for secure authentication and authorization.

15. **bcryptjs** - Password hashing library for secure user authentication.

16. **Multer** - Middleware for handling multipart/form-data file uploads.

17. **Sharp** - High-performance image processing library for optimization and resizing.

18. **Nodemailer** - Email sending library for automated notifications and communications.

19. **AWS S3 Admin SDK** - Server-side AWS S3 integration for cloud storage and authentication.

20. **Moment.js** - Date manipulation and formatting library.

21. **generate-password** - Secure password generation for user accounts.

22. **image-size** - Image dimension calculation and metadata extraction.

23. **express-unless** - Conditional middleware application for route-specific functionality.

24. **country-state-city** - Geographic data for location-based features.

25. **uuid-v4** - Unique identifier generation for various system components.
