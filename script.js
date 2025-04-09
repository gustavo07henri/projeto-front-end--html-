const toggleBtn = document.getElementById("toggle-theme")
const iconTheme = document.getElementById("icon-theme")
const meuBotao = document.getElementById("meuBotao")
const text = document.getElementById("text")

let isLight = false;

toggleBtn.addEventListener("click", ()=>{
    document.body.classList.toggle("light-mode");
    isLight = !isLight;

    iconTheme.src = isLight ? "image/lua.png" : "image/sun.png";
    iconTheme.alt = isLight ? "Ícone lua" : "Ícone sol";

    iconTheme.style.transform = "rotate(360deg";
    setTimeout(()=> iconTheme.style.transform = "rotate(0geg)", 400);
})

meuBotao.addEventListener("click", function(){
    text.textContent = "Texto alterado com sucesso!"
})