function Function(a, b, c, d, x) {
    return a * Math.pow(x, 3) + b * Math.pow(x, 2) + c * x + d;
}

function FixedPointFunction(a, b, c, d, x) {
    return -Function(a, b, c, d, x) / (3 * a * Math.pow(x, 2) + 2 * b * x + c);
}

function FixedPoint(a, b, c, d, x0, epsilon, maxIterations) {
    let x = x0;
    let iterations = 0;
    let roots = [];

    while (iterations < maxIterations) {
        let nextX = FixedPointFunction(a, b, c, d, x);

        if (Math.abs(nextX - x) < epsilon) {
            roots.push({ root: nextX, iterations: iterations });
        }

        x = nextX;
        iterations++;
    }

    if (roots.length > 0) {
        return roots;
    } else {
        throw new Error("El método de punto fijo no converge después de las iteraciones máximas.");
    }
}

function resolverPunto() {
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
    let epsilon = 0.000000000001;

    // Número máximo de iteraciones
    let maxIterations = 1000;

    try {
        let output = "Se encontraron las siguientes raíces:<br>";
        let foundRoots = []; // Array para almacenar las raíces encontradas
        let nearestRootIndex = -1; // Índice de la raíz más cercana al índice de error establecido
        let nearestRootIterations = Number.MAX_VALUE; // Número de iteraciones de la raíz más cercana

        for (let i = 0; i < rangos.length; i++) {
            let { x0 } = rangos[i];
            let results = FixedPoint(a, b, c, d, x0, epsilon, maxIterations);

            if (results.length > 0) {
                results.forEach((result) => {
                    // Verificar si la raíz ya existe en el registro
                    let rootExists = foundRoots.some((root) => root === result.root);

                    if (!rootExists) {
                        foundRoots.push(result.root);
                        output += `Raíz: ${result.root} | Iteraciones: ${result.iterations}<br>`;
                    }

                    // Verificar si la raíz actual es más cercana al índice de error establecido
                    if (Math.abs(result.iterations - maxIterations) < nearestRootIterations) {
                        nearestRootIndex = foundRoots.length - 1;
                        nearestRootIterations = Math.abs(result.iterations - maxIterations);
                    }
                });
            }
        }

        if (output === "Se encontraron las siguientes raíces:<br>") {
            output = "No se encontraron raíces.";
        }

        if (nearestRootIndex !== -1) {
            output += `<br>Raíz más cercana al índice de error: ${foundRoots[nearestRootIndex]} | Iteraciones: ${maxIterations - nearestRootIterations}`;
        }

        document.getElementById("result").innerHTML = output;
    } catch (error) {
        document.getElementById("result").innerHTML = error.message;
    }
}
