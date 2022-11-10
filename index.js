/*Add new DOM event listeners and handlers to log the mouse state of each button.

- When a user's mouse enters a button, log `"Entered <textContent> button"` to the console.
- When a user's mouse leaves a button, log `"Left <textContent> button"` to the console.

**TIP:** Each event type will need a separate event listener.
*/

  'use strict';

  // YOUR CODE HERE
  // stop light =============================================
  const stopButton = document.querySelector('#stopButton')
  const stopLight = document.querySelector('#stopLight')
  let stopTog = false

  

  //stopButton.addEventListener('click', function(){
   /* 
    if (stopTog === false){ // possible function
    stopLight.classList.add('stop') // turns light on
    stopTog = true
    }else {
        stopLight.classList.remove('stop') // turns light off
        stopTog = false
    }
    */
    
  //})
  // slow light ===========================================
  const slowButton = document.querySelector('#slowButton');
  const slowLight = document.querySelector('#slowLight');
  let slowTog = false;


  slowButton.addEventListener('click', function(){
  if (slowTog === false){
    slowLight.classList.add('slow')
    slowTog = true
    }else {
        slowLight.classList.remove('slow')
        slowTog = false
    }
   
  })

  // go light =============================================
  const goButton = document.querySelector('#goButton');
  const goLight = document.querySelector('#goLight')
  let goTog = false;

  goButton.addEventListener('click', function(){
  if (goTog === false){
    goLight.classList.add('go') 
    goTog = true
    }else {
      goLight.classList.remove('go') 
      goTog = false
    }

    
  })
  toggle(stopButton, stopLight, stopTog)
  toggle(slowButton, slowLight, slowTog)
  toggle(goButton, goLight, goTog)
  mouse(stopButton);
  mouse(slowButton);
  mouse(goButton);

  function toggle(button, light, tog){
    button.addEventListener('click', function(){
      if (tog === false){
        light.classList.add(button.textContent.toLowerCase) 
        tog = true
        }else {
          light.classList.remove('go') 
          tog = false
        }
    
        
      })

  }


  function mouse(button){
    button.addEventListener('mouseenter', () => {
    console.log(`Entered ${button.textContent} button`)
  })
  stopButton.addEventListener('mouseleave', () => {
    console.log(`Left ${button.textContent} button`)
  })
  console.log(button)
}