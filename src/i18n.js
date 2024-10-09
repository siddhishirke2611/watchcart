import i18n from "i18next";
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from "react-i18next";

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        debug: true,
        fallbackLang: "en",
        resources: {
            en: {
                translation: {
                    strong: "Welcome to Watchcart!",
                    offer: "Wrap new offers/gift every single day on Weekends.",
                }
            },
            fr: {
                translation: {
                    strong: "Bienvenue sur Watchcart !",
                    offer: "Enveloppez de nouvelles offres/cadeaux chaque jour le week-end." ,
                }
            },
            ar: {
                translation: {
                    strong: "مرحبا بكم في واتش كارت!",
                    offer: "احصل على عروض/ هدايا جديدة كل يوم في عطلات نهاية الأسبوع.",
                }
            }
        }
    })