console.log('scripts are ready');

//code to change canvas background

var backgrounds = $('.mission_scenes'); 
var canvas = $('.scenes')[0];

for(i = 0; i < backgrounds.length; i++) {

  backgrounds[i].addEventListener("click", function(event){ 
    event.preventDefault(); 
    src = this.src;

    canvas.style.backgroundImage="url('"+ src + "')";
  }, false);

};

//enable slick slider1 for characters

$('.slider1').slick({
  infinite: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: true,
  adaptiveHeight: true,
  variableWidth: true,
  mobileFirst: true,
  responsive: [
  {
    breakpoint: 1024,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 3
    }
  },
  {
    breakpoint: 600,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 2
    }
  },
  {
    breakpoint: 480,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1
    }
  }
// You can unslick at a given breakpoint now by adding:
// settings: "unslick"
// instead of a settings object
]
});

//enable slick slider2 for backgrounds

$('.slider2').slick({
  vertical: true,
  infinite: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: true,
  mobileFirst: true
});

// updated text on scene on clicking add button
// need to resolve keeping class??
$(".add_button").click(function() {

  $('.updated_text p').replaceWith( $( 'textarea' ).val() );
  
});

// function to deal with sprites background toggling of selectors
//position1 is the onclick effect, position2 is back to original
function spriteAltBgs (selector, backgroundPosition1, backgroundPosition2) {

  var counter = 0;

  $(selector).on('click',function( event ){

    event.preventDefault(); //temporary whilst no true links

    if(counter === 0){
     $(selector).css('backgroundPosition', backgroundPosition1);
     counter = 1;
   } else if (counter === 1){
     $(selector).css('backgroundPosition', backgroundPosition2);
     counter = 0;
   }
  });
}

spriteAltBgs('.preview_button', '9.497% 2.724%', '0.489% 2.724%');
spriteAltBgs('.add_button', '6.925% 27.049%', '6.925% 13.525%');
spriteAltBgs('.scene1', '0.139% 82.573%', '0.139% 49.378%');
spriteAltBgs('.scene2', '7.911% 82.573%', '7.911% 49.378%');
spriteAltBgs('.scene3', '15.753% 82.573%', '15.753% 49.378%');
spriteAltBgs('.scene4', '23.648% 82.573%', '23.648% 49.378%');
spriteAltBgs('.home', '14.932% 28.794%', '14.932% 15.175%');
spriteAltBgs('.gallery', '21.488% 28.794%', '21.488% 15.175%');
spriteAltBgs('.official', '31.567% 28.794%', '31.567% 15.175%');

//code for drag and drop of characters on canvas
// $(function() {
//   $( ".chars" ).droppable({
//     drop: function( event, ui ) {
//       accept: ".chars",
//       $( this )
//       .addClass( "ui-state-highlight" )
//       .find( ".scenes" );

// // alert('boom');
// console.log('done');
// }
// });

//   $('*[draggable!=true]','.slick-track').unbind('dragstart');
//   $( ".chars" ).draggable({
//     helper: 'clone',
//     revert: 'invalid',
//     enable: true,
//     appendTo: 'body',
//     zIndex: 300,
//     cursor: 'move'
// // containment: ".scenes",
// // scroll: false
// }); 
// });

$(".chars").on("draggable mouseenter mousedown droppable",function(event){
  event.stopPropagation();
});

//test for elements related to browser support
function elementSupportsAttribute(element, attribute) {
  var test = document.createElement(element);
  if (attribute in test) {
    return true;
  } else {
    return false;
  }
};

//textarea placeholder support 

if (!elementSupportsAttribute('textarea', 'placeholder')) {
// Fallback for browsers that don't support HTML5 placeholder attribute
var originalText = "Only the best story will win the Grand Prize, so think about your story before you submit your scenes! Roughly 3 lines of text be displayed maximum.";

$("#textarea")
.data("originalText", $("#textarea").text())
.css("color", "#AFAFAF")
.focus(function() {
  var $el = $(this);
  if (this.value == $el.data("originalText")) {
    this.value = "";
  }
})
.blur(function() {
  if (this.value == "") {
    this.value = $(this).data("originalText");
  }
});
} else {
// Browser does support HTML5 placeholder attribute, so use it.
$("#textarea")
.attr("placeholder", $("#textarea").text())
.text("Only the best story will win the Grand Prize, so think about your story before you submit your scenes! Roughly 3 lines of text be displayed maximum.");
}