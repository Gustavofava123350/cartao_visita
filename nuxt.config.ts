// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: [
      './assets/css/style.css'
  ],
  app:{
    head: {
      title:'CARTÃO',
      meta: [
        {charset:'utf-8'},
        {name:'viewport', content:'width=device-width, initial-scale=1'},
        {hid:'description', name:'description', content:'Cartao_Visita' }
      ],
      link: [
        {rel:'icon', type:'image/png',  href:'../assets/image/nerd_dev_girl_anime.png'},
        {rel:'icon', type:'image/svg+xml', href:'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css'},
        {rel:'stylesheet', href:'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css'}
      
      ],
      script: [
        {src:'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.min.js', type:'text/javascript', defer:true}
      ]

    }
  },
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true }
})
