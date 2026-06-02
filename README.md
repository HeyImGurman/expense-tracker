# Expense Tracker App

A modern React-based Expense Tracker application that allows users to add, organize, and visualize their daily expenses through an interactive and responsive user interface.

## Features

* Add and manage expenses dynamically
* Categorize expenses
* View expenses in a structured table
* Expense visualization using charts and graphs
* Real-time total expenditure calculation
* React Context API for global state management
* Responsive and clean UI design

## Tech Stack

* React
* React Router DOM
* Context API
* Recharts
* CSS3

## Project Structure

The application is built using a component-based architecture with shared global state management through React Context API.

Key sections include:

* Expense Form
* Expense Table
* Expense Graphs
* Navigation System

## Current Limitations

This project is still under development and some major production features have not been implemented yet.

### Features Not Implemented Yet

* User authentication / Sign In system
* Settings management
* Permanent cloud/database storage
* Backend integration

## Storage Warning

Currently, all expenses are stored only in the browser's temporary local application state.

This means:

* Expenses are NOT stored in a real database
* Data may reset on browser refresh or application reload
* Data persistence is not guaranteed yet

A proper storage/database system will be added in future updates.

## Future Improvements

Planned features include:

* MongoDB or SQL database integration
* User accounts and authentication
* Expense editing and deletion
* Persistent local storage
* Advanced analytics dashboard
* Better mobile responsiveness
* Exporting expense reports

## Learning Purpose

This project was primarily built to strengthen understanding of:

* React fundamentals
* State management
* Context API
* Component architecture
* Dynamic rendering
* Data visualization
* Frontend project structuring

## Installation

```bash
git clone <repository-url>
cd expense-tracker
npm install
npm run dev
```

## Author

Built as a frontend learning and practice project using React.
