const boxes = document.querySelectorAll('.box');
let i = 0;

function lap() {
    i++;
    return i % 2 === 0 ? 'O' : 'X';
}

function displayWinner(winner) {
    alert(`${winner} a gagné`);
    boxes.forEach(element => element.innerHTML = '');
}

function isWin() {

    // LIGNES 

    if (boxes[0].innerHTML !== '' && boxes[0].innerHTML === boxes[1].innerHTML && boxes[1].innerHTML === boxes[2].innerHTML) {
        displayWinner(boxes[0].innerHTML);

    } else if (boxes[3].innerHTML !== '' && boxes[3].innerHTML === boxes[4].innerHTML && boxes[4].innerHTML === boxes[5].innerHTML) {
        displayWinner(boxes[3].innerHTML);

    } else if (boxes[6].innerHTML !== '' && boxes[6].innerHTML === boxes[7].innerHTML && boxes[7].innerHTML === boxes[8].innerHTML) {
        displayWinner(boxes[6].innerHTML);

    // DIAGONALE

    } else if (boxes[0].innerHTML !== '' && boxes[0].innerHTML === boxes[4].innerHTML && boxes[4].innerHTML === boxes[8].innerHTML) {
        displayWinner(boxes[0].innerHTML);

    } else if (boxes[2].innerHTML !== '' && boxes[2].innerHTML === boxes[4].innerHTML && boxes[4].innerHTML === boxes[6].innerHTML) {
        displayWinner(boxes[2].innerHTML);

    // COLONNES

    } else if (boxes[0].innerHTML !== '' && boxes[0].innerHTML === boxes[3].innerHTML && boxes[3].innerHTML === boxes[6].innerHTML) {
        displayWinner(boxes[0].innerHTML);

    } else if (boxes[1].innerHTML !== '' && boxes[1].innerHTML === boxes[4].innerHTML && boxes[4].innerHTML === boxes[7].innerHTML) {
        displayWinner(boxes[1].innerHTML);

    } else if (boxes[2].innerHTML !== '' && boxes[2].innerHTML === boxes[5].innerHTML && boxes[5].innerHTML === boxes[8].innerHTML) {
        displayWinner(boxes[2].innerHTML);
    }
}

function play() {
    if (!this.innerHTML) {
        this.innerHTML = lap();
    }
    isWin();
}

boxes.forEach(element => element.addEventListener('click', play));

