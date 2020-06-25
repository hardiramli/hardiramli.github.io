import Vue from 'vue'
import VueI18n from 'vue-i18n'

import languages from '../data/i18n/languages.json'
import en from '../locales/en'

Vue.use(VueI18n)

export function createI18n(router: any){
    const fallbackLocale = 'id'
    const globalLanguages:{[key:string]: any}={}
    const hasDocument = typeof document !=='undefined'
    const loadedLanguages: any[] = []

    let locale = fallbackLocale

    if(hasDocument){
        locale = document.documentElement.lang
    }

    const i18n = new VueI18n({
        fallbackLocale,
        locale,
        messages: { en },
        silentFallbackWarn:true
    })

    function setI18nLanguage(lang: string){
        i18n.locale = lang

        if(hasDocument){
            document.querySelector('html')?.setAttribute('lang',lang)
        }
        return lang
    }

    function loadedLanguagesAsync(lang: string){
        if(!loadedLanguages .includes(lang)){
        
            const locale = languages.find(l=>lang ===l.locale)||{}
        
            
            if(!locale){return Promise.reject(new Error('Language not found'))}

            return import(
                /* webpackChunkName: "lang-[request]" */
                `@/locales/${locale}`
            ).then(msgs=>{
                loadedLanguages.push(lang)
                globalLanguages[lang]=msgs.default
                i18n.setLocaleMessage(lang,globalLanguages[lang])
                return Promise.resolve(setI18nLanguage(lang))
            }).catch(err=>{
                console.log(err)
                throw err
            })
        }
        return Promise.resolve(setI18nLanguage(lang))
    }

    router.beforeEach((to: { params: { lang: string } },from: any,next: () => any)=>{
        loadedLanguagesAsync(to.params.lang)
        .then(()=>next())
        .catch(()=>{})
    })
    return i18n   
}