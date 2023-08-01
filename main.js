function annualAndMonthlyToggle() {
    let toggleInput = document.querySelector('.toggle-input');
    let contentWrapper = document.getElementById('contentWrapper');

    let planType = toggleInput.checked ? 'MONTHLY' : 'ANNUAL';
    let plans = {
        'MONTHLY': {
            title: 'PATRIOT MONTHLY',
            price: '$9.95',
            duration: 'A Month',
            buttonColor: '#4084F6',
            zIndexA: -1000,
            zIndexB: 1000
        },
        'ANNUAL': {
            title: 'PATRIOT ANNUAL',
            price: '$2.00',
            duration: 'A week (Billed Annually)',
            buttonColor: '#ff1d29',
            zIndexA: 1000,
            zIndexB: -1000
        }
    };

    let currentPlan = plans[planType];

    contentWrapper.innerHTML = `
        <div class="content_name">
            <div class="content_title">${currentPlan.title}</div>
        </div>
        <div class="content_price">
            <p class="price_amount">${currentPlan.price}</p>
        </div>
        <div class="content_period">
            <div class="period_duration">${currentPlan.duration}</div>
        </div>
         <div id="multiButtons">
            <div class="btn" id="optionA" style="z-index: ${currentPlan.zIndexA};">
                <button style="background-color: ${currentPlan.buttonColor};">
                    Subscribe
                </button>
            </div>
            <div class="btn" id="optionB" style="z-index: ${currentPlan.zIndexB};">
                <button style="background-color: ${currentPlan.buttonColor};">
                    Subscribe
                </button>
            </div>
        </div>
        <div class="unsubscribe">
            Cancel Anytime
        </div>
    `;
}

document.querySelector('.toggle-input').addEventListener('change', annualAndMonthlyToggle);
