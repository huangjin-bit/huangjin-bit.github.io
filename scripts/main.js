const myImage = document.querySelector("img");

const FIREFOX_IMAGE_1 = "images/firefox1.jpg";
const FIREFOX_IMAGE_2 = "images/firefox2.jpg";

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === FIREFOX_IMAGE_1) {
    myImage.setAttribute("src", FIREFOX_IMAGE_2);
  } else {
    myImage.setAttribute("src", FIREFOX_IMAGE_1);
  }
};
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
function setUserName() {
  let myName = prompt("Please enter your name.");
  while (!myName || !myName.trim()) {
    myName = prompt("Name cannot be empty. Please enter your name.");
  }
  localStorage.setItem("name", myName);
  myHeading.textContent = `Mozilla is cool, ${myName}`;
}
if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Mozilla is cool, ${storedName}`;
}
myButton.onclick = function () {
  setUserName();
};