document.addEventListener('DOMContentLoaded', () => {
    // --------------------------------------------------------
    // Sticky Header
    // --------------------------------------------------------
    const header = document.getElementById('main-header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // --------------------------------------------------------
    // Mobile Menu Toggle
    // --------------------------------------------------------
    const mobileToggle = document.getElementById('mobile-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    mobileToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        // Toggle icon between bars and times
        const icon = mobileToggle.querySelector('i');
        if (navMenu.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });

    // Close mobile menu when clicking a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            const icon = mobileToggle.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        });
    });

    // --------------------------------------------------------
    // Scroll Reveal Animation (Intersection Observer)
    // --------------------------------------------------------
    const reveals = document.querySelectorAll('.reveal');

    const revealOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const revealOnScroll = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, revealOptions);

    reveals.forEach(reveal => {
        revealOnScroll.observe(reveal);
    });

    // --------------------------------------------------------
    // Booking Form Date Validation & Handling
    // --------------------------------------------------------
    const bookingForm = document.getElementById('booking-form');
    const checkInInput = document.getElementById('check-in');
    const checkOutInput = document.getElementById('check-out');

    // Set minimum date to today
    const today = new Date().toISOString().split('T')[0];
    checkInInput.setAttribute('min', today);
    
    // Update check-out min date based on check-in date
    checkInInput.addEventListener('change', () => {
        const checkInDate = new Date(checkInInput.value);
        // Minimum check-out is one day after check-in
        checkInDate.setDate(checkInDate.getDate() + 1);
        const minCheckOut = checkInDate.toISOString().split('T')[0];
        
        checkOutInput.setAttribute('min', minCheckOut);
        
        // If current check-out is before new min check-out, reset it
        if (checkOutInput.value && checkOutInput.value < minCheckOut) {
            checkOutInput.value = minCheckOut;
        }
    });

    bookingForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const checkIn = checkInInput.value;
        const checkOut = checkOutInput.value;
        const guests = document.getElementById('guests').value;
        
        if (checkIn && checkOut) {
            // In a real app, this would send data to a server
            alert(`Checking availability for ${guests} guest(s) from ${checkIn} to ${checkOut}. Please wait...`);
            
            // Simulating a successful check (reset form)
            setTimeout(() => {
                bookingForm.reset();
            }, 1000);
        } else {
            alert('Please select both check-in and check-out dates.');
        }
    });
});
