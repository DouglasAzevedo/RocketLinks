const toggle = document.getElementById("toggle");
const theme = window.localStorage.getItem("theme");

if (theme === "dark-blue") {
    document.body.classList.add("dark-blue");
}

toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-blue");
  
  if (theme === "dark-blue") {
    window.localStorage.setItem("theme", "");
  } else {
    window.localStorage.setItem("theme", "dark-blue");
  }
  
});