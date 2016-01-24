#Sass en toda la paleta!

Y entonces llega el diseñador y te dice: "Vamos a hacer un sistema de colores para diferenciar las categorías. Van a ser 6 paletas, cada una compuesta de un degradado de 10 niveles" y te pasa un fantástico archivo de Illustrator con las paletas creadas con la herramienta blend.

Tú ya te pones a pensar como llevar eso al CSS, "vale, podemos crear una variable por paleta (con el nombre de la categoría, claro, por eso de la semántica) y las numeramos del 1 al 10 para los niveles del degradado. Luego sera fácil mapearlas a una clase. Sí, es un coñazo pero se puede hacer..."

"Ah, pero mira que que esos no son los colores definitivos, ni siquiera estoy seguro que tengan que ser 10 niveles, habrá que decidirlo mientras prototipamos."

"...."

"Sí, y puede que caigan más categorías"

"Pfdjejsiikk, Diego, la p... madre que te parió..." ( aunque él sólo ve una sonrisa)

Gracias a dios que existe Sass.



### Manos a la obra.

El primer paso ( y el mas difícil) era crear una función a la cual, pasándole 2 colores y una x cantidad de pasos, generara un degradado con tantos niveles como pasos entre los dos colores (incluidos).

Buceando un poco por Google encontré [este post en Stack Overflow](http://stackoverflow.com/questions/18797554/how-to-generate-a-stepped-gradation-between-two-specific-colors-into-separate-cl) justo con lo que necesitaba.


## Core

(Explicación de la función)

Después de esto solo quedaba un poco de redactor para que sea mas fácil de reutilizar y cambiar los parámetros.



Cuando se habla de prototipar siempre surgen muchisimas herramientas (que si Invision, que si Proto.io, alguno que insiste con Balsamiq, etc) pero hay cosas que solo podemos ver con HTML.

En el proyecto de FJE nos encontramos varias, esta de los colores fue una, pero también hubo animaciones y un responsive bastante radical.

Cualquier front que quiera acelerar su proceso de trabajo e iterar mas rápido tendría que echarle un ojo a las partes mas avanzadas de Sass (o Less, si tu libro favorito es 50 Sombras de Gray), ayuda mucho. Know your tools.