(function($){
  $(function(){

    $('.button-collapse').sideNav();

    var texto = "1. Space Invaders es un matamarciano clásico en dos dimensiones. El jugador controla un cañón que puede moverse a la derecha o izquierda y un botón de disparo. Tiene que ir destruyendo los extraterrestres invasores (de los cuales hay tres tipos: con forma de calamar, de cangrejo y de pulpo) que van acercándose a la tierra cada vez más rápidamente a medida que el jugador va destruyendo a los enemigos. Este ciclo se puede repetir en forma indefinida. Si los invasores llegan al cañón controlado por el jugador, el juego termina.Cada cierto tiempo aparece en la pantalla, por encima de los invasores, un platillo volador que se mueve aleatoriamente de derecha a izquierda o de izquierda a derecha y que no agrega una puntuación definida, sino puntos extras en cantidades aleatorias. Además se tienen cuatros escudos de protección terrestre (más parecidos a búnkeres) que cubren al jugador del fuego alienígena, pero que son destruidos gradualmente por los disparos de los invasores y el cañón del jugador"
	$( "#como").text(function() {
		return texto;
	});
	
  });
})(jQuery); 