/*
Inital boilerplate came from the source, adjustments were made to use triangles and create a solid surface
Source: https://webglfundamentals.org/webgl/lessons/webgl-qna-how-to-import-a-heightmap-in-webgl.html
*/

// Mesh and Terrain Variables
var terrainProgram; // Initalizing the terrains shaders
var program;        // Initalizing the main program shaders
var terrainEye;     // New Camera Eye at the current terrain
var terrainAt;      // New Camera Target facing the current terrain
var terrainUp;      // New terrain up // Loading Heightmapping Image

// Terrain Grid Variables
var gridWidth;
var gridHeight;
var gridDepth;
var gridPoints;
var gridIndices;
var numVertices;
var texture;
var terrainActive; // Flag if the user selected to go onto the terrain

// Loading the heightmap image and mapping the coordinates for the grid
var img = new Image();
img.crossOrigin = 'anonymous'           // Image is fetched without any credentials
img.src = 'Images/heightmap.png';       // Terrain image sources
img.onload = run;
    
function run() {
    const ctx = document.createElement('canvas').getContext('2d');
    ctx.canvas.width = img.width;
    ctx.canvas.height = img.height;
    ctx.drawImage(img, 0, 0);
    const imgData = ctx.getImageData(0, 0, ctx.canvas.width, ctx.canvas.height);
    gridWidth = imgData.width;
    gridDepth = imgData.height;
    gridPoints = [];
    for (let z = 0; z <= gridDepth; ++z) {
      for (let x = 0; x <= gridWidth; ++x) {
        const offset = (z * imgData.width + x) * 4;
        // Height 0 - 10
        const height =  imgData.data[offset] * 32 / 255;  // Alter numerator to change height
        gridPoints.push(x, height, z);
      }
    }
  
    gridIndices = [];   // How indices connect to form triangle
    var rowStride = gridWidth + 1;
  
    // X lines
  for (let z = 0; z <= gridDepth; ++z) {
    const rowOff = z * rowStride;
    for (let x = 0; x < gridWidth; ++x) {
      gridIndices.push(rowOff + x, rowOff + x + 1);
    }
  }
  
  // Z Lines
  for (let x = 0; x <= gridWidth; ++x) {
    for (let z = 0; z < gridDepth; ++z) {
      const rowOff = z * rowStride;
      //gridIndices.push(rowOff + x, rowOff + x + rowStride);
      gridIndices.push(rowOff + x, rowOff + x + 1, rowOff + x + rowStride);
      gridIndices.push(rowOff + x + 1, rowOff + x + rowStride + 1, rowOff + x + rowStride);
    }
  }
  //numVertices = (gridWidth * 2 * (gridDepth + 1)) + (gridDepth * 2 * (gridWidth + 1));  // Total number of vertices expected on the grid
  numVertices = (gridWidth - 1) * (gridDepth - 1) * 6;
  }


  // Function to set the camera coordinates for the current terrain
  function setGridComponents() {
    terrainEye = vec3(-10, 10, -10);
    terrainAt = vec3(gridWidth / 2, -10, gridDepth / 2);
    terrainUp = vec3(0, 1, 0);
  }


  // Draws the Terrain Grid
  function drawGrid() {
    setGridComponents();    // Setting up the terrains camera
    var program = initShaders(gl, "Shaders/vshaderTerrain.glsl", "Shaders/fshaderTerrain.glsl"); // Initalizing main planet shaders
    var positionBuffer = gl.createBuffer(); 
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(gridPoints), gl.STATIC_DRAW);   // Sends arrays gridPoints as buffer data


    positionLoc = gl.getAttribLocation(program, "aPosition");   

    gl.vertexAttribPointer(positionLoc, 3, gl.FLOAT, false, 0, 0);  // Specifying the attribute data format

    gl.enableVertexAttribArray(positionLoc);     // Enable the attribute array 

    // Creating buffer for indices
    var indexBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(gridIndices), gl.STATIC_DRAW);    
  
     // Drawing the grid
    gl.drawElements(gl.LINES, numVertices, gl.UNSIGNED_SHORT, 0);
  }

  // Initalizing all the uniform variables for the terrain
  function getTerrainUniforms() {
    gl.useProgram(terrainProgram);
    // Get the location of the aNormal attribute
    positionLoc = gl.getAttribLocation(terrainProgram, "aPosition");
    gl.vertexAttribPointer(positionLoc, 4, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(positionLoc);
    var aNormalLoc = gl.getAttribLocation(terrainProgram, "aNormal");
    modelViewMatrixLoc = gl.getUniformLocation(terrainProgram, "uModelViewMatrix");
    projectionMatrixLoc = gl.getUniformLocation(terrainProgram, "uProjectionMatrix");
    nMatrixLoc = gl.getUniformLocation(terrainProgram, "uNormalMatrix");
    lightPositionLoc = gl.getUniformLocation(terrainProgram, "uLightPosition");
    lightColorLoc = gl.getUniformLocation(terrainProgram, "uLightColor");
    ambientColorLoc = gl.getUniformLocation(terrainProgram, "uAmbientColor");
    uPlanetColour = gl.getUniformLocation(terrainProgram, "uPlanetColour");
  }
