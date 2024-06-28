function FalsePosition(x0, x1, epsilon, maxIterations) {
    let f0, f1, f2;
    let iterations = 0;
    let roots = [];

    do {
        f0 = Function(x0);
        f1 = Function(x1);
        x2 = x1 - (f1 * (x1 - x0)) / (f1 - f0);
        f2 = Function(x2);

        if (f0 * f2 < 0) {
            x1 = x2;
        } else {
            x0 = x2;
        }

        iterations++;

        if (Math.abs(f2) < epsilon) {
            let rootExists = roots.some((root) => Math.abs(root.root - x2) < epsilon);

            if (!rootExists) {
                roots.push({ root: x2, iterations: iterations });
            }
        }
    } while (iterations < maxIterations);

    if (roots.length > 0) {
        return roots;
    } else {
        // No se encontraron raíces, buscar la raíz más cercana al índice de error
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

function resolverFalsa() {
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
    let epsilon = 0.000000000000000000000000000000000000000000000000001;

    // Número máximo de iteraciones
    let maxIterations = 1000;

    try {
        let output2 = "Se encontraron las siguientes raíces:<br>";
        let foundRoots = []; // Array para almacenar las raíces encontradas
        let output = "";

        for (let i = 0; i < rangos.length; i++) {
            let { x0, x1 } = rangos[i];
            let results = FalsePosition(x0, x1, epsilon, maxIterations);

            if (results.length > 0) {
                results.forEach((result) => {
                    let rootExists = foundRoots.some((root) => Math.abs(root.root - result.root) < epsilon);

                    if (!rootExists) {
                        foundRoots.push(result);
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
