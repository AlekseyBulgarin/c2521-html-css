const openRegister = document.getElementById("openRegister")
const openLogin = document.getElementById("openLogin")

const registerModal = document.getElementById("registerModal")
const loginModal = document.getElementById("loginModal")

const closeRegister = document.getElementById("closeRegister")
const closeLogin = document.getElementById("closeLogin")

const goLogin = document.getElementById("goLogin")
const goRegister = document.getElementById("goRegister")


openRegister.addEventListener("click", function () {
    registerModal.classList.add("active")
})


openLogin.addEventListener("click", function () {
    loginModal.classList.add("active")
})


closeRegister.addEventListener("click", function () {
    registerModal.classList.remove("active")
})


closeLogin.addEventListener("click", function () {
    loginModal.classList.remove("active")
})


goLogin.addEventListener("click", function (event) {

    event.preventDefault()

    registerModal.classList.remove("active")
    loginModal.classList.add("active")

})


goRegister.addEventListener("click", function (event) {

    event.preventDefault()

    loginModal.classList.remove("active")
    registerModal.classList.add("active")

})


registerModal.addEventListener("click", function (event) {

    if (event.target === registerModal) {
        registerModal.classList.remove("active")
    }

})


loginModal.addEventListener("click", function (event) {

    if (event.target === loginModal) {
        loginModal.classList.remove("active")
    }

})
