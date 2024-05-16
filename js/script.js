function calcular(){
   
    var a11 = parseFloat(document.getElementById("a1").value);
    var a12 = parseFloat(document.getElementById("a2").value);
    var a13 = parseFloat(document.getElementById("a3").value);
    var a21 = parseFloat(document.getElementById("b1").value);
    var a22 = parseFloat(document.getElementById("b2").value);
    var a23 = parseFloat(document.getElementById("b3").value);

  
    var matriz = [
        [a11, a12, a13],
        [a21, a22, a23]
    ];

   
    var solucion = resolverGaussJordan(matriz);

   
    mostrarSolucion(solucion);
}




function calcular(){
   
    var a11 = parseFraction(document.getElementById("a1").value);
    var a12 = parseFraction(document.getElementById("a2").value);
    var a13 = parseFraction(document.getElementById("a3").value);
    var a21 = parseFraction(document.getElementById("b1").value);
    var a22 = parseFraction(document.getElementById("b2").value);
    var a23 = parseFraction(document.getElementById("b3").value);

  
    var matriz = [
        [a11, a12, a13],
        [a21, a22, a23]
    ];

  
    var solucion = resolverGaussJordan(matriz);

  
    mostrarSolucion(solucion);
}


function parseFraction(fraction){
    var parts = fraction.split('/');
    if (parts.length === 2) {
        var numerator = parseFloat(parts[0]);
        var denominator = parseFloat(parts[1]);
        if (denominator !== 0) {
            return numerator / denominator;
        }
    }
 
    return parseFloat(fraction);
}
function resolverGaussJordan(matriz){
    var tamaño = matriz.length;
    
    for (var i = 0; i <tamaño; i++){
       
        var divisor = matriz[i][i];
        for (var j = 0; j <tamaño + 1; j++){
            matriz[i][j] /= divisor;
        }
        
        for (var k = 0; k <tamaño; k++){
            if (k !== i){
                var factor = matriz[k][i];
                for (var l = 0; l < tamaño + 1; l++){
                    matriz[k][l] -= factor * matriz[i][l];
                }
            }
        }
    }
    return matriz;
}

function mostrarSolucion(solucion){
    var tamaño = solucion.length;
    var solucionHTML = "<h2>Solución del sistema de ecuaciones:</h2>";
    solucionHTML += "<table border='1'>";
    for (var i = 0; i <tamaño; i++){
        solucionHTML += "<tr>";
        for (var j = 0; j <tamaño + 1; j++){
            solucionHTML += "<td>" + solucion[i][j].toFixed(2) + "</td>";
        }
        solucionHTML += "</tr>";
    }
    solucionHTML += "</table>";
    document.getElementById("solution").innerHTML = solucionHTML;
}
