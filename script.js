document.addEventListener('DOMContentLoaded', function () {
    var menuToggle = document.getElementById('mobile-menu');
    var navMenu = document.getElementById('nav-menu');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', function () {
            var isOpen = navMenu.classList.toggle('open');
            menuToggle.setAttribute('aria-expanded', String(isOpen));
        });

        navMenu.querySelectorAll('a').forEach(function (link) {
            link.addEventListener('click', function () {
                if (window.innerWidth <= 768) {
                    navMenu.classList.remove('open');
                    menuToggle.setAttribute('aria-expanded', 'false');
                }
            });
        });

        window.addEventListener('resize', function () {
            if (window.innerWidth > 768) {
                navMenu.classList.remove('open');
                menuToggle.setAttribute('aria-expanded', 'false');
            }
        });
    }

    // FAQ toggle
    document.querySelectorAll('.faq-question').forEach(function (btn) {
        btn.addEventListener('click', function () {
            var item = btn.closest('.faq-item');
            if (item.classList.contains('active')) {
                item.classList.remove('active');
            } else {
                item.classList.add('active');
            }
        });
    });

    // Show success messages if redirected with ?status=success
    var params = new URLSearchParams(window.location.search);
    if (params.get('status') === 'success') {
        var contactStatus = document.getElementById('contact-status');
        var donateStatus = document.getElementById('donate-status');
        var message = 'Thanks! Your submission was received.';
        if (contactStatus) contactStatus.textContent = message;
        if (donateStatus) donateStatus.textContent = message;
    }

    // Small UI enhancement: subtle reveal for cards on load
    document.querySelectorAll('.card, .program-card, .impact-card').forEach(function (el, i) {
        el.style.opacity = 0;
        el.style.transform = 'translateY(8px)';
        el.style.transition = 'opacity 420ms ease, transform 420ms ease';
        setTimeout(function () {
            el.style.opacity = 1;
            el.style.transform = 'translateY(0)';
        }, 120 + i * 40);
    });
});