<template>
  <section class="about-rightware">
    <header class="hero">
      <div class="container">
        <h1 class="brand rightware">
          <span class="brand-left rightware-one">right</span
          ><span class="brand-right rightware-two">ware</span>
        </h1>
        <p class="tagline">
          Solutions to help make your world
          <span class="rightware-one font-black">good</span> and
          <span class="rightware-two font-black">right</span>.
        </p>
        <p class="text-2xl mt-4">
          We are currently making
          <span class="rightware"
            ><span class="rightware-one">stock</span><span class="rightware-two">hop</span></span
          >. Check back in a few months for more information!
        </p>
      </div>
    </header>
  </section>
</template>

<script setup></script>

<style scoped>
a {
  font-family: 'Google Sans' !important;
}

p,
h1,
h2 {
  font-family: 'Google Sans' !important;
}

.rightware {
  font-family: 'Google Sans';
  font-weight: 700;
  font-style: italic;
}

@media (min-width: 768px) {
  .main-grid {
    grid-template-columns: 1fr;
  }
  .feature {
    grid-template-columns: 1fr 480px;
  }
  .cards {
    grid-template-columns: repeat(2, 1fr);
  }
  .brand {
    font-size: 68px;
  }
}

@media (min-width: 1100px) {
  .main-grid {
    grid-template-columns: 1fr;
  }
  .feature {
    grid-template-columns: 1fr 520px;
  }
}
</style>
