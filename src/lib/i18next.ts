import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';

i18next.use(initReactI18next).use(LanguageDetector).init({
    fallbackLng: "en",
    debug: true,
    resources: {
        en: {
            translation: {
                home: "Home",
                timetable: "Timetable",
                substitutions: "Substitutions",
                other: "Other"
            }
        },
        pl: {
            translation: {
                home: "Strona główna",
                timetable: "Plan lekcji",
                substitutions: "Zastępstwa",
                other: "Inne"
            }
        },
        uk: {
            translation: {
                home: "Головна",
                timetable: "Розклад",
                substitutions: "Заміни",
                other: "Інше"
            }
        }
    }
});

export default i18next;
