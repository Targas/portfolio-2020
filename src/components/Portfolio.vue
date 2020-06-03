<template>
  <!-- eslint-disable vue/no-use-v-if-with-v-for,vue/no-confusing-v-for-v-if -->

  <section class="portfolio">

    <vue-easy-lightbox
      :visible="visible"
      :imgs="imgs"
      :index="index"
      @hide="handleHide"
    ></vue-easy-lightbox>

    <p class="section-title">
      Portfólio
    </p>

    <div class="filters">
			<span
        class="filter"
        :class="{ active: currentFilter === 'tudo' }"
        @click="setFilter('tudo')
      ">
        Tudo
      </span>

			<span
        class="filter"
        :class="{ active: currentFilter === 'web' }"
        @click="setFilter('web')
      ">
        Web
      </span>

      <span
        class="filter"
        :class="{ active: currentFilter === 'design' }"
        @click="setFilter('design')
      ">
        Design
      </span>

      <span
        class="filter"
        :class="{ active: currentFilter === 'videos' }"
        @click="setFilter('videos')
      ">
        Videos
      </span>
		</div>

    <transition-group
      class="projects"
      name="projects"
    >
      <div
        class="project"
        :key="project.image"
        v-for="project in projects"
        v-if="currentFilter === project.category || currentFilter === 'tudo'"
      >
        <div class="about">
          <p class="title">
            {{ project.title }}
          </p>
          <p class="text">
            {{ project.text }}
          </p>
          <p class="tecnology">
            {{ project.tecnology }}
          </p>

          <div class="sep"></div>

          <div class="links">
            <a
              href="#"
              v-if="project.images"
              @click="showMultiple(project.images)"
            >
              Ver mais
            </a>

            <a
              v-if="project.link"
              :href="project.link"
              target="_blank"
            >
              Acessar
            </a>
          </div>
        </div>

        <p class="name">
          {{ project.title }}
        </p>

        <img :src="project.image">
      </div>
    </transition-group>
    
  </section>
</template>

<script>
  // Lightbox
  import VueEasyLightbox from 'vue-easy-lightbox'

  export default {
    name: 'portfolio',

    components: {
      VueEasyLightbox
    },

    data: function () {
      return {
        currentFilter: 'tudo',

        projects: [
          // Web
          {
            category: 'web',
            
            title: 'Site | Tenda Mobile',
            text: 'Portal Tenda versão mobile, baseado no APP',
            tecnology: 'HTML | CSS | Javascript',

            link: 'http://www.tenda.com.br',

            image: require('@/assets/portfolio/tenda/novo-site-mobile/screen.jpg'),
            images: [
              require('@/assets/portfolio/tenda/novo-site-mobile/screen.jpg'),
              require('@/assets/portfolio/tenda/novo-site-mobile/1.jpg'),
              require('@/assets/portfolio/tenda/novo-site-mobile/2.jpg'),
              require('@/assets/portfolio/tenda/novo-site-mobile/3.jpg'),
              require('@/assets/portfolio/tenda/novo-site-mobile/4.jpg'),
              require('@/assets/portfolio/tenda/novo-site-mobile/5.jpg'),
              require('@/assets/portfolio/tenda/novo-site-mobile/6.jpg'),
              require('@/assets/portfolio/tenda/novo-site-mobile/7.jpg'),
              require('@/assets/portfolio/tenda/novo-site-mobile/8.jpg'),
              require('@/assets/portfolio/tenda/novo-site-mobile/9.jpg'),
              require('@/assets/portfolio/tenda/novo-site-mobile/10.jpg'),
              require('@/assets/portfolio/tenda/novo-site-mobile/11.jpg'),
              require('@/assets/portfolio/tenda/novo-site-mobile/12.jpg'),
              require('@/assets/portfolio/tenda/novo-site-mobile/13.jpg'),
              require('@/assets/portfolio/tenda/novo-site-mobile/14.jpg'),
              require('@/assets/portfolio/tenda/novo-site-mobile/15.jpg'),
              require('@/assets/portfolio/tenda/novo-site-mobile/16.jpg'),
              require('@/assets/portfolio/tenda/novo-site-mobile/17.jpg'),
              require('@/assets/portfolio/tenda/novo-site-mobile/18.jpg'),
              require('@/assets/portfolio/tenda/novo-site-mobile/19.jpg'),
              require('@/assets/portfolio/tenda/novo-site-mobile/20.jpg'),
              require('@/assets/portfolio/tenda/novo-site-mobile/21.jpg'),
            ]
          },

          {
            category: 'web',
            
            title: 'Site | Pequenos Decoradores',
            text: 'Site do concurso Pequenos Decoradores da Tenda',
            tecnology: 'HTML | CSS | Javascript',

            link: '',

            image: require('@/assets/portfolio/tenda/pequenos-decoradores/screen.jpg'),
            images: [
              require('@/assets/portfolio/tenda/pequenos-decoradores/screen.jpg'),
              require('@/assets/portfolio/tenda/pequenos-decoradores/1.jpg'),
            ]
          },

          {
            category: 'web',
            
            title: 'Site | Plano Faixa Preta',
            text: 'SIte feito para a Plano & Plano',
            tecnology: 'HTML | CSS | Javascript',

            link: '',

            image: require('@/assets/portfolio/plano/faixa-preta/screen.jpg'),
            images: [
              require('@/assets/portfolio/plano/faixa-preta/screen.jpg'),
              require('@/assets/portfolio/plano/faixa-preta/1.jpg'),
            ]
          },

          {
            category: 'web',
            
            title: 'Site | Tenda',
            text: 'Site feito para a Tenda. O usuário fazia upload da sua foto que agregava no mosaico até que a nova marca aparecesse por completo.',
            tecnology: 'HTML | CSS | Javascript',

            link: '',

            image: require('@/assets/portfolio/tenda/mosaico/screen.jpg'),
            images: [
              require('@/assets/portfolio/tenda/mosaico/screen.jpg'),
              require('@/assets/portfolio/tenda/mosaico/1.jpg'),
              require('@/assets/portfolio/tenda/mosaico/2.jpg'),
            ]
          },
          
          {
            category: 'web',
            
            title: 'Site | Pirate Day',
            text: 'Landing Page para o evento do grupo Aliança Pirata',
            tecnology: 'HTML | SASS | VUE',

            link: 'http://www.pirateday.com.br',

            image: require('@/assets/portfolio/alianca-pirata/pirate-day/2019/screen.jpg'),
            images: [
              require('@/assets/portfolio/alianca-pirata/pirate-day/2019/screen.jpg'),
              require('@/assets/portfolio/alianca-pirata/pirate-day/2019/1.jpg'),
            ]
          },

          {
            category: 'web',
            
            title: 'Site | Unicef',
            text: 'Site Busca Ativa Escolar desenvolvido para a Unicef',
            tecnology: 'HTML | SASS | Javascript',

            link: 'https://buscaativaescolar.org.br/',

            image: require('@/assets/portfolio/busca-ativa/lp/screen.jpg'),
            images: [
              require('@/assets/portfolio/busca-ativa/lp/screen.jpg'),
              require('@/assets/portfolio/busca-ativa/lp/1.jpg'),
            ]
          },

          {
            category: 'web',
            
            title: 'Site | Share',
            text: 'Site desenvolvido para a Share',
            tecnology: 'HTML | SASS | JQuery',

            link: 'https://sharesl.com.br/',

            image: require('@/assets/portfolio/share/site/screen.jpg'),
            images: [
              require('@/assets/portfolio/share/site/screen.jpg'),
              require('@/assets/portfolio/share/site/1.jpg'),
              require('@/assets/portfolio/share/site/2.jpg'),
              require('@/assets/portfolio/share/site/3.jpg'),
              require('@/assets/portfolio/share/site/4.jpg'),
              require('@/assets/portfolio/share/site/5.jpg'),
              require('@/assets/portfolio/share/site/6.jpg'),
              require('@/assets/portfolio/share/site/7.jpg'),
              require('@/assets/portfolio/share/site/8.jpg'),
              require('@/assets/portfolio/share/site/9.jpg'),
              require('@/assets/portfolio/share/site/10.jpg'),
              require('@/assets/portfolio/share/site/11.jpg'),
              require('@/assets/portfolio/share/site/12.jpg'),
              require('@/assets/portfolio/share/site/13.jpg'),
              require('@/assets/portfolio/share/site/14.jpg'),
              require('@/assets/portfolio/share/site/15.jpg'),
            ]
          },

          {
            category: 'web',
            
            title: 'Site | Porto Seguro',
            text: 'Site Porto Seguro Aluguel desenvolvida para a Porto Seguro',
            tecnology: 'HTML | SASS | JQuery',

            link: '',

            image: require('@/assets/portfolio/pseg/site/aluguel/screen.jpg'),
            images: [
              require('@/assets/portfolio/pseg/site/aluguel/screen.jpg'),
              require('@/assets/portfolio/pseg/site/aluguel/1.jpg'),
              require('@/assets/portfolio/pseg/site/aluguel/2.jpg'),
              require('@/assets/portfolio/pseg/site/aluguel/3.jpg'),
              require('@/assets/portfolio/pseg/site/aluguel/4.jpg'),
              require('@/assets/portfolio/pseg/site/aluguel/5.jpg'),
              require('@/assets/portfolio/pseg/site/aluguel/6.jpg'),
              require('@/assets/portfolio/pseg/site/aluguel/7.jpg'),
              require('@/assets/portfolio/pseg/site/aluguel/8.jpg'),
            ]
          },

          {
            category: 'web',
            
            title: 'Landing Page | Porto Seguro',
            text: 'Landing Page Instituto Porto desenvolvida para a Porto Seguro',
            tecnology: 'HTML | SASS | JQuery',

            link: '',

            image: require('@/assets/portfolio/pseg/lp/instituto/screen.jpg'),
            images: [
              require('@/assets/portfolio/pseg/lp/instituto/screen.jpg'),
              require('@/assets/portfolio/pseg/lp/instituto/1.jpg'),
              require('@/assets/portfolio/pseg/lp/instituto/2.jpg'),
            ]
          },

          {
            category: 'web',
            
            title: 'Landing Page | Porto Seguro',
            text: 'Landing Page Investimentos desenvolvida para a Porto Seguro',
            tecnology: 'HTML | SASS | JQuery',

            link: '',

            image: require('@/assets/portfolio/pseg/lp/investimentos/screen.jpg'),
            images: [
              require('@/assets/portfolio/pseg/lp/investimentos/screen.jpg'),
              require('@/assets/portfolio/pseg/lp/investimentos/1.jpg'),
              require('@/assets/portfolio/pseg/lp/investimentos/2.jpg'),
              require('@/assets/portfolio/pseg/lp/investimentos/3.jpg'),
            ]
          },

          {
            category: 'web',
            
            title: 'Landing Page | Share',
            text: 'Landing Page desenvolvida para a Share',
            tecnology: 'HTML | SASS | JQuery',

            link: '',

            image: require('@/assets/portfolio/share/lp/screen.jpg'),
            images: [
              require('@/assets/portfolio/share/lp/screen.jpg'),
              require('@/assets/portfolio/share/lp/1.jpg'),
              require('@/assets/portfolio/share/lp/2.jpg'),
              require('@/assets/portfolio/share/lp/3.jpg'),
            ]
          },

          {
            category: 'web',
            
            title: 'Landing Page | Kallas',
            text: 'Landing page Bosque da Saúde, desenvolvido para a Kallas',
            tecnology: 'HTML | SASS | JQuery',

            link: '',

            image: require('@/assets/portfolio/kallas/lp/bosque/screen.jpg'),
            images: [
              require('@/assets/portfolio/kallas/lp/bosque/screen.jpg'),
              require('@/assets/portfolio/kallas/lp/bosque/1.jpg'),
              require('@/assets/portfolio/kallas/lp/bosque/2.jpg'),
              require('@/assets/portfolio/kallas/lp/bosque/3.jpg'),
              require('@/assets/portfolio/kallas/lp/bosque/4.jpg'),
              require('@/assets/portfolio/kallas/lp/bosque/5.jpg'),
              require('@/assets/portfolio/kallas/lp/bosque/6.jpg'),
              require('@/assets/portfolio/kallas/lp/bosque/7.jpg'),
            ]
          },

          {
            category: 'web',
            
            title: 'Landing Page | Kallas',
            text: 'Landing page Parque da Serra, desenvolvido para a Kallas',
            tecnology: 'HTML | SASS | JQuery',

            link: '',

            image: require('@/assets/portfolio/kallas/lp/parque/screen.jpg'),
            images: [
              require('@/assets/portfolio/kallas/lp/parque/screen.jpg'),
              require('@/assets/portfolio/kallas/lp/parque/1.jpg'),
              require('@/assets/portfolio/kallas/lp/parque/2.jpg'),
              require('@/assets/portfolio/kallas/lp/parque/3.jpg'),
              require('@/assets/portfolio/kallas/lp/parque/4.jpg'),
              require('@/assets/portfolio/kallas/lp/parque/5.jpg'),
              require('@/assets/portfolio/kallas/lp/parque/6.jpg'),
              require('@/assets/portfolio/kallas/lp/parque/7.jpg'),
            ]
          },

          {
            category: 'web',
            
            title: 'Landing Page | Kallas',
            text: 'Landing page Meu Taboão é Aqui, desenvolvido para a Kallas',
            tecnology: 'HTML | SASS | JQuery',

            link: '',

            image: require('@/assets/portfolio/kallas/lp/taboao/screen.jpg'),
            images: [
              require('@/assets/portfolio/kallas/lp/taboao/screen.jpg'),
              require('@/assets/portfolio/kallas/lp/taboao/1.jpg'),
            ]
          },

          {
            category: 'web',
            
            title: 'Landing Page | Kallas',
            text: 'Landing page Unique, desenvolvido para a Kallas',
            tecnology: 'HTML | SASS | JQuery',

            link: '',

            image: require('@/assets/portfolio/kallas/lp/unique/screen.jpg'),
            images: [
              require('@/assets/portfolio/kallas/lp/unique/screen.jpg'),
              require('@/assets/portfolio/kallas/lp/unique/1.jpg'),
            ]
          },

          {
            category: 'web',
            
            title: 'Landing Page | Pede Sabores',
            text: 'Landing Page Feiríssima desenvolvido para a Pede Sabores',
            tecnology: 'HTML | SASS | Jquery',

            link: '',

            image: require('@/assets/portfolio/pede-sabores/lp/feirissima/screen.jpg'),
            images: [
              require('@/assets/portfolio/pede-sabores/lp/feirissima/screen.jpg'),
              require('@/assets/portfolio/pede-sabores/lp/feirissima/1.jpg'),
            ]
          },

          {
            category: 'web',
            
            title: 'Landing Page | Sunshine',
            text: 'Landing page desenvolvida para a Allumé',
            tecnology: 'HTML | CSS | Javascript',

            link: 'http://sunshineprofessional.com.br',

            image: require('@/assets/portfolio/sunshine/lp/screen.jpg'),
            images: [
              require('@/assets/portfolio/sunshine/lp/screen.jpg'), 
              require('@/assets/portfolio/sunshine/lp/1.jpg'),
            ]
          },

          {
            category: 'web',
            
            title: 'Site | Eldhrimnir',
            text: 'Site desenvolvido para banda Eldhrimnir',
            tecnology: 'HTML | SASS | JQuery',

            link: '',

            image: require('@/assets/portfolio/eldhrimnir/site/screen.jpg'),
            images: [
              require('@/assets/portfolio/eldhrimnir/site/screen.jpg'),
              require('@/assets/portfolio/eldhrimnir/site/1.jpg'),
              require('@/assets/portfolio/eldhrimnir/site/2.jpg'),
              require('@/assets/portfolio/eldhrimnir/site/3.jpg'),
              require('@/assets/portfolio/eldhrimnir/site/4.jpg'),
            ]
          },

          //EMKT
          {
            category: 'web',
            
            title: 'Email Marketing | Atheva',
            text: 'E-Mail Marketing desenvolvido para a Atheva',
            tecnology: 'HTML | CSS inline',

            link: '',

            image: require('@/assets/portfolio/atheva/emkt/1/screen.jpg'),
            images: [
              require('@/assets/portfolio/atheva/emkt/1/screen.jpg'),
              require('@/assets/portfolio/atheva/emkt/1/1.jpg'),
            ]
          },

          {
            category: 'web',
            
            title: 'Email Marketing | Bayard',
            text: 'E-Mail Marketing desenvolvido para a Bayard',
            tecnology: 'HTML | CSS inline',

            link: '',

            image: require('@/assets/portfolio/bayard/emkt/1/screen.jpg'),
            images: [
              require('@/assets/portfolio/bayard/emkt/1/screen.jpg'),
              require('@/assets/portfolio/bayard/emkt/1/1.jpg'),
            ]
          },

          {
            category: 'web',
            
            title: 'Email Marketing | BKO',
            text: 'E-Mail Marketing desenvolvido para a BKO',
            tecnology: 'HTML | CSS inline',

            link: '',

            image: require('@/assets/portfolio/bko/emkt/1/screen.jpg'),
            images: [
              require('@/assets/portfolio/bko/emkt/1/screen.jpg'),
              require('@/assets/portfolio/bko/emkt/1/1.jpg'),
            ]
          },

          {
            category: 'web',
            
            title: 'Email Marketing | BKO',
            text: 'E-Mail Marketing desenvolvido para a BKO',
            tecnology: 'HTML | CSS inline',

            link: '',

            image: require('@/assets/portfolio/bko/emkt/2/screen.jpg'),
            images: [
              require('@/assets/portfolio/bko/emkt/2/screen.jpg'),
              require('@/assets/portfolio/bko/emkt/2/1.jpg'),
            ]
          },

          {
            category: 'web',
            
            title: 'Email Marketing | BKO',
            text: 'E-Mail Marketing desenvolvido para a BKO',
            tecnology: 'HTML | CSS inline',

            link: '',

            image: require('@/assets/portfolio/bko/emkt/3/screen.jpg'),
            images: [
              require('@/assets/portfolio/bko/emkt/3/screen.jpg'),
              require('@/assets/portfolio/bko/emkt/3/1.jpg'),
            ]
          },

          {
            category: 'web',
            
            title: 'Email Marketing | BKO',
            text: 'E-Mail Marketing desenvolvido para a BKO',
            tecnology: 'HTML | CSS inline',

            link: '',

            image: require('@/assets/portfolio/bko/emkt/4/screen.jpg'),
            images: [
              require('@/assets/portfolio/bko/emkt/4/screen.jpg'),
              require('@/assets/portfolio/bko/emkt/4/1.jpg'),
            ]
          },

          {
            category: 'web',
            
            title: 'Email Marketing | Pede Sabores',
            text: 'Email Marketing desenvolvido para a Pede Sabores',
            tecnology: 'HTML | CSS inline',

            link: '',

            image: require('@/assets/portfolio/pede-sabores/emkt/1/screen.jpg'),
            images: [
              require('@/assets/portfolio/pede-sabores/emkt/1/screen.jpg'),
              require('@/assets/portfolio/pede-sabores/emkt/1/1.jpg'),
            ]
          },

          {
            category: 'web',
            
            title: 'Email Marketing | Porto Seguro',
            text: 'Email Marketing desenvolvido para a Porto Seguro',
            tecnology: 'HTML | CSS inline',

            link: '',

            image: require('@/assets/portfolio/pseg/emkt/1/screen.jpg'),
            images: [
              require('@/assets/portfolio/pseg/emkt/1/screen.jpg'),
              require('@/assets/portfolio/pseg/emkt/1/1.jpg'),
            ]
          },

          {
            category: 'web',
            
            title: 'Email Marketing | Porto Seguro',
            text: 'Email Marketing desenvolvido para a Porto Seguro',
            tecnology: 'HTML | CSS inline',

            link: '',

            image: require('@/assets/portfolio/pseg/emkt/2/screen.jpg'),
            images: [
              require('@/assets/portfolio/pseg/emkt/2/screen.jpg'),
              require('@/assets/portfolio/pseg/emkt/2/1.jpg'),
            ]
          },

          {
            category: 'web',
            
            title: 'Email Marketing | Porto Seguro',
            text: 'Email Marketing desenvolvido para a Porto Seguro',
            tecnology: 'HTML | CSS inline',

            link: '',

            image: require('@/assets/portfolio/pseg/emkt/3/screen.jpg'),
            images: [
              require('@/assets/portfolio/pseg/emkt/3/screen.jpg'),
              require('@/assets/portfolio/pseg/emkt/3/1.jpg'),
            ]
          },

          {
            category: 'web',
            
            title: 'Email Marketing | Porto Seguro',
            text: 'Email Marketing desenvolvido para a Porto Seguro',
            tecnology: 'HTML | CSS inline',

            link: '',

            image: require('@/assets/portfolio/pseg/emkt/4/screen.jpg'),
            images: [
              require('@/assets/portfolio/pseg/emkt/4/screen.jpg'),
              require('@/assets/portfolio/pseg/emkt/4/1.jpg'),
            ]
          },

          {
            category: 'web',
            
            title: 'Email Marketing | Porto Seguro',
            text: 'Email Marketing desenvolvido para a Porto Seguro',
            tecnology: 'HTML | CSS inline',

            link: '',

            image: require('@/assets/portfolio/pseg/emkt/5/screen.jpg'),
            images: [
              require('@/assets/portfolio/pseg/emkt/5/screen.jpg'),
              require('@/assets/portfolio/pseg/emkt/5/1.jpg'),
            ]
          },

          {
            category: 'web',
            
            title: 'Email Marketing | Tishman Speyer',
            text: 'Email Marketing desenvolvido para a Tishman Speyer',
            tecnology: 'HTML | CSS inline',

            link: '',

            image: require('@/assets/portfolio/tishmann/emkt/2/screen.jpg'),
            images: [
              require('@/assets/portfolio/tishmann/emkt/2/screen.jpg'),
              require('@/assets/portfolio/tishmann/emkt/2/1.jpg'),
            ]
          },

          {
            category: 'web',
            
            title: 'Email Marketing | Tishman Speyer',
            text: 'Email Marketing desenvolvido para a Tishman Speyer',
            tecnology: 'HTML | CSS inline',

            link: '',

            image: require('@/assets/portfolio/tishmann/emkt/3/screen.jpg'),
            images: [
              require('@/assets/portfolio/tishmann/emkt/3/screen.jpg'),
              require('@/assets/portfolio/tishmann/emkt/3/1.jpg'),
            ]
          },


          // Design
          {
            category: 'design',
            
            title: 'Camiseta | Eldhrimnir',
            text: 'Arte para a camiseta da banda Eldhrimnir',
            tecnology: 'Photoshop | Illustrator',

            link: '',

            image: require('@/assets/portfolio/eldhrimnir/impressos/camiseta-respeito-ao-rum/screen.jpg'),
            images: [
              require('@/assets/portfolio/eldhrimnir/impressos/camiseta-respeito-ao-rum/screen.jpg'),
              require('@/assets/portfolio/eldhrimnir/impressos/camiseta-respeito-ao-rum/1.jpg'),
            ]
          },

          {
            category: 'design',
            
            title: 'Cartões | Eldhrimnir',
            text: 'Cartões de visita feitos para a banda Eldhrimnir',
            tecnology: 'Photoshop | Illustrator',

            link: '',

            image: require('@/assets/portfolio/eldhrimnir/impressos/cartao-1/screen.jpg'),
            images: [
              require('@/assets/portfolio/eldhrimnir/impressos/cartao-1/screen.jpg'),
              require('@/assets/portfolio/eldhrimnir/impressos/cartao-1/1.jpg'),
            ]
          },

          {
            category: 'design',
            
            title: 'Tortuga | Eldhrimnir',
            text: 'Capa para o single Tortuga da banda Eldhrimnir',
            tecnology: 'Photoshop | Illustrator',

            link: '',

            image: require('@/assets/portfolio/eldhrimnir/impressos/single-tortuga/screen.jpg'),
            images: [
              require('@/assets/portfolio/eldhrimnir/impressos/single-tortuga/screen.jpg'),
              require('@/assets/portfolio/eldhrimnir/impressos/single-tortuga/1.jpg'),
            ]
          },

          {
            category: 'design',
            
            title: 'CD | Eldhrimnir',
            text: 'Arte para o CD Yahoey da banda Eldhrimnir',
            tecnology: 'Photoshop | Illustrator | 3Ds Max',

            link: '',

            image: require('@/assets/portfolio/eldhrimnir/impressos/yahoey-cd/screen.jpg'),
            images: [
              require('@/assets/portfolio/eldhrimnir/impressos/yahoey-cd/screen.jpg'),
              require('@/assets/portfolio/eldhrimnir/impressos/yahoey-cd/1.jpg'),
            ]
          },

          {
            category: 'design',
            
            title: 'Encarte | Eldhrimnir',
            text: 'Arte para o encarte do CD Yahoey da banda Eldhrimnir',
            tecnology: 'Photoshop | Illustrator | 3Ds Max',

            link: '',

            image: require('@/assets/portfolio/eldhrimnir/impressos/yahoey-encarte/screen.jpg'),
            images: [
              require('@/assets/portfolio/eldhrimnir/impressos/yahoey-encarte/screen.jpg'),
              require('@/assets/portfolio/eldhrimnir/impressos/yahoey-encarte/1.jpg'),
            ]
          },

          {
            category: 'design',
            
            title: 'Logo 2016 | Eldhrimnir',
            text: 'Logo da banda Eldhrimnir',
            tecnology: 'Photoshop | Illustrator',

            link: '',

            image: require('@/assets/portfolio/eldhrimnir/logo/2016/screen.jpg'),
            images: [
              require('@/assets/portfolio/eldhrimnir/logo/2016/screen.jpg'),
              require('@/assets/portfolio/eldhrimnir/logo/2016/1.jpg'),
            ]
          },

          {
            category: 'design',
            
            title: 'Logo 2017 | Eldhrimnir',
            text: 'Logo da banda Eldhrimnir',
            tecnology: 'Photoshop | Illustrator',

            link: '',

            image: require('@/assets/portfolio/eldhrimnir/logo/2017/screen.jpg'),
            images: [
              require('@/assets/portfolio/eldhrimnir/logo/2017/screen.jpg'),
              require('@/assets/portfolio/eldhrimnir/logo/2017/1.jpg'),
            ]
          },

          {
            category: 'design',
            
            title: 'Jogo | Editora FTD',
            text: 'Arte do jogo Scary Faces feito para a Editora FTD',
            tecnology: 'Photoshop',

            link: '',

            image: require('@/assets/portfolio/ftd/jogo/scary-faces/screen.jpg'),
            images: [
              require('@/assets/portfolio/ftd/jogo/scary-faces/screen.jpg'),
              require('@/assets/portfolio/ftd/jogo/scary-faces/1.jpg'),
              require('@/assets/portfolio/ftd/jogo/scary-faces/2.jpg'),
              require('@/assets/portfolio/ftd/jogo/scary-faces/3.jpg'),
              require('@/assets/portfolio/ftd/jogo/scary-faces/4.jpg'),
              require('@/assets/portfolio/ftd/jogo/scary-faces/5.jpg'),
            ]
          },

          {
            category: 'design',
            
            title: 'Jogo | SP-JAM',
            text: 'Sprites para o jogo Ahoy! feito para a SP-JAM 2015',
            tecnology: 'Photoshop | 3Ds Max',

            link: 'https://github.com/DfKimera/ahoy',

            image: require('@/assets/portfolio/sp-jam/ahoy/screen.jpg'),
            images: [
              require('@/assets/portfolio/sp-jam/ahoy/screen.jpg'),
              require('@/assets/portfolio/sp-jam/ahoy/1.jpg'),
              require('@/assets/portfolio/sp-jam/ahoy/2.jpg'),
              require('@/assets/portfolio/sp-jam/ahoy/3.jpg'),
              require('@/assets/portfolio/sp-jam/ahoy/4.jpg'),
              require('@/assets/portfolio/sp-jam/ahoy/5.jpg'),
            ]
          },


          // Videos
          {
            category: 'videos',
            
            title: 'Clipe | Eldhrimnir',
            text: 'Clipe da música Vida de Capitão feito para a banda Eldhrimnir',
            tecnology: 'Photoshop | Illustrator | Animate (Flash) | Premiere | 3Ds Max',

            link: 'https://www.youtube.com/watch?v=VQetWzcgppg',

            image: require('@/assets/portfolio/eldhrimnir/videos/clipe-vida-de-capitao/screen.jpg'),
          },

          {
            category: 'videos',
            
            title: 'Vinheta | Aliança Pirata',
            text: 'Vinheta para começo dos vídeos da banda Eldhrimnir',
            tecnology: 'Photoshop | Illustrator | Animate (Flash)',

            link: 'https://www.youtube.com/watch?v=exWR1VVlz9A&feature=youtu.be',

            image: require('@/assets/portfolio/eldhrimnir/videos/vinheta/screen.jpg'),
          },

          {
            category: 'videos',
            
            title: 'Vinheta | Aliança Pirata',
            text: 'Animação de abertura do canal da Aliança Pirata',
            tecnology: 'Photoshop | Animate (Flash) | Premiere | 3Ds Max',

            link: 'https://www.youtube.com/watch?v=rI8SJQrJt_4&feature=youtu.be',

            image: require('@/assets/portfolio/alianca-pirata/videos/abertura-alianca-pirata/screen.jpg'),
          },

          {
            category: 'videos',
            
            title: 'Vinheta | Aliança Pirata',
            text: 'Animação de abertura do programa Pula Fuckin Pirata Pirateado do canal da Aliança Pirata',
            tecnology: 'Photoshop | Animate (Flash) | Premiere | After Effects',

            link: 'https://www.youtube.com/watch?v=rI8SJQrJt_4&feature=youtu.be',

            image: require('@/assets/portfolio/alianca-pirata/videos/abertura-pula-fuckin-pirata-pirateado/screen.jpg'),
          },

          {
            category: 'videos',
            
            title: 'Vinheta | Aliança Pirata',
            text: 'Animação de abertura dos Eventos do canal da Aliança Pirata',
            tecnology: 'Photoshop | Animate (Flash) | Premiere | After Effects',

            link: 'https://www.youtube.com/watch?v=qJ7VVyQo4xA&feature=youtu.be',

            image: require('@/assets/portfolio/alianca-pirata/videos/eventos-abertura/screen.jpg'),
          },
        ],

        imgs: '',
        visible: false,
        index: 0
      }
    },
    
    methods: {
      setFilter: function(filter) {
        this.currentFilter = filter;
      },
      
      showMultiple(e) {
        this.imgs = e
        this.index = 1  // index of imgList
        this.show()
      },
      show() {
        this.visible = true
      },
      handleHide() {
        this.visible = false
      }
    }
  }
</script>

<style scoped lang="scss">
  .portfolio {
    .vel-img-modal, .vel-modal {
      background: rgba(0,0,0,.9) !important;
    }
  }

  .filters {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #1b1c1b;
    padding: 15px;

    .filter {
      cursor:pointer;

      padding: 5px;
      border-radius: 5px;
      margin: 0 10px;

      font-weight: 300;

      transition: all .3s ease;

      &.active {
        color: #000000;
        background: #b4d455;

        &:hover {
          color: #000000;
        } 
      }

      &:hover {
        color: #ffae00;
      } 
    }
  }

  .projects {
    display: flex;
    flex-wrap: wrap;

    &-enter {
      opacity: 0;
      transition: all .3s ease;

      &-to {
        opacity: 1;
        transition: all .3s ease;
      }
    }

    &-leave {
      opacity: 1;
      transition: all .3s ease;

      &-to {
        opacity: 0;
        transition: all .3s ease;
      }
    }

    .project {
      display: flex;
      flex-direction: column;
      align-items: center;

      overflow: hidden;

      width: calc(100% / 3);
      height: 100%;
      min-height: 450px;

      position: relative;

      transition: all .3s ease;

      @media (max-width: 1440px) {
        min-height: 350px;
      }

      @media (max-width: 1024px) {
        width: calc(100% / 2);
        min-height: 350px;
      }

      @media (max-width: 768px) {
        width: 100%;
      }

      &:hover {
        img {
          filter: blur(5px);
          transform: translate(-50%, -50%) scale(1.2);
        }

        .name {
          opacity: 0;
        }

        .about {
          opacity: 1;
          transform: scale(1);
        }
      }

      .name {
        position: absolute;
        z-index: 10;
        bottom: 0;
        left: 0;

        display: block;
        width: 100%;

        padding: 10px;

        background: rgba(0,0,0,.5);
        text-align: center;
        opacity: 1;

        transition: all .3s ease;
      }

      img {
        width: 100%;
        height: 100%;

        position: absolute;
        z-index: 0;
        top: 50%;
        left: 50%;

        transform: translate(-50%, -50%);
        transition: all 1s ease;
      }

      .about {
        position: absolute;
        z-index: 5;
        top: 0;
        left: 0;

        padding: 20px;

        width: 100%;
        height: 100%;

        background: rgba(0,0,0,.8);

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        opacity: 0;
        transform: scale(1.2);

        transition: all .3s ease;

        .title {
          display: table;
          background: #b4d455;

          padding: 10px;
          margin: 15px;

          color: #000000;
          font-size: 20px;
          text-align: center;
          font-weight: 600;
          text-transform: uppercase;
        }
        .text {
          font-size: 16px;
          text-align: center;
          margin: 15px;
        }
        .tecnology {
          font-size: 16px;
          text-align: center;
          font-weight: 600;
          text-transform: uppercase;
        }

        .links {
          display: flex;
          justify-content: center;
          align-items: center;
          
          a {
            background: #FFAE00;
            padding: 5px 10px;
            margin: 5px;

            cursor: pointer;

            font-size: 22px;
            text-align: center;
            font-weight: 600 !important;

            color: #000000;

            border-radius: 5px;

            transition: all .3s ease;

            &:hover {
              transform: scale(1.1);
            }
          }
        }
      }
    }
  }
</style>