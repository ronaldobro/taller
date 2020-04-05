$(document).ready(function(){
	

var preguntaBuenas=0;
var preguntasMala=0;
var pregunta=-1;

var contador=1;

$('#pregunta1').hide();
$('#pregunta2').hide();
$('#pregunta3').hide();
$('#pregunta4').hide();
$('#pregunta5').hide();
$('#pregunta6').hide();
$('#pregunta7').hide();
$('#pregunta8').hide();
$('#pregunta9').hide();
$('.columnaA').hide();
	


	$('#formulario').submit(function(e){
		 
           let nombre = $("#nombre").val();
           let apellido = $("#apellido").val();

           $("#navNombre").text(nombre);
           $("#navApellido").text(apellido);
           if(!nombre=="" && !apellido==""){
             
             pregunta++;
            $('#pregunta1').show(); 
            $('.columnaA').show();
            $('#pregunta2').hide();
            $('#pregunta3').hide();
            $('#pregunta4').hide();
            $('#pregunta5').hide();
            $('#pregunta6').hide();
            $('#pregunta7').hide();
            $('#pregunta8').hide();
            $('#pregunta9').hide();
            $('#primera').text(pregunta);
            $('#atras').css({'background':'#B7EFE0'});
            $('#atras').attr("disabled", true);

           }
         
         $('#formulario').trigger('reset');
          $('#formulario').hide(); 
              e.preventDefault()
           
});

$('#siguiente').click(function(){
  	  
   switch(contador){
    case 1:
    $('#pregunta1').hide(); 
    $('#pregunta2').show(); 
    contador++;
    $("#atras").removeAttr('disabled');
    $('#atras').css({'background':'#0D67A2'});
    break;


   	case 2:
   	$('#pregunta2').hide(); 
    $('#pregunta3').show(); 
    
   	contador++;
   	break;

   	case 3:
    $('#pregunta3').hide(); 
    $('#pregunta4').show(); 
    contador++;
   	  break;

   	 case 4:
       $('#pregunta4').hide(); 
       $('#pregunta5').show();
       contador++;
   	 break;

   	  case 5:
         $('#pregunta5').hide(); 
         $('#pregunta6').show();
         contador++;
   	  break;

   	   case 6:
         $('#pregunta6').hide(); 
         $('#pregunta7').show();
         contador++;
   	  break;
        case 7:
         $('#pregunta7').hide(); 
         $('#pregunta8').show();
         contador++;
   	  break;

   	   case 8:
         $('#pregunta8').hide(); 
         $('#pregunta9').show();
         $('#siguiente').attr("disabled", true);
         $('#siguiente').css({'background':'white'});
         contador++;
   	  break;

        
}
	});

$('#atras').click(function(){

     if(contador>1){
     	 switch(contador){
         case 2:
           $('#pregunta2').hide();
	       $('#pregunta1').show();
	       $('#atras').css({'background':'#B7EFE0'});
	        contador--;    
         break;
          case 3:
           $('#pregunta3').hide();
	       $('#pregunta2').show();
	       $('#atras').css({'background':'#0D67A2'});
	       contador--;    
         break;
          case 4:
           $('#pregunta4').hide();
	       $('#pregunta3').show();
	       $('#atras').css({'background':'#0D67A2'});
	       contador--;
	           
         break;
          case 5:
           $('#pregunta5').hide();
	       $('#pregunta4').show();
	       $('#atras').css({'background':'#0D67A2'});
	       contador--;    
         break;
           case 6:
           $('#pregunta6').hide();
	       $('#pregunta5').show();
	       $('#atras').css({'background':'#0D67A2'});
	       contador--;    
         break;
           case 7:
           $('#pregunta7').hide();
	       $('#pregunta6').show();
	       $('#atras').css({'background':'#0D67A2'});
	       contador--;    
         break;
          case 8:
           $('#pregunta8').hide();
	       $('#pregunta7').show();
	       $('#atras').css({'background':'#0D67A2'});
	       $('#siguiente').removeAttr('disabled');
	        $('#siguiente').css({'background':'#0D67A2'});
	       contador--;    
         break;

          case 9:
           $('#pregunta9').hide();
	       $('#pregunta8').show();
	       $('#atras').css({'background':'#0D67A2'});
	       contador--;   
	       $('#siguiente').removeAttr('disabled'); 
	       $('#siguiente').css({'background':'#0D67A2'});
         break;


       }
     }
	});


$('#pregunta1').submit(function(e){
	pregunta++;
	var pre1=""; 

	  pre1 = $("#sel1").val();
	
	if(pre1=="13"){
		$('#pregunta1').hide();
		$('#pregunta2').show();
		$("#btn1").css({'background':'#1CECE3','color':'white'});
        $("#prog1").css({'background':'#8017AD'});
        $('#primera').text(pregunta);
        $("#atras").removeAttr('disabled');
        $('#atras').css({'background':'#0D67A2'});
        preguntaBuenas++;
        contador++;
	}else{
		$('#pregunta1').hide();
		$('#pregunta2').show();
		$("#btn1").css({'background':'#EC1C71','color':'white'});
		$("#prog1").css({'background':'#8017AD'});
		$('#primera').text(pregunta);
		$("#atras").removeAttr('disabled');
        $('#atras').css({'background':'#0D67A2'});
		preguntasMala++;
		contador++;
	}
		


 e.preventDefault();
	});

$('#pregunta2').submit(function(e){
	pregunta++;
	var pre2=""; 

	  pre2 = $("#sel2").val();
	
	if(pre2=="12"){
      	$('#pregunta2').hide();
		$('#pregunta3').show();
		$("#btn2").css({'background':'#1CECE3','color':'white'});
		$("#prog2").css({'background':'#8017AD'});
		$('#primera').text(pregunta);
		 preguntaBuenas++;
		 contador++;
	}else{
		 $('#pregunta2').hide();
		 $('#pregunta3').show();
		 $("#btn2").css({'background':'#EC1C71','color':'white'});
		 $("#prog2").css({'background':'#8017AD'});
		 $('#primera').text(pregunta);
		 preguntasMala++;
		 contador++;
	}

 e.preventDefault();
	});



$('#pregunta3').submit(function(e){
	pregunta++;
	var pre3=""; 

	  pre3 = $("#sel3").val();
	
	if(pre3=="3"){
		$('#pregunta3').hide();
		$('#pregunta4').show();
		$("#btn3").css({'background':'#1CECE3','color':'white'});
        $("#prog3").css({'background':'#8017AD'});
        $('#primera').text(pregunta);
         preguntaBuenas++;
         contador++;
	}else{
	 $('#pregunta3').hide();
	 $('#pregunta4').show();
	 $("#btn3").css({'background':'#EC1C71','color':'white'});
	 $("#prog3").css({'background':'#8017AD'});
	 $('#primera').text(pregunta);
	 preguntasMala++;
	 contador++;
	}
   

 e.preventDefault();
	});


$('#pregunta4').submit(function(e){

	var pre4=""; 
   pre4 = $("#sel4").val();
	
	if(pre4=="5"){
      $('#pregunta4').hide();
	  $('#pregunta5').show();
	  $("#btn4").css({'background':'#1CECE3','color':'white'});
	  $("#prog4").css({'background':'#8017AD'});
	  $('#primera').text(pregunta);
	   preguntaBuenas++;
	   contador++;
	}else{
	  $('#pregunta4').hide();
	  $('#pregunta5').show();
	  $("#btn4").css({'background':'#EC1C71','color':'white'});
	  $("#prog4").css({'background':'#8017AD'});
	  $('#primera').text(pregunta);
	  preguntasMala++;
	  contador++;
	}
   
      e.preventDefault();

	});

$('#pregunta5').submit(function(e){
	pregunta++;
	var pre5=""; 

	  pre5 = $("#sel5").val();
	
	if(pre5=="31"){
	  $('#pregunta5').hide();
	  $('#pregunta6').show();
      $("#btn5").css({'background':'#1CECE3','color':'white'});
      $("#prog5").css({'background':'#8017AD'});
      $('#primera').text(pregunta);
       preguntaBuenas++;
       contador++;
	}else{
	 $('#pregunta5').hide();
	 $('#pregunta6').show();
	 $("#btn5").css({'background':'#EC1C71','color':'white'});
	 $("#prog5").css({'background':'#8017AD'});
	 $('#primera').text(pregunta);
	preguntasMala++;
	contador++;
	}
	
e.preventDefault();
	});


$('#pregunta6').submit(function(e){
	pregunta++;
	var pre6=""; 

	  pre6 = $("#sel6").val();
	
	if(pre6=="38"){
	  $('#pregunta6').hide();
	  $('#pregunta7').show();
	  $("#btn6").css({'background':'#1CECE3','color':'white'});
      $("#prog6").css({'background':'#8017AD'});
      $('#primera').text(pregunta);
       preguntaBuenas++;
       contador++;
	}else{
		$('#pregunta6').hide();
	    $('#pregunta7').show();
	    $("#btn6").css({'background':'#EC1C71','color':'white'});
	    $("#prog6").css({'background':'#8017AD'});
	    $('#primera').text(pregunta);
	    preguntasMala++;
	    contador++;
	}
	
 e.preventDefault();
	});

$('#pregunta7').submit(function(e){
	pregunta++;
	var pre7=""; 

	  pre7 = $("#sel7").val();
	
	if(pre7==="45"){
	 $('#pregunta7').hide();
	  $('#pregunta8').show();
	  $("#btn7").css({'background':'#1CECE3','color':'white'});
      $("#prog7").css({'background':'#8017AD'});
      $('#primera').text(pregunta);
       preguntaBuenas++;
       contador++;
	}else{
	 $('#pregunta7').hide();
	 $('#pregunta8').show();
	 $("#btn7").css({'background':'#EC1C71','color':'white'});
	 $("#prog7").css({'background':'#8017AD'});
   	 $('#primera').text(pregunta);
	preguntasMala++;
	contador++;
	}

e.preventDefault();
	});


$('#pregunta8').submit(function(e){
	pregunta++;
	var pre1=""; 

	  pre8 = $("#sel8").val();
	
	if(pre8=="1350"){
      $('#pregunta8').hide();
	  $('#pregunta9').show();
	  $("#btn8").css({'background':'#1CECE3','color':'white'});
	  $("#prog8").css({'background':'#8017AD'});
	  $('#primera').text(pregunta);
	  preguntaBuenas++;
	  contador++;
	}else{
      $('#pregunta8').hide();
	  $('#pregunta9').show();
	  $("#btn8").css({'background':'#EC1C71','color':'white'});
	  $("#prog8").css({'background':'#8017AD'});
	  $('#primera').text(pregunta);
	  preguntasMala++;
	  contador++;
	}

 e.preventDefault();
	});

$('#pregunta9').submit(function(e){
	pregunta++;
	var pre9=""; 
    pre9 = $("#sel9").val();
	
	if(pre9==="22"){
      $('#pregunta9').hide();
	  $("#btn9").css({'background':'#1CECE3','color':'white'});
	  $("#prog9").css({'background':'#8017AD'});
	  $('#primera').text(pregunta);
       preguntaBuenas++;
      
	}else{
	  $('#pregunta9').hide();
	  $("#btn9").css({'background':'#EC1C71','color':'white'});
	  $("#prog9").css({'background':'#8017AD'});
	  $('#primera').text(pregunta);
	   preguntasMala++;

	}
    
    resultado();

 e.preventDefault();
	});



 function resultado(){
 
    if(preguntaBuenas > 5){
    alert("Aprobado, su resultado fue: "+ preguntaBuenas +" acertadas");
    }
   else{
    alert("Reprobado, su resultado fue: "+ preguntasMala + " acertadas");
    }
    alert();

 }

});