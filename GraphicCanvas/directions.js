    const canvas = document.getElementById("canva");
    const ctx = canvas.getContext("2d");

    let direction = 1;

    let posX = 0;
    let posY = 1;

function ghost(x, y){
    ctx.font = '40px Serif';
    ctx.fillText('👹', x * 30, y * 30);
}

const pollitos = [];
for(let i = 0; i < 8; i++){
    const poliito = {
        x: Math.floor(Math.random() * 20),
        y: Math.floor(Math.random() * 13),
        pinta: function(){
            if(!this.comido){
            ctx.font = '40px Serif';
            ctx.fillText('🧠', this.x * 30, this.y *30);}
        },
        comido: false
    }
    pollitos.push(poliito);
 }

setInterval(() =>{
    ctx.clearRect(0, 0, 600, 400);
    ghost(posX, posY);
    pollitos.forEach(pollito =>  {
        if(pollito.x === posX && pollito.y === posY)
            pollito.comido = true;
    })
    pollitos.forEach(pollito => pollito.pinta());
    switch(direction){
            case 1:
                posX++;
                break;
            case 2:
                posY++;
                break;
            case 3:
                posX--;
                break;
            case 4:
                posY--;
                break;
    }
    if(posX > 20) posX = 0;
    if(posX < 0) posX = 20;
    if(posY > 13) posY = 1;
    if(posY < 1) posY = 13;
}, 250);

document.querySelector('body')
    .addEventListener('keydown', (e) =>{
        e.preventDefault();
        switch(e.key){
            case 'ArrowRight':
                direction = 1;
                break;
            case 'ArrowDown':
                direction = 2;
                break;
            case 'ArrowLeft':
                direction = 3;
                break;
            case 'ArrowUp':
                direction = 4;
                break;
            
        }
    });