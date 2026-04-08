# 📘 Activity Selection Problem using Greedy Method
### Greedy Algorithm Implementation using React + Flask

![Project Banner](https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/assets/1645012881183-Article_246.png)

An interactive web application that demonstrates the **Activity Selection Problem using the Greedy Algorithm** with step-by-step visualization.

Users can add activities, run the algorithm, and visually see how compatible activities are selected using a timeline representation.

---

# 🚀 Features

- Add activities manually (Start Time – Finish Time)
- Example dataset for quick demonstration
- Step-by-step greedy algorithm visualization
- Timeline representation of selected activities
- Displays rejected activities
- Shows maximum number of non-overlapping activities
- Frontend and backend validation
- Error handling for invalid inputs

---

# 🧠 Algorithm Used

This project implements the **Greedy Activity Selection Algorithm**.

### Algorithm Steps

1. Sort activities based on **finish time**
2. Select the first activity
3. For each next activity check: **start ≥ last_finish**
4. If compatible → select activity  
5. If not compatible → reject activity  

### Time Complexity
O(n log n)
Sorting dominates the complexity.

---

# 🏗️ Project Architecture
Frontend (React)
│
│ Axios API Call
▼
Backend (Flask API)
│
Greedy Algorithm Execution
│
JSON Response
▼
Step Visualization + Timeline Rendering

---

# 🖥️ Technologies Used

### Frontend
- React.js
- Axios
- CSS

### Backend
- Python
- Flask
- Flask-CORS

---
# ⚙️ Installation & Setup

## 1️⃣ Clone the repository

```bash
git clone https://github.com/Krish-zinzuvadiya/IP_DAA.git
cd IP_DAA
```
## 2️⃣ Backend Setup

Install dependencies:
```bash
cd backend
pip install flask flask-cors
```
Run the server:
```bash
python app.py
```
Backend runs on:
```bash
http://127.0.0.1:5000
```

## 3️⃣ Frontend Setup

Navigate to frontend folder:
```bash
cd frontend
npm install
npm start
```
Frontend runs on:
```bash
http://localhost:3000
```
---
# 📚 Learning Objectives

**This project demonstrates:**

● Greedy Algorithm implementation

● Activity Scheduling Problem

● Frontend-Backend integration

● Data visualization techniques

● Input validation and error handling

---
# 👨‍💻 Author

Krish Zinzuvadiya

GitHub:
https://github.com/Krish-zinzuvadiya






