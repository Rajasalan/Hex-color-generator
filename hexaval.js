let generateButton = document.querySelector('.submit');
const input = document.querySelector("input");
const resultcontainer = document.querySelector(".result-container");


for (let i = 1; i <= 5; i++) {

    //generating random colors when button is pressed

    let color = rgbGenerator(); // random function is called here
    let autoDiv = document.createElement('div'); //creating div to display colors
    autoDiv.style.backgroundColor = color;
    autoDiv.setAttribute('class', 'auto-gen-div')

    let btnCopy = document.createElement('button'); // creating copy button
    btnCopy.style.backgroundColor = "white";
    btnCopy.setAttribute('class', 'btn-copy');

    let span = document.createElement('span'); // creating span to display the color value or code
    span.textContent = color;

    autoDiv.appendChild(span);

    //creating a function to copy the color code

    btnCopy.addEventListener("click", () => {
        // try {

        var range = document.createRange(); // create new range object
        range.selectNodeContents(span); // set range to encompass desired element text
        var selection = window.getSelection(); // get Selection object from currently user selected text
        selection.removeAllRanges(); // unselect any user selected text (if any)
        selection.addRange(range); // add range to Selection object t;
        /*  } catch (err) {
             console.log(err);
         } */
        document.execCommand("copy");

    });

    btnCopy.textContent = "copy";
    resultcontainer.appendChild(autoDiv)
    autoDiv.appendChild(btnCopy);


    // }
}













generateButton.addEventListener("click", e => {

    //getting input value from user, to display number of color which user had entered in text box

    let inputvalue = input.value;
    resultcontainer.innerHTML = '';
    //const wrapper = document.querySelector('.wrapper');
    //  if (input.value != "") {
    for (let i = 0; i < input.value; i++) {

        //generating random colors when button is pressed

        let color = rgbGenerator(); // random function is called here
        let autoDiv = document.createElement('div'); //creating div to display colors
        autoDiv.style.backgroundColor = color;
        autoDiv.setAttribute('class', 'auto-gen-div')

        let btnCopy = document.createElement('button'); // creating copy button
        btnCopy.style.backgroundColor = "white";
        btnCopy.setAttribute('class', 'btn-copy');

        let span = document.createElement('span'); // creating span to display the color value or code
        span.textContent = color;

        autoDiv.appendChild(span);

        //creating a function to copy the color code

        btnCopy.addEventListener("click", () => {
            // try {

            var range = document.createRange(); // create new range object
            range.selectNodeContents(span); // set range to encompass desired element text
            var selection = window.getSelection(); // get Selection object from currently user selected text
            selection.removeAllRanges(); // unselect any user selected text (if any)
            selection.addRange(range); // add range to Selection object t;
            /*  } catch (err) {
                 console.log(err);
             } */
            document.execCommand("copy");

        });

        btnCopy.textContent = "copy";

        resultcontainer.appendChild(autoDiv)
        autoDiv.appendChild(btnCopy);


        // }
    }
    empty();
});


function rgbGenerator() {
    var letters = '0123456789abcdef';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)]; // same like i+=1; i=1+i;
        //color =color + (letters[Math.floor(Math.random() * 16)]);
    }
    return color;
}
console.log(rgbGenerator());

const empty = function () {
    let inputEmpty = document.querySelector('#hexa-val');
    inputEmpty.value = '';
};