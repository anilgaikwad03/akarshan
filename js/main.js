// Mobile Menu Toggle
const menuToggle = document.getElementById('menuToggle');
const mobileMenu = document.getElementById('mobileMenu');
const closeMenu = document.getElementById('closeMenu');
const overlay = document.getElementById('overlay');

function openMobileMenu() {
    mobileMenu.classList.add('active');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeMobileMenu() {
    mobileMenu.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
}

menuToggle.addEventListener('click', openMobileMenu);
closeMenu.addEventListener('click', closeMobileMenu);
overlay.addEventListener('click', closeMobileMenu);

// Close mobile menu when clicking a link
const mobileLinks = document.querySelectorAll('.mobile-nav-links a');
mobileLinks.forEach(link => {
    link.addEventListener('click', closeMobileMenu);
});

// Carousel Functionality
const slides = document.querySelectorAll('.carousel-slide');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const indicators = document.querySelectorAll('.indicator');

let currentSlide = 0;
const totalSlides = slides.length;

function showSlide(index) {
    if (index < 0) {
        currentSlide = totalSlides - 1;
    } else if (index >= totalSlides) {
        currentSlide = 0;
    } else {
        currentSlide = index;
    }
    
    slides.forEach(slide => slide.classList.remove('active'));
    slides[currentSlide].classList.add('active');
    
    indicators.forEach((indicator, i) => {
        if (i === currentSlide) {
            indicator.classList.add('active');
        } else {
            indicator.classList.remove('active');
        }
    });
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

if (prevBtn && nextBtn) {
    prevBtn.addEventListener('click', prevSlide);
    nextBtn.addEventListener('click', nextSlide);
}

indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => showSlide(index));
});

let slideInterval = setInterval(nextSlide, 5000);

const carousel = document.querySelector('.hero-carousel');
if (carousel) {
    carousel.addEventListener('mouseenter', () => {
        clearInterval(slideInterval);
    });
    
    carousel.addEventListener('mouseleave', () => {
        slideInterval = setInterval(nextSlide, 5000);
    });
}

// Product Data
const products = {
    newArrivals: [
        {
            id: 1,
            name: "Paired Charm Bracelets",
            description: "floral charms and a heart connector ",
            price: "₹299",
            image: "/images/product/1.jpg",
            badge: "NEW",
            instagram: "https://www.instagram.com/aaakarshann",
            whatsapp: "918421594102"
        },
        {
            id: 2,
            name: "Star & Moon Charm Bracelet",
            description: "Brighten your bond with these dazzling charm bracelets",
            price: "₹99",
            image: "/images/product/2.png",
            badge: "NEW",
            instagram: "https://www.instagram.com/aaakarshann",
            whatsapp: "918421594102"
        },
        {
            id: 3,
            name: "Tiger Eye Bracelets",
            description: "Known for its grounding and protective energy",
            price: "₹199",
            image: "/images/product/3.jpeg",
            badge: "NEW",
            instagram: "https://www.instagram.com/aaakarshann",
            whatsapp: "918421594102"
        },
        {
            id: 4,
            name: "Paired Charm Bracelets",
            description: "floral charms and a heart connector ",
            price: "₹299",
            image: "/images/product/1.jpg",
            badge: "NEW",
            instagram: "https://www.instagram.com/aaakarshann",
            whatsapp: "918421594102"
        }
    ],
    
    allBracelets: [
        {
            id: 5,
            name: "Paired Charm Bracelets",
            description: "floral charms and a heart connector ",
            price: "₹299",
            image: "/images/product/1.jpg",
            badge: null,
            instagram: "https://www.instagram.com/aaakarshann",
            whatsapp: "918421594102"
        },
        {
            id: 6,
            name: "Paired Charm Bracelets",
            description: "floral charms and a heart connector ",
            price: "₹299",
            image: "/images/product/2.png",
            badge: null,
            instagram: "https://www.instagram.com/aaakarshann",
            whatsapp: "918421594102"
        },
        {
            id: 7,
            name: "Paired Charm Bracelets",
            description: "floral charms and a heart connector ",
            price: "₹299",
            image: "/images/product/3.jpeg",
            badge: null,
            instagram: "https://www.instagram.com/aaakarshann",
            whatsapp: "918421594102"
        },
        {
            id: 8,
            name: "Paired Charm Bracelets",
            description: "floral charms and a heart connector ",
            price: "₹299",
            image: "/images/product/4.jpeg",
            badge: null,
            instagram: "https://www.instagram.com/aaakarshann",
            whatsapp: "918421594102"
        },
        {
            id: 9,
            name: "Paired Charm Bracelets",
            description: "floral charms and a heart connector ",
            price: "₹299",
            image: "/images/product/1.jpg",
            badge: null,
            instagram: "https://www.instagram.com/aaakarshann",
            whatsapp: "918421594102"
        },
        {
            id: 10,
            name: "Paired Charm Bracelets",
            description: "floral charms and a heart connector ",
            price: "₹299",
            image: "/images/product/2.png",
            badge: null,
            instagram: "https://www.instagram.com/aaakarshann",
            whatsapp: "918421594102"
        },
        {
            id: 11,
            name: "Paired Charm Bracelets",
            description: "floral charms and a heart connector ",
            price: "₹299",
            image: "/images/product/3.jpeg",
            badge: null,
            instagram: "https://www.instagram.com/aaakarshann",
            whatsapp: "918421594102"
        },
        {
            id: 12,
            name: "Paired Charm Bracelets",
            description: "floral charms and a heart connector ",
            price: "₹299",
            image: "/images/product/4.jpeg",
            badge: null,
            instagram: "https://www.instagram.com/aaakarshann",
            whatsapp: "918421594102"
        }
    ],
    
    bestsellers: [
        {
            id: 13,
            name: "Layered Thread Bracelet Set",
            description: "Triple layer adjustable bracelets",
            price: "₹199",
            image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            badge: "BESTSELLER",
            instagram: "https://www.instagram.com/aaakarshann",
            whatsapp: "918421594102"
        },
        {
            id: 14,
            name: "Evil Eye Protection Bracelet",
            description: "Blue evil eye beads with cotton cord",
            price: "₹99",
            image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            badge: "BESTSELLER",
            instagram: "https://www.instagram.com/aaakarshann",
            whatsapp: "918421594102"
        },
        {
            id: 15,
            name: "Name Personalized Bracelet",
            description: "Custom name woven into bracelet",
            price: "₹499",
            image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            badge: "BESTSELLER",
            instagram: "https://www.instagram.com/aaakarshann",
            whatsapp: "918421594102"
        },
        {
            id: 16,
            name: "Minimalist Black Cord Bracelet",
            description: "Simple elegant design for daily wear",
            price: "₹499",
            image: "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            badge: "BESTSELLER",
            instagram: "https://www.instagram.com/aaakarshann",
            whatsapp: "918421594102"
        }
    ]
};

// Function to create product card HTML
function createProductCard(product) {
    const badgeClass = product.badge === "BESTSELLER" ? "bestseller" : "";
    const badgeHtml = product.badge ? `<div class="product-badge ${badgeClass}">${product.badge}</div>` : '';
    
    // Create WhatsApp and Instagram order links
    const whatsappMessage = encodeURIComponent(`Hi! I'm interested in purchasing the ${product.name} (${product.price}). Can you provide more details?`);
    const instagramMessage = encodeURIComponent(`Hi! I'm interested in ${product.name}`);
    
    const whatsappLink = `https://wa.me/${product.whatsapp}?text=${whatsappMessage}`;
    const instagramLink = `${product.instagram}/?text=${instagramMessage}`;
    
    return `
        <div class="product-card">
            ${badgeHtml}
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}" loading="lazy">
                <div class="product-overlay">
                    <a href="${whatsappLink}" target="_blank" class="order-btn whatsapp">
                        <i class="fab fa-whatsapp"></i> WhatsApp
                    </a>
                    <a href="${instagramLink}" target="_blank" class="order-btn instagram">
                        <i class="fab fa-instagram"></i> Instagram
                    </a>
                </div>
            </div>
            <div class="product-info">
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <div class="product-price">${product.price}</div>
            </div>
        </div>
    `;
}

// Load products into grids
function loadProducts() {
    // New Arrivals
    const newArrivalsGrid = document.getElementById('newArrivalsGrid');
    if (newArrivalsGrid) {
        newArrivalsGrid.innerHTML = products.newArrivals.map(createProductCard).join('');
    }
    
    // All Bracelets (show first 8)
    const allBraceletsGrid = document.getElementById('allBraceletsGrid');
    if (allBraceletsGrid) {
        allBraceletsGrid.innerHTML = products.allBracelets.slice(0, 8).map(createProductCard).join('');
    }
    
    // Bestsellers
    const bestsellersGrid = document.getElementById('bestsellersGrid');
    if (bestsellersGrid) {
        bestsellersGrid.innerHTML = products.bestsellers.map(createProductCard).join('');
    }
}

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerOffset = 100;
            const elementPosition = target.offsetTop;
            const offsetPosition = elementPosition - headerOffset;
            
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Active link highlighting
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a, .mobile-nav-links a');

function highlightNavLink() {
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

window.addEventListener('scroll', highlightNavLink);

// Contact Form Handling
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);
        
        // Here you would typically send this to your email service
        // For now, we'll show a success message
        
        formMessage.textContent = 'Thank you for your message! We will get back to you soon.';
        formMessage.className = 'form-message success';
        
        // Clear form
        contactForm.reset();
        
        // Hide message after 5 seconds
        setTimeout(() => {
            formMessage.style.display = 'none';
        }, 5000);
    });
}

// Newsletter Form
const newsletterForm = document.getElementById('newsletterForm');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = this.querySelector('input[type="email"]').value;
        
        // Here you would typically send this to your newsletter service
        alert(`Thank you for subscribing with: ${email}`);
        this.reset();
    });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    loadProducts();
    highlightNavLink();
});

// Handle window resize
let resizeTimer;
window.addEventListener('resize', () => {
    document.body.classList.add('resize-animation-stopper');
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        document.body.classList.remove('resize-animation-stopper');
    }, 400);
});

// Disable right click
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
    return false;
});

// Disable common keyboard shortcuts for viewing source
document.addEventListener('keydown', function(e) {
    // Disable F12
    if (e.key === 'F12' || e.keyCode === 123) {
        e.preventDefault();
        return false;
    }
    
    // Disable Ctrl+Shift+I (Windows/Linux)
    if (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'i' || e.keyCode === 73)) {
        e.preventDefault();
        return false;
    }
    
    // Disable Ctrl+Shift+J (Windows/Linux)
    if (e.ctrlKey && e.shiftKey && (e.key === 'J' || e.key === 'j' || e.keyCode === 74)) {
        e.preventDefault();
        return false;
    }
    
    // Disable Ctrl+Shift+C (Windows/Linux)
    if (e.ctrlKey && e.shiftKey && (e.key === 'C' || e.key === 'c' || e.keyCode === 67)) {
        e.preventDefault();
        return false;
    }
    
    // Disable Ctrl+U (View Source)
    if (e.ctrlKey && (e.key === 'U' || e.key === 'u' || e.keyCode === 85)) {
        e.preventDefault();
        return false;
    }
    
    // Disable Ctrl+S (Save)
    if (e.ctrlKey && (e.key === 'S' || e.key === 's' || e.keyCode === 83)) {
        e.preventDefault();
        return false;
    }
    
    // Disable Ctrl+Shift+U (View Source in some browsers)
    if (e.ctrlKey && e.shiftKey && (e.key === 'U' || e.key === 'u' || e.keyCode === 85)) {
        e.preventDefault();
        return false;
    }
    
    // Disable Ctrl+A (Select All - optional, you can remove if needed)
    if (e.ctrlKey && (e.key === 'A' || e.key === 'a' || e.keyCode === 65)) {
        e.preventDefault();
        return false;
    }
    
    // Disable Ctrl+C (Copy - optional, you can remove if needed)
    if (e.ctrlKey && (e.key === 'C' || e.key === 'c' || e.keyCode === 67)) {
        e.preventDefault();
        return false;
    }
    
    // Disable Ctrl+X (Cut - optional, you can remove if needed)
    if (e.ctrlKey && (e.key === 'X' || e.key === 'x' || e.keyCode === 88)) {
        e.preventDefault();
        return false;
    }
    
    // Disable Ctrl+V (Paste - optional, you can remove if needed)
    if (e.ctrlKey && (e.key === 'V' || e.key === 'v' || e.keyCode === 86)) {
        e.preventDefault();
        return false;
    }
    
    // Disable Ctrl+P (Print)
    if (e.ctrlKey && (e.key === 'P' || e.key === 'p' || e.keyCode === 80)) {
        e.preventDefault();
        return false;
    }
    
    // Disable Ctrl+Shift+P (Print in some browsers)
    if (e.ctrlKey && e.shiftKey && (e.key === 'P' || e.key === 'p' || e.keyCode === 80)) {
        e.preventDefault();
        return false;
    }
    
    // Disable Ctrl+Shift+Delete (Clear cache/data)
    if (e.ctrlKey && e.shiftKey && (e.key === 'Delete' || e.keyCode === 46)) {
        e.preventDefault();
        return false;
    }
    
    // Disable F5 (Refresh)
    if (e.key === 'F5' || e.keyCode === 116) {
        e.preventDefault();
        return false;
    }
    
    // Disable Ctrl+R (Refresh)
    if (e.ctrlKey && (e.key === 'R' || e.key === 'r' || e.keyCode === 82)) {
        e.preventDefault();
        return false;
    }
    
    // Disable Ctrl+F5 (Hard Refresh)
    if (e.ctrlKey && e.shiftKey && (e.key === 'R' || e.key === 'r' || e.keyCode === 82)) {
        e.preventDefault();
        return false;
    }
    
    // Disable Ctrl+N (New Window)
    if (e.ctrlKey && (e.key === 'N' || e.key === 'n' || e.keyCode === 78)) {
        e.preventDefault();
        return false;
    }
    
    // Disable Ctrl+Shift+N (Incognito/Private Window)
    if (e.ctrlKey && e.shiftKey && (e.key === 'N' || e.key === 'n' || e.keyCode === 78)) {
        e.preventDefault();
        return false;
    }
    
    // Disable Ctrl+T (New Tab)
    if (e.ctrlKey && (e.key === 'T' || e.key === 't' || e.keyCode === 84)) {
        e.preventDefault();
        return false;
    }
    
    // Disable Ctrl+Shift+T (Reopen Closed Tab)
    if (e.ctrlKey && e.shiftKey && (e.key === 'T' || e.key === 't' || e.keyCode === 84)) {
        e.preventDefault();
        return false;
    }
    
    // Disable Ctrl+W (Close Tab)
    if (e.ctrlKey && (e.key === 'W' || e.key === 'w' || e.keyCode === 87)) {
        e.preventDefault();
        return false;
    }
    
    // Disable Ctrl+H (History)
    if (e.ctrlKey && (e.key === 'H' || e.key === 'h' || e.keyCode === 72)) {
        e.preventDefault();
        return false;
    }
    
    // Disable Ctrl+J (Downloads)
    if (e.ctrlKey && (e.key === 'J' || e.key === 'j' || e.keyCode === 74)) {
        e.preventDefault();
        return false;
    }
    
    // Disable Ctrl+D (Bookmark)
    if (e.ctrlKey && (e.key === 'D' || e.key === 'd' || e.keyCode === 68)) {
        e.preventDefault();
        return false;
    }
    
    // Disable Ctrl+Shift+O (Bookmark Manager in some browsers)
    if (e.ctrlKey && e.shiftKey && (e.key === 'O' || e.key === 'o' || e.keyCode === 79)) {
        e.preventDefault();
        return false;
    }
    
    // Disable Ctrl+Shift+B (Bookmarks Bar Toggle)
    if (e.ctrlKey && e.shiftKey && (e.key === 'B' || e.key === 'b' || e.keyCode === 66)) {
        e.preventDefault();
        return false;
    }
    
    // Disable Ctrl+Shift+Q (Quit Application)
    if (e.ctrlKey && e.shiftKey && (e.key === 'Q' || e.key === 'q' || e.keyCode === 81)) {
        e.preventDefault();
        return false;
    }
    
    // Disable Alt (Menu Bar access in some browsers)
    if (e.key === 'Alt' || e.keyCode === 18) {
        e.preventDefault();
        return false;
    }
    
    // Disable F1 (Help)
    if (e.key === 'F1' || e.keyCode === 112) {
        e.preventDefault();
        return false;
    }
    
    // Disable F3 (Find)
    if (e.key === 'F3' || e.keyCode === 114) {
        e.preventDefault();
        return false;
    }
    
    // Disable F7 (Caret Browsing)
    if (e.key === 'F7' || e.keyCode === 118) {
        e.preventDefault();
        return false;
    }
    
    // Disable F10 (Menu Bar activation)
    if (e.key === 'F10' || e.keyCode === 121) {
        e.preventDefault();
        return false;
    }
    
    // Disable F11 (Full Screen) - optional, you can remove if needed
    if (e.key === 'F11' || e.keyCode === 122) {
        e.preventDefault();
        return false;
    }
    
    // Disable Ctrl+0 (Reset Zoom)
    if (e.ctrlKey && (e.key === '0' || e.keyCode === 48)) {
        e.preventDefault();
        return false;
    }
    
    // Disable Ctrl+Plus (Zoom In)
    if (e.ctrlKey && (e.key === '+' || e.key === '=' || e.keyCode === 187)) {
        e.preventDefault();
        return false;
    }
    
    // Disable Ctrl+Minus (Zoom Out)
    if (e.ctrlKey && (e.key === '-' || e.keyCode === 189)) {
        e.preventDefault();
        return false;
    }
    
    // Disable Ctrl+Shift+Plus (Zoom In - alternative)
    if (e.ctrlKey && e.shiftKey && (e.key === '+' || e.key === '=' || e.keyCode === 187)) {
        e.preventDefault();
        return false;
    }
    
    // Disable Ctrl+Shift+Minus (Zoom Out - alternative)
    if (e.ctrlKey && e.shiftKey && (e.key === '-' || e.keyCode === 189)) {
        e.preventDefault();
        return false;
    }
    
    // Disable Command (Mac) key combinations
    if (e.metaKey) {
        // Disable Command+Option+I (Mac - Developer Tools)
        if (e.metaKey && e.altKey && (e.key === 'I' || e.key === 'i' || e.keyCode === 73)) {
            e.preventDefault();
            return false;
        }
        
        // Disable Command+Option+J (Mac - Console)
        if (e.metaKey && e.altKey && (e.key === 'J' || e.key === 'j' || e.keyCode === 74)) {
            e.preventDefault();
            return false;
        }
        
        // Disable Command+Option+C (Mac - Inspect Element)
        if (e.metaKey && e.altKey && (e.key === 'C' || e.key === 'c' || e.keyCode === 67)) {
            e.preventDefault();
            return false;
        }
        
        // Disable Command+U (Mac - View Source)
        if (e.metaKey && (e.key === 'U' || e.key === 'u' || e.keyCode === 85)) {
            e.preventDefault();
            return false;
        }
        
        // Disable Command+R (Mac - Refresh)
        if (e.metaKey && (e.key === 'R' || e.key === 'r' || e.keyCode === 82)) {
            e.preventDefault();
            return false;
        }
        
        // Disable Command+Shift+R (Mac - Hard Refresh)
        if (e.metaKey && e.shiftKey && (e.key === 'R' || e.key === 'r' || e.keyCode === 82)) {
            e.preventDefault();
            return false;
        }
        
        // Disable Command+A (Mac - Select All)
        if (e.metaKey && (e.key === 'A' || e.key === 'a' || e.keyCode === 65)) {
            e.preventDefault();
            return false;
        }
        
        // Disable Command+C (Mac - Copy)
        if (e.metaKey && (e.key === 'C' || e.key === 'c' || e.keyCode === 67)) {
            e.preventDefault();
            return false;
        }
        
        // Disable Command+X (Mac - Cut)
        if (e.metaKey && (e.key === 'X' || e.key === 'x' || e.keyCode === 88)) {
            e.preventDefault();
            return false;
        }
        
        // Disable Command+V (Mac - Paste)
        if (e.metaKey && (e.key === 'V' || e.key === 'v' || e.keyCode === 86)) {
            e.preventDefault();
            return false;
        }
        
        // Disable Command+P (Mac - Print)
        if (e.metaKey && (e.key === 'P' || e.key === 'p' || e.keyCode === 80)) {
            e.preventDefault();
            return false;
        }
        
        // Disable Command+S (Mac - Save)
        if (e.metaKey && (e.key === 'S' || e.key === 's' || e.keyCode === 83)) {
            e.preventDefault();
            return false;
        }
        
        // Disable Command+W (Mac - Close Tab)
        if (e.metaKey && (e.key === 'W' || e.key === 'w' || e.keyCode === 87)) {
            e.preventDefault();
            return false;
        }
        
        // Disable Command+T (Mac - New Tab)
        if (e.metaKey && (e.key === 'T' || e.key === 't' || e.keyCode === 84)) {
            e.preventDefault();
            return false;
        }
        
        // Disable Command+N (Mac - New Window)
        if (e.metaKey && (e.key === 'N' || e.key === 'n' || e.keyCode === 78)) {
            e.preventDefault();
            return false;
        }
        
        // Disable Command+Shift+N (Mac - Private Window)
        if (e.metaKey && e.shiftKey && (e.key === 'N' || e.key === 'n' || e.keyCode === 78)) {
            e.preventDefault();
            return false;
        }
        
        // Disable Command+H (Mac - Hide)
        if (e.metaKey && (e.key === 'H' || e.key === 'h' || e.keyCode === 72)) {
            e.preventDefault();
            return false;
        }
        
        // Disable Command+M (Mac - Minimize)
        if (e.metaKey && (e.key === 'M' || e.key === 'm' || e.keyCode === 77)) {
            e.preventDefault();
            return false;
        }
        
        // Disable Command+Q (Mac - Quit)
        if (e.metaKey && (e.key === 'Q' || e.key === 'q' || e.keyCode === 81)) {
            e.preventDefault();
            return false;
        }
    }
});

// Additional protection: Disable text selection
document.addEventListener('selectstart', function(e) {
    e.preventDefault();
    return false;
});

// Disable dragging of images
document.querySelectorAll('img').forEach(img => {
    img.addEventListener('dragstart', function(e) {
        e.preventDefault();
        return false;
    });
});

// Disable copy event
document.addEventListener('copy', function(e) {
    e.preventDefault();
    return false;
});

// Disable cut event
document.addEventListener('cut', function(e) {
    e.preventDefault();
    return false;
});

// Disable paste event
document.addEventListener('paste', function(e) {
    e.preventDefault();
    return false;
});

// Show warning message when someone tries to right-click (optional)
document.addEventListener('contextmenu', function(e) {
    // You can show a custom message
    // alert('Right-click is disabled on this website for security purposes.');
    return false;
});

// Detect Developer Tools opening (advanced protection)
let devToolsOpen = false;
const element = new Image();
Object.defineProperty(element, 'id', {
    get: function() {
        devToolsOpen = true;
        // Redirect or show warning when dev tools is detected
        // window.location.href = 'about:blank'; // Uncomment to redirect
        // alert('Developer tools detected. Please close them to continue.');
    }
});

setInterval(function() {
    devToolsOpen = false;
    console.log(element); // This triggers the getter if dev tools is open
    if (devToolsOpen) {
        // DevTools is open - you can take action here
        console.clear(); // Clear console
        // window.location.href = 'about:blank'; // Uncomment to redirect
    }
}, 1000);