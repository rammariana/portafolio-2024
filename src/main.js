import { createApp } from "vue";
import App from "./App.vue";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import { OhVueIcon, addIcons } from "oh-vue-icons";
import router from "./router";
import { createPinia } from "pinia";
import {
  GiBookmarklet,
  RiHome2Fill,
  BiFacebook,
  BiWhatsapp,
  BiGithub,
  LaHtml5,
  LaCss3Alt,
  IoLogoJavascript,
  RiVuejsLine,
  FaSass,
  SiBootstrap,
  FaMapMarkerAlt,
  FaHammer,
  GiSmartphone,
  FaUserAlt,
  GiSkills,
  BiGit,
  GiBullseye,
  CoGmail,
  GiCheckMark,
  FaUserAstronaut,
  BiCodeSlash,
  FaRegularEye,
  MdAddRound,
  IoLogoReact,
  LaNode,
  SiMongodb,
  SiFirebase,
  CoGithub,
  RiLinkedinFill,
  BiMortarboardFill, // birrete
  GiBriefcase,
  SiVite,
} from "oh-vue-icons/icons";

addIcons(
  FaUserAstronaut,
  GiCheckMark,
  GiBullseye,
  CoGmail,
  BiGit,
  GiBookmarklet,
  FaMapMarkerAlt,
  RiHome2Fill,
  BiFacebook,
  BiWhatsapp,
  BiGithub,
  LaHtml5,
  LaCss3Alt,
  IoLogoJavascript,
  RiVuejsLine,
  FaSass,
  SiBootstrap,
  FaHammer,
  GiSmartphone,
  FaUserAlt,
  GiSkills,
  BiCodeSlash,
  FaRegularEye,
  MdAddRound,
  IoLogoReact,
  LaNode,
  SiMongodb,
  SiFirebase,
  CoGithub,
  RiLinkedinFill,
  BiMortarboardFill,
  GiBriefcase,
  SiVite
);
const pinia = createPinia();
const app = createApp(App);
app.component("v-icon", OhVueIcon);
app.use(router).use(pinia).mount("#app");
