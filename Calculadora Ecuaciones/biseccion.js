let x, lim0, lim1, xm;
let it = 0;
let roots = [];

function cubicEquation(x) {
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

function CubicBisection(x0, x1, equation, error) {
    x = x0;
    lim0 = equation(x);
    lim1 = equation(x1);

    if (lim0 * lim1 < 0) {
        xm = (x0 + x1) / 2;
        x = xm;
        lim1 = equation(x);

        while (lim0 * lim1 != 0 && Math.abs(x1 - x0) > error) {
            if (lim0 * lim1 < 0) {
                x1 = xm;
                xm = (x0 + x1) / 2;
                x = xm;
                lim1 = equation(x);
            }

            if (lim0 * lim1 > 0) {
                x0 = xm;
                xm = (x0 + x1) / 2;
                x = xm;
                lim1 = equation(x);
            }

            it++;
        }

        if (lim0 * lim1 === 0) {
            // Verificar si la raíz ya existe en la lista antes de agregarla
            if (!roots.includes(xm)) {
                roots.push(xm);
            }
        }
    }
}


function findClosestRoot(x0, x1, equation) {
    let closestRoot = null;
    let closestError = Infinity;

    for (let i = x0; i <= x1; i += 0.1) {
        let error = Math.abs(equation(i));
        if (error < closestError) {
            closestError = error;
            closestRoot = i;
        }
    }

    return closestRoot;
}

function resolverBi() {
    let output = "Las raíces encontradas son: ";

    roots = [];

    let ranges = [
        //Rangos de 1 a 1
        { x0: -10, x1: -9 },
        { x0: -9, x1: -8 },
        { x0: -8, x1: -7 },
        { x0: -7, x1: -6 },
        { x0: -6, x1: -5 },
        { x0: -5, x1: -4 },
        { x0: -4, x1: -3 },
        { x0: -3, x1: -2 },
        { x0: -2, x1: -1 },
        { x0: -1, x1: 0 },
        { x0: 0, x1: 1 },
        { x0: 1, x1: 2 },
        { x0: 2, x1: 3 },
        { x0: 3, x1: 4 },
        { x0: 4, x1: 5 },
        { x0: 5, x1: 6 },
        { x0: 6, x1: 7 },
        { x0: 7, x1: 8 },
        { x0: 8, x1: 8 },
        { x0: 9, x1: 10 },

        //Rangos de 2 en 2
        { x0: -10, x1: -8 },
        { x0: -8, x1: -6 },
        { x0: -6, x1: -4 },
        { x0: -4, x1: -2 },
        { x0: -2, x1: 0 },
        { x0: 0, x1: 2 },
        { x0: 2, x1: 4 },
        { x0: 4, x1: 6 },
        { x0: 6, x1: 8 },
        { x0: 8, x1: 10 },

        //Rangos de 3 en 3
        { x0: -10, x1: -8 },
        { x0: -8, x1: -5 },
        { x0: -5, x1: -3 },
        { x0: -3, x1: 0 },
        { x0: 0, x1: 3 },
        { x0: 3, x1: 5 },
        { x0: 5, x1: 8 },
        { x0: 8, x1: 10 },

        //Raices de 4 en 4
        { x0: -10, x1: -6 },
        { x0: -6, x1: -4 },
        { x0: -4, x1: 0 },
        { x0: 0, x1: 4 },
        { x0: 4, x1: 6 },
        { x0: 6, x1: 10 },

        //Raices de 5 en 5
        { x0: -10, x1: -5 },
        { x0: -5, x1: 0 },
        { x0: 0, x1: 5 },
        { x0: 5, x1: 10 },

        //Raices de 10 en 10
        { x0: -10, x1: 0 },
        { x0: 0, x1: 10 },
        { x0: -10, x1: 10 }
    ];

    let error = 0.000000000000000000001;

    for (let range of ranges) {
        it = 0; // Reiniciar el contador de iteraciones para cada rango
        CubicBisection(range.x0, range.x1, cubicEquation, error);
    }

    if (roots.length > 0) {
        output += roots.join(", ") + " en " + it + " iteraciones.";
    }
    else {
        output += "No se encontraron raíces. La raíz más cercana al error establecido es: " + findClosestRoot(-10, 10, cubicEquation);
    }

    document.getElementById("result").innerHTML = output;
}
