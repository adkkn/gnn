// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Set up current date for news items
    const currentDate = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = currentDate.toLocaleDateString('en-US', options);
    
    // Update all date elements with the current date
    const dateElements = document.querySelectorAll('.date');
    dateElements.forEach(element => {
        element.textContent = formattedDate;
    });
    
    // Set up search functionality
    const searchBar = document.querySelector('.search-bar input');
    const searchButton = document.querySelector('.search-bar button');
    
    searchButton.addEventListener('click', function() {
        performSearch();
    });
    
    searchBar.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            performSearch();
        }
    });
    
    function performSearch() {
        const searchTerm = searchBar.value.trim().toLowerCase();
        if (searchTerm.length > 0) {
            alert(`Searching for: ${searchTerm}`);
            // In a real application, this would connect to a backend or database
            searchBar.value = '';
        }
    }
    
// Set up dynamic breaking news based on the current language
    const breakingNewsContent = {
        'english': [
            "Global summit on climate change concludes with new agreements",
            "Tech giant unveils revolutionary AI assistant",
            "Sports championship final ends in dramatic overtime victory",
            "Stock markets reach record highs amid economic recovery",
            "New health study reveals benefits of Mediterranean diet",
            "International space mission successfully lands on Mars"
        ],
        'arabic': [
            "قمة المناخ العالمية تختتم باتفاقيات جديدة",
            "عملاق التكنولوجيا يكشف عن مساعد ذكاء اصطناعي ثوري",
            "نهائي البطولة الرياضية ينتهي بفوز دراماتيكي في الوقت الإضافي",
            "أسواق الأسهم تصل إلى مستويات قياسية وسط تعافي اقتصادي",
            "دراسة صحية جديدة تكشف عن فوائد النظام الغذائي المتوسطي",
            "مهمة فضائية دولية تهبط بنجاح على سطح المريخ"
        ],
        'urdu': [
            "موسمیاتی تبدیلی پر عالمی سمٹ نئے معاہدوں کے ساتھ اختتام پذیر ہوئی",
            "ٹیک جائنٹ نے انقلابی اے آئی اسسٹنٹ متعارف کرایا",
            "اسپورٹس چیمپئن شپ فائنل کا ڈرامائی اوور ٹائم میں اختتام",
            "معاشی بحالی کے درمیان اسٹاک مارکیٹس ریکارڈ بلندیوں پر پہنچ گئیں",
            "نئی صحت مطالعہ میڈیٹرینین ڈائیٹ کے فوائد بتاتا ہے",
            "بین الاقوامی خلائی مشن کامیابی سے مریخ پر لینڈ کرتا ہے"
        ],
        'bulgarian': [
            "Глобалната среща на върха за климатичните промени приключи с нови споразумения",
            "Технологичен гигант представи революционен AI асистент",
            "Финалът на спортното първенство завърши с драматична победа в продълженията",
            "Фондовите пазари достигат рекордни върхове на фона на икономическото възстановяване",
            "Ново здравно проучване разкрива ползите от средиземноморската диета",
            "Международна космическа мисия успешно каца на Марс"
        ],
        'russian': [
            "Глобальный саммит по изменению климата завершился новыми соглашениями",
            "Технологический гигант представил революционного ИИ-ассистента",
            "Финал спортивного чемпионата завершился драматичной победой в дополнительное время",
            "Фондовые рынки достигают рекордных показателей на фоне восстановления экономики",
            "Новое исследование здоровья раскрывает преимущества средиземноморской диеты",
            "Международная космическая миссия успешно приземлилась на Марс"
        ],
        'indonesian': [
            "KTT global perubahan iklim diakhiri dengan kesepakatan baru",
            "Raksasa teknologi memperkenalkan asisten AI revolusioner",
            "Final kejuaraan olahraga berakhir dengan kemenangan dramatis di babak tambahan",
            "Pasar saham mencapai rekor tertinggi di tengah pemulihan ekonomi",
            "Studi kesehatan baru mengungkapkan manfaat pola makan Mediterania",
            "Misi luar angkasa internasional berhasil mendarat di Mars"
        ],
        'chinese': [
            "全球气候变化峰会达成新协议",
            "科技巨头推出革命性人工智能助手",
            "体育锦标赛决赛以加时赛戏剧性胜利结束",
            "股市在经济复苏中创历史新高",
            "新健康研究揭示地中海饮食的益处",
            "国际太空任务成功登陆火星"
        ]
    };
    
    // Detect current language from URL or html tag
    function detectLanguage() {
        const currentPage = window.location.pathname.split("/").pop().toLowerCase();
        const htmlLang = document.documentElement.lang.toLowerCase();
        
        if (currentPage.includes('arabic') || htmlLang === 'ar') {
            return 'arabic';
        } else if (currentPage.includes('urdu') || htmlLang === 'ur') {
            return 'urdu';
        } else if (currentPage.includes('bulgarian') || htmlLang === 'bg') {
            return 'bulgarian';
        } else if (currentPage.includes('russian') || htmlLang === 'ru') {
            return 'russian';
        } else if (currentPage.includes('indonesian') || htmlLang === 'id') {
            return 'indonesian';
        } else if (currentPage.includes('chinese') || htmlLang === 'zh') {
            return 'chinese';
        } else {
            return 'english';
        }
    }
    
    // Get content in the correct language
    const currentLanguage = detectLanguage();
    const newsItems = breakingNewsContent[currentLanguage] || breakingNewsContent['english'];
    
    // Set the marquee content in the appropriate language
    const marquee = document.querySelector('.breaking-news marquee');
    if (marquee) {
        let breakingNewsHTML = '';
        
        newsItems.forEach((news, index) => {
            breakingNewsHTML += news;
            if (index < newsItems.length - 1) {
                breakingNewsHTML += ' • ';
            }
        });
        
        marquee.innerHTML = breakingNewsHTML;
    }
    
    // Check if the page is RTL for marquee direction
    if (document.dir === 'rtl' || document.documentElement.lang === 'ar' || document.documentElement.lang === 'ur') {
        if (marquee) {
            marquee.setAttribute('direction', 'right');
        }
    }
    
    // Add active class to current page in navigation
    const currentPage = window.location.pathname.split("/").pop();
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        const linkHref = link.getAttribute('href');
        if (linkHref === currentPage || (currentPage === '' && linkHref === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
    
    // Add smooth scrolling for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Add lazy loading for images (modern browsers support this natively)
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.setAttribute('loading', 'lazy');
    });
    
    // The hover effects are now handled by CSS
    
    // Add smooth reveal animations for content
    const animateElements = document.querySelectorAll('.main-article, .article, .grid-item');
    
    // Simple reveal animation using IntersectionObserver
    if ('IntersectionObserver' in window) {
        const appearOptions = {
            threshold: 0.15,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
            entries.forEach(entry => {
                if (!entry.isIntersecting) {
                    return;
                } else {
                    // Make sure element becomes visible and stays visible
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                    appearOnScroll.unobserve(entry.target);
                }
            });
        }, appearOptions);
        
        animateElements.forEach(element => {
            // Set initial state
            element.style.opacity = '0';
            element.style.transform = 'translateY(20px)';
            element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            appearOnScroll.observe(element);
        });
    } else {
        // Fallback for browsers without IntersectionObserver
        animateElements.forEach(element => {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        });
    }
    
    // Make sure all content is visible when page is fully loaded
    window.addEventListener('load', function() {
        setTimeout(function() {
            document.querySelectorAll('.main-article, .article, .grid-item').forEach(element => {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            });
        }, 800);
    });
    
    // Add sticky header effect
    const header = document.querySelector('header');
    let lastScrollY = window.scrollY;
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            header.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
            
            // Hide header when scrolling down, show when scrolling up
            if (window.scrollY > lastScrollY) {
                header.style.transform = 'translateY(-100%)';
            } else {
                header.style.transform = 'translateY(0)';
            }
        } else {
            header.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.1)';
            header.style.transform = 'translateY(0)';
        }
        
        lastScrollY = window.scrollY;
    });
    
    // Add smooth scrolling with enhanced visual feedback
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // Add a flash effect to indicate the target
                const flashOverlay = document.createElement('div');
                flashOverlay.style.position = 'absolute';
                flashOverlay.style.top = '0';
                flashOverlay.style.left = '0';
                flashOverlay.style.right = '0';
                flashOverlay.style.bottom = '0';
                flashOverlay.style.backgroundColor = 'rgba(230, 180, 0, 0.2)';
                flashOverlay.style.zIndex = '1';
                flashOverlay.style.opacity = '0';
                flashOverlay.style.transition = 'opacity 0.5s ease';
                
                targetElement.style.position = 'relative';
                targetElement.appendChild(flashOverlay);
                
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                setTimeout(() => {
                    flashOverlay.style.opacity = '1';
                    setTimeout(() => {
                        flashOverlay.style.opacity = '0';
                        setTimeout(() => {
                            targetElement.removeChild(flashOverlay);
                        }, 500);
                    }, 500);
                }, 500);
            }
        });
    });
});