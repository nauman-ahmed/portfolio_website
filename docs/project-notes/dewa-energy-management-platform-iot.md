# DEWA - Energy Management Platform (IoT)

**Stack:** React, Vite, Tailwind CSS, ECharts, Recharts, Google Charts, Three.js, React Three Fiber, React Drei, FullCalendar, Axios, Day.js, Luxon, Express, Node.js, PostgreSQL, pg, Sequelize (migrations)

> Extracted from the portfolio site during the phase 03 content pass.
> Kept here as project documentation; the site now carries a short overview only.

## General Information

**DEWA Energy Management Platform** is a full‑stack web application for building operations and energy analytics. It provides interactive dashboards, **3D visualization**, **schedule management**, and **alert notifications** to support monitoring and decision‑making.

**Project Overview:**

**1. Operations & Scheduling:**

Manage equipment schedules (e.g., coffee machines and building systems) with a modern calendar UI; update or override schedules and automatically log notifications.

**2. Analytics Dashboards:**

Rich energy KPIs and comparative views using **ECharts**, **Recharts**, and **Google Charts**, including spend vs budget/forecast, month‑wise/core‑wise consumption, and stacked comparisons.

**3. 3D Building View:**

An interactive **Three.js** scene via **React Three Fiber**/**Drei** to visualize assets and context in 3D.

**4. Notifications:**

Centralized alerts (critical/warning/normal) with read/unread status to track operational changes and events.

**Technologies Used:**

Built with **React (Vite)** on the frontend and **Express + PostgreSQL** on the backend.

## Project Description

**1. Frontend Features:**

**Dashboards & Analytics:**

- Multiple chart types for energy KPIs (ECharts, Recharts, Google Charts).

- Comparative/stacked bar charts, forecasts, and spend vs budget visualizations.

- Reusable widgets and gauges for quick insights.

**Scheduling & Calendar:**

- **FullCalendar** (daygrid, timegrid, list, interaction) for creating, editing, and reviewing schedules.

- Toast notifications, selects, and date pickers for smooth UX.

**3D Visualization:**

- **Three.js** scene via **@react-three/fiber** and **@react-three/drei** to present building context and assets.

**Pages & Navigation:**

- Key views: Dashboard, Overview, Reports, Schedules, Scheduler, Scheduled Event Calendar, 3D Graphic, Load Management, Notifications.

---

**2. Backend/API:**

**Stack:**

- **Express** server with **pg** client for PostgreSQL; **Sequelize CLI** for migrations.

- CORS and JSON body parsing enabled.

**Endpoints:**

- POST /create-schedule: Create a schedule.

- POST /update-schedule: Update/override a schedule and log a notification.

- GET /get-schedules: List schedules.

- GET /get-schedule/:scheduleId: Fetch a schedule by id.

- GET /get-notifications: List notifications.

- POST /read-notification/:notificationId: Mark as read.

- POST /unread-notification/:notificationId: Mark as unread.

**Database:**

- PostgreSQL with tables for _schedules_ and _notifications_ (migrations present).

- SSL-enabled connection via environment variables.

---

**3. Interaction & UX:**

**Responsive & Interactive:**

- Tailwind CSS for responsive UI, tooltips, toasts, and date/time utilities (Day.js, Luxon).

- Selection components and filters for asset/category/core/level.

## Technologies Used

**1. Frontend:**

- React 18 (Vite) for SPA architecture and performance.

- Tailwind CSS, PostCSS, Autoprefixer for responsive styling.

- FullCalendar for scheduling UI.

- Three.js + React Three Fiber + Drei for 3D.

**2. Data Visualization:**

- ECharts, Recharts, Google Charts for robust, interactive analytics.

**3. Backend:**

- Node.js, Express for REST APIs, CORS, and JSON handling.

- PostgreSQL with pg client; Sequelize CLI for migrations.

**4. Utilities:**

- Axios, React Toastify, React Select, Day.js, Luxon.

## Libraries Used

1. **React** / **Vite** — SPA structure and fast dev tooling.

2. **Tailwind CSS**, **PostCSS**, **Autoprefixer** — Responsive styling pipeline.

3. **ECharts**, **Recharts**, **react-google-charts** — Charts and analytics.

4. **Three.js**, **@react-three/fiber**, **@react-three/drei** — 3D visualization and helpers.

5. **@fullcalendar/react** (+ daygrid, timegrid, list, interaction) — Calendar and scheduling UI.

6. **Axios**, **react-toastify**, **react-select**, **react-tooltip** — UX and data handling utilities.

7. **Day.js**, **Luxon** — Date/time utilities.

8. **Express**, **pg**, **Sequelize CLI** — REST API, PostgreSQL access, and migrations.

9. **dotenv**, **cors**, **nodemon** — Configuration, cross‑origin support, dev reload.
