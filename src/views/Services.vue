<template>
  <div class="about-wright-software">
    <div class="grid place-items-center">
      <div class="flex place-items-center gap-6 pt-10">
        <img src="./../assets/img/w-software.png" class="h-20 sm:h-30" />
        <p class="text-4xl md:text-6xl wright-software">Wright Software</p>
      </div>
    </div>
    <h2 class="text-center font-extrabold p-4 opacity-70">Excuse the mess - Page is WIP</h2>
    <p class="mt-4 text-center text-2xl lg:text-3xl">
      If you have any software needs, I am available for hire.
    </p>
    <div class="mt-8 text-2xl">
      <h2>Software</h2>
      <p>Custom software solutions tailored to your needs.</p>
      <h2 class="mt-4">Consulting</h2>
      <p>Expert advice to help you navigate the tech landscape.</p>
      <h2 class="mt-4">Web Development</h2>
      <p>Building responsive and engaging websites.</p>
      <h2 class="mt-4">Security</h2>
      <p>Protect your digital assets with our security services.</p>
      <h2 class="mt-4">Infrastructure</h2>
      <p>Robust and scalable infrastructure solutions.</p>
      <h2 class="mt-4">Other</h2>
      <p>I provide a range of miscellaneous services, such as audio/video/lighting engineering</p>
    </div>
  </div>
</template>

<script setup>
// placeholder
</script>

<style scoped>
.wright-software {
  font-family: 'Roboto';
  font-weight: 900;
}

.about-wright-software {
  background: radial-gradient(circle, rgb(66, 66, 66) 0%, rgba(255, 255, 255, 0) 30%);
  padding: 2rem;
  border-radius: 1rem;
  font-family: 'Roboto' !important;
}

p,
h1,
h2 {
  font-family: 'Roboto' !important;
}

h2 {
  text-transform: none;
}
</style>
