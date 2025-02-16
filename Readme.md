# **📝 Todo App (React + Express + Firebase Auth & Firestore)**

## **🚀 Project Overview**
This is a **full-stack Todo App** with **Firebase Authentication** and **Firestore database**, built using:
- **Frontend:** React, TailwindCSS
- **Backend:** Node.js, Express.js
- **Database:** Firebase Firestore
- **Authentication:** Firebase Auth (Google & Email/Password)

### **🔹 Features**
✅ **User Authentication (Google & Email/Password)**  
✅ Add & manage multiple **titles (categories)**  
✅ Add, edit, mark complete, and delete **todos** under a title  
✅ Delete an entire **title and all associated todos**  
✅ **Protected Routes** (Users can only manage their own todos)  
✅ **REST API with proper error handling**  
✅ **Fully responsive UI**  

---

## **📂 Folder Structure**
```
/backend
🗀🔍 controllers/        # Handles business logic
🗀🔍 routes/             # Defines API routes
🗀🔍 config/             # Firebase config
🗀🔍 index.js            # Express server
🗀🔍 package.json        # Backend dependencies

/frontend
🗀🔍 src/
    🗀🔍 components/     # Reusable components (Navbar, TodoItem, TodoList, Auth)
    🗀🔍 pages/          # Pages (Home, Todos, Login, Register)
    🗀🔍 services/       # API calls (firebase.js)
    🗀🔍 config/         # Firebase SDK config
    🗀🔍 App.js          # Main App component
    🗀🔍 index.js        # React entry point
🗀🔍 package.json        # Frontend dependencies
```

---

## **⚡ Setup & Installation**
### **1️⃣ Clone the Repository**
```sh
git clone git@github.com:iAmAreza/TODO-FERN.git
cd todo-app
```

### **2️⃣ Install Dependencies**
#### **Backend**
```sh
cd backend
npm install
```
#### **Frontend**
```sh
cd frontend
npm install
```

### **3️⃣ Configure Firebase**
1. **Create a Firebase project** at [Firebase Console](https://console.firebase.google.com/)
2. **Enable Firebase Authentication** (Google & Email/Password)
3. **Get your Firebase Admin SDK JSON file** for Firestore and place it inside the backend config.
4. **Get your Firebase client-side config** and place it inside the frontend.

---

## **▶️ Running the App**
### **Backend (Express Server)**
```sh
cd backend
node index.js  # or npm run dev (if using nodemon)
```
### **Frontend (React)**
```sh
cd frontend
npm run dev
```

---

## **📌 API Endpoints**
| **Method** | **Endpoint** | **Description** |
|------------|-------------|----------------|
| **POST** | `/api/auth/register` | Register a new user |
| **POST** | `/api/auth/login` | User login |
| **POST** | `/api/titles` | Add a new title (Authenticated users only) |
| **GET** | `/api/titles` | Get all titles for logged-in user |
| **DELETE** | `/api/titles/:titleId` | Delete a title and its todos |
| **POST** | `/api/todos` | Add a new todo under a title |
| **PUT** | `/api/todos/:titleId/:todoId` | Update a todo (edit, complete) |
| **DELETE** | `/api/todos/:titleId/:todoId` | Delete a todo |

---


---

## **🛠️ Tech Stack**
- **Frontend:** React, TailwindCSS, Axios, Firebase Auth SDK
- **Backend:** Node.js, Express.js, Firebase Admin SDK
- **Database:** Firebase Firestore
- **Authentication:** Firebase Auth (Google, Email/Password)

---

## **🔖 Upcoming Features**
🔹 **OAuth Authentication (Facebook, GitHub, etc.)**  
🔹 **Email Verification & Password Reset**  
🔹 **User Profile & Avatar Support**  

---

## **📝 License**
This project is **open-source** under the **MIT License**.

---


