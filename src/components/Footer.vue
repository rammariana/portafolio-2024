<template>
  <footer :class="['footer', theme]">
    <small v-html="footerDescription"></small>
  </footer>
</template>
<script setup>
import { useThemeStore } from "../store/theme";
import { useLanguageStore } from "../store/language";
import { ref, watchEffect } from "vue";
/*** Mode state***/
const storeTheme = useThemeStore();
const theme = ref(storeTheme.currentMode);

// Watch changes
watchEffect(() => {
  theme.value = storeTheme.currentMode;
});
/*** Mode state***/
/*** Lang state***/
const storeLang = useLanguageStore();
const footerDescription = ref(
  storeLang.languages[storeLang.currentLanguage].footer_description
);

// Watch changes
watchEffect(() => {
  footerDescription.value =
    storeLang.languages[storeLang.currentLanguage].footer_description;
});
/*** Lang state***/
</script>
<style lang="scss" scoped>
html,
*,
::after,
::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.footer {
  width: 100%;
  bottom: 0;
  color: $color-texto;
  padding: 3rem 2rem;
  text-align: center;
  background-image: linear-gradient(
    $color-morado 25%,
    $color-amarillo
  );

  color: $color-blanco;
}
small {
  font-size: 0.8rem;
}
</style>
