document.addEventListener("mousemove", (e) => {
    let cursor = document.getElementById("cursor");
    cursor.style.top = e.clientY + "px";
    cursor.style.left = e.clientX + "px";
});
