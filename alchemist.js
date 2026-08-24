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









let alchemistArr = [
    {quote : "একটা স্বপ্ন সত্যি হওয়ার পথে একমাত্র বড় বাধা হলো হেরে যাওয়ার ভয়। নিজের মনকে বুঝিয়ে বলো—কষ্ট পাওয়ার ভয়টা আসল কষ্টের চেয়েও অনেক বেশি যন্ত্রণাদায়ক।"},
    {quote : "আমার অতীত কিংবা ভবিষ্যৎ নিয়ে কোনো মাথাব্যথা নেই, আমার সব আগ্রহ কেবল এই 'বর্তমান' মুহূর্তকে ঘিরে। তুমি যদি সবসময় বর্তমানে মন দিতে পারো, তবেই জীবনের আসল আনন্দটা খুঁজে পাবে।"},
    {quote : "তোমার মন যেখানে সবচেয়ে বেশি আবেগ আর টান অনুভব করে, বুঝে নিও তোমার জীবনের আসল ধন-সম্পদ সেখানেই লুকিয়ে আছে।"},
    {quote : "জীবনের আসল রহস্যটা কিন্তু খুব সাধারণ—তুমি যদি সাতবার আছাড় খেয়ে পড়ে যাও, তবুও আটবারের মাথায় পুরো শক্তি নিয়ে তোমাকে আবার উঠে দাঁড়াতে হবে।"},
    {quote : "শুধু চূড়ান্ত লক্ষ্যে পৌঁছানোটাই সব নয়; সেই পথ চলতে চলতে তুমি যা কিছু শিখছ এবং ভেতরে ভেতরে যেভাবে বদলে যাচ্ছ—সেটাই তোমার জীবনের আসল জয়।"},
]
let idx = 0;
let para = document.querySelector(".para");
let left = document.querySelector(".left");
let right = document.querySelector(".right");

right.addEventListener("click",()=>{
    idx++;
    if(idx >= alchemistArr.length){
        idx = 0;
    }
    para.innerHTML = alchemistArr[idx].quote;
})
left.addEventListener("click",()=>{
idx--;
if(idx <= 0){
    idx = alchemistArr.length - 1
}
para.innerHTML = alchemistArr[idx].quote;

})



