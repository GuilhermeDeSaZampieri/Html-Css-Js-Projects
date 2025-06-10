const aZ = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

const btn = document.querySelector("button");
btn.addEventListener("submit",  GeneratePassword());

function GeneratePassword(e) {
    e.preventDefault();
    console.log("aaa");
}
