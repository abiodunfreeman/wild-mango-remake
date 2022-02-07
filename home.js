const home = document.createElement('div');
home.classList.add('tabs');
home.id = 'home';

const pictures = [ //array of food pictures and corresponding names
    ['assets/pepsi-shrimp.png', 'pepsi shrimp'],
    ['assets/Barramundi.png', 'Barramundi'],
    ['assets/cheesecake.png', 'Cheese Cake'],
    ['assets/chocolate-cake.png', 'Chocolate Cake'],
    ['assets/lobster.png', 'Lobster'],
    ['assets/salmon-duo.png', 'salmon duo'],
    ['assets/sashmi.png', 'Sashmi'],
    ['assets/surfturf.png', 'Surf and Turf'],
    ['assets/tuna-tar-tar.png', 'Tuna Tartar']

]

pictures.forEach((pic) => {  //creates an img div for each array element and appends to home div
    const imgDiv = document.createElement('div');
        imgDiv.classList = 'imgDiv';
    const img    = document.createElement('img'); //img goes into imgDiv
        img.src  = pic[0];
        img.classList = 'gallery'
    imgDiv.appendChild(img);

    const name = document.createElement('h2');
        name.textContent = pic[1].toUpperCase();
    imgDiv.appendChild(name);


    home.appendChild(imgDiv);
})

footerPic(home);

function footerPic (pageToAppend) {
    const div = document.createElement('div');
    div.id = 'footer'
    const img = document.createElement('img');
    img.src = 'assets/kitchen.png';
    div.appendChild(img);

    const locations = document.createElement('ul');
    const east = document.createElement('li');
    east.textContent = 'Eastside location: 25385 Cedar Road, Lyndhurst Ohio 44124'
    locations.appendChild(east);

    const west = document.createElement('li');
    west.textContent = 'WESTSIDE LOCATION: 139 Crocker park blvd, westlake, ohio 44145'
    locations.appendChild(west);
    
    div.appendChild(locations);

    pageToAppend.appendChild(div);

}











content.appendChild(home);