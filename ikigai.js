const toggleBtn = document.getElementById('mobile-toggle');
const mobileMenu = document.getElementById('mobile-menu');

toggleBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});
document.addEventListener("DOMContentLoaded", function () {
        const reveals = document.querySelectorAll(".reveal");

        const revealOnScroll = () => {
            const windowHeight = window.innerHeight;
            reveals.forEach((el) => {
                const elementTop = el.getBoundingClientRect().top;
                const revealPoint = 80;

                if (elementTop < windowHeight - revealPoint) {
                    el.classList.add("active");
                }
            });
        };

        window.addEventListener("scroll", revealOnScroll);
        revealOnScroll();
    });
let ikigaigArr = [
    {quote : ""},
    {quote : ""},
    {quote : ""},
    {quote : ""},
    {quote : ""},
]
let idx = 0;
let para = document.querySelector(".para");
let left = document.querySelector(".left");
let right = document.querySelector(".right");

right.addEventListener("click",()=>{
    idx++;
    if(idx >= ikigaigArr.length){
        idx = 0;
    }
    para.innerHTML = ikigaigArr[idx].quote;
})
left.addEventListener("click",()=>{
idx--;
if(idx <= 0){
    idx = ikigaigArr.length - 1
}
para.innerHTML = ikigaigArr[idx].quote;

})



