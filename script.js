// Get all the expand-collapse buttons
const questions = document.querySelectorAll(".question")
// Get all the card contents
const answers = document.querySelectorAll(".answer")
// Get all the icons
const icons = document.querySelectorAll(".icon")
// Get mode button
const modeButton = document.querySelector(".mode")

// Add click event listener to mode button so each time the button is clicked, the mode will be toggled
modeButton.addEventListener("click", () => {
    if(modeButton.src === "http://localhost:5500/images/dark_mode_40dp_000000.png") {
        modeButton.src = "./images/light_mode_40dp_FFFFFF.png"
        document.querySelector(".title").style.color = "#FFFFFF"
        document.querySelector("body").style.backgroundColor = "#000000"
        // questions.style.backgroundColor = "#000000"
        questions.forEach(question => {
            question.style.color = "#FFFFFF"
        })
        icons.forEach(icon => {
            if(icon.src === "http://localhost:5500/images/expand_more_40dp_000000.png") {
                icon.src = "./images/expand_more_40dp_FFFFFF.png"
            } else {
                icon.src = "./images/expand_less_40dp_FFFFFF.png"
            }
        })
        answers.forEach(answer => {
            answer.style.color = "#FFFFFF"
        })
    } else {
        modeButton.src = "./images/dark_mode_40dp_000000.png"
        document.querySelector(".title").style.color = "#000000"
        document.querySelector("body").style.backgroundColor = "#FFFFFF"
        // questions.style.backgroundColor = "#FFFFFF"
        questions.forEach(question => {
            question.style.color = "#000000"
        })
        icons.forEach(icon => {
            if(icon.src === "http://localhost:5500/images/expand_more_40dp_FFFFFF.png") {
                icon.src = "./images/expand_more_40dp_000000.png"
            } else {
                icon.src = "./images/expand_less_40dp_000000.png"
            }
        })
        answers.forEach(answer => {
            answer.style.color = "#000000"
        })
    }
})

// Add click event listener to each button so each time a button is clicked, the card content will be shown or hidden
questions.forEach((question, index) => { // index is the index of the button in the buttons nodeList
    question.addEventListener("click", (e) => {
        const answer = answers[index]
        const icon = icons[index]
        if (answer.style.display === "none") {
            answer.style.display = "block"
            if(icon.src === "http://localhost:5500/images/expand_more_40dp_000000.png") {
                icon.src = "./images/expand_less_40dp_000000.png"
            } else if(icon.src === "http://localhost:5500/images/expand_more_40dp_FFFFFF.png") {
                icon.src = "./images/expand_less_40dp_FFFFFF.png"
            }
        } else {
            answer.style.display = "none"
            if(icon.src === "http://localhost:5500/images/expand_less_40dp_000000.png") {
                icon.src = "./images/expand_more_40dp_000000.png"
            } else if(icon.src === "http://localhost:5500/images/expand_less_40dp_FFFFFF.png") {
                icon.src = "./images/expand_more_40dp_FFFFFF.png"
            }
        }
    })
})