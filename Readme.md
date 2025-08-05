📦 Project Overview
Welcome to the Super Awesome Hospital Management System – a modern web app built with the powerful MERN stack! Designed to help hospitals and clinics manage doctors, patients, appointments, medications, billing, and more — all from one seamless dashboard.

Whether you're tired of handwritten prescriptions or want to prevent double-booked appointments, this system has your back.

🚀 Tech Stack (MERN)
MongoDB – NoSQL database for storing structured healthcare data

Express.js – Backend framework for building RESTful APIs

React.js – Frontend library for dynamic and responsive UI

Node.js – JavaScript runtime for the backend server

🧠 Features
👨‍⚕️ Doctor Management
Add, update, delete, and view doctors

Search doctors by specialization

Track availability

🤒 Patient Management
Securely manage patient records

Search by disease, age range

View medication history

📅 Appointment Scheduling
Book, update, and cancel appointments

Prevent double bookings

View appointment statuses

💊 Medication & Prescriptions
Manage medicines

Create and manage prescriptions

💰 Billing System
Generate invoices

Track payments

View revenue reports

👮 User Authentication & Roles
Secure login system with JWT

Role-based access: Admin / Doctor / Receptionist

📝 Logging & Reports
Activity logs

Financial reports



🔐 Authentication Flow
Users log in with email/password

Backend returns a JWT token

Token is stored in localStorage and sent in headers for protected routes

Roles: admin, doctor, receptionist (used for access control)