<template>
  <div :class="['layout', theme]">
    <section class="contenedor-layout">
      <slot name="seccion1"></slot>
      <slot name="seccion2"></slot>
    </section>
  </div>
</template>
<script setup>
import { useThemeStore } from "../store/theme";
import { ref, watchEffect } from "vue";
/*** Mode state***/
const storeTheme = useThemeStore();
const theme = ref(storeTheme.currentMode);

// Watch changes
watchEffect(() => {
  console.log(theme.value);
  theme.value = storeTheme.currentMode;
});
/*** Mode state***/
</script>
<style lang="scss" scoped>
html,
*,
::after,
::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: $font_family;
}
.dark {
  background-color: $color-dark-theme !important;
  color: $color-light-theme !important;
}
.light {
  background-color: $color-light-theme !important;
  color: $color-texto !important;
}
.contenedor-layout {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.layout {
  //max-width: 100vw;
  height: auto;
  display: flex;
  flex-direction: column;
}
small {
  font-size: 0.8rem;
}
@media screen and (min-width: 768px) {
  .contenedor-layout {
    display: grid;
    grid-template-columns: 2fr 3fr;
  }
  .layout {
    height: 100vh;
  }
}
</style>
