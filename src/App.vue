<template>
  <nav :class="['navbar bg-body-tertiary fixed-top', mode]">
    <div class="container-fluid">
      <router-link class="navbar-brand" :to="{ name: 'portafolio' }"
        ><img src="./assets/mariana-logo.png" alt=""
      /></router-link>
      <div class="lang-dark-mode">
        <button
          :class="['dark-mode-slide-btn', !slideTheme ? 'btn-dark' : null]"
          @click="changeMode"
        >
          <span :class="[!slideTheme ? 'move' : 'switch']"></span>
        </button>
        <div class="lang">
          <button @click="changeLanguage">{{ lang }}</button>
        </div>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
      </div>
      <div
        class="offcanvas offcanvas-end"
        tabindex="-1"
        id="offcanvasNavbar"
        aria-labelledby="offcanvasNavbarLabel"
      >
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasNavbarLabel">
            <img src="./assets/mariana-logo.png" alt="" />
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div class="offcanvas-body">
          <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
            <li class="nav-item">
              <router-link
                :to="{ name: 'portafolio' }"
                class="nav-link active"
                aria-current="page"
              >
                <div class="menu-list">
                  <v-icon name="gi-briefcase" scale="1.8"></v-icon>
                  <p>Portafolio</p>
                </div>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link :to="{ name: 'cronos' }" class="nav-link"
                ><div class="menu-list">
                  <img src="./assets/cronos-logo.png" alt="Cronos" />
                  <p>Cronos</p>
                </div>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link :to="{ name: 'meetease' }" class="nav-link"
                ><div class="menu-list">
                  <img
                    src="./assets/meetease-logo.png"
                    alt="MeetEase"
                    class="meetease"
                  />
                  <p>MeetEase</p>
                </div></router-link
              >
            </li>
            <li class="nav-item">
              <router-link :to="{ name: 'barrazainvestors' }" class="nav-link">
                <div class="menu-list">
                  <img
                    src="./assets/b-investors-logo.png"
                    alt="Barraza
                Investors"
                  />
                  <p>Barraza Investors</p>
                </div>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link :to="{ name: 'balto' }" class="nav-link">
                <div class="menu-list">
                  <img
                    src="./assets/balto-logo.png"
                    alt="Barraza
                Investors"
                  />
                  <p>Balto</p>
                </div>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link :to="{ name: 'cv' }" class="nav-link">
                <div class="menu-list">
                  <v-icon name="bi-mortarboard-fill" scale="1.8"></v-icon>
                  <p>Cv</p>
                </div>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link :to="{ name: 'idtly' }" class="nav-link"
                >IDtly</router-link
              >
            </li>
            <li class="nav-item">
              <router-link :to="{ name: 'pokememory' }" class="nav-link"
                >Pokememory</router-link
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
  <router-view />
</template>

<script setup>
import { ref } from "vue";
import { useLanguageStore } from "./store/language";
import { useThemeStore } from "./store/theme";

/**** Lang state ****/
const storeLang = useLanguageStore();
const lang = ref(storeLang.currentLanguage); // Initial lang
const slideTheme = ref(false);

const changeLanguage = () => {
  lang.value = lang.value === "🇪🇸" ? "🇬🇧" : "🇪🇸";
  storeLang.changeLanguage(lang.value);
};
/**** Lang state ****/
/**** Theme state ****/
const storeTheme = useThemeStore();
const mode = ref("light"); // Initial mode

const changeMode = () => {
  mode.value = mode.value === "light" ? "dark" : "light";
  storeTheme.changeTheme(mode.value);
  slideTheme.value = !slideTheme.value;
};
/**** Theme state ****/
</script>

<style lang="scss" scoped>
// My styles
@import "./scss/variables.scss";
html,
body,
*,
::after,
::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.btn-dark {
  background-image: url("./assets/night.jpg") !important;
  background-color: gray !important;
  background-size: cover;
}

.navbar-brand img {
  width: 2.5rem;
}
.dark-mode-slide-btn {
  width: 3rem;
  height: 1.5rem;
  border: none;
  background-image: url("./assets/sky.jpg");
  background-color: white;
  background-size: cover;
  border-radius: 1.5rem;
  transition: all 1s ease;

  .switch {
    display: block;
    position: absolute;
    width: 1.3rem;
    height: 1.3rem;
    background-image: url("./assets/sun.png");
    background-color: transparent;
    background-size: cover;
    border-radius: 50%;
    transition: 1s ease;
    top: 25%;
    transition: all 1s ease;
  }
}
.dark-mode-slide-btn:hover {
  box-shadow: 1px 1px 8px white;
}
.btn-dark:hover {
  box-shadow: 1px 1px 8px rgb(111, 23, 227);
}
.dark {
  background-color: black !important;
  color: white !important;
}
img {
  width: 1.8rem;
}
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}

.light {
  background-color: white !important;
}
.lang button {
  width: 1.5rem;
  border: none;
  background-color: transparent;
  font-size: 1.7rem;
}
.lang-dark-mode {
  display: flex;
  align-items: center;
  gap: 0.6rem;
}
.meetease {
  width: 3.5rem;
}
.menu-list {
  display: flex;
  justify-content: space-between;
  padding: 0.5rem;
}
.move {
  transform: translateX(100%);
  display: block;
  position: absolute;
  width: 1.3rem;
  height: 1.3rem;
  background-image: url("./assets/moon.png");
  background-color: transparent;
  background-size: cover;
  border-radius: 50%;
  transition: 1s ease;
  top: 29%;
}
.ov-icon {
  color: $color-morado;
}

// My styles
// Bootstrap styles
.navbar-brand {
  color: $color-texto !important;
}
.nav-link {
  text-align: end;
}
.nav-link:hover {
  color: $color-amarillo !important;
  position: relative;
  img,
  .ov-icon {
    transform: scale(1.2, 1.2);
  }
}
.offcanvas-body {
  font-family: $font-family;
}
.navbar {
  align-items: baseline;
  animation: desplazar aparecer 1s ease;
}
.navbar-toggler {
  border: none;
}
.navbar-toggler:focus {
  box-shadow: none;
}
// Bootstrap styles

@media screen and (min-width: 768px) {
  .lang-dark-mode {
    gap: 1.5rem;
  }
  .navbar-brand {
    padding: 0 5rem;
  }
}
@media screen and (min-width: 900px) {
  .lang-dark-mode {
    gap: 2.5rem;
  }
}
</style>
