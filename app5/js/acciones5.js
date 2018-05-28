// JavaScript Document
$(document).ready(function(e){
	document.addEventListener("deviceready",function(){
		$('#beep').tap(function(){
			navigator.notification(2);
		});//Cierre del tap de beep
		$('#vibrar').tap(function(){
			navigator.notification.vibrate(2000);//va a vibrar 2 segundos
		});//cierre del tap de vibrar
	}, false);//cierre del listener 
}); //cierre de la funcion principal