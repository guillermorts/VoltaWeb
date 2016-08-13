
 //////////////////////////////////////////////////////////////////////////////

 $(document).on('ready', function() {
    $(".regular").slick({
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 3
    });
    $(".center").slick({
      dots: true,
      infinite: true,
      centerMode: true,
      slidesToShow: 3,
      slidesToScroll: 3
    });
    $(".variable").slick({
      dots: true,
      infinite: true,
      variableWidth: true
    });
  });

///////////////////////////////////////////////////////////////////////////////

$("#toequipo").on("click", function(){
    var posicion = $("#equipo").offset().top;
    $("html, body").animate({
        scrollTop: posicion
    }, 1500);
 });

 $("#toequipo2").on("click", function(){
     var posicion = $("#equipo").offset().top;
     $("html, body").animate({
         scrollTop: posicion
     }, 1500);
  });

 $("#tomotostudent").on("click", function(){
     var posicion = $("#motostudent").offset().top;
     $("html, body").animate({
         scrollTop: posicion
     }, 1500);
  });

  $("#toprototipo").on("click", function(){
      var posicion = $("#prototipo").offset().top;
      $("html, body").animate({
          scrollTop: posicion
      }, 1500);
   });

   $("#togaleria").on("click", function(){
       var posicion = $("#galeria").offset().top;
       $("html, body").animate({
           scrollTop: posicion
       }, 1500);
    });

   $("#topartners").on("click", function(){
       var posicion = $("#partners").offset().top;
       $("html, body").animate({
           scrollTop: posicion
       }, 1500);
    });
///////////////////////////////////////////////////////////////////////////////
