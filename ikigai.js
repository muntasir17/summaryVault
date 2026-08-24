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
    {quote : "আমাদের সবার বেঁচে থাকার কারণ (ইকিগাই) হয়তো আলাদা, কিন্তু প্রতিটি সকালে এমন একটা নির্দিষ্ট উদ্দেশ্য নিয়ে ঘুম থেকে ওঠা উচিত—যা আমাদের জীবনকে ভেতর থেকে আনন্দময় ও অর্থপূর্ণ করে তোলে।"},
    {quote : "আপনি যখন নিজের ভালোলাগার কোনো কাজে পুরোপুরি ডুবে যাবেন, তখন চারপাশের সময় বা অন্য কোনো চিন্তার অস্তিত্ব থাকে না। এই পূর্ণ মনোযোগই মানুষকে ভেতরের আসল শান্তি দেয়।"},
    {quote : "যে মানুষ তার প্রিয় কাজগুলো ভালোবেসে সারাজীবন চালিয়ে যায়, সে কখনোই বৃদ্ধ হয় না। সত্যিকারের অবসর বলতে কিছু নেই, প্রিয় কাজের সাথে যুক্ত থাকাটাই দীর্ঘ ও সুস্থ জীবনের আসল রহস্য।"},
    {quote : "যে জিনিসগুলো আপনার নিয়ন্ত্রণে নেই, তা নিয়ে অযথা দুশ্চিন্তা করা থামান। মনের প্রশান্তিই দীর্ঘায়ুর সবচেয়ে বড় চাবিকাঠি—তাই ছোটখাটো ঝামেলাগুলোকে হাসিমুখে ছেড়ে দিতে শিখুন।"},
    {quote : "সুস্থ ও দীর্ঘ জীবনের খুব সাধারণ এক নিয়ম—পেট ১০০% ভরার আগেই খাওয়া শেষ করুন। শরীরকে খানিকটা হালকা রাখলে মন ও শরীর দুটোই সবসময় প্রাণবন্ত থাকে।"},
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



