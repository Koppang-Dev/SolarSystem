var help = "<p>+ for zoom in <br> - for zoom out<br>y for moving camera towards negative y axis<br>Y for moving camera towards positive y axis<br>r for making changes movement of all planets<br>m for mercury rotating and revolving<br>v for venus rotating and revolving<br>M for mars rotating and revolving<br>s for saturn rotating and revolving<br>e for earth rotating and revolving<br>u for uranus rotating and revolving<br>j for jupiter rotating and revolving<br>n for neptune rotating and revolving</p>";
var flag = false;
//// MOUSE CLICKING ---------------------------------------------------
/*
Getting the mouse information for clicking on a planet
mouseX and mouseY are in CSS display space relatice to canvas
*/
function planetPicker() {
    if (clicked) {
      return;
    }
  let mouseX = -1;
  let mouseY = -1;
  gl.canvas.addEventListener('mousemove', (e) => {
    const rect = canvas.getBoundingClientRect(); // Gets the position of the canvas relative to the viewport
    mouseX = e.clientX - rect.left; // Calculate horizontal distance from the left edge of viewport to the mouse pointer
    mouseY = e.clientY - rect.top;  // Calculate vertical distance from the top edge of viewport to the mouse pointer
    //console.log("Mouse Coordinates: ", mouseX, mouseY);
  });
  
  // Activate when user clicks
  gl.canvas.addEventListener('click', ()=> {
    clicked = true;
    requestAnimationFrame(() => {
      // Getting pixel under the mouse
  const pixelX = mouseX * gl.canvas.width / gl.canvas.clientWidth;
  const pixelY = gl.canvas.height - mouseY * gl.canvas.height / gl.canvas.clientHeight - 1;
  planetData = new Uint8Array(4);
  // Reads the color values of a pixel at the specified coordinates
  gl.readPixels(
    pixelX,            // x
    pixelY,            // y
    1,                 // width
    1,                 // height
    gl.RGBA,           // format
    gl.UNSIGNED_BYTE,  // type
    planetData);             // Array to hold the result
  
    // Normalizing the planet pixel colour to [0 - 1] RGBA format
    var normalizedColour = [
      planetData[0] / 255.0 * 2,
      planetData[1] / 255.0 * 2,
      planetData[2] / 255.0 * 2,
      planetData[3] / 255.0
    ];
  
    // Setting RGBA values to 2 decimal places
    for(var i = 0; i < 4; i++) {
      normalizedColour[i] = Number(normalizedColour[i].toFixed(2));
    }
  
  
    // RED, GREEN, BLUE, ALPHA
    const planetID = normalizedColour[0] + (normalizedColour[1] << 8) + (normalizedColour[2] << 16) + (normalizedColour[3] << 24); // Converting RGBA values to a single ID
  
    // Using planetID to identify the clicked planet
    selectChoosenPlanet(planetID);
  
    // Remove the event listner after the first click
    gl.canvas.removeEventListener('click', planetPicker);
    });
  }); 
  }
  
  function selectChoosenPlanet(planetID) {
    setTimeout(function() {
  
  
    if (planetID == sunColourID) {
      console.log("Clicked on the Sun");
    } else if (planetID == mercuryColourID) {
      console.log("Clicked on Mercury");
    } else if (planetID == venusColourID) {
      console.log("Clicked on Venus");
    } else if (planetID == earthColourID) {
      console.log("Clicked on Earth");
    } else if (planetID == marsColourID) {
      console.log("Clicked on Mars");
    } else if (planetID == saturnColourID) {
      console.log("Clicked on Saturn");
    } else if (planetID == jupiterClourID) {
      console.log("Cicked on Jupiter");
    } else if (planetID == neptuneColourID) {
      console.log("Clicked on Neptune");
    } else if (planetID == uranusColourID) {
      console.log("Clicked on Uranus");
    } else{
      console.log("Clicked Nothing");
    }
  }, delayInMilliseconds);
  }
  
  function getIDFromColour(colour) {
    return colour[0] + (colour[1] << 8) + (colour[2] << 16) + (colour[3] << 24);
  }
  
  function change(text){
    var operation = document.getElementById("operation2");
    operation.textContent = text;
  }
  function change2(){
    var operation = document.getElementById("operation");
    if (flag) operation.textContent = help;
    else operation.textContent = "Press h or H for help";
  }

  //You can add your planet's user interaction method in this way
  document.addEventListener("keypress",(event)=>{

    var text;

    if(event.key == "h" || event.key == "H"){
      flag = !flag;
      var t = document.getElementById("helpBox");
      if(flag === true) {
        t.innerHTML = help;
      }
      else {
        t.innerHTML = "";
      }
    }

    if(flag == false){
    if(event.key == "+"){
      if(cameraZ > 3){
      cameraZ -= 1.0;
      text  = "Zooming in camera";
      }
      else{
        text  = "Zooming not possible";
      }
    }
  
    if(event.key == "-"){
      if(cameraZ < 60){
      cameraZ += 1.0;
      text  = "Zooming out camera";
      }
      else{
        text  = "Zooming not possible";
      }
    }
  
    if(event.key == "y"){
      if(cameraY >= -15){
      cameraY -= 1.0;
      text  = "Changing the angle of the camera"; 
      }
      else{
        text  = "Cannot change the angle of the camera anymore";
      }
    }
  
    if(event.key == "Y"){
      if(cameraY <= 15){
        cameraY += 1.0;
        text  = "Changing the angle of the camera";
      }
      else{
        text  = "Cannot change the angle of the camera anymore";
      }
        console.log(cameraY);
    }
  
    if(event.key == "r"){
      RotationFlag = !RotationFlag;
      if(RotationFlag){
        text  = "Movement of the planets";
      }
      else{
        text  = "Stopped the movement of the planets";
      }
    }
  
    if(event.key == "m"){
      mercuryRotationFlag = !mercuryRotationFlag;
      if(mercuryRotationFlag){
        text  = "Mercury started rotating and revolving";
      }
      else{
        text  = "Mercury stopped rotating and revolving";
      }
    }
  
    if(event.key == "v"){
      venusRotationFlag = !venusRotationFlag;
      if(venusRotationFlag){
        text  = "Venus started rotating and revolving";
      }
      else{
        text  = "Venus stopped rotating and revolving";
      }
    }
  
    if(event.key == "M"){
      marsRotationFlag = !marsRotationFlag;
      if(marsRotationFlag){
        text  = "Mars started rotating and revolving";
      }
      else{
        text  = "Mars stopped rotating and revolving";
      }
    }
  
    if(event.key == "s"){
      saturnRotationFlag = !saturnRotationFlag;
      if(saturnRotationFlag){
        text  = "Saturn started rotating and revolving";
      }
      else{
        text  = "Saturn stopped rotating and revolving";
      }
    }
    if(event.key == "e"){
      earthRotationFlag = !earthRotationFlag;
      if(earthRotationFlag){
        text  = "Earth started rotating and revolving";
      }
      else{
        text  = "Earth stopped rotating and revolving";
      }
    }
    if(event.key == "u"){
      uranusRotationFlag = !uranusRotationFlag;
      if(uranusRotationFlag){
        text  = "Uranus started rotating and revolving";
      }
      else{
        text  = "Uranus stopped rotating and revolving";
      }
    }
    if(event.key == "j"){
      jupiterRotationFlag = !jupiterRotationFlag;
      if(jupiterRotationFlag){
        text  = "Jupiter started rotating and revolving";
      }
      else{
        text  = "Jupiter stopped rotating and revolving";
      }
    }
    if(event.key == "n"){
      neptuneRotationFlag = !neptuneRotationFlag;
      if(neptuneRotationFlag){
        text  = "Neptune started rotating and revolving";
      }
      else{
        text  = "Neptune stopped rotating and revolving";
      }
    }
  }
    setTimeout(change(text),delayInMilliseconds);
  });