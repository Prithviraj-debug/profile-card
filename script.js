const $card = document.querySelector(".user-card");

setTimeout(() => {
    $card.classList.remove("skeleton");
    $card.querySelectorAll(".hide-text").forEach((card) => card.classList.remove("hide-text"));
}, 3000);