


let data =[
  { id: "vic1",
    nameNew: "Nadia Calviño", 
    textNew: "La vicepresidenta tercera y ministra de Asuntos Económicos y Transformación Digital asciende en el escalafón, ya que pasará a ocupar a partir de ahora la Vicepresidencia primera del Gobierno",
    imgOld: "./img/round/calvo_round.png",
    nameOld: "Carmen Calvo"
    },

  { id: "vic2",
    nameNew: "Yolanda Díaz", 
    textNew: "La vicepresidenta de Trabajo y Economía Social, Yolanda Díaz, pasará a ser la vicepresidenta segunda. Será la única ministra de Unidas Podemos que se verá afectada por la remodelación",
    imgOld: "./img/round/calvino_round.png",
    nameOld: "Nadia Calviño"
    },

    { id: "vic3",
    nameNew: "Teresa Ribera", 
    textNew: "La ministra seguirá al frente de la cartera de Transición Ecológica y Reto Demográfico y, además, sube un escalafón en el Gobierno al pasar a ocupar la Vicepresidencia tercera",
    imgOld: "./img/round/yolanda_round.png",
    nameOld: "Yolanda Díaz"
    },

    { id: "pres",
    nameNew: "Félix Bolaños", 
    textNew: "El hasta ahora secretario de Estado de Presidencia sube de rango ya que pasará a ocupar el puesto de ministro de la Presidencia, Relaciones con las Cortes y Memoria Democrática",
    imgOld: "./img/round/calvo_round.png",
    nameOld: "Carmen Calvo"
    },

    { id: "port",
    nameNew: "Isabel Rodríguez", 
    textNew: "La hasta ahora diputada y alcaldesa de Puertollano (Ciudad Real) será la nueva portavoz del Gobierno de Pedro Sánchez. Además, estará al frente del Ministerio de Política Territorial",
    imgOld: "./img/round/mjmontero_round.png",
    nameOld: "María Jesús Montero"
    },

    { id: "ext",
    nameNew: "J. M. Albares", 
    textNew: "El actual embajador de España en la República Francesa y ex secretario general de asuntos internacionales será el encargado de dirigir a partir de ahora el Ministerio de Asuntos Exteriores",
    imgOld: "./img/round/laya_round.png",
    nameOld: "Arancha González Laya"
    },

    { id: "just",
    nameNew: "Pilar Llop", 
    textNew: "La hasta ahora presidenta del Senado será la nueva ministra de Justicia. Para ocupar su cargo en la Cámara Alta, se apunta al portavoz del grupo socialista, Ander Gil",
    imgOld: "./img/round/campo_round.png",
    nameOld: "Juan Carlos Campo"
    },

    { id: "terr",
    nameNew: "Isabel Rodríguez", 
    textNew: "La hasta ahora diputada y alcaldesa de Puertollano (Ciudad Real) será la nueva portavoz del Gobierno de Pedro Sánchez. Además, estará al frente del Ministerio de Política Territorial ",
    imgOld: "./img/round/iceta_round.png",
    nameOld: "Miquel Iceta"
    },

    { id: "trans",
    nameNew: "Raquel Sánchez", 
    textNew: "La alcaldesa de Gavà, en el Baix Llobregat, se incorpora al Gobierno. La edil del PSC será la máxima responsable del Ministerio de Transportes, Movilidad y Agenda Urbana",
    imgOld: "./img/round/abalos_round.png",
    nameOld: "José Luis Ábalos"
    },

    { id: "edu",
    nameNew: "Pilar Alegría", 
    textNew: " La hasta ahora delegada del Ejecutivo aragonés y exconsejera de Innovación, Investigación y Universidad (2015 - 2019) del Gobierno de Aragón se encargará de liderar el Ministerio de Educación",
    imgOld: "./img/round/celaa_round.png",
    nameOld: "Isabel Celaá"
    },

    { id: "cien",
    nameNew: "Diana Morant", 
    textNew: "La alcaldesa del municipio valenciano de Gandía, muy próxima al presidente de la Comunidad Valenciana, Ximo Puig, será la encargada de dirigir el Ministerio de Ciencia e Innovación ",
    imgOld: "./img/round/duque_round.png",
    nameOld: "Pedro Duque"
    },

    { id: "cult",
    nameNew: " Miquel Iceta", 
    textNew: "El primer secretario del PSC abandona el Ministerio de Política Territorial y Función Pública, cargo que ostenta desde el mes de enero. El catalán para a ser el nuevo ministro de Cultura y Deportes",
    imgOld: "./img/round/uribes_round.png",
    nameOld: "J. M. Rodríguez Uribes"
    },

    

    { id: "gabin",
    nameNew: "Óscar López", 
    textNew: "El presidente y consejero delegado de Paradores, también ex secretario de Organización del PSOE, regresa a la primera línea política al ser escogido como nuevo Jefe de Gabinete de presidente",
    imgOld: "./img/round/redondo_round.png",
    nameOld: "Iván Redondo"
    }


]


window.onload = function() {
 
  $(".acF:has(.exc)").on("click", addText);
  $(".modalClose").on("click", closeModal);

/*var pMap = document.getElementById("svg3157").getBoundingClientRect().top;

console.log(pMap);

    $('#is').on('click', function(){

  $('#exampleModal').css('top', pMap)
      $('#exampleModal').modal('show')
    })*/


function addText(){
  var ident = this.id;
  var $this = $(this);
  var identLoc = $this.offset().top - 50;
  
  console.log(identLoc);
  data.forEach(function(item,pos){
  
    if(item.id == ident){
      console.log(item.nameNew);
      $("#nameNew").text(item.nameNew);
      $("#textNew").text(item.textNew);
      $(".fotoOld img").attr("src", item.imgOld);
      $("#nameOld").text(item.nameOld);
          
    }
   
  });

  fadeIn(identLoc);
}



function fadeIn(loc){
/*  $("#layer").css("display", "block");
*/  
  $('#modal').css('top', loc);
    
  var tl = gsap.timeline();
  tl.to("#flTest", {opacity: .4, duration: .2});
  tl.to("#modal", {opacity: 1, duration: .2, delay: -1});

}

function closeModal(){
/*  $("#layer").css("display", "block");
*/  
  $('#modal').css('top', "0");
  var tl = gsap.timeline();
  tl.to("#modal", {opacity: 0, duration: .2});
  tl.to("#flTest", {opacity: 1, duration: .2, delay: -1});

}



 
};


