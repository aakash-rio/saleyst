document.addEventListener('DOMContentLoaded', () => {
    // Nav links active state
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
        });
    });

    // Animate bars on load
    const bars = document.querySelectorAll('.bar');
    bars.forEach(bar => {
        const height = bar.style.height;
        bar.style.height = '0';
        setTimeout(() => {
            bar.style.height = height;
        }, 300);
    });

    // Search input focus effect
    const searchInput = document.querySelector('.search-container input');
    searchInput.addEventListener('focus', () => {
        searchInput.parentElement.style.transform = 'scale(1.02)';
        searchInput.parentElement.style.transition = 'transform 0.3s ease';
    });
    searchInput.addEventListener('blur', () => {
        searchInput.parentElement.style.transform = 'scale(1)';
    });

    // Task card hover sounds or micro-interactions (visual)
    const taskCards = document.querySelectorAll('.task-card');
    taskCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.borderColor = 'var(--accent-pink)';
            card.style.boxShadow = 'var(--glow-pink)';
        });
        card.addEventListener('mouseleave', () => {
            card.style.borderColor = 'var(--border-color)';
            card.style.boxShadow = 'none';
        });
    });

    // Add a simple notification toast simulation
    const notifyBtn = document.querySelector('.notification-btn');
    notifyBtn.addEventListener('click', () => {
        showToast('New activity: Sarah Chen updated the UI Design task.');
    });

    // Color Swatch Selection
    const swatches = document.querySelectorAll('.color-swatch');
    swatches.forEach(swatch => {
        swatch.addEventListener('click', () => {
            swatches.forEach(s => s.classList.remove('active'));
            swatch.classList.add('active');
            
            const color = swatch.style.backgroundColor;
            document.documentElement.style.setProperty('--accent-pink', color);
            
            // Update preview icon
            const logoIcon = document.querySelector('.logo-icon');
            logoIcon.style.background = `linear-gradient(135deg, ${color}, var(--accent-violet))`;
            
            showToast(`Theme updated to ${color}`);
        });
    });

    // Simulated Force Re-sync
    const syncBtn = document.querySelector('.sync-preview .glass-btn');
    syncBtn.addEventListener('click', () => {
        syncBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Syncing...';
        syncBtn.style.opacity = '0.7';
        syncBtn.disabled = true;

        setTimeout(() => {
            syncBtn.innerHTML = '<i class="fas fa-sync-alt" style="margin-right: 8px;"></i> Force Re-sync';
            syncBtn.style.opacity = '1';
            syncBtn.disabled = false;
            showToast('Sync completed successfully!');
        }, 2000);
    });
});

// Animation Keyframes in JS (for the toast)
const style = document.createElement('style');
style.innerHTML = `
    @keyframes slideIn {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    @keyframes slideOut {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(100%); opacity: 0; }
    }
`;
document.head.appendChild(style);
