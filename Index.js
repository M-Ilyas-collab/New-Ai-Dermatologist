
        function toggleFaq(button) {
            const answer = button.nextElementSibling;
            const icon = button.querySelector('.material-symbols-outlined');
            
            if (answer.classList.contains('hidden')) {
                answer.classList.remove('hidden');
                icon.style.transform = 'rotate(180deg)';
                button.classList.add('bg-secondary-container/10');
            } else {
                answer.classList.add('hidden');
                icon.style.transform = 'rotate(0deg)';
                button.classList.remove('bg-secondary-container/10');
            }
        }

        
        
        const observerOptions = {
            threshold: 0.
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('opacity-100', 'translate-y-0');
                    entry.target.classList.remove('opacity-0', 'translate-y-10');
                }
            });
        }, observerOptions);

        document.querySelectorAll('section > div').forEach(el => {
            el.classList.add('transition-all', 'duration-700', 'opacity-0', 'translate-y-10');
            observer.observe(el);
        });
    
    