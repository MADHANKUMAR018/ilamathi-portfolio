document.addEventListener("DOMContentLoaded", () => {
    const cursor = document.getElementById("cursor");
    
    document.addEventListener("mousemove", (e) => {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
    });

    const form = document.querySelector(".contact-form");
    
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        
        const name = form.name.value.trim();
        const email = form.email.value.trim();
        const message = form.message.value.trim();
        
        if (name === "" || email === "" || message === "") {
            alert("Please fill in all fields.");
            return;
        }
        
        if (!validateEmail(email)) {
            alert("Please enter a valid email address.");
            return;
        }
        
        alert("Message sent successfully!");
        form.reset();
    });

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
});
