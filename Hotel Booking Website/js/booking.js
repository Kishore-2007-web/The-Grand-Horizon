/**
 * Toast Notification Helper
 * @param {string} message - Text to display in toast
 * @param {string} type - 'success' | 'error' | 'info'
 */
function showToast(message, type = 'info') {
    let container = document.querySelector('.toast-container');
    if (!container) {
        container = document.createElement('div');
        container.className = 'toast-container';
        container.setAttribute('aria-live', 'polite');
        document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    
    let iconClass = 'fas fa-info-circle';
    if (type === 'success') iconClass = 'fas fa-check-circle';
    if (type === 'error') iconClass = 'fas fa-exclamation-circle';

    toast.innerHTML = `
        <i class="${iconClass}"></i>
        <span>${message}</span>
    `;

    container.appendChild(toast);

    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateY(10px)';
        toast.style.transition = 'all 0.3s ease';
        setTimeout(() => toast.remove(), 300);
    }, 4000);
}

document.addEventListener('DOMContentLoaded', () => {
    const bookingForm = document.getElementById('booking-form');
    const checkInInput = document.getElementById('check-in');
    const checkOutInput = document.getElementById('check-out');

    if (checkInInput && checkOutInput) {
        // Set min check-in date to today
        const today = new Date().toISOString().split('T')[0];
        checkInInput.setAttribute('min', today);

        // Update check-out min date based on check-in
        checkInInput.addEventListener('change', () => {
            if (checkInInput.value) {
                const checkInDate = new Date(checkInInput.value);
                checkInDate.setDate(checkInDate.getDate() + 1);
                const minCheckOut = checkInDate.toISOString().split('T')[0];
                
                checkOutInput.setAttribute('min', minCheckOut);
                
                if (checkOutInput.value && checkOutInput.value < minCheckOut) {
                    checkOutInput.value = minCheckOut;
                }
            }
        });
    }

    if (bookingForm) {
        bookingForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const checkIn = checkInInput ? checkInInput.value : '';
            const checkOut = checkOutInput ? checkOutInput.value : '';
            const guestsSelect = document.getElementById('guests');
            const guests = guestsSelect ? guestsSelect.value : '1';

            if (!checkIn || !checkOut) {
                showToast('Please select both check-in and check-out dates.', 'error');
                return;
            }

            if (new Date(checkOut) <= new Date(checkIn)) {
                showToast('Check-out date must be after check-in date.', 'error');
                return;
            }

            showToast(`Searching available suites for ${guests} guest(s) from ${checkIn} to ${checkOut}...`, 'success');

            setTimeout(() => {
                bookingForm.reset();
            }, 1500);
        });
    }

    // Newsletter Form
    const newsletterForms = document.querySelectorAll('.newsletter-form');
    newsletterForms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const input = form.querySelector('input[type="email"]');
            if (input && input.value) {
                showToast('Thank you for subscribing to our luxury newsletter!', 'success');
                input.value = '';
            }
        });
    });
});
