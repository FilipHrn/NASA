// Validating the form
var event = document.getElementById("submit");
event.addEventListener('click', function(e){
    // Remove after completion
    e.preventDefault();

    // Storing input
    let firstName = document.getElementById("first-name");
    let lastName = document.getElementById("last-name");
    let email = document.getElementById("email");
    let inquiry = document.getElementById("inquiry");

    let infoArray = [
        firstName,
        lastName,
        email,
    ];

    // Making regex
    let firstNameReg = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/g;
    let lastNameReg = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/g;
    let emailReg = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    let regArray = [
        firstNameReg,
        lastNameReg,
        emailReg
    ];
    
    // Testing regex and storing result
    let resultArray = [];

    for(let c = 0; c < infoArray.length; c++) {
        resultArray[c] = regArray[c].test(infoArray[c].value);
    }

    // Final answer
    let result = resultArray.every(function(e){
        return e === true;
    });
    
    // Consequences
    if(result === true) {
        let bigDaddy = document.getElementById("form-container");
        
        // Removing everything
        while(bigDaddy.hasChildNodes()){
            bigDaddy.removeChild(bigDaddy.firstChild);
        }

        // Adding confirmation
        let newH3 = document.createElement("h3");
        newH3.textContent = "Success! The form has been submited";
        bigDaddy.appendChild(newH3);

        let newP = document.createElement("p");
        newP.style.textAlign = "center";
        newP.textContent = "Thank you " + firstName.value + " " + lastName.value + " . We will answer you as soon as we can at " + email.value + ".";
        bigDaddy.appendChild(newP);
    }else {
        // Removing Indicator function
        function secondChance() {
            this.classList.remove("wrong");
            this.value = "";
            this.removeEventListener('click', secondChance);
        }

        // Adding the wrong indicator
        for (let i = 0; i < resultArray.length; i++) {
            if(resultArray[i] === false){
                infoArray[i].classList.add("wrong");
                infoArray[i].addEventListener('click', secondChance);
            }
        }
    }

}, false);