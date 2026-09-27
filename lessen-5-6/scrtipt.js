const registerBtn = document.getElementById("registerBtn");

const registerModal = document.getElementById("registerModal");

const closeBtn = document.getElementById("closeBtn");


registerBtn.addEventListener("click", function () {

    registerModal.classList.add("active");

});


closeBtn.addEventListener("click", function () {

    registerModal.classList.remove("active");

});