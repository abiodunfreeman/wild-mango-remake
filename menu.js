const menu = document.createElement('div');
    menu.id = 'menu';

function menuDiv (){
    const header = document.createElement('div');
    header.innerHTML = `<h2>Menu</h2>`;
  menu.appendChild(header);
}



menuDiv();
content.appendChild(menu);