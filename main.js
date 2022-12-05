function start(choice){
    let userPick=choice.id;
    console.log(userPick);

    let random=Math.floor(Math.random()*3);
    let computerPick=["rock","paper","scissors"][random];

    console.log(computerPick);

    let gamePoint={
        "rock":{"scissors":1,"rock":0.5,"paper":0},
        "paper":{"rock":1,"paper":0.5,"scissors":0},
        "scissors":{"paper":1,"scissors":0.5,"rock":0}
    };

    let userPoint=gamePoint[userPick][computerPick];
    console.log(userPoint);

    let savedImages={
        "rock":document.getElementById("rock").src,
        "paper":document.getElementById("paper").src,
        "scissors":document.getElementById("scissors").src
    };

    document.getElementById("rock").remove();
    document.getElementById("paper").remove();
    document.getElementById("scissors").remove();

    let userImg=document.createElement("img");
    let computerImg=document.createElement("img");
    let result=document.createElement("div");

    userImg.src=savedImages[userPick];
    computerImg.src=savedImages[computerPick];

    document.getElementById("container").appendChild(userImg);
    document.getElementById("container").appendChild(result);
    document.getElementById("container").appendChild(computerImg);

    let score = document.getElementById("point");

    if(userPoint === 0){
        result.innerHTML="You Lose";
        score.innerText = Number(score.innerText - 1);
    }
    else if(userPoint === 0.5){
        result.innerHTML="Draw";
        score.innerText = Number(score.innerText - 0);
    }
    else{
        result.innerHTML="You Win";
        score.innerText = Number(score.innerText + 1);
    }

}