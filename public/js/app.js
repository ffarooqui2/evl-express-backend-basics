document.addEventListener("DOMContentLoaded", () => {
    const rectangle = document.querySelector(".rectangle");
    
    rectangle.addEventListener("click", () => {
      rectangle.style.backgroundColor = "blue";
    });
});
console.log("Here")