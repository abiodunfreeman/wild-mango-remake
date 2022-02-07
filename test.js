const navBar = document.getElementById('page-list');
const tabs   = document.querySelectorAll('.tabs');
navBar.addEventListener('click', (e) => {
    if (e.target.textContent === 'HOME') {
        tabs.forEach(tab => {
            tab.style.display = 'none';
            home.style.display = 'grid';
        })
    } else if (e.target.textContent =='employment') {
        tabs.forEach(tab => {
            tab.style.display = 'none';
            employment.style.display = 'flex';
        })
        console.log('employment clicked')
    }
    
})