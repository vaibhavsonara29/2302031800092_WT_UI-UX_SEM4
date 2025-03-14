document.addEventListener("DOMContentLoaded", () => {
    console.log("Website Loaded Successfully!");
    document.addEventListener("wheel", (event) => {
        event.preventDefault();
        if (event.deltaY > 0) {
            window.scrollBy({ top: window.innerHeight, behavior: "smooth" });
        } else {
            window.scrollBy({ top: -window.innerHeight, behavior: "smooth" });
        }
    }, { passive: false });
});
function myFunction(){
    alert("Form successfully submitted!");
}
function myfunction(){
    alert("Your message send successfully!");
}
function mysubscribe(){
    alert("Welcome to subscribe!");
}