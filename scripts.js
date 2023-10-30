


let containerDiv = document.createElement("div");
containerDiv.className = "container";

let div = document.createElement("div");
div.className = "col-md-4";

div.innerHTML = `
  <div >
  <h1 class="text-center text-nowrap">Enter a Number:</h1>
  <input type="number" class="form-text w-100 h-25" id="numberInput">
    <button id="getNumberFactButton">Get Number Fact</button>
    <div id="numberFactDisplay"></div>
  `;


containerDiv.appendChild(div);


document.body.appendChild(containerDiv);

let numberInput = document.getElementById('numberInput');
let getNumberFactButton = document.getElementById('getNumberFactButton');
let numberFactDisplay = document.getElementById('numberFactDisplay');


getNumberFactButton.addEventListener('click', () => {
    
    let userNumber = numberInput.value;
    if (!userNumber) {
      
      numberFactDisplay.textContent = 'Please enter a number.';
  } else {


   let result = fetch(`http://numbersapi.com/${userNumber}`)
   result.then((response) => {
        return response.text();
    })
    .then((data4) => {
        numberFactDisplay.textContent = data4;
    })
    
}
});
 



