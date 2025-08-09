# 💌 MoodMail – Emotion-Based Email Generator

A lightweight, interactive React app that generates mood-based email subject lines and footer messages based on how you're feeling.



---


## ✨ Features

- Take mood input from the user (e.g., “happy”, “sad”, “angry”, "nervous", "excited")
- Dynamically generates a subject line with current date and footer
- Copy the subject 
- Matching mood emoji 😄😢😠🙂
- Clean, responsive UI built with TailwindCSS
- Folder-based structure with reusable components

---

## 🧠 What You’ll Learn

- React state handling using `useState`
- Conditional rendering based on logic
- String methods: `toLowerCase()`, `includes()`
- Basic component-driven UI design
- Separation of logic and UI
- TailwindCSS + ShadCN integration for clean UI

---

## 🛠 Tech Stack

| Tool         | Purpose                           |
|--------------|-----------------------------------|
| React + Vite | Frontend Framework + Dev Server   |
| TypeScript   | Type-safe development             |
| Tailwind CSS | Utility-first UI styling          |
| ShadCN       | Pre-styled React UI components    |

---

## 📁 Folder Structure


```
src/
├── components/
│   ├── MoodInput.tsx      # Input field + generate button
│   ├── MoodOutput.tsx     # Shows generated subject/footer
├── pages/
│   └── Home.tsx           # Main app logic and UI
├── App.tsx                # Root component
├── main.tsx               # React DOM entry
└── index.css              # Tailwind CSS import
```

---

## 🚀 Getting Started

Follow these steps to run the project locally:

### 1. Clone the repo

```bash
git clone https://github.com/krithika94/MoodGenerator.git
cd moodmail-generator
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the app

```bash
npm run dev
```

Now open your browser and go to:  
👉 [http://localhost:5173](http://localhost:5173)

---


