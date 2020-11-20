let video = document.getElementById("myVideo");
var isIphone = navigator.userAgent.indexOf('iPhone') >= 0;
let play = document.getElementById("myBtn");

if (isIphone) { 

    var canvasVideo = new CanvasVideoPlayer({
        videoSelector: '.video',
        canvasSelector: '.canvas',
        audio: false,
        pauseOnClick: false,
    });
    document.getElementById("myBtn").onclick = IphoneSound;


}else {

    // Use HTML5 video
    document.querySelectorAll('.canvas')[0].style.display = 'none';
    document.getElementById("myBtn").onclick = myFunctionSound;

}   





// Get the button


function myFunctionSound() {
 
  if (video.paused) {
    video.play();
    play.innerHTML = "Pause";
  } else {
    video.pause();
    play.innerHTML = "Play";
  }
}

function IphoneSound() {
  canvasVideo.playPause();
  if (canvasVideo.playing) {
   
    play.innerHTML = "Pause";
   
  } else {
   
    play.innerHTML = "Play";
    
  }
}


document.getElementById("arrow").onclick = openNav;

document.getElementById("close-arrow").onclick = closeNav;

document.getElementById("close-button").onclick = closeNavSmall;

/* Set the width of the side navigation to 250px */
function openNav() {
    document.getElementById("mySidenav").style.right = "0";
    document.getElementById("arrow").classList.add("openNavMenu");
    document.getElementById("close-arrow").style.opacity = "1";
    document.getElementById("close-arrow").style.right = "349px";
     
  }
  
  /* Set the width of the side navigation to 0 */
  function closeNav() {
    document.getElementById("mySidenav").style.right = "-350px";
    document.getElementById("arrow").classList.add("closeNavMenu");
    document.getElementById("close-arrow").style.opacity = "0";
    document.getElementById("close-arrow").style.right = "-100px";
    
  }


  function closeNavSmall() {
    document.getElementById("mySidenav").style.right = "-100vw";
    document.getElementById("arrow").classList.add("closeNavMenu");
    
  }



  


//NEWs TAB

// Get the modal
var modal = document.getElementById("myModal-news");

// Get the button that opens the modal
var btn = document.getElementById("news");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close-news")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}




//About tab

var modal2 = document.getElementById("myModal-about");

// Get the button that opens the modal
var btn2 = document.getElementById("about");

// Get the <span> element that closes the modal
var span2 = document.getElementsByClassName("close-about")[0];

// When the user clicks the button, open the modal 
btn2.onclick = function() {
  modal2.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span2.onclick = function() {
  modal2.style.display = "none";
}


// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal || event.target == modal2) {
    modal.style.display = "none";
    modal2.style.display = "none"
  }
}


