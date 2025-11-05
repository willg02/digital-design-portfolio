const { createApp } = Vue;

createApp({
    data() {
        return {
            searchQuery: '',
            selectedCategory: 'all',
            sortBy: 'name',
            viewMode: 'grid',
            selectedProduct: null,
            showCart: false,
            cart: [],
            products: [
                {
                    id: 1,
                    name: 'Wireless Headphones Pro',
                    category: 'Electronics',
                    price: 299.99,
                    rating: 5,
                    reviews: 1247,
                    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop',
                    description: 'Premium noise-cancelling wireless headphones',
                    longDescription: 'Experience studio-quality sound with our flagship wireless headphones. Featuring advanced noise-cancellation technology, 30-hour battery life, and premium comfort padding for all-day wear.'
                },
                {
                    id: 2,
                    name: 'Smart Watch Ultra',
                    category: 'Electronics',
                    price: 449.99,
                    rating: 4,
                    reviews: 892,
                    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=300&fit=crop',
                    description: 'Advanced fitness tracking and health monitoring',
                    longDescription: 'Track your fitness goals, monitor your health metrics, and stay connected with our most advanced smartwatch. Features include GPS, heart rate monitoring, sleep tracking, and 50m water resistance.'
                },
                {
                    id: 3,
                    name: 'Minimalist Backpack',
                    category: 'Fashion',
                    price: 79.99,
                    rating: 5,
                    reviews: 2134,
                    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=300&fit=crop',
                    description: 'Sleek design with laptop compartment',
                    longDescription: 'Perfect for professionals and students alike. This minimalist backpack features a dedicated laptop compartment (fits up to 15"), multiple organizational pockets, and water-resistant fabric.'
                },
                {
                    id: 4,
                    name: 'Organic Cotton T-Shirt',
                    category: 'Fashion',
                    price: 29.99,
                    rating: 4,
                    reviews: 567,
                    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=300&fit=crop',
                    description: 'Sustainable and comfortable everyday wear',
                    longDescription: '100% organic cotton t-shirt made from sustainable materials. Soft, breathable, and perfect for everyday wear. Available in multiple colors and sizes.'
                },
                {
                    id: 5,
                    name: 'Stainless Steel Water Bottle',
                    category: 'Home',
                    price: 34.99,
                    rating: 5,
                    reviews: 3421,
                    image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&h=300&fit=crop',
                    description: 'Insulated 32oz bottle keeps drinks cold for 24h',
                    longDescription: 'Double-wall vacuum insulation keeps beverages cold for 24 hours or hot for 12 hours. Made from food-grade stainless steel, BPA-free, and features a leak-proof lid.'
                },
                {
                    id: 6,
                    name: 'Ceramic Coffee Mug Set',
                    category: 'Home',
                    price: 49.99,
                    rating: 4,
                    reviews: 445,
                    image: 'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=400&h=300&fit=crop',
                    description: 'Set of 4 handcrafted ceramic mugs',
                    longDescription: 'Beautifully handcrafted ceramic mugs, perfect for coffee, tea, or hot chocolate. Microwave and dishwasher safe. Each mug holds 12oz and features a unique artisan glaze.'
                },
                {
                    id: 7,
                    name: 'Yoga Mat Premium',
                    category: 'Sports',
                    price: 59.99,
                    rating: 5,
                    reviews: 1876,
                    image: 'https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=400&h=300&fit=crop',
                    description: 'Eco-friendly non-slip yoga mat',
                    longDescription: 'Professional-grade yoga mat made from eco-friendly materials. Features superior grip, extra cushioning (6mm thick), and comes with a carrying strap. Perfect for yoga, pilates, and meditation.'
                },
                {
                    id: 8,
                    name: 'Resistance Bands Set',
                    category: 'Sports',
                    price: 24.99,
                    rating: 4,
                    reviews: 789,
                    image: 'https://images.unsplash.com/photo-1598289431512-b97b0917affc?w=400&h=300&fit=crop',
                    description: '5-band set with varying resistance levels',
                    longDescription: 'Complete resistance band set with 5 different resistance levels (5-50 lbs). Includes door anchor, handles, and ankle straps. Perfect for home workouts, physical therapy, and strength training.'
                },
                {
                    id: 9,
                    name: 'Wireless Keyboard & Mouse',
                    category: 'Electronics',
                    price: 89.99,
                    rating: 4,
                    reviews: 1123,
                    image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400&h=300&fit=crop',
                    description: 'Ergonomic design for productivity',
                    longDescription: 'Sleek wireless keyboard and mouse combo with ergonomic design. Features quiet keys, long battery life (up to 12 months), and works with Windows, Mac, and Chrome OS.'
                },
                {
                    id: 10,
                    name: 'Portable Charger 20000mAh',
                    category: 'Electronics',
                    price: 39.99,
                    rating: 5,
                    reviews: 2567,
                    image: 'https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=400&h=300&fit=crop',
                    description: 'Fast charging power bank with dual ports',
                    longDescription: 'High-capacity 20000mAh power bank with fast charging technology. Features dual USB ports, LED battery indicator, and can charge most smartphones 4-5 times on a single charge.'
                },
                {
                    id: 11,
                    name: 'Designer Sunglasses',
                    category: 'Fashion',
                    price: 149.99,
                    rating: 5,
                    reviews: 634,
                    image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=300&fit=crop',
                    description: 'UV400 protection with polarized lenses',
                    longDescription: 'Premium designer sunglasses with polarized lenses offering 100% UV400 protection. Lightweight frame, scratch-resistant coating, and comes with protective case and cleaning cloth.'
                },
                {
                    id: 12,
                    name: 'Leather Wallet',
                    category: 'Fashion',
                    price: 69.99,
                    rating: 4,
                    reviews: 891,
                    image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?w=400&h=300&fit=crop',
                    description: 'Genuine leather bifold wallet',
                    longDescription: 'Handcrafted from genuine leather, this classic bifold wallet features multiple card slots, ID window, and bill compartments. Develops a beautiful patina over time.'
                },
                {
                    id: 13,
                    name: 'Essential Oil Diffuser',
                    category: 'Home',
                    price: 44.99,
                    rating: 5,
                    reviews: 1456,
                    image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=400&h=300&fit=crop',
                    description: 'Ultrasonic aromatherapy diffuser',
                    longDescription: 'Create a relaxing atmosphere with this ultrasonic essential oil diffuser. Features 7 LED color options, auto shut-off, and whisper-quiet operation. Holds 300ml of water.'
                },
                {
                    id: 14,
                    name: 'Cast Iron Skillet',
                    category: 'Home',
                    price: 54.99,
                    rating: 5,
                    reviews: 2789,
                    image: 'https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=400&h=300&fit=crop',
                    description: 'Pre-seasoned 12-inch cast iron pan',
                    longDescription: 'Professional-grade pre-seasoned cast iron skillet. Perfect for searing, frying, baking, and grilling. Works on all cooktops including induction and oven-safe up to 500°F.'
                },
                {
                    id: 15,
                    name: 'Running Shoes Elite',
                    category: 'Sports',
                    price: 129.99,
                    rating: 4,
                    reviews: 1567,
                    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=300&fit=crop',
                    description: 'Lightweight with responsive cushioning',
                    longDescription: 'Professional running shoes engineered for performance. Features responsive cushioning, breathable mesh upper, and durable rubber outsole. Perfect for long-distance running and training.'
                },
                {
                    id: 16,
                    name: 'Tennis Racket Pro',
                    category: 'Sports',
                    price: 199.99,
                    rating: 5,
                    reviews: 432,
                    image: 'https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?w=400&h=300&fit=crop',
                    description: 'Professional-grade graphite racket',
                    longDescription: 'Tournament-level tennis racket made from premium graphite composite. Lightweight design with large sweet spot, excellent control, and power. Comes with protective cover.'
                }
            ]
        };
    },
    computed: {
        categories() {
            return [...new Set(this.products.map(p => p.category))];
        },
        filteredProducts() {
            let filtered = this.products;

            // Filter by category
            if (this.selectedCategory !== 'all') {
                filtered = filtered.filter(p => p.category === this.selectedCategory);
            }

            // Filter by search query
            if (this.searchQuery) {
                const query = this.searchQuery.toLowerCase();
                filtered = filtered.filter(p => 
                    p.name.toLowerCase().includes(query) || 
                    p.description.toLowerCase().includes(query) ||
                    p.category.toLowerCase().includes(query)
                );
            }

            // Sort products
            filtered = [...filtered].sort((a, b) => {
                switch(this.sortBy) {
                    case 'name':
                        return a.name.localeCompare(b.name);
                    case 'price-low':
                        return a.price - b.price;
                    case 'price-high':
                        return b.price - a.price;
                    case 'rating':
                        return b.rating - a.rating || b.reviews - a.reviews;
                    default:
                        return 0;
                }
            });

            return filtered;
        },
        cartTotal() {
            return this.cart.reduce((sum, item) => sum + item.price, 0);
        }
    },
    methods: {
        viewProduct(product) {
            this.selectedProduct = product;
        },
        addToCart(product) {
            if (!this.isInCart(product.id)) {
                this.cart.push(product);
            }
        },
        removeFromCart(productId) {
            this.cart = this.cart.filter(item => item.id !== productId);
        },
        isInCart(productId) {
            return this.cart.some(item => item.id === productId);
        },
        resetFilters() {
            this.searchQuery = '';
            this.selectedCategory = 'all';
            this.sortBy = 'name';
        }
    }
}).mount('#app');
