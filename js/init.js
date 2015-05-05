(function($){
  $(function(){

    $('.button-collapse').sideNav();

    var comoJugar = "1. Space Invaders es un matamarciano clásico en dos dimensiones. El jugador controla un cañón que puede moverse a la derecha o izquierda y un botón de disparo. Tiene que ir destruyendo los extraterrestres invasores (de los cuales hay tres tipos: con forma de calamar, de cangrejo y de pulpo) que van acercándose a la tierra cada vez más rápidamente a medida que el jugador va destruyendo a los enemigos. Este ciclo se puede repetir en forma indefinida. Si los invasores llegan al cañón controlado por el jugador, el juego termina.Cada cierto tiempo aparece en la pantalla, por encima de los invasores, un platillo volador que se mueve aleatoriamente de derecha a izquierda o de izquierda a derecha y que no agrega una puntuación definida, sino puntos extras en cantidades aleatorias. Además se tienen cuatros escudos de protección terrestre (más parecidos a búnkeres) que cubren al jugador del fuego alienígena, pero que son destruidos gradualmente por los disparos de los invasores y el cañón del jugador";

    var historiaJuego ="1.Space Invaders nació en 1978 por obra de Toshihiro Nishikado, un diseñador japonés de la Taito Corporation. El éxito del juego fue enorme y se transformó en un fenómeno comercial: al cabo de poco tiempo era posible comprar todo tipo de merchandising relacionado con esta creación, como libros , discos o camisetas.Además no tardaron en salir los primeros clones. Debido a que Space Invaders, aunque parezca imposible, no estaba sujeto a copyright, varios productores de videojuegos lo clonaron sacando a la venta juegos como: Space Invaders Deluxe, Super Invaders o Fast Invaders. El juego además tuvo innumerables adaptaciones a lo largo de los años, como: Space Invaders '95: The Attack Of Lunar Loonies, o la más reciente para Nintendo DS Space Invaders Extreme, así como diversas parodias tales como Adventure Invaders, Alienated, Atari Invaders, Coke Invaders (Pepsi Wins!), Pepsi Invaders (Coke Wins!), Rainbow Invaders, Spice Invaders, por sólo mencionar algunas.";

	$( "#como").text(function() {
		return comoJugar;
	});

	$( "#historia").text(function() {
		return historiaJuego;
	});
	
  });
})(jQuery); 