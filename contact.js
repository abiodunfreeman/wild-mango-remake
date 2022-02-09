// const content = document.querySelector('#content');
const contact = document.createElement('div');
    contact.id = 'contact';
function contactDiv (){    
    const header = document.createElement('div');
        header.id = 'contact-header';
        header.innerHTML = `<h2>Contact Us</h2>`;
        contact.appendChild(header); //adds header to contact
        const container = document.createElement('div');
            container.id = 'contact-container';
        const infoContact = document.createElement('div');
            infoContact.id = 'contact-info';
            infoContact.innerHTML = `<h3>Wild Mango Restraunt</h3> </br>
                                     25385 Cedar Road</br>
                                     Lyndhurst, Ohio, 44124</br>
                                     Phone:216 716-8001</br>
                                     Online inquiries at - 
                                    </br> info@wildmangorestaurant.com
            `;
            container.appendChild(infoContact); //adds info to container
        
            const map = document.createElement('div');
            map.id = 'map';
            map.innerHTML = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2988.0555140393276!2d-81.50381358413644!3d41.50307177925375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x883103e40bd4cd9f%3A0x376683975edd2615!2sWild%20Mango%20Restaurant%20and%20Bar-Legacy%20Village!5e0!3m2!1sen!2sus!4v1644346006785!5m2!1sen!2sus"
                             width="600" height="450" style="border:0;" 
                             allowfullscreen="" loading="lazy"></iframe>`
            container.appendChild(map); //adds map to container

            contact.appendChild(container);
        
   
}



// function initMap() {
//     const mapDiv = document.createElement('div');
//     mapDiv.id = 'map';
//     const wildMango = {
//         lat: 41.50925378594586,
//         lng: -81.49579445902936,
//     };
//     const map = new google.maps.Map(document.getElementById("map"), {
//         zoom: 4,
//         center: wildMango,
//       });
      
//       mapDiv.appendChild(map);
// }

contactDiv();
content.appendChild(contact);