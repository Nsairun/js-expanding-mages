const gallery = document.querySelectorAll(".gallery")

 gallery.forEach((galleryCard) => {
     galleryCard.addEventListener("click", () => {
        removeActiveClass()
        galleryCard.classList.add("active")
    })
 })

function removeActiveClass() {
        gallery.forEach(galleryCard => {
        galleryCard.addEventListener("click", () => {
            galleryCard.classList.remove("active")
        })
    })
}