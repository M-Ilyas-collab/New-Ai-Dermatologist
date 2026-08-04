
        // Simple Interaction: Close other accordion items when one is opened
        const accordions = document.querySelectorAll('.faq-accordion-item');
        accordions.forEach(item => {
            item.addEventListener('toggle', (e) => {
                if (item.open) {
                    accordions.forEach(other => {
                        if (other !== item) other.open = false;
                    });
                }
            });
        });

        // Search highlight mock logic
        const searchInput = document.querySelector('input[type="text"]');
        searchInput.addEventListener('input', (e) => {
            const query = e.target.value.toLowerCase();
            accordions.forEach(item => {
                const text = item.innerText.toLowerCase();
                if (text.includes(query)) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });