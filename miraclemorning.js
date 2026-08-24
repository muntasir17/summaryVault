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
let miracleMorningArr = [
    {quote : "আপনার সাফল্যের সীমানা কখনোই আপনার ব্যক্তিগত দক্ষতার সীমা ছাড়িয়ে যেতে পারে না। কারণ সফলতা কোনো পাওয়ার জিনিস নয়, বরং নিজেকে সেই যোগ্য মানুষ হিসেবে গড়ে তোলার এক স্বাভাবিক পরিণতি।"},
    {quote : "প্রতিটি দিন আপনি কীভাবে শুরু করছেন এবং সকালের প্রথম ঘণ্টাটা কীভাবে কাটাচ্ছেন—তার ওপরই নির্ভর করে আপনার জীবনের প্রতিটি ক্ষেত্রে সাফল্য কত দূর পৌঁছাবে।"},
    {quote : "আজ আপনি যেখানে আছেন তা অতীতের সিদ্ধান্তের ফল হতে পারে, কিন্তু ভবিষ্যতে আপনি কোথায় পৌঁছাবেন তা নির্ভর করছে ঠিক এই মুহূর্ত থেকে আপনি কেমন মানুষ হওয়ার পথ বেছে নিচ্ছেন তার ওপর।"},
    {quote : "নিজের জীবনের প্রতিটি ঘটনার সম্পূর্ণ দায় যেদিন থেকে আপনি নিজের কাঁধে তুলে নেবেন, ঠিক সেদিন থেকেই জীবনকে নতুন করে গড়ে তোলার আসল ক্ষমতা আপনার হাতে চলে আসবে।"},
    {quote : "প্রতিটা সকালে এমন একটা উদ্দেশ্য আর উদ্দীপনা নিয়ে ঘুম থেকে উঠুন, যেন দিনটি শেষ হওয়ার পর নিজের জন্য গর্ব করে বলতে পারেন—আজ আমি আমার স্বপ্নের এক ধাপ কাছে পৌঁছেছি।"},
]
let idx = 0;
let para = document.querySelector(".para");
let left = document.querySelector(".left");
let right = document.querySelector(".right");

right.addEventListener("click",()=>{
    idx++;
    if(idx >= miracleMorningArr.length){
        idx = 0;
    }
    para.innerHTML = miracleMorningArr[idx].quote;
})
left.addEventListener("click",()=>{
idx--;
if(idx <= 0){
    idx = miracleMorningArr.length - 1
}
para.innerHTML = miracleMorningArr[idx].quote;

})



