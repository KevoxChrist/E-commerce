# VISI | Film Gear (v1)

[Live Demo](https://e-commerce-q83v-6w1veu9sa-kevin-andersons-projects-98ba4cd9.vercel.app/)  

> “Bring stories to life.”  

---

## Table of Contents

1. [Project Overview](#project-overview)  
2. [Features in v1](#features-in-v1)  
3. [Tech Stack](#tech-stack)  
4. [Folder Structure](#folder-structure)  
5. [Planned Features for v2 & v3](#planned-features-for-v2--v3)  

---

## Project Overview

VISI is an e-commerce-style front-end for a film gear business (or themed brand), showcasing photography & cinematography gear. The goal in **v1** is to build a strong visual presence with product listings, a subscription newsletter, and foundational UI/UX.  

This is version 1 of the project, with more interactivity, backend integration, and enhanced features planned for future versions.

---

## Features in v1

- **Home / Hero Page** with creative hero image stacking and well designed header  
- **Footer Newsletter Subscription** form with client-side email validation  
- **Dynamic Product Loading**: products fetched from `product.json` and rendered into categories  
- **Categorized Product Display**: e.g. *Cine*, *Anamorphic*, *Spherical*, *Zoom*, *Specialty*  
- **Error / Success Feedback**: inline error messages in the form  
- **Responsive layout considerations** (e.g. picture `<source>` elements for different breakpoints)  
- **Basic visual styling** (branding, spacing, typography)  

---

## Tech Stack

- **Vanilla JavaScript** for DOM manipulation, event handling, and fetch  
- **HTML5 & CSS3** for structure, layout, and styling  
- **Fetch API** to load `product.json` dynamically  
- **Regex-based email validation**  
- **Vercel** (or similar) for hosting / deployment  

---

## Folder Structure
/
├── index.html
├── product.html (or shop page)
├── contact.html
├── product.json
├── js/
│ ├── index.js
│ └── (other JS modules if modularized)
├── css/
│ └── style.css
├── images/
│ └── (hero / product images)
└── README.md

## Planned Features for v2 & v3

Here’s a roadmap of enhancements I would like to add:
## Version Feature Ideas

### v2
- **Add** product detail pages (click a product to view details)  
- **Rebuild** components in React and use React throughout application  
- **Shopping** cart (add/remove items)  
- **Filter** / sort options (by price, category)  
- **Better** form UX (reset states, disable button on submit)  
- **Search** feature  

### v3
- **Backend integration** (API, database)  
- **User authentication** / accounts  
- **Server-side** product management (admin)  
- **Payment integration** (Stripe, PayPal)  
- **Order history**, reviews, ratings  
- **Enhanced** responsiveness, animations, accessibility improvements  
