<template>
  <section class="conhecimentos">
    <div class="section-title">
      <p class="title">
        Conhecimentos
      </p>
    </div>

    <div class="container">
      <p>
        Citei abaixo algumas tecnologias que tenho experiência. Algumas eu uso diariamente, outras eu usei pouco mas ainda lembro o suficiente. Quem sabe um dia eu não encho todas as barrinhas, não custa sonhar.
      </p>
    </div>

    <div class="container">
      <div class="col">
        <p class="section-subtitle">
            Front-end
        </p>
        
        <div
          class="conhecimento"
          v-for="conhecimento in conhecimentosFrontEnd"
          :key="conhecimento.id"
        >
          <p class="conhecimento-text">
            {{ conhecimento.text }}
          </p>

          <span
            class="conhecimento-pct"
            :style="conhecimento.pct"
          ></span>
        </div>
      </div>

      <div class="col">
        <p class="section-subtitle">
            Dev Tools
        </p>
        
        <div
          class="conhecimento"
          v-for="conhecimento in conhecimentosDevTools"
          :key="conhecimento.id"
        >
          <p class="conhecimento-text">
            {{ conhecimento.text }}
          </p>

          <span
            class="conhecimento-pct"
            :style="conhecimento.pct"
          ></span>
            
        </div>
      </div>

      <div class="col">
        <p class="section-subtitle">
            Design
        </p>
        
        <div
          class="conhecimento"
          v-for="conhecimento in conhecimentosDesign"
          :key="conhecimento.id"
        >
          <p class="conhecimento-text">
            {{ conhecimento.text }}
          </p>

          <span
            class="conhecimento-pct"
            :style="conhecimento.pct"
          ></span>
        </div>
      </div>

      <div class="col">
        <p class="section-subtitle">
            Back-end
        </p>
        
        <div
          class="conhecimento"
          v-for="conhecimento in conhecimentosBackEnd"
          :key="conhecimento.id"
        >
          <p class="conhecimento-text">
            {{ conhecimento.text }}
          </p>

          <span
            class="conhecimento-pct"
            :style="conhecimento.pct"
          ></span>
            
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'Conhecimentos',

    data: function() {
      return {
        conhecimentosFrontEnd: [
          { text: 'HTML', pct: 'width: 90%', },

          { text: 'CSS', pct: 'width: 85%', },
          { text: 'SASS/SCSS', pct: 'width: 80%', },
          { text: 'LESS', pct: 'width: 30%', },

          { text: 'Bootstrap', pct: 'width: 70%', },
          { text: 'Materialize', pct: 'width: 65%', },
          { text: 'Vuetify', pct: 'width: 60%', },
          { text: 'Bulma', pct: 'width: 40%', },
          { text: 'Tailwind', pct: 'width: 30%', },

          { text: 'Javascript', pct: 'width: 70%', },
          { text: 'JQuery', pct: 'width: 65%', },
          { text: 'Vue', pct: 'width: 65%', },
          { text: 'React', pct: 'width: 40%', },
          { text: 'Angular', pct: 'width: 40%', },
          { text: 'Backbone', pct: 'width: 30%', },

          { text: 'SEO', pct: 'width: 70%', },
        ],

        conhecimentosDevTools: [
          { text: 'Terminal', pct: 'width: 90%', },
          { text: 'NPM', pct: 'width: 85%', },
          { text: 'Yarn', pct: 'width: 70%', },
          { text: 'Webpack', pct: 'width: 50%', },

          { text: 'Bitbucket', pct: 'width: 80%', },
          { text: 'Github', pct: 'width: 70%', },
          { text: 'Gitlab', pct: 'width: 60%', },
        ],

        conhecimentosDesign: [
          { text: 'Photoshop', pct: 'width: 90%', },
          { text: 'Animate (flash)', pct: 'width: 85%', },
          { text: 'Illustrator', pct: 'width: 70%', },
          { text: 'Indesign', pct: 'width: 60%', },
          { text: 'XD', pct: 'width: 60%', },
          { text: 'Premiere', pct: 'width: 60%', },
          { text: 'After Effects', pct: 'width: 50%', },

          { text: 'Zeplin', pct: 'width: 70%', },
          { text: 'Figma', pct: 'width: 60%', },
          { text: 'Invision', pct: 'width: 60%', },

          { text: '3Ds Max', pct: 'width: 60%', },
          { text: 'Maya', pct: 'width: 40%', },
          { text: 'Z-Brush', pct: 'width: 20%', },
        ],

        conhecimentosBackEnd: [
          { text: 'PHP', pct: 'width: 30%', },
          { text: 'Laravel', pct: 'width: 25%', },

          { text: 'NODE', pct: 'width: 25%', },
          { text: 'DENO', pct: 'width: 15%', },

          { text: 'Python', pct: 'width: 20%', },
        ],
      }
    }
  }
</script>

<style scoped lang="scss">
  .container {
    display: flex;
    justify-content: space-between;

    @media (max-width: 768px) {
      flex-wrap: wrap;
    }

    .col {
      width: calc(100% / 4);
      padding: 15px;

      @media (max-width: 768px) {
        width: 50%;
      }
    }
  }
  
  .conhecimento {
    width: 100%;
    height: 20px;

    display: block;

    position: relative;
    overflow: hidden;
    margin: 15px 0;

    background: #c6c6c6;

    .conhecimento-text {
      color: #FFFFFF;
      font-weight: 600;
      font-size: 14px;

      position: absolute;
      z-index: 5;
      left: 5px;
      top: 50%;
      transform: translateY(-50%);

      margin: 0;
    }

    .conhecimento-pct {
      position: absolute;
      z-index: 0;
      top: 0;
      left: 0;
      margin: 0;
      height: 100%;
      background: #1b1c1b;
    }
  }
</style>