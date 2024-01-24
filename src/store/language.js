import { defineStore } from "pinia";

export const useLanguageStore = defineStore("lang", {
  state: () => ({
    currentLanguage: "🇬🇧",
    languages: {
      "🇬🇧": {
        about:
          "Soy autodidacta en el desarrollo web frontend y una persona curiosa. Me gusta buscar nuevos retos para expandir conocimientos y mejorar mis capacidades tanto en el ámbito personal como en el profesional. En mi tiempo libre me gusta salir a caminar, me gusta la naturaleza, la literatura, tejer, programar, y ejercitarme. <br>Bienvenido a mi espacio personal, aquí encontrarás los proyectos que he realizado a lo largo de mi formación como autodidacta y algunos proyectos para clientes.",
        about_briefcase: "Portafolio",
        contact:
          "¿Tienes algún comentario, crítica o sugerencia? Puedes hacérmelo saber enviándome un correo o poniéndote en contacto conmigo a través de mis redes sociales",
        contact_title: "Contáctame",
        contact_btn: "Enviar mensaje",
        contact_meet: "Encuéntrame a través de las redes sociales",
        barraza_description:
          "<dd>Barraza Investors fue creado para un pequeño fondo de inversion que deseaba tener en una sola pagina todo el control de su portafolio, desde los montos aportados por cada uno de los integrantes del fondo, hasta los porcentajes de ganancia o pérdida que generan y han generado históricamente. <br><dd>La página le permite a los miembros ver en tiempo real el movimiento de las acciones que posee el fondo así como su cambio de dólares a la moneda local. <br><dd>Para cumplir con los requerimientos del proyecto creé, en principio, una página web utilizando JavaScript vanilla con un dashboard para que el administrador agregara acciones a una Api alojada en Getpantry. <br><dd>Tiempo después hice una refactorización del sitio para que fuera reactivo, usando Vue.js y service worker para poder ver el cambio del valor de las acciones en tiempo real. En este proyecto utilicé además <b>Css</b>, <b>Bootstrap</b>, <b>Vue.js</b> y <b>Chart.js</b> (una librería para gráficos). <br><dd>Este fue un gran proyecto y un reto con el que aprendí mucho.",
        meetease_description:
          "MeetEase es una plataforma para agendar reuniones o eventos grupales de manera fácil, crear un eventos y agregar colaboradores. <br><dd>Este es el primer proyecto en el que tuve la oportunidad de trabajar colaborativamente con excelentes compañeros y poner en práctica el manejo de control de versiones con un equipo. También es el primer proyecto en el que usé React.js. Me encargué del front-end siguiendo los parámetros establecidos por el diseño y usando <b>React.js</b>, <b>Firebase</b> (para las autenticaciones), <b>Css</b>, <b>Git</b> y <b>Github</b>.",
        cronos_description:
          "Cronos es una plataforma para gestionar el tiempo de forma sencilla y práctica, en ella el usuario puede agregar recordatorios que se irán ordenando según la hora, también puede agregar notas, usar cronómetro y chatear con un chatbot. <br><dd>Este proyecto ha sido el primero en el que pongo en práctica lo que he aprendido de <b>Node.js</b> y <b>MongoDB</b>. Para el front-end utilicé <b>React.js</b>, <b>Css</b> y para el bot utilicé Botpress. <br><dd>Manejé los estados e hice llamadas ¡a mi propio servidor! Sin duda es un proyecto que me ha gustado mucho y el cual pienso mejorar para que el chatbot sea capaz de conversar en español y para que el usuario pueda guardar recordatoirios de audio",
        cronos_title: "Cronos<br>(Gestión del tiempo)",
        idtly_description:
          "IDtly es un proyecto que hice para practicar mi habilidad con <b>Css</b> con un preprocesador como <b>Sass</b> y para mejorar mi manejo de las media queries.",
        idtly_title: "IDtly<br>(Tienda de modas)",
        balto_description:
          "Balto es una pagina que creé siguiendo el diseño del sitio web y app de tienda para mascotas 'Laika' usando tecnologías como <b>Html</b>, <b>Css</b> y <b>Bootstrap</b>. <br><dd>Modifiqué un poco el diseño agregando una sección nueva para aves y colocando íconos en la parte superior para un acceso a rápido a cada sección.",
        balto_title: "Balto<br>(Copia de Laika)",
        pokememory_description:
          "Este pequeño proyecto es el inicio de mi trayecto en el front-end, lo programé después de aprender a hacer peticiones a una Api. Quise crear interacción con el usuario así que creé un juego de memoria con tiempo límite.",
        pokememory_title: "Balto<br>(Copia de Laika)",
        cv_description:
          "¿Te interesa saber un poco sobre mi formación y experiencia? <br>Echa un vistazo 😉 📖 💻",
        footer_description:
          "Este espacio fue creado con Vue, Sass y Boostrap por Mariana Ramírez. <br>❤️ Gracias por visitarme ❤️",
      },
      "🇪🇸": {
        about:
          "I am self-taught in frontend web development and a curious person. I like to seek new challenges to expand knowledge and improve my abilities both personally and professionally. In my free time I like to go for a walk, I like nature, literature, knitting, programming, and exercising. <br>Welcome to my personal space, here you will find the projects that I have carried out throughout my training as a self-taught person and some projects for clients.",
        about_briefcase: "Briefcase",
        contact:
          "Do you have any comments, criticisms or suggestions? You can let me know by sending me an email or contacting me through my social networks",
        contact_title: "Contact me",
        contact_btn: "Send message",
        contact_meet: "Find me through social networks",
        barraza_description:
          "Barraza Investors was created for a small investment fund that wanted to have on a single page all the control of its portfolio, from the amounts contributed by each of the members of the fund, to the percentages of profit or loss that they generate and have generated historically. <br><dd>The page allows members to see in real time the movement of the shares held by the fund as well as their exchange from dollars to the local currency. <br><dd>To meet the requirements of the project I created, in principle, a web page using vanilla JavaScript with a dashboard for the administrator to add actions to an Api hosted on Getpantry. <br><dd>Some time later I refactored the site to make it reactive, using <b>Vue.js</b> and service worker to be able to see the change in the value of the actions in real time. In this project I also used <b>Css</b>, <b>Bootstrap</b>, <b>Vue.js</b> and <b>Chart.js</b> (a graphics library). <br><dd>This was a great project and a challenge with which I learned a lot.",
        meetease_description:
          "MeetEase is a platform to easily schedule meetings or group events, create events and add collaborators. <br><dd>This is the first project in which I had the opportunity to work collaboratively with excellent colleagues and put into practice the version control management with a team. It is also the first project in which I used React.js. I was in charge of the front-end following the parameters established by the design and using <b>React.js</b>, <b>Firebase </b> (for authentications), <b>Css</b>, <b>Git</b> and <b>Github</b>.",
        cronos_description:
          "Cronos is a platform to manage time in a simple and practical way, in it the user can add reminders that will be ordered according to the time, they can also add notes, use a stopwatch and chat with a chatbot. <br><dd>This project has been the first in which I put into practice what I have learned from <b>Node.js</b> and <b>MongoDB</b>. For the front-end I used <b>React.js</b>, <b>Css</b> and for the bot I used Botpress. <br><dd>I managed the states and made calls to my own server! Without a doubt, it is a project that I really liked and which I plan to improve so that the chatbot is able to conversing in Spanish and so that the user can save audio reminders",
        cronos_title: "Cronos<br>(Time management)",
        idtly_description:
          "IDtly is a project I did to practice my<b>Css</b> skills with a preprocessor like<b>Sass</b> and to improve my handling of media queries.",
        idtly_title: "IDtly<br>(Fashion store)",
        balto_description:
          "Balto is a page I created following the design of the pet store website and app 'Laika' using technologies such as <b>Html</b>, <b>Css</b> and <b>Bootstrap</b>. <br><dd>I modified the design a bit by adding a new section for birds and placing icons at the top for quick access to each section.",
        balto_title: "Balto<br>(Copy of Laika)",
        pokememory_description:
          "This small project is the beginning of my journey in the front-end, I programmed it after learning how to make requests to an API. I wanted to create interaction with the user so I created a memory game with a time limit.",
        pokememory_title: "Pokememory",
        cv_description:
          "Are you interested in knowing a little about my training and experience? <br>Take a look 😉 📖 💻",
        footer_description:
          "This space was created with Vue, Sass and Boostrap by Mariana Ramírez. <br> ❤️ Thank you for visiting me ❤️",
      },
    },
  }),
  actions: {
    changeLanguage(lang) {
      this.currentLanguage = lang;
    },
  },
});
