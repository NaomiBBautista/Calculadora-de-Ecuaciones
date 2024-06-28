**Gráfico**:

![Método Gráfico](imagenes/metodo1.png)

Descripción del proceso:
1. Inicio: El programa comienza aquí.
2. Leer la ecuación: Solicitar al usuario que ingrese la ecuación y almacenarla en una variable llamada
"ecuacion".
3. Crear la ventana de gráficos: Crear una ventana gráfica utilizando la biblioteca gráfica adecuada.
4. Establecer los ejes: Definir las coordenadas de los ejes X e Y en la ventana gráfica.
5. Definir los límites del rango: Preguntar al usuario los valores mínimos y máximos para el rango del eje X y
almacenarlos en variables llamadas "minX" y "maxX", respectivamente.
6. Calcular los puntos del gráfico: Utilizar un bucle para calcular los puntos (x, y) de la ecuación en el rango
especificado. Incrementar el valor de x en incrementos pequeños y almacenar cada punto en una lista de
puntos llamada "puntos".
- Inicializar una lista de puntos vacía llamada "puntos".
- Iniciar un bucle que comienza en "minX" y termina en "maxX", incrementando el valor de x en pequeños incrementos.
- Dentro del bucle, evaluar la ecuación para obtener el valor de y correspondiente a cada valor de x.
- Crear un objeto Punto con las coordenadas (x, y) y agregarlo a la lista "puntos".
7. Dibujar los puntos en la ventana gráfica: Utilizar la biblioteca gráfica para dibujar cada punto de la lista
"puntos" en la ventana gráfica.
8. Fin: El programa termina aquí.
