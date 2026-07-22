/**
 * Room Filtering & Interactive Modal Controller
 */
document.addEventListener('DOMContentLoaded', () => {
    // ----------------------------------------------------
    // Category Filter Switcher
    // ----------------------------------------------------
    const filterButtons = document.querySelectorAll('.filter-btn');
    const roomCards = document.querySelectorAll('.room-card');

    if (filterButtons.length > 0 && roomCards.length > 0) {
        filterButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                // Remove active class from all buttons
                filterButtons.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');

                const filterValue = btn.getAttribute('data-filter');

                roomCards.forEach(card => {
                    const cardCategory = card.getAttribute('data-category');
                    if (filterValue === 'all' || cardCategory === filterValue) {
                        card.classList.remove('hidden');
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    } else {
                        card.classList.add('hidden');
                    }
                });
            });
        });
    }

    // ----------------------------------------------------
    // Room Detail Modal & Focus Trap
    // ----------------------------------------------------
    const modalBackdrop = document.getElementById('room-modal');
    const modalCloseBtn = document.getElementById('modal-close-btn');
    const viewDetailBtns = document.querySelectorAll('.btn-view-details');
    let previousActiveElement = null;

    function openModal(roomId) {
        if (!modalBackdrop) return;

        const roomData = GRAND_HORIZON_DATA.rooms.find(r => r.id === roomId);
        if (!roomData) return;

        // Populate Modal Content
        document.getElementById('modal-room-title').textContent = roomData.title;
        document.getElementById('modal-room-price').textContent = `From $${roomData.price}/night`;
        document.getElementById('modal-room-desc').textContent = roomData.fullDesc;

        const amenitiesContainer = document.getElementById('modal-room-features');
        if (amenitiesContainer) {
            amenitiesContainer.innerHTML = roomData.features.map(f => `
                <li><i class="${f.icon}"></i> ${f.text}</li>
            `).join('');
        }

        previousActiveElement = document.activeElement;
        modalBackdrop.classList.add('active');
        modalBackdrop.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';

        if (modalCloseBtn) {
            modalCloseBtn.focus();
        }
    }

    function closeModal() {
        if (!modalBackdrop) return;
        modalBackdrop.classList.remove('active');
        modalBackdrop.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';

        if (previousActiveElement) {
            previousActiveElement.focus();
        }
    }

    // Attach Click Events to "View Details" Buttons
    viewDetailBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const roomId = btn.getAttribute('data-room-id');
            openModal(roomId);
        });
    });

    if (modalCloseBtn) {
        modalCloseBtn.addEventListener('click', closeModal);
    }

    if (modalBackdrop) {
        modalBackdrop.addEventListener('click', (e) => {
            if (e.target === modalBackdrop) {
                closeModal();
            }
        });

        // Keyboard Escape Key & Focus Trap
        document.addEventListener('keydown', (e) => {
            if (!modalBackdrop.classList.contains('active')) return;

            if (e.key === 'Escape') {
                closeModal();
            }

            if (e.key === 'Tab') {
                const focusables = modalBackdrop.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
                const firstElement = focusables[0];
                const lastElement = focusables[focusables.length - 1];

                if (e.shiftKey) {
                    if (document.activeElement === firstElement) {
                        lastElement.focus();
                        e.preventDefault();
                    }
                } else {
                    if (document.activeElement === lastElement) {
                        firstElement.focus();
                        e.preventDefault();
                    }
                }
            }
        });
    }
});
