function sendAnalytics(data) {
    console.log(data);
}
sendAnalytics("The data")

const button = document.querySelector("button")

function clickHandler(messege: string) {
    console.log("Clicked" + messege);
}

if (button) {
    button.addEventListener("click", clickHandler.bind(null, " hello"));
}
