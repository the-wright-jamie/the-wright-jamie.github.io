<template>
  <div class="about-wright-software">
    <div class="flex justify-center place-items-center gap-0 sm:gap-6 pt-10">
      <img src="./../assets/img/w-software.png" class="h-20 sm:h-30" />
      <p class="text-4xl md:text-6xl wright-software text-center">Wright Software</p>
    </div>
    <h2 class="text-center font-extrabold p-4 opacity-70">Sole engineer, contract for-hire</h2>
    <hr class="mt-4 mb-4" />

    <p class="mt-8 text-center text-2xl lg:text-3xl">
      Need a website? Design a system? Get general IT help? You're in the Wright place.
    </p>
    <h2 class="text-center font-extrabold p-4 opacity-70">Please excuse the mess - Page is WIP</h2>
    <hr class="mt-4 mb-4" />
    <div class="mt-8 text-2xl text-justify">
      <h2 class="mt-4">Web Development</h2>
      <p>
        Making websites is my bread and butter. If you have a design that you want to make a
        reality, give me a shout. Or, you have a business idea and don't want to get into the weeds
        of designing a website, I can do that for you too - just give me a general direction, some
        inspiration, a sense of what your business is about, and I'll get back to you.
      </p>
      <br />
      <div class="flex justify-center">
        <router-link
          to="/contact"
          class="contact bg-neutral-700 p-4 rounded-full px-8 hover:bg-neutral-600"
          >Let's get started</router-link
        >
      </div>
      <h2 class="mt-4">SEO and Social Media Management</h2>
      <p>
        There are many ways you can leverage social media and SEO, even today in the AI age. The
        high street is dying, and small businesses are popping up all over the county in places from
        large cities to small villages. One of the primary way people look for businesses now is
        through social media, and there are many ways you might not have thought of that can improve
        your presence on the internet. Having a strong internet presence is important for creating
        new business opportunities.
      </p>
      <br />
      <p>
        I can help you to create a social media plan, or clean up existing social medias to make
        them more discoverable (and helpful to potential clients).
      </p>
      <br />
      <div class="flex justify-center">
        <router-link
          to="/contact"
          class="contact bg-neutral-700 p-4 rounded-full px-8 hover:bg-neutral-600"
          >Get in touch</router-link
        >
      </div>
      <h2 class="mt-4">Software</h2>
      <p>Custom software solutions tailored to your needs.</p>
      <h2 class="mt-4">Consulting</h2>
      <p>Expert advice to help you navigate the tech landscape.</p>
      <h2 class="mt-4">Security</h2>
      <p>Protect your digital assets with our security services.</p>
      <h2 class="mt-4">Infrastructure</h2>
      <p>Robust and scalable infrastructure solutions.</p>
      <h2 class="mt-4">Other</h2>
      <p>
        Software isn't the only thing I can do. I have a range of skills and abilities, such as
        audio engineering.
      </p>
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'

// placeholder
</script>

<style scoped>
.wright-software {
  font-family: 'Roboto';
  font-weight: 900;
  font-variation-settings: 'ROND' 0;
}

.about-wright-software {
  padding: 2rem;
  border-radius: 1rem;
  font-variation-settings: 'ROND' 100;
  font-family: 'Google Sans' !important;
}

p,
h1,
h2 {
  font-family: 'Google Sans' !important;
}

h2 {
  text-transform: none;
}

.contact {
  font-weight: 600;
  text-transform: uppercase;
  font-stretch: 60%;
}
</style>
