var languages = {
    fa:{
        sc1:"انجماد، سرمایش و گرمایش",
        m1:"صنایع",
        m2:"محصولات",
        m3:"درباره ما",
        m4:"اخبار",
        m5:"حرفه ما",
        m6:"خدمات",
        m7:"ارتباط با ما",
        s12:"ما VALERIA هستیم. ما به صنعت غذای جهانی طیف کاملی از فناوری‌های مکانیکی ، برودتی را از یک شرکت ارائه می‌کنیم - از انجماد تا سرد کردن و گرم کردن مواد غذایی با کیفیت.",
        s2:"راه حل",
        s22:"ما راه حل های پایداری ارائه می دهیم که به نفع محیط زیست و بودجه شماست",
        s3:"خبرنامه",
        s32:" عضو خبرنامه ما مشترک شوید و آخرین اخبار را دریافت کنید",
        s33:"نام",
        s34:"ایمیل",
        s36:"دنبال کردن",
        s35:"بله، من مایلم از VALERIA خبرنامه دریافت کنم. سیاست حفظ حریم خصوصی ما را بخوانید",
    },
    en:{
        sc1:"Freezing, cooling, and heating of quality food",
        m1:"INDUSTRIES",
        m2:"PRODUCTS",
        m3:"ABOUT",
        m4:"NEWS",
        m5:"CAREER",
        m6:"SERVICES",
        m7:"CONTACT",
        s12:"We are VALERIA. We offer the global food industry the full range of mechanical, cryogenic, and plate technology from just one company – from freezing to cooling and heating of quality food.",
        s2:"Solution",
        s22:"we deliver sustainable solutions that benefit the environment and your budget",
        s3:"News",
        s32:"subscribe to our newsletter and get the latest news",
        s33:"Name",
        s34:"Email",
        s36:"Subscribe",
        s35:"Yes, I would like to receive newsletters from VALERIA. Read our Privacy policy",
        s4:"Career",
        s42:"Join us and become part of a growing company with global ambitions as well as sites and customers around the world.  At DSI Dantech, you get the chance to have an international career where collaboration across cultures, languages, and borders is just another day at work.",
        s43:"EXPLORE YOUR OPPORTUNITIES",
        sm42:"take part in our journey",
    }
}
if(window.location.hash){
    if(window.location.hash === "#en"){
        document.body.style.direction = "ltr";
        s1.textContent = languages.en.sc1;
        m1.textContent = languages.en.m1;
        m2.textContent = languages.en.m2;
        m3.textContent = languages.en.m3;
        m4.textContent = languages.en.m4;
        m5.textContent = languages.en.m5;
        m6.textContent = languages.en.m6;
        m7.textContent = languages.en.m7;
        st1.textContent = languages.en.sc1;
        s12.textContent = languages.en.s12;
        st12.textContent = languages.en.s12;
        sm12.textContent = languages.en.s12;
        sm1.textContent = languages.en.s12;
        s2.textContent = languages.en.s2;
        s22.textContent = languages.en.s22;
        st2.textContent = languages.en.s2;
        st22.textContent = languages.en.s22;
        sm2.textContent = languages.en.s2;
        sm22.textContent = languages.en.s22;
        s3.textContent = languages.en.s3;
        s32.textContent = languages.en.s32;
        s33.textContent = languages.en.s33;
        s34.textContent = languages.en.s34;
        s36.textContent = languages.en.s36;
        s35.textContent = languages.en.s35;
        st3.textContent = languages.en.s3;
        st33.textContent = languages.en.s32;
        st34.textContent = languages.en.s35;
        st35.textContent = languages.en.s36;
        sm3.textContent = languages.en.s3;
        sm32.textContent = languages.en.s32;
        sm33.textContent = languages.en.s35;
        sm34.textContent = languages.en.s36;
        s4.textContent = languages.en.s4;
        s42.textContent = languages.en.s42;
        s43.textContent = languages.en.s43;
        sm4.textContent = languages.en.s4;
        sm42.textContent = languages.en.sm42;
        sm43.textContent = languages.en.s42;
        sm44.textContent = languages.en.s43;
        st4.textContent = languages.en.s4;
        st42.textContent = languages.en.sm42;
        st43.textContent = languages.en.s42;
        st44.textContent = languages.en.s43;
    }
}
var reload = document.querySelectorAll('.reload');
for(i=0;i<=reload.length;i++){
    reload[i].onclick=function(){
        window.location.hash = this.getAttribute('href');
        window.location.reload();
    }
}