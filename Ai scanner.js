
        const analyzeBtn = document.getElementById('analyze-btn');
        const stateInitial = document.getElementById('state-initial');
        const statePreview = document.getElementById('state-preview');
        const resultsPlaceholder = document.getElementById('results-placeholder');
        const resultsContent = document.getElementById('results-content');
        const scanOverlay = document.getElementById('scan-overlay');
        const dropZone = document.getElementById('drop-zone');

        // Simple trigger for demo
        dropZone.addEventListener('click', function() {
            if(stateInitial.classList.contains('hidden')) return;
            // Simulated upload
            stateInitial.classList.add('hidden');
            statePreview.classList.remove('hidden');
            analyzeBtn.disabled = false;
        });

        function resetUpload() {
            stateInitial.classList.remove('hidden');
            statePreview.classList.add('hidden');
            resultsPlaceholder.classList.remove('hidden');
            resultsContent.classList.add('hidden');
            analyzeBtn.disabled = true;
            analyzeBtn.innerHTML = "Analyze Now";
            scanOverlay.classList.add('hidden');
        }

        function startAnalysis() {
            analyzeBtn.disabled = true;
            analyzeBtn.innerHTML = '<span class="loading-dots">Analyzing<span>.</span><span>.</span><span>.</span></span>';
            scanOverlay.classList.remove('hidden');
            
            // Simulate AI delay
            setTimeout(() => {
                scanOverlay.classList.add('hidden');
                resultsPlaceholder.classList.add('hidden');
                resultsContent.classList.remove('hidden');
                analyzeBtn.innerHTML = "Analysis Complete";
                
                // Scroll results into view on mobile
                if (window.innerWidth < 1024) {
                    resultsContent.scrollIntoView({ behavior: 'smooth' });
                }
            }, 3000);
        }

        // Initialize state
        analyzeBtn.disabled = true;
    