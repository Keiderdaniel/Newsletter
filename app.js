const root = document.documentElement;
const btn = document.getElementById("btnTema");
const ano = document.getElementById("ano")

ano.textContent = new Date().getFullYear()

btn.addEventListener("click", () => {
    const escuro = root.getAttribute("data-theme") === 'escuro'

    if (escuro === 'escuro') {
        root.removeAttribute("data-theme")
    } else {
        root.setAttribute("data-theme", "escuro")
    }
})