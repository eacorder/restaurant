

export function navbar ()  {
    const navbar = document.createElement('ul');
    const menu = document.createElement('li');
    const home = document.createElement('li');
    const about = document.createElement('li');
    navbar.classList.add('navbar')
    menu.innerHTML= "Menu";
    home.innerHTML = "Home";
    about.innerHTML = "About us";
    menu.classList.add("menu");
    home.classList.add("homeMenu");
    about.classList.add("about");

    navbar.appendChild(home);
    navbar.appendChild(menu);
    navbar.appendChild(about);
    return navbar;
} 