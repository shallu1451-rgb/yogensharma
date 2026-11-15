# Azure Andaman - Modern Luxury Andaman & Nicobar Tour Packages Website

A modern, responsive, and experiential travel website for Andaman & Nicobar Island Tour Packages.

> Inspired by the offerings of traditional agencies like [Akshar Tours](https://www.akshartours.com/package_category/india-tour/andaman-tour-packages), but completely redesigned with a **modern tropical luxury design system**, custom color scheme, interactive planning tools, and mobile-first UX.

---

## 🎨 How the Color Scheme & Design Differ from Akshar Tours

| Feature | Akshar Tours | Azure Andaman |
| :--- | :--- | :--- |
| **Primary Color Palette** | Corporate Blue (`#0B3A75`) & Vermilion Orange/Red (`#E34826`) | **Deep Oceanic Abyss (`#06121C`) & Radiant Lagoon Teal (`#00D2B4` / `#0D9488`)** |
| **Secondary & Accents** | Standard grey borders & red badges | **Champagne Gold (`#F59E0B`), Sand White (`#F7F5F0`), and Coral Rose (`#F43F5E`)** |
| **Design Language** | Traditional agency layout with dense tables and static cards | **Glassmorphism (`backdrop-blur`), rounded pill badges, micro-interactions, smooth hover elevations** |
| **Itinerary Presentation** | Static text page with long vertical scrolling | **Interactive Day-Wise Timeline Modal** with day badge nodes, route breakdown, and clear inclusions/exclusions |
| **Pricing & Costing** | Static quote table | **Live Interactive Trip Cost Estimator** with duration slider, traveler count, hotel tier toggle, and add-on calculations |
| **Search & Filtering** | Page reloads / static categories | **Instant client-side multi-parameter filtering** by category pill, travel theme, island destination, and live keyword search |
| **Currency Handling** | Fixed INR only | **Instant Multi-Currency Switcher** (INR ₹, USD $, EUR €) |

---

## 🏝️ Key Sections & Features

1. **Top Announcement & Utility Bar**
   - Government-recognized credentials, Google 4.9★ rating badge, 24/7 hotline, and real-time currency selector (INR, USD, EUR).

2. **Cinematic Hero Section**
   - Immersive high-definition photography with subtle zoom animation.
   - Glassmorphic multi-factor quick search bar (Islands, Duration, Travel Style).

3. **Featured Tour Packages**
   - Interactive category pills (All, Honeymoon Specials, Family Vacations, Adventure & Scuba, Luxury Escapes).
   - Live search input matching package titles, highlights, and island routes.
   - Package cards featuring high-res imagery, duration tags, route breadcrumbs, key inclusions, strike-through discounts, and quick action buttons.

4. **Interactive Day-by-Day Itinerary Modal**
   - Clean vertical timeline with customizable day stops (Port Blair, Havelock, Neil Island, Baratang).
   - Detailed breakdown of hotel stays, ferry tickets (Nautika/Makruzz), and transfers.
   - Transparent side-by-side "Included vs Excluded" breakdown.

5. **Live Andaman Trip Cost Calculator**
   - Sliders for number of nights (3 to 8 nights) and traveler count (1 to 10+ guests).
   - Hotel tier selector: Comfort (3★), Deluxe (4★), Luxury (5★ Beach Villa).
   - Dynamic add-ons for PADI Scuba Diving and Beachfront Candlelight Dinners.
   - Automatic group discount calculation and instant quote lock button.

6. **Island Explorer Guide**
   - Showcase cards for Havelock (Swaraj Dweep), Neil Island (Shaheed Dweep), and Port Blair with ferry durations and top activities.

7. **Ocean Adventures & Water Sports**
   - Highlights for PADI Scuba Diving, Sea Karting, Underwater Sea Walking, and Bioluminescent Night Kayaking.

8. **Trust & Comparison Grid**
   - Highlighting confirmed luxury catamarans, 100% private AC vehicle transfers, and verified beachfront resorts.

9. **Customer Reviews & Testimonials**
   - Real traveller testimonials from families, honeymooners, and adventure groups with 4.9/5 star ratings.

10. **Interactive FAQ Accordion**
    - Answers regarding best travel seasons (October–May), permits, ferry bookings, and customizations.

11. **Instant Booking & WhatsApp Integration**
    - Seamless lead capture form and floating WhatsApp button with pre-filled inquiry text.

---

## 🚀 How to Run the Website

This website is completely self-contained and requires **no build tools, node installations, or servers**.

1. Double-click or open `index.html` in any web browser (Chrome, Edge, Firefox, Safari):
   ```
   c:\Users\LENOVO\Desktop\yogensharma\index.html
   ```
2. Or serve it with any local static web server if desired:
   ```bash
   npx serve .
   # or
   python -m http.server 8000
   ```

---

## 📁 File Structure

```
yogensharma/
│
├── index.html        # Complete semantic HTML5 structure with Tailwind CSS & Lucide icons
├── styles.css        # Custom CSS, color variables, glassmorphism, animations, custom sliders
├── app.js            # Dynamic application logic (packages, filters, modals, calculator, currency)
└── README.md         # Documentation and comparison overview
```
