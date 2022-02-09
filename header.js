
const content = document.getElementById('content');
const header  = document.createElement('header');
const navDiv = document.createElement('div');
    navDiv.id = 'nav-div';

logoDiv(); //appends logo div to header
navigationDiv();//appends navigationDiv to header
content.appendChild(header); //appends header to content div






function logoDiv () {
    const logoDiv        = document.createElement('div');
    logoDiv.id           = 'logo-div';

    const logo           = document.createElement('img');
    logo.id              = 'logo';
    logo.src             = 'assets/Logo.gif';

    const logoText       = document.createElement('h1');
    logoText.textContent = 'Wild Mango';
    logoText.id = 'logo-text';

    logoDiv.appendChild(logo);
    logoDiv.appendChild(logoText);
    header.appendChild(logoDiv);

    

}

function navigationDiv () {
    
    pageList();
    locations();
    header.appendChild(navDiv)
}

function pageList () {
    const pages = document.createElement('ul');
    pages.id = 'page-list';

    const home  = document.createElement('li');
    home.textContent = 'HOME';
    home.id = 'home-tab';
    pages.appendChild(home);

    const pictures  = document.createElement('li');
    pictures.textContent = 'pictures';
    pages.appendChild(pictures);

    const menu  = document.createElement('li');
    menu.textContent = 'menu';
    pages.appendChild(menu);

    const contact  = document.createElement('li');
    contact.textContent = 'contact';
    pages.appendChild(contact);

    const employment  = document.createElement('li');
    employment.textContent = 'employment';
    pages.appendChild(employment);

    navDiv.appendChild(pages);
}

function locations () {
    const local = document.createElement('ul');
    local.id = 'locations';
    const lynd = document.createElement('li');
    lynd.textContent = `Lyndhurst: 216-716-8001`
    local.appendChild(lynd);

    const westL = document.createElement('li');
    westL.textContent = `Westlake : 440-979-1888`
    local.appendChild(westL);

    navDiv.appendChild(local);
}