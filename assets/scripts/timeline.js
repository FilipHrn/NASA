// Timeline
let icons = [...document.querySelectorAll(".timeline-icons")];
let titles = ["Establishment of NASA", "First man to orbit the earth", "First man on the moon", "Hubble Telescope", "Mission: Mars Perserverance Rover"];
let info = ["Since 1946, the National Advisory Committee for Aeronautics had already been experimenting with rocket planes. Early in 1950s there was a challenge to launch an artificial satellite. After soviets launch of worlds first satellite Sputnik 1 in 1957, USA was alarmed by this percieved threat, that is also known as Sputnik 1 crisis. At start of 1958 NACA organized a Special Committee on Space Technology that conducted all non-military space activity, the ARPA was created the month later to developer space technology for military application. In July, Eisenhower signed National Aeronautics and Space Act, establishing NASA that began operations in october later that year. NASA absorbed 43-year-old NACA intact, its 8000 employees, annual budget of 100 million dollars, three major research laboratories and two small test facilities.", 
"In 1962, NASA launched one of the most important flights in American history. The mission was to send a man to orbit the earth. The pilot had to meet seven requirements in order to be qualified. The pilot had to be test pilot school graduate. Had to be in excellent shape. Younger than 40 years old. Shorter than 5 feet 11 inches. Qualified jet pilot. Having at least 1500 hours flying time. Bachelors degree in engineering. The chosen pilot was John Glenn and in 4 hours and 56 minutes, he circled the globe three times at top speed of more than 17000 miles per hour.", 
"At July 1969, the first man stepped onto the moons surface. This mission was set as a goal by president John Kennedy 8 years earlier. The goal was to perform a crewed lunar landing and safe return to earth. There was additional tasks to be done such as exploring with lunar module, deployment of television camera to transmit signals to earth, deployment of a solar wind composition experiment, seismic experiment and a laser ranging retroreflector. During the exploration they also took samples of lunar ground surfaces and materials for return to earth.",
"Hubble Telescope is named after American astronomer Edwin Hubble. It is designed to be maintained in space by astronauts. Deployed in 1990 with shuttle Discovery STS-31. First image was taken at may 20, 1990 featuring star cluster NGC 3532. There has been five mission including the telescope both repairing and upgrading. First one STS-61 at december 1993, second february 1997 STS-82, third STS-103 at december 1999, forth at february 2002 STS-109 and fifth at may 2009 STS-125.",
"At July 2020, the rover will search for signs of habitable conditions and for signs of microbial life. The rover will launch on a United Launch ALliance Atlas V rocket from Space Launch Compled 41. Yet to happen."];
let links = [
    "https://www.nasa.gov/exploration/whyweexplore/Why_We_29.html",
    "https://www.nasa.gov/centers/glenn/about/bios/mercury_mission.html",
    "https://www.nasa.gov/mission_pages/apollo/missions/apollo11.html",
    "https://www.nasa.gov/mission_pages/hubble/story/index.html",
    "https://www.nasa.gov/perseverance"
];

icons.forEach(function(e){
    e.addEventListener('click', function(){
        let i = icons.indexOf(e);
        let oldSrc = e.src;
        let daddy = document.getElementById("info-container");

        // Resetting other image src activasion
        for(let x = 0; x < icons.length; x++){
            icons[x].src = icons[x].src.slice(0, icons[x].src.lastIndexOf(x)) + x + ".png";
        };
        
        // Removing Info
        while(daddy.hasChildNodes()){
            daddy.removeChild(daddy.firstChild);
        };

        // Making activision for corresponding link
        let newSrc = oldSrc.slice(0, oldSrc.lastIndexOf(i)) + i + "_light.png";
        e.src = newSrc;

        // Adding Info
        let title = document.createElement("h3");
        title.textContent = titles[i];
        daddy.appendChild(title);

        let p = document.createElement("p");
        p.textContent = info[i];
        daddy.appendChild(p);

        let a = document.createElement("a");
        a.innerHTML = " Read&nbsp;More";
        a.href = links[i];
        a.target = "_blank";
        p.appendChild(a);

    }), false;
}), false;