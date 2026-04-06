FinSight - Finance Dashboard
A simple and interactive finance dashboard to track transactions, understand spending patterns, and get useful insights.
Built as a frontend focused project to explore UI design, state management, and data visualization.

Features
 Dashboard Overview
Total Income, Expenses, Balance
Savings rate and financial score
📈 Charts & Insights
Line chart for balance trend (last few months)
Pie chart for category-wise spending
Simple insights like top category and monthly comparison
🧾 Transactions Management
View all transactions
Search by category
Filter by type (income/expense)
Sort by date or amount
Pagination support
👥 Role-based UI
Viewer → can only view data
Admin → can add, edit, delete transactions
🌙 Dark / Light Mode
📱 Responsive Design
Works across mobile, tablet, and desktop screens
💾 Local Storage Support
Data persists even after refresh

How It Works
All data is stored as transactions
Summary, charts, and insights are calculated dynamically
Month selection acts as a global filter across the dashboard

Tech Stack
React.js
Tailwind CSS
Recharts
React Context API

Installation
  git clone https://github.com/Yoshita-22/FinSight
  cd FINSIGHT
  npm install
  npm run dev
  
Key Decisions
  Used Context API for simple and effective state management
  Kept transactions as the single source of truth
  Separated global state (month filter) and local state (search, sort, filters)
  Derived all computed data instead of storing duplicates
  
Code & Styling Approach
  Followed a clean and modular component structure
  Used Tailwind CSS with reusable design patterns
  Maintained consistent spacing, colors, and typography
  Focused on scalable and readable styling approach
  
Limitations
  No backend (data stored in localStorage)
  Basic insights (can be extended further)
  Role-based access is only simulated
  
Future Improvements
  Add backend (Firebase / Node.js)
  Advanced analytics and insights
  Export functionality (CSV / PDF)
  
The goal of this project was not just to build a dashboard, but to focus on how data is structured, processed, and presented in a meaningful way.
