# 📢 Notification System

A frontend-based notification system built using React that allows users to create, view, sort, and filter notifications. The application is designed with a focus on modularity, responsiveness, and graceful error handling.

---

---


---

## ✨ Features

- ✅ Create notifications (Placement / Event / Result)
- ✅ Real-time UI updates (instant display without waiting for API)
- ✅ Priority-based sorting  
  - Placement > Event > Result  
- ✅ Filtering by notification type
- ✅ Logging middleware integration
- ✅ Error handling with fallback data
- ✅ Clean and responsive UI

---

## 🛠️ Tech Stack

- React (Vite)
- JavaScript (ES6+)
- Axios (API calls)
- CSS (inline styling)

---

## 🧠 Architecture

- **Components**
  - `NotificationForm` → Handles user input
  - `NotificationList` → Displays notifications

- **Services**
  - `api.js` → API communication
  - `auth.js` → Authentication handling

- **Middleware**
  - `logger.js` → Logging system

---

## 🏗️ System Architecture

```mermaid
graph TD
    A[User] --> B[NotificationForm]
    B --> C[App State]
    C --> D[NotificationList]

    B --> E[API Service]
    E --> F[Backend Server]

    B --> G[Auth Service]
    G --> F

    E --> H[Logger Middleware]
    G --> H
    H --> F

    F -->|Success| E
    F -->|Failure| I[Fallback Data]

    I --> C
    E --> C
---

## 🔄 Data Flow

1. User enters notification details  
2. UI updates instantly using local state  
3. API request is triggered  
4. If API fails, fallback ensures UI still works  
5. Notifications are displayed with sorting and filtering  

---

## ⚠️ Error Handling

- Graceful handling of API failures  
- Fallback mock data ensures uninterrupted user experience  
- Logging system captures errors without breaking UI  

---

## 🧪 How to Run Locally

```bash
# Clone repo
git clone https://github.com/Nikita-Saxena391/notification-app.git

# Go to project folder
cd notification-app

# Install dependencies
npm install

# Run project
npm run dev
