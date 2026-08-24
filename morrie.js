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

let morrieArr = [
    {quote : "জীবনের সবচেয়ে গুরুত্বপূর্ণ কাজ হলো কীভাবে অন্যকে ভালোবাসা দিতে হয় তা শেখা, এবং সেই ভালোবাসাকে নিজের হৃদয়ে গ্রহণ করার পথটা খোলা রাখা।"},
    {quote : "মৃত্যু এসে পৌঁছানোর আগেই নিজেকে সব ভুলত্রুটির জন্য ক্ষমা করে দাও, আর তারপর অন্য সবাইকে মন থেকে ক্ষমা করে দাও।"},
    {quote : "আমাদের চারপাশে অসংখ্য মানুষ এক অদ্ভুত অর্থহীন জীবন কাটাচ্ছে। তাদের ব্যস্ত দেখলে মনে হয় তারা সজাগ, কিন্তু ভেতরে ভেতরে তারা আসলে ঘুমিয়ে আছে—কারণ তারা শুরু থেকেই ভুল জিনিসের পেছনে ছুটছে।"},
    {quote : "এই পৃথিবী ছেড়ে চলে যাওয়ার পরও মানুষ বেঁচে থাকে তার ভালোবেসে যাওয়ার ক্ষমতার মাধ্যমে। যতক্ষণ ভালোবাসার স্মৃতি বেঁচে থাকে, ততক্ষণ মানুষ সত্যি অর্থে কখনো হারিয়ে যায় না।"},
    {quote : "নিজেকে ভালোবাসার মানুষের পাশে সঁপে দাও, আশেপাশের সমাজের জন্য কিছু করো, আর এমন কিছুর পেছনে সময় দাও যা তোমার অস্তিত্বকে একটা বাস্তব অর্থ প্রদান করে।"},
]
let idx = 0;
let para = document.querySelector(".para");
let left = document.querySelector(".left");
let right = document.querySelector(".right");

right.addEventListener("click",()=>{
    idx++;
    if(idx >= morrieArr.length){
        idx = 0;
    }
    para.innerHTML = morrieArr[idx].quote;
})
left.addEventListener("click",()=>{
idx--;
if(idx <= 0){
    idx = morrieArr.length - 1
}
para.innerHTML = morrieArr[idx].quote;

})