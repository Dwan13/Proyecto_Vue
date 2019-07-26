var app = new Vue({
  el: '#app',
  data: {
    titulo:'AYUDANDO AL MUNDO ANIMAL (COLOMBIA)',
    description:'Bienvenidos al portal informático para curiosos del mundo animal',
    animales:[
      {"nombre":'Tortugas marinas',"Region":'Caribe',"causa":'El hombre ha matado tortugas para aprovechar todo lo que hay en ella: carne, huevos, piel y su caparazón. Por ende ha habido masacres de tortugas y ahora la mayoría están en vías de extinción. Actualmente, se conservan las playas de desove como parques nacionales o reservas protegidas.', "image":"./FotosAnimales/TortugaMarina.jpeg"},
      {"nombre":'Tití cabeciblanco ',"Region":'Amazonía',"causa":'En el país, el número de esta especie descendió hasta quedar aislados en pequeñas partes de bosques. Actualmente el panorama es devastador. La deforestación y el uso del suelo para la ganadería han destruido el 98 por ciento de su hábitat original. El índice de deforestación en Colombia sigue siendo uno de los más altos del mundo (120.933 hectáreas de bosque natural al año) y lo poco que queda de su hábitat se enfrenta a la contaminación.', "image":"./FotosAnimales/TitiCabezaBlanca.jpeg"},
      {"nombre":'Oso de anteojos',"Region":'Andina',"causa":'Se estima que en nuestro país hay entre 5.000 y 8.000 osos de anteojos. Parques Nacionales Naturales y la Wildlife Conservation Society, que realizan una importante actividad para conservarlos, advierten que si se mantiene la destrucción en las condiciones actuales, el 30 % desaparecería en los próximos 15 años', "image":"./FotosAnimales/OsoAnteojos.jpeg"},
    ],
    nuevoanimal:'',
    nuevaregion:'',
    nuevacausa:''
  },
  methods:{
    agregaranimal(){
      this.animales.push({
        nombre: this.nuevoanimal, Region: this.nuevaregion, causa: this.nuevacausa
      })
    }
  }
})
