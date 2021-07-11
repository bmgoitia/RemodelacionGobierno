


let data =[
  { id: "vic1",
    nameNew: "Nadia Calviño", 
    textNew: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sapien augue, tincidunt a quam ut, volutpat consectetur lorem. Pellentesque sagittis tempor odio, sit amet porta libero laoreet ac pertinus. ",
    imgOld: "./img/round/calvo_round.png",
    nameOld: "Carmen Calvo"
    },

  { id: "vic2",
    nameNew: "Yolanda Díaz", 
    textNew: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sapien augue, tincidunt a quam ut, volutpat consectetur lorem. Pellentesque sagittis tempor odio, sit amet porta libero laoreet ac pertinus. ",
    imgOld: "./img/round/calvino_round.png",
    nameOld: "Nadia Calviño"
    },

    { id: "vic3",
    nameNew: "Teresa Ribera", 
    textNew: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sapien augue, tincidunt a quam ut, volutpat consectetur lorem. Pellentesque sagittis tempor odio, sit amet porta libero laoreet ac pertinus. ",
    imgOld: "./img/round/yolanda_round.png",
    nameOld: "Yolanda Díaz"
    },

    { id: "pres",
    nameNew: "Félix Bolaños", 
    textNew: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sapien augue, tincidunt a quam ut, volutpat consectetur lorem. Pellentesque sagittis tempor odio, sit amet porta libero laoreet ac pertinus. ",
    imgOld: "./img/round/calvo_round.png",
    nameOld: "Carmen Calvo"
    },

    { id: "port",
    nameNew: "Isabel Rodríguez", 
    textNew: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sapien augue, tincidunt a quam ut, volutpat consectetur lorem. Pellentesque sagittis tempor odio, sit amet porta libero laoreet ac pertinus pertinus. ",
    imgOld: "./img/round/mjmontero_round.png",
    nameOld: "María Jesús Montero"
    },

    { id: "ext",
    nameNew: "J. M. Albares", 
    textNew: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sapien augue, tincidunt a quam ut, volutpat consectetur lorem. Pellentesque sagittis tempor odio, sit amet porta libero laoreet ac pertinus. ",
    imgOld: "./img/round/laya_round.png",
    nameOld: "Arancha González Laya"
    },

    { id: "just",
    nameNew: "Pilar Llop", 
    textNew: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sapien augue, tincidunt a quam ut, volutpat consectetur lorem. Pellentesque sagittis tempor odio, sit amet porta libero laoreet ac pertinus. ",
    imgOld: "./img/round/campo_round.png",
    nameOld: "Juan Carlos Campo"
    },

    { id: "terr",
    nameNew: "Isabel Rodríguez", 
    textNew: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sapien augue, tincidunt a quam ut, volutpat consectetur lorem. Pellentesque sagittis tempor odio, sit amet porta libero laoreet ac pertinus. ",
    imgOld: "./img/round/iceta_round.png",
    nameOld: "Miquel Iceta"
    },

    { id: "trans",
    nameNew: "Raquel Sánchez", 
    textNew: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sapien augue, tincidunt a quam ut, volutpat consectetur lorem. Pellentesque sagittis tempor odio, sit amet porta libero laoreet ac pertinus. ",
    imgOld: "./img/round/abalos_round.png",
    nameOld: "José Luis Ábalos"
    },

    { id: "edu",
    nameNew: "Pilar Alegría", 
    textNew: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sapien augue, tincidunt a quam ut, volutpat consectetur lorem. Pellentesque sagittis tempor odio, sit amet porta libero laoreet ac pertinus. ",
    imgOld: "./img/round/celaa_round.png",
    nameOld: "Isabel Celaá"
    },

    { id: "cien",
    nameNew: "Diana Morant", 
    textNew: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sapien augue, tincidunt a quam ut, volutpat consectetur lorem. Pellentesque sagittis tempor odio, sit amet porta libero laoreet ac pertinus. ",
    imgOld: "./img/round/duque_round.png",
    nameOld: "Pedro Duque"
    },

    { id: "cult",
    nameNew: " Miquel Iceta", 
    textNew: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sapien augue, tincidunt a quam ut, volutpat consectetur lorem. Pellentesque sagittis tempor odio, sit amet porta libero laoreet ac pertinus. ",
    imgOld: "./img/round/uribes_round.png",
    nameOld: "J. M. Rodríguez Uribes"
    },

    

    { id: "gabin",
    nameNew: "Óscar López", 
    textNew: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sapien augue, tincidunt a quam ut, volutpat consectetur lorem. Pellentesque sagittis tempor odio, sit amet porta libero laoreet ac pertinus. ",
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


