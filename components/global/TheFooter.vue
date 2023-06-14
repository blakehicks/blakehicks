<template>
  <footer
    ref="footer"
    class="translate-y-full fixed w-full bottom-0 left-0 py-4 font-mono text-sm"
  >
    <aside>
      <div class="container mx-auto flex justify-between">
        <p>Splenic Manifestor 5/1</p>
        <p>Individual Contributor</p>
        <p>INFP-T</p>
      </div>
    </aside>
  </footer>
</template>

<script setup lang="ts">
const { $gsap } = useNuxtApp();
const footer = ref();
onMounted(() => {
  //Bring in footer
  $gsap.to(footer.value, {
    duration: 1,
    translateY: 0,
    delay: 1,
    ease: "Power4.easeOut",
  });
});
</script>

<style scoped></style>
