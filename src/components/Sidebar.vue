<template>
  <aside class="sidebar">

    <section class="profile">
      <img
        :src="profilePicture"
        class="profile-picture"
      >

      <div class="about">
        <p class="first-name">
          {{ firstName }}
        </p>

        <p class="last-name">
          {{ lastName }}
        </p>

        <h1 class="profession">
          {{ profession }}
        </h1>
      </div>
    </section>

    <div class="sep"></div>

    <address>
      <a
        v-for="item in contact"
        :key="item.id"
        :href="item.url" 
        :target="item.target"
        :class="item.class"
      >
        <i :class="item.icon"></i>

        <span>
          {{ item.text }}
        </span>
      </a>
    </address>

    <nav>
      <a
        v-for="item in menu"
        :key="item.id"
        :href="item.url"
      >
        <i :class="item.icon"></i>

        <span>
          {{ item.text }}
        </span>
      </a>
    </nav>

  </aside>
</template>

<script>
  export default {
    name: 'Sidebar',

    props: {
      profilePicture: String,
      firstName: String,
      lastName: String,

      profession: String,
    },

    data: function() {
      return {
        contact: [
          { 
            id: '',
            url: 'https://www.linkedin.com/in/danilo-targas-b749bb13b/',
            target: '_blank',
            class: 'linkedin',
            icon: 'fab fa-linkedin-in',
            text: 'LinkedIn', 
          },

          { 
            id: '',
            url: 'mailto: targas.pr8.com.br',
            icon: 'far fa-envelope',
            text: 'E-Mail', 
          },

          { 
            id: '',
            url: 'tel: +5511987916822',
            icon: 'fab fa-whatsapp',
            text: 'WhatsApp', 
          },
        ],

        menu: [
          { 
            id: '',
            url: '#sobre-mim',
            icon: 'fas fa-skull-crossbones',
            text: 'Sobre mim', 
          },

          { 
            id: '',
            url: '#conhecimentos',
            icon: 'fas fa-code',
            text: 'Conhecimentos', 
          },

          { 
            id: '',
            url: '#cursos',
            icon: 'fas fa-user-graduate',
            text: 'Cursos', 
          },

          { 
            id: '',
            url: '#portfolio',
            icon: 'fas fa-photo-video',
            text: 'Portfólio', 
          },
        ],
      }
    }
  }
</script>

<style scoped lang="scss">
  .sidebar {
    width: 320px;
    height: 100vh;
    padding: 15px;

    background: #1b1c1b;

    .profile {
      display: flex;
      align-items: center;
      justify-content: center;

      margin-top: 50px;

      .profile-picture {
        border-radius: 50%;
      }

      .about {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        padding: 0 10px;

        .first-name, .last-name, .profession {
          display: table;
          padding: 5px;
          margin: 5px;
          font-size: 18px;
          text-align: center;
          font-weight: 600;
        }

        .first-name {
          color: #FFFFFF;
        }
        .last-name {
          background: #b4d455;
        }
        .profession {
          background: #ffae00;
          text-transform: uppercase;
          padding: 10px;
        }
      }
    }

    address {
      display: flex;
      justify-content: center;
      align-items: center;

      a {
        margin: 0 10px;
        color: #FFF;
        font-size: 20px;
        position: relative;

        transition: all .3s ease;

        &:before {
          content: '';

          position: absolute;
          z-index: 0;

          top: 50%;
          left: 50%;

          border-radius: 50%;

          transform: translate(-50%, -50%);
          transition: all .3s ease;

          background: #FFAE00;

          opacity: 0;
          width: 0px;
          height: 0px;
        }

        &:hover {
          color: #1b1c1b;

          &:before {
            width: 45px;
            height: 45px;

            opacity: 1;
          }
        }

        i, svg {
          font-size: 30px;
          position: relative;
          z-index: 10;
        }

        span {
          width: 0;
          height: 0;
          overflow: hidden;
          display: block;
        }
      }
    }

    nav {
      margin-top: 50px;

      display: flex;
      flex-direction: column;

      a {
        display: flex;
        padding: 15px 0;

        font-size: 18px;
        text-align: center;
        font-weight: 600;
        color: #FFFFFF;

        transition: all .3s ease;

        i, svg {
          min-width: 30px;
          display: flex;
          justify-content: center;
          align-items: center;
          margin-right: 5px;

          transition: all .3s ease;
        }
        
        span {
          position: relative;

          &:before {
            content: '';

            position: absolute;
            bottom: -5px;
            left: 0;

            width: 0;
            height: 3px;

            background: #b4d455;

            transition: all .3s ease;
          }
        }

        &:hover {
          background: rgba(0,0,0,.2);

          i, svg {
            color: #b4d455;
          }
          span {
            &:before {
              width: calc(100% - 20px);
            }
          }
        }
      }
    }
  }
</style>