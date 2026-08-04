
        const diseaseData = {
            'Acne': {
                title: 'Acne Vulgaris',
                symptoms: 'Whiteheads, blackheads, small red tender bumps, pimples (pustules), large solid painful lumps under the skin, and painful pus-filled lumps.',
                causes: 'Excess oil (sebum) production, hair follicles clogged by oil and dead skin cells, bacteria, and inflammation.',
                prevention: 'Wash your face twice a day, avoid harsh scrubbing, keep hair clean, use non-comedogenic makeup, and avoid touching your face.',
                treatment: 'Over-the-counter topical treatments (salicylic acid, benzoyl peroxide), prescription medications (retinoids, antibiotics), and in some cases, oral isotretinoin.'
            },
            'Eczema': {
                title: 'Eczema (Atopic Dermatitis)',
                symptoms: 'Dry skin, itching (especially at night), red to brownish-gray patches, small raised bumps which may leak fluid, and thickened, cracked, or scaly skin.',
                causes: 'A combination of genetic factors, environmental triggers, and an overactive immune system that affects the skin barrier.',
                prevention: 'Moisturize skin at least twice a day, identify and avoid triggers (sweat, stress, soaps), and take shorter, lukewarm showers.',
                treatment: 'Corticosteroid creams, calcineurin inhibitors, phototherapy, and systemic medications for severe cases.'
            },
            'Psoriasis': {
                title: 'Psoriasis',
                symptoms: 'Red patches of skin covered with thick, silvery scales; small scaling spots; dry, cracked skin that may bleed; itching, burning, or soreness.',
                causes: 'An immune system problem that causes skin cells to grow faster than usual, leading to a buildup of cells on the surface.',
                prevention: 'Manage stress, avoid skin injuries, avoid certain medications that trigger flare-ups, and maintain a healthy lifestyle.',
                treatment: 'Topical ointments (corticosteroids, vitamin D analogues), light therapy (UVB), and systemic or biological medications.'
            },
            'Melanoma': {
                title: 'Melanoma',
                symptoms: 'A change in an existing mole or the development of a new, unusual-looking growth on the skin. Use the ABCDE guide: Asymmetry, Border, Color, Diameter, Evolving.',
                causes: 'DNA damage in skin cells, primarily from ultraviolet (UV) radiation from sunlight or tanning lamps, triggers mutations.',
                prevention: 'Apply high-SPF sunscreen daily, avoid peak sun hours (10 AM - 4 PM), wear protective clothing, and perform regular skin self-exams.',
                treatment: 'Surgical excision of the tumor, lymph node biopsy, immunotherapy, targeted therapy, radiation, or chemotherapy.'
            },
            'Rosacea': {
                title: 'Rosacea',
                symptoms: 'Facial redness, visible blood vessels (telangiectasia), swollen red bumps (similar to acne), eye irritation, and an enlarged nose (rhinophyma).',
                causes: 'The exact cause is unknown, but it may be due to a combination of hereditary and environmental factors. Not caused by poor hygiene.',
                prevention: 'Identify triggers such as spicy foods, alcohol, extreme temperatures, and sunlight. Use gentle skin care products.',
                treatment: 'Topical medications to reduce redness, oral antibiotics for inflammatory bumps, and laser therapy to treat visible blood vessels.'
            },
            'Vitiligo': {
                title: 'Vitiligo',
                symptoms: 'Patchy loss of skin color, premature whitening or graying of the hair on your scalp, eyelashes, eyebrows or beard, and loss of color in mucous membranes.',
                causes: 'Occurs when pigment-producing cells (melanocytes) die or stop functioning. It is believed to be an autoimmune condition.',
                prevention: 'There is no known way to prevent vitiligo, but protecting the skin from the sun can prevent sunburn in depigmented areas.',
                treatment: 'Corticosteroid creams, light therapy (PUVA or UVB), depigmentation of unaffected skin, or skin grafting in stable cases.'
            },
            'Ringworm': {
                title: 'Ringworm (Tinea Corporis)',
                symptoms: 'A scaly ring-shaped area, typically on the buttocks, trunk, arms and legs; itchiness; a clear or scaly area inside the ring; slightly raised expanding rings.',
                causes: 'A fungal infection caused by mold-like parasites that live on the cells in the outer layer of your skin.',
                prevention: 'Keep skin clean and dry, wear loose-fitting clothing, avoid sharing personal items, and wash hands after touching pets.',
                treatment: 'Over-the-counter antifungal creams (clotrimazole, miconazole) or prescription-strength oral antifungal medications for persistent cases.'
            }
        };

        function openDetails(key) {
            const data = diseaseData[key];
            const modal = document.getElementById('details-modal');
            const content = document.getElementById('modal-content');
            
            content.innerHTML = `
                <div class="flex flex-col md:flex-row gap-stack-lg mb-12">
                    <div class="md:w-1/3">
                        <div class="aspect-square rounded-2xl overflow-hidden shadow-lg">
                            <img src="placeholder" data-alt="High quality clinical medical photograph specifically representing ${data.title} in a professional dermatological context. Clear lighting, neutral background, consistent with a clean medical interface style." class="w-full h-full object-cover">
                        </div>
                    </div>
                    <div class="md:w-2/3">
                        <span class="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-label-md font-bold mb-4">Clinical Resource</span>
                        <h2 class="font-headline-xl text-headline-xl text-on-surface mb-4">${data.title}</h2>
                        <p class="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">Detailed overview and clinical management guidelines for ${data.title}.</p>
                    </div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-stack-lg">
                    <div class="p-6 rounded-2xl bg-surface-container">
                        <div class="flex items-center gap-3 mb-4 text-primary">
                            <span class="material-symbols-outlined">description</span>
                            <h4 class="font-headline-md text-headline-md">Symptoms</h4>
                        </div>
                        <p class="text-on-surface-variant leading-relaxed">${data.symptoms}</p>
                    </div>
                    
                    <div class="p-6 rounded-2xl bg-surface-container">
                        <div class="flex items-center gap-3 mb-4 text-primary">
                            <span class="material-symbols-outlined">psychology</span>
                            <h4 class="font-headline-md text-headline-md">Causes</h4>
                        </div>
                        <p class="text-on-surface-variant leading-relaxed">${data.causes}</p>
                    </div>

                    <div class="p-6 rounded-2xl bg-surface-container">
                        <div class="flex items-center gap-3 mb-4 text-primary">
                            <span class="material-symbols-outlined">shield</span>
                            <h4 class="font-headline-md text-headline-md">Prevention</h4>
                        </div>
                        <p class="text-on-surface-variant leading-relaxed">${data.prevention}</p>
                    </div>

                    <div class="p-6 rounded-2xl bg-surface-container">
                        <div class="flex items-center gap-3 mb-4 text-primary">
                            <span class="material-symbols-outlined">healing</span>
                            <h4 class="font-headline-md text-headline-md">Treatment</h4>
                        </div>
                        <p class="text-on-surface-variant leading-relaxed">${data.treatment}</p>
                    </div>
                </div>

                <div class="mt-12 p-8 rounded-2xl ai-gradient text-on-primary">
                    <div class="flex flex-col md:flex-row items-center justify-between gap-6">
                        <div>
                            <h4 class="font-headline-md text-headline-md mb-2">Worried about your skin?</h4>
                            <p class="opacity-90">Our AI can provide a preliminary analysis in seconds.</p>
                        </div>
                        <button class="bg-white text-primary px-8 py-3 rounded-xl font-bold hover:bg-surface-bright transition-colors shadow-lg">Start AI Scan</button>
                    </div>
                </div>
            `;
            
            modal.classList.remove('hidden');
            modal.classList.add('flex');
            document.body.style.overflow = 'hidden';
        }

        function closeDetails() {
            const modal = document.getElementById('details-modal');
            modal.classList.add('hidden');
            modal.classList.remove('flex');
            document.body.style.overflow = '';
        }

        // Close modal on click outside
        document.getElementById('details-modal').addEventListener('click', function(e) {
            if (e.target === this) closeDetails();
        });
    