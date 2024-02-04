<template>
  <div
    id="carouselExampleSlidesOnly"
    :class="['carousel', 'slide', theme]"
    data-bs-ride="carousel"
  >
    <div class="carousel-inner">
        <!-- Indicators / Indicadores -->
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleSlidesOnly" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleSlidesOnly" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleSlidesOnly" data-bs-slide-to="2" aria-label="Slide 3"></button>
      <button type="button" data-bs-target="#carouselExampleSlidesOnly" data-bs-slide-to="3" aria-label="Slide 4"></button>
      <button type="button" data-bs-target="#carouselExampleSlidesOnly" data-bs-slide-to="4" aria-label="Slide 5"></button>
      <button type="button" data-bs-target="#carouselExampleSlidesOnly" data-bs-slide-to="5" aria-label="Slide 6"></button>
    </div>
  <!-- Indicators / Indicadores -->
      <!-- Diapositiva 1-->
      <div class="carousel-item active">
        <div class="cuadrado">
          <h3>Cronos</h3>
          <img
            src="../assets/cronos-1.png"
            alt="Cronos"
            class="d-block foto-g"
          />
          <img
            src="../assets/cronos-2.png"
            alt="Cronos"
            class="d-block foto-p"
          />
          <div class="tecnologias">
            <v-icon name="io-logo-react" scale="1.8"></v-icon>
            <v-icon name="la-css3-alt" scale="1.8"></v-icon>
            <v-icon name="la-node" scale="1.8"></v-icon>
            <v-icon name="si-mongodb" scale="1.8"></v-icon>
            <v-icon name="si-bootstrap" scale="1.8"></v-icon>
            <v-icon name="co-github" scale="1.8"></v-icon>
            <v-icon name="si-vite" scale="1.8"></v-icon>
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
                >
                <router-link :to="{ name: 'cronos' }">
                  <v-icon name="md-add-round" scale="1.5"></v-icon> 
                </router-link>
              </span>
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
        </div>
      </div>
      <!-- Diapositiva 2-->
      <div class="carousel-item">
        <div class="cuadrado">
          <h3>MeetEase</h3>
          <img
            src="../assets/meetease-1.png"
            alt="MeetEase"
            class="d-block foto-g"
          />
          <img
            src="../assets/meetease-2.png"
            alt="MeetEase"
            class="d-block foto-p"
          />
          <div class="tecnologias">
            <v-icon name="io-logo-react" scale="1.8"></v-icon>
            <v-icon name="la-css3-alt" scale="1.8"></v-icon>
            <v-icon name="si-firebase" scale="1.8"></v-icon>
            <v-icon name="co-github" scale="1.8"></v-icon>
          </div>
          <div class="btn-container">
            <button class="button">
              <span class="button-text"
                ><a href="https://www.whentomeetup.com/" target="_blank">
                  <v-icon name="fa-regular-eye" scale="1.5"></v-icon> </a
              ></span>
            </button>
            <button class="button">
              <span class="button-text">
                <router-link :to="{ name: 'meetease' }">
                  <v-icon name="md-add-round" scale="1.5"></v-icon> 
                </router-link>
            </span>
            </button>
            <button class="button">
              <span class="button-text"
                ><a
                  href="https://github.com/rammariana/cantom-modulo-2.2"
                  target="_blank"
                >
                  <v-icon name="bi-code-slash" scale="1.5"></v-icon> </a
              ></span>
            </button>
          </div>
        </div>
      </div>
      <!-- Diapositiva 3-->
      <div class="carousel-item">
        <div class="cuadrado">
          <h3>Barraza Invertors</h3>
          <video
            src="../assets/barraza-1.webm"
            autoplay="true"
            muted="true"
            loop="true"
            class="d-block video"
          ></video>
          <img
            src="../assets/barraza-2.png"
            alt="Barraza Investors"
            class="d-block foto-p"
          />
          <div class="tecnologias">
            <v-icon name="la-html5" scale="1.8"></v-icon>
            <v-icon name="la-css3-alt" scale="1.8"></v-icon>
            <v-icon name="ri-vuejs-line" scale="1.8"></v-icon>
            <v-icon name="si-bootstrap" scale="1.8"></v-icon>
            <v-icon name="co-github" scale="1.8"></v-icon>
          </div>
          <div class="btn-container">
            <button class="button">
              <span class="button-text"
                ><a
                  href="https://barrazainvestors.netlify.app/home"
                  target="_blank"
                >
                  <v-icon name="fa-regular-eye" scale="1.5"></v-icon> </a
              ></span>
            </button>
            <button class="button">
              <span class="button-text">
                <router-link :to="{ name: 'barrazainvestors' }">
                  <v-icon name="md-add-round" scale="1.5"></v-icon> 
                </router-link>
            </span>
            </button>
            <button class="button">
              <span class="button-text">
                <a
                  href="https://github.com/rammariana/barraza-investors"
                  target="_blank">
                  <v-icon name="bi-code-slash" scale="1.5"></v-icon>
                </a>
                </span>
            </button>
          </div>
        </div>
      </div>
      <!-- Diapositiva 4-->
      <div class="carousel-item">
        <div class="cuadrado">
          <h3>IDtly</h3>
          <img
            src="../assets/tienda-1.png"
            alt="IDtly"
            class="d-block foto-g"
          />
          <img
            src="../assets/tienda-2.png"
            alt="IDtly"
            class="d-block foto-p"
          />
          <div class="tecnologias">
            <v-icon name="la-html5" scale="1.8"></v-icon>
            <v-icon name="la-css3-alt" scale="1.8"></v-icon>
            <v-icon name="fa-sass" scale="1.8"></v-icon>
          </div>
          <div class="btn-container">
            <button class="button">
              <span class="button-text"
                ><a href="https://idtlyshop.netlify.app" target="_blank">
                  <v-icon name="fa-regular-eye" scale="1.5"></v-icon> </a
              ></span>
            </button>
            <button class="button">
              <span class="button-text">
                <router-link :to="{ name: 'idtly' }">
                  <v-icon name="md-add-round" scale="1.5"></v-icon> 
                </router-link>
              </span>
            </button>
            <button class="button">
              <span class="button-text"
                ><a
                  href="https://github.com/rammariana/tienda-sass"
                  target="_blank"
                  ><v-icon name="bi-code-slash" scale="1.5"></v-icon> </a
              ></span>
            </button>
          </div>
        </div>
      </div>
      <!-- Diapositiva 5-->
      <div class="carousel-item">
        <div class="cuadrado">
          <h3>Balto</h3>
          <img src="../assets/laika-1.png" alt="Balto" class="d-block foto-g" />
          <img src="../assets/laika-2.png" alt="Balto" class="d-block foto-p" />
          <div class="tecnologias">
            <v-icon name="la-html5" scale="1.8"></v-icon>
            <v-icon name="la-css3-alt" scale="1.8"></v-icon>
            <v-icon name="si-bootstrap" scale="1.8"></v-icon>
          </div>
          <div class="btn-container">
            <button class="button">
              <span class="button-text"
                ><a href="https://balto.netlify.app" target="_blank">
                  <v-icon name="fa-regular-eye" scale="1.5"></v-icon> </a
              ></span>
            </button>
            <button class="button">
              <span class="button-text">
                <router-link :to="{ name: 'balto' }">
                  <v-icon name="md-add-round" scale="1.5"></v-icon> 
                </router-link>
            </span>
            </button>
            <button class="button">
              <span class="button-text"
                ><a href="https://github.com/rammariana/laika" target="_blank">
                  <v-icon name="bi-code-slash" scale="1.5"></v-icon> </a
              ></span>
            </button>
          </div>
        </div>
      </div>
      <!-- Diapositiva 6-->
      <div class="carousel-item">
        <div class="cuadrado">
          <h3>Pokememory</h3>
          <img
            src="../assets/poke-1.png"
            alt="Pokememoria"
            class="d-block foto-g"
          />
          <img
            src="../assets/poke-2.png"
            alt="Pokememoria"
            class="d-block foto-p"
          />
          <div class="tecnologias">
            <v-icon name="la-html5" scale="1.8"></v-icon>
            <v-icon name="la-css3-alt" scale="1.8"></v-icon>
            <v-icon name="io-logo-javascript" scale="1.8"></v-icon>
          </div>
          <div class="btn-container">
            <button class="button">
              <span class="button-text"
                ><a href="https://pokememoria.netlify.app" target="_blank">
                  <v-icon name="fa-regular-eye" scale="1.5"></v-icon> </a
              ></span>
            </button>
            <button class="button">
              <span class="button-text">
                <router-link :to="{ name: 'pokememory' }">
                  <v-icon name="md-add-round" scale="1.5"></v-icon> 
                </router-link>
            </span>
            </button>
            <button class="button">
              <span class="button-text"
                ><a
                  href="https://github.com/rammariana/memoria"
                  target="_blank"
                >
                  <v-icon name="bi-code-slash" scale="1.5"></v-icon> </a
              ></span>
            </button>
          </div>
        </div>
      </div>
    </div>
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
body {
  font-family: $font_family;
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
// Bootstrap carousel
.carousel {
  height: 90vh !important;
  animation: aparecer 1s ease;
  margin-top: 0.5rem;
}
.carousel-indicators {   
  margin-bottom: -0.5rem;
  [data-bs-target] {
    background-color: $color-amarillo;
  }  
}
.carousel-inner {
  height: 100%;
}
.carousel-item {
  height: 100%;
  text-align: center;
}
.carousel-item-left.active .cuadrado .foto-p,
.carousel-item-next .cuadrado .foto-p {
  animation: aparecer-derecha 2s ease;
  -moz-animation: aparecer-derecha 2s ease;
  transition: 2s;
  animation-delay: 0.3s;
}
.carousel-item-right.active .cuadrado .foto-p,
.carousel-item-prev .cuadrado .foto-p {
  animation: aparecer-izquierda 2s ease;
  -moz-animation: aparecer-izquierda 2s ease;
  transition: 2s;
  animation-delay: 0.1s;
}
.carousel-item-left.active .cuadrado .foto-g,
.carousel-item-next .cuadrado .foto-g,
.carousel-item-left.active .cuadrado .video,
.carousel-item-next .cuadrado .video {
  animation: aparecer-derecha 1s ease;
  -moz-animation: aparecer-derecha 1s ease;
  transition: 2s;
}
.carousel-item-right.active .cuadrado .foto-g,
.carousel-item-prev .cuadrado .foto-g,
.carousel-item-right.active .cuadrado .video,
.carousel-item-prev .cuadrado .video {
  animation: aparecer-izquierda 1s ease;
  -moz-animation: aparecer-izquierda 1s ease;
  transition: 2s;
}
.carousel-item-left,
.carousel-item-right {
  transform: translateX(0);
  transition: 2s;
}
// Bootstrap carousel
.cuadrado {
  position: relative;
  width: 100vw;
  height: 100vh;
  h3 {
    top: 5rem;
    position: inherit;
  }
}
.dark {
  background-color: $color-dark-theme !important;
  color: $color-light-theme !important;
}
.light {
  background-color: $color-light-theme !important;
  color: $color-texto !important;
}

.foto-g,
.foto-p {
  position: absolute;
  box-shadow: 2px 14px 20px 0 $color-texto;
}
.foto-g {
  width: 12rem;
  height: 12rem;
  top: 8rem;
  left: 10%;
  border-radius: 1rem;
}
.foto-p {
  width: 10rem;
  height: 10rem;
  top: 15rem;
  left: 45%;
  border-radius: 1rem;
}
.tecnologias {
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  position: absolute;
  top: 66%;
  .ov-icon {
    color: $color-texto;
  }
  .ov-icon:hover {
    fill: $color-texto;
  }
}
video {
  position: absolute;
  width: 16rem;
  height: 10rem;
  object-fit: cover;
  top: 8rem;
  left: 10%;
  box-shadow: 2px 14px 20px 0 $color-texto;
  border-radius: 1rem;
}

@media screen and (min-width: 500px) {
  .tecnologias {
    top: 73%;
  }
  .btn-container {
    top: 75%;
  }
}

@media screen and (min-width: 600px) {
  .btn-container {
    top: 75%;
  }
  .carousel {
    height: 95vh !important;
  }
  .tecnologias {
    top: 74%;
  }
  .foto-g {
    left: 10rem;
    width: 15rem;
    height: 15rem;
  }
  .foto-p {
    left: 24rem;
    width: 11rem;
    height: 11rem;
  }
  .video {
    width: 22rem;
    height: 12rem;
    left: 12%;
  }
}
@media screen and (min-width: 800px) {
  
  .foto-g {
    left: 35%;
  }
  .foto-p {
    left: 50%;
  }
  .video {
    left: 35%;
  }
}
</style>
