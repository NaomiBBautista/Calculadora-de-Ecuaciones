function findCubicRoots(a, b, c, d) {
  var roots = [];

  // Función para calcular el valor de la ecuación cúbica
  function cubicFunction(x) {
    return a * Math.pow(x, 3) + b * Math.pow(x, 2) + c * x + d;
  }

  // Función para calcular la derivada de la ecuación cúbica
  function cubicDerivative(x) {
    return 3 * a * Math.pow(x, 2) + 2 * b * x + c;
  }

  // Método de Newton-Raphson para encontrar las raíces
  function newtonRaphson(x0, epsilon, maxIterations) {
    var xi = x0;
    var iterations = 0;

    while (Math.abs(cubicFunction(xi)) > epsilon && iterations < maxIterations) {
      xi = xi - cubicFunction(xi) / cubicDerivative(xi);
      iterations++;
    }

    return { root: xi, iterations: iterations };
  }

  // Buscar todas las raíces
  // Buscar todas las raíces
  var x0 = -5; // Valor de inicio para el método de Newton-Raphson
  var increment = 5; // Cantidad para aumentar el valor de inicio en cada iteración
  var epsilon = 0.000000000000000000001; // Tolerancia para la convergencia
  var maxIterations = 100; // Número máximo de iteraciones permitidas

  var output = "Raices encontradas: \n";

  while (roots.length < 3) {
    var result = newtonRaphson(x0, epsilon, maxIterations);
    roots.push(result.root);
    x0 += increment; // Aumentar el valor de inicio para encontrar la siguiente raíz
    output += "\nRaíz encontrada: " + result.root.toFixed(10) + " en " + result.iterations + " iteraciones.\n";
  }

  document.getElementById("result2").innerHTML = output;
  return roots;
}

function resolverNewton() {
  var coefficientA = parseFloat(document.getElementById("coefficientA").value);
  var coefficientB = parseFloat(document.getElementById("coefficientB").value);
  var coefficientC = parseFloat(document.getElementById("coefficientC").value);
  var coefficientD = parseFloat(document.getElementById("coefficientD").value);

  if (isNaN(coefficientA) || isNaN(coefficientB) || isNaN(coefficientC)) {
    document.getElementById("result").innerHTML = "Ingrese valores numéricos para los coeficientes a, b y c.";
    return;
  }

  if (!isNaN(coefficientD)) {
    // Ecuación de tercer grado
    var coefficients =
    {
      a: coefficientA,
      b: coefficientB,
      c: coefficientC,
      d: coefficientD,
    }
  }

  else {
    // Convertir ecuación de segundo grado a ecuación de tercer grado
    var coefficients =
    {
      a: 0,
      b: coefficientA,
      c: coefficientB,
      d: coefficientC,
    }
  }

  var root = findCubicRoots(coefficients.a, coefficients.b, coefficients.c, coefficients.d);
  document.getElementById("result").innerHTML = root;
}

