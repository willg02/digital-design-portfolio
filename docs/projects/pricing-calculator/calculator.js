// ============================================
// Pricing Calculator JavaScript
// ============================================

// Get all DOM elements
const serviceType = document.getElementById('serviceType');
const projectScope = document.getElementById('projectScope');
const timeline = document.getElementById('timeline');
const checkboxes = document.querySelectorAll('.checkbox-label input[type="checkbox"]');

// Display elements
const scopeValue = document.getElementById('scopeValue');
const timelineValue = document.getElementById('timelineValue');
const basePrice = document.getElementById('basePrice');
const scopeMultiplier = document.getElementById('scopeMultiplier');
const timelineAdjust = document.getElementById('timelineAdjust');
const addonsTotal = document.getElementById('addonsTotal');
const totalPrice = document.getElementById('totalPrice');
const split50 = document.getElementById('split50');
const split50b = document.getElementById('split50b');
const monthly3 = document.getElementById('monthly3');

// Modal elements
const modal = document.getElementById('quoteModal');
const generateQuoteBtn = document.getElementById('generateQuote');
const closeModal = document.querySelector('.close');

// Scope labels
const scopeLabels = ['Small', 'Medium', 'Large'];

// Calculate and update price
function calculatePrice() {
    // Get base price from selected service
    const selectedOption = serviceType.options[serviceType.selectedIndex];
    const base = parseInt(selectedOption.dataset.base);
    
    // Get scope multiplier (Small: 0.7, Medium: 1.0, Large: 1.5)
    const scopeMultipliers = [0.7, 1.0, 1.5];
    const scopeIndex = parseInt(projectScope.value) - 1;
    const scopeMult = scopeMultipliers[scopeIndex];
    
    // Calculate timeline adjustment (rush fee or discount)
    const weeks = parseInt(timeline.value);
    let timelineAdj = 0;
    if (weeks <= 2) {
        timelineAdj = base * 0.3; // 30% rush fee for 1-2 weeks
    } else if (weeks >= 8) {
        timelineAdj = -(base * 0.1); // 10% discount for 8+ weeks
    }
    
    // Calculate add-ons total
    let addons = 0;
    checkboxes.forEach(checkbox => {
        if (checkbox.checked) {
            addons += parseInt(checkbox.dataset.price);
        }
    });
    
    // Calculate total
    const subtotal = (base * scopeMult) + timelineAdj;
    const total = subtotal + addons;
    
    // Update displays
    basePrice.textContent = `$${base.toLocaleString()}`;
    scopeMultiplier.textContent = `${scopeMult}x`;
    timelineAdjust.textContent = timelineAdj >= 0 
        ? `+$${timelineAdj.toLocaleString()}` 
        : `-$${Math.abs(timelineAdj).toLocaleString()}`;
    addonsTotal.textContent = `$${addons.toLocaleString()}`;
    totalPrice.textContent = `$${Math.round(total).toLocaleString()}`;
    
    // Update payment options
    const half = Math.round(total / 2);
    const monthly = Math.round(total / 3);
    split50.textContent = `$${half.toLocaleString()}`;
    split50b.textContent = `$${half.toLocaleString()}`;
    monthly3.textContent = `$${monthly.toLocaleString()}`;
    
    // Trigger price animation
    totalPrice.style.animation = 'none';
    setTimeout(() => {
        totalPrice.style.animation = 'priceUpdate 0.3s ease';
    }, 10);
}

// Update scope display
function updateScopeDisplay() {
    const index = parseInt(projectScope.value) - 1;
    scopeValue.textContent = scopeLabels[index];
}

// Update timeline display
function updateTimelineDisplay() {
    const weeks = parseInt(timeline.value);
    timelineValue.textContent = `${weeks} week${weeks > 1 ? 's' : ''}`;
}

// Generate quote
function generateQuote() {
    // Get current values
    const service = serviceType.options[serviceType.selectedIndex].text;
    const scope = scopeLabels[parseInt(projectScope.value) - 1];
    const weeks = parseInt(timeline.value);
    const total = totalPrice.textContent;
    
    // Set quote content
    document.getElementById('quoteDate').textContent = new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    document.getElementById('quoteService').textContent = service;
    document.getElementById('quoteScope').textContent = scope;
    document.getElementById('quoteTimeline').textContent = `${weeks} week${weeks > 1 ? 's' : ''}`;
    
    // Build breakdown table
    const breakdownBody = document.getElementById('quoteBreakdown');
    breakdownBody.innerHTML = '';
    
    // Add base service
    const baseRow = document.createElement('tr');
    baseRow.innerHTML = `
        <td>Base Service (${service})</td>
        <td>${basePrice.textContent}</td>
    `;
    breakdownBody.appendChild(baseRow);
    
    // Add scope adjustment
    const scopeRow = document.createElement('tr');
    scopeRow.innerHTML = `
        <td>Scope Adjustment (${scope})</td>
        <td>${scopeMultiplier.textContent}</td>
    `;
    breakdownBody.appendChild(scopeRow);
    
    // Add timeline adjustment if not $0
    if (timelineAdjust.textContent !== '$0') {
        const timelineRow = document.createElement('tr');
        const adjustment = weeks <= 2 ? 'Rush Fee' : 'Extended Timeline Discount';
        timelineRow.innerHTML = `
            <td>${adjustment}</td>
            <td>${timelineAdjust.textContent}</td>
        `;
        breakdownBody.appendChild(timelineRow);
    }
    
    // Add selected add-ons
    checkboxes.forEach(checkbox => {
        if (checkbox.checked) {
            const row = document.createElement('tr');
            const label = checkbox.nextElementSibling.textContent;
            const price = `$${parseInt(checkbox.dataset.price).toLocaleString()}`;
            row.innerHTML = `
                <td>${label.replace(/\s*\(.*?\)\s*/g, '')}</td>
                <td>+${price}</td>
            `;
            breakdownBody.appendChild(row);
        }
    });
    
    // Set total
    document.getElementById('quoteTotal').textContent = total;
    
    // Show modal
    modal.style.display = 'block';
}

// Event Listeners
serviceType.addEventListener('change', calculatePrice);
projectScope.addEventListener('input', () => {
    updateScopeDisplay();
    calculatePrice();
});
timeline.addEventListener('input', () => {
    updateTimelineDisplay();
    calculatePrice();
});

checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', calculatePrice);
});

generateQuoteBtn.addEventListener('click', generateQuote);

closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

// Initialize
updateScopeDisplay();
updateTimelineDisplay();
calculatePrice();
