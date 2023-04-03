view();
function view() {
    html = /*html*/ `
    <h1>Tsume problems</h1>
    <div class="container">
        <div class="item">
            <img src="${currentImg}" />
        </div>
        <div class="item">
           <b>Problem #${choice+1}</b><br />
            Moves: ${currentMoveCount}<br />
            Author: ${currentAuthor}<br />
            Source: ${currentSource}<br />
        </div>
        <div class="item">
            <button onclick="getPrev()">Previous</button>
            <button onclick="getNext()">Next</button>
            <button onclick="giveSolution()">Solution</button>
        </div>
    </div>
    `;

    app.innerHTML = html;
}