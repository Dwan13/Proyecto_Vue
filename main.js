var app = new Vue({
  el: '#app',
  data: {
    titulo:'AYUDANDO AL MUNDO ANIMAL (COLOMBIA)',
    description:'Bienvenidos al portal informático para curiosos del mundo animal',
    animales:[
      {nombre:'Tortugas marinas',Region:'Caribe'},
      {nombre:'Tití cabeciblanco ',Region:'Amazonía'},
      {nombre:'Oso de anteojos',Region:'Andina'},
    ],
    nuevoanimal:''

  },
  methods:{
    agregaranimal(){
      this.animales.push({
        nombre: this.nuevoanimal, Region: ''
      })
    }
  }
})
