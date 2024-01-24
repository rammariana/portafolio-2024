<template>
  <PortafolioViewsLayout>
    <template v-slot:seccion1>
      <section class="seccion-uno">
        <h1 v-html="cronosTitle"></h1>
        <img src="../assets/cronos-1.png" alt="Cronos" class="d-block foto-p" />
        <div class="tecnologias">
          <v-icon name="io-logo-react" scale="1.8"></v-icon>
          <v-icon name="la-css3-alt" scale="1.8"></v-icon>
          <v-icon name="la-node" scale="1.8"></v-icon>
          <v-icon name="si-mongodb" scale="1.8"></v-icon>
          <v-icon name="si-bootstrap" scale="1.8"></v-icon>
          <v-icon name="co-github" scale="1.8"></v-icon>
        </div>
        <div class="btn-container">
          <button class="button">
            <span class="button-text"
              ><a href="https://cronos-phi.vercel.app/" target="_blank">
                <v-icon name="fa-regular-eye" scale="1.5"></v-icon> </a
            ></span>
          </button>
          <button class="button">
            <span class="button-text"
              ><a
                href="https://github.com/rammariana/cronos-front"
                target="_blank"
              >
                <v-icon name="bi-code-slash" scale="1.5"></v-icon> </a
            ></span>
          </button>
        </div>
      </section>
    </template>
    <template v-slot:seccion2>
      <section class="seccion-dos">
        <p v-html="cronosDescription"></p>
      </section>
    </template>
  </PortafolioViewsLayout>
</template>
<script setup>
import PortafolioViewsLayout from "../layout/PortafolioViewsLayout.vue";
import { useLanguageStore } from "../store/language";
import { ref, watchEffect } from "vue";

const store = useLanguageStore();
const cronosDescription = ref(
  store.languages[store.currentLanguage].cronos_description
);
const cronosTitle = ref(store.languages[store.currentLanguage].cronos_title);

// Watch changes

watchEffect(() => {
  cronosDescription.value =
    store.languages[store.currentLanguage].cronos_description;
  cronosTitle.value = store.languages[store.currentLanguage].cronos_title;
});
</script>
<style lang="scss" scoped>
a,
a:hover,
.ov-icon:hover {
  color: $color-blanco;
}
.btn-container {
  width: 100%;
  display: flex;
  justify-content: space-around;
  position: relative;
  top: 20%;
  transition: all 1s ease;
  button {
    width: 6.5rem;
    height: 3rem;
    position: relative;
    overflow: hidden;
    padding: 0;
    border: none;
    border-radius: 2rem;
    background-color: $color-morado;
    color: $color-blanco;
    cursor: pointer;
    transition: background-color 0.1s ease;
  }
}
.btn-container {
  width: 100%;
  display: flex;
  justify-content: space-around;
  position: relative;
  top: 70%;
  transition: all 1s ease;
  button {
    width: 6.5rem;
    height: 3rem;
    position: relative;
    overflow: hidden;
    padding: 0;
    border: none;
    border-radius: 2rem;
    background-color: $color-morado;
    color: $color-blanco;
    cursor: pointer;
    transition: background-color 0.1s ease;
  }
  a {
    text-decoration: none;
    color: $color-blanco;
  }
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
  background-color: $color-amarillo;
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
.d-block {
  width: 80% !important;
  border-radius: 1rem;
  border: thin solid gray;
}
video {
  width: 100%;
}
.seccion-uno,
.seccion-dos {
  animation: aparecer 1s ease;
}
.seccion-uno {
  padding-top: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1 {
    padding-bottom: 1.5rem;
    text-align: center;
  }
}
.seccion-dos {
  padding: 1rem 0;
  p {
    padding: 1.5rem;
    text-align: justify;
    text-indent: 1rem;
  }
}
.tecnologias {
  top: 50%;
  width: 100%;
  padding: 1rem 0;
  display: flex;
  justify-content: space-evenly;
  .ov-icon {
    color: $color-texto;
  }
  .ov-icon:hover {
    fill: $color-texto;
  }
}
@keyframes rebote {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(50%);
  }
  100% {
    transform: translateY(0);
  }
}
@media screen and (min-width: 768px) {
  img {
    margin-top: 3.5rem;
  }
  .d-block {
    width: 50% !important;
  }
}
</style>
