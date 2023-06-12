// Add click event listener to video element and implement play and pause functionality
 const video = document.getElementById('myVideo')
 video.addEventListener('click', () => {
  if(video.paused){
    video.play();
  }
     else {
        video.pause();
     }
})
