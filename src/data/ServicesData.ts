export const servicesData = {
  "pallet-racking": {
    title: "Heavy Duty Pallet Racking",
    subtitle: "Industrial Grade Storage Infrastructure",
    description: "Our heavy-duty pallet racking systems are engineered to provide maximum structural integrity and space efficiency for high-capacity warehouses. Designed for durability and seismic stability.",
    image: "/Services/GridData1.avif",
    features: [
      "Seismic-resistant structural design",
      "High-load capacity (up to 4000kg/level)",
      "Fully adjustable beam levels (50mm pitch)",
      "High-tensile steel construction"
    ],
    specs: [
      { label: "Material", value: "High-Tensile Cold Rolled Steel (Grade Q235B/Q345B)" },
      { label: "Finish", value: "Certified Epoxy Powder Coated / Hot-Dip Galvanized" },
      { label: "Compliance", value: "FEM 10.2.02, SEMA Code, & ISO 9001" },
      { label: "Safety", value: "Safety Pins & Floor Anchors Included" },
    ],
  },
  "mezzanine-floors": {
    title: "Multi-Tier Mezzanine Floors",
    subtitle: "Vertical Space Optimization Systems",
    description: "Transform your facility's vertical space into productive floor area. Our bolt-on mezzanine structures are custom-engineered for offices, storage, or manufacturing zones without the need for major construction.",
    image: "/Services/GridData2.avif",
    features: [
      "Modular bolt-on design for easy expansion",
      "Heavy-duty load bearing (up to 1000kg/m²)",
      "Integrated staircase and safety railing",
      "Custom column grids for ground floor clearance"
    ],
    specs: [
      { label: "Decking Type", value: "Steel Grating / Plywood / Chequered Plate" },
      { label: "Structure", value: "Universal Beam & Cold Rolled Joists" },
      { label: "Safety", value: "AS 1657-2013 Compliant Handrails" },
      { label: "Installation", value: "Non-disruptive Bolt-on Assembly" },
    ],
  },
  "automated-retrieval": {
    title: "Automated Retrieval Systems (AS/RS)",
    subtitle: "Smart AI-Driven Warehousing",
    description: "The pinnacle of warehouse automation. Our AS/RS solutions integrate high-speed cranes and AI logistics software to provide 100% inventory accuracy and massive throughput speeds.",
    image: "/Services/GridData3.avif",
    features: [
      "AI-driven Warehouse Management System (WMS)",
      "High-speed pallet/tote retrieval",
      "24/7 autonomous operation capability",
      "Drastic reduction in forklift dependency"
    ],
    specs: [
      { label: "Control Tech", value: "Siemens/Mitsubishi PLC Integration" },
      { label: "Height Limit", value: "Up to 40 Meters High-Bay Storage" },
      { label: "Speed", value: "Travel Speed up to 240m/min" },
      { label: "Accuracy", value: "99.9% Inventory Precision" },
    ],
  },
  "cantilever-racking": {
    title: "Cantilever Racking",
    subtitle: "Specialized Long-Load Storage",
    description: "Engineered specifically for storing long, heavy, or bulky items such as timber, steel pipes, and PVC tubes. With no front uprights, it provides unobstructed access for loaders.",
    image: "/Services/GridData4.avif",
    features: [
      "Unobstructed horizontal storage access",
      "Adjustable arm heights for varied loads",
      "Available in single and double-sided layouts",
      "Heavy-duty uprights with massive load capacity"
    ],
    specs: [
      { label: "Arm Length", value: "Range from 600mm to 2500mm" },
      { label: "Type", value: "I-Beam Structural / Roll Formed" },
      { label: "Ideal For", value: "Timber, Steel Pipes, & Furniture" },
      { label: "Stability", value: "X-Bracing Systems for Rigidity" },
    ],
  },
  "shuttle-racking": {
    title: "Drive-In / Shuttle Racking",
    subtitle: "Ultra High-Density Storage",
    description: "The Radio Shuttle system is a semi-automated high-density storage solution that uses a remote-controlled platform to move pallets within the racking tunnels, maximizing lane depth.",
    image: "/Services/GridData5.avif", 
    features: [
      "LIFO (Last-in, First-out) & FIFO capability",
      "Remote controlled pallet positioning",
      "Significant reduction in truck travel time",
      "Maximum pallet density per square meter"
    ],
    specs: [
      { label: "Shuttle Battery", value: "Lithium-Ion (8-10 Hours Operation)" },
      { label: "Max Load", value: "1500kg per Pallet" },
      { label: "Operating Temp", value: "Standard to Cold Storage (-30°C)" },
      { label: "Control", value: "Remote Control / Tablet Integration" },
    ],
  },
  "safety-barriers": {
    title: "Industrial Safety Barriers",
    subtitle: "Asset & Personnel Protection",
    description: "Protect your most valuable assets. Our impact-tested safety barriers are designed to absorb forklift collisions, safeguarding structural columns, machinery, and pedestrian walkways.",
    image: "/Services/GridData6.avif",
    features: [
      "High-impact energy absorption",
      "Modular design for flexible layout",
      "High-visibility safety yellow/red finish",
      "Pedestrian and traffic segregation"
    ],
    specs: [
      { label: "Material", value: "Polymer Flexible / Heavy Duty Steel" },
      { label: "Impact Rating", value: "Tested up to 20,000 Joules" },
      { label: "Anchoring", value: "Hilti Mechanical / Chemical Anchors" },
      { label: "Standard", value: "PAS 13 Safety Compliant" },
    ],
  },
  "electrical-engineering": {
    title: "Electrical Engineering",
    subtitle: "Industrial Automation & Power Systems",
    description: "Specialized electrical solutions for manufacturing units, focusing on power distribution, control panels, and automated system integration. We ensure your facility meets modern energy efficiency standards.",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070",
    features: [
      "Custom PLC & Control Panel design",
      "Facility power load optimization",
      "Energy-efficient LED lighting systems",
      "Preventive maintenance and thermal imaging"
    ],
    specs: [
      { label: "Compliance", value: "IEEE / IEC International Standards" },
      { label: "Protection", value: "IP65 / NEMA Rated Enclosures" },
      { label: "System Types", value: "HV/LV Distribution & SCADA" },
      { label: "Service", value: "Design, Install, & Commissioning" },
    ],
  }
};

export type ServiceSlug = keyof typeof servicesData;