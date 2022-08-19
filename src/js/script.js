function addItem () {
    const input = document.getElementById("input").value
    console.log(input)
    
    toggleError(input)
    if (!input)return

    const list = document.getElementById("list")
    const li = document.createElement("li")
    li.appendChild(document.createTextNode(input))
    list.appendChild(li)
}
function toggleError (input) {
    const errorDiv = document.getElementById("alert")
    if (!input) {
        errorDiv.style.display="block"
    } else {
        errorDiv.style.display="none"
    }
    
}

document.addEventListener("DOMContentLoaded", function() {
    // alert("hello")
    document.getElementById("button").onclick=function(event) {
        event.preventDefault()
        addItem()
    }
    document.getElementById("input").onkeyup=function(event) {
        event.preventDefault()
        toggleError(event.target.value)
    }
})
