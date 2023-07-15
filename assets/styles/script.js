const galleryCards = document.querySelector(".gallery")

 galleryCards.forEach((galleryCard) => {
     galleryCard.addEventListener("click", () => {
        removeActiveSpan()
        galleryCard.classList.add("active")
    })
 })

function removeActiveSpan() {
        galleryCards.forEach(galleryCard => {
        galleryCard.addEventListener("click", () => {
            galleryCard.classList.remove("active")
        })
    })
}