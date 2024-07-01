# Bisección:

![Imagen Bisección](main/Calculadora-Ecuaciones/imagenes/metodo2.png)

Descripción del proceso:
1. Inicio: Inicie el diagrama de flujo.
2. Entrada de datos: Solicite al usuario que ingrese la ecuación que desea resolver y los límites de la región donde se encuentra la raíz. Estos límites deben ser dos números reales, a y b, tales que `f(a)` y `f(b)` tengan signos opuestos, lo que garantiza la existencia de al menos una raíz en el intervalo `[a, b]`.
3. Definir el error: Solicite al usuario que ingrese el nivel de precisión deseado, es decir, el error máximo permitido en la aproximación de la raíz. Este valor se puede expresar como un número real positivo o como un porcentaje de la longitud del intervalo `[a, b]`.
4. Definir el número máximo de iteraciones: Solicite al usuario que ingrese el número máximo de iteraciones permitidas para encontrar la raíz. Este valor ayuda a prevenir una posible ejecución infinita del algoritmo si no se alcanza la convergencia.
5. Calcular la raíz utilizando el método de bisección: 
   * Establecer la variable i en cero.
   * Mientras i no supere el número máximo de iteraciones:
     - Calcular el punto medio c del intervalo `[a, b]`.
     - Evaluar `f(c)`.
     - Si `f(c)` es igual a cero o si `f(c)` es menor que el error deseado, c es la solución. Terminar la         ejecución del algoritmo.
     - De lo contrario, determinar si la raíz se encuentra en el subintervalo `[a, c]` o `[c, b]` en función del signo de `f(a)` y `f(c)` o de `f(c)` y `f(b)`, respectivamente.
     - Acotar el nuevo intervalo de búsqueda al subintervalo que contiene la raíz.
     - Incrementar el contador de iteraciones i en uno.
   * Si no se ha encontrado una solución después de i iteraciones, mostrar un mensaje de error y terminar la ejecución del
    algoritmo.
7. Salida de resultados: Muestre al usuario la raíz encontrada y el número de iteraciones necesarias para alcanzar la solución.
8. Fin: Finalice el diagrama de flujo.
