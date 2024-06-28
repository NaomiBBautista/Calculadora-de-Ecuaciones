function Function(x) {
    // Función de ecuación cúbica f(x) = ax^3 + bx^2 + cx + d
    var coefficientA = parseFloat(document.getElementById("coefficientA").value);
    var coefficientB = parseFloat(document.getElementById("coefficientB").value);
    var coefficientC = parseFloat(document.getElementById("coefficientC").value);
    var coefficientD = parseFloat(document.getElementById("coefficientD").value);

    if (isNaN(coefficientA) || isNaN(coefficientB) || isNaN(coefficientC)) {
        document.getElementById("result").innerHTML = "Ingrese valores numéricos para los coeficientes a, b y c.";
        return;
    }

    let a, b, c, d;

    if (!isNaN(coefficientD)) {
        // Ecuación de tercer grado
        a = coefficientA;
        b = coefficientB;
        c = coefficientC;
        d = coefficientD;
    } else {
        // Convertir ecuación de segundo grado a ecuación de tercer grado
        a = 0;
        b = coefficientA;
        c = coefficientB;
        d = coefficientC;
    }

    return a * Math.pow(x, 3) + b * Math.pow(x, 2) + c * x + d;
}

function FunctionDerivative(x) {
    // Derivada de la función de ecuación cúbica f'(x) = 3ax^2 + 2bx + c
    var coefficientA = parseFloat(document.getElementById("coefficientA").value);
    var coefficientB = parseFloat(document.getElementById("coefficientB").value);
    var coefficientC = parseFloat(document.getElementById("coefficientC").value);

    if (isNaN(coefficientA) || isNaN(coefficientB) || isNaN(coefficientC)) {
        document.getElementById("result").innerHTML = "Ingrese valores numéricos para los coeficientes a, b y c.";
        return;
    }

    let a, b, c;

    if (!isNaN(coefficientD)) {
        // Ecuación de tercer grado
        a = coefficientA;
        b = coefficientB;
        c = coefficientC;
    } else {
        // Convertir ecuación de segundo grado a ecuación de tercer grado
        a = 0;
        b = coefficientA;
        c = coefficientB;
    }

    return 3 * a * Math.pow(x, 2) + 2 * b * x + c;
}

function MultipleRoots(x0, epsilon, maxIterations) {
    let x = x0;
    let iterations = 0;
    let roots = [];

    do {
        let f = Function(x);
        let fPrime = FunctionDerivative(x);

        x = x - (f / fPrime);
        iterations++;

        if (Math.abs(f) < epsilon) {
            roots.push({ root: x, iterations: iterations });
        }
    } while (iterations < maxIterations);

    if (roots.length > 0) {
        return roots;
    } else {
        // Si no se encontraron raíces, buscar la raíz más cercana al índice de error
        let minErrorIndex = -1;
        let minError = Number.MAX_VALUE;

        for (let i = 0; i < iterations; i++) {
            let currentX = x0 + ((i / iterations) * (x - x0));
            let f = Function(currentX);
            let error = Math.abs(f);

            if (error < minError) {
                minError = error;
                minErrorIndex = i;
            }
        }

        return [{ root: x0 + ((minErrorIndex / iterations) * (x - x0)), iterations: iterations }];
    }
}

function resolverRaices() {
    // Rangos iniciales
    let rangos = [
        { x0: 0 },
        { x0: -1 },
        { x0: -2 },
        { x0: -3 },
        { x0: -4 },
        { x0: -5 },
        { x0: -6 },
        { x0: -7 },
        { x0: -8 },
        { x0: -9 },
        { x0: -10 },
        { x0: 1 },
        { x0: 2 },
        { x0: 3 },
        { x0: 4 },
        { x0: 5 },
        { x0: 6 },
        { x0: 7 },
        { x0: 8 },
        { x0: 9 },
        { x0: 10 }
    ];

    // Precisión deseada
    let epsilon = 0.000000000000000000001;

    // Número máximo de iteraciones
    let maxIterations = 1000;

    try {
        let output = "Se encontraron las siguientes raíces:<br>";
        let foundRoots = []; // Array para almacenar las raíces encontradas

        for (let i = 0; i < rangos.length; i++) {
            let { x0 } = rangos[i];
            let results = MultipleRoots(x0, epsilon, maxIterations);

            if (results.length > 0) {
                results.forEach((result) => {
                    // Verificar si la raíz ya existe en el registro
                    let rootExists = foundRoots.some((root) => root === result.root);

                    if (!rootExists && !isNaN(result.root)) {
                        foundRoots.push(result.root);
                        output += `Raíz: ${result.root} | Iteraciones: ${result.iterations}<br>`;
                    }
                });
            }
        }

        if (output === "Se encontraron las siguientes raíces:<br>") {
            output = "No se encontraron raíces.";
        }

        document.getElementById("result").innerHTML = output;
    } catch (error) {
        document.getElementById("result").innerHTML = error.message;
    }
}
