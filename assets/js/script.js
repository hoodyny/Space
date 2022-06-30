let levers = document.querySelectorAll(".lever")
let checkboxes = document.querySelectorAll(".checkbox")
let launch = document.querySelector(".button")
let ok = document.querySelector(".submit")
let pass = document.querySelector(".field")

ok.addEventListener("click", () => {
    if (pass.value === "1") {
        for (let i = 0, b = 0; i <= checkboxes.length, b <= levers.length; i++, b++) {
            checkboxes[i].disabled = false
            levers[i].disabled = false
            launch.disabled = false
            pass.disabled = true
            ok.disabled = true
        }
    } else {
        console.log("1")
    }
})