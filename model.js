let app = document.getElementById("app");

let problems = [
    {
        img: "tsume1.png", 
        moves: 7,
        author: "Futakami Tatsuya 9-dan",
        source: "Shogi for Beginners (Fairbairn)",
        solution: "1. G*4c K2b 2. S*2c Kx2c 3. S*1b Lx1b 4. B3b+"
    },
    {
        img: "tsume2.png", 
        moves: 7,
        author: "Futakami Tatsuya 9-dan",
        source: "Shogi for Beginners (Fairbairn)",
        solution: "1. R*1c Kx1c 2. R*1b Lx1b 3. +B3e K1d 4. +B2d" 
    },
    {
        img: "tsume3.png",
        moves: "3",
        author: "Unknown",
        source: "Shogi (magazine), issue 57, September 1985",
        solution: "1. S*4b and if 1... Kx4b 2. G*3b, if 1... Gx4b 2. G*2d, and if 1... K3d 2. G*2e"
    }
];

let choice = 0;
let currentImg = "tsume1.png";
let currentMoveCount;
let currentAuthor;
let currentSource;
let currentSolution;