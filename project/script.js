function solveSquareEquation() {
    var a = parseInt(document.getElementById("A").value)
    var b = parseInt(document.getElementById("B").value)
    var c = parseInt(document.getElementById("C").value)
    if(!validateCoeffs(a,b,c)) {
        alert("Введите корректные данные");
        return;
    }
    var answer;
    var d = b * b - 4 * a * c;
    if(d < 0) {
        answer = "Нет действительных корней";
    } else if(d === 0) {
        answer = "X = " + ((-b / (2 * a))).toFixed(2);
    } else {
        var x1 = ((-b + Math.sqrt(d)) / (2 * a)).toFixed(2);
        var x2 = ((-b - Math.sqrt(d)) / (2 * a)).toFixed(2);
        answer = "X1 = " + x1 + "  " + "X2 = " + x2;
    }
    addAnswerInTable(a,b,c,answer);
    alert("Ответ: " + answer);

}

function validateCoeffs(a, b, c) {
    return !(isNaN(a) || isNaN(b) || isNaN(c));
}

function addAnswerInTable(a, b, c, answer) {
    var table = document.getElementById("answerTable");
    var row = document.createElement("tr");
    var aCell = row.insertCell(0);
    var bCell = row.insertCell(1);
    var cCell = row.insertCell(2);
    var answerCell = row.insertCell(3);
    aCell.innerHTML = a;
    aCell.setAttribute("class", "coeffCell");
    bCell.innerHTML = b;
    bCell.setAttribute("class", "coeffCell");
    cCell.innerHTML = c;
    cCell.setAttribute("class", "coeffCell");
    answerCell.innerHTML = answer;
    answerCell.setAttribute("class", "answerCell");
    if(getNumOfRows(table) % 2 == 0){
        row.setAttribute('class', "evenRow");
    }else {
        row.setAttribute('class', "oddRow");
    }
    row.addEventListener("click", deleteRow);
    table.appendChild(row);
}

function getNumOfRows(table){
    return table.children.length;
}

function deleteRow() {
    this.parentElement.removeChild(this);
    updateColors();
}

function updateColors() {
    var rows = document.getElementById("answerTable").children;
    for (i = 2; i < rows.length;i++) {
        if(i % 2 == 0){
            rows[i].setAttribute('class', "evenRow");
        }
        else {
            rows[i].setAttribute('class', "oddRow");
        }
    }
}
