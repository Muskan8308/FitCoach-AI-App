# AI Fitness Coach

A fitness tracking web application with an integrated AI chatbot powered by the Gemini Flash API. Users can log workouts, view history, and get AI-based fitness suggestions.

---

## Features

* Add and track daily workouts
* View workout history
* AI chatbot for fitness-related guidance
* Floating chatbot interface
* Responsive and clean UI

---

## Tech Stack

* Frontend: React (Vite), Tailwind CSS
* Backend/Database: Supabase
* AI Integration: Google Gemini API (gemini-1.5-flash)
* Deployment: Vercel

---

## Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/Muskan8308/FitCoach-AI-App
cd fitcoach-ai
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env` file in the root directory:

```
VITE_GEMINI_API_KEY=your_api_key_here
```

### 4. Run the application

```bash
npm run dev
```

---

## Live Demo

[https://your-pp.vercel.app
](https://fitcoach-ai-amber.vercel.app/)
---

## AI Chatbot Functionality

The chatbot uses the Gemini Flash API to generate responses.
It takes user input, sends it to the API, and displays short, practical fitness advice.

---

## Design Decisions and Tradeoffs

* Frontend-based API calls were used for faster implementation
* Gemini Flash was chosen for speed and low latency
* UI was kept minimal to prioritize functionality
* Backend AI proxy was skipped due to time constraints

---

## Future Improvements

* Secure API handling using backend or edge functions
* User personalization and memory
* Chat history storage
* Improved UI/UX

---

## Author

Muskan Chourasia  
Final Year B.Tech Student
