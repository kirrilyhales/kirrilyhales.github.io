document.addEventListener('DOMContentLoaded', () =>{

// Chapter Button Press Variables
var chapter1Button = document.getElementById('chapter1')
var chapter2Button = document.getElementById('chapter2')
var chapter3Button = document.getElementById('chapter3')
var chapter4Button = document.getElementById('chapter4')


// Close Buttons Variables
var closeChapter1 = document.getElementById('closeChapter1')
var closeChapter2 = document.getElementById('closeChapter2')
var closeChapter3 = document.getElementById('closeChapter3')
var closeChapter4 = document.getElementById('closeChapter4')

// Pop Up Section Variables
var chapterID1 = document.getElementById("chapter1PopUpID");
var chapterID2 = document.getElementById("chapter2PopUpID");
var chapterID3 = document.getElementById("chapter3PopUpID");
var chapterID4 = document.getElementById("chapter4PopUpID");

var blurSectionID = document.getElementById("blurSection")


// Open Window Declaration
chapter1Button.onclick = function () {
    openChapter1Popup();

    // blur background
    addBlur();
};

chapter2Button.onclick = function () {
    openChapter2Popup();

    // blur background
    addBlur();
};

chapter3Button.onclick = function () {
    openChapter3Popup();

    // blur background
    addBlur();
};

chapter4Button.onclick = function () {
    openChapter4Popup();

    // blur background
    addBlur();
};

// Close Window Declaration
closeChapter1.onclick = function(){
  closeChapter1Popup();
};

closeChapter2.onclick = function(){
  closeChapter2Popup();
};

closeChapter3.onclick = function(){
  closeChapter3Popup();
};

closeChapter4.onclick = function(){
  closeChapter4Popup();
};




// Open Popup Window Functions
function openChapter1Popup(){
  console.log("Chapter 1 pressed")
  chapterID1.classList.toggle("show");

}

function openChapter2Popup(){
  console.log("Chapter 2 pressed")
  chapterID2.classList.toggle("show");
}

function openChapter3Popup(){
  console.log("Chapter 3 pressed")
  chapterID3.classList.toggle("show");
}

function openChapter4Popup(){
  console.log("Chapter 4 pressed")
  chapterID4.classList.toggle("show");
}

// Close Popup Window Functions
function closeChapter1Popup(){
  console.log("Chapter 1 closed")
  chapterID1.classList.toggle("show");
  removeBlur()

}

function closeChapter2Popup(){
  console.log("Chapter 2 closed")
  chapterID2.classList.toggle("show");
  removeBlur()

}

function closeChapter3Popup(){
  console.log("Chapter 3 closed")
  chapterID3.classList.toggle("show");
  removeBlur()

}

function closeChapter4Popup(){
  console.log("Chapter 4 closed")
  chapterID4.classList.toggle("show");
  removeBlur()

}





function addBlur(){
  console.log("Blur Added")
  blurSectionID.classList.toggle("blur")
}

function removeBlur(){
  console.log("Blur Removed")
  blurSectionID.classList.toggle("blur")
}



// Make the DIV element draggable:
dragElement(document.getElementById("notification1Image"));
dragElement(document.getElementById("notification2Image"));
dragElement(document.getElementById("fingerprintImageImage1"));
dragElement(document.getElementById("fingerprintImageImage2"));
dragElement(document.getElementById("notification5Image"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

})
