/*
Code Function for the arrow change, when window size is greater than 696px, the  arrow is white but when it is less than 696px, the arrows change to red.
My Mobile screen code starts from 645px and downward
*/


window.onload = function() {
  let theWidth = document.documentElement.offsetWidth;
  let allArrows = document.querySelectorAll(".arrow");
  if (theWidth <= "696") {
    togetDiv.style.display = "none";
    for (let i =0; i < allArrows.length; i++) {
      allArrows[i].getElementsByTagName("img")[0].src = "icon-arrow-dark.svg";
    }
  } else {
    togetDiv.style.display = "block";
    for (let i =0; i < allArrows.length; i++) {
      allArrows[i].getElementsByTagName("img")[0].src = "icon-arrow-light.svg";
    }
  }
}


window.onresize = function() {
  let theWidth = document.documentElement.offsetWidth;
  let allArrows = document.querySelectorAll(".arrow");
  if (theWidth <= "696") {
    togetDiv.style.display = "none";
    openBtn.style.display = "block";
    closeBtn.style.display = "none";
    mainTBRImg.src = "illustration-editor-mobile.svg";
    mainBCLImg.src = "illustration-laptop-mobile.svg";
    for (let i =0; i < allArrows.length; i++) {
      allArrows[i].getElementsByTagName("img")[0].src = "icon-arrow-dark.svg";
    }
  } else {
    togetDiv.style.display = "block";
    closeBtn.style.display = "none";
    openBtn.style.display = "none";
    mainTBRImg.src = "illustration-editor-desktop.svg";
    mainBCLImg.src = "illustration-laptop-desktop.svg";
    for (let i =0; i < allArrows.length; i++) {
      allArrows[i].getElementsByTagName("img")[0].src = "icon-arrow-light.svg";
    }
  }
}



/*
Code function for the harmburger and close svg
*/


// Get the together div
let togetDiv = document.querySelector(".together");

// Get the close button
let closeBtn = document.querySelector(".close");
let closeBtnImg = closeBtn.querySelector("img");
closeBtnImg.onclick = () => {
  closeBtn.style.display = "none";
  openBtn.style.display = "block";
  togetDiv.style.display = "none";
}

// Get the open button
let openBtn = document.querySelector(".open");
let openBtnImg = openBtn.querySelector("img");
openBtnImg.onclick = () => {
  openBtn.style.display = "none";
  closeBtn.style.display = "block";
  togetDiv.style.display = "block";
}


// Get main-top-body-right
let mainTBR = document.querySelector(".main-top-body-right");
let mainTBRImg = document.querySelector("#illustrator-edit");

// Get main-bottom-container-left
let mainBCL = document.querySelector(".main-bottom-container-left");
let mainBCLImg = document.querySelector("#illustrator-laptop");