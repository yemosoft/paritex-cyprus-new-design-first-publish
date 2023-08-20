import { createI18n } from "vue-i18n";


const messages = {
    en: {
        nav: {
            signUp: "Signup",
            signIn: "Signin",
            profile: "Profile",
            signout: "Signout",
        }
    },
    tr: {
        nav: {
            signUp: "Üye ol",
            signIn: "Giriş yap",
            profile: "Profil",
            signout: "çıkış yap",
        }
    },
    ru: {

    },
}

export default createI18n({
    locale: import.meta.env.VITE_DEFAULT_LOCALE, // <--- 1
    fallbackLocale: import.meta.env.VITE_FALLBACK_LOCALE, // <--- 2
    legacy: false, // <--- 3
    messages
})