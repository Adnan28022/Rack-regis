// src/data/ProductsData.ts

export interface Product {
  id: string;
  name: string;
  category: string;
  subCategory: string;
  description: string;
  images: string[]; // Array for multiple images
  features: string[];
  specs: { label: string; value: string }[];
}

export const productsData: Record<string, Product> = {
  "bulk-rack-mesh-decking": {
    id: "HD-101",
    name: "Bulk Rack With Mesh Decking",
    category: "Heavy Duty Racks",
    subCategory: "Bulk Rack With Mesh Decking",
    description: "High-density industrial storage solution featuring reinforced wire mesh decking for superior air flow and safety compliance.",
    images: ["/Products/HeavyDutyRacks/Bulk-Rack-With-Mesh-Decking-1.jpg", "/Products/HeavyDutyRacks/Bulk-Rack-With-Mesh-Decking-2.jpg", "/Products/HeavyDutyRacks/Bulk-Rack-With-Mesh-Decking-3.jpg", "/Products/HeavyDutyRacks/Bulk-Rack-With-Mesh-Decking-4.jpg"],
    features: ["Heavy Load Capacity", "Fire Safety Compliant", "Easy Assembly", "Corrosion Resistant"],
    specs: [
      { label: "Load Capacity", value: "2500KG / Level" },
      { label: "Material", value: "High Grade Cold Rolled Steel" },
      { label: "Finish", value: "Powder Coated" },
      { label: "Decking", value: "Galvanized Mesh" }
    ]
  },
   "bulk-rack-steel-decking": {
    id: "HD-102",
    name: "Bulk Rack With Steel Decking",
    category: "Heavy Duty Racks",
    subCategory: "Bulk Rack With Steel Decking",
    description: "Bulk Rack with Steel Decking is a heavy-duty industrial storage system designed for maximum strength, stability, and safe storage of bulk materials.",
    images: ["/Products/HeavyDutyRacks/Bulk-Rack-With-Steel-Decking-1.jpg", "/Products/HeavyDutyRacks/Bulk-Rack-With-Steel-Decking-2.jpg", "/Products/HeavyDutyRacks/Bulk-Rack-With-Steel-Decking-3.jpg"],
    features: [  "Heavy-Duty Load Capacity",  "Strong Steel Decking",  "High Stability Structure",  "Long-Lasting Durability",  "Corrosion-Resistant Finish",  "Safe Bulk Storage",  "Easy Installation",  "Industrial Grade Design"],
    specs: [
  { label: "Load Capacity", value: "2500KG / Level" },
  { label: "Material", value: "High Grade Cold Rolled Steel" },
  { label: "Finish", value: "Powder Coated" },
  { label: "Decking", value: "Steel Decking" }
]
  },
  "double-deep-racking-system": {
    id: "HD-103",
    name: "Double Deep Racking System",
    category: "Heavy Duty Racks",
    subCategory: "Double Deep Racking System",
    description: "Double Deep Racking System is a high-density storage solution designed to maximize warehouse space by storing pallets two deep, ensuring efficient utilization and optimized inventory management.",
    images: ["/Products/HeavyDutyRacks/Double-Deep.jpg"],
    features: [  "High Storage Density",  "Space Optimization Design",  "Heavy-Duty Steel Structure",  "Selective Access System",  "Adjustable Beam Levels",  "Durable Powder Coating",  "Forklift Compatible",  "Industrial Grade Safety"],
    specs: [
  { label: "System Type", value: "Double Deep Pallet Racking" },
  { label: "Material", value: "High Strength Steel" },
  { label: "Finish", value: "Powder Coated Anti-Corrosion" },
  { label: "Load Capacity", value: "Up to 2000–3000 KG per Level (Customizable)" }
]
  },
   "drive-in-drive-thru-racking-system": {
    id: "HD-104",
    name: "Drive in Drive Thru Racking System",
    category: "Heavy Duty Racks",
    subCategory: "Drive in Drive Thru Racking System",
    description: "Drive-in racks are designed for storing of pallets in channels on the principle of LIFO: Last In First Out. Like front loading racks, the drive-in racks are a kind of the pallet storage racking, but their cargo handling method is different: drive-in racking exclude the possibility of direct access to each individual section, but these racks are essential where it is not necessary to load and unload the pallets frequently. They are useable for the storage of similar cargoes and seasonal products with a long shelf life. Drive-in pallet racks are widely used in chambers with artificial climate as well (low temperature, refrigeration, air conditioning, etc.)",
    images: ["/Products/HeavyDutyRacks/DiDu-1.gif", "/Products/HeavyDutyRacks/DiDu-2.png", "/Products/HeavyDutyRacks/DiDu-3.jpg", "/Products/HeavyDutyRacks/DiDu-4.jpg"],
    features: [  "High Density",  "Space Saving",  "Deep Storage",  "Forklift Access",  "Heavy Duty"],
    specs: [
  { label: "System Type", value: "Drive-In / Drive-Thru Racking" },
  { label: "Material", value: "High Strength Steel" },
  { label: "Finish", value: "Powder Coated Anti-Corrosion" },
  { label: "Load Capacity", value: "Up to 1000–2000 KG per Pallet Level" }
]
  },
  "palletized-racks": {
    id: "HD-105",
    name: "Palletized Racks",
    category: "Heavy Duty Racks",
    subCategory: "Palletized Racks",
    description: "Palletized Racking System.....Our company offers robust range of Palletized Racking System that is chiefly developed for keeping goods and material on palletized base. These are one of the toughest racking systems, where the load bearing strength is highest. We find this racking system in chemical industry, sanitary industry, food & beverage industry etc.",
    images: ["/Products/HeavyDutyRacks/Palletized-Rack-1.jpg", "/Products/HeavyDutyRacks/Palletized-Rack-2.jpg", "/Products/HeavyDutyRacks/Palletized-Rack-3.jpg"],
    features:[  "High Load Capacity",  "Easy Pallet Access",  "Adjustable Levels",  "Space Optimization",  "Heavy Duty Structure", "Forklift Compatible"],
    specs: [
  { label: "System Type", value: "Palletized Storage Racking" },
  { label: "Material", value: "High Strength Industrial Steel" },
  { label: "Finish", value: "Powder Coated Anti-Corrosion" },
  { label: "Load Capacity", value: "Up to 1000–4000 KG per Level (Customizable)" }
]
  },
  "gondola-rack": {
    id: "DR-201",
    name: "Gondola Rack",
    category: "Display Racks",
    subCategory: "Gondola Rack",
    description: "Self Standing two side shelving know as gondola.Basic Component it a center has base shelve fixed in the pillar and town side back sheet make is stronger enough to self stand. it mostly placed at center of shop.",
    images: ["/Products/DisplayRacks/GondolaRacks/Gondola-Rack-1.jpg", "/Products/DisplayRacks/GondolaRacks/Gondola-Rack-2.png"],
    features: ["High tensile strength and corrosion resistant", "Smooth finishing", "Optimum load carrying capacity", "High stability", "Innovative technology"],
    specs: [
      { label: "Surface Treatment", value: "Electrostatic Powder Coating" },
      { label: "Shelf Type", value: "Adjustable Multi-Level Shelving" },
      { label: "Dimensions", value: "Custom Sizes and Configurations Available" }
    ]
  },
  "wall-rack": {
    id: "DR-202",
    name: "Wall Rack",
    category: "Display Racks",
    subCategory: "Wall Rack",
    description: "We are the reputed manufacturer and supplier of a premium quality range of Departmental Branding Wall Rack.We offer a range of wall rack designed using advanced technology and best grade material.",
    images: ["/Products/DisplayRacks/WallRacks/Wall-Rack-1.jpg", "/Products/DisplayRacks/WallRacks/Wall-Rack-2.jpg"],
    features: ["Space Saving Design", "High Load Capacity", "Easy Installation", "Enhanced Safety"],
    specs: [
      { label: "Material", value: "Premium Grade Mild Steel (MS)" },
      { label: "Surface Finish", value: "Durable Powder-Coated Finish" }, 
      { label: "Load Capacity", value: "Customizable as per application requirements" },
      { label: "Dimensions", value: "Available in various sizes and custom configurations" }
    ]
  },
  "end-mode-rack": {
    id: "DR-203",
    name: "End Mode Rack",
    category: "Display Racks",
    subCategory: "End Mode Rack",
    description: "Display Rack Consist of two pillar fixed with the wall back sheet, liver and two parts shelves. Available in different size and different load capacity. price in give time frame.",
    images: ["/Products/DisplayRacks/EndModeRack/End-Mode-Rack-1.jpg", "/Products/DisplayRacks/EndModeRack/End-Mode-Rack-2.png"],
    features: ["Attractive Product Display Design", "Adjustable Shelving Options", "Easy Assembly and Installation", "High Stability and Load Strength", "Space-Efficient Layout", "Suitable for Retail & Supermarkets"],
    specs: [
  { label: "Material", value: "Available in Custom Material Options" },
  { label: "Finish", value: "Premium Powder-Coated Finish" },
  { label: "Dimensions", value: "Custom Sizes Available" },
  { label: "Configuration", value: "Tailored to Customer Requirements" }
    ]
  },
   "crockery-rack": {
    id: "DR-204",
    name: "Crockery Rack",
    category: "Display Racks",
    subCategory: "Crockery Rack",
    description: "We are suppliers of the high-quality Crockery Display Racks, with client demand and these are customized as per client. price in give time frame.",
    images: ["/Products/DisplayRacks/CrockeryRacks/Crockery-Rack-1.jpg", "/Products/DisplayRacks/CrockeryRacks/Crockery-Rack-2.jpg", "/Products/DisplayRacks/CrockeryRacks/Crockery-Rack-3.jpg"],
    features: ["Durable and Sturdy Construction",  "High Storage Capacity",  "Corrosion-Resistant Finish",  "Easy to Clean and Maintain",  "Customizable Layout Options",  "Suitable for Residential and Commercial Use"],
    specs: [
  { label: "Material", value: "Available in Custom Material Options" },
  { label: "Finish", value: "Premium Powder-Coated Finish" },
  { label: "Dimensions", value: "Custom Sizes Available" },
  { label: "Configuration", value: "Tailored to Customer Requirements" }
]
  },
  "oil-and-ghee-rack": {
    id: "DR-205",
    name: "Oil and Ghee Rack",
    category: "Display Racks",
    subCategory: "Oil and Ghee Rack",
    description: "Display Rack Consistof two pillar fixed with the wall back sheet, liver and two parts shelves.Available in different size and different load capacity. in order to use heavy weight of items, we use medium duty range racks with four pillars & beams to contain bulk load. very suitable for Oil & Ghee and pet Bottle Cartons.",
    images: ["/Products/DisplayRacks/Oil And Ghee/Oil-1.jpg", "/Products/DisplayRacks/Oil And Ghee/Oil-2.jpg", "/Products/DisplayRacks/Oil And Ghee/Oil-3.jpg"],
    features: ["Heavy-Duty Storage Design",  "High Load-Bearing Capacity",  "Adjustable Shelving System",  "Space-Efficient Layout",  "Durable and Long-Lasting Construction",  "Corrosion-Resistant Finish",  "Easy Assembly and Maintenance",  "Customizable Storage Configuration"],
    specs: [
  { label: "Material", value: "Available in Custom Material Options" },
  { label: "Finish", value: "Premium Powder-Coated Finish" },
  { label: "Dimensions", value: "Custom Sizes Available" },
  { label: "Configuration", value: "Tailored to Customer Requirements" }
]
  },
    "brush-rack": {
    id: "DR-206",
    name: "Brush Rack",
    category: "Display Racks",
    subCategory: "Brush Rack",
    description: "Being quality centric firm, we offer superior Wire Mesh Display Racks products. We try to introduce advance creations with high durability and advance quality. Our designs are created as per customers specific demands and requirements. Our specialist provides best designs for all types of purposes. Our products are economical and always exceed our clients expectations.",
    images: ["/Products/DisplayRacks/Brush/Brush-1.jpg", "/Products/DisplayRacks/Brush/Brush-2.jpg"],
    features: [ "Wall-Mounted or Free-Standing Options",  "Efficient Tool Organization System",  "Lightweight yet Strong Construction",  "Customizable Size and Layout"],
    specs: [
  { label: "Material", value: "Available in Custom Material Options" },
  { label: "Finish", value: "Premium Powder-Coated Finish" },
  { label: "Dimensions", value: "Custom Sizes Available" },
  { label: "Configuration", value: "Tailored to Customer Requirements" }
]
  },
    "vegetable-rack": {
    id: "DR-207",
    name: "Vegetable Rack",
    category: "Display Racks",
    subCategory: "Vegetable Rack",
    description: "With the inclusion of modern equipment and sophisticated machines, we are engaged in offering Vegetable Rack. These vegetable racks are available in numerous customized options as per the market preferences. Offered vegetable racks are designed with most precision from quality proven material & modern techniques keeping in mind the set standard. Also, our customers can avail these vegetable racks from us at affordable price in give time frame.",
    images: ["/Products/DisplayRacks/Vegetable/Vegetable.jpg"],
    features: ["Fresh Produce Display Design", "Strong and Durable Construction", "High Load-Bearing Capacity"],
    specs: [
  { label: "Material", value: "Available in Custom Material Options" },
  { label: "Finish", value: "Premium Powder-Coated Finish" },
  { label: "Dimensions", value: "Custom Sizes Available" },
  { label: "Configuration", value: "Tailored to Customer Requirements" }
]
  },
  "shopping-trolley": {
    id: "DR-208",
    name: "Shopping Trolley",
    category: "Display Racks",
    subCategory: "Shopping Trolley",
    description: "Catering to the diverse demands of our clients, our organization is offering a quality range of Asian Type Shopping Trolley. The given trolleys are widely used in departmental stores, shopping malls, and shops. They can bear heavy loads and are easy to move. Further, we provide these at reasonable rates.",
    images: ["/Products/DisplayRacks/Shopping-Trolley/Shopping-Trolley-1.png", "/Products/DisplayRacks/Shopping-Trolley/Shopping-Trolley-2.jpg", "/Products/DisplayRacks/Shopping-Trolley/Shopping-Trolley-3.jpg"],
    features: ["Corrosion resistance", "Excellent finish", "Robustness", "Ease the shopping experience", "Import from China"],
    specs: [
  { label: "Material", value: "Available in Custom Material Options" },
  { label: "Finish", value: "Premium Powder-Coated Finish" },
  { label: "Dimensions", value: "Custom Sizes Available" },
  { label: "Configuration", value: "Tailored to Customer Requirements" }
]
  },
  "roller-basket": {
    id: "DR-209",
    name: "Roller Basket",
    category: "Display Racks",
    subCategory: "Roller Basket",
    description: "We are an emerging company in offering Roller Shopping Basket to the clients. Offered range is manufactured and made keeping in view the various needs of the clients. Roller Shopping Basket is rigidly tested on various quality parameters to deliver a flawless range in the market.",
    images: ["/Products/DisplayRacks/Shopping-Trolley/Roller-Basket-1.jpg", "/Products/DisplayRacks/Shopping-Trolley/Roller-Basket-2.png"],
    features: ["Maximum space easy handling precise design.", "Import from China."],
    specs: [
  { label: "Material", value: "Available in Custom Material Options" },
  { label: "Finish", value: "Premium Powder-Coated Finish" },
  { label: "Dimensions", value: "Custom Sizes Available" },
  { label: "Configuration", value: "Tailored to Customer Requirements" }
]
  },
  "shopping-basket": {
    id: "DR-210",
    name: "Shopping Basket",
    category: "Display Racks",
    subCategory: "Shopping Basket",
    description: "These baskets are use for small items and best for Runaway Purchasers. Made of wire mesh and hard chrome for high quality look.it is 15 liter size and easily wipeable.",
    images: ["/Products/DisplayRacks/Shopping-Trolley/Shopping-Basket-1.jpg", "/Products/DisplayRacks/Shopping-Trolley/Shopping-Basket-2.jpg"],
    features: [  "Lightweight Design",  "Durable Build",  "Comfort Grip Handle",  "High Load Capacity",  "Ventilated Body",  "Stackable Design",  "Safe Smooth Edges",  "Multiple Sizes Available"],
    specs: [
  { label: "Material", value: "Available in Custom Material Options" },
  { label: "Finish", value: "Premium Powder-Coated Finish" },
  { label: "Dimensions", value: "Custom Sizes Available" },
  { label: "Configuration", value: "Tailored to Customer Requirements" }
]
  },
   "cash-counter": {
    id: "DR-211",
    name: "Cash Counter",
    category: "Display Racks",
    subCategory: "Cash Counter",
    description: "We are engaged in providing our clients a qualitative range of Supermarket Cash Counter.",
    images: ["/Products/DisplayRacks/Counter/Cash-Counter-1.png", "/Products/DisplayRacks/Counter/Cash-Counter-2.jpg", "/Products/DisplayRacks/Counter/Cash-Counter-3.png"],
    features: ["Low maintenance", "Easy to use", "Superb design", "Lightweight", "Fine finish"],
    specs: [
  { label: "Material", value: "Available in Custom Material Options" },
  { label: "Finish", value: "Premium Powder-Coated Finish" },
  { label: "Dimensions", value: "Custom Sizes Available" },
  { label: "Configuration", value: "Tailored to Customer Requirements" }
]
  },
  "storage-rack": {
    id: "DR-212",
    name: "Storage Rack",
    category: "Display Racks",
    subCategory: "Storage Rack",
    description: "We have the privilege to offer our clients a wide array of steel racks, which is appreciated globally owing to its durability, longer functional life and cost-effectiveness. Owing to its sturdy construction, these products are resistant to high impact and rough handling. Our range is widely used in various industries for outbound and inbound flows to store all types of items",
    images: ["/Products/DisplayRacks/Storage/Storage-1.jpg", "/Products/DisplayRacks/Storage/Storage-2.png", "/Products/DisplayRacks/Storage/Storage-3.jpg", "/Products/DisplayRacks/Storage/Storage-4.jpg"],
    features: [  "Heavy-Duty Storage Capacity",  "Strong Steel Construction",  "Adjustable Shelves",  "Space-Saving Design","Rust-Resistant Finish",  "Easy Installation","High Load Bearing", "Custom Size Options"],
    specs: [
  { label: "Material", value: "Available in Custom Material Options" },
  { label: "Finish", value: "Premium Powder-Coated Finish" },
  { label: "Dimensions", value: "Custom Sizes Available" },
  { label: "Configuration", value: "Tailored to Customer Requirements" }
]
  }
};

export type ProductSlug = keyof typeof productsData;

// Helper to get products by sub-category or category
export const getFilteredProducts = (category: string, subCategory?: string) => {
  return Object.entries(productsData)
    .filter(([_, p]) => {
      if (subCategory) return p.subCategory === subCategory;
      return p.category === category;
    })
    .map(([slug, p]) => ({ ...p, slug }));
};











// const allProducts = [
//   { id: 101, catName: "Heavy Duty Racks", title: "Bulk Rack With Mesh Decking", image: "/Home/About.webp" },
//   { id: 102, catName: "Heavy Duty Racks", title: "Bulk Rack With Steel Decking", image: "/Home/About-2.webp" },
//   { id: 103, catName: "Heavy Duty Racks", title: "Double Deep Racking System", image: "/Home/About.webp" },
//   { id: 104, catName: "Heavy Duty Racks", title: "Drive in Drive Thru Racking", image: "/Home/About-2.webp" },
//   { id: 105, catName: "Display Racks", title: "Premium Wall Display", image: "/Home/About.webp" },
//   { id: 106, catName: "Display Racks", title: "Center Gondola Unit", image: "/Home/About-2.webp" },
// ];