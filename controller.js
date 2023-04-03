getProblem();
function getProblem() {
    currentImg = problems[choice].img;
    currentMoveCount = problems[choice].moves;
    currentAuthor = problems[choice].author;
    currentSource = problems[choice].source;
    currentSolution = problems[choice].solution;
    view();
}

function getPrev() {
    if(choice == 0) return;
    else {
        choice--;
        getProblem();
    }
}

function getNext() {
    if (choice == problems.length-1) return;
    else {
        choice++;
        getProblem();
    }
}

function giveSolution() {
    alert(problems[choice].solution);
}

