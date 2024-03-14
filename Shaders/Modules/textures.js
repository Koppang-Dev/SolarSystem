// Planet Vertex Arrays
var sunVertexArr = [
    vec4(0.0, 0.0, -1.0, 1),
    vec4(0.0, 0.942809, 0.333333, 1),
    vec4(-0.816497, -0.471405, 0.333333, 1),
    vec4(0.816497, -0.471405, 0.333333, 1)
  ];
  var mercuryVertexArr = [
    vec4(0.0, 0.0, -1.0, 1),
    vec4(0.0, 0.942809, 0.333333, 1),
    vec4(-0.816497, -0.471405, 0.333333, 1),
    vec4(0.816497, -0.471405, 0.333333, 1)
  ];
  var venusVertexArr = [
    vec4(0.0, 0.0, -1.0, 1),
    vec4(0.0, 0.942809, 0.333333, 1),
    vec4(-0.816497, -0.471405, 0.333333, 1),
    vec4(0.816497, -0.471405, 0.333333, 1)
  ];
  var earthVertexArr = [
    vec4(0.0, 0.0, -1.0, 1),
    vec4(0.0, 0.942809, 0.333333, 1),
    vec4(-0.816497, -0.471405, 0.333333, 1),
    vec4(0.816497, -0.471405, 0.333333, 1)
  ];
  var marsVertexArr = [
    vec4(0.0, 0.0, -1.0, 1),
    vec4(0.0, 0.942809, 0.333333, 1),
    vec4(-0.816497, -0.471405, 0.333333, 1),
    vec4(0.816497, -0.471405, 0.333333, 1)
  ];
  var jupiterVertexArr = [
    vec4(0.0, 0.0, -1.0, 1),
    vec4(0.0, 0.942809, 0.333333, 1),
    vec4(-0.816497, -0.471405, 0.333333, 1),
    vec4(0.816497, -0.471405, 0.333333, 1)
  ];
  var saturnVertexArr = [
    vec4(0.0, 0.0, -1.0, 1),
    vec4(0.0, 0.942809, 0.333333, 1),
    vec4(-0.816497, -0.471405, 0.333333, 1),
    vec4(0.816497, -0.471405, 0.333333, 1)
  ];
  var uranusVertexArr = [
    vec4(0.0, 0.0, -1.0, 1),
    vec4(0.0, 0.942809, 0.333333, 1),
    vec4(-0.816497, -0.471405, 0.333333, 1),
    vec4(0.816497, -0.471405, 0.333333, 1)
  ];
  var neptuneVertexArr = [
    vec4(0.0, 0.0, -1.0, 1),
    vec4(0.0, 0.942809, 0.333333, 1),
    vec4(-0.816497, -0.471405, 0.333333, 1),
    vec4(0.816497, -0.471405, 0.333333, 1)
  ];
  /*
  // Takes in an image and then returns the texture object
  function createPlanetTexture(image) {
    var planetTextureObject = loadTexture(gl, image);
    //gl.bindTexture(gl.TEXTURE_2D, planetTextureObject);
    //gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
    //gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image);
  
    // Texture Wrapping
    //gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    //gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
        //gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    //gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR_MIPMAP_LINEAR);
    //gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
        //gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR_MIPMAP_LINEAR);
  
    //gl.generateMipmap(gl.TEXTURE_2D);
        //gl.bindTexture(gl.TEXTURE_2D, null);
  
        //gl.bindTexture(gl.TEXTURE_2D, planetTextureObject);
        //gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
   return planetTextureObject;
  }*/
  
  function createSunImage(gl) {
    const planetImage = new Image();
    planetImage.src = 'Images/sunImage.jpg';
  
    textureSun = gl.createTexture();
    textureSun = loadTexture(gl, planetImage, textureSun);
    console.log("Loaded Sun Texture");
    /*
    planetImage.onload = () => {
      console.log("Loaded Sun Texture");
      textureSun = gl.createTexture();
      textureSun = loadTexture(gl, planetImage, textureSun);
    }*/
    }
    
    function createMercuryImage(gl) {
      const planetImage = new Image();
      planetImage.src = 'Images/mercuryImage.jpeg';
  
      textureMercury = gl.createTexture();
      textureMercury = loadTexture(gl, planetImage, textureMercury);
      console.log("Loaded Mercury Texture");
      /*
      planetImage.onload = () => {
        console.log("Loaded Mercury Texture");
        textureMercury = gl.createTexture();
        textureMercury = loadTexture(gl, planetImage, textureMercury);
      }*/
      }
    
    
    function createVenusImage(gl) {
      const planetImage = new Image();
      planetImage.src = 'Images/venusImage.jpeg';
  
      textureVenus = gl.createTexture();
      textureVenus = loadTexture(gl, planetImage, textureVenus);
      console.log("Loaded Venus Texture");
      /*
      planetImage.onload = () => {
        console.log("Loaded Venus Texture");
        textureVenus = gl.createTexture();
        textureVenus = loadTexture(gl, planetImage, textureVenus);
      }*/
      }
    
    
    
    function createEarthImage(gl) {
      const planetImage = new Image();
      planetImage.src = 'Images/earthImage.jpg';
  
      textureEarth = gl.createTexture();
      textureEarth = loadTexture(gl, planetImage, textureEarth);
      console.log("Loaded Earth Texture");
      /*
      planetImage.onload = () => {
        console.log("Loaded Earth Texture");
        textureEarth = gl.createTexture();
        textureEarth = loadTexture(gl, planetImage, textureEarth);
      }*/
      }
    
    
    
    function createMarsImage(gl) {
      const planetImage = new Image();
      planetImage.src = 'Images/marsImage.jpg';
  
      textureMars = gl.createTexture();
      textureMars = loadTexture(gl, planetImage, textureMars);
      console.log("Loaded Mars Texture");
      /*
      planetImage.onload = () => {
        console.log("Loaded Mars Texture");
        textureMars = gl.createTexture();
        textureMars = loadTexture(gl, planetImage, textureMars);
      }*/
      }
    
    
    function createSaturnImage(gl) {
      const planetImage = new Image();
      planetImage.src = 'Images/saturnImage.jpeg';
  
      textureSaturn = gl.createTexture();
      textureSaturn = loadTexture(gl, planetImage, textureSaturn);
      console.log("Loaded Saturn Texture");
  
      /*
      planetImage.onload = () => {
        console.log("Loaded Saturn Texture");
        textureSaturn = gl.createTexture();
        textureSaturn = loadTexture(gl, planetImage, textureSaturn);
      }*/
      }
    
    
    function createJupiterImage(gl) {
      const planetImage = new Image();
      planetImage.src = 'Images/jupiterImage.jpeg';
  
      textureJupiter = gl.createTexture();
      textureJupiter = loadTexture(gl, planetImage, textureJupiter);
      console.log("Loaded Jupiter Texture");
  
        /*
      planetImage.onload = () => {
        console.log("Loaded Jupiter Texture");
        textureJupiter = gl.createTexture();
        textureJupiter = loadTexture(gl, planetImage, textureJupiter);
        }*/
      }
    
    
    function createUranusImage(gl) {
      const planetImage = new Image();
      planetImage.src = 'Images/uranusImage.jpeg';
  
      textureUranus = gl.createTexture();
      textureUranus = loadTexture(gl, planetImage, textureUranus);
      console.log("Loaded Uranus Texture");
  
      /*
      planetImage.onload = () => {
        console.log("Loaded Uranus Texture");
        textureUranus = gl.createTexture();
        textureUranus = loadTexture(gl, planetImage, textureUranus);
      }*/
      }
    
      function createNeptuneImage(gl) {
        const planetImage = new Image();
        planetImage.src = 'Images/neptuneImage.jpeg';
  
        textureNeptune = gl.createTexture();
        textureNeptune = loadTexture(gl, planetImage, textureNeptune);
        console.log("Loaded Neptune Texture");
        /*
        planetImage.onload = () => {
          console.log("Loaded Neptune Texture");
          textureNeptune = gl.createTexture();
          textureNeptune = loadTexture(gl, planetImage, textureNeptune);
        }*/
      }
  
  // Loading the textures for the planets
  function loadTexture(gl, image, planetTexture) {
    //var texture = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, planetTexture);
    const level = 0;
    const internalFormat = gl.RGBA;
    const width = 1;
    const height = 1;
    const border = 0;
    const srcFormat = gl.RGBA;
    const srcType = gl.UNSIGNED_BYTE;
    //const pixel = new Uint8Array([0, 0, 255, 255]); // opaque blue
    const pixel = new Uint8Array([255, 255, 255, 255]); // white
    console.log("Created Default Texture");
    gl.texImage2D(
      gl.TEXTURE_2D,
      level,
      internalFormat,
      width,
      height,
      border,
      srcFormat,
      srcType,
      pixel
    );
    
  
    const textureImage = new Image();
    //image = new Image();
    textureImage.src = image.src;
    textureImage.onload = () => {
      
      console.log("Loaded Texture Image");
      //uTextureBool = false;
      gl.bindTexture(gl.TEXTURE_2D, planetTexture);
      gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true); //
      gl.texImage2D(
        gl.TEXTURE_2D,
        level,
        internalFormat,
        srcFormat,
        srcType,
        textureImage
      );
      
      // Check if texture image size is divisible by 2
      // If divisible by 2 then use generateMipmap
      // Else manually attach texture
      if (((textureImage.width & (textureImage.width - 1)) === 0) && ((textureImage.height & (textureImage.height - 1)) === 0)) {
        gl.generateMipmap(gl.TEXTURE_2D);
      } else {
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
        
      }
  
      //gl.uniform1i(samplerTexturePlanets, 0);
  
      /*
    console.log("Loaded Texture Image");
    gl.bindTexture(gl.TEXTURE_2D, texture);
    gl.texImage2D(
      gl.TEXTURE_2D,
      level,
      internalFormat,
      srcFormat,
      srcType,
      image
    );*/
  
    // Setting Texture Parameters
    // gl.NEAREST is also allowed, instead of gl.LINEAR, as neither mipmap.
  //gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
  // Prevents s-coordinate wrapping (repeating).
  //gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
  // Prevents t-coordinate wrapping (repeating).
  //gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
  
  
  //gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
  //gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR_MIPMAP_LINEAR);
  
  //gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
  //gl.generateMipmap(gl.TEXTURE_2D);
  //gl.bindTexture(gl.TEXTURE_2D, null);
  
  }
  
  return planetTexture;
  }
  
  function handleBkTex(tex) {
    gl.bindTexture(gl.TEXTURE_2D, tex);
    gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, tex.Img);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.bindTexture(gl.TEXTURE_2D, null);
  }
  
  function initBkgrnd() {
    var backTex = gl.createTexture();
    backTex.img = new Image();
    backTex.onload = function() {
      handleBkTex(backTex);
    }
    backTex.img.src = "Images/stars.jpeg";
  }
  
  
  
  
  function turnOffBackground() {
    var texture = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, texture);
    gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, null);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
    gl.bindTexture(gl.TEXTURE_2D, null);
  }
  
  function bindingBuffer(){
    // Planet Buffer and Vertices Enabled
    gl.bindBuffer(gl.ARRAY_BUFFER, bufferId);
    gl.enableVertexAttribArray(positionLoc);
  }
  
  function loadSunTexture(){
    // Sun Texture
    gl.enableVertexAttribArray(vPlanetTexture);
    gl.vertexAttribPointer(vPlanetTexture, 2, gl.FLOAT, false, 0, 0);
    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, textureSun);
    gl.uniform1i(samplerTexturePlanets, 0);
  }
  function loadMercuryTexture(){
    // Mercury Texture
    gl.activeTexture(gl.TEXTURE1);
    gl.bindTexture(gl.TEXTURE_2D, textureMercury);
    gl.uniform1i(samplerTexturePlanets, 1);
    // Planet Buffer and Vertices Enabled
    bindingBuffer();
  }
  function loadMarsTexture(){
    /* MARS TEXTURE */
    gl.activeTexture(gl.TEXTURE4);
    gl.bindTexture(gl.TEXTURE_2D, textureMars);
    gl.uniform1i(samplerTexturePlanets, 4);
  
    bindingBuffer();
  
   
  }
  function loadEarthTexture(){
    // Earth Texture
    gl.activeTexture(gl.TEXTURE3);
    gl.bindTexture(gl.TEXTURE_2D, textureEarth);
    gl.uniform1i(samplerTexturePlanets, 3);
    
    bindingBuffer();
  }
  function loadUranusTexture(){
    // Uranus Texture
    gl.activeTexture(gl.TEXTURE7);
    gl.bindTexture(gl.TEXTURE_2D, textureUranus);
    gl.uniform1i(samplerTexturePlanets, 7);
  
    bindingBuffer();
  }
  function loadNeptuneTexture(){
    // Neptune Texture
    gl.activeTexture(gl.TEXTURE8);
    gl.bindTexture(gl.TEXTURE_2D, textureNeptune);
    gl.uniform1i(samplerTexturePlanets, 8);
  
    bindingBuffer();
  }
  function loadVenusTexture(){
     // Venus Texture
     gl.activeTexture(gl.TEXTURE2);
     gl.bindTexture(gl.TEXTURE_2D, textureVenus);
     gl.uniform1i(samplerTexturePlanets, 2);
     bindingBuffer();
  }
  function loadSaturnTexture(){
    // Saturn Texture
  gl.activeTexture(gl.TEXTURE6);
  gl.bindTexture(gl.TEXTURE_2D, textureSaturn);
  gl.uniform1i(samplerTexturePlanets, 6);
  
  bindingBuffer();
  }
  function loadJupiterTexture(){
    // Jupiter Texture
    gl.activeTexture(gl.TEXTURE5);
    gl.bindTexture(gl.TEXTURE_2D, textureJupiter);
    gl.uniform1i(samplerTexturePlanets, 5);
  
    bindingBuffer();
  }