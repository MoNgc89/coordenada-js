var d = document.getElementById('dibujis')
var lienzo = d.getContext('2d')

dibujarLineas('hotpink', 15, 30, 200, 150)
dibujarLineas('gold', 30, 60, 100, 50)
dibujarLineas('aliceblue', 200, 130, 30, 15)


function dibujarLineas(color, xinicial, yinicial, xfinal, yfinal){
  lienzo.beginPath()
  lienzo.strokeStyle = color
  lienzo.moveTo(xinicial, yinicial)
  lienzo.lineTo(xfinal, yfinal)
  lienzo.stroke()
  lienzo.closePath()
}
