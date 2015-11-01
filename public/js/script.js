console.log('scripts are ready');

// $(document).ready(function(){
// }); // closing document ready

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

//enable slick slider

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

// $( "textarea" ).click(function() {
//   $(this).val().appendTo('.updated_text');
//   alert( "Handler for .click() called." );
// });

// function addtext (){

//   var textInput = $(textarea).val();

// }

$('.add_button').click(function() {
  var text = $('textarea').val();

//send to server and process response
});

//disable preview button going elsewhere and toggle color/sprite on click

var counter = 0;

 $('.preview_button').on('click',function( event ){

  event.preventDefault();

  if(counter === 0){
     $('.preview_button').css('backgroundPosition', '9.497% 2.724%');
     counter = 1;
   } else if (counter === 1){
       $('.preview_button').css('backgroundPosition', '0.489% 2.724%');
       counter = 0;
   }
 });

//toggle add_button
 $('.add_button').on('click',function( event ){

  event.preventDefault();

  if(counter === 0){
     $('.add_button').css('backgroundPosition', '6.925% 27.049%');
     counter = 1;
   } else if (counter === 1){
       $('.add_button').css('backgroundPosition', '6.925% 13.525%');
       counter = 0;
   }
 });

//code for drag and drop of characters on canvas
$(function() {
  $( ".chars" ).droppable({
    drop: function( event, ui ) {
      accept: ".chars",
      $( this )
      .addClass( "ui-state-highlight" )
      .find( ".scenes" );

// alert('boom');
console.log('done');
}
});

  $('*[draggable!=true]','.slick-track').unbind('dragstart');
  $( ".chars" ).draggable({
    helper: 'clone',
    revert: 'invalid',
    enable: true,
    appendTo: 'body',
    zIndex: 300,
    cursor: 'move'
// containment: ".scenes",
// scroll: false
}); 
});

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