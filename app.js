// declared variables
let myVideo = document.getElementById("myVideo");
let icon = document.getElementById("icon");
let overlay = document.querySelector(".overlay");

// Toggle play/pause
function togglePlayPause() {
  if (myVideo.paused) {
    myVideo.play();
    icon.src = "./play&pause/pause.png"; // Update the path to the pause image
  } else {
    myVideo.pause();
    icon.src = "./play&pause/play.png";
  }
}

// To the play/pause button
icon.addEventListener("click", togglePlayPause);

// To the video to reset the button when it ends
myVideo.addEventListener("ended", function () {
  icon.src = "./play&pause/play.png";
});

// To show the icon when not playing
overlay.addEventListener("mouseover", function () {
  if (myVideo.paused) {
    icon.style.display = "block";
  } else {
    icon.style.display = "block";
    icon.src = "./play&pause/pause.png";
  }
});

// To hide the icon when not playing
overlay.addEventListener("mouseout", function () {
  if (myVideo.paused) {
    icon.src = "./play&pause/play.png";
  } else {
    icon.style.display = "none";
    icon.style.borderRadius = "50%";
  }
});

/*----------------highlights images--------------*/

// declared variables
let myIndex = 0;
myCarousel();

function myCarousel() {
  let i;
  let j = document.getElementsByClassName("slideShow");
  for (i = 0; i < j.length; i++) {
    j[i].style.display = "none";
  }
  myIndex++;
  if (myIndex > j.length) {
    myIndex = 1;
  }
  j[myIndex - 1].style.display = "block";
  setTimeout(myCarousel, 2000);
}

/*---------------navbar-------------*/

document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  menuToggle.addEventListener("click", function () {
    navLinks.classList.toggle("active");
  });

  // Close the menu when a link is clicked
  const navLinksList = document.querySelectorAll(".nav-links a");
  navLinksList.forEach(function (link) {
    link.addEventListener("click", function () {
      navLinks.classList.remove("active");
    });
  });
});
