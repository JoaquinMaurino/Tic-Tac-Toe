const winningCombinations = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7]
  ];
  
  let currentPlayer = "X";
  
  const cells = document.getElementsByClassName("cell");
  
  for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener("click", function(event) {
      event.target.innerHTML = currentPlayer;
      checkWinningCombination();
      currentPlayer = (currentPlayer === "X") ? "O" : "X";
    });
  }
  
  function checkWinningCombination() {
    for (let i = 0; i < winningCombinations.length; i++) {
      const combination = winningCombinations[i];
      const cell1 = document.getElementById("cell-" + combination[0]).innerHTML;
      const cell2 = document.getElementById("cell-" + combination[1]).innerHTML;
      const cell3 = document.getElementById("cell-" + combination[2]).innerHTML;
      if (cell1 === cell2 && cell2 === cell3 && cell1 !== "") {
        changeBackgroundColor(combination[0], combination[1], combination[2]);
        let tableScore = document.getElementById('tableScore')
        tableScore.innerHTML = ""
        tableScore.innerHTML += `${cell1} es el ganador!`
      }
    }
  }
  
  function changeBackgroundColor(cell1, cell2, cell3) {
    document.getElementById("cell-" + cell1).style.backgroundColor = "#77dd77";
    document.getElementById("cell-" + cell2).style.backgroundColor = "#77dd77";
    document.getElementById("cell-" + cell3).style.backgroundColor = "#77dd77";
  }
