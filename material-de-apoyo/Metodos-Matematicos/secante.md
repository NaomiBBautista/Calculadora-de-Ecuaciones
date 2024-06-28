# Secante:

![Método Secante](imagenes/metodo5.png)

Descripción del proceso:
1. Comienza el diagrama de flujo con el inicio del programa.
2. Crea las variables necesarias, como `x0` y `x1`, para almacenar los valores iniciales de las aproximaciones para la secante. También crea una variable 'tolerancia' para determinar cuándo consideraremos que hemos encontrado una solución aceptable.
3. Pide al usuario que ingrese la función que desea resolver y los valores iniciales `x0` y `x1`. Almacena estos valores en las variables correspondientes.
4. Calcula el valor de la función para `x0` y `x1` utilizando la ecuación que se desea resolver. Almacena estos resultados en variables separadas, como `f0` y `f1`.
5. Crea un ciclo que se repita hasta que se cumpla una condición de terminación. La condición de terminación puede ser cuando la diferencia absoluta entre `x1` y `x0` sea menor que la 'tolerancia' establecida.
6. Dentro del ciclo, calcula la siguiente aproximación utilizando la fórmula de la secante:

        x2 = x1 - (f1 * (x1 - x0)) / (f1 - f0)

7. Calcula el valor de la función para `x2` y almacénalo en una variable `f2`.
8. Verifica si `f2` es lo suficientemente cercano a cero como para considerarlo una solución aceptable. Si es así, muestra `x2` como la raíz encontrada y termina el programa.
9. Si `f2` no es una solución aceptable, actualiza los valores de `x0`,`x1`,`f0` y `f1` para preparar el siguiente ciclo. Asigna: 

           x1 = x0, f1 = f0, x2 = x1, f2 = f1

10. Regresa al paso 6 y repite el ciclo hasta que se cumpla la condición de terminación.
11. Una vez que la condición de terminación se cumpla, muestra el valor final de `x2` como la raíz encontrada y muestra el valor de la función para `x2` como la solución de la ecuación.
12. Finaliza el diagrama de flujo con el fin del programa.
