// Jeep Repair & Maintenance Content Database
const JeepData = {
  services: [
    {
      id: "engine-repair",
      name: "Jeep Engine Repair",
      category: "Mechanical",
      icon: "fa-solid fa-car-battery",
      bannerIcon: "fa-solid fa-engine", // Custom SVG or backup fontawesome
      costEstimate: 1500,
      description: "Restoring the heart of your Jeep with expert diagnostic and mechanical precision. From the legendary 4.0L inline-six to modern Pentastar V6s, Hemi V8s, and EcoDiesel powerplants, our certified specialists perform complete rebuilds, head gasket replacements, and valve train adjustments using OEM components.",
      problems: [
        "Unusual knocking, ticking, or grinding sounds from the engine block.",
        "Loss of compression, power under load, or poor acceleration.",
        "Engine overheating, white or blue smoke from the tailpipe.",
        "Oil leaks around the valve cover, oil pan, or rear main seal."
      ],
      benefits: [
        "Restores factory horsepower, torque, and compression specs.",
        "Improves fuel economy and ensures emissions compliance.",
        "Prevents catastrophic engine failure and costly block replacements.",
        "Backed by our industry-leading 24-Month/24,000-Mile Warranty."
      ],
      process: [
        "Comprehensive diagnostic scans and borescope cylinder inspections.",
        "Precision teardown and inspection of internal components.",
        "Replacement of defective parts with high-grade OEM or performance upgrades.",
        "Reassembly according to strict factory torque specifications.",
        "Multi-point dyno testing and road calibration to verify performance."
      ],
      faqs: [
        { q: "How do I know if my Pentastar V6 has the common 'ticking' issue?", a: "A distinct ticking noise from the upper engine area, especially during cold starts, often indicates rocker arm or lifter wear. It requires prompt attention to prevent camshaft damage." },
        { q: "Do you use OEM Jeep parts for engine repairs?", a: "Yes, we prioritize genuine Mopar parts to ensure compatibility, longevity, and to protect your Jeep's factory warranty." }
      ]
    },
    {
      id: "transmission-repair",
      name: "Jeep Transmission Repair",
      category: "Transmission",
      icon: "fa-solid fa-gears",
      costEstimate: 2200,
      description: "Complete transmission diagnostics, rebuilds, and repairs for manual, automatic, and dual-clutch Jeep setups. We specialize in heavy-duty upgrades for off-road environments, solving slipping clutches, harsh shifts, and gear command errors in standard and modified Jeeps.",
      problems: [
        "Transmission slipping out of gear or delayed engagement.",
        "Grinding or shaking noises during gear shifts.",
        "Burning smell or dark, discolored transmission fluid.",
        "Active transmission warning lights on the dashboard."
      ],
      benefits: [
        "Smooth, seamless shifting and optimized power transfer.",
        "Extended lifespan of the transmission under heavy tow or trail loads.",
        "Reduces heat buildup—the number one killer of automatic transmissions.",
        "Peace of mind with warranties covering both parts and labor."
      ],
      process: [
        "Electronic scanning of the Transmission Control Module (TCM).",
        "Fluid level, condition analysis, and leak inspection.",
        "Complete overhaul/rebuild of internal clutches, bands, and valves.",
        "Torque converter testing and heavy-duty solenoid replacements.",
        "Final pressure testing and adaptive learning reset."
      ],
      faqs: [
        { q: "How often should I service my Jeep's transmission?", a: "We recommend a fluid flush and filter replacement every 30,000 to 50,000 miles, especially if you tow or engage in heavy off-roading." },
        { q: "What causes transmission slipping?", a: "Slipping is typically caused by worn clutch plates, low transmission fluid, or a failing solenoid pack." }
      ]
    },
    {
      id: "suspension-repair",
      name: "Jeep Suspension Repair",
      category: "Suspension",
      icon: "fa-solid fa-arrows-up-down",
      costEstimate: 800,
      description: "Restoring the trail-ready comfort and off-road stability of your Jeep's suspension system. We diagnose and service control arms, track bars, coil springs, and lift kits, correcting issues like sag, excessive sway, and unstable steering geometries.",
      problems: [
        "Severe body roll or dipping during cornering and braking.",
        "Uneven ride height, sagging corners, or bottoming out over bumps.",
        "Clunking or squeaking noises when driving over obstacles.",
        "The dreaded 'Death Wobble' (severe front-end shaking)."
      ],
      benefits: [
        "Restores original ride height, ground clearance, and handling characteristics.",
        "Corrects steering wander and ensures predictable vehicle dynamics.",
        "Reduces wear and tear on tires and related drivetrain parts.",
        "Prepares your Jeep to handle technical off-road trails with ease."
      ],
      process: [
        "Comprehensive visual inspection of links, bushings, and springs.",
        "Torque-checking all suspension hardware to factory specs.",
        "Replacing worn control arm bushings, ball joints, and track bars.",
        "Upgrading or replacing sagging coil springs or leaf springs.",
        "Post-install suspension articulation check and test drive."
      ],
      faqs: [
        { q: "Can a bad suspension cause the 'Death Wobble'?", a: "Yes. Worn track bar bushings, loose control arms, or failing ball joints are primary triggers for front-end oscillation." },
        { q: "How do I know if my shock absorbers are shot?", a: "If your Jeep continues to bounce multiple times after hitting a bump, or if you see fluid leaking down the shock body, they need replacement." }
      ]
    },
    {
      id: "brake-repair",
      name: "Jeep Brake Repair",
      category: "Mechanical",
      icon: "fa-solid fa-circle-stop",
      costEstimate: 350,
      description: "High-performance and heavy-duty brake servicing tailored to handle heavy Jeep builds, larger tires, and steep off-road descents. We replace pads, rotors, calipers, master cylinders, and bleed brake lines to ensure absolute stopping power.",
      problems: [
        "Squealing, squeaking, or harsh grinding noises under braking.",
        "Spongy or soft brake pedal response that sinks to the floor.",
        "Vehicle pulling to one side when applying the brakes.",
        "Pulsation or vibration felt through the brake pedal."
      ],
      benefits: [
        "Maximum stopping power and reduced braking distances.",
        "Increased thermal capacity to handle heavy off-road tires.",
        "Restores reliable ABS and Hill Descent Control functionality.",
        "Quiet, vibration-free operation in all driving conditions."
      ],
      process: [
        "Precision measurement of brake pad thickness and rotor wear.",
        "Inspection of brake lines, hoses, and caliper pistons for leaks.",
        "Replacement of pads with ceramic or heavy-duty semi-metallic materials.",
        "Resurfacing or replacing brake rotors with matching units.",
        "Complete system flush, bleeding, and brake pedal travel calibration."
      ],
      faqs: [
        { q: "Why do my brakes squeal after going off-road?", a: "Squealing is often caused by dirt, sand, or small pebbles trapped between the brake pad and the rotor. A thorough wash usually resolves this." },
        { q: "Should I upgrade my brakes for larger tires?", a: "Yes, if you run 35-inch or larger tires, upgrading to a Big Brake Kit is highly recommended to compensate for the added rotating mass." }
      ]
    },
    {
      id: "ac-repair",
      name: "Jeep AC Repair",
      category: "Electrical",
      icon: "fa-solid fa-snowflake",
      costEstimate: 400,
      description: "Keeping your cabin cool and comfortable regardless of trail temperatures. We provide leak detection, compressor replacements, evaporator servicing, and precise refrigerant recharging for all Jeep models.",
      problems: [
        "AC blowing warm, humid, or weakly circulated air.",
        "Foul, musty odors coming from the ventilation vents.",
        "Loud rattling or squealing when the AC compressor engages.",
        "Refrigerant leaks detected by visible stains under the vehicle."
      ],
      benefits: [
        "Restores freezing-cold AC performance for hot summer trail rides.",
        "Proper dehumidification keeps windshields clear and fog-free.",
        "Replaces failing compressors before they contaminate the entire loop.",
        "Ensures optimal fuel economy by maintaining system efficiency."
      ],
      process: [
        "AC system pressure checks and vent temperature baseline tests.",
        "UV dye injection and electronic sniffing to pinpoint refrigerant leaks.",
        "Evacuation of old refrigerant using specialized recovery equipment.",
        "Replacing failed components (compressor, condenser, expansion valve).",
        "Vacuum testing and recharging system to strict manufacturer capacity."
      ],
      faqs: [
        { q: "Why does my Jeep AC smell musty?", a: "Musty smells are caused by mold or bacterial growth on the AC evaporator coil, often due to condensation buildup. A cabin filter replacement and system disinfection fixes this." },
        { q: "What refrigerant does my Jeep use?", a: "Older models use R-134a, while newer models (typically post-2015) use the eco-friendly R-1234yf refrigerant." }
      ]
    },
    {
      id: "electrical-repair",
      name: "Jeep Electrical Repair",
      category: "Electrical",
      icon: "fa-solid fa-bolt",
      costEstimate: 300,
      description: "Diagnosing and repairing complex Jeep wiring, modules, and electrical systems. We fix TIPM (Totally Integrated Power Module) glitches, dashboard errors, auxiliary lighting malfunctions, and battery draw issues.",
      problems: [
        "Intermittent dashboard warning lights, flickering displays, or blank screens.",
        "Power windows, locks, or seats functioning erratically or not at all.",
        "Battery repeatedly draining overnight (parasitic draw).",
        "Wipers turning on by themselves or horns blowing unexpectedly (common TIPM issues)."
      ],
      benefits: [
        "Resolves erratic behaviors and restores factory safety systems.",
        "Eliminates mysterious battery drains that leave you stranded.",
        "Ensures auxiliary lights, winches, and lockers operate reliably.",
        "Guarantees clean CAN-bus communication between vehicle computers."
      ],
      process: [
        "Advanced diagnostic scanning of BCM, ECU, and TIPM codes.",
        "Parasitic draw testing utilizing dedicated digital multimeters.",
        "Pinpoint tracing of wiring diagrams and connector pins.",
        "Repairing or replacing corroded connectors, frayed wiring, or ground points.",
        "Re-flashing modules and programming replacement electrical units."
      ],
      faqs: [
        { q: "What is a Jeep TIPM, and why does it fail?", a: "The Totally Integrated Power Module (TIPM) is the main distribution center. It can fail due to internal relay wear, causing fuel pumps, wipers, or lights to act erratically." },
        { q: "Can adding off-road lights void my Jeep's electrical warranty?", a: "Only if the wiring is done improperly and causes damage. We install all auxiliary accessories using proper relays, fuses, and switch panels to keep your warranty intact." }
      ]
    },
    {
      id: "diagnostic-service",
      name: "Jeep Diagnostic Service",
      category: "Diagnostics",
      icon: "fa-solid fa-computer",
      costEstimate: 120,
      description: "State-of-the-art diagnostic troubleshooting using official OEM software. We scan all onboard computers, interpret active codes, and isolate electrical or mechanical root causes to eliminate guesswork.",
      problems: [
        "Check Engine Light (MIL) is active or flashing.",
        "Intermittent performance drop, stalling, or hard starting.",
        "Warning indicators for ABS, traction control, or airbags.",
        "Unexplained sounds or smells that occur only under specific speeds."
      ],
      benefits: [
        "Pinpoints the exact source of a problem, saving time and money.",
        "Identifies hidden issues before they escalate into major repairs.",
        "Provides a clear, itemized report of your Jeep's computer health.",
        "Ensures all modules are running the latest factory software versions."
      ],
      process: [
        "Placing the vehicle on an active OBD-II diagnostic connection.",
        "Extracting trouble codes (P, B, C, and U codes) from all ECUs.",
        "Analyzing real-time live data parameters during simulated engine loads.",
        "Conducting physical verification tests on suspects (e.g. pressure tests).",
        "Providing a detailed diagnosis report with recommended solutions."
      ],
      faqs: [
        { q: "Can I just use a cheap scanner from an auto parts store?", a: "Basic scanners only read standard generic codes. Our professional diagnostics read manufacturer-specific sub-codes, live sensor data stream, and bidirectional control states." },
        { q: "How long does a diagnostics service take?", a: "Most diagnostic scans and physical inspections are completed within 1 to 2 hours." }
      ]
    },
    {
      id: "oil-change",
      name: "Jeep Oil Change",
      category: "Preventive",
      icon: "fa-solid fa-oil-can",
      costEstimate: 80,
      description: "Premium lubrication service utilizing high-quality synthetic oils and OEM Mopar filters. We maintain internal engine cleanliness, prevent thermal breakdown, and conduct a complimentary multi-point check with every oil change.",
      problems: [
        "Engine oil is dark, grimy, or contains metal particles.",
        "Oil level is consistently dropping between service intervals.",
        "Dashboard maintenance reminder or 'Oil Change Required' message.",
        "Increased engine noise or rough idling."
      ],
      benefits: [
        "Maximizes engine longevity by reducing friction and wear.",
        "Keeps engine components clean by preventing sludge buildup.",
        "Improves fuel economy and reduces exhaust emissions.",
        "Maintains your vehicle's service history for higher resale value."
      ],
      process: [
        "Draining old engine oil while checking for metal shavings or debris.",
        "Removing and inspecting the old oil filter and O-rings.",
        "Installing a premium OEM Mopar oil filter and sealing washer.",
        "Filling the crankcase with manufacturer-recommended synthetic oil.",
        "Resetting the vehicle's oil life monitor system."
      ],
      faqs: [
        { q: "How often does a Jeep require an oil change?", a: "We recommend every 5,000 to 7,500 miles for synthetic oils, or every 6 months, whichever comes first." },
        { q: "Why is synthetic oil preferred for Jeeps?", a: "Synthetic oil provides superior lubrication at extreme temperatures, which is critical for off-road trails and towing." }
      ]
    },
    {
      id: "battery-replacement",
      name: "Jeep Battery Replacement",
      category: "Preventive",
      icon: "fa-solid fa-battery-three-quarters",
      costEstimate: 200,
      description: "Ensuring cold-cranking reliability and support for auxiliary equipment. We supply and install heavy-duty AGM batteries, clean terminals, and test charging systems to ensure your Jeep always starts on the first turn.",
      problems: [
        "Slow engine crank or clicking sound when turning the key.",
        "Corrosion or powdery buildup around battery terminals.",
        "Headlights dimming when the engine is idling.",
        "Battery case is bloated or leaking fluid."
      ],
      benefits: [
        "Guarantees reliable starts in extreme heat and freezing temperatures.",
        "AGM batteries provide superior vibration resistance for off-roading.",
        "Protects sensitive electronics from low-voltage spikes.",
        "Properly matches battery specs to support winches and trail lights."
      ],
      process: [
        "Testing the existing battery's state of charge and cold cranking amps.",
        "Inspecting the alternator output and starter motor draw.",
        "Safely removing the old battery and cleaning terminal connections.",
        "Installing a premium high-reserve AGM battery with secure tie-downs.",
        "Registering the new battery to the vehicle computer (if required)."
      ],
      faqs: [
        { q: "How long does a Jeep battery typically last?", a: "Batteries usually last between 3 to 5 years, though off-road vibration and heavy winch use can shorten this lifespan." },
        { q: "What is an AGM battery, and why is it better?", a: "Absorbed Glass Mat (AGM) batteries are spill-proof, hold charge longer, and handle the high electrical demand of modern Jeeps much better than flooded batteries." }
      ]
    },
    {
      id: "steering-repair",
      name: "Jeep Steering Repair",
      category: "Suspension",
      icon: "fa-solid fa-steering-wheel",
      costEstimate: 500,
      description: "Resolving steering wander, loose gearboxes, worn tie-rods, and power steering pump leaks. We adjust and replace steering gears, drag links, and stabilizers to restore razor-sharp feedback and trail safety.",
      problems: [
        "Excessive play or 'dead zone' in the steering wheel.",
        "Power steering pump whining or squealing when turning.",
        "Jeep pulling heavily to one side or wandering on the highway.",
        "Leaking power steering fluid under the radiator area."
      ],
      benefits: [
        "Restores tight, responsive, and predictable steering control.",
        "Eliminates highway wander, making road trips much less tiring.",
        "Prevents accelerated wear on front tires and ball joints.",
        "Ensures emergency handling maneuvers remain sharp and safe."
      ],
      process: [
        "Inspecting all steering links (tie rods, drag link, pitman arm).",
        "Checking steering gear box play and adjusting sector shaft if needed.",
        "Pressure testing the power steering pump and lines for leaks.",
        "Replacing worn joints, damaged gearboxes, or leaking hoses.",
        "Performing a complete steering system bleed and centering the steering wheel."
      ],
      faqs: [
        { q: "Why is my steering wheel off-center after off-roading?", a: "Hitting obstacles can bend the drag link or knock the front alignment out of spec. It should be corrected immediately to prevent traction control intervention." },
        { q: "Do I need a dual steering stabilizer?", a: "A single good stabilizer is sufficient if steering geometry is correct. Dual stabilizers are popular for styling or dampening feedback on very large tires." }
      ]
    },
    {
      id: "cooling-system-repair",
      name: "Jeep Cooling System Repair",
      category: "Mechanical",
      icon: "fa-solid fa-temperature-arrow-down",
      costEstimate: 450,
      description: "Preventing engine melt-downs by maintaining optimal thermal control. We replace water pumps, thermostats, hoses, and perform complete coolant flushes using specified organic acid technology (OAT) coolant.",
      problems: [
        "Temperature gauge rising into the hot zone or warning alerts.",
        "Sweet, pungent smell of burning coolant coming from the engine bay.",
        "Puddles of orange, pink, or purple fluid under the front bumper.",
        "No heat inside the cabin during winter weather."
      ],
      benefits: [
        "Protects expensive engine components from severe overheating damage.",
        "Maintains consistent engine operating temperatures for efficiency.",
        "Prevents heater core blockage, ensuring warm cabin air.",
        "Extends the life of seals and gaskets throughout the cooling circuit."
      ],
      process: [
        "Pressure testing the cooling system to locate hidden leaks.",
        "Inspecting the radiator core, cooling fan operation, and belt drive.",
        "Replacing worn water pumps, stuck thermostats, or cracked hoses.",
        "Flushing out old, degraded coolant and scale deposits.",
        "Refilling with premium factory-spec coolant and purging trapped air."
      ],
      faqs: [
        { q: "Can I use standard green coolant in my modern Jeep?", a: "No. Modern Jeeps require OAT (Organic Acid Technology) coolant. Mixing types causes gelling, which plugs the heater core and radiator." },
        { q: "Why does my Wrangler overheat at idle?", a: "This is often caused by a failing electric cooling fan, a clogged radiator exterior (mud/debris), or a failing water pump." }
      ]
    },
    {
      id: "fuel-system-repair",
      name: "Jeep Fuel System Repair",
      category: "Mechanical",
      icon: "fa-solid fa-gas-pump",
      costEstimate: 600,
      description: "Restoring clean fuel delivery to your Jeep's engine. We diagnose and service fuel pumps, injectors, filters, and lines, resolving hard starting, engine sputtering, and fuel delivery codes.",
      problems: [
        "Engine cranks but fails to start, or stalls immediately.",
        "Sputtering or misfiring at high speeds or under load.",
        "Smell of raw fuel around the vehicle.",
        "Reduced fuel economy and poor throttle response."
      ],
      benefits: [
        "Restores quick starting, smooth idle, and reliable throttle response.",
        "Prevents lean run conditions that can damage engine valves.",
        "Maximizes fuel efficiency and lowers emissions.",
        "Backed by robust warranties on all replacement fuel pumps and injectors."
      ],
      process: [
        "Measuring fuel pressure at the fuel rail to check pump output.",
        "Conducting fuel injector flow and spray pattern tests.",
        "Inspecting fuel lines, vapor canisters, and tank seals for leaks.",
        "Replacing failed fuel pumps, clogged fuel filters, or dirty injectors.",
        "Clearing fuel-system-related ECU codes and test driving."
      ],
      faqs: [
        { q: "How do I know if my fuel injectors are dirty?", a: "Common signs include a rough idle, engine misfires, a decrease in gas mileage, and throttle hesitation." },
        { q: "Does the fuel pump require dropping the fuel tank?", a: "Yes, on most Jeep models, the fuel tank must be safely drained and lowered to access the fuel pump module." }
      ]
    },
    {
      id: "exhaust-repair",
      name: "Jeep Exhaust Repair",
      category: "Mechanical",
      icon: "fa-solid fa-wind",
      costEstimate: 500,
      description: "Fixing exhaust leaks, replacing damaged catalytic converters, and installing high-clearance off-road exhaust kits. We ensure your Jeep sounds great and breathes efficiently while meeting emissions standards.",
      problems: [
        "Loud rumbling or roaring noises from underneath the vehicle.",
        "Exhaust smell inside the cabin (dangerous carbon monoxide risk).",
        "Check Engine Light indicating catalytic converter inefficiency.",
        "Tailpipe or muffler hanging loose or dragging on the road."
      ],
      benefits: [
        "Ensures a quiet ride and eliminates dangerous exhaust cabin leaks.",
        "Restores engine exhaust backpressure for optimal torque.",
        "Upgraded high-clearance kits prevent trail damage on rocks.",
        "Ensures compliance with state emissions and safety inspections."
      ],
      process: [
        "Visual and smoke-testing the exhaust system from manifold to tailpipe.",
        "Checking catalytic converter temperature differentials and oxygen sensors.",
        "Welding rusted joints or replacing sections of piping.",
        "Installing new hangers, mufflers, resonators, or catalytic converters.",
        "Verifying structural clearance from driveshafts and suspension parts."
      ],
      faqs: [
        { q: "Why did my check engine light come on for the exhaust?", a: "It is usually triggered by oxygen sensor failures or a catalytic converter that is no longer cleaning exhaust gases effectively." },
        { q: "What is a high-clearance exhaust kit?", a: "It is an aftermarket exhaust designed to tuck closer to the frame, preventing the muffler from getting caught on trail obstacles." }
      ]
    },
    {
      id: "radiator-repair",
      name: "Jeep Radiator Repair",
      category: "Mechanical",
      icon: "fa-solid fa-cubes",
      costEstimate: 550,
      description: "Replacing leaking, cracked, or clogged radiators to keep your Jeep running cool. We swap out plastic-tank factory radiators with heavy-duty aluminum units engineered to handle off-road demands.",
      problems: [
        "Visible coolant leaks around the plastic side tanks of the radiator.",
        "Radiator fins clogged with dried mud, leaves, or trail debris.",
        "Engine temperature skyrocketing when driving uphill or off-road.",
        "Sweet smell of boiling antifreeze from the front grille."
      ],
      benefits: [
        "Restores maximum heat dissipation capacity for heavy engine loads.",
        "Upgraded all-aluminum radiators resist cracking under trail vibration.",
        "Prevents engine damage caused by sudden radiator seam failure.",
        "Includes a fresh coolant fill and pressure-testing warranty."
      ],
      process: [
        "Conducting a cooling system pressure test to isolate the leak location.",
        "Removing the cooling fan shroud and disconnecting transmission lines.",
        "Removing the damaged radiator and cleaning the front condenser space.",
        "Installing a premium replacement radiator and secure mount bushings.",
        "Refilling, bleeding, and verifying proper cooling fan engagement."
      ],
      faqs: [
        { q: "Why do Jeep radiators leak at the seams?", a: "Most OEM radiators use plastic end tanks crimped to an aluminum core. Over time, thermal expansion causes these crimps to loosen and leak." },
        { q: "Should I wash mud out of my radiator?", a: "Yes. Caked mud blocks airflow through the fins, leading to overheating. Spray it gently from the back to avoid bending the delicate aluminum fins." }
      ]
    },
    {
      id: "gearbox-repair",
      name: "Jeep Gearbox Repair",
      category: "Transmission",
      icon: "fa-solid fa-square-plus",
      costEstimate: 1400,
      description: "Servicing and rebuilding manual gearboxes and steering gearboxes. We fix hard shifting, popping out of gear, oil leaks, and steering play, ensuring reliable mechanical action on every trail.",
      problems: [
        "Manual shifter popping out of gear, especially first or reverse.",
        "Severe grinding or difficulty selecting gears when clutch is depressed.",
        "A loud whining or growling sound when the vehicle is in motion.",
        "Severe steering wander caused by loose internal steering gearbox gears."
      ],
      benefits: [
        "Restores crisp mechanical shifting confidence on steep hills.",
        "Eliminates gear grinding and protects internal gear synchronizers.",
        "Restores precise steering input and centers the front wheels.",
        "Sealed units prevent gear oil leakage onto trail terrain."
      ],
      process: [
        "Draining gear oil to inspect for metallic sludge and synchro debris.",
        "Disassembling the gearbox casing to inspect gear teeth and bearings.",
        "Replacing worn synchronizers, bearings, shafts, and oil seals.",
        "Reassembling and checking internal end-play and gear lash specs.",
        "Refilling with high-grade synthetic gear oil and testing under load."
      ],
      faqs: [
        { q: "Why does my manual transmission pop out of gear?", a: "This is typically caused by worn gear synchronizers, a damaged shift fork, or worn shift detent springs." },
        { q: "Can you adjust a steering gearbox to fix loose steering?", a: "Yes, the sector shaft screw can be adjusted slightly, but over-tightening will cause binding. If the internal gears are worn, rebuild or replacement is needed." }
      ]
    },
    {
      id: "wheel-alignment",
      name: "Jeep Wheel Alignment",
      category: "Suspension",
      icon: "fa-solid fa-compass",
      costEstimate: 130,
      description: "Laser-accurate alignment optimized for standard and lifted Jeeps. We adjust caster, toe, and camber to eliminate pulling, steering wheel off-center, and uneven tire wear caused by modified suspensions.",
      problems: [
        "Jeep pulls constantly to the left or right on a flat road.",
        "The steering wheel is crooked when driving straight.",
        "Rapid, uneven wear on tire treads (feathering or cupping).",
        "Tires squealing during moderate speed turns."
      ],
      benefits: [
        "Maximizes the lifespan of expensive off-road and all-terrain tires.",
        "Improves directional stability and reduces highway steering effort.",
        "Optimizes fuel efficiency by reducing tire rolling resistance.",
        "Ensures proper function of stability control and ABS sensors."
      ],
      process: [
        "Mounting digital laser alignment targets to all four wheels.",
        "Measuring toe, camber, and caster angles using specialized equipment.",
        "Adjusting adjustable control arms and drag links (common in lifted Jeeps).",
        "Centering the steering wheel and resetting electronic steering sensors.",
        "Providing a detailed printout of before-and-after alignment metrics."
      ],
      faqs: [
        { q: "Do lifted Jeeps require special alignment specs?", a: "Yes. Lifted Jeeps require careful caster adjustment (typically using adjustable control arms) to prevent steering wander and the 'Death Wobble'." },
        { q: "How often should I align my Jeep?", a: "We recommend an alignment once a year, or immediately after a hard off-road trail run where suspension components hit rocks." }
      ]
    },
    {
      id: "tire-replacement",
      name: "Jeep Tire Replacement",
      category: "Preventive",
      icon: "fa-solid fa-truck-monster",
      costEstimate: 250,
      description: "Sourcing, mounting, and balancing premium All-Terrain (A/T) and Mud-Terrain (M/T) tires. We recommend and fit the perfect tread pattern for your driving style, ensuring traction on mud, rocks, sand, and asphalt.",
      problems: [
        "Tire tread worn down past safety wear bars (less than 4/32 inch).",
        "Cracks, cuts, or bulging bubbles in the tire sidewall.",
        "Repeated air loss due to trail punctures or bead damage.",
        "Excessive road noise and vibrations from uneven tread wear."
      ],
      benefits: [
        "Unbeatable traction in muddy, rocky, or snowy trail conditions.",
        "Stronger multi-ply sidewalls resist cuts from sharp rocks.",
        "Smoother, quieter highway cruising with dynamic wheel balancing.",
        "Proper tire size calibration ensures correct speedometer readings."
      ],
      process: [
        "Inspecting tire wear patterns and determining replacement needs.",
        "Carefully dismounting old tires to protect custom wheels.",
        "Installing new heavy-duty valve stems or servicing TPMS sensors.",
        "Mounting new tires and performing computer-balanced weight matching.",
        "Inflating to recommended trail or highway pressure specs."
      ],
      faqs: [
        { q: "What is the difference between A/T and M/T tires?", a: "All-Terrain (A/T) tires offer a balance of road comfort and off-road grip. Mud-Terrain (M/T) tires feature aggressive open treads for deep mud and rocks but are noisier on highways." },
        { q: "Should I reprogram my speedo for larger tires?", a: "Yes. Larger tires rotate slower, which makes your speedometer read slower. We can reprogram your Jeep's ECU to correct the speedometer and shift points." }
      ]
    },
    {
      id: "shock-absorber-repair",
      name: "Jeep Shock Absorber Repair",
      category: "Suspension",
      icon: "fa-solid fa-arrows-up-to-line",
      costEstimate: 400,
      description: "Replacing worn-out shocks and struts with premium mono-tube, reservoir, or adjustable units. We restore stability and ride comfort, ensuring your suspension can absorb heavy trail impacts without bottoming out.",
      problems: [
        "Jeep bounces excessively after hitting bumps or dips.",
        "Visible oil leaking down the outside of the shock body.",
        "Nose-diving under braking or squatting during acceleration.",
        "Cupped tire wear patterns due to lack of constant road contact."
      ],
      benefits: [
        "Drastically improves off-road control and high-speed stability.",
        "Provides a plush, comfortable ride on rough trail terrain.",
        "Prevents bottoming out, protecting your Jeep's frame and axles.",
        "Maximizes tire contact with the ground for superior traction."
      ],
      process: [
        "Inspecting shock absorbers and struts for structural damage or leaks.",
        "Checking shock mount bushings and brackets for play or wear.",
        "Removing old shocks and transferring coils/hardware if needed.",
        "Installing premium gas-charged or remote-reservoir shock absorbers.",
        "Torque-checking all mounting bolts while the vehicle is at ride height."
      ],
      faqs: [
        { q: "What are remote reservoir shocks?", a: "These shocks store extra oil and gas in an external cylinder, allowing for better cooling. They are ideal for high-speed desert running or long trail days." },
        { q: "How long do Jeep shock absorbers last?", a: "Typical shocks last 50,000 miles, but frequent off-road use, mud, and dust can wear out seals much sooner." }
      ]
    },
    {
      id: "differential-repair",
      name: "Jeep Differential Repair",
      category: "Transmission",
      icon: "fa-solid fa-circle-nodes",
      costEstimate: 900,
      description: "Servicing and rebuilding front and rear differentials (Dana 30, 44, 60). We solve gear howling, repair worn bearings, install lockers, and perform gear ratio changes (re-gearing) to support larger tires.",
      problems: [
        "A loud howling, whining, or whirring sound that changes with speed.",
        "Clunking noise when putting the vehicle in gear or during acceleration.",
        "Differential fluid leaking around the cover plate or pinion seal.",
        "Metal fragments found during a differential fluid change."
      ],
      benefits: [
        "Quiet, vibration-free operation of the front and rear axles.",
        "Re-gearing restores lost power and fuel mileage with larger tires.",
        "Upgraded diff covers protect internal gears from trail rocks.",
        "Ensures smooth turning performance without binding."
      ],
      process: [
        "Draining fluid and inspecting the magnetic drain plug for metal shards.",
        "Measuring backlash, gear runout, and checking teeth wear patterns.",
        "Replacing worn carrier bearings, pinion bearings, and ring/pinion gears.",
        "Installing heavy-duty seals, lockers, or upgraded differential covers.",
        "Refilling with premium synthetic gear oil and required friction modifiers."
      ],
      faqs: [
        { q: "What is re-gearing, and do I need it?", a: "Re-gearing changes the ring and pinion gear ratio. If you install larger tires (e.g. 35s or 37s), re-gearing is essential to restore lost engine power and correct shift points." },
        { q: "Why is my differential howling?", a: "A howling noise is typically caused by worn pinion or carrier bearings, or improper gear mesh between the ring and pinion gears." }
      ]
    },
    {
      id: "4x4-system-repair",
      name: "Jeep 4x4 System Repair",
      category: "Transmission",
      icon: "fa-solid fa-mountain",
      costEstimate: 1100,
      description: "Diagnosing and repairing transfer cases, front axle disconnects, and electronic lockers. We make sure your 4WD system engages smoothly and handles tough terrain without getting stuck in 2WD.",
      problems: [
        "4WD lever is hard to shift, slips out of gear, or doesn't engage.",
        "4WD dashboard indicator light flashing or showing service errors.",
        "Grinding noises when shifting transfer case ranges.",
        "Front wheels not pulling even when 4WD is engaged (CAD failure)."
      ],
      benefits: [
        "Guarantees maximum traction when trail conditions get tough.",
        "Resolves electronic shifting faults and locker engagement errors.",
        "Ensures high-range and low-range gears function reliably.",
        "Includes a full service of transfer case fluids and links."
      ],
      process: [
        "Electronic testing of transfer case shift motors and sensor signals.",
        "Inspecting manual shifter linkage, cables, and bushings.",
        "Checking front axle actuator (CAD) vacuum or electrical signals.",
        "Rebuilding or replacing worn transfer case chain and planetary gears.",
        "Verifying locking differential operations and locker sensors."
      ],
      faqs: [
        { q: "Why won't my Jeep engage 4WD?", a: "This is often caused by a broken plastic linkage bushing, a failed vacuum actuator (on older Jeeps), or a bad shift motor/switch." },
        { q: "Can I drive on dry pavement in 4WD?", a: "Only if your Jeep has a Full-Time 4WD mode. Standard Part-Time 4WD locks front and rear axles together, causing drivetrain binding on high-traction pavement." }
      ]
    },
    {
      id: "clutch-repair",
      name: "Jeep Clutch Repair",
      category: "Transmission",
      icon: "fa-solid fa-circle-notch",
      costEstimate: 950,
      description: "Complete clutch kit and flywheel replacements for manual Wranglers and Cherokees. We replace slipping clutches, worn throw-out bearings, and leaking master/slave cylinders to restore clutch pedal feel.",
      problems: [
        "Clutch slips (engine revs increase without vehicle speed increasing).",
        "Clutch pedal feels soft, spongy, or stays stuck to the floor.",
        "Difficulty shifting gears accompanied by a grinding noise.",
        "A squealing or rattling noise that disappears when depressing the clutch."
      ],
      benefits: [
        "Restores crisp, immediate torque transfer to the wheels.",
        "Smooth clutch take-off without chatter or pedal vibration.",
        "Replaces failure-prone throw-out bearings with heavy-duty components.",
        "New hydraulic cylinders prevent sudden pedal loss on trails."
      ],
      process: [
        "Removing driveshafts, transfer case, and transmission to access clutch.",
        "Inspecting flywheels for cracks, hotspots, or scoring.",
        "Replacing the clutch disc, pressure plate, and throw-out bearing.",
        "Resurfacing or replacing the flywheel and replacing pilot bearing.",
        "Reassembling and bleeding the hydraulic clutch master/slave cylinder."
      ],
      faqs: [
        { q: "Why does my clutch squeal when I press the pedal?", a: "A squeal when pressing the clutch pedal usually indicates a failing throw-out bearing (clutch release bearing)." },
        { q: "How long should a Jeep clutch last?", a: "A typical clutch lasts 80,000 miles, but frequent off-roading, riding the clutch, or towing heavy loads can wear it out much faster." }
      ]
    },
    {
      id: "starter-motor-repair",
      name: "Jeep Starter Motor Repair",
      category: "Electrical",
      icon: "fa-solid fa-plug",
      costEstimate: 280,
      description: "Replacing failing starter motors and solenoids. We ensure high-torque cranking power to turn over your engine instantly, even after mud and water crossings on the trail.",
      problems: [
        "A single loud click or rapid clicking sound when trying to start.",
        "Engine fails to crank even when battery tests good.",
        "Starter motor continues to run or whines after engine starts.",
        "Smoke or burning smell from the starter assembly area."
      ],
      benefits: [
        "Instant, reliable starting on demand, preventing trail lockouts.",
        "Heavy-duty starter solenoids resist water and mud intrusion.",
        "Optimizes battery current draw for cleaner cold starts.",
        "Backed by our direct parts-and-labor replacement warranty."
      ],
      process: [
        "Testing battery charge and clean cables to ensure proper voltage supply.",
        "Performing starter current draw test using professional equipment.",
        "Removing skid plates and disconnecting electrical connections.",
        "Installing a premium replacement starter motor and mounting bolts.",
        "Verifying smooth starter drive engagement and flywheel teeth mesh."
      ],
      faqs: [
        { q: "Why does my starter only click once?", a: "A single click usually indicates a failing starter solenoid or a weak battery that cannot supply enough current under load." },
        { q: "Can water crossings damage my starter?", a: "Yes. Mud and water can penetrate the starter housing, causing corrosion on the internal contacts and brushes." }
      ]
    },
    {
      id: "alternator-repair",
      name: "Jeep Alternator Repair",
      category: "Electrical",
      icon: "fa-solid fa-arrows-spin",
      costEstimate: 350,
      description: "Replacing alternators to keep your battery charged and electrical system healthy. We diagnose charging issues and install heavy-duty, high-output alternators to handle winch and auxiliary power loads.",
      problems: [
        "Dashboard battery warning light illuminated while driving.",
        "Headlights, dashboard, or tail lights dimming or flickering.",
        "A whining or growling noise from the front of the engine.",
        "Battery goes dead while driving, stalling the engine."
      ],
      benefits: [
        "Maintains steady system voltage under high electrical loads.",
        "Ensures battery is fully recharged between trail winch pulls.",
        "Replaces noisy bearings before the alternator pulley locks up.",
        "Protects vehicle ECUs from damaging low-voltage conditions."
      ],
      process: [
        "Testing alternator voltage output and AC ripple current under load.",
        "Inspecting drive belt tension, pulley alignment, and connections.",
        "Removing brackets and installing a premium replacement alternator.",
        "Replacing worn serpentine belts and tensioners if needed.",
        "Testing charging circuit output and verifying dashboard light goes out."
      ],
      faqs: [
        { q: "Do I need a high-output alternator?", a: "If you run multiple high-draw accessories like winches, premium sound systems, or several off-road LED lights, upgrading to a high-output alternator is recommended." },
        { q: "Why is my alternator whining?", a: "A whining noise is usually caused by worn internal bearings, or an electrical overload due to a shorted battery." }
      ]
    },
    {
      id: "spark-plug-replacement",
      name: "Jeep Spark Plug Replacement",
      category: "Preventive",
      icon: "fa-solid fa-fire-flame-curved",
      costEstimate: 150,
      description: "Replacing worn spark plugs and ignition coils to resolve misfires, improve fuel economy, and restore engine power. We utilize exact heat-range spark plugs matching Mopar specifications.",
      problems: [
        "Engine misfire codes (e.g. P0300, P0301) and flashing check engine light.",
        "Rough idling, engine shaking, or hesitation on acceleration.",
        "Difficult cold starts and poor throttle response.",
        "Noticeable drop in fuel economy."
      ],
      benefits: [
        "Restores smooth engine idle and snappy throttle response.",
        "Eliminates engine misfires, protecting the catalytic converter.",
        "Optimizes fuel combustion for maximum gas mileage.",
        "Maintains engine emissions compliance and starts reliably."
      ],
      process: [
        "Reading ECU codes to locate specific cylinder misfires.",
        "Removing ignition coils and checking for oil/water intrusion.",
        "Extracting old spark plugs and checking electrode wear/deposits.",
        "Checking gap measurements on premium replacement spark plugs.",
        "Installing new plugs with precise torque specs to prevent head threads wear."
      ],
      faqs: [
        { q: "How often should I change spark plugs on a Jeep?", a: "Platinum or double-platinum plugs are typically replaced every 60,000 to 100,000 miles, while copper plugs should be checked every 30,000 miles." },
        { q: "What causes spark plugs to fail early?", a: "Carbon fouling due to running rich, oil leaking past valve stem seals, or coolant leaking into the cylinder can shorten plug life." }
      ]
    },
    {
      id: "timing-belt-replacement",
      name: "Jeep Timing Belt Replacement",
      category: "Mechanical",
      icon: "fa-solid fa-clock",
      costEstimate: 800,
      description: "Critical replacement of engine timing belts or chains, tensioners, and guides. We prevent catastrophic engine damage on interference engines, ensuring camshafts and crankshafts stay in perfect sync.",
      problems: [
        "A ticking or rattling sound from the front engine cover area.",
        "Engine misfires or runs rough due to timing belt stretch.",
        "Engine cranks but will not start (snapped timing belt).",
        "Recommended replacement mileage interval has been reached."
      ],
      benefits: [
        "Prevents catastrophic valve-to-piston contact and engine ruin.",
        "Restores perfect engine timing, power, and efficiency.",
        "Replaces critical water pumps and seals inside the timing cover.",
        "Delivers peace of mind for the next 80,000 to 100,000 miles."
      ],
      process: [
        "Removing drive belts, harmonic balancer, and timing covers.",
        "Aligning timing marks on cams and crank to top dead center.",
        "Removing old belt, tensioner, pulleys, and water pump.",
        "Installing new water pump, oil seals, tensioner, and timing belt.",
        "Manually rotating engine to verify timing alignment before starting."
      ],
      faqs: [
        { q: "Is a timing belt failure dangerous?", a: "Yes. On interference engines, if the belt breaks, the pistons will hit the open valves, causing severe internal engine damage." },
        { q: "Does my Jeep have a timing belt or a timing chain?", a: "Most older Jeep engines and diesel versions use timing belts, while modern Pentastar V6s and Hemi V8s use timing chains." }
      ]
    },
    {
      id: "preventive-maintenance",
      name: "Jeep Preventive Maintenance",
      category: "Preventive",
      icon: "fa-solid fa-shield-halved",
      costEstimate: 200,
      description: "Customized maintenance plans to keep your Jeep reliable on and off road. We perform fluid checks, filter swaps, belt inspections, chassis lubrication, and comprehensive point-by-point inspections.",
      problems: [
        "No structured record of vehicle service history.",
        "Hoses showing cracking or belts showing dry rot.",
        "Fluid levels (coolant, power steering, brake) are low.",
        "Planning a long road trip or off-road adventure."
      ],
      benefits: [
        "Catches small issues before they become expensive breakdowns.",
        "Maintains vehicle warranty compliance and high resale value.",
        "Ensures fluid levels and conditions are optimal for driving.",
        "Improves safety by checking critical steering, brakes, and belts."
      ],
      process: [
        "Inspecting all fluid levels, conditions, and hose integrity.",
        "Checking drive belts, cabin filter, and engine air filter.",
        "Lubricating chassis grease fittings (ball joints, U-joints).",
        "Inspecting brake pads, tire pressures, and tread wear.",
        "Providing a prioritized report of recommended maintenance items."
      ],
      faqs: [
        { q: "What is included in a preventive maintenance check?", a: "It includes an oil check, fluid top-offs, belt and hose inspections, tire pressure checks, brake check, and general safety inspections." },
        { q: "Why should I grease my Jeep's chassis?", a: "Many aftermarket suspension parts and some factory joints have grease fittings (zerks). Keeping them lubricated prevents wear and squeaks." }
      ]
    },
    {
      id: "major-service",
      name: "Jeep Major Service",
      category: "Preventive",
      icon: "fa-solid fa-screwdriver-wrench",
      costEstimate: 750,
      description: "The ultimate bumper-to-bumper service package recommended at 30k, 60k, and 90k mile intervals. We flush all driveline fluids, replace spark plugs, service filters, and conduct a absolute safety audit.",
      problems: [
        "Jeep has reached a major service milestone (e.g. 60,000 miles).",
        "Noticeable sluggishness, high fuel use, or rough operation.",
        "Bought a used Jeep with unknown service history.",
        "Preparing the Jeep for heavy seasonal off-roading."
      ],
      benefits: [
        "Complete reset of vehicle health and fluid condition.",
        "Replaces all wear components (spark plugs, filters, fluids) at once.",
        "Maximizes efficiency, fuel economy, and power delivery.",
        "Extends warranty protection and ensures long-term reliability."
      ],
      process: [
        "Replacing engine oil, oil filter, engine air filter, and cabin filter.",
        "Flushing and replacing brake fluid, coolant, and power steering fluid.",
        "Draining and refilling transfer case and front/rear differential fluids.",
        "Replacing spark plugs and inspecting ignition coils.",
        "Performing an electronic diagnostic scan and full suspension safety check."
      ],
      faqs: [
        { q: "When does my Jeep need a major service?", a: "Typically every 30,000 miles. Refer to your owner's manual or ask us to inspect your vehicle's current condition." },
        { q: "How long does a major service take?", a: "A major service is very comprehensive and usually requires 4 to 6 hours to complete." }
      ]
    },
    {
      id: "minor-service",
      name: "Jeep Minor Service",
      category: "Preventive",
      icon: "fa-solid fa-wrench",
      costEstimate: 180,
      description: "Quick, routine maintenance to keep your Jeep running in top shape. Includes oil change, tire rotation, fluid checks, filter inspections, and a basic safety review to keep your daily drive smooth.",
      problems: [
        "Reached a minor maintenance interval (every 5,000 to 7,500 miles).",
        "Slight pulling or tire noise that could be fixed by a tire rotation.",
        "Dashboard maintenance minder has illuminated.",
        "Just want a quick peace-of-mind check before a road trip."
      ],
      benefits: [
        "Affordable routine care that extends component lifespan.",
        "Maintains proper engine lubrication and tire wear patterns.",
        "Keeps essential fluids topped up to prevent sudden leaks.",
        "Provides a regular check on brake pad and tire health."
      ],
      process: [
        "Changing engine oil and installing a Mopar filter.",
        "Performing a four-wheel tire rotation to balance tread wear.",
        "Checking and topping off windshield washer, brake, and coolant fluids.",
        "Visual inspection of brake lining thickness and tire pressures.",
        "Inspecting external lights, wiper blades, and engine air filter."
      ],
      faqs: [
        { q: "How often should I get a minor service?", a: "Every 5,000 to 7,500 miles, alternating with your regular oil change schedules." },
        { q: "Is tire rotation really necessary?", a: "Yes. In 4WD Jeeps, tires wear differently on the front axle compared to the rear. Rotating them ensures they wear evenly, extending tire life." }
      ]
    },
    {
      id: "performance-tuning",
      name: "Jeep Performance Tuning",
      category: "Off-Road",
      icon: "fa-solid fa-gauge-high",
      costEstimate: 400,
      description: "Optimizing engine calibrations, throttle response, shift points, and speedometer corrections. We install custom tunes, recalibrate for gear changes, and integrate performance air intakes and exhaust setups.",
      problems: [
        "Sluggish acceleration and delayed throttle response (drive-by-wire lag).",
        "Incorrect speedometer reading after installing larger tires.",
        "Automatic transmission hunting for gears or shifting early on hills.",
        "Loss of horsepower and torque after adding heavy bumpers and armor."
      ],
      benefits: [
        "Unleashes hidden horsepower, torque, and engine response.",
        "Recalibrates transmission shift points for larger tires and gear ratios.",
        "Corrects speedo readings, odometer accuracy, and ABS logic.",
        "Adjustable modes for towing, trail crawlers, or highway performance."
      ],
      process: [
        "Conducting a baseline diagnostic check and logging engine data.",
        "Installing programmer module or connecting custom software to ECU/TCM.",
        "Adjusting engine maps, spark timing, and throttle sensitivity parameters.",
        "Calibrating speedometer for exact tire height and axle gear ratio.",
        "Road testing and data logging to verify safe air-fuel ratios."
      ],
      faqs: [
        { q: "Will performance tuning void my Jeep's warranty?", a: "Certain custom engine tunes can affect powertrain warranties. We offer warranty-friendly calibrations and options to restore the factory backup tune if needed." },
        { q: "How do you correct the speedometer for larger tires?", a: "We use programmer units (like Superchips or AEV ProCal) to update the tire diameter in the Jeep's body control module." }
      ]
    },
    {
      id: "off-road-inspection",
      name: "Jeep Off-Road Inspection",
      category: "Off-Road",
      icon: "fa-solid fa-helmet-safety",
      costEstimate: 150,
      description: "Pre-trail and post-trail inspections to ensure structural integrity. We check frame joints, skid plates, driveshaft U-joints, steering links, differential vents, and recovery points for cracks, bends, or trail damage.",
      problems: [
        "Preparing for a challenging off-road trip or trail event.",
        "Hearing scraping or clunking sounds after an off-road excursion.",
        "Submerged differentials or transfer case in deep mud or water.",
        "Vibration felt in the seat or floorboards after hitting a trail rock."
      ],
      benefits: [
        "Ensures your Jeep is structurally safe to tackle remote trails.",
        "Catches trail damage early before it causes a highway breakdown.",
        "Checks for water intrusion in axles, preventing gear rust.",
        "Verifies winch, recovery points, and trail gear are ready for action."
      ],
      process: [
        "Inspecting the frame, crossmembers, and skid plates for cracks/bends.",
        "Checking steering link straightness, ball joints, and track bars.",
        "Checking driveshaft U-joints, slip yokes, and CV boots for play.",
        "Inspecting diff cover seals and checking gear oil for water contamination.",
        "Verifying winch spooling, remote operation, and recovery shackle mounts."
      ],
      faqs: [
        { q: "Why check differentials after water crossings?", a: "If your diff vent tubes are damaged or submerged, water can enter the axle, emulsifying the gear oil and ruining bearings. We check for milky oil." },
        { q: "What should I inspect before hitting the trail?", a: "Focus on steering tightness, brake pad condition, fluid levels, tire sidewalls, U-joints, and make sure your recovery gear is packed." }
      ]
    }
  ],
  blogs: [
    {
      id: "solving-jeep-death-wobble",
      title: "Solving the Jeep Death Wobble: Causes, Diagnostics & Cures",
      summary: "Understand why your front end shakes violently and learn the step-by-step diagnostic process to cure it forever.",
      date: "May 15, 2026",
      readTime: "6 min read",
      author: "David Vance (Certified Master Tech)",
      tag: "Suspension",
      content: `
        <p>If you've ever experienced the infamous "Death Wobble" in your Jeep Wrangler or Cherokee, you know how terrifying it is. You hit a minor bump at highway speeds, and suddenly the steering wheel starts shaking violently, forcing you to slow down to a crawl to regain control.</p>
        
        <h3>What is the Death Wobble?</h3>
        <p>The Death Wobble is a violent, uncontrolled oscillation of the front steering and suspension components. It is unique to vehicles with solid front axles (like Wranglers) because a vibration on one wheel is directly linked to the other through the steering linkage.</p>
        
        <h3>The Main Causes</h3>
        <p>Contrary to popular belief, a steering stabilizer is rarely the cause. It only dampens the vibration. The root causes are typically worn or loose suspension components:</p>
        <ul>
          <li><strong>Loose Track Bar Bolts:</strong> The track bar controls lateral movement. Even 1/16th of an inch of play in the mounting holes can trigger the wobble.</li>
          <li><strong>Worn Track Bar Bushings:</strong> Softened rubber or damaged urethane bushings allow the axle to shift.</li>
          <li><strong>Worn Ball Joints:</strong> Excessive play in the upper or lower ball joints lets the steering knuckle wobble.</li>
          <li><strong>Bad Control Arm Bushings:</strong> Worn links allow front-to-back axle shifting.</li>
          <li><strong>Improper Caster Angle:</strong> Common in lifted Jeeps that haven't been aligned with adjustable control arms.</li>
        </ul>

        <h3>How to Diagnose It</h3>
        <p>We perform a "dry steering test." With the Jeep on the ground, a tech moves the steering wheel back and forth while another closely inspects all joints for play or deflection. If any play is spotted, that component must be replaced and torqued to exact specs.</p>
        
        <p>If you are struggling with highway shaking, bring it to our shop. We specialize in Jeep solid-axle geometry and will locate the root cause instead of just slapping on a steering stabilizer band-aid.</p>
      `
    },
    {
      id: "preventive-maintenance-offroad",
      title: "Essential Pre-Trail & Post-Trail Jeep Inspection Guide",
      summary: "Don't get stranded in the backcountry. Follow our checklist to inspect your Jeep before and after off-road runs.",
      date: "June 2, 2026",
      readTime: "5 min read",
      author: "Mark Miller (Lead Off-Road Advisor)",
      tag: "Off-Road",
      content: `
        <p>Heading out to the trails is a core Jeep experience, but remote trails are unforgiving. A component failure that would be a minor inconvenience in the city can turn into a serious survival situation in the mountains or desert.</p>
        
        <h3>Pre-Trail Checklist</h3>
        <p>Before you load up your cooler, inspect these key components:</p>
        <ol>
          <li><strong>Fluid Levels:</strong> Check engine oil, coolant, power steering, and brake reservoirs. A low level could indicate a leak that will worsen under steep trail angles.</li>
          <li><strong>Steering Components:</strong> Ensure tie rods, drag links, and steering stabilizer bolts are tight.</li>
          <li><strong>Tire Inspection:</strong> Look for sidewall cuts, check tread depths, and verify that your spare tire has correct air pressure and is securely mounted.</li>
          <li><strong>Winch Check:</strong> Spool out your winch line, inspect it for frays or kinks, and verify that the remote controller functions correctly.</li>
        </ol>

        <h3>Post-Trail Recovery Care</h3>
        <p>Once you return, don't just park the Jeep. Perform a thorough check:</p>
        <ul>
          <li><strong>Wash the Undercarriage:</strong> Clean caked mud and debris from radiator fins, brakes, and suspension joints. Mud traps moisture, causing rust and bearing wear.</li>
          <li><strong>Check Differentials for Water:</strong> If you crossed deep water, check your differential fluid. If it looks milky, water got in, and you need a differential fluid flush immediately.</li>
          <li><strong>Inspect Skid Plates and Frame:</strong> Check for deep scrapes, dents, or cracked welds on undercarriage armor. Repair rust spots with touch-up paint to prevent corrosion.</li>
        </ul>
        
        <p>If you'd rather leave it to the pros, book our specialized <strong>Off-Road Inspection</strong>. We'll torque check your suspension links and make sure your Jeep is ready for the next adventure.</p>
      `
    },
    {
      id: "pentastar-v6-ticking-noise",
      title: "Jeep Pentastar 3.6L V6 Ticking Noise: What You Need to Know",
      summary: "Hear a ticking noise under your hood? Learn about rocker arm failures in the Pentastar engine and how to fix it.",
      date: "May 28, 2026",
      readTime: "7 min read",
      author: "Sarah Jenkins (Engine Specialist)",
      tag: "Engine",
      content: `
        <p>The Mopar 3.6L Pentastar V6 is a highly reliable engine used in millions of Wranglers, Grand Cherokees, and Gladiators. However, it is prone to a well-known issue: a ticking noise originating from the cylinder heads.</p>
        
        <h3>Why Does the Engine Tick?</h3>
        <p>The issue stems from the needle bearings inside the rocker arms (roller lifter followers). Over time, these needle bearings wear out, causing the roller to develop play or seize. Once it seizes, it rubs directly against the camshaft lobe instead of rolling smoothly.</p>
        
        <p>This rubbing action produces a distinct ticking sound that matches engine speed. If ignored, the seized rocker will grind down the camshaft lobe, sending metal shavings through your oil system and requiring a new camshaft.</p>
        
        <h3>Symptoms of Rocker Arm Failure</h3>
        <ul>
          <li><strong>Ticking Noise:</strong> A metallic ticking sound, loudest on cold starts, from the driver or passenger cylinder head.</li>
          <li><strong>Misfire Codes:</strong> ECU codes P0300, P0301, P0306, etc., indicating a specific cylinder misfire as valve lift is compromised.</li>
          <li><strong>Rough Idle:</strong> Engine vibrations at stoplights.</li>
        </ul>

        <h3>How to Fix It Correctly</h3>
        <p>To repair this, the intake manifold and cylinder head covers must be removed. We recommend replacing all rocker arms and lifters on the affected bank, not just the single ticking one. If one has failed, the others are likely near the end of their lifespan.</p>
        
        <p>Catching the tick early saves money. Replacing rocker arms is a fraction of the cost of replacing camshafts and performing engine flushes due to metal debris. Contact our engine department if you hear any ticking noises.</p>
      `
    }
  ],
  testimonials: [
    {
      name: "Marcus Vance",
      jeepModel: "Jeep Wrangler Rubicon (JK)",
      rating: 5,
      service: "Differential & Re-Gearing",
      comment: "Absolutely top-tier service. I brought in my JK Rubicon for a 4.88 re-gear after installing 37-inch tires. They dialed in the lash perfectly. Zero differential hum on the highway, and my shift points are back to factory. These guys know Dana axles!"
    },
    {
      name: "Jessica Albright",
      jeepModel: "Jeep Grand Cherokee (WK2)",
      rating: 5,
      service: "Air Suspension Repair",
      comment: "My Quadra-Lift air suspension was sagging in the rear and throwing dashboard errors. The dealership quoted me a fortune to replace the whole system. This shop diagnosed a leaking solenoid block and fixed it for a fraction of the price. Extremely honest!"
    },
    {
      name: "Tom Peterson",
      jeepModel: "Jeep Gladiator (JT)",
      rating: 5,
      service: "Off-Road Inspection & Lift Kit Maintenance",
      comment: "I take my Gladiator to Moab every year, and these are the only guys I trust to inspect my Jeep before and after. They found a cracked track bar bracket that could have failed on the trail. Professional, fast, and very knowledgeable."
    },
    {
      name: "Brandon Cox",
      jeepModel: "Jeep Wrangler Unlimited (JL)",
      rating: 5,
      service: "Steering Box Calibration",
      comment: "Fixed my steering wander and solved the loose feeling. I was constantly correcting on the highway, but now my JL drives straight as an arrow. Professional setup and clean shop."
    }
  ],
  faqs: [
    {
      q: "What Jeep models do you service?",
      a: "We service all Jeep models, including the Wrangler (YJ, TJ, JK, JL), Gladiator (JT), Grand Cherokee (ZJ, WJ, WK, WK2, WL), Cherokee (XJ, KL), Commander, Renegade, Compass, and vintage Willys models."
    },
    {
      q: "Are you an authorized Mopar repair center?",
      a: "While we are an independent specialist facility, we use official Mopar diagnostic software (wiTECH), follow factory repair procedures, and utilize genuine Mopar OEM parts to protect your factory warranty."
    },
    {
      q: "Do you offer warranties on your Jeep repairs?",
      a: "Yes! All of our professional repairs are backed by a comprehensive 24-Month/24,000-Mile warranty covering both parts and labor, nationwide."
    },
    {
      q: "How can I book an appointment?",
      a: "You can book directly using our online booking form (click 'Book Appointment' at the top), call our shop phone, or click the WhatsApp floating button to message us directly."
    },
    {
      q: "Can you assist with insurance claims for off-road damage?",
      a: "Yes. We work closely with major insurance companies to document and repair undercarriage, frame, suspension, or drivetrain damage sustained on the trail or in collisions."
    }
  ]
};

// Export to window object for browser access
window.JeepData = JeepData;
