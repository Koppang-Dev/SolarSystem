var planetData;
var delayInMilliseconds =  1000; // 1 Seconds
var canvas = document.getElementById("gl-canvas");
var gl = canvas.getContext("webgl2");
var subdivide = 4;
var index = 0;
var positionsArray = [];
var normalsArray = [];
var near = -10;
var far = 10;
var radius = 0.5;
var theta = 0.0;
var phi = 0;
var dr = 5.0 * Math.PI / 180.0;


var modelViewMatrix, projectionMatrix, viewMatrix, modelMatrix;
var modelViewMatrixLoc, projectionMatrixLoc;
var lightPositionLoc, lightColorLoc, ambientColorLoc;
var uPlanetColour;
var translationMatrix, rotationMatrix, scalingMatrix, reverseTranslationMatrix, selfRotationMatrix;

var bufferId, positionLoc; 

// Lighting Variables
var lightPosition = vec3(0.0, 0.0, 0.0);
var lightColor = vec3(1.0, 1.0, 1.0);
var ambientColor = vec3(0.5, 0.5, 0.5)

// Camera Variables
var cameraX = 0.0;
var cameraY = 0.0;
var cameraZ = 50.0;

// Planet Rotation Values
var mercurySunTheta = 0.0, mercuryRotationTheta = 0.0;
var venusSunTheta = 0.0, venusRotationTheta = 0.0;
var earthSunTheta = 0.0, earthRotationTheta = 0.0;
var marsSunTheta = 0.0, marsRotationTheta = 0.0;
var jupiterSunTheta = 0.0, jupiterRotationTheta = 0.0;
var saturnSunTheta = 0.0, saturnRotationTheta = 0.0;
var neptuneSunTheta = 0.0, neptuneRotationTheta = 0.0;
var marsSunTheta = 0.0, marsRotationTheta = 0.0;
var uranusSunTheta = 0.0, uranusRotationTheta = 0.0;

//user interaction variables
var RotationFlag = true;
var mercuryRotationFlag = true;
var venusRotationFlag = true;
var earthRotationFlag = true;
var marsRotationFlag = true;
var saturnRotationFlag = true;
var neptuneRotationFlag = true;
var jupiterRotationFlag = true;
var uranusRotationFlag = true;
var clickedPlanet = null;
var clicked = false; // Flag to track whether the click event has occured



var nMatrix, nMatrixLoc;

var eye;
var at = vec3(0.0, 0.0, 0.0);
var up = vec3(0.0, 1.0, 0.0);

// TEXTURE ---------------------------------

// Putting the texture onto the spheres
var planetTextureCoordinates = [
  vec2(0, 0),
  vec2(0, 2.0),
  vec2(2.0, 2.0),
  vec2(2.0, 0)
];

// Variables to initialize an texture object for each planet
var textureSun, textureMercury, textureVenus, textureEarth, textureMars,
    textureSaturn, textureJupiter, textureNeptune, textureUranus;

var vPlanetTexture; // Uniform variable from vShader
var samplerTexturePlanets; // Sampler Variable from fShader
var textureBufferPlanets; // Texture buffer for the planets

function createColourID(planetColour) {
  for(var i = 0; i < 4; i++) {
    let colourID = planetColour[0] + (planetColour[1] << 8) + (planetColour[2] << 16) + (planetColour[3] << 24);
    return colourID;
  }
}

// Planet Colours
var sunColour = vec4(1.0, 0.98, 0.0, 1.0);  // Yellow
var sunColourID = createColourID(sunColour);

var mercuryColour = vec4(0.42, 0.51, 0.54, 1.0); // Grey
var mercuryColourID = createColourID(mercuryColour);


var venusColour = vec4(0.92, 0.92, 0.92, 1.0);   // Whiteish
var venusColourID = createColourID(venusColour);

var earthColour = vec4(0.18, 0.33, 0.76, 1.0);    // Blue
var earthColourID = createColourID(earthColour);

var marsColour = vec4(0.67, 0.33, 0.33, 1.0);    // Red
var marsColourID = createColourID(marsColour);

var jupiterColour = vec4(0.45, 0.24, 0.32, 1.0);  // Tan-Brown
var jupiterClourID = createColourID(jupiterColour);

var saturnColour = vec4(0.72, 0.64, 0.34, 1.0);  // Yellow-Brownish
var saturnColourID = createColourID(saturnColour);

var uranusColour = vec4(0.21, 0.57, 0.65, 1.0); // Blue-Green
var uranusColourID = createColourID(uranusColour);

var neptuneColour = vec4(0.31, 0.36, 0.70, 1.0);  // Blue
var neptuneColourID = createColourID(neptuneColour);


