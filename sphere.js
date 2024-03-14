"use strict";

var sphereDraw = function () {

window.onload = function init() {

canvas = document.getElementById("gl-canvas");

gl = canvas.getContext("webgl2");
if (!gl) alert("WebGL 2.0 isn't available");

gl.viewport(0, 0, canvas.width, canvas.height);
gl.clearColor(0.0, 0.0, 0.0, 0.0);


gl.enable(gl.DEPTH_TEST);

terrainProgram =  initShaders(gl, "Shaders/vshaderTerrain.glsl", "Shaders/fshaderTerrain.glsl");
program = initShaders(gl, "Shaders/vshader.glsl", "Shaders/fshader.glsl");
gl.useProgram(program);


initialize();

// Initalizing the planets textures

createSunImage(gl);
createMercuryImage(gl);
createVenusImage(gl);
createEarthImage(gl);
createMarsImage(gl);
createSaturnImage(gl);
createJupiterImage(gl);
createUranusImage(gl);
createNeptuneImage(gl);
createUranusImage(gl);

textureBufferPlanets = gl.createBuffer(); // Initalizing the planet texture buffer
gl.bindBuffer(gl.ARRAY_BUFFER, textureBufferPlanets); // Binding the planet texture buffer
gl.bufferData(gl.ARRAY_BUFFER, flatten(planetTextureCoordinates), gl.STATIC_DRAW);
vPlanetTexture = gl.getAttribLocation(program, "vTexCoord");  // Setting vTexCoord to the planet texture coordinates
samplerTexturePlanets = gl.getUniformLocation(program, "samplerTexture");


bufferId = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, bufferId);
gl.bufferData(gl.ARRAY_BUFFER, flatten(positionsArray), gl.STATIC_DRAW);

positionLoc = gl.getAttribLocation(program, "aPosition");
gl.vertexAttribPointer(positionLoc, 4, gl.FLOAT, false, 0, 0);
gl.enableVertexAttribArray(positionLoc);

var normalBuffer = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, normalBuffer);
gl.bufferData(gl.ARRAY_BUFFER, new flatten(normalsArray), gl.STATIC_DRAW);

// Get the location of the aNormal attribute
var aNormalLoc = gl.getAttribLocation(program, "aNormal");
modelViewMatrixLoc = gl.getUniformLocation(program, "uModelViewMatrix");
projectionMatrixLoc = gl.getUniformLocation(program, "uProjectionMatrix");
nMatrixLoc = gl.getUniformLocation(program, "uNormalMatrix");
lightPositionLoc = gl.getUniformLocation(program, "uLightPosition");
lightColorLoc = gl.getUniformLocation(program, "uLightColor");
ambientColorLoc = gl.getUniformLocation(program, "uAmbientColor");
uPlanetColour = gl.getUniformLocation(program, "uPlanetColour");

render();
planetPicker();
};


// Initalizing the framebuffer for colour picking
function initFramebufferObject() {
    var framebuffer, texture, depthBuffer;

    // Create a frame buffer object (FBO)
    framebuffer = gl.createFramebuffer();
    if (!framebuffer) {
        console.log("Fialed to create frame buffer object");
        return error();
    }

    // Creating a texture object and setting its size and parameters
    texture = gl.createTexture();
    if (!texture) {
        console.log("Failed to create texture object");
        return error();
    }
    gl.bindTexture(gl.TEXTURE_2D, texture);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, canvas.width, canvas.height, 0, gl.RGBA, gl.UNSIGNED_BYTE, null);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    framebuffer.texture = texture;  // Storing the texture object

    // Creating a renderbuffer object and setting its size and parameters
    depthBuffer = gl.createRenderbuffer();
    if (!depthBuffer) {
        console.log("failed to create renderbuffer object");
        return error();
    }
    gl.bindRenderbuffer(gl.RENDERBUFFER, depthBuffer); // Binding object to target
    gl.renderbufferStorage(gl.RENDERBUFFER, gl.DEPTH_COMPONENT16, canvas.width, canvas.height); // Needs to be the same height and width as the texture

    // Attaching the texture and the renderbuffer object to the FBO
    gl.bindFramebuffer(gl.FRAMEBUFFER, framebuffer);
    gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, texture, 0);
    gl.framebufferRenderbuffer(gl.FRAMEBUFFER, gl.DEPTH_ATTACHMENT, gl.RENDERBUFFER, depthBuffer);

    // Checking if Framebuffer object is configured correctly
    var e = gl.checkFramebufferStatus(gl.FRAMEBUFFER);
    if (gl.FRAMEBUFFER_COMPLETE != e) {
        console.log('Frame buffer object is incomplete: ' + e.toString());
        return error();
    }

    // Unbinding the buffer object
    gl.bindFramebuffer(gl.FRAMEBUFFER, null);
    gl.bindTexture(gl.TEXTURE_2D, null);
    gl.bindRenderbuffer(gl.RENDERBUFFER, null);
}

function render() {
gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT); // // Clearing colour and depth buffers
gl.clearColor(0.0, 0.0, 0.0, 0.0);

// Setting Up Camera and Uniform Variables For The Planets
    gl.useProgram(program);
    setCamera();
    nMatrix = normalMatrix(viewMatrix, true);
    gl.uniformMatrix4fv(modelViewMatrixLoc,false,flatten(viewMatrix));
    gl.uniformMatrix4fv(projectionMatrixLoc, false, flatten(projectionMatrix));
    gl.uniformMatrix3fv(nMatrixLoc, false, flatten(nMatrix));
    gl.uniform3fv(lightPositionLoc, flatten(lightPosition));
    gl.uniform3fv(lightColorLoc, flatten(lightColor));
    gl.uniform3fv(ambientColorLoc, flatten(ambientColor));
    gl.uniform4fv(uPlanetColour, flatten(sunColour));

    // Loading and drawing planets  
    loadSunTexture();
    drawSun();

    loadMarsTexture();
    drawMars();

    loadVenusTexture();
    drawVenus();

    loadMercuryTexture();
    drawMercury();

    loadEarthTexture();
    drawEarth();

    loadJupiterTexture();
    drawJupiter();

    loadNeptuneTexture();
    drawNeptune();

    loadSaturnTexture();
    drawSaturn();

    loadUranusTexture();
    drawUranus();

requestAnimationFrame(render);
};
};

sphereDraw();

