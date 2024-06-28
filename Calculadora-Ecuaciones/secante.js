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

function Secant(x0, x1, epsilon, maxIterations) {
    let x2, f0, f1, f2;
    let iterations = 0;
    let roots = [];

    do {
        f0 = Function(x0);
        f1 = Function(x1);
        x2 = x1 - f1 * ((x1 - x0) / (f1 - f0));
        f2 = Function(x2);

        x0 = x1;
        x1 = x2;
        iterations++;

        if (Math.abs(f2) < epsilon) {
            roots.push({ root: x2, iterations: iterations });
        }
    } while (iterations < maxIterations);

    if (roots.length > 0) {
        return roots;
    } else {
        // Si no se encontraron raíces, buscar la raíz más cercana al índice de error
        let minErrorIndex = -1;
        let minError = Number.MAX_VALUE;

        for (let i = 0; i < iterations; i++) {
            let currentX = x0 + ((i / iterations) * (x1 - x0));
            let currentError = Math.abs(Function(currentX));

            if (currentError < minError) {
                minError = currentError;
                minErrorIndex = i;
            }
        }

        return [{ root: x0 + ((minErrorIndex / iterations) * (x1 - x0)), iterations: iterations }];
    }
}

function resolverSecante() {
    // Rangos iniciales
    let rangos = [
        { x0: 0, x1: 2 },
        { x0: 2, x1: 4 },
        { x0: 4, x1: 6 },
        { x0: 6, x1: 8 },
        { x0: 8, x1: 10 },
        { x0: 0, x1: -2 },
        { x0: -2, x1: -4 },
        { x0: -4, x1: -6 },
        { x0: -6, x1: -8 },
        { x0: -8, x1: -10 }
    ];

    // Precisión deseada
    let epsilon = 0.000000000000000000001;

    // Número máximo de iteraciones
    let maxIterations = 1000;

    try {
        let output2 = "Se encontraron las siguientes raíces:<br>";
        let foundRoots = []; // Array para almacenar las raíces encontradas
        let output = "";

        for (let i = 0; i < rangos.length; i++) {
            let { x0, x1 } = rangos[i];
            let results = Secant(x0, x1, epsilon, maxIterations);

            if (results.length > 0) {
                results.forEach((result) => {
                    // Verificar si la raíz ya existe en el registro
                    let rootExists = foundRoots.some((root) => root === result.root);

                    if (!rootExists) {
                        foundRoots.push(result.root);
                        output += `Raíz: ${result.root} | Iteraciones: ${result.iterations}<br>`;
                    }
                });
            }
        }

        if (output === "Se encontraron las siguientes raíces:<br>") {
            // No se encontraron raíces, mostrar la raíz más cercana al índice de error
            output = `La raíz más cercana al índice de error es: ${foundRoots[0].root} | Iteraciones: ${foundRoots[0].iterations}`;
        }

        document.getElementById("result").innerHTML = output2;
        document.getElementById("result2").innerHTML = output;
    } catch (error) {
        document.getElementById("result").innerHTML = error.message;
    }
}
