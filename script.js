onload = () => {
    document.body.classList.remove("container");
};

const wrapper = document.querySelector(".wrapper");
const openBtn = document.getElementById("openBtn");
const closeBtn = document.getElementById("closeBtn");

openBtn.addEventListener("click", () => {
    wrapper.classList.add("open");
    openBtn.style.display = "none";
    closeBtn.style.display = "inline-block";

    // Descargar el archivo PDF
    const link = document.createElement("a");
    link.href = "Para mi bebe.pdf";
    link.download = "archivo.pdf";
    link.click();
});

closeBtn.addEventListener("click", () => {
    wrapper.classList.remove("open");
    closeBtn.style.display = "none";
    openBtn.style.display = "inline-block";
});