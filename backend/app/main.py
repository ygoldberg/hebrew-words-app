from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.api import verbs

app = FastAPI()

# Allow CORS for your frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Or specify: ["https://hebrew-words-app.onrender.com"]
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Mount the /verbs route
app.include_router(verbs.router, prefix="/verbs", tags=["verbs"])
