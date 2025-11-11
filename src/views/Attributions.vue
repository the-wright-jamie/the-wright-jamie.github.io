<template>
  <div>
    <h1 class="text-4xl mb-4 header">cat README.md</h1>
    <p class="">
      Total time spent on making this website so far:
      <a
        href="https://wakatime.com/badge/user/604ea863-2306-4cbd-95b6-d2dbf642c915/project/1e488b47-511b-4f44-b57c-0792da6785fc"
        ><img
          src="https://wakatime.com/badge/user/604ea863-2306-4cbd-95b6-d2dbf642c915/project/1e488b47-511b-4f44-b57c-0792da6785fc.svg"
          alt="wakatime"
      /></a>
    </p>
    <br />
    <div class="space-y-4">
      <h2>About the background</h2>
      <p>
        TD;DR: It was adapted from
        <a
          class="underline font-bold cursor-pointer"
          href="https://godotshaders.com/shader/pixelated-warped-fractal-noise/"
          >this Godot shader</a
        >.
      </p>
      <p>
        The background effect you see on this website is a custom shader inspired by a Godot shader
        I found online. I adapted the shader code to work with WebGL and integrated it into this
        Vue.js application. The shader generates a dynamic, pixelated, and warped fractal noise
        effect that I think adds visual interest to the site without being too distracting. The
        effect is rendered in real-time using the GPU, hopefully ensuring smooth performance even on
        lower-end devices.
      </p>
      <p>
        I currently have a terrible idea for a video game that would use this shader effect, I don't
        know if I'll ever make or release the game, but if I do, then you'll probably know I've
        finally gone insane.
      </p>
      <h2>Other Attributions</h2>
      <p>
        This website was built using
        <a class="underline font-bold cursor-pointer" href="https://vuejs.org/">Vue.js</a>
        and
        <a class="underline font-bold cursor-pointer" href="https://tailwindcss.com/"
          >Tailwind CSS</a
        >. The font used for the headers is
        <a
          class="underline font-bold cursor-pointer"
          href="https://www.fontspace.com/raster-forge-font-f135159"
          >Forge</a
        >
        , and the font used for the body text is
        <a
          class="underline font-bold cursor-pointer"
          href="https://fonts.google.com/specimen/Pixelify+Sans"
          >Pixelify</a
        >. The site is hosted on
        <a class="underline font-bold cursor-pointer" href="https://pages.github.com/"
          >GitHub Pages</a
        >
        . The source code for the website is available on
        <a
          class="underline font-bold cursor-pointer"
          href="https://github.com/the-wright-jamie/the-wright-jamie.github.io"
          >GitHub</a
        >.
      </p>
    </div>
  </div>
</template>
