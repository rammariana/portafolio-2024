<template>
  <div :class="['layout', theme]">
    <section>
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

@media screen and (min-width: 600px) {
  .layout {
    padding: 0 5rem !important;
  }
}
@media screen and (min-width: 800px) {
  .layout {
    padding: 0 8rem !important;
  }
}
</style>
