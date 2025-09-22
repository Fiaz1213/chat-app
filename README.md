# 💬 Real-Time Chat Application

A full-stack chat application built with **React**, **Node.js**, **MongoDB**, and **Socket.IO** for real-time messaging.  
Styled with **Tailwind CSS** and **DaisyUI**, with global state managed by **Zustand** && **Context**.

---

## 🚀 Tech Stack

- **Frontend:** React (Vite), Tailwind CSS, DaisyUI, Zustand
- **Backend:** Node.js, Express, Socket.IO
- **Database:** MongoDB (Mongoose ORM)
- **Utilities:** Random Avatars API

---

## 🎨 UI & Styling

- Tailwind CSS → [https://tailwindcss.com/docs/installation/using-vite](https://tailwindcss.com/docs/installation/using-vite)
- DaisyUI → [https://daisyui.com/components/](https://daisyui.com/components/)

---

## 🖼️ Avatars

Random avatars are generated using:  
👉 [Random Avatars API](https://avatar-placeholder.iran.liara.run/)

---

## ⚙️ Prerequisites

- Node.js (v16+) and npm
- MongoDB (local `mongod` or MongoDB Atlas)
- Postman / HTTP client to test APIs (recommended)

---

## ⚙️ Setup & Run

#### 1- Clone the repository

#### 2- Install backend packages

npm i

#### 3- Install front-end packages

cd ./frontend

npm i

#### 4- Create .env file in root directory, use vars from template.env and update appropriate values

#### 5- Create initial users, messages, conversations via Postman:

##### a) SIGNUP

URL => http://localhost:5000/api/auth/signup
TYPE => POST
BODY => {
"fullName": "Fiaz Shah",
"username": "fiaz",
"password": "123456",
"confirmPassword": "123456",
"gender": "male"
}

##### b) LOGIN

URL => http://localhost:5000/api/auth/login
TYPE => POST
BODY => {
"username": "fiaz",
"password": "123456"
}

##### c) LOGOUT

URL => http://localhost:5000/api/auth/logout
TYPE => POST

##### d) GET USERS

URL => http://localhost:5000/api/users
TYPE => GET

##### e) SEND MESSAGES

URL => http://localhost:5000/api/messages/send/<userId>
TYPE => POST
BODY => {
"message": "Your message here"
}

##### f) GET MESSAGES

URL => http://localhost:5000/api/messages/<conversations-id>
TYPE => GET

## 🙌 Credits

[Codesistency](https://www.youtube.com/@codesistency)
