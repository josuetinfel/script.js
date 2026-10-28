let btn1 = document.getElementById("btn1");
const titulo = document.getElementById("titulo")

btn1.addEventListener("click", function () {
    titulo.innerText = "JavaScript é Incrível!";
});


let btn2 = document.getElementById("btn2");
const inputTexto = document.getElementById("inputTexto");
const mensagem = document.getElementById("mensagem");

btn2.addEventListener("click", function () {
    mensagem.innerText = "Olá, " + inputTexto.value + "!";
});


let caixa = document.getElementById("caixa");

caixa.addEventListener("mouseover", function () {
    caixa.style.backgroundColor = "RED";
});

caixa.addEventListener("mouseout", function () {
    caixa.style.backgroundColor = "#3498db"
});

let btn3 = document.getElementById("btn3");
const lista = document.getElementById("lista");

btn3.addEventListener("click", function () {
    let novoItem = document.createElement("li");
    novoItem.innerText = "Novo Item";
    lista.appendChild(novoItem);
});

let btn4 = document.getElementById("btn4");
btn4.addEventListener("click", function () {
    if (caixa.style.display === "none") {
        caixa.style.display = "block";
    } else {
        caixa.style.display = "none";
    }
});

let imagem = document.getElementById("imagem");
imagem.addEventListener("click", () => {
    imagem.src = 'https://www.bing.com/th/id/OIP.Cy22JGAizrbCjF0uu4897AHaHa?w=193&h=193&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=ImgAns&rm=2'
});