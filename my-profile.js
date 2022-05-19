
document.addEventListener("DOMContentLoaded",() => {
    const newElement = document.createElement("h1");
    newElement.innerText= "Caleb";
    newElement.setAttribute("id", "name")

    document.body.appendChild(newElement)



    const newUl = document.createElement("ul");
    newUl.innerText = "About Me"
    newUl.setAttribute("class", "my-details")

    // const liOne = document.createElement("li")

    let interests = ["food", "sports", "coding", "sleeping"]

    interests.forEach(interest => {
        let el = document.createElement("li")
        el.setAttribute("class", "detail")
        el.innerText = interest
        newUl.appendChild(el)
    })
    // newUl.appendChild(liOne)
    document.body.appendChild(newUl)
})
