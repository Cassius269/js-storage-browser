console.log('hello world');

///----------PARTIE 1. LES COOKIES --------///
// Ecrire le nom d'utilisateur dans un cookie
document.cookie = `username=john-dow@exemple.com; max-age=86400`;
document.cookie = 'darkmode=true; max-age=86400';

// Lire tous les cookies
console.log(document.cookie);

// Lire spécifiquement le contenu d'un cookie
function getCookie(name) {
  let cookie = {};
  document.cookie.split(';').forEach(function(el) {
    let split = el.split('=');
    cookie[split[0].trim()] = split.slice(1).join("=");
  })
  return cookie[name];
}

document.cookie="username=; expires=Mon";
// console.log(getCookie('darkmode'))
console.log(document.cookie);

///----------PARTIE 1. La SessionStorage --------///
// Stockage en session de l'email et nom de l'utilisateur
sessionStorage.setItem('email', 'john-dow@exemple.com');
sessionStorage.setItem('name', 'JOHN Dow');

// Lecture des données en sessionStorage
let email = sessionStorage.getItem('email');
console.log('email', email);

// Suppression de l'email de l'utilisateur en session
sessionStorage.removeItem('email');