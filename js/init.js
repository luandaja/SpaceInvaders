(function($){
  $(function(){

    $('.button-collapse').sideNav();
    var texto = "Felipe hola!";

	$( "#demo" ).text(function() {
		return texto;
	});
  });
})(jQuery); 