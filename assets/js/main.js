/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollDown = window.scrollY

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')
        
        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')
        }else{
            sectionsClass.classList.remove('active-link')
        }                                                    
    })
}
window.addEventListener('scroll', scrollActive)

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
})

sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text',{}); 
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 
sr.reveal('.skills__data, .work__img, .contact__input',{interval: 200});
sr.reveal('.certifications__card', { interval: 100});

/*===== SMOOTH WORD TYPE EFFECT =====*/
window.addEventListener("load", function(){

    const roles = [
        "Web Designer",
        "Frontend Developer",
        "UI/UX Designer",
        "JS Developer"
    ];

    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    const roleElement = document.getElementById("home-role");
    if (roleElement) {
        roleElement.style.opacity = 1;

        function typeEffect() {
            const currentText = roles[roleIndex];

            if (!isDeleting) {
                roleElement.textContent = currentText.substring(0, charIndex + 1);
                charIndex++;

                if (charIndex === currentText.length) {
                    setTimeout(() => isDeleting = true, 1500);
                }
            } else {
                roleElement.textContent = currentText.substring(0, charIndex - 1);
                charIndex--;

                if (charIndex === 0) {
                    isDeleting = false;
                    roleIndex = (roleIndex + 1) % roles.length;
                }
            }

            setTimeout(typeEffect, isDeleting ? 50 : 100);
        }

        typeEffect();
    }
});

/*===== SMOOTH SCROLL TO SECTION FUNCTION =====*/
function smoothScrollToSection(sectionId) {
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        const headerHeight = document.querySelector('.l-header')?.offsetHeight || 60;
        const targetPosition = targetSection.offsetTop - headerHeight + 10;
        
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
        return true;
    }
    return false;
}

/*===== DOWNLOAD CV BUTTON - GENERATES REAL PDF =====*/
document.addEventListener('DOMContentLoaded', function() {
    const downloadBtn = document.getElementById('download-cv-btn');
    
    if (downloadBtn) {
        downloadBtn.addEventListener('click', async function(e) {
            e.preventDefault();
            
            const originalText = downloadBtn.textContent;
            downloadBtn.textContent = 'Generating PDF...';
            downloadBtn.disabled = true;
            
            try {
                const { jsPDF } = window.jspdf;
                const doc = new jsPDF();
                
                doc.setFont("helvetica");
                doc.setFontSize(24);
                doc.setTextColor(64, 112, 244);
                doc.text("Tehseen", 20, 30);
                
                doc.setFontSize(14);
                doc.setTextColor(100, 100, 100);
                doc.text("Web Developer | Frontend Developer | UI/UX Designer", 20, 45);
                
                doc.setDrawColor(64, 112, 244);
                doc.line(20, 52, 190, 52);
                
                doc.setFontSize(16);
                doc.setTextColor(0, 0, 0);
                doc.text("PROFESSIONAL SUMMARY", 20, 70);
                doc.setFontSize(11);
                doc.setTextColor(80, 80, 80);
                const summary = "I am a passionate developer who loves turning ideas into real, functional websites and applications. I enjoy working with modern web technologies and continuously improving my skills. I focus on writing clean, efficient, and user-friendly code.";
                const splitSummary = doc.splitTextToSize(summary, 170);
                doc.text(splitSummary, 20, 82);
                
                doc.setFontSize(16);
                doc.setTextColor(0, 0, 0);
                doc.text("TECHNICAL SKILLS", 20, 115);
                doc.setFontSize(11);
                doc.setTextColor(80, 80, 80);
                doc.text("• HTML5 - 95%", 25, 130);
                doc.text("• CSS3 - 85%", 25, 140);
                doc.text("• JavaScript - 65%", 25, 150);
                doc.text("• UI/UX Design - 85%", 25, 160);
                doc.text("• Responsive Web Design", 25, 170);
                doc.text("• Git & Version Control", 25, 180);
                
                doc.setFontSize(16);
                doc.setTextColor(0, 0, 0);
                doc.text("EXPERIENCE", 20, 200);
                doc.setFontSize(12);
                doc.setTextColor(64, 112, 244);
                doc.text("Frontend Developer", 20, 215);
                doc.setFontSize(11);
                doc.setTextColor(80, 80, 80);
                doc.text("• Creating responsive websites using HTML, CSS, JavaScript", 25, 225);
                doc.text("• Collaborating with design teams for user-friendly interfaces", 25, 235);
                
                doc.addPage();
                
                doc.setFontSize(16);
                doc.setTextColor(0, 0, 0);
                doc.text("EDUCATION", 20, 30);
                doc.setFontSize(12);
                doc.setTextColor(64, 112, 244);
                doc.text("Bachelor's in Computer Science", 20, 45);
                doc.setFontSize(11);
                doc.setTextColor(80, 80, 80);
                doc.text("Focus on Web Development and User Interface Design", 25, 55);
                
                doc.setFontSize(16);
                doc.setTextColor(0, 0, 0);
                doc.text("CERTIFICATIONS", 20, 80);
                doc.setFontSize(11);
                doc.setTextColor(80, 80, 80);
                doc.text("• Responsive Web Design - freeCodeCamp", 25, 95);
                doc.text("• JavaScript Algorithms - freeCodeCamp", 25, 105);
                doc.text("• UI/UX Design Fundamentals - Coursera", 25, 115);
                doc.text("• Frontend Development - Meta", 25, 125);
                doc.text("• Git & GitHub - Udemy", 25, 135);
                doc.text("• SEO Fundamentals - Google", 25, 145);
                
                doc.setFontSize(16);
                doc.setTextColor(0, 0, 0);
                doc.text("CONTACT", 20, 175);
                doc.setFontSize(11);
                doc.setTextColor(80, 80, 80);
                doc.text("Email: tehseen@example.com", 25, 190);
                doc.text("LinkedIn: linkedin.com/in/tehseen", 25, 200);
                doc.text("GitHub: github.com/tehseen", 25, 210);
                
                doc.save('Tehseen_CV.pdf');
                
                downloadBtn.textContent = originalText;
                downloadBtn.disabled = false;
                
            } catch (error) {
                console.error('PDF generation error:', error);
                downloadBtn.textContent = originalText;
                downloadBtn.disabled = false;
                alert('Error generating PDF. Please try again.');
            }
        });
    }
});

/*===== CERTIFICATE MODAL FUNCTIONALITY =====*/
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('certificate-modal');
    const viewAllBtn = document.getElementById('view-certificates-btn');
    const closeBtn = document.querySelector('.certificate-modal-close');
    const modalBody = document.getElementById('certificate-modal-body');
    
    // All certificates data
    const allCertificates = [
        {
            name: "Responsive Web Design",
            issuer: "freeCodeCamp",
            date: "2024",
            image: "assets/certificates/certificate1.png"
        },
        {
            name: "JavaScript Algorithms",
            issuer: "freeCodeCamp",
            date: "2024",
            image: "assets/certificates/certificate2.png"
        },
        {
            name: "UI/UX Design Fundamentals",
            issuer: "Coursera",
            date: "2023",
            image: "assets/certificates/certificate3.png"
        },
        {
            name: "Frontend Development",
            issuer: "Meta (Coursera)",
            date: "2024",
            image: "assets/certificates/certificate4.png"
        },
        {
            name: "Git & GitHub Mastery",
            issuer: "Udemy",
            date: "2023",
            image: "assets/certificates/certificate5.png"
        },
        {
            name: "SEO Fundamentals",
            issuer: "Google",
            date: "2024",
            image: "assets/certificates/certificate6.png"
        }
    ];
    
    function showSingleCertificate(cert) {
        modalBody.innerHTML = '';
        const certItem = document.createElement('div');
        certItem.className = 'certificate-item';
        certItem.style.cssText = 'max-width: 500px; margin: 0 auto;';
        certItem.innerHTML = `
            <img src="${cert.image}" alt="${cert.name}" style="width: 100%; border-radius: 10px; cursor: pointer;" onerror="this.src='https://placehold.co/600x400/4070f4/white?text=${encodeURIComponent(cert.name)}'">
            <div class="certificate-item-info" style="text-align: center; margin-top: 15px;">
                <h4 style="color: var(--first-color); margin-bottom: 5px;">${cert.name}</h4>
                <p style="color: #666;">${cert.issuer} | ${cert.date}</p>
                <p style="color: #999; font-size: 0.8rem; margin-top: 10px;">Click on image to view full size →</p>
            </div>
        `;
        const img = certItem.querySelector('img');
        img.addEventListener('click', () => {
            window.open(cert.image, '_blank');
        });
        modalBody.appendChild(certItem);
    }
    
    function showAllCertificates() {
        modalBody.innerHTML = '';
        allCertificates.forEach(cert => {
            const certItem = document.createElement('div');
            certItem.className = 'certificate-item';
            certItem.innerHTML = `
                <img src="${cert.image}" alt="${cert.name}" style="width: 100%; border-radius: 10px; cursor: pointer;" onerror="this.src='https://placehold.co/400x300/4070f4/white?text=${encodeURIComponent(cert.name)}'">
                <div class="certificate-item-info" style="text-align: center; margin-top: 10px;">
                    <h4 style="color: var(--first-color); font-size: 0.9rem;">${cert.name}</h4>
                    <p style="color: #666; font-size: 0.8rem;">${cert.issuer}</p>
                </div>
            `;
            certItem.querySelector('img').addEventListener('click', () => {
                window.open(cert.image, '_blank');
            });
            modalBody.appendChild(certItem);
        });
    }
    
    if (viewAllBtn) {
        viewAllBtn.addEventListener('click', function() {
            showAllCertificates();
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        });
    }
    
    const certCards = document.querySelectorAll('.certifications__card');
    const certificateDataList = [
        allCertificates[0], allCertificates[1], allCertificates[2],
        allCertificates[3], allCertificates[4], allCertificates[5]
    ];
    
    certCards.forEach((card, index) => {
        card.addEventListener('click', function() {
            showSingleCertificate(certificateDataList[index]);
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        });
    });
    
    if (closeBtn) {
        closeBtn.addEventListener('click', function() {
            modal.style.display = 'none';
            document.body.style.overflow = '';
        });
    }
    
    window.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = '';
        }
    });
    
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            modal.style.display = 'none';
            document.body.style.overflow = '';
        }
    });
});

/*===== CHATBOT FUNCTIONALITY =====*/
document.addEventListener('DOMContentLoaded', function() {
    const chatbotWidget = document.getElementById('chatbot-widget');
    const chatbotMinimize = document.getElementById('chatbot-minimize');
    const chatbotFloatBtn = document.getElementById('chatbot-float-btn');
    const chatbotInput = document.getElementById('chatbot-input');
    const chatbotSend = document.getElementById('chatbot-send');
    const chatbotMessages = document.getElementById('chatbot-messages');
    const quickButtons = document.querySelectorAll('.quick-btn');

    const portfolioData = {
        name: "Tehseen",
        role: "Web Designer, Frontend Developer, UI/UX Designer",
        skills: "HTML5 (95%), CSS3 (85%), JavaScript (65%), UI/UX Design (85%), Responsive Web Design, Git",
        experience: "Frontend Developer with experience in creating responsive websites, collaborating with design teams, and optimizing web performance",
        education: "Bachelor's in Computer Science with focus on Web Development and UI Design",
        certifications: "Responsive Web Design - freeCodeCamp, JavaScript Algorithms - freeCodeCamp, UI/UX Design - Coursera, Frontend Development - Meta, Git & GitHub - Udemy, SEO - Google",
        contact: "Email: qasirtehseen23@gmail.com | LinkedIn: linkedin.com/in/tehseen | GitHub: github.com/tehseen",
        projects: "6+ web projects including modern responsive websites, UI/UX designs, and web applications",
        about: "Passionate developer who loves turning ideas into real, functional websites and applications."
    };

    function scrollToSection(sectionId) {
        const targetSection = document.getElementById(sectionId);
        if (targetSection) {
            const headerHeight = document.querySelector('.l-header')?.offsetHeight || 60;
            const targetPosition = targetSection.offsetTop - headerHeight + 10;
            window.scrollTo({ top: targetPosition, behavior: 'smooth' });
            return true;
        }
        return false;
    }

    function getBotResponse(userMessage) {
        const msg = userMessage.toLowerCase();
        
        if (msg.match(/hi|hello|hey|greetings|assalam|salam/i)) {
            return "👋 Hello! Welcome to Tehseen's portfolio. How can I help you today?";
        }
        if (msg.match(/who are you|about you|tell me about|introduce/i)) {
            return `✨ I'm ${portfolioData.name}, a ${portfolioData.role}. ${portfolioData.about}`;
        }
        if (msg.match(/skill|expertise|technologies|tech stack|know|proficient/i)) {
            return `💻 My technical skills include: ${portfolioData.skills}. I'm constantly learning and improving!`;
        }
        if (msg.match(/experience|work experience|job|career|worked/i)) {
            return `💼 ${portfolioData.experience}. I focus on creating responsive, user-friendly web solutions.`;
        }
        if (msg.match(/education|study|studies|degree|college|university|learned/i)) {
            return `🎓 ${portfolioData.education}. I also hold certifications in: ${portfolioData.certifications}`;
        }
        if (msg.match(/certification|certificate|certifications|courses|training|cert/i)) {
            setTimeout(() => scrollToSection('certifications'), 300);
            return `📜 I have 6 professional certifications:\n${portfolioData.certifications}\n\n✨ I'm taking you to the Certifications section! Click on any certificate card or the "View All Certificates" button to see/download them.`;
        }
        if (msg.match(/project|work|portfolio|made|created|built|done/i)) {
            return `🚀 I have completed ${portfolioData.projects}. You can check them in the "Projects" section of this portfolio!`;
        }
        if (msg.match(/contact|reach|email|mail|hire|get in touch|connect|message|call/i)) {
            setTimeout(() => scrollToSection('contact'), 300);
            return `📬 You can reach me at:\n📧 ${portfolioData.contact}\n\n✨ I'm taking you to the Contact section where you can fill out the contact form!`;
        }
        if (msg.match(/cv|resume|download cv|get resume/i)) {
            return `📄 You can download my CV by clicking the "Download CV" button on the home page!`;
        }
        if (msg.match(/price|cost|charge|fee|rate|how much/i)) {
            return `💰 For project inquiries and pricing, please contact me directly via the contact form. I'd love to discuss your project needs!`;
        }
        if (msg.match(/available|free|time|schedule|busy/i)) {
            return `⏰ I'm currently available for freelance projects and full-time opportunities. Feel free to reach out!`;
        }
        if (msg.match(/help|support|what can you do|features/i)) {
            return `🤖 I can help you with:\n• My skills & expertise\n• My work experience\n• My education background\n• My certifications (I'll take you there!)\n• My contact information (I'll take you there!)\n• Download my CV\n• My projects\n\nJust ask me anything or use the quick buttons below!`;
        }
        if (msg.match(/thank|thanks|great|awesome|good job/i)) {
            return "🙏 You're welcome! Feel free to reach out if you have more questions. Have a great day!";
        }
        
        return `🤔 I'm not sure about that. Here's what I can help with:\n• My skills & expertise\n• Work experience\n• Education background\n• Certifications (I'll take you there!)\n• Contact information (I'll take you there!)\n• Projects & portfolio\n\nOr use the quick buttons below!`;
    }

    function addMessage(message, isUser = false) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${isUser ? 'user' : 'bot'}`;
        const contentDiv = document.createElement('div');
        contentDiv.className = 'message-content';
        contentDiv.innerHTML = message.replace(/\n/g, '<br>');
        messageDiv.appendChild(contentDiv);
        chatbotMessages.appendChild(messageDiv);
        chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
    }

    function showTyping() {
        const typingDiv = document.createElement('div');
        typingDiv.className = 'message bot';
        typingDiv.id = 'typing-indicator';
        typingDiv.innerHTML = '<div class="message-content">🤔 Thinking<span>.</span><span>.</span><span>.</span></div>';
        chatbotMessages.appendChild(typingDiv);
        chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
    }

    function removeTyping() {
        const typing = document.getElementById('typing-indicator');
        if (typing) typing.remove();
    }

    function sendMessage(messageText) {
        const message = messageText.trim();
        if (!message) return;
        
        addMessage(message, true);
        if (chatbotInput) chatbotInput.value = '';
        showTyping();
        
        setTimeout(() => {
            removeTyping();
            const response = getBotResponse(message);
            addMessage(response);
        }, 500);
    }

    function openChatbot() {
        chatbotWidget.classList.remove('minimized');
        chatbotWidget.style.display = 'block';
        chatbotFloatBtn.style.display = 'none';
    }

    function closeChatbot() {
        chatbotWidget.classList.add('minimized');
        chatbotWidget.style.display = 'none';
        chatbotFloatBtn.style.display = 'flex';
    }

    if (chatbotSend) {
        chatbotSend.addEventListener('click', () => sendMessage(chatbotInput.value));
    }
    
    if (chatbotInput) {
        chatbotInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') sendMessage(chatbotInput.value);
        });
    }
    
    quickButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const question = btn.getAttribute('data-question');
            sendMessage(question);
        });
    });

    if (chatbotMinimize) {
        chatbotMinimize.addEventListener('click', (e) => {
            e.stopPropagation();
            closeChatbot();
        });
    }
    
    if (chatbotFloatBtn) {
        chatbotFloatBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            openChatbot();
        });
    }
    
    document.addEventListener('click', function(e) {
        if (chatbotWidget.style.display === 'block') {
            if (!chatbotWidget.contains(e.target) && !chatbotFloatBtn.contains(e.target)) {
                closeChatbot();
            }
        }
    });
    
    chatbotWidget.addEventListener('click', function(e) {
        e.stopPropagation();
    });
    
    closeChatbot();
    
    console.log('🤖 Chatbot initialized!');
});
/*===== EXPLORE MORE BUTTON - SHOW EDUCATION & HOBBIES =====*/
document.addEventListener('DOMContentLoaded', function() {
    const exploreBtn = document.getElementById('explore-more-btn');
    const moreContent = document.getElementById('more-content');
    
    if (exploreBtn && moreContent) {
        exploreBtn.addEventListener('click', function() {
            if (moreContent.style.display === 'none' || moreContent.style.display === '') {
                moreContent.style.display = 'block';
                exploreBtn.innerHTML = 'Show Less <i class="bx bx-up-arrow-alt"></i>';
                
                setTimeout(() => {
                    moreContent.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }, 100);
            } else {
                moreContent.style.display = 'none';
                exploreBtn.innerHTML = 'Explore More <i class="bx bx-down-arrow-alt"></i>';
            }
        });
    }
});
/*===== BACK TO TOP BUTTON =====*/
document.addEventListener('DOMContentLoaded', function() {
    const backToTopBtn = document.getElementById('back-to-top');
    
    if (backToTopBtn) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 300) {
                backToTopBtn.classList.add('show');
            } else {
                backToTopBtn.classList.remove('show');
            }
        });
        
        backToTopBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});

/*===== DARK MODE TOGGLE =====*/
document.addEventListener('DOMContentLoaded', function() {
    const darkModeCheckbox = document.getElementById('dark-mode-checkbox');
    
    // Check saved preference
    if (localStorage.getItem('dark-mode') === 'enabled') {
        document.body.classList.add('dark-mode');
        darkModeCheckbox.checked = true;
    }
    
    darkModeCheckbox.addEventListener('change', function() {
        if (this.checked) {
            document.body.classList.add('dark-mode');
            localStorage.setItem('dark-mode', 'enabled');
        } else {
            document.body.classList.remove('dark-mode');
            localStorage.setItem('dark-mode', 'disabled');
        }
    });
});

/*===== COUNTER ANIMATION (STATS) =====*/
document.addEventListener('DOMContentLoaded', function() {
    const counters = document.querySelectorAll('.stat-number');
    
    const animateCounter = (counter) => {
        const target = parseInt(counter.getAttribute('data-count'));
        let current = 0;
        const increment = target / 50;
        const updateCounter = () => {
            current += increment;
            if (current < target) {
                counter.innerText = Math.floor(current) + '+';
                requestAnimationFrame(updateCounter);
            } else {
                counter.innerText = target + '+';
            }
        };
        updateCounter();
    };
    
    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                animateCounter(counter);
                observer.unobserve(counter);
            }
        });
    }, observerOptions);
    
    counters.forEach(counter => {
        observer.observe(counter);
    });
});

/*===== PAGE REFRESH ERROR FIX (Cache Clear Hint) =====*/
window.addEventListener('load', function() {
    // Check if page is loaded from cache
    if (performance.navigation.type === 2) {
        console.log('Page loaded from cache - consider refreshing');
    }
    
    // Add version check
    const version = '1.0.0';
    if (localStorage.getItem('site-version') !== version) {
        localStorage.setItem('site-version', version);
        console.log('New version detected - cache cleared');
    }
});