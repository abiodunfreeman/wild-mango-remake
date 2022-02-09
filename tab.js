const tabs = document.querySelector('.nav-tabs');

    tabs.addEventListener('click', (e) => {
        // console.log(e.target)
        if (e.target.textContent == 'contact'){
            home.style.display = 'none';
            menu.style.display = 'none';
            contact.style.display = 'flex';
        } else if (e.target.textContent == 'home') {
            menu.style.display = 'none';
            contact.style.display = 'none';
            home.style.display = 'grid';
        } else if (e.target.textContent == 'menu') {
            home.style.display = 'none';
            contact.style.display = 'none';
            menu.style.display = 'grid';

        }
    })