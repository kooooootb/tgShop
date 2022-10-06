document.getElementById("Bag").onclick = function (){
    localStorage.setItem("someTag", "Bag");
    window.location.href = "index.html";
}