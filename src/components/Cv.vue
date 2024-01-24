<template>
  <div :class="['layout-cv', theme]">
    <h1>Curriculum Vitae</h1>
    <p v-html="cvDescription"></p>
    <embed :src="pdfPath" width="90%" height="400px" type="application/pdf" />
  </div>
</template>
<script setup>
import pdfPath from "../assets/cv.pdf";
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
const cvDescription = ref(
  storeLang.languages[storeLang.currentLanguage].cv_description
);

// Watch changes
watchEffect(() => {
  cvDescription.value =
    storeLang.languages[storeLang.currentLanguage].cv_description;
});
/*** Lang state***/
</script>
<style lang="scss" scoped>
.layout-cv {
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 4rem;
  margin: auto;
  text-align: center;
  font-family: $font_family;

  h1,
  p {
    padding-bottom: 2rem;
  }
  embed {
    padding-bottom: 3rem;
  }
}

@media screen and (min-width: 650px) {
  .layout-cv {
    embed {
      height: 1050px;
    }
  }
}
</style>
