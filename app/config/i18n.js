import * as R from 'ramda'

export const messages = {
  languages: {
    fr: 'Français',
    en: 'English',
    es: 'Español'
  },
  homePage: {
    fr: "Page d'accueil",
    en: 'Home page',
    es: 'Pagina de inicio'
  },
  login: {
    fr: 'Connexion',
    en: 'Login',
    es: 'Conexión'
  },
  loginPage: {
    fr: 'Page de connexion',
    en: 'Login page',
    es: 'Página de acceso'
  }
}

export default R.memoize((locale = 'en') => {
  const res = {}
  R.keys(messages).forEach(key => {
    res[key] = messages[key][locale]
  })
  return res
})
