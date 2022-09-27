const width = document.querySelector(".containerMain").offsetWidth;
document.querySelector(".containerMain").style.height = `${width}px`;

window.addEventListener('resize', () => {
    const width = document.querySelector(".containerMain").offsetWidth;
    document.querySelector(".containerMain").style.height = `${width}px`;
});

let play = false;
let player1, player2;

function validationPlay(){
    //document.forms["setPlayers"].submit();
    player1 = document.forms["setPlayers"]["player_1"].value;
    player2 = document.forms["setPlayers"].player_2.value;
    console.log("Jogador 1: " + player1 + " - Jogador 2: " + player2);
    if(player1 != "" && player2 != ""){
        play = true;
        console.log(play);
        clearStones();
        drawInitialStones();
        clearPossibilities();
        drawPossibilities();
        console.log(pointCounter(squares));
        document.querySelector('.container').style.opacity = 0;
        setTimeout(()=>{
            document.querySelector('.container').style.display = 'none';
        }, 200);
        document.querySelector('.player-1 .name').innerHTML = player1
        document.querySelector('.player-2 .name').innerHTML = player2

    } else {
        play = false;
        console.log(play);
    }
}

function drawInitialStones(){
    document.getElementById('44').innerHTML = '<div class="whiteStone"></div>';
    document.getElementById('45').innerHTML = '<div class="blackStone"></div>';
    document.getElementById('54').innerHTML = '<div class="blackStone"></div>';
    document.getElementById('55').innerHTML = '<div class="whiteStone"></div>';
}

function drawPossibilities(){
    let count = 0, canIPlay;
    outer0:
    while(count < 3){
        if(player == 1){
            canIPlay = false;
            for(let square of squares){
    
                const id = square.getAttribute('id');
                let id1 = Number(id) + 1, id2 = Number(id) + 11, id3 = Number(id) + 10, id4 = Number(id) + 9, id5 = Number(id) - 1, id6 = Number(id) - 11, id7 = Number(id) - 10, id8 = Number(id) - 9;
                let printBlackId = false;
    
                if(document.getElementById(id1) && document.getElementById(id1).innerHTML == '<div class="whiteStone"></div>'){
                    outer:
                    for(let i = 0; i < 7; i++){
                        id1 += 1;
                        if(document.getElementById(id1) && document.getElementById(id1).innerHTML != "" && document.getElementById(id1).innerHTML != '<div class="blackStonePossibility"></div>'){
                            if(document.getElementById(id1).innerHTML == '<div class="blackStone"></div>'){
                                printBlackId = true;
                                break outer;
                            } else {
                                continue;
                            }
                        } else {
                            break;
                        }
                    } 
                }
    
                if(document.getElementById(id2) && document.getElementById(id2).innerHTML == '<div class="whiteStone"></div>'){
                    outer:
                    for(let i = 0; i < 7; i++){
                        id2 += 11;
                        if(document.getElementById(id2) && document.getElementById(id2).innerHTML != "" && document.getElementById(id2).innerHTML != '<div class="blackStonePossibility"></div>'){
                            if(document.getElementById(id2).innerHTML == '<div class="blackStone"></div>'){
                                printBlackId = true;
                                break outer;
                            } else {
                                continue;
                            }
                        } else {
                            break;
                        }
                    }
                }
                
                if(document.getElementById(id3) && document.getElementById(id3).innerHTML == '<div class="whiteStone"></div>'){
                    
                    outer:
                    for(let i = 0; i < 7; i++){
                        id3 += 10;
                        if(document.getElementById(id3) && document.getElementById(id3).innerHTML != "" && document.getElementById(id3).innerHTML != '<div class="blackStonePossibility"></div>'){
                            if(document.getElementById(id3).innerHTML == '<div class="blackStone"></div>'){
                                printBlackId = true;
                                break outer;
                            } else {
                                continue;
                            }
                        } else {
                            break;
                        }
                    } 
                }
                    
                if(document.getElementById(id4) && document.getElementById(id4).innerHTML == '<div class="whiteStone"></div>'){
                    outer:
                    for(let i = 0; i < 7; i++){
                        id4 += 9;
                        if(document.getElementById(id4) && document.getElementById(id4).innerHTML != "" && document.getElementById(id4).innerHTML != '<div class="blackStonePossibility"></div>'){
                            if(document.getElementById(id4).innerHTML == '<div class="blackStone"></div>'){
                                printBlackId = true;
                                break outer;
                            } else {
                                continue;
                            }
                        } else {
                            break;
                        }
                    } 
                }
    
                if(document.getElementById(id5) && document.getElementById(id5).innerHTML == '<div class="whiteStone"></div>'){
                    outer:
                    for(let i = 0; i < 7; i++){
                        id5 -= 1;
                        if(document.getElementById(id5) && document.getElementById(id5).innerHTML != "" && document.getElementById(id5).innerHTML != '<div class="blackStonePossibility"></div>'){
                            if(document.getElementById(id5).innerHTML == '<div class="blackStone"></div>'){
                                printBlackId = true;
                                break outer;
                            } else {
                                continue;
                            }
                        
                        } else {
                            break;
                        }
                    } 
                }
    
                if(document.getElementById(id6) && document.getElementById(id6).innerHTML == '<div class="whiteStone"></div>'){
                    outer:
                    for(let i = 0; i < 7; i++){
                        id6 -= 11;
                        if(document.getElementById(id6) && document.getElementById(id6).innerHTML != "" && document.getElementById(id6).innerHTML != '<div class="blackStonePossibility"></div>'){ 
                            if(document.getElementById(id6).innerHTML == '<div class="blackStone"></div>'){
                                printBlackId = true;
                                break outer;
                            } else {
                                continue;
                            }
                        } else {
                            break;
                        }
                    } 
                }
    
                if(document.getElementById(id7) && document.getElementById(id7).innerHTML == '<div class="whiteStone"></div>'){
                    outer:
                    for(let i = 0; i < 7; i++){
                        id7 -= 10;
                        if(document.getElementById(id7) && document.getElementById(id7).innerHTML != "" && document.getElementById(id7).innerHTML != '<div class="blackStonePossibility"></div>'){
                            
                            if(document.getElementById(id7).innerHTML == '<div class="blackStone"></div>'){
                                printBlackId = true;
                                break outer;
                            } else {
                                continue;
                            }
                        } else {
                            break;
                        }
                    } 
                }
    
                if(document.getElementById(id8) && document.getElementById(id8).innerHTML == '<div class="whiteStone"></div>'){
                    outer:
                    for(let i = 0; i < 7; i++){
                        id8 -= 9;
                        if(document.getElementById(id8) && document.getElementById(id8).innerHTML != "" && document.getElementById(id8).innerHTML != '<div class="blackStonePossibility"></div>'){
                            if(document.getElementById(id8).innerHTML == '<div class="blackStone"></div>'){
                                printBlackId = true;
                                break outer;
                            } else {
                                continue;
                            }
                        } else {
                            break;
                        }
                    } 
                }
    
                if(printBlackId && document.getElementById(id).innerHTML == ""){
                    document.getElementById(id).innerHTML = '<div class="blackStonePossibility"></div>';
                    canIPlay = true;
                }
            }
    
            if(!canIPlay){
                player = 2;
                count++;
            } else {
                break outer0;
            }
        } 
        if(player == 2){
            canIPlay = false;
            for(let square of squares){
                const id = square.getAttribute('id');
                let id1 = Number(id) + 1, id2 = Number(id) + 11, id3 = Number(id) + 10, id4 = Number(id) + 9, id5 = Number(id) - 1, id6 = Number(id) - 11, id7 = Number(id) - 10, id8 = Number(id) - 9;
                let printWhiteId = false;
                if(document.getElementById(id1) && document.getElementById(id1).innerHTML == '<div class="blackStone"></div>'){
                    outer:
                    for(let i = 0; i < 7; i++){
                        id1 += 1;
                        if(document.getElementById(id1) && document.getElementById(id1).innerHTML != "" && document.getElementById(id1).innerHTML != '<div class="whiteStonePossibility"></div>'){    
                            if(document.getElementById(id1).innerHTML == '<div class="whiteStone"></div>'){
                                printWhiteId = true;
                                break outer;
                            } else {
                                continue;
                            }
                        } else {
                            break;
                        }
                    } 
                }
    
                if(document.getElementById(id2) && document.getElementById(id2).innerHTML == '<div class="blackStone"></div>'){
                    outer:
                    for(let i = 0; i < 7; i++){
                        id2 += 11;
                        if(document.getElementById(id2) && document.getElementById(id2).innerHTML != "" && document.getElementById(id2).innerHTML != '<div class="whiteStonePossibility"></div>'){
                            if(document.getElementById(id2).innerHTML == '<div class="whiteStone"></div>'){
                                printWhiteId = true;
                                break outer;
                            } else {
                                continue;
                            }
                        } else {
                            break;
                        }
                    } 
                }
    
                if(document.getElementById(id3) && document.getElementById(id3).innerHTML == '<div class="blackStone"></div>'){
                    outer:
                    for(let i = 0; i < 7; i++){
                        id3 += 10;
                        if(document.getElementById(id3) && document.getElementById(id3).innerHTML != "" && document.getElementById(id3).innerHTML != '<div class="whiteStonePossibility"></div>'){
                            if(document.getElementById(id3).innerHTML == '<div class="whiteStone"></div>'){
                            printWhiteId = true;
                            break outer;
                            } else {
                                continue;
                            }
                        } else {
                            break;
                        }
                    } 
                }
                    
                if(document.getElementById(id4) && document.getElementById(id4).innerHTML == '<div class="blackStone"></div>'){
                    outer:
                    for(let i = 0; i < 7; i++){
                            id4 += 9;
                            if(document.getElementById(id4) && document.getElementById(id4).innerHTML != "" && document.getElementById(id4).innerHTML != '<div class="whiteStonePossibility"></div>'){
                                if(document.getElementById(id4).innerHTML == '<div class="whiteStone"></div>'){
                                    printWhiteId = true;
                                    break outer;
                                } else {
                                    continue;
                                }
                            } else {
                                break;
                            }
                    } 
                }
    
                if(document.getElementById(id5) && document.getElementById(id5).innerHTML == '<div class="blackStone"></div>'){
                    outer:
                    for(let i = 0; i < 7; i++){
                        id5 -= 1;
                        if(document.getElementById(id5) && document.getElementById(id5).innerHTML != "" && document.getElementById(id5).innerHTML != '<div class="whiteStonePossibility"></div>'){
                            if(document.getElementById(id5).innerHTML == '<div class="whiteStone"></div>'){
                                printWhiteId = true;
                                break outer;
                            } else {
                                continue;
                            }
                        } else {
                            break;
                        }
                    } 
                }
    
                if(document.getElementById(id6) && document.getElementById(id6).innerHTML == '<div class="blackStone"></div>'){
                    outer:
                    for(let i = 0; i < 7; i++){
                        id6 -= 11;
                        if(document.getElementById(id6) && document.getElementById(id6).innerHTML != "" && document.getElementById(id6).innerHTML != '<div class="whiteStonePossibility"></div>'){
                            if(document.getElementById(id6).innerHTML == '<div class="whiteStone"></div>'){
                                printWhiteId = true;
                                break outer;
                            } else {
                                continue;
                            }
                        } else {
                            break;
                        }
                    } 
                }
    
                if(document.getElementById(id7) && document.getElementById(id7).innerHTML == '<div class="blackStone"></div>'){
                    outer:
                    for(let i = 0; i < 7; i++){
                        id7 -= 10;
                        if(document.getElementById(id7) && document.getElementById(id7).innerHTML != "" && document.getElementById(id7).innerHTML != '<div class="whiteStonePossibility"></div>'){ 
                            if(document.getElementById(id7).innerHTML == '<div class="whiteStone"></div>'){
                                printWhiteId = true;
                                break outer;
                            } else {
                                continue;
                            }
                        } else {
                            break outer;
                        }
                    } 
                }
    
                if(document.getElementById(id8) && document.getElementById(id8).innerHTML == '<div class="blackStone"></div>'){
                    outer:
                    for(let i = 0; i < 7; i++){
                            id8 -= 9;
                            if(document.getElementById(id8) && document.getElementById(id8).innerHTML != "" && document.getElementById(id8).innerHTML != '<div class="whiteStonePossibility"></div>'){
                                if(document.getElementById(id8).innerHTML == '<div class="whiteStone"></div>'){
                                    printWhiteId = true;
                                    break outer;
                                } else {
                                    continue;
                                }
                            } else {
                                break;
                            }
                    } 
                }
                
                if(printWhiteId && document.getElementById(id).innerHTML == ""){
                    document.getElementById(id).innerHTML = '<div class="whiteStonePossibility"></div>';
                    canIPlay = true;   
                }
            }
            
            if(!canIPlay){
                player = 1;
                count++;
            } else {
                break outer0;
            }
        }
    }

    console.log(player);
    console.log("Chegou aqui!" + count)
    if(count >= 3){
        return true;
    } else {
        return false;
    }   
}

function clearPossibilities(){
    for(let square of squares){
        if(square.innerHTML == '<div class="whiteStonePossibility"></div>' || square.innerHTML == '<div class="blackStonePossibility"></div>'){
            square.innerHTML = "";
        }
    }
}

function clearStones(){
    for(let square of squares){
        if(square.innerHTML == '<div class="whiteStone"></div>' || square.innerHTML == '<div class="blackStone"></div>'){
            square.innerHTML = "";
        }
    }
}

function pointCounter(squareArray){
    let blackPoint = 0;
    let whitePoint = 0;
    squareArray.forEach(e => {
        if(e.innerHTML == '<div class="whiteStone"></div>'){
            whitePoint++;
        }
        if(e.innerHTML == '<div class="blackStone"></div>'){
            blackPoint++;
        }
    });

    return { blackPoint: blackPoint, whitePoint: whitePoint };
}

function drawStone(element){
    console.log(play);
    let result = false;
    let id;
    try {
        id = element.target.closest('.square').getAttribute('id'); //O método Element.closest() retorna o ancestral mais próximo, em relação ao elemento atual, que possui o seletor fornecido como parâmetro. No caso de o elemento atual possuir o seletor, o mesmo é retornado. Caso não exista um ancestral o método retorna null.
    } catch(err) {
        id = null;
    }
    
    /*let id = element.target.getAttribute('id'); //o target faz as divs filhas serem identificadas no evento.
    if(!id && element.target.getAttribute('class') != 'whiteStone' && element.target.getAttribute('class') != 'blackStone'){
        const parent = element.target.parentNode;
        id = parent.getAttribute('id');
    }
    */
    /*
    let nearId = false;

    for(let square of squares){
        if(player == 1){
            if(Number(id) - 1 == square.getAttribute('id') && square.innerHTML != "" && square.innerHTML != '<div class="blackStone"></div>'){
                nearId = true;
            } else if(Number(id) - 11 == square.getAttribute('id') && square.innerHTML != "" && square.innerHTML != '<div class="blackStone"></div>'){
                nearId = true;
            } else if(Number(id) - 10 == square.getAttribute('id') && square.innerHTML != "" && square.innerHTML != '<div class="blackStone"></div>'){
                nearId = true;
            } else if(Number(id) - 9 == square.getAttribute('id') && square.innerHTML != "" && square.innerHTML != '<div class="blackStone"></div>'){
                nearId = true;
            } else if(Number(id) + 1 == square.getAttribute('id') && square.innerHTML != "" && square.innerHTML != '<div class="blackStone"></div>'){
                nearId = true;
            } else if(Number(id) + 11 == square.getAttribute('id') && square.innerHTML != "" && square.innerHTML != '<div class="blackStone"></div>'){
                nearId = true;
            } else if(Number(id) + 10 == square.getAttribute('id') && square.innerHTML != "" && square.innerHTML != '<div class="blackStone"></div>'){
                nearId = true;
            } else if(Number(id) + 9 == square.getAttribute('id') && square.innerHTML != "" && square.innerHTML != '<div class="blackStone"></div>'){
                nearId = true;
            }
        } else if(player == 2){
            if(Number(id) - 1 == square.getAttribute('id') && square.innerHTML != "" && square.innerHTML != '<div class="whiteStone"></div>'){
                nearId = true;
            } else if(Number(id) - 11 == square.getAttribute('id') && square.innerHTML != "" && square.innerHTML != '<div class="whiteStone"></div>'){
                nearId = true;
            } else if(Number(id) - 10 == square.getAttribute('id') && square.innerHTML != "" && square.innerHTML != '<div class="whiteStone"></div>'){
                nearId = true;
            } else if(Number(id) - 9 == square.getAttribute('id') && square.innerHTML != "" && square.innerHTML != '<div class="whiteStone"></div>'){
                nearId = true;
            } else if(Number(id) + 1 == square.getAttribute('id') && square.innerHTML != "" && square.innerHTML != '<div class="whiteStone"></div>'){
                nearId = true;
            } else if(Number(id) + 11 == square.getAttribute('id') && square.innerHTML != "" && square.innerHTML != '<div class="whiteStone"></div>'){
                nearId = true;
            } else if(Number(id) + 10 == square.getAttribute('id') && square.innerHTML != "" && square.innerHTML != '<div class="whiteStone"></div>'){
                nearId = true;
            } else if(Number(id) + 9 == square.getAttribute('id') && square.innerHTML != "" && square.innerHTML != '<div class="whiteStone"></div>'){
                nearId = true;
            }
        }
        
    }*/
    console.log(id);
    console.log(element);
    if(/*nearId && */id && id != null && play) {

        console.log(`id = ${id}`);

        if(player == 1 && document.getElementById(id).innerHTML == '<div class="blackStonePossibility"></div>'){
            let id1 = Number(id) + 1, id2 = Number(id) + 11, id3 = Number(id) + 10, id4 = Number(id) + 9, id5 = Number(id) - 1, id6 = Number(id) - 11, id7 = Number(id) - 10, id8 = Number(id) - 9;
            let printBlackId = false;

            if(document.getElementById(id1) && document.getElementById(id1).innerHTML == '<div class="whiteStone"></div>'){
                outer:
                for(let i = 0; i < 7; i++){
                    id1 += 1;
                    let newI = i;
                    if(document.getElementById(id1) && document.getElementById(id1).innerHTML != "" && document.getElementById(id1).innerHTML != '<div class="blackStonePossibility"></div>'){
                        if(document.getElementById(id1).innerHTML == '<div class="blackStone"></div>'){
                            for(let i = newI; i >= 0; i--){
                                id1 -= 1;
                                console.log(`id1 = ${id1}`);
                                document.getElementById(id1).innerHTML = '<div class="blackStone"></div>';
                            }
                            printBlackId = true;
                            break outer;
                        } else {
                            continue;
                        }
                    } else {
                        break;
                    }
                } 
            }

            if(document.getElementById(id2) && document.getElementById(id2).innerHTML == '<div class="whiteStone"></div>'){
                outer:
                for(let i = 0; i < 7; i++){
                    id2 += 11;
                    let newI = i;
                    if(document.getElementById(id2) && document.getElementById(id2).innerHTML != "" && document.getElementById(id2).innerHTML != '<div class="blackStonePossibility"></div>'){
                        if(document.getElementById(id2).innerHTML == '<div class="blackStone"></div>'){
                            for(let i = newI; i >= 0; i--){
                                id2 -= 11;
                                console.log(`id2 = ${id2}`);
                                document.getElementById(id2).innerHTML = '<div class="blackStone"></div>';
                            }
                            printBlackId = true;
                            break outer;
                        } else {
                            continue;
                        }
                    } else {
                        break;
                    }
                }
            }
            
            if(document.getElementById(id3) && document.getElementById(id3).innerHTML == '<div class="whiteStone"></div>'){
                
                outer:
                for(let i = 0; i < 7; i++){
                    id3 += 10;
                    let newI = i;
                    if(document.getElementById(id3) && document.getElementById(id3).innerHTML != "" && document.getElementById(id3).innerHTML != '<div class="blackStonePossibility"></div>'){
                        if(document.getElementById(id3).innerHTML == '<div class="blackStone"></div>'){
                            for(let i = newI; i >= 0; i--){
                                id3 -= 10;
                                console.log(`id3 = ${id3}`);
                                document.getElementById(id3).innerHTML = '<div class="blackStone"></div>';
                            }
                            printBlackId = true;
                            break outer;
                        } else {
                            continue;
                        }
                    } else {
                        break;
                    }
                } 
            }
                
            if(document.getElementById(id4) && document.getElementById(id4).innerHTML == '<div class="whiteStone"></div>'){
                outer:
                for(let i = 0; i < 7; i++){
                    id4 += 9;
                    let newI = i;
                    if(document.getElementById(id4) && document.getElementById(id4).innerHTML != "" && document.getElementById(id4).innerHTML != '<div class="blackStonePossibility"></div>'){
                        
                        if(document.getElementById(id4).innerHTML == '<div class="blackStone"></div>'){
                            for(let i = newI; i >= 0; i--){
                                id4 -= 9;
                                console.log(`id4 = ${id4}`);
                                document.getElementById(id4).innerHTML = '<div class="blackStone"></div>';
                            }
                            printBlackId = true;
                            break outer;
                        } else {
                            continue;
                        }
                    } else {
                        break;
                    }
                } 
            }

            if(document.getElementById(id5) && document.getElementById(id5).innerHTML == '<div class="whiteStone"></div>'){
                outer:
                for(let i = 0; i < 7; i++){
                    id5 -= 1;
                    let newI = i;
                    if(document.getElementById(id5) && document.getElementById(id5).innerHTML != "" && document.getElementById(id5).innerHTML != '<div class="blackStonePossibility"></div>'){
                        if(document.getElementById(id5).innerHTML == '<div class="blackStone"></div>'){
                            for(let i = newI; i >= 0; i--){
                                id5 += 1;
                                console.log(`id5 = ${id5}`);
                                document.getElementById(id5).innerHTML = '<div class="blackStone"></div>';
                            }
                            printBlackId = true;
                            break outer;
                        } else {
                            continue;
                        }
                    
                    } else {
                        break;
                    }
                } 
            }

            if(document.getElementById(id6) && document.getElementById(id6).innerHTML == '<div class="whiteStone"></div>'){
                outer:
                for(let i = 0; i < 7; i++){
                    id6 -= 11;
                    let newI = i;
                    if(document.getElementById(id6) && document.getElementById(id6).innerHTML != "" && document.getElementById(id6).innerHTML != '<div class="blackStonePossibility"></div>'){ 
                        if(document.getElementById(id6).innerHTML == '<div class="blackStone"></div>'){
                            for(let i = newI; i >= 0; i--){
                                id6 += 11;
                                console.log(`id6 = ${id6}`);
                                document.getElementById(id6).innerHTML = '<div class="blackStone"></div>';
                            }
                            printBlackId = true;
                            break outer;
                        } else {
                            continue;
                        }
                    } else {
                        break;
                    }
                } 
            }

            if(document.getElementById(id7) && document.getElementById(id7).innerHTML == '<div class="whiteStone"></div>'){
                outer:
                for(let i = 0; i < 7; i++){
                    id7 -= 10;
                    let newI = i;
                    if(document.getElementById(id7) && document.getElementById(id7).innerHTML != "" && document.getElementById(id7).innerHTML != '<div class="blackStonePossibility"></div>'){
                        
                        if(document.getElementById(id7).innerHTML == '<div class="blackStone"></div>'){
                            for(let i = newI; i >= 0; i--){
                                id7 += 10;
                                console.log(`id7 = ${id7}`);
                                document.getElementById(id7).innerHTML = '<div class="blackStone"></div>';
                            }
                            printBlackId = true;
                            break outer;
                        } else {
                            continue;
                        }
                    } else {
                        break;
                    }
                } 
            }

            if(document.getElementById(id8) && document.getElementById(id8).innerHTML == '<div class="whiteStone"></div>'){
                outer:
                for(let i = 0; i < 7; i++){
                    id8 -= 9;
                    let newI = i;
                    if(document.getElementById(id8) && document.getElementById(id8).innerHTML != "" && document.getElementById(id8).innerHTML != '<div class="blackStonePossibility"></div>'){
                        if(document.getElementById(id8).innerHTML == '<div class="blackStone"></div>'){
                            for(let i = newI; i >= 0; i--){
                                id8 += 9;
                                console.log(`id8 = ${id8}`);
                                document.getElementById(id8).innerHTML = '<div class="blackStone"></div>';
                            }
                            printBlackId = true;
                            break outer;
                        } else {
                            continue;
                        }
                    } else {
                        break;
                    }
                } 
            }

            if(printBlackId){
                document.getElementById(id).innerHTML = '<div class="blackStone"></div>';
                player = 2;
                clearPossibilities();
                result = drawPossibilities();
            }
            
            
            
        } else if(player == 2 && document.getElementById(id).innerHTML == '<div class="whiteStonePossibility"></div>'){
            let id1 = Number(id) + 1, id2 = Number(id) + 11, id3 = Number(id) + 10, id4 = Number(id) + 9, id5 = Number(id) - 1, id6 = Number(id) - 11, id7 = Number(id) - 10, id8 = Number(id) - 9;
            let printWhiteId = false;
            if(document.getElementById(id1) && document.getElementById(id1).innerHTML == '<div class="blackStone"></div>'){
                outer:
                for(let i = 0; i < 7; i++){
                    id1 += 1;
                    let newI = i;
                    if(document.getElementById(id1) && document.getElementById(id1).innerHTML != "" && document.getElementById(id1).innerHTML != '<div class="whiteStonePossibility"></div>'){    
                        if(document.getElementById(id1).innerHTML == '<div class="whiteStone"></div>'){
                            for(let i = newI; i >= 0; i--){
                                id1 -= 1;
                                console.log(`id1 = ${id1}`);
                                document.getElementById(id1).innerHTML = '<div class="whiteStone"></div>';
                            }
                            printWhiteId = true;
                            break outer;
                        } else {
                            continue;
                        }
                    } else {
                        break;
                    }
                } 
            }

            if(document.getElementById(id2) && document.getElementById(id2).innerHTML == '<div class="blackStone"></div>'){
                outer:
                for(let i = 0; i < 7; i++){
                    id2 += 11;
                    let newI = i;
                    if(document.getElementById(id2) && document.getElementById(id2).innerHTML != "" && document.getElementById(id2).innerHTML != '<div class="whiteStonePossibility"></div>'){
                        if(document.getElementById(id2).innerHTML == '<div class="whiteStone"></div>'){
                            for(let i = newI; i >= 0; i--){
                                id2 -= 11;
                                console.log(`id2 = ${id2}`);
                                document.getElementById(id2).innerHTML = '<div class="whiteStone"></div>';
                            }
                            printWhiteId = true;
                            break outer;
                        } else {
                            continue;
                        }
                    } else {
                        break;
                    }
                } 
            }

            if(document.getElementById(id3) && document.getElementById(id3).innerHTML == '<div class="blackStone"></div>'){
                outer:
                for(let i = 0; i < 7; i++){
                    id3 += 10;
                    let newI = i;
                    if(document.getElementById(id3) && document.getElementById(id3).innerHTML != "" && document.getElementById(id3).innerHTML != '<div class="whiteStonePossibility"></div>'){
                        if(document.getElementById(id3).innerHTML == '<div class="whiteStone"></div>'){
                        for(let i = newI; i >= 0; i--){
                            id3 -= 10;
                            console.log(`id3 = ${id3}`);
                            document.getElementById(id3).innerHTML = '<div class="whiteStone"></div>';
                        }
                        printWhiteId = true;
                        break outer;
                        } else {
                            continue;
                        }
                    } else {
                        break;
                    }
                } 
            }
                
            if(document.getElementById(id4) && document.getElementById(id4).innerHTML == '<div class="blackStone"></div>'){
                outer:
                for(let i = 0; i < 7; i++){
                        id4 += 9;
                        let newI = i;
                        if(document.getElementById(id4) && document.getElementById(id4).innerHTML != "" && document.getElementById(id4).innerHTML != '<div class="whiteStonePossibility"></div>'){
                            if(document.getElementById(id4).innerHTML == '<div class="whiteStone"></div>'){
                                for(let i = newI; i >= 0; i--){
                                    id4 -= 9;
                                    console.log(`id4 = ${id4}`);
                                    document.getElementById(id4).innerHTML = '<div class="whiteStone"></div>';
                                }
                                printWhiteId = true;
                                break outer;
                            } else {
                                continue;
                            }
                        } else {
                            break;
                        }
                } 
            }

            if(document.getElementById(id5) && document.getElementById(id5).innerHTML == '<div class="blackStone"></div>'){
                outer:
                for(let i = 0; i < 7; i++){
                    id5 -= 1;
                    let newI = i;
                    if(document.getElementById(id5) && document.getElementById(id5).innerHTML != "" && document.getElementById(id5).innerHTML != '<div class="whiteStonePossibility"></div>'){
                        if(document.getElementById(id5).innerHTML == '<div class="whiteStone"></div>'){
                            for(let i = newI; i >= 0; i--){
                                id5 += 1;
                                console.log(`id5 = ${id5}`);
                                document.getElementById(id5).innerHTML = '<div class="whiteStone"></div>';
                            }
                            printWhiteId = true;
                            break outer;
                        } else {
                            continue;
                        }
                    } else {
                        break;
                    }
                } 
            }

            if(document.getElementById(id6) && document.getElementById(id6).innerHTML == '<div class="blackStone"></div>'){
                outer:
                for(let i = 0; i < 7; i++){
                    id6 -= 11;
                    let newI = i;
                    if(document.getElementById(id6) && document.getElementById(id6).innerHTML != "" && document.getElementById(id6).innerHTML != '<div class="whiteStonePossibility"></div>'){
                        if(document.getElementById(id6).innerHTML == '<div class="whiteStone"></div>'){
                            for(let i = newI; i >= 0; i--){
                                id6 += 11;
                                console.log(`id6 = ${id6}`);
                                document.getElementById(id6).innerHTML = '<div class="whiteStone"></div>';
                            }
                            printWhiteId = true;
                            break outer;
                        } else {
                            continue;
                        }
                    } else {
                        break;
                    }
                } 
            }

            if(document.getElementById(id7) && document.getElementById(id7).innerHTML == '<div class="blackStone"></div>'){
                outer:
                for(let i = 0; i < 7; i++){
                    id7 -= 10;
                    let newI = i;
                    if(document.getElementById(id7) && document.getElementById(id7).innerHTML != "" && document.getElementById(id7).innerHTML != '<div class="whiteStonePossibility"></div>'){ 
                        if(document.getElementById(id7).innerHTML == '<div class="whiteStone"></div>'){
                        for(let i = newI; i >= 0; i--){
                            id7 += 10;
                            console.log(`id7 = ${id7}`);
                            document.getElementById(id7).innerHTML = '<div class="whiteStone"></div>';
                        }
                        printWhiteId = true;
                        break outer;
                        } else {
                            continue;
                        }
                    } else {
                        break outer;
                    }
                } 
            }

            if(document.getElementById(id8) && document.getElementById(id8).innerHTML == '<div class="blackStone"></div>'){
                outer:
                for(let i = 0; i < 7; i++){
                        id8 -= 9;
                        let newI = i;
                        if(document.getElementById(id8) && document.getElementById(id8).innerHTML != "" && document.getElementById(id8).innerHTML != '<div class="whiteStonePossibility"></div>'){
                            if(document.getElementById(id8).innerHTML == '<div class="whiteStone"></div>'){
                            for(let i = newI; i >= 0; i--){
                                id8 += 9;
                                console.log(`id8 = ${id8}`);
                                document.getElementById(id8).innerHTML = '<div class="whiteStone"></div>';
                            }
                            printWhiteId = true;
                            break outer;
                            } else {
                                continue;
                            }
                        } else {
                            break;
                        }
                } 
            }
            
            if(printWhiteId){
                document.getElementById(id).innerHTML = '<div class="whiteStone"></div>';
                player = 1;
                clearPossibilities();
                result = drawPossibilities();
            }
            
            
        }
    }
    console.log(`result = ${result}`);

    score[0].innerHTML = pointCounter(squares).blackPoint;
    score[1].innerHTML = pointCounter(squares).whitePoint; 
    
    if(result){
        if(pointCounter(squares).blackPoint == pointCounter(squares).whitePoint){
            winner = "Tied!";
        } else if(pointCounter(squares).blackPoint > pointCounter(squares).whitePoint){
            winner = `${player1} wins!`;
            player = 1;
        } else {
            winner = `${player2} wins!`;
            player = 1;
        }
        setTimeout(()=>{
            alert("Game Over! " + winner);
        }, 200)
        
        play = false;

    }

};

document.querySelector('.containerMain').addEventListener('click', drawStone);
document.getElementById('playButton').addEventListener('click', validationPlay);

let player = 1;
let winner;

const squares = document.querySelectorAll(".square"); //Ele cria uma "NodeList", ou seja, um array com todos os elementos que contem a class ".square"

drawInitialStones();
drawPossibilities();

const score = document.querySelectorAll('.score');
score[0].innerHTML = pointCounter(squares).blackPoint;
score[1].innerHTML = pointCounter(squares).whitePoint; 

//for(id of ids){
//   const element = document.getElementById(id);
//   element.onclick = drawStone;
//}




