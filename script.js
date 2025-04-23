// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Set up current date for news items
    const currentDate = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = currentDate.toLocaleDateString('en-US', options);
    const urlParams = new URLSearchParams(window.location.search);
    const articleId = urlParams.get('id');
    const language = urlParams.get('lang') || 'en';
    
    // Set the active language in navigation
    setActiveLanguage(language);
    
    // Load the article data only if we're on an article page
    if (articleId && document.getElementById('article-content')) {
        loadArticleData(articleId, language);
    } else if (document.getElementById('article-content') && !articleId) {
        console.log("On article page but no ID provided");
        // Maybe show a default article or error message instead of redirecting
    }
    
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

function setActiveLanguage(language) {
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.classList.remove('active');
        
        if (language === 'en' && link.getAttribute('href') === 'index.html') {
            link.classList.add('active');
        } else if (language === 'ar' && link.getAttribute('href') === 'arabic.html') {
            link.classList.add('active');
        } else if (language === 'ur' && link.getAttribute('href') === 'urdu.html') {
            link.classList.add('active');
        } else if (language === 'bg' && link.getAttribute('href') === 'bulgarian.html') {
            link.classList.add('active');
        } else if (language === 'ru' && link.getAttribute('href') === 'russian.html') {
            link.classList.add('active');
        } else if (language === 'id' && link.getAttribute('href') === 'indonesian.html') {
            link.classList.add('active');
        } else if (language === 'zh' && link.getAttribute('href') === 'chinese.html') {
            link.classList.add('active');
        }
    });
}

function loadArticleContent(articleId, language) {
    // This is a simplified version - in a real app, you'd fetch from a database
    const articles = {
        'climate-en': {
            title: 'Global Leaders Reach Historic Climate Agreement',
            category: 'Politics',
            date: 'April 11, 2025',
            image: 'https://grist.org/wp-content/uploads/2015/12/cop21-c-conexiocc81ncop-agencia-de-noticias.jpg',
            imageCaption: 'World leaders at the Global Climate Summit',
            author: 'Sarah Johnson',
            content: `<p>World leaders from over 190 countries have reached a landmark agreement at the Global Climate Summit to reduce carbon emissions by 50% by 2030. The agreement, which comes after two weeks of intense negotiations, includes mechanisms for financial support to developing nations and sets ambitious targets for renewable energy adoption.</p>
                      <p>The pact outlines a roadmap for phasing out fossil fuel subsidies, investing in clean energy infrastructure, and implementing stricter emissions regulations across industries. Developed nations have committed to contributing over $150 billion annually to help vulnerable countries mitigate and adapt to climate impacts.</p>
                      <p>Environmental activists hailed the agreement as a "turning point for humanity," though some critics argue that enforcement mechanisms remain vague. Still, experts agree this deal sends a strong global signal and could drive innovation in green technologies and cross-border collaboration.</p>`
        },
        'climate-ar': {
            title: 'قادة العالم يتوصلون إلى اتفاق تاريخي بشأن المناخ',
            category: 'سياسة',
            date: '11 أبريل 2025',
            image: 'https://grist.org/wp-content/uploads/2015/12/cop21-c-conexiocc81ncop-agencia-de-noticias.jpg',
            imageCaption: 'قادة العالم في قمة المناخ العالمية',
            author: 'سارة جونسون',
            content: `<p>توصل قادة العالم من أكثر من 190 دولة إلى اتفاق تاريخي في قمة المناخ العالمية لخفض انبعاثات الكربون بنسبة 50٪ بحلول عام 2030. يتضمن الاتفاق، الذي يأتي بعد أسبوعين من المفاوضات المكثفة، آليات للدعم المالي للدول النامية ويضع أهدافًا طموحة لاعتماد الطاقة المتجددة.</p>
                       <p>يحدد الميثاق خارطة طريق للتخلص التدريجي من دعم الوقود الأحفوري، والاستثمار في البنية التحتية للطاقة النظيفة، وتنفيذ لوائح أكثر صرامة للانبعاثات عبر الصناعات. التزمت الدول المتقدمة بالمساهمة بأكثر من 150 مليار دولار سنويًا لمساعدة البلدان المعرضة للخطر على التخفيف من آثار المناخ والتكيف معها.</p>
                       <p>أشاد نشطاء البيئة بالاتفاق باعتباره "نقطة تحول للبشرية"، على الرغم من أن بعض النقاد يجادلون بأن آليات التنفيذ لا تزال غامضة. ومع ذلك، يتفق الخبراء على أن هذه الصفقة ترسل إشارة عالمية قوية ويمكن أن تدفع الابتكار في التقنيات الخضراء والتعاون عبر الحدود.</p>`
        }
        // Add more articles as needed
    };
    
    // Get the article
    const article = articles[articleId];
    
    if (article) {
        // Update page title
        document.title = article.title;
        
        // Update article elements
        document.getElementById('article-headline').textContent = article.title;
        document.getElementById('article-category').textContent = article.category;
        document.getElementById('article-date').textContent = article.date;
        document.getElementById('article-image').src = article.image;
        document.getElementById('article-image').alt = article.title;
        document.getElementById('image-caption').textContent = article.imageCaption;
        document.getElementById('article-content').innerHTML = article.content;
        document.getElementById('author-name').textContent = article.author;
    } else {
        // Redirect if article not found
        window.location.href = 'index.html';
    }
}

function populateRelatedArticles(relatedArticles, language) {
    const relatedList = document.getElementById('related-articles-list');
    relatedList.innerHTML = '';
    
    if (relatedArticles && relatedArticles.length > 0) {
        relatedArticles.forEach(article => {
            const li = document.createElement('li');
            const a = document.createElement('a');
            a.href = `article${language === 'ar' || language === 'ur' ? '-rtl' : ''}.html?id=${article.id}&lang=${language}`;
            a.innerText = article.title;
            li.appendChild(a);
            relatedList.appendChild(li);
        });
    }
}

function getArticleData(articleId, language) {
    // Sample article database - in a real app, this would come from a server
    const articlesDatabase = {
        'climate-en': {
            id: 'climate-en',
            title: 'Global Leaders Reach Historic Climate Agreement',
            date: 'April 11, 2025',
            category: 'Politics',
            categoryClass: 'politics',
            tag: 'MGT',
            imageUrl: 'https://grist.org/wp-content/uploads/2015/12/cop21-c-conexiocc81ncop-agencia-de-noticias.jpg',
            imageCaption: 'World leaders at the Global Climate Summit',
            author: 'Sarah Johnson',
            content: `<p>World leaders from over 190 countries have reached a landmark agreement at the Global Climate Summit to reduce carbon emissions by 50% by 2030. The agreement, which comes after two weeks of intense negotiations, includes mechanisms for financial support to developing nations and sets ambitious targets for renewable energy adoption.</p>
            <p>The pact outlines a roadmap for phasing out fossil fuel subsidies, investing in clean energy infrastructure, and implementing stricter emissions regulations across industries. Developed nations have committed to contributing over $150 billion annually to help vulnerable countries mitigate and adapt to climate impacts.</p>
            <p>Environmental activists hailed the agreement as a "turning point for humanity," though some critics argue that enforcement mechanisms remain vague. Still, experts agree this deal sends a strong global signal and could drive innovation in green technologies and cross-border collaboration.</p>
            <p>UN Secretary-General Antonio Guterres praised the unity shown at the summit, stating, "This agreement proves that multilateralism works, and the world can come together to tackle the greatest challenge of our time."</p>
            <p>Negotiations were particularly tense around issues of accountability and climate justice, with several nations demanding historical polluters take greater responsibility. The final document includes a clause to revisit progress every two years, with penalties for non-compliance still under discussion.</p>
            <p>The summit concluded with a symbolic planting of trees by youth delegates, signaling hope for a cleaner, more sustainable future.</p>`,
            related: [
                { id: 'quantum-en', title: 'Breakthrough in Quantum Computing Could Revolutionize Data Processing' },
                { id: 'alzheimer-en', title: 'New Breakthrough in Medical Research Shows Promise for Treating Alzheimer\'s' }
            ]
        },
        'quantum-en': {
            id: 'quantum-en',
            title: 'Breakthrough in Quantum Computing Could Revolutionize Data Processing',
            date: 'April 10, 2025',
            category: 'Technology',
            categoryClass: 'technology',
            tag: 'Human',
            imageUrl: 'https://www.digitalexperience.live/sites/default/files/2024-07/quantum_computing.jpg',
            imageCaption: 'Advanced quantum computing hardware',
            author: 'Michael Chen',
            content: `<p>Scientists announce a significant advance in quantum computing stability, potentially bringing practical quantum computers closer to reality. Researchers at the Quantum Technology Institute have developed a new method to maintain quantum coherence for extended periods, addressing one of the field's biggest challenges.</p>
            <p>The breakthrough involves a novel cooling system combined with advanced error correction algorithms that significantly reduce decoherence issues. In tests, the system maintained quantum states for up to 10 minutes - a dramatic improvement over previous records measured in microseconds.</p>
            <p>"This is a quantum leap forward, if you'll pardon the pun," said Dr. Eleanor Fujita, lead researcher on the project. "We're now talking about quantum computers that could potentially run complex algorithms without losing data integrity."</p>
            <p>Industry experts suggest that this advancement could accelerate the timeline for practical quantum computing applications in fields ranging from drug discovery to materials science and cryptography.</p>
            <p>Tech companies have already shown interest in the technology, with several major firms announcing plans to incorporate the new stabilization techniques into their quantum research programs.</p>`,
            related: [
                { id: 'climate-en', title: 'Global Leaders Reach Historic Climate Agreement' },
                { id: 'alzheimer-en', title: 'New Breakthrough in Medical Research Shows Promise for Treating Alzheimer\'s' }
            ]
        },
        // Arabic articles
        'climate-ar': {
            id: 'climate-ar',
            title: 'قادة العالم يتوصلون إلى اتفاق تاريخي بشأن المناخ',
            date: '11 أبريل 2025',
            category: 'سياسة',
            categoryClass: 'politics',
            tag: 'MGT',
            imageUrl: 'https://grist.org/wp-content/uploads/2015/12/cop21-c-conexiocc81ncop-agencia-de-noticias.jpg',
            imageCaption: 'قادة العالم في قمة المناخ العالمية',
            author: 'سارة جونسون',
            content: `<p>توصل قادة العالم من أكثر من 190 دولة إلى اتفاق تاريخي في قمة المناخ العالمية لخفض انبعاثات الكربون بنسبة 50٪ بحلول عام 2030. يتضمن الاتفاق، الذي يأتي بعد أسبوعين من المفاوضات المكثفة، آليات للدعم المالي للدول النامية ويضع أهدافًا طموحة لاعتماد الطاقة المتجددة.</p>
            <p>يحدد الميثاق خارطة طريق للتخلص التدريجي من دعم الوقود الأحفوري، والاستثمار في البنية التحتية للطاقة النظيفة، وتنفيذ لوائح أكثر صرامة للانبعاثات عبر الصناعات. التزمت الدول المتقدمة بالمساهمة بأكثر من 150 مليار دولار سنويًا لمساعدة البلدان المعرضة للخطر على التخفيف من آثار المناخ والتكيف معها.</p>
            <p>أشاد نشطاء البيئة بالاتفاق باعتباره "نقطة تحول للبشرية"، على الرغم من أن بعض النقاد يجادلون بأن آليات التنفيذ لا تزال غامضة. ومع ذلك، يتفق الخبراء على أن هذه الصفقة ترسل إشارة عالمية قوية ويمكن أن تدفع الابتكار في التقنيات الخضراء والتعاون عبر الحدود.</p>
            <p>أشاد الأمين العام للأمم المتحدة أنطونيو غوتيريش بالوحدة التي أظهرتها القمة، قائلاً: "هذا الاتفاق يثبت أن تعدد الأطراف يعمل، ويمكن للعالم أن يجتمع لمواجهة أكبر تحد في عصرنا."</p>
            <p>كانت المفاوضات متوترة بشكل خاص حول قضايا المساءلة والعدالة المناخية، حيث طالبت العديد من الدول بأن يتحمل الملوثون التاريخيون مسؤولية أكبر. تتضمن الوثيقة النهائية بندًا لإعادة النظر في التقدم المحرز كل عامين، مع عقوبات لعدم الامتثال لا تزال قيد المناقشة.</p>
            <p>واختتمت القمة بزراعة رمزية للأشجار من قبل المندوبين الشباب، مما يشير إلى الأمل في مستقبل أنظف وأكثر استدامة.</p>`,
            related: [
                { id: 'quantum-ar', title: 'اختراق في الحوسبة الكمومية قد يُحدث ثورة في معالجة البيانات' },
                { id: 'alzheimer-ar', title: 'اختراق جديد في البحث الطبي يُظهر وعدًا بعلاج مرض الزهايمر' }
            ]
        },
        'quantum-ar': {
            id: 'quantum-ar',
            title: 'اختراق في الحوسبة الكمومية قد يُحدث ثورة في معالجة البيانات',
            date: '10 أبريل 2025',
            category: 'تكنولوجيا',
            categoryClass: 'technology',
            tag: 'Human',
            imageUrl: 'https://www.digitalexperience.live/sites/default/files/2024-07/quantum_computing.jpg',
            imageCaption: 'أجهزة الحوسبة الكمومية المتقدمة',
            author: 'مايكل تشين',
            content: `<p>أعلن العلماء عن تقدم كبير في استقرار الحوسبة الكمومية، مما قد يجعل أجهزة الكمبيوتر الكمومية العملية أقرب إلى الواقع. طور الباحثون في معهد تكنولوجيا الكم طريقة جديدة للحفاظ على التماسك الكمومي لفترات ممتدة، مما يعالج أحد أكبر التحديات في هذا المجال.</p>
            <p>يتضمن الاختراق نظام تبريد مبتكر مع خوارزميات متقدمة لتصحيح الأخطاء تقلل بشكل كبير من مشكلات فقدان التماسك. في الاختبارات، حافظ النظام على الحالات الكمومية لمدة تصل إلى 10 دقائق - وهو تحسن كبير مقارنة بالسجلات السابقة التي كانت تقاس بالميكروثانية.</p>
            <p>"هذه قفزة كمومية للأمام، إذا سمحت لي بالمزحة" قالت الدكتورة إليانور فوجيتا، الباحثة الرئيسية في المشروع. "نحن الآن نتحدث عن أجهزة كمبيوتر كمومية يمكنها تشغيل خوارزميات معقدة دون فقدان سلامة البيانات."</p>
            <p>يشير خبراء الصناعة إلى أن هذا التقدم يمكن أن يسرع الجدول الزمني لتطبيقات الحوسبة الكمومية العملية في مجالات تتراوح من اكتشاف الأدوية إلى علوم المواد والتشفير.</p>
            <p>أظهرت شركات التكنولوجيا اهتمامًا بالفعل بالتكنولوجيا، حيث أعلنت العديد من الشركات الكبرى عن خططها لدمج تقنيات الاستقرار الجديدة في برامج أبحاثها الكمومية.</p>`,
            related: [
                { id: 'climate-ar', title: 'قادة العالم يتوصلون إلى اتفاق تاريخي بشأن المناخ' },
                { id: 'alzheimer-ar', title: 'اختراق جديد في البحث الطبي يُظهر وعدًا بعلاج مرض الزهايمر' }
            ]
        }
        // Add more articles for other languages as needed
    };
    
    return articlesDatabase[`${articleId}-${language}`];
}

// Article page functionality
document.querySelectorAll('.read-more').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        
        const articleId = this.getAttribute('data-article-id');
        const articleLang = this.getAttribute('data-article-lang');
        
        if (articleId && articleLang) {
            // Determine which article template to use based on language
            const isRTL = articleLang === 'ar' || articleLang === 'ur';
            const articlePage = isRTL ? 'article-rtl.html' : 'article.html';
            
            // Navigate to the article page with the proper parameters
            window.location.href = `${articlePage}?id=${articleId}&lang=${articleLang}`;
        }
    });
});