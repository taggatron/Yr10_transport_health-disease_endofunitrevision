// Flashcards updated to match the pasted Transport / Health & Disease worksheet image
const foundationFlashcards = [
    {
        id: 1,
        question: "State the role of the following components of the blood: Platelets; White blood cells; Red blood cells.",
        answer: "Platelets: help blood clot to stop bleeding. White blood cells: defend against pathogens (e.g. phagocytosis / making antibodies). Red blood cells: transport oxygen around the body (via haemoglobin)."
    },
    {
        id: 2,
        question: "Which of the below is an artery? Explain your answer.",
        image: "artery&vein.png",
        imageAlt: "Cross sections of two blood vessels labeled X and Y",
        answer: "X is the artery: arteries have thick, muscular walls and a relatively small lumen (they carry blood at high pressure). Veins (Y) have thinner walls and a larger lumen."
    },
    {
        id: 3,
        question: "Draw a fully labelled diagram of the heart.",
        answer: "",
        answerImage: "heart-diagram.svg",
        answerImageAlt: "Fully labelled diagram of the heart"
    },
    {
        id: 4,
        question: "Some people are born with a hole in their heart. An effect of this is that they feel tired easily. Explain why.",
        answer: "A hole can allow oxygenated and deoxygenated blood to mix, so less oxygen reaches body tissues. Cells do less aerobic respiration, releasing less energy, so the person feels tired more easily."
    },
    {
        id: 5,
        question: "What type of medicine is used to treat HIV?",
        answer: "Antiviral drugs — they stop HIV replicating and reduce viral load."
    },
    {
        id: 6,
        question: "Describe how phagocytes and antibodies help destroy pathogens.",
        answer: "Phagocytes engulf and digest pathogens (phagocytosis). Antibodies bind to antigens on pathogens, neutralise them, and/or mark them for destruction (e.g. causing clumping and making them easier for phagocytes to remove).<br><button class='modal-trigger' data-url='https://taggatron.github.io/Immune_defence/'>View Immune Defence Simulation</button>"
    },
    {
        id: 7,
        question: "Explain how vaccinations work to reduce the spread of a disease.",
        answer: "Vaccines contain antigens from a pathogen (dead/inactive/weakened/parts). This triggers antibody production and creates memory cells. On later infection the body produces lots of antibodies quickly, so the person is less likely to become ill and pass the pathogen on (helps herd immunity)."
    },
    {
        id: 8,
        question: "A clear zone has a radius of 4 cm. Calculate the area of the clear zone.",
        answer: "Area = πr² = π × 4² = 16π ≈ 50.3 cm² (≈ 50 cm²)."
    },
    {
        id: 9,
        question: "What does a clear zone tell you about the effectiveness of an antimicrobial?",
        answer: "It shows how well the antimicrobial stops bacteria growing. A larger clear zone means the antimicrobial is more effective."
    },
    {
        id: 10,
        question: "A 7 g potato piece is placed in a dilute solution of sucrose. After 2 hours it weighs 9 g. Calculate the % change in mass.",
        answer: "% change = ((9 − 7) ÷ 7) × 100 ≈ 28.6% (≈ 29% increase)."
    },
    {
        id: 11,
        question: "Explain why the potato piece has gained mass. Use ideas about osmosis in your answer.",
        answer: "The dilute sucrose solution has a higher water potential than the potato cells. Water moves into the potato cells by osmosis through partially permeable cell membranes, making the cells more turgid and increasing the potato’s mass."
    },
    {
        id: 12,
        question: "Use the graph to identify the concentration of sucrose within the potato.",
        answer: "It’s the concentration where % change in mass = 0 (the isotonic point). From the graph this is approximately 0.3 mol/dm³ (read the x-value at the crossing point)."
    },
    {
        id: 13,
        question: "A cube has a volume of 120 cm³ and a surface area of 40 cm². What is the surface area to volume ratio?",
        answer: "Surface area : volume = 40 : 120 = 1 : 3."
    },
    {
        id: 14,
        question: "How are red blood cells adapted for their function?",
        answer: "Biconcave shape gives a large surface area for diffusion; no nucleus so there’s more space for haemoglobin; packed with haemoglobin to carry oxygen; flexible to squeeze through capillaries."
    }
];

// Initialize the flashcard app (foundation-only)
document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('flashcard-container');
    const resetButton = document.getElementById('reset-button');

    // Create flashcards from a given array
    function createFlashcards(cardsArray) {
        container.innerHTML = '';

        cardsArray.forEach(card => {
            const flashcardElement = document.createElement('div');
            flashcardElement.className = 'flashcard foundation' + (card.answerImage ? ' has-diagram' : '');
            flashcardElement.setAttribute('data-id', card.id);

            flashcardElement.innerHTML = `
                <div class="card-inner">
                    <div class="card-front">
                        <div class="question-number">Question ${card.id}</div>
                        <div class="question-text">${card.question}</div>
                        ${card.image ? `<img src="${card.image}" alt="${card.imageAlt || 'Flashcard image'}" class="card-front-image">` : ''}
                        <div class="click-hint">Click to reveal answer</div>
                    </div>
                    <div class="card-back">
                        <div class="answer-label">Answer ${card.id}</div>
                        ${card.answerImage ? `<img src="${card.answerImage}" alt="${card.answerImageAlt || 'Answer diagram'}" class="card-back-image">` : ''}
                        <div class="answer-text">${card.answer}</div>
                        <div class="click-hint">Click to show question</div>
                    </div>
                </div>
            `;

            // Add click handler
            flashcardElement.addEventListener('click', function(e) {
                if (e.target.closest('.modal-trigger')) return; // Ignore clicks on buttons
                this.classList.toggle('flipped');
            });

            container.appendChild(flashcardElement);
        });
    }

    // Reset all cards
    function resetAllCards() {
        const allCards = document.querySelectorAll('.flashcard');
        allCards.forEach(card => {
            card.classList.remove('flipped');
        });
    }

    // Render foundation flashcards only
    createFlashcards(foundationFlashcards);

    // Reset button functionality
    resetButton.addEventListener('click', resetAllCards);

    // Modal Logic
    const modalOverlay = document.getElementById('modal-overlay');
    const modalClose = document.getElementById('modal-close');
    const modalIframe = document.getElementById('modal-iframe');

    // Close Modal Function
    function closeModal() {
        modalOverlay.classList.remove('active');
        setTimeout(() => {
            modalOverlay.style.display = 'none';
            modalIframe.src = ''; // Stop video/content
        }, 300); // Match transition logic
    }

    modalClose.addEventListener('click', closeModal);
    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) closeModal();
    });

    // Delegated listener for modal triggers (buttons inside dynamic cards)
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('modal-trigger')) {
            e.stopPropagation(); // Prevent card flip
            const url = e.target.getAttribute('data-url');
            if (url) {
                modalIframe.src = url;
                modalOverlay.style.display = 'flex';
                // Trigger reflow for transition
                setTimeout(() => modalOverlay.classList.add('active'), 10);
            }
        }
    });

});