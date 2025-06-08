# 📝 Node.js CRUD App with EJS, MySQL, and Docker

A simple web application built with **Node.js**, **Express**, **EJS**, and **MySQL** to demonstrate basic CRUD operations. The app is fully containerized using **Docker**.

---

## ✨ Features

- 🧑 List all users
- ➕ Add new users
- ❌ Delete users
- 🎨 EJS templating with clean UI
- 🐳 Easy setup using Docker

---

## 📦 Tech Stack

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [EJS](https://ejs.co/)
- [MySQL](https://www.mysql.com/)
- [Docker](https://www.docker.com/)

---

## 📦 Project Structure

```
ejs-crud-docker/
├── docker-compose.yml
├── src/
│   ├── Dockerfile
│   ├── app.js
│   ├── db.js
│   ├── package.json
│   ├── views/
│   │   └── index.ejs
│   └── public/
│       └── style.css
```

---

## ⚙️ Setup Instructions

### 🔧 Prerequisites

- [Docker](https://www.docker.com/) & Docker Compose installed

### 📦 Run the App

```bash
git clone https://github.com/your-username/ejs-crud-docker.git
cd ejs-crud-docker
docker-compose up --build
```

Then open your browser at: [http://localhost:3000](http://localhost:3000)

---

## 🪪 License

This project is licensed under the [MIT License](LICENSE)
