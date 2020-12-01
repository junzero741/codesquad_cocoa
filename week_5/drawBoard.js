const bodyTag = document.body;
const canvas = document.getElementById('board');
const ctx = canvas.getContext('2d');


function drawBoard() {
   
        ctx.fillStyle = "rgb(138,218,83)"; 
        ctx.fillRect (0, 0, 900, 900);  // 보드판 바깥쪽 직사각형

        ctx.fillStyle = "rgba(138, 218, 83, 0.5)";
        ctx.fillRect (150, 150, 600, 600);  // 보드판 안쪽 직사각형
        ctx.strokeRect(150, 150, 600, 600);
        
       drawBlankCity();
}



function drawBlankCity() {
    let rectPosX = 0;
    let rectPosY = 0;

    // 
    for(let i = 0; i < 9; i++) {
        ctx.fillStyle = "rgb(138, 218, 83)";
        ctx.fillRect(rectPosX, rectPosY, 150, 150);
        ctx.strokeRect(rectPosX, rectPosY, 150, 150);
        rectPosY += 150;
    }

    rectPosX = 0; // 그릴때마다 초기화
    rectPosY = 0;
    
    for(let i = 0; i < 9; i++) {
        ctx.fillStyle = "rgb(138, 218, 83)";
        ctx.fillRect(rectPosX, rectPosY, 150, 150);
        ctx.strokeRect(rectPosX, rectPosY, 150, 150);
        rectPosX += 150;
    }

    rectPosX = 0;
    rectPosY = 750;


    for(let i = 0; i < 9; i++) {
        ctx.fillStyle = "rgb(138, 218, 83)";
        ctx.fillRect(rectPosX, rectPosY, 150, 150);
        ctx.strokeRect(rectPosX, rectPosY, 150, 150);
        rectPosX += 150;
    }


    rectPosX = 750;
    rectPosY = 0;

    for(let i = 0; i < 9; i++) {
        ctx.fillStyle = "rgb(138, 218, 83)";
        ctx.fillRect(rectPosX, rectPosY, 150, 150);
        ctx.strokeRect(rectPosX, rectPosY, 150, 150);
        rectPosY += 150;
    }

}


bodyTag.onload = drawBoard();