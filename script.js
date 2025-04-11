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
    
    // Set up dynamic breaking news
    const breakingNews = [
        "Global summit on climate change concludes with new agreements",
        "Tech giant unveils revolutionary AI assistant",
        "Sports championship final ends in dramatic overtime victory",
        "Stock markets reach record highs amid economic recovery",
        "New health study reveals benefits of Mediterranean diet",
        "International space mission successfully lands on Mars"
    ];
    
    const marquee = document.querySelector('.breaking-news marquee');
    let breakingNewsHTML = '';
    
    breakingNews.forEach((news, index) => {
        breakingNewsHTML += news;
        if (index < breakingNews.length - 1) {
            breakingNewsHTML += ' • ';
        }
    });
    
    marquee.innerHTML = breakingNewsHTML;
    
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
    
    // Add hover effect for news items
    const newsItems = document.querySelectorAll('.grid-item, .article, .main-article');
    newsItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
            this.style.transition = 'all 0.3s ease';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.1)';
            this.style.transition = 'all 0.3s ease';
        });
    });
});