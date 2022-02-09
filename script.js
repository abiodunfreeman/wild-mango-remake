const content = document.querySelector('#content');
const home    = document.createElement('div');
    home.id = 'home';
function homeContent (){
    const pictures = [
        ['assets/salmon-duo.png', 'Salmon Duo'],
        ['assets/cheesecake.png', 'Cheesecake'],
        ['assets/tuna-tar-tar.png', 'Tuna Tartar'],
        ['assets/pepsi-shrimp.png', 'Pepsi Shrimp'],
        ['assets/Barramundi.png','Barramundi'],
        ['assets/lobster.png','Lobster'],
        ['assets/sashmi.png', 'Sashmi'],
        ['assets/surfturf.png','Surf and Turf'],
        // ['assets/chocolate-cake.png', 'Chocolate Cake']
    ]
    const whoDiv = document.createElement('div');
        whoDiv.id = 'who-div';
        whoDiv.innerHTML = `Welcome to The Pearl Monkey, the worlds finest eating establishment!
                   </br></br>     We are located on the East side, conveinently located inside Legacy Village!
                 </br></br>   Our cuisuine consist of and interesting mixture of Asian Fusion dishes hand crafted by our expert chefs!
                   `
        home.appendChild(whoDiv)
    const picturesDiv = document.createElement('div');

    pictures.forEach(pic => {
        const picDiv = document.createElement('div');
        picDiv.innerHTML = `<img src='${pic[0]}'>
                        </br> ${pic[1]}
        `
        home.appendChild(picDiv);
    })
    
}
homeContent();
content.appendChild(home);