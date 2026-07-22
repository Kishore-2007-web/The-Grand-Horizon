/**
 * Central Data Store for The Grand Horizon Template
 * Easily customizable data structure for buyer configuration.
 */
const GRAND_HORIZON_DATA = {
    hotelInfo: {
        name: "The Grand Horizon",
        subtitle: "Premium Hotel & Suites",
        address: "123 Luxury Lane, Paradise Island",
        phone: "+1 (800) 123-4567",
        email: "reservations@grandhorizon.com"
    },
    rooms: [
        {
            id: "grand-deluxe-suite",
            title: "Grand Deluxe Suite",
            category: "suites",
            price: 450,
            image: "assets/images/deluxe_suite.png",
            shortDesc: "Spacious, modern coastal suite featuring a king-size bed, subtle gold accents, and an expansive living area.",
            fullDesc: "The Grand Deluxe Suite represents the height of luxury accommodation. Spanning over 800 sq ft, this suite features panoramic floor-to-ceiling ocean views, a master bedroom with a luxury plush mattress, a private balcony with loungers, and an oversized marble bathroom with a deep soaking tub and dual rain showers.",
            features: [
                { icon: "fas fa-bed", text: "King Bed" },
                { icon: "fas fa-bath", text: "Deep Soaking Tub" },
                { icon: "fas fa-wifi", text: "Fast Wi-Fi" },
                { icon: "fas fa-tv", text: "65\" OLED TV" },
                { icon: "fas fa-cocktail", text: "Private Mini-bar" },
                { icon: "fas fa-wind", text: "Ocean View Balcony" }
            ]
        },
        {
            id: "ocean-view-room",
            title: "Ocean View Room",
            category: "ocean",
            price: 350,
            image: "assets/images/ocean_view.png",
            shortDesc: "Wake up to the sound of waves with stunning floor-to-ceiling panoramic views of the crystal-clear ocean.",
            fullDesc: "Our Ocean View Rooms offer serene coastal elegance designed for relaxation. Featuring a private step-out balcony overlooking the azure waters, custom artisan furniture, high-speed fiber Wi-Fi, and a spa-inspired bathroom with premium organic bath products.",
            features: [
                { icon: "fas fa-bed", text: "Queen/King Bed" },
                { icon: "fas fa-water", text: "Ocean View" },
                { icon: "fas fa-wind", text: "Private Balcony" },
                { icon: "fas fa-coffee", text: "Espresso Machine" },
                { icon: "fas fa-concierge-bell", text: "24/7 Room Service" },
                { icon: "fas fa-shield-alt", text: "In-room Safe" }
            ]
        },
        {
            id: "classic-standard-room",
            title: "Classic Standard Room",
            category: "standard",
            price: 250,
            image: "assets/images/standard_room.png",
            shortDesc: "Elegant, comfortable, and beautifully appointed with warm neutral colors and sophisticated lighting.",
            fullDesc: "Perfect for business travelers and vacationers seeking luxury at great value. The Classic Standard Room provides an inviting retreat with high-thread-count Egyptian cotton linens, an ergonomic work desk, high-speed Internet, and a rain shower bathroom.",
            features: [
                { icon: "fas fa-bed", text: "Queen Bed" },
                { icon: "fas fa-briefcase", text: "Work Desk" },
                { icon: "fas fa-shower", text: "Rain Shower" },
                { icon: "fas fa-concierge-bell", text: "Room Service" },
                { icon: "fas fa-wifi", text: "Free High-Speed Wi-Fi" },
                { icon: "fas fa-temperature-high", text: "Climate Control" }
            ]
        }
    ],
    faqs: [
        {
            question: "What are the check-in and check-out times?",
            answer: "Standard check-in time is 3:00 PM and check-out time is 11:00 AM. Early check-in or late check-out can be requested based on availability."
        },
        {
            question: "Is breakfast included with room bookings?",
            answer: "Complimentary gourmet breakfast buffet is included with all Suite bookings. Guests booking standard rooms can add breakfast during reservation or upon arrival."
        },
        {
            question: "What is your cancellation policy?",
            answer: "We offer full refunds for cancellations made up to 48 hours prior to scheduled check-in date. Rates may vary during holiday peak seasons."
        },
        {
            question: "Do you offer airport transfer services?",
            answer: "Yes, private luxury chauffeur transfers can be arranged through our 24/7 Concierge team at least 24 hours in advance."
        }
    ]
};
