const dropdown = document.querySelector("#num")
let score = document.querySelector("#score")
const resetBtn = document.querySelector("#reset")


const p1_tag = document.querySelector("#p1_score")
const p2_tag = document.querySelector("#p2_score")

let p1_score = parseInt(p1_tag.innerText)
let p2_score = parseInt(p2_tag.innerText)

let winValue = null

// I need to get the win value dynamically
dropdown.addEventListener("change", (e) => {
    winValue = parseInt(dropdown.value)

})

// Whenever p1 button will be clicked - increase p1_score
// Whenever p2 button will be clicked - increase p2_score

const p1_btn = document.querySelector("#p1")
const p2_btn = document.querySelector("#p2")

p1_btn.addEventListener("click", (e) => {
    if (p1_score <= winValue) {

        p1_score++;
        // console.log(p1_score)
        // console.log(winValue)

        p1_tag.innerText = `${p1_score}`
        p2_tag.innerText = `${p2_score}`

        
        

        if (p1_score === winValue || p2_score === winValue) {

            p1_btn.setAttribute("disabled", "disabled")
            p2_btn.setAttribute("disabled", "disabled")

            if (p1_score > p2_score){
                // p1_tag.style.color = "green"
                // p2_tag.style.color = "red"
                p1_tag.classList.add("has-text-success")
                p2_tag.classList.add("has-text-danger")

            } else {
                p1_tag.classList.add("is-text-danger")
                p2_tag.classList.add("is-text-success")
            }
        }
        
    }
})

p2_btn.addEventListener("click", (e) => {
    if (p2_score <= winValue) {
    
        p2_score++;
        // console.log(p2_score)
        p1_tag.innerText = `${p1_score}`
        p2_tag.innerText = `${p2_score}`

        if (p1_score === winValue || p2_score === winValue) {
            p1_btn.setAttribute("disabled", "disabled")
            p2_btn.setAttribute("disabled", "disabled")

            if (p1_score > p2_score){
                p1_tag.classList.add("has-text-success")
                p2_tag.classList.add("has-text-danger")
                

            } else {
                p1_tag.classList.add("has-text-danger")
                p2_tag.classList.add("has-text-success")
              
            }
            
        }
       

    }

})

resetBtn.addEventListener("click", (e) => {
    location.reload()
})






