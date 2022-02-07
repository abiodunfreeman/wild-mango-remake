const employment = document.createElement('div');
employment.classList.add('tabs');
employment.id = 'employment';
 


function addText () {
    const text = document.createElement('div');
    text.id = 'textOne';
    text.textContent = 'We are now hiring all team members for our east-side location. Please send your application and resume to: info@wildmangorestaurant.com'
    employment.appendChild(text);
}










addText();
footerPic(employment);

content.appendChild(employment);