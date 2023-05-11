const card = document.querySelector("#card");
const botones = document.querySelector("#botones");
const acOne = document.querySelector("#one");
const acTwo = document.querySelector("#two");
const acThree = document.querySelector("#three");
const acFour = document.querySelector("#four");
const acFive = document.querySelector("#five");
const sumbit = document.querySelector("#send");

botones.addEventListener("click", SelectedNumber);
function SelectedNumber() {
        botones.addEventListener("click", (e) => {
            if (e.target.id === "one") {
                acOne.classList.add("active");
                acTwo.classList.remove("active");
                acThree.classList.remove("active");
                acFour.classList.remove("active");
                acFive.classList.remove("active");
            } else if (e.target.id === "two"){
                acOne.classList.remove("active");
                acTwo.classList.add("active");
                acThree.classList.remove("active");
                acFour.classList.remove("active");
                acFive.classList.remove("active");
            } else if (e.target.id === "three") {
                acOne.classList.remove("active");
                acTwo.classList.remove("active");
                acThree.classList.add("active");
                acFour.classList.remove("active");
                acFive.classList.remove("active");
            } else if (e.target.id === "four") {
                acOne.classList.remove("active");
                acTwo.classList.remove("active");
                acThree.classList.remove("active");
                acFour.classList.add("active");
                acFive.classList.remove("active");
            } else {
                acOne.classList.remove("active");
                acTwo.classList.remove("active");
                acThree.classList.remove("active");
                acFour.classList.remove("active");
                acFive.classList.add("active");
            }
        })
}

document.addEventListener("click", ThanksMassage);

function ThanksMassage(e) {

    if (e.target.id) {
            const selectedId = document.getElementById(e.target.id)
            sumbit.addEventListener("click", (e) => {
            card.innerHTML = `<div>
            <img src="./images/illustration-thank-you.svg" alt="thankyou" class="imgsub">
                <h2 class="h2">You selected ${selectedId.textContent}  out of 5</h2>
    
                <h1>Thank you!</h1>
    
    <p class="texto">We appreciate you taking the time to give a rating. If you ever need more support, 
    don't hesitate to get in touch!</p> 
    </div>`;
            })
    }
}