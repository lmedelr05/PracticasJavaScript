const canvas = document.getElementById("canva");
const ctx = canvas.getContext("2d");

function drawHalloweenArt(ctx) {

    
    // Dibujar fondo (cielo nocturno con niebla)
    const gradient = ctx.createLinearGradient(0, 0, 0, 200); // Ajusta el 200 según tus necesidades
    gradient.addColorStop(0, "black");
    gradient.addColorStop(1, "transparent");
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);


    // Dibujar luna
    ctx.fillStyle = "lightyellow";
    ctx.beginPath();
    ctx.arc(100, 100, 40, 0, Math.PI * 2);
    ctx.fill();

    // Dibujar calabazas malvadas
    drawEvilPumpkin(ctx, 350, 300, "darkorange", "red", "black");
    drawEvilPumpkin(ctx, 450, 320, "darkorange", "red", "black");

  // Dibujar casa embrujada
  ctx.fillStyle = "dimgray"; // Color de la casa
  ctx.fillRect(80, 230, 100, 100); // Cuerpo de la casa
  ctx.fillStyle = "black"; // Color del techo
  ctx.beginPath();
  ctx.moveTo(70, 230);
  ctx.lineTo(190, 230);
  ctx.lineTo(130, 170);
  ctx.closePath();
  ctx.fill();

  // Dibujar puerta de la casa
  ctx.fillStyle = "saddlebrown"; // Color de la puerta
  ctx.fillRect(125, 280, 40, 50); // Puerta

    // Dibujar cuerpo del fantasma
    ctx.fillStyle = "white"; // Color del cuerpo del fantasma

    // Cuerpo del fantasma (una forma ovalada)
    ctx.beginPath();
    ctx.arc(200, 400, 100, Math.PI, 0, false);
    ctx.lineTo(250, 500);
    ctx.lineTo(150, 500);
    ctx.closePath();
    ctx.fill();

    // Ojos del fantasma
    ctx.fillStyle = "black"; // Color de los ojos
    ctx.beginPath();
    ctx.arc(180, 370, 15, 0, Math.PI * 2);
    ctx.fill();

    ctx.beginPath();
    ctx.arc(220, 370, 15, 0, Math.PI * 2);
    ctx.fill();

    // Boca del fantasma (una sonrisa)
    ctx.beginPath();
    ctx.arc(200, 420, 30, 0, Math.PI);
    ctx.stroke();
}

drawHalloweenArt(ctx);

function drawEvilPumpkin(ctx, x, y, pumpkinColor, eyeColor, mouthColor) {
    // Dibujar cuerpo de la calabaza
    ctx.fillStyle = pumpkinColor;
    ctx.beginPath();
    ctx.arc(x, y, 50, 0, Math.PI * 2);
    ctx.fill();

    // Dibujar ojos
    ctx.fillStyle = eyeColor;
    ctx.beginPath();
    ctx.arc(x - 20, y - 10, 10, 0, Math.PI * 2);
    ctx.fill();

    ctx.beginPath();
    ctx.arc(x + 20, y - 10, 10, 0, Math.PI * 2);
    ctx.fill();

    // Dibujar boca malvada
    ctx.strokeStyle = mouthColor;
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.arc(x, y + 10, 20, 0.2 * Math.PI, 0.8* Math.PI, false);
    ctx.stroke();

    // Agregar cejas inclinadas hacia abajo para un aspecto enojado
    ctx.beginPath();
    ctx.moveTo(x - 10, y - 20);
    ctx.lineTo(x - 22, y - 32);
    ctx.moveTo(x + 10, y - 20);
    ctx.lineTo(x + 22, y - 32);
    ctx.strokeStyle = mouthColor;
    ctx.lineWidth = 3;
    ctx.stroke();

    
}




drawHalloweenArt(ctx);