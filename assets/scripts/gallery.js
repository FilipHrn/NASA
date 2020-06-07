// API PIC OF THE DAY
let req2 = new XMLHttpRequest;
req2.open('get', 'https://api.nasa.gov/planetary/apod?api_key=1W4umlJWFIxop9tB68XYTjspUJFca3PmvEeFF4wf');
req2.responseType = 'json';
req2.send();

req2.onreadystatechange = function (){
    if (req2.readyState === 4 && req2.status === 200) {
        let infoObj = req2.response;
        
        // Removing Loading Indicator
        let daddyPic = document.getElementById('image-of-the-day');
        while(daddyPic.hasChildNodes()){
            daddyPic.removeChild(daddyPic.firstChild);
        }

        // Display Info
        let newSection = document.createElement('section');
        newSection.classList.add('gallery-section');
        newSection.classList.add('pic-of-the-day');
        daddyPic.appendChild(newSection);

        let newA = document.createElement('a');
        newA.href = infoObj.hdurl;
        newA.target = "_blank";
        newSection.appendChild(newA);

        let newImg = document.createElement('img');
        newImg.src = infoObj.url;
        newImg.alt = "Picture of the day";
        newA.appendChild(newImg);

        let newH3 = document.createElement('h3'); 
        newH3.textContent = infoObj.title;
        newSection.appendChild(newH3);

        let newP = document.createElement('p');
        newP.classList.add('explanation');
        newP.textContent = infoObj.explanation;
        newSection.appendChild(newP);

        let newP2 = document.createElement('p');
        newP2.textContent = "Date: " + infoObj.date;
        newSection.appendChild(newP2);

        let newP3 = document.createElement('p');
        newP3.textContent = "Copyright: " + infoObj.copyright;
        newSection.appendChild(newP3);
    }
}

// API MARS PHOTOS
let req = new XMLHttpRequest;
req.open('get', 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=1W4umlJWFIxop9tB68XYTjspUJFca3PmvEeFF4wf');
req.responseType = 'json';
req.send();

req.onreadystatechange = function (){
    if (req.readyState === 4 && req.status === 200) {
        let photos = req.response.photos.map(function(photo) {
            return {
                name: photo.camera.full_name,
                img: photo.img_src,
                date: photo.earth_date
            }
        });

        console.log(photos);

        // Removing Loading Indicator
        let daddyMars = document.getElementById('mars-photos');
        while(daddyMars.hasChildNodes()){
            daddyMars.removeChild(daddyMars.firstChild);
        }

        // Display Items
        for(let x = 0; x < photos.length; x++) {
            let newSection = document.createElement('section');
            newSection.classList.add('gallery-section');
            daddyMars.appendChild(newSection);
            
            let newA = document.createElement('a');
            newA.href = photos[x].img;
            newA.target = "_blank";
            newSection.appendChild(newA)

            let newImg = document.createElement('img');
            newImg.src = photos[x].img;
            newImg.alt = "Photo of mars."
            newA.appendChild(newImg);
        
            let newP1 = document.createElement('p');
            newP1.textContent = "Camera: " + photos[x].name;
            newSection.appendChild(newP1);
        
            let newP2 = document.createElement('p');
            newP2.textContent = "Date: " + photos[x].date;
            newSection.appendChild(newP2);
        }
    }
}







