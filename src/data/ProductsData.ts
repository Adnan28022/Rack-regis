export const productsData = {
  "industrial-checkout-counter": {
    name: "Industrial Checkout Counter",
    category: "Retail Solutions",
    slug: "industrial-checkout-counter",
    description: "Heavy-duty ergonomic design with premium finish and built-in storage drawers. Engineered for high-traffic retail environments.",
    image: "/Home/Product-1.webp",
    features: ["Ergonomic Design", "Heavy-duty Steel Base", "Scratch-resistant Top", "Integrated Cable Management"],
    specs: [
      { label: "Material", value: "Powder Coated Steel & High-Pressure Laminate" },
      { label: "Dimensions", value: "2400mm (L) x 1100mm (W) x 900mm (H)" },
      { label: "Storage", value: "3 Lockable Drawers + Open Shelving" },
      { label: "Weight", value: "145 KG" }
    ]
  },
  "heavy-duty-rolling-baskets": {
    name: "Heavy-Duty Rolling Baskets",
    category: "Store Equipment",
    slug: "heavy-duty-rolling-baskets",
    description: "High-grade durable plastic baskets with smooth-rolling wheels for easy maneuverability in tight aisles.",
    image: "/Home/Product-2.webp",
    features: ["Reinforced Handles", "Silent Rubber Wheels", "Stackable Design", "UV Resistant Material"],
    specs: [
      { label: "Volume", value: "55 Liters" },
      { label: "Material", value: "Recyclable Polypropylene" },
      { label: "Load Capacity", value: "40 KG" },
      { label: "Wheel Type", value: "360° Swivel Synthetic Rubber" }
    ]
  },
  "chrome-wire-basket": {
    name: "Chrome Wire Basket",
    category: "Shopping Accessories",
    slug: "chrome-wire-basket",
    description: "Classic stackable wire basket with reinforced red handles for comfort and strength. High-polish chrome finish.",
    image: "/Home/Product-3rd.webp",
    features: ["High-Polish Chrome", "Reinforced Grip", "Compact Stacking", "Anti-Rust Coating"],
    specs: [
      { label: "Material", value: "Bright Zinc Plated Steel" },
      { label: "Dimensions", value: "450mm x 320mm x 200mm" },
      { label: "Grip", value: "Dual PVC Ergonomic Handles" },
      { label: "Finish", value: "Chrome Plating" }
    ]
  }
};

export type ProductSlug = keyof typeof productsData;