// var d = document.getElementById('dibujis')
// var lienzo = d.getContext('2d')
//
// dibujarLineas('hotpink', 15, 30, 200, 150)
// dibujarLineas('gold', 30, 60, 100, 50)
// dibujarLineas('aliceblue', 205, 130, 30, 15)
//
//
// function dibujarLineas(color, xinicial, yinicial, xfinal, yfinal){
//   lienzo.beginPath()
//   lienzo.strokeStyle = color
//   lienzo.moveTo(xinicial, yinicial)
//   lienzo.lineTo(xfinal, yfinal)
//   lienzo.stroke()
//   lienzo.closePath()
// }

var texto = document.getElementById('texto_lineas')
var boton = document.getElementById('botoncito')
boton.addEventListener('click', dibujoPorClick)

var d = document.getElementById('dibujis')
var ancho = d.width
var lienzo = d.getContext('2d')


function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal){
  lienzo.beginPath()
  lienzo.strokeStyle = color
  lienzo.moveTo(xinicial, yinicial)
  lienzo.lineTo(xfinal, yfinal)
  lienzo.stroke()
  lienzo.closePath()
}

function dibujoPorClick(){
  // var xxx =
  var lineas = parseInt(texto.value)
  var l = 0
  var espacio = ancho / lineas
  var xi, yi, xf, yf

  for(l = 0; l < lineas; l++){
    yi = espacio * l
    xf = espacio * (l + 1)
    xi = 300 - yi
    yf = 300 - xf
    dibujarLinea('#12a5a3', 0, yi, xf, 300)
    dibujarLinea('#12a5a3', yi, 0, 300, xf)
    dibujarLinea('#12a5a3', 300, xf, xi, 300)
    dibujarLinea('#12a5a3', 0, yi, xi, 0)
    console.log('linea' + 1)
  }
}
