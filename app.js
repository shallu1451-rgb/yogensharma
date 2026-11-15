/**
 * AZURE ANDAMAN - MAIN APPLICATION SCRIPT
 * Interactive Tour Packages, Filters, Calculator, Itinerary Modal & Booking
 */

// CURRENCY RATES (Base is INR)
const CURRENCIES = {
  INR: { symbol: '₹', rate: 1 },
  USD: { symbol: '$', rate: 0.012 },
  EUR: { symbol: '€', rate: 0.011 }
};
let currentCurrency = 'INR';

// COMPREHENSIVE ANDAMAN TOUR PACKAGES DATA
const PACKAGES_DATA = [
  {
    id: 'andaman-classic-5n',
    title: 'Enchanting Andaman & Havelock Escape',
    duration: '5 Nights / 6 Days',
    nights: 5,
    days: 6,
    category: ['family', 'honeymoon'],
    islands: ['havelock', 'portblair', 'neil'],
    rating: 4.9,
    reviewsCount: 148,
    priceINR: 23999,
    originalPriceINR: 29999,
    badge: 'Best Seller',
    image: 'https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?q=80&w=800&auto=format&fit=crop',
    route: 'Port Blair (2N) → Havelock (2N) → Neil Island (1N)',
    features: ['Nautika / Makruzz AC Catamaran', '4-Star Beach Resorts', 'Cellular Jail Light & Sound', 'Radhanagar Sunset'],
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Port Blair & Cellular Jail Memorial',
        description: 'Warm airport welcome by our private chauffeur. Check-in to your sea-view hotel. Afternoon visit to historic Cellular Jail followed by the stirring Light & Sound Show narrating India\'s freedom saga.'
      },
      {
        day: 2,
        title: 'High-Speed Cruise to Havelock Island & Radhanagar Beach',
        description: 'Morning board private AC Catamaran to Havelock (Swaraj Dweep). Transfer to your luxury beach resort. In the late afternoon, unwind at Asia\'s best Radhanagar Beach (Beach No. 7) for a mesmerizing sunset.'
      },
      {
        day: 3,
        title: 'Elephant Beach Excursion & Snorkeling Coral Reefs',
        description: 'Speedboat cruise to Elephant Beach known for its shallow azure waters and rich coral reef systems. Complimentary snorkeling session and time for sea walking or jet skiing.'
      },
      {
        day: 4,
        title: 'Ferry to Neil Island & Natural Living Rock Bridge',
        description: 'Sail to Neil Island (Shaheed Dweep). Visit Bharatpur Beach for tranquil water strolls, followed by the iconic natural coral rock bridge and Lakshmanpur beach for panoramic sunset views.'
      },
      {
        day: 5,
        title: 'Return to Port Blair & Chidiya Tapu Sunset Point',
        description: 'Morning ferry return to Port Blair. Afternoon trip to Chidiya Tapu, famous for lush mangrove forests and vibrant island birdwatching, followed by shopping for authentic pearls and wooden handicrafts.'
      },
      {
        day: 6,
        title: 'Departure with Cherished Tropical Memories',
        description: 'Enjoy a leisurely breakfast overlooking the bay. Timely private transfer to Veer Savarkar International Airport with souvenir gifts from Azure Andaman.'
      }
    ]
  },
  {
    id: 'andaman-honeymoon-6n',
    title: 'Exotic Honeymoon Romance & Private Villas',
    duration: '6 Nights / 7 Days',
    nights: 6,
    days: 7,
    category: ['honeymoon', 'luxury'],
    islands: ['havelock', 'portblair', 'neil'],
    rating: 5.0,
    reviewsCount: 192,
    priceINR: 32500,
    originalPriceINR: 42000,
    badge: 'Honeymoon Special',
    image: 'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?q=80&w=800&auto=format&fit=crop',
    route: 'Port Blair (2N) → Havelock (3N) → Neil Island (1N)',
    features: ['Candlelight Beach Dinner', 'Flower Bed Decor & Cake', 'Private Pool Villa Stay', 'Couples Photo Session'],
    itinerary: [
      {
        day: 1,
        title: 'Romantic Welcome at Port Blair & Corbyn’s Cove Beach',
        description: 'Chauffeured pickup with fresh floral garlands. Check-in to oceanfront suite. Sunset seaside stroll at palm-fringed Corbyn\'s Cove Beach followed by Cellular Jail Sound & Light show.'
      },
      {
        day: 2,
        title: 'Makruzz Royal Class Sailing to Havelock Beachfront Villa',
        description: 'Sail via premium luxury catamaran. Check into your private beach villa with welcome champagne cocktail. Spend an intimate evening at Radhanagar Beach.'
      },
      {
        day: 3,
        title: 'Elephant Beach Marine Life & Intimate Candlelight Dinner',
        description: 'Trek or speed-boat to Elephant Beach for pristine reef exploration. In the evening, savor a private 4-course candlelight dinner right on the sands accompanied by acoustic sea breeze.'
      },
      {
        day: 4,
        title: 'Leisure Day at Kalapathar Beach & Sunset Drinks',
        description: 'Wake up to the sun peeking over turquoise waters. Visit serene Kalapathar Beach with black rocks contrasting bright teal water. Afternoon spa massage at resort.'
      },
      {
        day: 5,
        title: 'Neil Island Serenity & Sunset at Lakshmanpur',
        description: 'Cruise to Neil Island. Explore scenic Sitapur sunrise beach, Bharatpur lagoon, and spend magical twilight moments at Lakshmanpur Beach.'
      },
      {
        day: 6,
        title: 'Return to Port Blair & Sagarika Marine Museum',
        description: 'Ferry back to Port Blair. Visit the Anthropological & Samudrika Naval Marine Museum followed by an intimate harbor dinner.'
      },
      {
        day: 7,
        title: 'Farewell Andaman',
        description: 'Private airport drop with memories of a lifetime and complimentary custom framed couple photo.'
      }
    ]
  },
  {
    id: 'andaman-scuba-adventure-5n',
    title: 'Ultimate Coral Reefs & Scuba Expedition',
    duration: '5 Nights / 6 Days',
    nights: 5,
    days: 6,
    category: ['adventure'],
    islands: ['havelock', 'neil', 'portblair'],
    rating: 4.8,
    reviewsCount: 110,
    priceINR: 28400,
    originalPriceINR: 35000,
    badge: 'Adventure High',
    image: 'https://images.unsplash.com/photo-1682687220063-4742bd7fd538?q=80&w=800&auto=format&fit=crop',
    route: 'Port Blair (1N) → Havelock (3N) → Neil Island (1N)',
    features: ['PADI Discover Scuba Dive', 'HD Underwater Video/Photos', 'Night Bioluminescent Kayaking', 'Snorkel Gear Included'],
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Port Blair & Water Sports Complex',
        description: 'Arrive and transfer to hotel. Visit Rajiv Gandhi Water Sports Complex and enjoy a scenic jet ski or speed ride, followed by an introductory dive briefing.'
      },
      {
        day: 2,
        title: 'Catamaran to Havelock & First Open Reef Dive',
        description: 'Sail to Havelock. Check-in to dive eco-resort. Gear up with your PADI certified dive master for an unforgettable dive at Nemo Reef.'
      },
      {
        day: 3,
        title: 'Deep Scuba Diving & Elephant Beach Watersports',
        description: 'Morning boat dive into Turtle Bay or Tribe Gate with pristine visibility. Afternoon spent exploring Elephant Beach coral gardens.'
      },
      {
        day: 4,
        title: 'Bioluminescent Night Kayaking in Mangrove Creeks',
        description: 'Relax through the day at Kalapathar. As darkness sets in, embark on a night kayak expedition watching sparkling glowing phytoplankton illuminate with every paddle stroke.'
      },
      {
        day: 5,
        title: 'Neil Island Bharatpur Snorkeling & Return to Port Blair',
        description: 'Morning cruise to Neil Island for deep coral snorkeling at Bharatpur. Afternoon fast ferry return to Port Blair.'
      },
      {
        day: 6,
        title: 'Airport Transfer',
        description: 'Breakfast and private drop to Port Blair airport for your onward journey.'
      }
    ]
  },
  {
    id: 'andaman-family-leisure-6n',
    title: 'Tropical Family Discovery & Heritage Tour',
    duration: '6 Nights / 7 Days',
    nights: 6,
    days: 7,
    category: ['family'],
    islands: ['portblair', 'havelock', 'neil', 'baratang'],
    rating: 4.9,
    reviewsCount: 164,
    priceINR: 26900,
    originalPriceINR: 33000,
    badge: 'Family Favorite',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800&auto=format&fit=crop',
    route: 'Port Blair (3N) → Havelock (2N) → Neil Island (1N)',
    features: ['Glass Bottom Boat Rides', 'Ross Island British Heritage', 'All Entry Passes Pre-Booked', 'Kids Friendly Resorts'],
    itinerary: [
      {
        day: 1,
        title: 'Welcome to Port Blair & Corbyn’s Cove Fun',
        description: 'Greeted at Port Blair airport. Relax at hotel and visit Corbyn\'s Cove beach with water activities suited for children and elders. Evening Cellular Jail light show.'
      },
      {
        day: 2,
        title: 'Ross Island & North Bay Coral Island Cruise',
        description: 'Boat excursion to Ross Island (erstwhile British colonial administrative capital with friendly wild deers and peacocks) followed by North Bay island with glass-bottom boat rides.'
      },
      {
        day: 3,
        title: 'Cruising to Havelock & Radhanagar Beach',
        description: 'Board Nautika cruise to Havelock. Family afternoon at Radhanagar Beach with gentle, kid-safe waves and pristine white sands.'
      },
      {
        day: 4,
        title: 'Elephant Beach Adventures for All Ages',
        description: 'Speedboat cruise to Elephant Beach. Kids and seniors enjoy sea walking and banana boat rides under close supervision.'
      },
      {
        day: 5,
        title: 'Neil Island Tour (Bharatpur & Natural Coral Rock Bridge)',
        description: 'Scenic cruise to Neil Island. Visit Bharatpur beach and discover the living marine limestone bridge during low tide.'
      },
      {
        day: 6,
        title: 'Baratang Island Limestone Caves (Day Trip) or Port Blair City',
        description: 'Ferry back to Port Blair. Optional excursion to Baratang through tropical rainforests to witness the natural limestone caves.'
      },
      {
        day: 7,
        title: 'Departure from Port Blair',
        description: 'Leisurely breakfast, souvenir market stop at Sagarika emporium, and private airport drop.'
      }
    ]
  },
  {
    id: 'andaman-express-3n',
    title: 'Andaman Quick Escape & Coral Gateway',
    duration: '3 Nights / 4 Days',
    nights: 3,
    days: 4,
    category: ['short'],
    islands: ['portblair', 'havelock'],
    rating: 4.7,
    reviewsCount: 88,
    priceINR: 16999,
    originalPriceINR: 21999,
    badge: 'Quick Getaway',
    image: 'https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?q=80&w=800&auto=format&fit=crop',
    route: 'Port Blair (2N) + Havelock Island (1N)',
    features: ['High-Speed Catamaran Cruise', 'Radhanagar Beach Visit', 'Cellular Jail Entry & Show', 'Private Airport Transfers'],
    itinerary: [
      {
        day: 1,
        title: 'Port Blair Arrival & Cellular Jail',
        description: 'Pickup from Port Blair Airport, hotel check in, and evening visit to historic Cellular Jail with Sound & Light show.'
      },
      {
        day: 2,
        title: 'Day Trip / Overnight Havelock & Radhanagar Beach',
        description: 'Morning private ferry to Havelock Island. Spend the day admiring Radhanagar Beach sunset and overnight stay in Havelock beach resort.'
      },
      {
        day: 3,
        title: 'Elephant Beach Snorkeling & Return to Port Blair',
        description: 'Morning excursion to Elephant Beach with included snorkeling session. Afternoon return cruise to Port Blair.'
      },
      {
        day: 4,
        title: 'Airport Transfer',
        description: 'Private vehicle drop to Port Blair airport after breakfast.'
      }
    ]
  },
  {
    id: 'andaman-luxury-villa-7n',
    title: 'Grand Archipelago & 5-Star Luxury Retreat',
    duration: '7 Nights / 8 Days',
    nights: 7,
    days: 8,
    category: ['luxury', 'honeymoon'],
    islands: ['havelock', 'neil', 'portblair', 'baratang'],
    rating: 5.0,
    reviewsCount: 96,
    priceINR: 48999,
    originalPriceINR: 62000,
    badge: 'Ultra Luxury',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=800&auto=format&fit=crop',
    route: 'Port Blair (2N) → Havelock (3N) → Neil (2N)',
    features: ['Taj Exotica / Barefoot Resort Stay', 'VIP Cruise Lounge Seats', 'Private Sunset Yacht Cruise', 'Personal Island Guide'],
    itinerary: [
      {
        day: 1,
        title: 'VIP Arrival in Port Blair & Private Heritage Walk',
        description: 'Chauffeured luxury SUV reception at airport. Premium sea-facing suite check in. Exclusive guided tour of Cellular Jail and private bay sunset cruise.'
      },
      {
        day: 2,
        title: 'VIP Luxury Catamaran to Taj Exotica / Barefoot Havelock',
        description: 'Sail in premium royal cabin. Check in to secluded beachfront villa surrounded by tropical foliage. Private beach stroll at Radhanagar.'
      },
      {
        day: 3,
        title: 'Private Speedboat Charter to Secluded Reefs',
        description: 'Chartered boat to untouched coral spots away from tourist crowds. Dedicated dive master and chef-curated picnic lunch.'
      },
      {
        day: 4,
        title: 'Deep Sea Game Fishing or Sunset Yacht Sail',
        description: 'Embark on a private sunset catamaran cruise with champagne and canapés along Havelock\'s western coastline.'
      },
      {
        day: 5,
        title: 'Private Transfer to Neil Island Luxury Resort',
        description: 'Sail to Neil Island. Check into boutique luxury cottage. Explore secluded natural rock formations and private beach dining.'
      },
      {
        day: 6,
        title: 'Neil Island Relaxation & Coral Walking',
        description: 'Relaxing spa therapies, coastal cycling, and sunset cocktails at Lakshmanpur Beach.'
      },
      {
        day: 7,
        title: 'Return to Port Blair & Chidiya Tapu Forest Trail',
        description: 'Ferry back to Port Blair. Sunset visit to Chidiya Tapu viewpoint and celebratory farewell dinner.'
      },
      {
        day: 8,
        title: 'VIP Airport Escort & Departure',
        description: 'Private chauffeur drop to Port Blair airport with expedited check-in assistance.'
      }
    ]
  }
];

// STATE MANAGEMENT
let filteredPackages = [...PACKAGES_DATA];
let activeCategoryFilter = 'all';
let searchKeyword = '';

// FORMAT CURRENCY
function formatCurrency(amountINR) {
  const curr = CURRENCIES[currentCurrency] || CURRENCIES.INR;
  const converted = Math.round(amountINR * curr.rate);
  return `${curr.symbol}${converted.toLocaleString('en-IN')}`;
}

// INITIALIZE DOM
document.addEventListener('DOMContentLoaded', () => {
  renderPackages();
  setupFilterPills();
  setupKeywordSearch();
  setupCurrencySelector();
  updateTripCalculator();
  lucide.createIcons();
});

// RENDER PACKAGE CARDS
function renderPackages() {
  const container = document.getElementById('packages-grid');
  const countText = document.getElementById('package-count-text');
  const noResults = document.getElementById('no-results-msg');

  if (!container) return;
  container.innerHTML = '';

  if (filteredPackages.length === 0) {
    noResults.classList.remove('hidden');
    countText.textContent = 'Showing 0 Packages';
    return;
  }

  noResults.classList.add('hidden');
  countText.textContent = `Showing ${filteredPackages.length} Curated Package${filteredPackages.length > 1 ? 's' : ''}`;

  filteredPackages.forEach(pkg => {
    const card = document.createElement('div');
    card.className = 'pkg-card bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-sm flex flex-col justify-between';

    card.innerHTML = `
      <div>
        <!-- Card Top Image with Tags -->
        <div class="relative h-60 overflow-hidden">
          <img 
            src="${pkg.image}" 
            alt="${pkg.title}" 
            class="w-full h-full object-cover group-hover:scale-105 transition duration-500"
            loading="lazy"
          >
          <div class="absolute inset-0 bg-gradient-to-t from-abyss-950/80 via-transparent to-black/20"></div>

          <!-- Top Badges -->
          <div class="absolute top-4 left-4 flex flex-wrap gap-2">
            <span class="bg-teal-600/95 backdrop-blur-md text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-md">
              ${pkg.duration}
            </span>
            ${pkg.badge ? `
              <span class="bg-amber-500/95 backdrop-blur-md text-slate-900 text-[11px] font-extrabold px-2.5 py-1 rounded-full shadow-md">
                ${pkg.badge}
              </span>
            ` : ''}
          </div>

          <!-- Rating Badge -->
          <div class="absolute top-4 right-4 bg-abyss-900/80 backdrop-blur-md text-white text-xs font-bold px-2.5 py-1 rounded-full flex items-center gap-1">
            <i data-lucide="star" class="w-3.5 h-3.5 fill-amber-400 text-amber-400"></i>
            <span>${pkg.rating}</span>
            <span class="text-slate-400 text-[10px]">(${pkg.reviewsCount})</span>
          </div>

          <!-- Route string at bottom of image -->
          <div class="absolute bottom-3 left-4 right-4 text-xs font-semibold text-teal-200 flex items-center gap-1.5 truncate">
            <i data-lucide="map-pin" class="w-3.5 h-3.5 shrink-0 text-teal-400"></i>
            <span class="truncate">${pkg.route}</span>
          </div>
        </div>

        <!-- Card Content Body -->
        <div class="p-6">
          <h3 class="font-serif text-xl font-bold text-abyss-900 hover:text-teal-700 transition line-clamp-1 cursor-pointer" onclick="openItineraryModal('${pkg.id}')">
            ${pkg.title}
          </h3>

          <!-- Feature Bullets -->
          <div class="mt-4 space-y-2">
            ${pkg.features.map(f => `
              <div class="flex items-center gap-2 text-xs text-slate-600">
                <i data-lucide="check" class="w-3.5 h-3.5 text-teal-600 shrink-0"></i>
                <span class="truncate">${f}</span>
              </div>
            `).join('')}
          </div>
        </div>
      </div>

      <!-- Card Bottom Pricing & Actions -->
      <div class="p-6 pt-0 border-t border-slate-100 mt-4">
        <div class="flex items-baseline justify-between pt-4 mb-4">
          <div>
            <span class="text-[11px] text-slate-400 uppercase font-semibold block">Starting from</span>
            <div class="flex items-baseline gap-2">
              <span class="text-2xl font-extrabold text-teal-700 font-serif">
                ${formatCurrency(pkg.priceINR)}
              </span>
              <span class="text-xs text-slate-400 line-through">
                ${formatCurrency(pkg.originalPriceINR)}
              </span>
            </div>
            <span class="text-[10px] text-slate-500">per person • incl. taxes</span>
          </div>
          <span class="text-xs font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-lg">
            Save ${Math.round((1 - pkg.priceINR / pkg.originalPriceINR) * 100)}%
          </span>
        </div>

        <div class="grid grid-cols-2 gap-3">
          <button 
            onclick="openItineraryModal('${pkg.id}')" 
            class="w-full py-2.5 rounded-xl border border-slate-300 text-xs font-bold text-slate-700 hover:bg-slate-50 hover:border-slate-400 transition flex items-center justify-center gap-1"
          >
            <i data-lucide="eye" class="w-3.5 h-3.5"></i> Details
          </button>
          <button 
            onclick="quickBook('${pkg.id}')" 
            class="w-full py-2.5 rounded-xl bg-teal-600 text-white text-xs font-bold hover:bg-teal-700 shadow-md shadow-teal-600/20 transition flex items-center justify-center gap-1"
          >
            <i data-lucide="send" class="w-3.5 h-3.5"></i> Enquire
          </button>
        </div>
      </div>
    `;

    container.appendChild(card);
  });

  lucide.createIcons();
}

// SETUP FILTER PILLS
function setupFilterPills() {
  const pills = document.querySelectorAll('#filter-pills .filter-pill');
  pills.forEach(pill => {
    pill.addEventListener('click', () => {
      pills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      activeCategoryFilter = pill.getAttribute('data-filter');
      applyCombinedFilter();
    });
  });
}

// SETUP KEYWORD SEARCH
function setupKeywordSearch() {
  const searchInput = document.getElementById('package-keyword-search');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchKeyword = e.target.value.toLowerCase().trim();
      applyCombinedFilter();
    });
  }
}

// COMBINED FILTER LOGIC
function applyCombinedFilter() {
  filteredPackages = PACKAGES_DATA.filter(pkg => {
    // Category match
    const matchesCategory = (activeCategoryFilter === 'all') || pkg.category.includes(activeCategoryFilter);

    // Keyword match
    const textToSearch = `${pkg.title} ${pkg.route} ${pkg.features.join(' ')} ${pkg.duration}`.toLowerCase();
    const matchesKeyword = searchKeyword === '' || textToSearch.includes(searchKeyword);

    return matchesCategory && matchesKeyword;
  });

  renderPackages();
}

// HERO SEARCH HANDLER
function applyHeroSearch() {
  const island = document.getElementById('hero-island-select').value;
  const duration = document.getElementById('hero-duration-select').value;
  const style = document.getElementById('hero-style-select').value;

  filteredPackages = PACKAGES_DATA.filter(pkg => {
    let matchesIsland = true;
    if (island !== 'all') {
      matchesIsland = pkg.islands.includes(island);
    }

    let matchesDuration = true;
    if (duration === 'short') matchesDuration = pkg.nights <= 4;
    else if (duration === 'medium') matchesDuration = pkg.nights >= 5 && pkg.nights <= 6;
    else if (duration === 'long') matchesDuration = pkg.nights >= 7;

    let matchesStyle = true;
    if (style !== 'all') {
      matchesStyle = pkg.category.includes(style);
    }

    return matchesIsland && matchesDuration && matchesStyle;
  });

  renderPackages();

  // Smooth scroll down to packages
  const pkgSection = document.getElementById('packages');
  if (pkgSection) {
    pkgSection.scrollIntoView({ behavior: 'smooth' });
  }
}

// RESET FILTERS
function resetFilters() {
  activeCategoryFilter = 'all';
  searchKeyword = '';
  const searchInput = document.getElementById('package-keyword-search');
  if (searchInput) searchInput.value = '';

  const pills = document.querySelectorAll('#filter-pills .filter-pill');
  pills.forEach((p, idx) => {
    if (idx === 0) p.classList.add('active');
    else p.classList.remove('active');
  });

  filteredPackages = [...PACKAGES_DATA];
  renderPackages();
}

// CURRENCY SELECTOR
function setupCurrencySelector() {
  const select = document.getElementById('currency-select');
  if (select) {
    select.addEventListener('change', (e) => {
      currentCurrency = e.target.value;
      renderPackages();
      updateTripCalculator();
    });
  }
}

// TRIP COST CALCULATOR LOGIC
function updateTripCalculator() {
  const nightsInput = document.getElementById('calc-nights');
  const travelersInput = document.getElementById('calc-travelers');
  const hotelTier = document.querySelector('input[name="calc-hotel"]:checked')?.value || 'deluxe';
  const hasScuba = document.getElementById('addon-scuba')?.checked || false;
  const hasDinner = document.getElementById('addon-dinner')?.checked || false;

  const nights = parseInt(nightsInput?.value || 5, 10);
  const travelers = parseInt(travelersInput?.value || 2, 10);

  // Label updates
  const nightsVal = document.getElementById('calc-nights-val');
  if (nightsVal) nightsVal.textContent = `${nights} Nights / ${nights + 1} Days`;

  const travelersVal = document.getElementById('calc-travelers-val');
  if (travelersVal) travelersVal.textContent = `${travelers} Person${travelers > 1 ? 's' : ''}`;

  // Base pricing algorithm:
  // Base daily cost per person (ferries, private AC cab, breakfast, permits)
  let baseDailyRate = 2800; // standard

  if (hotelTier === 'deluxe') {
    baseDailyRate = 4200;
  } else if (hotelTier === 'luxury') {
    baseDailyRate = 7500;
  }

  // Base catamaran transfer cost per head
  const ferryCost = 4500;

  // Total base per person
  let perPerson = (baseDailyRate * nights) + ferryCost;

  // Add-ons
  if (hasScuba) perPerson += 3500;
  if (hasDinner) perPerson += 2500;

  // Slight group discount if > 3 travelers
  if (travelers >= 4) {
    perPerson = Math.round(perPerson * 0.92); // 8% group discount
  }

  const grandTotal = perPerson * travelers;

  const perPersonElem = document.getElementById('calc-total-per-person');
  const grandTotalElem = document.getElementById('calc-grand-total');

  if (perPersonElem) perPersonElem.textContent = formatCurrency(perPerson);
  if (grandTotalElem) {
    grandTotalElem.textContent = `Total for ${travelers} Traveler${travelers > 1 ? 's' : ''}: ${formatCurrency(grandTotal)} (Incl. Ferries & Cabs)`;
  }
}

// REQUEST QUOTE FROM CALCULATOR
function requestQuoteFromCalc() {
  const nights = document.getElementById('calc-nights')?.value || 5;
  const travelers = document.getElementById('calc-travelers')?.value || 2;
  const hotel = document.querySelector('input[name="calc-hotel"]:checked')?.value || 'deluxe';

  const notes = document.getElementById('quote-notes');
  if (notes) {
    notes.value = `Interested in ${nights} Nights / ${parseInt(nights, 10) + 1} Days plan for ${travelers} guests (${hotel.toUpperCase()} Stay). Estimated quote calculated.`;
  }

  openCustomQuoteModal();
}

// ITINERARY MODAL FUNCTIONS
let selectedPackageForModal = null;

function openItineraryModal(pkgId) {
  const pkg = PACKAGES_DATA.find(p => p.id === pkgId);
  if (!pkg) return;

  selectedPackageForModal = pkg;

  document.getElementById('modal-pkg-duration').textContent = pkg.duration;
  document.getElementById('modal-pkg-title').textContent = pkg.title;
  document.getElementById('modal-pkg-route').textContent = pkg.route;
  document.getElementById('modal-pkg-price').textContent = formatCurrency(pkg.priceINR);

  // Build timeline
  const daysContainer = document.getElementById('modal-days-container');
  daysContainer.innerHTML = '';

  pkg.itinerary.forEach(item => {
    const dayItem = document.createElement('div');
    dayItem.className = 'relative mb-6 pb-2';
    dayItem.innerHTML = `
      <div class="timeline-dot"></div>
      <div class="flex items-center gap-2">
        <span class="text-xs font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-2 py-0.5 rounded">Day ${item.day}</span>
        <h5 class="text-sm sm:text-base font-bold text-slate-800">${item.title}</h5>
      </div>
      <p class="text-xs sm:text-sm text-slate-600 mt-1.5 leading-relaxed">
        ${item.description}
      </p>
    `;
    daysContainer.appendChild(dayItem);
  });

  const modal = document.getElementById('itinerary-modal');
  const box = document.getElementById('itinerary-modal-box');
  modal.classList.remove('hidden');
  setTimeout(() => {
    modal.classList.add('modal-show');
    box.classList.add('modal-box-show');
  }, 10);

  lucide.createIcons();
}

function closeItineraryModal() {
  const modal = document.getElementById('itinerary-modal');
  const box = document.getElementById('itinerary-modal-box');
  modal.classList.remove('modal-show');
  box.classList.remove('modal-box-show');
  setTimeout(() => {
    modal.classList.add('hidden');
  }, 300);
}

function bookFromModal() {
  if (selectedPackageForModal) {
    const notes = document.getElementById('quote-notes');
    if (notes) {
      notes.value = `Booking inquiry for: "${selectedPackageForModal.title}" (${selectedPackageForModal.duration}). Please share dates and final cost.`;
    }
  }
  closeItineraryModal();
  openCustomQuoteModal();
}

function quickBook(pkgId) {
  const pkg = PACKAGES_DATA.find(p => p.id === pkgId);
  if (pkg) {
    const notes = document.getElementById('quote-notes');
    if (notes) {
      notes.value = `Enquiry for: ${pkg.title} (${pkg.duration} - ${formatCurrency(pkg.priceINR)}).`;
    }
  }
  openCustomQuoteModal();
}

// CUSTOM QUOTE MODAL FUNCTIONS
function openCustomQuoteModal() {
  const modal = document.getElementById('quote-modal');
  const box = document.getElementById('quote-modal-box');
  modal.classList.remove('hidden');
  setTimeout(() => {
    modal.classList.add('modal-show');
    box.classList.add('modal-box-show');
  }, 10);
  lucide.createIcons();
}

function closeCustomQuoteModal() {
  const modal = document.getElementById('quote-modal');
  const box = document.getElementById('quote-modal-box');
  modal.classList.remove('modal-show');
  box.classList.remove('modal-box-show');
  setTimeout(() => {
    modal.classList.add('hidden');
  }, 300);
}

// HANDLE QUOTE SUBMISSION
function handleQuoteSubmit(e) {
  e.preventDefault();
  const name = document.getElementById('quote-name').value;
  const phone = document.getElementById('quote-phone').value;

  closeCustomQuoteModal();
  showToast(`Thank you, ${name}! Our Andaman travel expert will WhatsApp you at ${phone} within 30 minutes.`);

  // Reset form
  document.getElementById('quote-form').reset();
}

// TOAST NOTIFICATIONS
function showToast(message) {
  const toast = document.getElementById('toast');
  const toastMsg = document.getElementById('toast-msg');
  if (!toast || !toastMsg) return;

  toastMsg.textContent = message;
  toast.classList.remove('translate-y-24', 'opacity-0');
  toast.classList.add('translate-y-0', 'opacity-100');

  setTimeout(() => {
    toast.classList.remove('translate-y-0', 'opacity-100');
    toast.classList.add('translate-y-24', 'opacity-0');
  }, 4500);
}

// FAQ TOGGLE
function toggleFaq(button) {
  const item = button.parentElement;
  const answer = item.querySelector('.faq-answer');
  const icon = button.querySelector('i');

  const isOpen = answer.style.maxHeight && answer.style.maxHeight !== '0px';

  // Close all other FAQs
  document.querySelectorAll('.faq-answer').forEach(ans => {
    ans.style.maxHeight = null;
    ans.parentElement.querySelector('button i').classList.remove('rotate-180');
  });

  if (!isOpen) {
    answer.style.maxHeight = answer.scrollHeight + 'px';
    icon.classList.add('rotate-180');
  }
}

// MOBILE MENU TOGGLE
function toggleMobileMenu() {
  const menu = document.getElementById('mobile-menu');
  if (menu) {
    menu.classList.toggle('hidden');
  }
}

document.getElementById('mobile-menu-btn')?.addEventListener('click', toggleMobileMenu);

// CLOSE MODALS ON ESC KEY OR OUTSIDE CLICK
window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeItineraryModal();
    closeCustomQuoteModal();
  }
});

document.getElementById('quote-modal')?.addEventListener('click', (e) => {
  if (e.target.id === 'quote-modal') closeCustomQuoteModal();
});

document.getElementById('itinerary-modal')?.addEventListener('click', (e) => {
  if (e.target.id === 'itinerary-modal') closeItineraryModal();
});
