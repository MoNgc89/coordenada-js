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


//
// var texto = document.getElementById('texto_lineas')
// var boton = document.getElementById('botoncito')
// boton.addEventListener('click', dibujoPorClick)
//
// var d = document.getElementById('dibujis')
// var ancho = d.width
// var lienzo = d.getContext('2d')
//
//
// function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal){
//   lienzo.beginPath()
//   lienzo.strokeStyle = color
//   lienzo.moveTo(xinicial, yinicial)
//   lienzo.lineTo(xfinal, yfinal)
//   lienzo.stroke()
//   lienzo.closePath()
// }
//
// function dibujoPorClick(){
//   // var xxx =
//   var lineas = parseInt(texto.value)
//   var l = 0
//   var espacio = ancho / lineas
//   var xi, yi, xf, yf
//
//   for(l = 0; l < lineas; l++){
//     yi = espacio * l
//     xf = espacio * (l + 1)
//     xi = 300 - yi
//     yf = 300 - xf
//     dibujarLinea('#12a5a3', 0, yi, xf, 300)
//     dibujarLinea('#12a5a3', yi, 0, 300, xf)
//     dibujarLinea('#12a5a3', 300, xf, xi, 300)
//     dibujarLinea('#12a5a3', 0, yi, xi, 0)
//     console.log('linea' + 1)
//   }
// }



var teclas = {
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGHT: 39
}

document.addEventListener('keydown', dibujarTeclado)
var cuadrito = document.getElementById('cuadrito')
var papel = cuadrito.getContext('2d')
var x = 100
var y = 100

dibujarLinea('gold', x-1, y-1, x+1, y+1, papel)

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo){
  lienzo.beginPath()
  lienzo.strokeStyle = color
  lienzo.lineWidth = 3
  lienzo.moveTo(xinicial, yinicial)
  lienzo.lineTo(xfinal, yfinal)
  lienzo.stroke()
  lienzo.closePath()
}

function dibujarTeclado(evento){
  var colorcito = 'gold'
  var movimiento = 5
  switch(evento.keyCode)
  {
    case teclas.UP:
    dibujarLinea(colorcito, x, y, x, y - movimiento, papel)
    y = y - movimiento
      break;
    case teclas.DOWN:
    dibujarLinea(colorcito, x, y, x, y + movimiento, papel)
    y = y + movimiento
      break;
    case teclas.LEFT:
    dibujarLinea(colorcito, x, y, x - movimiento, y, papel)
    x = x - movimiento
      break;
    case teclas.RIGHT:
    dibujarLinea(colorcito, x, y, x + movimiento, y, papel)
    x = x + movimiento
      break;
  }
}
