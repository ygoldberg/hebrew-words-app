from fastapi import APIRouter
import json
from pathlib import Path

router = APIRouter()

FALLBACK_VERBS = [
    {
        "shoresh": "ט.ע.ה",
        "english": "to err / make a mistake",
        "family": "Pa'al - irregular",
        "infinitive": "לִטְעוֹת",
        "present_masc_sg": "טוֹעֶה",
        "present_masc_pl": "טוֹעִים",
        "present_fem_sg": "טוֹעָה",
        "present_fem_pl": "טוֹעוֹת"
    }
]

try:
    DATA_PATH = Path(__file__).resolve().parent.parent / "data" / "data.json"
    with open(DATA_PATH, encoding="utf-8") as f:
        VERBS = json.load(f)["verbs"]
except Exception as e:
    print(f"⚠️ Failed to load data.json: {e}")
    VERBS = FALLBACK_VERBS

@router.get("/")
def get_verbs():
    return VERBS
