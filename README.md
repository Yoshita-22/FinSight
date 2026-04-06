# 💰 FinSight – Finance Dashboard

A simple and interactive finance dashboard to track transactions, understand spending patterns, and get useful insights.
Built as a frontend-focused project to explore UI design, state management, and data visualization.

---

## 🚀 Features

### 📊 Dashboard Overview

* Total Income, Expenses, Balance
* Savings rate and financial score

### 📈 Charts & Insights

* Line chart for balance trends (last few months)
* Pie chart for category-wise spending
* Insights like:

  * Top spending category
  * Monthly comparison

### 💳 Transactions Management

* View all transactions
* Search by category
* Filter by type (Income / Expense)
* Sort by date or amount
* Pagination support

### 👥 Role-Based UI

* **Viewer** → Can only view data
* **Admin** → Can add, edit, delete transactions

### 🌗 UI/UX Features

* Dark / Light mode
* Fully responsive (mobile, tablet, desktop)

### 💾 Local Storage Support

* Data persists even after refresh

---

## ⚙️ How It Works

* All data is stored as transactions
* Summary, charts, and insights are **calculated dynamically**
* Month selection acts as a **global filter** across the dashboard

---

## 🛠 Tech Stack

* React.js
* Tailwind CSS
* Recharts
* React Context API

---

## 📦 Installation

```bash
git clone https://github.com/Yoshita-22/FinSight
cd FinSight
npm install
npm run dev
```

---

## 🧠 Key Decisions

* Used **Context API** for simple and effective state management
* Kept transactions as the **single source of truth**
* Separated:

  * Global state → month filter
  * Local state → search, sort, filters
* Derived all computed data instead of storing duplicates

---

## 🎨 Code & Styling Approach

* Clean and modular component structure
* Tailwind CSS with reusable design patterns
* Consistent spacing, colors, and typography
* Focused on scalable and readable styling

---

## ⚠️ Limitations

* No backend (data stored in localStorage)
* Basic insights (can be extended further)
* Role-based access is only simulated

---

## 🔮 Future Improvements

* Add backend (Firebase / Node.js)
* Advanced analytics and insights
* Export functionality (CSV / PDF)

---

## 🎯 Project Goal

The goal of this project was not just to build a dashboard,
but to focus on how data is structured, processed, and presented in a meaningful way.
