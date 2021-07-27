console.log(data);

// WRITE YOUR CODE BELOW!

// - Render the top list of dogs using the list item template you'll find on the HTML file
// - Each list item should be clickable. When you click on an item, the selected dog should display on the main card
// - The main card should contain all the information from the selected dog. Follow the template for the main card that you'll find on the HTML file.
// - There should be only one card at the time on the screen
// - The card should have a button that toggles for the selected dog between good dog/ bad dog

// Tips
// - Take advantage of scope in JS to have access to the data you need
// - Remember you can add event listeners to any element on the page




//Create bridge (using the ul class)
const bridge = document.querySelector(".dogs-list");

// 1 - Render a function for the <ul class="dogs-list"> 
//1.1 - input - array / output - string "name".

function renderListDogs(array){

for (let i = 0; i < array.length; i++) {
 const name = array[i].name;

   const liEl = document.createElement("li");
   liEl.className = "dogs-list__button";
   liEl.innerText = `${name}`;
   

   // function for the Event Listener

liEl.addEventListener("click", () =>{renderCard(array[i])
});

   bridge.append(liEl);
}
return bridge;
}

const dogosList = renderListDogs(data);
console.log(dogosList);

//* target li(add button) + event listener

const bridgeButtonPlus = document.querySelector(".dogs-list__button--add");
// bridgeButtonPlus.addEventListener("click", () =>{renderCard(array[i])
// });



// Create function - form
let bridgeTwo = document.querySelector(".main__dog-section");

const dogLi = document.querySelector(".dogs-list__button--add");

dogLi.addEventListener("click", () =>{renderCard(array[0])
});

// dogLi.addEventListener("submit", (event) => {renderForm();

function renderForm(){

   const tittleForm = document.createElement("h2");
   tittleForm.innerText = "Add your dog to the list"

   const divForm = document.createElement("form");
   divForm.className = "create-user-form";

   const dogNameInput = createUserForm.createElement("input");
   dogNameInput.setAttribute("type" , "text");
   dogNameInput.setAttribute("id" , "username");
   dogNameInput.setAttribute("placeholder" , "Type your dog's name");

   divForm.append(dogNameInput);

    const submitButton = createUserForm.createElement("button");
    submitButton.setAttribute("type" , "submit");

    divForm.append(submitButton);

    bridgeTwo.append(divForm);

    return bridgeTwo;
}


//2 create card for each dog
//2.1 use function+loop to generate all the cards
// input - array / output - objt.


let answer = "";
function renderAnswer(objt){
if (String(objt.isGoodDog) === "false") {
  answer = "Yes";
} else{
    answer = "No";
}
return answer;
}
// const testing = renderAnswer(data[0]);
// console.log(testing);


let buttonGoodBadDog = "";
function renderButton(objt){
if (String(objt.isGoodDog) === "true")  {
  buttonGoodBadDog = "Good dog ♡ ";
} else{
    buttonGoodBadDog = "Bad dog";
}
return buttonGoodBadDog;
}
// const testing = renderButton(data[0]);
// console.log(testing);


function renderCard(objt){

bridgeTwo.innerHTML = "";

    const nameDogo = objt.name;
   const nameDog = document.createElement("h2"); 
   nameDog.innerText = nameDogo;

bridgeTwo.append(nameDog);

   const imgEl = document.createElement("img");
   imgEl.setAttribute("height", "300");
   imgEl.setAttribute("width", "400");

   const imgSrc = objt.image;
   imgEl.setAttribute("src" , imgSrc);

bridgeTwo.append(imgEl);

const divEl = document.createElement("div");
divEl.className = "main__dog-section__desc";

const bio = document.createElement("h3");
bio.innerText = "Bio";

const about = document.createElement("p");
about.innerText = objt.bio;

divEl.append(bio);
divEl.append(about);
bridgeTwo.append(divEl);

const divEle = document.createElement("div");
divEle.className = "main__dog-section__btn";

const goodDog = renderAnswer(objt);

let question = document.createElement("p");
question.innerText = `${"Is naughty?"} ${goodDog}`; 

divEle.append(question);

let buttonGoodBadDogs = renderButton(objt);

let button = document.createElement("button");
button.innerText = "Click here";
// button.innerText = `${buttonGoodBadDogs}`;

 button.addEventListener("click", () =>{button.innerText = renderButton(objt)});

divEle.append(button);

bridgeTwo.append(divEle);

return bridgeTwo;


}

// const test = renderCard(data[2]);
// console.log(test);

