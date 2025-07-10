from fastapi import APIRouter

router = APIRouter()

@router.get("/")
def get_verbs():
    return [{'shoresh': 'כ.ת.ב', 'english': 'to write', 'family': "Pa'al - רגיל", 'infinitive': 'לִכְתּוֹב', 'present_masc_sg': 'כּוֹתֵב', 'present_masc_pl': 'כּוֹתְבִים', 'present_fem_sg': 'כּוֹתֶבֶת', 'present_fem_pl': 'כּוֹתְבוֹת'}, {'shoresh': 'א.כ.ל', 'english': 'to eat', 'family': "Pa'al - רגיל", 'infinitive': 'לֶאֱכוֹל', 'present_masc_sg': 'אוֹכֵל', 'present_masc_pl': 'אוֹכְלִים', 'present_fem_sg': 'אוֹכֶלֶת', 'present_fem_pl': 'אוֹכְלוֹת'}, {'shoresh': 'ל.מ.ד', 'english': 'to learn', 'family': "Pa'al - רגיל", 'infinitive': 'לִלְמוֹד', 'present_masc_sg': 'לוֹמֵד', 'present_masc_pl': 'לוֹמְדִים', 'present_fem_sg': 'לוֹמֶדֶת', 'present_fem_pl': 'לוֹמְדוֹת'}]
