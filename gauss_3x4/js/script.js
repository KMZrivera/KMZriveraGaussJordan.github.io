function calcular() {
    var a11 = parseFraction(document.getElementById("a1").value);
    var a12 = parseFraction(document.getElementById("a2").value);
    var a13 = parseFraction(document.getElementById("a3").value);
    var a14 = parseFraction(document.getElementById("a4").value);
    var a21 = parseFraction(document.getElementById("b1").value);
    var a22 = parseFraction(document.getElementById("b2").value);
    var a23 = parseFraction(document.getElementById("b3").value);
    var a24 = parseFraction(document.getElementById("b4").value);
    var a31 = parseFraction(document.getElementById("c1").value);
    var a32 = parseFraction(document.getElementById("c2").value);
    var a33 = parseFraction(document.getElementById("c3").value);
    var a34 = parseFraction(document.getElementById("c4").value);

    // Crear la matriz
    var matriz = [
        [a11, a12, a13, a14],
        [a21, a22, a23, a24],
        [a31, a32, a33, a34]
    ];

    // Resolver la matriz utilizando el método de Gauss-Jordan
    var solucion = resolverGaussJordan(matriz);

    // Mostrar la solución en la página
    mostrarSolucion(solucion);
}

// Función para convertir una cadena de fracción en un número decimal
function parseFraction(fraction) {
    var parts = fraction.split('/');
    if (parts.length === 2) {
        var numerator = parseFloat(parts[0]);
        var denominator = parseFloat(parts[1]);
        if (denominator !== 0) {
            return numerator / denominator;
        }
    }
    // Si no es una fracción válida, simplemente lo tratamos como un número decimal
    return parseFloat(fraction);
}

function resolverGaussJordan(matriz) {
    var tamaño = matriz.length;
    
    for (var i = 0; i < tamaño; i++) {
        // Paso 1: Hacer que el coeficiente en la diagonal sea 1
        var divisor = matriz[i][i];
        for (var j = 0; j < tamaño + 1; j++) {
            matriz[i][j] /= divisor;
        }
        
        // Paso 2: Hacer que todos los demás coeficientes en la columna sean 0
        for (var k = 0; k < tamaño; k++) {
            if (k !== i) {
                var factor = matriz[k][i];
                for (var l = 0; l < tamaño + 1; l++) {
                    matriz[k][l] -= factor * matriz[i][l];
                }
            }
        }
    }
    return matriz;
}

function mostrarSolucion(solucion) {
    var tamaño = solucion.length;
    var solucionHTML = "<h2 style='text-align: center;'>Solución del sistema de ecuaciones:</h2>";
    solucionHTML += "<table border='1'>";
    for (var i = 0; i < tamaño; i++) {
        solucionHTML += "<tr>";
        for (var j = 0; j < tamaño + 1; j++) {
            solucionHTML += "<td>" + solucion[i][j].toFixed(2) + "</td>";
        }
        solucionHTML += "</tr>";
    }
    solucionHTML += "</table>";
    document.getElementById("solution").innerHTML = solucionHTML;
}
