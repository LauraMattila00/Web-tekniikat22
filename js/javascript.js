let hengityskone = document.getElementById("hengityskone");
let dialyysi = document.getElementById("dialyysilaite");
let hengityskone2 = document.getElementById("hengityskone2");
let dialyysi2 = document.getElementById("dialyysi2");
let buttons = document.getElementById("buttons");

hengityskone.style.backgroundColor = "#1c7a97";
hengityskone.style.margin = "10px";
dialyysi.style.backgroundColor = "#6bc5e1";
dialyysi.style.marginBottom = "20px";

hengityskone.addEventListener("click", picture);

 function picture() {
    hengityskone2.classList.toggle("picture");
}

dialyysi.addEventListener("click", picture2);

function picture2() {
    dialyysi2.classList.toggle("picture2");
}

fetch('https://meme-api.herokuapp.com/gimme')
    .then(response => response.json())
    .then(data => {
        document.getElementById("json").innerHTML = '<img src="' + data.url + '" class="img-fluid">';
    }
);