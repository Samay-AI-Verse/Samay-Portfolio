/**
 * ShaderToy Background - Bumped Sinusoidal Warp
 * Converted from GLSL to WebGL
 */

(function () {
  'use strict';

  let canvas, gl, program;
  let startTime = Date.now();
  let animationId;

  // Vertex shader - simple pass-through
  const vertexShaderSource = `
    attribute vec2 position;
    void main() {
      gl_Position = vec4(position, 0.0, 1.0);
    }
  `;

  // Fragment shader - The ShaderToy effect converted to WebGL
  const fragmentShaderSource = `
    precision highp float;
    
    uniform vec2 iResolution;
    uniform float iTime;
    uniform sampler2D iChannel0;

    // Warp function
    vec2 W(vec2 p) {
      p = (p + 3.0) * 4.0;
      float t = iTime / 2.0;

      // Layered, sinusoidal feedback
      for(int i = 0; i < 3; i++) {
        p += cos(p.yx * 3.0 + vec2(t, 1.57)) / 3.0;
        p += sin(p.yx + t + vec2(1.57, 0.0)) / 2.0;
        p *= 1.3;
      }

      // Jitter
      p += fract(sin(p + vec2(13.0, 7.0)) * 5e5) * 0.03 - 0.015;
      return mod(p, 2.0) - 1.0;
    }

    // Bump function
    float bumpFunc(vec2 p) {
      return length(W(p)) * 0.7071;
    }

    vec3 smoothFract(vec3 x) {
      x = fract(x);
      return min(x, x * (1.0 - x) * 12.0);
    }

    void main() {
      vec2 fragCoord = gl_FragCoord.xy;
      vec2 uv = (fragCoord - iResolution.xy * 0.5) / iResolution.y;

      // Surface position and vectors
      vec3 sp = vec3(uv, 0.0);
      vec3 rd = normalize(vec3(uv, 1.0));
      vec3 lp = vec3(cos(iTime) * 0.5, sin(iTime) * 0.2, -1.0);
      vec3 sn = vec3(0.0, 0.0, -1.0);

      // Bump mapping
      vec2 eps = vec2(4.0 / iResolution.y, 0.0);
      float f = bumpFunc(sp.xy);
      float fx = bumpFunc(sp.xy - eps.xy);
      float fy = bumpFunc(sp.xy - eps.yx);

      const float bumpFactor = 0.05;
      fx = (fx - f) / eps.x;
      fy = (fy - f) / eps.x;
      sn = normalize(sn + vec3(fx, fy, 0.0) * bumpFactor);

      // Lighting
      vec3 ld = lp - sp;
      float lDist = max(length(ld), 0.0001);
      ld /= lDist;

      float atten = 1.0 / (1.0 + lDist * lDist * 0.15);
      atten *= f * 0.9 + 0.1;

      float diff = max(dot(sn, ld), 0.0);
      diff = pow(diff, 4.0) * 0.66 + pow(diff, 8.0) * 0.34;
      float spec = pow(max(dot(reflect(-ld, sn), -rd), 0.0), 12.0);

      // Create a simple procedural texture
      vec3 texCol = smoothFract(W(sp.xy).xyy) * 0.1 + 0.2;
      texCol = smoothstep(0.05, 0.75, pow(texCol, vec3(0.75, 0.8, 0.85)));

      // Final color
      vec3 col = (texCol * (diff * vec3(1.0, 0.97, 0.92) * 2.0 + 0.5) + vec3(1.0, 0.6, 0.2) * spec * 2.0) * atten;

      // Environment mapping
      float ref = max(dot(reflect(rd, sn), vec3(1.0)), 0.0);
      col += col * pow(ref, 4.0) * vec3(0.25, 0.5, 1.0) * 3.0;

      // Gamma correction
      gl_FragColor = vec4(sqrt(clamp(col, 0.0, 1.0)), 1.0);
    }
  `;

  function createShader(gl, type, source) {
    const shader = gl.createShader(type);
    gl.shaderSource(shader, source);
    gl.compileShader(shader);

    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
      console.error('Shader compile error:', gl.getShaderInfoLog(shader));
      gl.deleteShader(shader);
      return null;
    }
    return shader;
  }

  function createProgram(gl, vertexShader, fragmentShader) {
    const program = gl.createProgram();
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error('Program link error:', gl.getProgramInfoLog(program));
      return null;
    }
    return program;
  }

  function initWebGL() {
    // Create canvas
    canvas = document.createElement('canvas');
    canvas.id = 'shader-background';
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.zIndex = '-1';
    canvas.style.opacity = '1'; // Full opacity for maximum visibility
    document.body.insertBefore(canvas, document.body.firstChild);

    // Get WebGL context
    gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    if (!gl) {
      console.error('WebGL not supported');
      return false;
    }

    // Create shaders and program
    const vertexShader = createShader(gl, gl.VERTEX_SHADER, vertexShaderSource);
    const fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSource);
    program = createProgram(gl, vertexShader, fragmentShader);

    if (!program) {
      return false;
    }

    // Set up geometry (full-screen quad)
    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([
      -1, -1,
      1, -1,
      -1, 1,
      1, 1
    ]), gl.STATIC_DRAW);

    const positionLocation = gl.getAttribLocation(program, 'position');
    gl.enableVertexAttribArray(positionLocation);
    gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

    // Create a dummy texture for iChannel0
    const texture = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, texture);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, 1, 1, 0, gl.RGBA, gl.UNSIGNED_BYTE, new Uint8Array([128, 128, 128, 255]));
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    return true;
  }

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    gl.viewport(0, 0, canvas.width, canvas.height);
  }

  function render() {
    const currentTime = (Date.now() - startTime) / 1000.0;

    gl.useProgram(program);

    // Set uniforms
    const iResolutionLocation = gl.getUniformLocation(program, 'iResolution');
    const iTimeLocation = gl.getUniformLocation(program, 'iTime');
    const iChannel0Location = gl.getUniformLocation(program, 'iChannel0');

    gl.uniform2f(iResolutionLocation, canvas.width, canvas.height);
    gl.uniform1f(iTimeLocation, currentTime);
    gl.uniform1i(iChannel0Location, 0);

    // Draw
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);

    animationId = requestAnimationFrame(render);
  }

  // Initialize on load
  window.addEventListener('load', function () {
    if (initWebGL()) {
      render();
    }
  });

  // Cleanup
  window.addEventListener('beforeunload', function () {
    if (animationId) {
      cancelAnimationFrame(animationId);
    }
  });

})();
