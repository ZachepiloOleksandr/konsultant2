
const inteligeceHandler = (event) => {

    const inteligece_text = document.getElementById("inteligece_text");

    inteligece_text.innerHTML = event.target.value;
};
const criticalHandler = (event) => {
    const critical_text = document.getElementById("critical_text");

    critical_text.innerHTML = event.target.value;
};
const initiateHandler = (event) => {
    const initiate_text = document.getElementById("initiate_text");

    initiate_text.innerHTML = event.target.value;
};
const ustupchivostHandler = (event) => {
    const ustupchivost_text = document.getElementById("ustupchivost_text");

    ustupchivost_text.innerHTML = event.target.value;
};
const friendlyestHandler = (event) => {
    const ifriendlyest_text = document.getElementById("friendlyest_text");

    ifriendlyest_text.innerHTML = event.target.value;
};
const emotionsHandler = (event) => {
    const emotions_text = document.getElementById("emotions_text");

    emotions_text.innerHTML = event.target.value;
};









document.addEventListener("DOMContentLoaded", () => {
    const inteligece_input = document.getElementById("inteligece_input");
    const critical_input = document.getElementById("critical_input");
    const initiate_input = document.getElementById("initiate_input");
    const ustupchivost_input = document.getElementById("ustupchivost_input");
    const friendlyest_input = document.getElementById("friendlyest_input");
    const emotions_input = document.getElementById("emotions_input");

    inteligece_input.addEventListener('input', inteligeceHandler)
    critical_input.addEventListener('input', criticalHandler)
    initiate_input.addEventListener('input', initiateHandler)
    ustupchivost_input.addEventListener('input', ustupchivostHandler)
    friendlyest_input.addEventListener('input', friendlyestHandler)
    emotions_input.addEventListener('input', emotionsHandler)
});



