from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import os
from dotenv import  load_dotenv

load_dotenv()

print(f"Debug - Loaded Gemini Key: {'Running' if os.getenv('GEMINI_API') else 'Missing'}")

app = FastAPI(title="Tactical Engine 2026")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"], # 指向你的 Web 端地址
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def read_root():
    return {
        "status": "online",
        "message": "The Engine is roaring! GGMU! 🔴",
        "tactics": "High Pressing"
    }