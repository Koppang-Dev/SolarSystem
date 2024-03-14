#version 300 es

in vec4 aPosition;
in vec4 aNormal;
in vec2 vTexCoord;

out vec4 vColor;
out vec4 vNormal;
out vec2 fTexCoord;


uniform mat4 uModelViewMatrix;
uniform mat4 uProjectionMatrix;
uniform mat3 uNormalMatrix;
uniform vec4 uPlanetColour;


void main() {
    vec3 pos = (uModelViewMatrix * aPosition).xyz;
    vNormal = vec4(uNormalMatrix * vec3(aNormal), 0.0);
    gl_Position = uProjectionMatrix * uModelViewMatrix * aPosition;
    vColor = uPlanetColour;
    fTexCoord = vTexCoord;
}
