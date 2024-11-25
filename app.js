let btn = document.querySelectorAll(".cell");
let game = document.querySelector(".board");
let dialog = document.querySelector("dialog");
let btnCls = document.querySelector(".cls");
let resBtn = document.querySelector(".restart-button")
let mgs = document.querySelector(".mgs");
let span = document.querySelector("span");
let turnO = true;
let count = 0;

const winningPatterns = [
    // Rows
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    
    // Diagonals
    [0, 4, 8],
    [2, 4, 6]
  ];

// TO SHOW WHO IS WINNER X OR O
const showWinner = (posiValue1) => {
    dialog.append()
    mgs.append(posiValue1," is the winner")
    dialog.showModal();
}


// TO CLOSE  DIALOG
btnCls.addEventListener("click",() => {
    
    dialog.close();
    btn.forEach((box) => {
        box.innerText = "";
        box.disabled = false;
        mgs.innerText = "";
        count = 0;
        span.classList.remove("span2");
        span.innerText = "";
    })
})


// FUNCTION FOR RESTART BUTTON
const reset = () => {
    btn.forEach((box) => {
        box.innerText = "";
        box.disabled = false;
        count = 0;
        span.classList.remove("span2");
        span.innerText = "";
    })
}

// RESTART BUTTON EVENT
resBtn.addEventListener("click",() => {
    reset();
})

// TO SHOW THE GAME IS DRAW ON THE SCREEN
let draw = () => {
    if (count == 9) {
        span.append("Draw")
        span.classList.add("span2");
        dialog.close();
    }
}

// COUNT .cell BUTTON CLICK
btn.forEach((btn) => {
    btn.addEventListener("click", () => {
        count++;
        draw();
    })
})
 

// FUNCTION TO FIND THE WINNER
const checkWinner = () => {
    for (const pattern of winningPatterns) {
        let posiValue1 = btn[pattern[0]].innerText;
        let posiValue2 = btn[pattern[1]].innerText;
        let posiValue3 = btn[pattern[2]].innerText;

        if (posiValue1 != "" && posiValue1 != "" && posiValue1 != "") {
            if (posiValue1 == posiValue2 && posiValue2 == posiValue3) {
                showWinner(posiValue1);
            }
        }
    }
}


// ITS PRINTS X OR Y ONE BY ONE FOR CLICKING THE .cell(cell the class name of buttons) BUTTON
// AND ALSO THIS IS THE BEGINNIG OF CODE
btn.forEach((cell) => {
    cell.addEventListener("click",() => {
        
        if (turnO) {
            cell.innerText = "X";
            turnO = false;
        } else {
            cell.innerText = "O";
            turnO = true;
        }
        cell.disabled = true;
        checkWinner()
    })
})