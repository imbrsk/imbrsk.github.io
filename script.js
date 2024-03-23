function runScript(){
    let text = document.getElementById("count").value;
    let wins = 0; let loses = 0;
    for(let i = 0; i < text; i++){
        //kreirame arr od 100 clena
        let boxes = new Array(100);
        //gi stavame vrednostite da bidat od 0 do 99
        for(let j = 0; j < 100; j++){
            boxes[j] = j;
        }
        //gi birame kutiite
        let myBox = Math.floor(Math.random() * 100);
        let winBox = Math.floor(Math.random() * 100);
        for(let j = 0; j < 100; j++){
            if (boxes.length <= 2) {
                break;
            }
            //generirame broj od 0 do brojot na preostanati kutii
            let box_removed = Math.floor(Math.random() * (100-j));
            //gledame ako toj broj e ednakov na mojata kutija ili na pobeduvackata kutija
            while(boxes[box_removed] == myBox || boxes[box_removed] == winBox){
                box_removed = Math.floor(Math.random() * (100-j));
            }
            //ja briseme kutijata
            boxes.splice(box_removed, 1);
        }   
        //gledame dali mojata kutija e pobednicka kutija
        if ((boxes[0] == myBox && boxes[0] == winBox)||
            (boxes[1] == myBox && boxes[1] == winBox)){
        wins+=1;
        }else {
        loses+=1;
        }
    }
    let card = document.getElementsByClassName("card")[0];
    card.innerHTML = (wins / text * 100).toFixed(2) + "% win if now switch </br>" + (loses / text * 100).toFixed(2) + "% win if switch ";
};
