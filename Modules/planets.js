/*
Function for the planets to rotate about the sun
rotationMatrix * translationMatrix * rotationMatrix * reverseTranslationMatrix
*/
function setCamera(){

    eye = vec3(radius * Math.sin(theta) * Math.cos(phi) + cameraX,radius * Math.sin(theta) * Math.sin(phi) + cameraY, radius * Math.cos(theta) + cameraZ);
    
    
    viewMatrix = lookAt(eye, at, up);
    var aspect = canvas.width / canvas.height;
    var fov = 45.0;
    var orthoHeight = 25.0; 
    var orthoWidth = orthoHeight * aspect;
    //projectionMatrix = ortho(-orthoWidth, orthoWidth, -orthoHeight, orthoHeight, near, far);a
    projectionMatrix = perspective(fov, aspect, 1.0, 100.0);
    }
    
    function planetTransformation(originDistance, planetScalingMatrix, rotationAroundSunTheta, rotationForPlanetTheta) {
    
        // Scaling matrix
       scalingMatrix = planetScalingMatrix;
      
        //Rotation for the object itself
       selfRotationMatrix = mult(rotateX(rotationForPlanetTheta), mult(rotateY(0), rotateZ(rotationForPlanetTheta)));
      
      
       /* 
        Rotation about the sun
        Translate the planet to the origin (Sun)
        Rotate the object about the sun
        Translating the object back to its set location
        Translate back to location
        */
       translationMatrix = translate(-originDistance[0][3], -originDistance[0][2], -originDistance[2][3]);
       rotationMatrix = mult(rotateX(0), mult(rotateY(rotationAroundSunTheta),rotateZ(0)));
       reverseTranslationMatrix = translate(originDistance[0][3], originDistance[0][2], originDistance[2][3]);
      
      // Applying view and model matrix
       modelViewMatrix = mult(reverseTranslationMatrix, mult(translationMatrix, mult(rotationMatrix, mult(reverseTranslationMatrix, mult(scalingMatrix, selfRotationMatrix)))));
       modelViewMatrix = mult(viewMatrix, modelViewMatrix);
      }
    
      function setglUniform(planetColour) {
        nMatrix = normalMatrix(modelViewMatrix, true);
        gl.uniformMatrix4fv(modelViewMatrixLoc,false,flatten(modelViewMatrix));
        gl.uniformMatrix4fv(projectionMatrixLoc, false,flatten(projectionMatrix));
        gl.uniformMatrix3fv(nMatrixLoc, false, flatten(nMatrix));
        gl.uniform4fv(uPlanetColour, flatten(planetColour));
      }
    
    function triangle(a, b, c) {
        positionsArray.push(a);
        positionsArray.push(b);
        positionsArray.push(c);
        
        var t1 = subtract(b, a);
        var t2 = subtract(c, b);
        var normal = normalize(cross(t1, t2));
        normal = vec4(normal[0], normal[1], normal[2], 0.0);
        
        normalsArray.push(normal);
        normalsArray.push(normal);
        normalsArray.push(normal);
        
        index += 3;
        }
        
        function divideTriangle(a, b, c, count) {
        if (count > 0) {
        var ab = mix(a, b, 0.5);
        var ac = mix(a, c, 0.5);
        var bc = mix(b, c, 0.5);
        
        ab = normalize(ab, true);
        ac = normalize(ac, true);
        bc = normalize(bc, true);
        
        divideTriangle(a, ab, ac, count - 1);
        divideTriangle(ab, b, bc, count - 1);
        divideTriangle(bc, c, ac, count - 1);
        divideTriangle(ab, bc, ac, count - 1);
        } else {
        triangle(a, b, c);
        }
        }
        
        function sphere(a, b, c, d, n) {
        divideTriangle(a, b, c, n);
        divideTriangle(d, c, b, n);
        divideTriangle(a, d, b, n);
        divideTriangle(a, c, d, n);
        }
    
    function initialize() {
    
        // Sun Vertices
        sphere(
          sunVertexArr[0],
          sunVertexArr[1],
          sunVertexArr[2],
          sunVertexArr[3],
          subdivide
          );
          
          // Mercury Vertices
          sphere(
          mercuryVertexArr[0],
          mercuryVertexArr[1],
          mercuryVertexArr[2],
          mercuryVertexArr[3],
          subdivide
          );
          
          // Venus Vertices
          sphere(
          venusVertexArr[0],
          venusVertexArr[1],
          venusVertexArr[2],
          venusVertexArr[3],
          subdivide
          );
          
          // Earth Vertices
          sphere(
          earthVertexArr[0],
          earthVertexArr[1],
          earthVertexArr[2],
          earthVertexArr[3],
          subdivide
          );
          
          // Mars Vertices
          sphere(
          marsVertexArr[0],
          marsVertexArr[1],
          marsVertexArr[2],
          marsVertexArr[3],
          subdivide
          );
          
          // Jupiter Vertices
          sphere(
          jupiterVertexArr[0],
          jupiterVertexArr[1],
          jupiterVertexArr[2],
          jupiterVertexArr[3],
          subdivide
          );
          
          // Saturn Vertices
          sphere(
          saturnVertexArr[0],
          saturnVertexArr[1],
          saturnVertexArr[2],
          saturnVertexArr[3],
          subdivide
          );
          
          // Uranus Vertices
          sphere(
          uranusVertexArr[0],
          uranusVertexArr[1],
          uranusVertexArr[2],
          uranusVertexArr[3],
          subdivide
          );
          
          // Neptune Vertices
          sphere(
          neptuneVertexArr[0],
          neptuneVertexArr[1],
          neptuneVertexArr[2],
          neptuneVertexArr[3],
          subdivide
          );
        }
    
        bindingBuffer();
        loadSunTexture();
        //}
    
    function drawSun(){
    // Drawing the Sun
    for (var i = 0; i < index; i += 3) {
        gl.drawArrays(gl.TRIANGLES, i, 3);
    }
    }
    
    function drawMercury(){
    // Drawing mercury
    if(mercuryRotationFlag && RotationFlag){
    mercurySunTheta += 4.148;                              // Mercury revolution (365/88 = 4.148)
    mercuryRotationTheta += 5.2;                       // Mercury planet rotation (58.66 days)
    }
    var mercuryTranslation = translate(10.0, 0, 0);     // Translation Matrix to move away from sun
    var mercuryScaling = scale(0.28, 0.28, 0.28);          // Scaling Matrix relative to sun
    planetTransformation(mercuryTranslation, mercuryScaling, mercurySunTheta, mercuryRotationTheta); // Computes the transformation matrix
    setglUniform(mercuryColour);                   // Sets the glUniform Variables
    for (var i = 3; i < index; i += 3)                 // Drawing mecury [Starting index ?]
    gl.drawArrays(gl.TRIANGLES, i, 3);
    }
    
    function drawVenus(){
    // Drawing Venus
    if(venusRotationFlag && RotationFlag){
    venusSunTheta += 1.629;                           // Venus revolution (365/224 = 1.629)
    venusRotationTheta += 0.5;                      // Venus planet rotation (243 days)
    }
    var venusTranslation = translate(14.0, 0, 0);    // Translating venus away from the sun
    var venusScaling = scale(0.34, 0.34, 0.34);         // Scaling venus relative to the sun
    planetTransformation(venusTranslation, venusScaling, venusSunTheta, venusRotationTheta); // Computes the transformation matrix
    setglUniform(venusColour);
    for (var i = 6; i < index; i += 3)                // Drawing venus
    gl.drawArrays(gl.TRIANGLES, i, 3);
    }
    
    function drawEarth(){
    
    // Drawing Earth
    if(earthRotationFlag && RotationFlag){
    earthSunTheta += 1.000;                               // Earth revolution (365/365 = 1.000)
    earthRotationTheta += 0.5;                         // Earth planet rotation (1 day)
    }
    var earthTranslation = translate(20.0, 0, 0);    // Translating earth away from the sun
    var earthScaling = scale(0.35, 0.35, 0.35);        // Scaling earth relative from the sun
    planetTransformation(earthTranslation, earthScaling, earthSunTheta, earthRotationTheta); // Computes the transformation matrix
    setglUniform(earthColour);
    for (var i = 9; i < index; i += 3)              // Drawing earth
    gl.drawArrays(gl.TRIANGLES, i, 3);
    }
    
    
    function drawMars(){
    // Drawing Mars
    if(marsRotationFlag && RotationFlag){
    marsSunTheta += 0.531;                             // Mars revolution (365/687 = 0.531)
    marsRotationTheta += 2.2;                        // Mars planet rotation (1.03 days)
    }
    var marsTranslation = translate(40.0, 0, 0);   // Translating mars away from the sun
    var marsScaling = scale(0.32, 0.32, 0.32);       // Scaling mars relative to the sun
    planetTransformation(marsTranslation, marsScaling, marsSunTheta, marsRotationTheta); // Computes the transformation matrix
    setglUniform(marsColour);
    for (var i = 12; i < index; i += 3)           // Drawing mars
    gl.drawArrays(gl.TRIANGLES, i, 3);
    }
    
    
    function drawJupiter(){
    // Drawing Jupiter
    if(jupiterRotationFlag && RotationFlag){
    jupiterSunTheta += 0.084;                          // Jupiter revolution (365/4332 = 0.084)
    jupiterRotationTheta += 0.5;                       // Jupiter planet rotation (0.42 days)
    }
    var jupiterTranslation = translate(30.0, 0, 0);   // Translating jupiter away from the sun
    var jupiterScaling = scale(0.75, 0.75, 0.75);     // Scaling jupiter relative to the sun
    planetTransformation(jupiterTranslation, jupiterScaling, jupiterSunTheta, jupiterRotationTheta); // Computes the transformation matrix
    setglUniform(jupiterColour);
    for (var i = 15; i < index; i += 3)               // Drawing jupiter
    gl.drawArrays(gl.TRIANGLES, i, 3);
    }
    
    function drawSaturn(){
    // Drawing Saturn
    if(saturnRotationFlag && RotationFlag){
    saturnSunTheta += 0.034;                            // Saturn revolution (365/10775 = 0.034)
    saturnRotationTheta += 0.0;                         // Saturn planet rotation (0.45 days)
    }
    var saturnTranslation = translate(39.0, 0, 0);      // Translating saturn away from the sun
    var saturnScaling = scale(0.74, 0.74, 0.74);        // Scaling saturn relative to the sun
    planetTransformation(saturnTranslation, saturnScaling, saturnSunTheta, saturnRotationTheta); // Computes the transformation matrix
    setglUniform(saturnColour);
    for (var i = 18; i < index; i += 3)                 // Drawing uranus
    gl.drawArrays(gl.TRIANGLES, i, 3);
    }
    
    function drawUranus(){
    // Drawing Uranus
    if(uranusRotationFlag && RotationFlag){
    uranusSunTheta += 0.012;                            // Uranus revolution (365/30681 = 0.012)
    uranusRotationTheta += 0.0;                         // Uranus planet rotation (0.71 days)
    }
    var uranusTranslation = translate(48.0, 0, 0);  //Translating uranus away from the sun
    var uranusScaling = scale(0.51, 0.51, 0.51);       // Scaling uranus relative to the sun
    planetTransformation(uranusTranslation, uranusScaling, uranusSunTheta, uranusRotationTheta); // Computes the transformation matrix
    setglUniform(uranusColour);
    for (var i = 21; i < index; i += 3)       // Drawing uranus
    gl.drawArrays(gl.TRIANGLES, i, 3);
    }
    
    function drawNeptune(){
    // Drawing Neptune
    if(neptuneRotationFlag && RotationFlag){
    neptuneSunTheta += 0.006;                           // Neptune revolution (365/60193 = 0.006)
    neptuneRotationTheta += 0.0;                        // Neptune planet rotation (0.67 days)
    }
    var neptuneTranslation = translate(60.0, 0, 0);      // Translating Neptune away from the sun
    var neptuneScaling = scale(0.50, 0.50, 0.50);        // Scaling Neptune relative to the sun
    planetTransformation(neptuneTranslation, neptuneScaling, neptuneSunTheta, neptuneRotationTheta); // Computes the transformation matrix
    setglUniform(neptuneColour);
    for (var i = 24; i < index; i += 3)                   // Drawing Neptune
    gl.drawArrays(gl.TRIANGLES, i, 3);
    }