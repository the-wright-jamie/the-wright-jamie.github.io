<template>
  <div>
    <h1 class="lg:text-4xl text-xl mb-4 header">showcase --all</h1>
    <p class="text-2xl">A place for me to show off some of my best and upcoming work</p>
    <h2>Complete</h2>
    <h1 class="center" id="lifeline">
      <span class="material-symbols-rounded icon-correction icon-correction-right"
        ><img src="./../assets/img/vital.svg" class="h-15" /></span
      ><i class="title text-[3em]">Lifeline</i
      ><span class="material-symbols-rounded icon-correction icon-correction-right"
        ><img src="./../assets/img/vital.svg" class="h-15"
      /></span>
    </h1>
    <p>This was built to meet the needs of our internal security team.</p>
    <hr />

    <h2>Upcoming</h2>
    <h3>This website</h3>
    <h3>Store-front</h3>
    <h3>Untitled Game</h3>
    <hr />
    <h2>Unfinished</h2>
    <div class="flex gap-8 justify-center">
      <img src="./../assets/img/get-outside-monochrome.svg" class="w-20 invert" />
      <img src="./../assets/img/get-outside-logo.svg" class="w-80" />
    </div>
    <p>This was my dissertation assignment.</p>
  </div>
</template>

<script setup>
// placeholder
</script>

<style scoped>
.icon-correction {
  padding-bottom: 1.3em;
}

.icon-correction-right {
  padding-left: 0.3em;
}

.icon-correction-left {
  padding-right: 0.3em;
}

hr {
  margin-top: 1em;
  margin-bottom: 1em;
  border-top: 0.1em dashed;
}

.title {
  font-family: 'Roboto Condensed';
  margin-left: -0.18em;
  margin-right: -0.18em;
  font-weight: 900;
}
</style>
