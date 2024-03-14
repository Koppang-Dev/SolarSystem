    #version 300 es

    precision mediump float;
    
    // Inputs from vertex shader
    in vec4 vColor;
    in vec4 vNormal;
    
    // Output color
    out vec4 fColor;
    
    // Uniforms for lighting (if needed)
    uniform vec3 uLightColor;
    uniform vec3 uLightPosition;
    uniform vec3 uAmbientColor;

    in vec2 fTexCoord;
    uniform sampler2D samplerTexture;

    
    void main() {
        // Basic ambient lighting
        vec3 ambient = uAmbientColor * vec3(vColor);
    
        // Diffuse lighting
        vec3 norm = normalize(vec3(vNormal));
        vec3 lightDir = normalize(uLightPosition - vec3(gl_FragCoord));
        float diff = max(dot(norm, lightDir), 0.0);
        vec3 diffuse = uLightColor * diff * vec3(vColor);
    
        // Combine the two components
        vec3 finalColor = ambient + diffuse;
    
        // Set the fragment color
        //fColor = vec4(finalColor, 1.0);
        vec2 longitudeLatitude = vec2((atan(fTexCoord.y, fTexCoord.x) / 3.1415926 + 1.0) * (asin(fTexCoord.y) / 3.14151926 + 0.5));
        fColor = texture(samplerTexture, longitudeLatitude) * vColor;
    }
