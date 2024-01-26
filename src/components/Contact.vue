<template>
  <MainLayout>
    <template v-slot:seccion1>
      <section class="seccion-uno">
        <div class="contacto">
          <h1 class="contacto-h1" v-html="contactTitle"></h1>
          <div class="descripcion">
            <p v-html="contact"></p>
          </div>

          <a href="mailto:marianasmatos1@gmail.com">
            <button class="button mt-3">
              <span class="button-text" v-html="contactBtn"></span>
            </button>
          </a>
        </div>
      </section>
    </template>
    <template v-slot:seccion2>
      <section class="seccion-dos">
        <h4 class="m-5 d-md-none" v-html="contactMeet"></h4>
        <div
          class="conatiner-fluid d-flex flex-row justify-content-evenly redes"
        >
          <a href="https://www.facebook.com/profile.php?id=764297855"
            ><v-icon
              name="bi-facebook"
              scale="1.8"
              class="icono icono-1"
            ></v-icon
          ></a>
          <a href="https://wa.me/3225278052"
            ><v-icon
              name="bi-whatsapp"
              scale="1.8"
              class="icono icono-2"
            ></v-icon
          ></a>
          <a href="https://github.com/rammariana?tab=repositories"
            ><v-icon name="bi-github" scale="1.8" class="icono icono-3"></v-icon
          ></a>
          <a href="https://github.com/rammariana?tab=repositories" class="in"
            ><v-icon
              name="ri-linkedin-fill"
              scale="1.8"
              class="icono icono-4"
            ></v-icon
          ></a>
        </div>
        <img src="../assets/chica-sentada.png" />
      </section>
    </template>
  </MainLayout>
</template>
<script setup>
import MainLayout from "../layout/MainLayout.vue";
import { useLanguageStore } from "../store/language";
import { ref, watchEffect } from "vue";

const store = useLanguageStore();
const contact = ref(store.languages[store.currentLanguage].contact);
const contactTitle = ref(store.languages[store.currentLanguage].contact_title);
const contactBtn = ref(store.languages[store.currentLanguage].contact_btn);
const contactMeet = ref(store.languages[store.currentLanguage].contact_meet);

// Watch changes

watchEffect(() => {
  contact.value = store.languages[store.currentLanguage].contact;
  contactTitle.value = store.languages[store.currentLanguage].contact_title;
  contactBtn.value = store.languages[store.currentLanguage].contact_btn;
  contactMeet = ref(store.languages[store.currentLanguage].contact_meet);

});
</script>
<style lang="scss" scoped>
a {
  color: $color-amarillo;
}
.button {
  width: 9rem;
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
.contacto {
  height: auto;
  width: 80%;
  text-align: center;
  p {
    padding-left: 0.5rem;
    text-align: center;
  }
  button {
    margin-left: 0.5rem;
  }
}
.contacto-h1 {
  margin-bottom: 3rem;
  text-align: center;
}
img {
  width: 100%;
  margin-top: 2.5rem;
  text-align: center;
  animation: imageContacto 5s ease-out infinite;
}
.icono {
  cursor: pointer;
}
.icono-1 {
  animation: rebote 1.5s ease-out infinite;
}
.icono-2 {
  animation: rebote 1.5s ease-out infinite;
  animation-delay: 0.2s;
}
.icono-3 {
  animation: rebote 1.5s ease-out infinite;
  animation-delay: 0.4s;
}
.icono-4 {
  width: 1.8rem;
  height: 1.8rem;
  animation: rebote 1.5s ease-out infinite;
  animation-delay: 0.6s;
  border-radius: 50%;
  background-color: $color-amarillo;
  color: $color-blanco;
  padding: 0.2rem;
}
.ov-icon:hover {
  fill: $color-morado;
}
.redes {
  color: $color-amarillo;
}
.seccion-uno,
.seccion-dos {
  animation: aparecer 1s ease;
}
.seccion-uno {
  margin-top: 5rem;
  display: flex;
  justify-content: center;
}
.seccion-dos {
  margin: 3rem 0;
  h4 {
    text-align: center;
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
@keyframes imageContacto {
  0% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(-7%);
  }
  100% {
    transform: translateX(0%);
  }
}
@media screen and (min-width: 768px) {
  .contacto {
    width: 100%;
    text-align: start;
  }
  img {
    margin-top: 3.5rem;
  }
  .seccion-uno {
    justify-content: flex-start;
    text-align: start;
    margin-left: 4rem;
    margin-top: 8rem;
  }
  .seccion-dos {
    margin-top: 4.5rem;
    margin-bottom: 0 !important;
  }
}
@media screen and (min-width: 768px) {
  img {
    margin-top: 1.5rem;
    width: 85%;
  }
  .contacto-h1 {
    text-align: start;
  }
  .contacto p {
    text-align: start;
  }
}
</style>
