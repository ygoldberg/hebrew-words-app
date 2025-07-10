from pydantic import BaseModel

class Verb(BaseModel):
    shoresh: str
    binyan: str
    translation: str
