const eye = document.querySelector(".material-icons");
const pw = document.querySelector("#password");

eye.addEventListener("click", function() {
    const vis = pw.getAttribute("type") === "password" ? "text" : "password";
    pw.setAttribute("type", vis);
    if (eye.innerHTML === "visibility_off") {
        eye.innerHTML = "visibility"
    }
    else {
        eye.innerHTML = "visibility_off"
    }
})