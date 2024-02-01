<template>
      <section :class="['about', theme]">
        <h3 class="mb-1">Mariana Ramírez</h3>
        <h5 class="mb-5">Frontend Dev</h5>
        <div class="container d-flex flex-row justify-content-evenly mb-5">
            <button class="button" @click="handleScroll">
              <span class="button-text" v-html="aboutBriefcase"></span>
            </button>
          <router-link :to="{ name: 'cv' }">
            <button class="button"><span class="button-text">Cv</span></button>
          </router-link>
        </div>
        <div class="contenedor-seccion-dos">
          <p v-html="about"></p>
        </div>
      </section>
</template>
<script setup>
import { useLanguageStore } from "../store/language";
import { useThemeStore } from "../store/theme";
import { ref, watchEffect } from "vue";

const handleScroll = () => {
  window.scroll({
  top: 0,
  behavior: "smooth",
});
}

const storeTheme = useThemeStore();
const theme = ref(storeTheme.currentMode);


// Watch changes
watchEffect(() => {
  console.log(theme.value);
  theme.value = storeTheme.currentMode;
});
/*** Mode state***/


/*** Lang state***/
const store = useLanguageStore();
const about = ref(store.languages[store.currentLanguage].about);
const aboutBriefcase = ref(store.languages[store.currentLanguage].about_briefcase);
// Watch changes
watchEffect(() => {
  about.value = store.languages[store.currentLanguage].about;
  aboutBriefcase.value = store.languages[store.currentLanguage].about_briefcase;

});
/*** Lang state***/
</script>
<style lang="scss" scoped>
.about {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: $font-family;
  padding-top: 5rem;
}
.button {
  width: 6rem;
  height: 3rem;
  position: relative;
  overflow: hidden;
  padding: 0;
  border: none;
  border-radius: 2rem;
  background-color: $color-amarillo;
  color: $color-blanco;
  cursor: pointer;
  transition: background-color 0.3s ease;
}
.button-text {
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.button::before {
  content: "";
  position: absolute;
  width: 0;
  height: 0;
  background-color: $color-morado;
  border-radius: 2rem;
  transition: height 0.3s ease-out;
  transition: width 0.3s ease-out;
  opacity: 0;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.button:hover::before {
  width: 100%;
  height: 100%;
  opacity: 1;
}
.button:hover {
  border: none;
}
.card div {
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  backface-visibility: hidden; /* oculta la parte de atras*/
  transition: 1s;
}
.contenedor-layout {
  display: flex;
  align-items: center;
  justify-content: center;
}
.contenedor-seccion-dos {
  width: 80%;
  text-align: justify;
}
.dark {
  background-color: $color-dark-theme !important;
  color: $color-light-theme !important;
}
.light {
  background-color: $color-light-theme !important;
  color: $color-texto !important;
}
.ov-icon:hover {
  fill: $color-morado;
}
p {
  text-indent: 0.8rem;
}

.seccion-uno,
.seccion-dos {
  animation: aparecer 1s ease;
}
.seccion-uno {
  margin: 3rem 0;
  width: 100vw;
  height: 60vh;
  display: none;
  /*justify-content: center;
  align-items: center;
  padding: 0 1rem;*/
}
.seccion-dos {
  margin: 3rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}
@keyframes opacidad {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@media screen and (min-width: 500px) {
  .card {
    width: 20rem;
    height: 20rem;
  }
  .seccion-uno {
    margin-top: 3rem;
  }
}
@media screen and (min-width: 768px) {
  .seccion-uno {
    padding-left: 2rem;
    width: auto;
    height: auto;
  }
  
}
</style>
