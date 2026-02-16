# Football Agent

> Real-time Tactical Analysis & AI Copilot for Football Matches
> Powered by Next.js, Python (FastAPI), and LLMs.

## Project Overview

This is a hardcore football tactical analysis platform designed to provide real-time insights beyond traditional statistics.

We focus on advanced metrics such as "Pressing Intensity", "Momentum", and "AI Tactical Interpretation" rather than just basic possession stats.

### Architecture

This project uses a Twin-Engine Architecture:

* **Web (Frontend):** Handles visualization, interaction, and real-time data rendering.
    * **Tech Stack:** Next.js (App Router), TypeScript, Tailwind CSS, Shadcn UI, Recharts (Charts), Vercel AI SDK.
* **Engine (Backend):** Handles data cleaning, core algorithmic calculations, and LLM tactical reasoning.
    * **Tech Stack:** Python 3.11+, FastAPI, Pandas (Data Analysis), LangChain/OpenAI/Gemini (AI Agents).

---

## Getting Started

### Prerequisites
* Node.js 18+
* Python 3.10+
* **API Keys Needed:**
    * `API-Football` (from api-sports.io) - For live match data.
    * `OPENAI_API_KEY` (or Google Gemini Key) - For AI tactical analysis.

### 1. Engine Setup (Backend)

The Engine runs on port `8000` by default.

```bash
cd engine

# Create virtual environment
python -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Create .env file
cp .env.example .env
# (Make sure to fill in your API Keys in .env)

# Run the server
uvicorn app.main:app --reload
```
### 2. Web Setup (Frontend)
The Web runs on port `3000` by default.

```bash
cd web
# Install dependencies
npm install
# Create .env file
cp .env.example .env.local
# (Make sure to set API_BASE_URL=http://localhost:8000 in .env)
# Run the development server
npm run dev
```

### Project Structure

```
football-agent/
├── engine/                 # Python Backend (The Brain)
│   ├── app/
│   │   ├── main.py         # Entry point & CORS setup
│   │   ├── api/            # API Endpoints (e.g., /matches, /analysis)
│   │   ├── services/       # Core Logic (LLM calls, Data processing)
│   │   └── models/         # Pydantic Schemas (Data Validation)
│   └── requirements.txt
│
├── web/                    # Next.js Frontend (The View)
│   ├── src/
│   │   ├── app/            # App Router Pages
│   │   ├── components/     # UI Components (Pitch, Charts, Chat)
│   │   ├── lib/            # Utilities & API Clients
│   │   └── types/          # TypeScript Interfaces
│   └── package.json
│
└── README.md
```
