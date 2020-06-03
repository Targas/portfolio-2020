<template>
  <section>
    <div class="section-title">
      <p class="title">
        Cursos
      </p>
    </div>

    <div class="container">
      <p>
        Alguns cursos que fiz. Claro que inda tem um monte que quero fazer, e tem muita coisa que eu aprendi apenas quebrando a cabeça ou com simples tutoriais de youtube.
      </p>
    </div>

    <div class="container cursos">
      <div
        v-for="curso in cursos"
        :key="curso.id"
      >
        <div class="curso">
          <span>
            {{ curso.year }}
          </span>

          <p class="title">
            {{ curso.title }}
          </p>

          <p class="inst">
            {{ curso.institution }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'Cursos',

    data: function() {
      return {
        cursos: [
          {
            title: 'Curso de Svelte e Aplicações Web ciberneticamente melhoradas! ',
            institution: 'Fabio Vedovelli',
            year: '2020'
          },

          {
            title: 'Novidades do Vue.js 3 ',
            institution: 'Fabio Vedovelli',
            year: '2020'
          },

          {
            title: 'Laravel 5.2 PHP Build a Social Network - Wrap Up ',
            institution: 'Academind',
            year: '2020'
          },

          {
            title: 'Ionic 3 para iniciantes ',
            institution: 'Udemy',
            year: '2020'
          },

          {
            title: '#JavaScript30 30 Day Vanilla JS Coding Challenge ',
            institution: 'Wes Bos',
            year: '2020'
          },

          {
            title: 'Curso React.js Ninja: Módulo React + Webpack ',
            institution: 'Udemy',
            year: '2020'
          },

          {
            title: 'The Coding Interview Bootcamp: Algorithms + Data Structures ',
            institution: 'Udemy',
            year: '2019'
          },

          {
            title: 'Javascript: Understanding Weird Parts',
            institution: 'Udemy',
            year: '2019'
          },
        ],
      }
    }
  }
</script>

<style scoped lang="scss">
  .cursos {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 30px !important;

    .curso {
      position: relative;

      padding: 10px 15px;
      margin: 10px;
      background: #1b1c1b;

      @media (max-width: 425px) {
        width: 100%;
      }

      span {
        position: absolute;
        top: -10px;
        left: -10px;

        padding: 5px 10px;

        background: #b4d455;
        color: #000000;
        font-weight: 600;
      }

      p {
        margin-left: 0;
      }

      .title {
        margin-top: 20px;
        margin-bottom: -10px;
      }

      .inst {
        font-size: 12px;
        color: #ffae00;
        line-height: 10px;
      }
    }
  }
</style>