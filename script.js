
// --- Data (Simple variables) ---
const destinations = [
    {
        id: 1,
        title: "Maldives",
        description: "Experience ultimate luxury in crystal clear waters and pristine white sand beaches.",
        price: 1299,
        image: "assets/maldives.jpg",
    },
    {
        id: 2,
        title: "Swiss Alps",
        description: "Hit the slopes or relax in a cozy chalet with breathtaking mountain views.",
        price: 899,
        image: "assets/alps.png",
    },
    {
        id: 3,
        title: "Safari Adventure",
        description: "Witness extraordinary wildlife in their natural habitat across vast plains.",
        price: 2499,
        image: "assets/safari.jpg",
    },
    {
        id: 4,
        title: "Tokyo City",
        description: "Immerse yourself in a vibrant metropolis blending deep tradition with modern tech.",
        price: 1599,
        image: "/assets/tokyo.jpg",
    }
];

// --- DOM Elements ---
const destinationList = document.getElementById('destinationList');
const bookNowBtn = document.getElementById('bookNowBtn');

// --- Helper Functions ---

// Formats price to have commas (e.g., 1299 -> 1,299)
const formatPrice = (price) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

// Creates the HTML string for a single destination card
const createCardHTML = (destination) => {
    return `
        <div class="card" data-id="${destination.id}">
          <div class="card-image-wrapper">
            <span class="price-tag">From $${formatPrice(destination.price)}</span>
            <img src="${destination.image}" alt="${destination.title}" loading="lazy" />
          </div>
          <div class="card-content">
            <h3>${destination.title}</h3>
            <p>${destination.description}</p>
            <a href="#" class="btn-card" data-action="learn-more" data-id="${destination.id}">Learn More</a>
          </div>
        </div>
      `;
};

// Renders the sorted list of destinations into the DOM
const renderDestinations = (list) => {
    destinationList.innerHTML = list.map(createCardHTML).join('');
};

// --- Event Handlers ---

// Handles clicks on "Learn More" buttons (Event Delegation)
const handleCardClick = (event) => {
    if (event.target.matches('.btn-card')) {
        event.preventDefault();
        const id = event.target.dataset.id;
        const destination = destinations.find(d => d.id === parseInt(id));
        alert(`✨ Redirecting to booking page for: ${destination.title}\nPrice starts at $${formatPrice(destination.price)}`);
        // In a real app, you would navigate to a detail page here.
    }
};

// Handles the main "Book Now" button click
const handleBookNowClick = (event) => {
    event.preventDefault();
    // Smooth scroll down to the destinations section
    document.querySelector('.featured-section').scrollIntoView({ behavior: 'smooth' });
};

// --- Sorting Function ---

// Sorts destinations by price (low to high)
const sortByPrice = (arr) => {
    // Create a copy to avoid mutating the original array
    const sortedArr = [...arr];
    return sortedArr.sort((a, b) => a.price - b.price);
};

// --- Initialization ---

const init = () => {
    // 1. Sort the data by price (Simple sort variable)
    const sortedDestinations = sortByPrice(destinations);

    // 2. Render the list
    renderDestinations(sortedDestinations);

    // 3. Attach Event Listeners
    destinationList.addEventListener('click', handleCardClick);
    bookNowBtn.addEventListener('click', handleBookNowClick);
};

// Run the app
init();
