from fastapi import APIRouter
import json
from pathlib import Path

router = APIRouter()

DATA_PATH = Path(__file__).resolve().parent.parent / "data" / "data.json"

with open(DATA_PATH, encoding="utf-8") as f:
    VERBS = json.load(f)["verbs"]

@router.get("/")
def get_verbs():
    return VERBS
