<template>
  <div
    id="app"
    :class="{ light: active }"
  >
    <!--
    Corretor faixa preta interna
    Palco Tenda

    testmonials
    -->

    <button
      id="day-night"
      @click="active = !active"
      :aria-pressed="active ? 'true' : 'false'"
      :class="{ light: active }"
    >

      <span class="ocean">
        <span class="ship">
          <span class="mast">
            <span class="sail-1"></span>
            <span class="sail-2"></span>
          </span>
        </span>
      </span>

      <span class="moon"></span>
      <span class="sun"></span>

    </button>

    <Sidebar
      profilePicture="./images/profile.jpg"
      firstName="Danilo"
      lastName="Targas"
      profession="Desenvolvedor Front-end"
    />

    <div class="content">
      <section id="sobre-mim">
        <div class="section-title">
          <p class="title">
            Sobre mim
          </p>
        </div>

        <div class="container">
          <p class="section-subtitle">
            Quem?
          </p>

          <p>
            Meu nome é <strong>Danilo</strong> e sou <strong>desenvolvedor Front-end</strong>. Tenho 33 anos e Sou de São Paulo. Durante muitos anos fui designer, trabalhei com offline, digital, 3D, ilustração, animação... Hoje meu foco é código.
          </p>

          <p class="section-subtitle mt">
            Ué... Então você trabalhava com design?
          </p>

          <p>
            Sim! Apesar da paixão e da bagagem que tenho com design, sempre gostei igualmente de código. Encontrei no <strong>Front-end</strong> tudo aquilo que eu mais gostava: transformar código em <strong>arte</strong>. Não que codar não seja uma <strong>arte</strong>... Acho que você entendeu.
          </p>

          <p>
            Costumo usar um pouco do meu tempo livre com projetos pessoais. De vez em quando me pego reescrevendo um site inteiro apenas pelo prazer de testar algo novo. Também gosto de me desafiar criando coisas que eu acreditava não serem possíveis. Talvez um hobby meu bastante estranho para muitos é desenhar usando <strong>HTML</strong> e <strong>CSS</strong>, eu me divirto com isso e sempre aprendo coisas novas, cresço como desenvolvedor e quem sabe um dia eu não seja referência para alguém que quer aprender.
          </p>

          <p>
            Eu não esqueci do design, quando eu tenho um prazo legal tento deixar os sites mais interessantes. Quer ver um exemplo? <strong class="show-desktop">Clica no navio no canto inferior esquerdo, ali em baixo.</strong> <strong class="show-mobile">Aperta o botão com um navio no canto superior direito, ali em cima.</strong> Espero que goste!
          </p>

          <p class="section-subtitle mt">
            Conte-me mais...
          </p>

          <p>
            Sou metódico, especialmente com organização, tento sempre fazer um código onde qualquer desenvolvedor consiga entender. Sempre tiro um tempo para experimentar alguma coisa nova, as tecnologias não param de surgir. Fiz este portfólio foi feito com Vue, eu pretendia fazer em Angular ou React, mas eu queria terminar rápido, então usei o framework que estou mais habituado. Eu poderia ter feito sem framework algum, mas qual seria a graça?
          </p>

          <p class="section-subtitle mt">
            Quais projetos você trabalhou?
          </p>

          <p>
            Nas empresas que trabalhei participei de grandes projetos para clientes como <strong>Porto Seguro</strong>, <strong>American Express</strong>, <strong>Tenda</strong>, <strong>Plano & Plano</strong>, <strong>Unicef</strong>, <strong>Bayard</strong> e <strong>Editora FTD</strong>. Foram projetos diversos, desde o mais simples E-Mail Marketing até portais complexos. 
          </p>

          <p>
            Tiveram alguns projetos específicos que eu me diverti bastante fazendo. Dentre eles, se destaca um projeto onde o usuário subia fotos e ele gerava um mosaico. Lembro de outro, onde o usuário tirava uma foto e aplicava uns filtros. Foram diversos projetos divertidos. Tenho umas animações e desenhos que deixo no CodePen também, mas isto é papo para outra hora.
          </p>

        </div>
      </section>


      <conhecimentos id="conhecimentos"></conhecimentos>


      <cursos id="cursos"></cursos>

      
      <portfolio id="portfolio"></portfolio>
    </div>

  </div>
</template>

<script>
import Sidebar from './components/Sidebar.vue'
import Portfolio from './components/Portfolio.vue'
import Conhecimentos from './components/Conhecimentos.vue'
import Cursos from './components/Cursos.vue'

export default {
  name: 'App',

  components: {
    Sidebar,
    Portfolio,
    Conhecimentos,
    Cursos,
  },

  data() {
    return {
      active: false,
    }
  },
}
</script>

<style lang="scss">
  #app {
    position: relative;

    background: #000000;
    color: #1b1c1b;

    transition: background .3s ease;

    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 425px) {
      flex-wrap: wrap;
      align-items: flex-start;
    }

    &.light {
      background: #FFFFFF;

      &:before {
        filter: invert(100%);
      }

      .container {
        p {
          strong {
            background: rgba(0,0,0,.2);
            color: #000000;
          }
        }
      }

      .sidebar {
        background: #c6c6c6;

        .first-name {
          color: #1b1c1b;
        }

        address, nav {
          i, svg, span {
            color: #000000;
          }
        }
      }

      .content {
        color: #000000;

        .section-title {
          color: #000000;
        }

        section {
          .section-subtitle {
            color: #000000;
          }
        }
      }

      .filters {
        background: #c6c6c6;

        .filter {
          color: #000000;
        }
      }

      .projects {
        p {
          color: #FFFFFF;
        }
      }

      .conhecimento {
        background: #c6c6c6;
      }

      .curso {
        background: #c6c6c6;

        .title {
          color: #000000;
        }

        .inst {
          color: #1b1c1b;
        }
      }
    }

    #day-night {
      cursor: pointer;

      position: fixed;
      z-index: 9000;

      bottom: 20px;
      left: 20px;
      width: 90px;
      height: 50px;

      background: #00001a;

      padding: 0;
      margin: 0;
      border: 0;

      border-radius: 50px;

      overflow: hidden;

      display: flex;
      justify-content: flex-end;
      flex-direction: column;

      transition: all .5s ease;

      @media (max-width: 425px) {
        bottom: unset;
        left: unset;
        top: 10px;
        right: 10px;
      }

      .ocean {
        width: 100%;
        height: 15px;
        background: #000033;

        position: relative;
        z-index: 10;

        transition: all .5s ease;

        .ship {
          position: absolute;
          top: -4px;
          left: 30%;

          background: #4d0000;
          width: 40px;
          height: 8px;

          &:before {
            content: '';

            position: absolute;
            right: -11px;

            width: 0;
            height: 0;
            border-style: solid;
            border-width: 8px 11px 0 0;
            border-color: #4d0000 transparent transparent transparent;

            transition: all .5s ease;
          }

          &:after {
            content: '';

            position: absolute;
            left: -3px;
            bottom: 0;

            width: 0;
            height: 0;
            border-style: solid;
            border-width: 0 0 3px 3px;
            border-color: transparent transparent #330000 transparent;

            transition: all .5s ease;
          }

          .mast {
            position: absolute;
            display: block;

            top: -20px;
            left: 17px;

            background: #330000;
            width: 2px;
            height: 20px;

            transition: all .5s ease;

            &:before {
              content: '';

              position: absolute;
              display: block;

              top: -8px;
              left: .8px;
              width: .5px;
              height: 8px;

              background: #330000;

              transition: all .5s ease;
            }

            &:after {
              content: '\2620';

              position: absolute;
              display: block;

              top: -7px;
              left: 1px;
              width: 10px;
              height: 6px;

              background: #000000;

              color: #FFFFFF;
              font-size: 5px;

              transition: all .5s ease;
            }

            .sail-1 {
              position: absolute;
              left: 3px;
              top: 0;
              width: 0;
              height: 0;
              border-style: solid;
              border-width: 17px 0 0 35px;
              border-color: transparent transparent transparent #000000;

              transition: all .5s ease;
            }

            .sail-2 {
              position: absolute;
              left: -15px;
              top: 0;
              width: 0;
              height: 0;
              border-style: solid;
              border-width: 0 0 18px 14px;
              border-color: transparent transparent #000000 transparent;

              transition: all .5s ease;
            }
          }
        }
      }

      .moon { 
        position: absolute;
        z-index: 5;
        top: 50%;
        left: 47%;

        transform: translate(-50%, -50%);

        width: 45px;
        height: 45px;

        border-radius: 50%;
        background: #FFFFFF;

        display: block;
        opacity: 1;

        transition: all .5s ease;
      }

      .sun {
        position: absolute;
        z-index: 0;
        top: -100px;
        left: 70%;

        transform: translate(-50%, -50%);

        width: 60px;
        height: 60px;

        border-radius: 50%;
        background: #FFFF00;

        display: block;
        opacity: 0;

        transition: all .5s ease;
      }

      &.light {
        background: #b3d9ff;

        .ocean {
          background: #1a8cff;
        }

        .moon { 
          top: 100px;
          left: 60%;

          width: 90px;
          height: 90px;

          opacity: 0;
        }

        .sun {
          position: absolute;
          z-index: 0;
          top: 8px;
          left: 55%;

          width: 20px;
          height: 20px;
          opacity: 1;
        }
      }
    }
  }

  .content {
    width: calc(100vw - 320px);
    height: 100vh;
    overflow-y: scroll;

    @media (max-width: 425px) {
      width: 100%;
      height: auto;
      flex-wrap: wrap;
      align-items: flex-start;
      overflow-y: unset;
    }
  }
</style>