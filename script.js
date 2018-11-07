var voiture = document.getElementById('mon_canvas');
var ctx = voiture.getContext('2d');
  // corps voiture
ctx.fillStyle = "MediumSeaGreen";
ctx.fillRect(50,50,170,65);
// .clearRect efface une partie du rectangle
ctx.clearRect(50,50,30,30);
ctx.clearRect(190,50,30,30);
  // roue 1
ctx.fillStyle = "silver";
ctx.beginPath();
// .arc dessine un arc de cercle ou un rond.
// Math.PI*2 permet de faire un rond entier alors que Math.PI tout seul fait un arc de cercle
ctx.arc(65,135,20,0,Math.PI*2,true);
ctx.fill();
// .stroke affiche les contours
ctx.stroke();
  // roue 2
ctx.beginPath();
ctx.arc(205,135,20,0,Math.PI*2,true);
ctx.fill();
ctx.stroke();
