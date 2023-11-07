let dog = document.querySelector('img')

dog.addEventListener("mouseover", ()=>{
    dog.src="./img/happy_dog.png"
})
dog.addEventListener("mouseout", ()=>{
    dog.src="./img/mad_dog.png"
})

dog.addEventListener("click", ()=>{
    dog.classList.toggle("big")
})