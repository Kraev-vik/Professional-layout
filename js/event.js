//hiding navigation
document.querySelector('.navigation__close').addEventListener("click", () => {
    document.querySelector('.navigation').classList.add('visually-hidden');
});
//visibling navigation
document.querySelector('.burger').addEventListener("click", () => {
    document.querySelector('.navigation').classList.remove('visually-hidden');
});