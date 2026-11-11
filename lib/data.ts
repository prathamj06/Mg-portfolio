export interface Founder {
  id: string;
  name: string;
  role: string;
  specialization: string;
  bio: string;
  linkedin: string;
  github: string;
  focusAreas: string[];
  currentProject: string;
}

export interface Domain {
  id: string;
  code: string;
  name: string;
  summary: string;
  lead: string;
  description: string;
  keyTopics: string[];
  equation: string;
  equationLabel: string;
}

export interface Project {
  id: string;
  title: string;
  domain: string;
  domainId: string;
  badge: string;
  lead: string;
  collaborators: string[];
  status: string;
  abstract: string;
  technicalSpecs: Record<string, string>;
  tags: string[];
  github: string;
  metrics: string;
  image?: string;
}

export interface Session {
  id: string;
  title: string;
  speaker: string;
  role: string;
  date: string;
  type: string;
  domain: string;
  summary: string;
  topics: string[];
  slidesUrl: string;
  notesAvailable: boolean;
}

export interface Member {
  id: string;
  name: string;
  cohort: string;
  domain: string;
  domainId: string;
  focus: string;
  skills: string[];
  activeProject: string;
  github: string;
  linkedin: string;
  bio: string;
}

export interface Achievement {
  id: string;
  title: string;
  category: "research" | "national" | "hardware" | "mentorship";
  categoryLabel: string;
  year: string;
  issuer: string;
  badge: string;
  abstract: string;
  impact: string;
  tags: string[];
  metrics: string;
  details?: {
    overview: string;
    highlights: string[];
    relevance: string;
  };
}

export interface CommunityData {
  meta: {
    name: string;
    tagline: string;
    cohortSize: string;
    domainsCount: number;
    activeProjectsCount: number;
    sessionsConducted: number;
    contactEmail: string;
    githubOrg: string;
    discordInvite: string;
  };
  founders: Founder[];
  domains: Domain[];
  projects: Project[];
  sessions: Session[];
  members: Member[];
  achievements: Achievement[];
}

export const COMMUNITY_DATA: CommunityData = {
  meta: {
    name: "Melerigamy",
    tagline: "An unofficial technical collective exploring RF, AI/ML, electronics, mathematics, and scientific research.",
    cohortSize: "30+ First-Year Members",
    domainsCount: 6,
    activeProjectsCount: 13,
    sessionsConducted: 8,
    contactEmail: "melerigamy.research@gmail.com",
    githubOrg: "https://github.com/melerigamy",
    discordInvite: "https://discord.gg/melerigamy",
  },

  founders: [
    {
      id: "ishaan-chaturvedi",
      name: "Ishaan Chaturvedi",
      role: "Founder",
      specialization: "IoT Systems, Core Electronics & AI/ML",
      bio: "B.Tech IT at MSIT specializing in IoT, core electronics, and intelligent automation. ICAIA 2025 research author, Ministry of Education (RBVP) selectee, and CSIR-NPL winner with research exposure across DRDO labs (LRDE, DIPR). Leads hands-on electronics cohorts and IoT workshops.",
      linkedin: "https://www.linkedin.com/in/ishaan-chaturvedi-972948310/",
      github: "https://github.com/linkedwithishaan",
      focusAreas: [
        "IoT & Industrial Automation",
        "Core Electronics",
        "AI/ML Environmental Systems",
        "Sensor-Driven Hardware",
        "Applied Research & Radar"
      ],
      currentProject: "AI-Powered Urban Farming & Autonomous Sensor Control System"
    },
    {
      id: "dhruv-ghoshal",
      name: "Dhruv Ghoshal",
      role: "Founder",
      specialization: "Hardware-Software Co-Design & Systems Engineering",
      bio: "B.Tech CSE student specializing in the convergence of IoT hardware and full-stack software development. Blends technical systems engineering with proven operations leadership, organizing high-impact hackathons, engineering intensives, and collaborative technical events.",
      linkedin: "https://www.linkedin.com/in/dhruv-ghosal-841353247/",
      github: "https://github.com/Dhruvhash",
      focusAreas: [
        "Hardware-Software Co-Design",
        "Internet of Things (IoT)",
        "Full-Stack Development",
        "Technical Event Operations",
        "Systems Architecture"
      ],
      currentProject: "Integrated IoT Edge-to-Cloud Distributed Gateway"
    },
    {
      id: "keshav-gupta",
      name: "Keshav Gupta",
      role: "Software & Hardware Lead",
      specialization: "Web3 Protocols, AI Integrations & IoT Engineering",
      bio: "B.Tech CSE at MSIT and Software & Hardware Lead at Melerigamy, exploring the intersection of Ethereum, Web3 protocols, and IoT. Freelance embedded engineer who has tutored 100+ students in hands-on hardware and blockchain technologies.",
      linkedin: "https://www.linkedin.com/in/keshav-gupta-83201431a/",
      github: "https://github.com/Keshav-pro1",
      focusAreas: [
        "Web3 & Ethereum Protocols",
        "IoT (Hardware + Software)",
        "AI-Web3 Integrations",
        "Freelance IoT Prototyping",
        "100+ Students Mentored"
      ],
      currentProject: "Decentralized Telemetry Bridge & Ethereum IoT Smart Oracles"
    }
  ],

  domains: [
    {
      id: "ai-ml",
      code: "AI-01",
      name: "Artificial Intelligence & Machine Learning (AI–ML)",
      summary: "Neural architectures, computer vision, edge AI inference on microcontrollers, and intelligent automated decision systems.",
      lead: "Ishan Chaturvedi & ML Cohort",
      description: "From deep learning phenotyping to real-time embedded neural models, we deploy intelligent machine learning systems directly on edge silicon, microcontrollers, and robotic platforms.",
      keyTopics: [
        "Edge AI & TinyML Inference",
        "Computer Vision & Phenotyping",
        "Genetic Algorithms & Predictive Control",
        "Sensor Fusion & Decision Networks"
      ],
      equation: "\\min_{\\theta} \\frac{1}{N} \\sum_{i=1}^N \\mathcal{L}(f(x_i; \\theta), y_i) + \\lambda \\Omega(\\theta)",
      equationLabel: "Empirical Risk Minimization"
    },
    {
      id: "sustainable-tech",
      code: "ST-02",
      name: "Sustainable and Green Technologies",
      summary: "Closed-loop environmental telemetry, automated urban farming rigs, water quality instrumentation, and clean energy monitoring.",
      lead: "Ishan Chaturvedi",
      description: "Engineering practical ecological solutions: high-pressure aeroponic cultivation, cloud-connected soil irrigation nodes, and multi-stage water filtration systems evaluated under empirical constraints.",
      keyTopics: [
        "Controlled Environment Agriculture (AIoT)",
        "Automated Nutrient Dosing with PID & Fuzzy Logic",
        "Water Quality Telemetry (pH, Turbidity, TDS)",
        "Renewable Micro-Grids & Battery Storage"
      ],
      equation: "I_L = \\frac{P}{V \\cdot \\eta \\cdot \\cos\\phi}",
      equationLabel: "Inductive Load Power Sizing"
    },
    {
      id: "communication-dsp",
      code: "CS-03",
      name: "Communication & Signal Processing Systems",
      summary: "Wireless transceiver architectures, digital signal processing (DSP), modulation schemes, and high-frequency telemetry links.",
      lead: "Ishan Chaturvedi",
      description: "Demystifying the electromagnetic spectrum: from 10.5 GHz phased array pulse compression to VHF aviation voice demodulation and wideband SDR spectrum surveillance with GNU Radio.",
      keyTopics: [
        "Pulse Linear Frequency Modulation (PLFM)",
        "Software-Defined Radio (SDR / RTL2832U)",
        "Quadrature Demodulation & Digital Filtering",
        "Aviation Band VHF AM Intercept"
      ],
      equation: "s(t) = \\text{rect}\\left(\\frac{t}{T}\\right) \\exp\\left(j 2\\pi \\left(f_0 t + \\frac{K}{2} t^2\\right)\\right)",
      equationLabel: "Linear Frequency Modulated Chirp"
    },
    {
      id: "antenna-electromagnetics",
      code: "AE-04",
      name: "Antenna Design and Electromagnetics",
      summary: "Electromagnetic wave propagation, planar microstrip antennas, impedance matching networks, and RF simulation modeling.",
      lead: "Ishan Chaturvedi",
      description: "Designing, simulating, and validating microwave antenna structures: patch arrays, slotted dielectric waveguides, and resonant LC filter front-ends with sub-millimeter precision.",
      keyTopics: [
        "Planar Microstrip Patch Arrays",
        "Slotted Waveguide Antenna Design",
        "Impedance Matching & Smith Chart Synthesis",
        "Microwave S-Parameter Characterization"
      ],
      equation: "L = \\frac{c}{2 f_0 \\sqrt{\\epsilon_{\\text{eff}}}} - 2\\Delta L",
      equationLabel: "Microstrip Patch Resonant Length"
    },
    {
      id: "robotics-automation",
      code: "RA-05",
      name: "Robotics and Intelligent Automation",
      summary: "Autonomous mechanical actuation, kinematics, closed-loop sensor-motor feedback, and intelligent industrial automation rigs.",
      lead: "Ishan Chaturvedi",
      description: "Constructing physical autonomous machines: 5-DOF 3D-printed robotic arms, animatronic eye mechanisms, autonomous line followers, hybrid utility buggies, and decentralized drone swarms.",
      keyTopics: [
        "5-DOF Articulated Arm Kinematics",
        "LIDAR SLAM & RTK-GPS Navigation",
        "Differential Drive & Optical IR Tracking",
        "Multi-Agent UAV Swarm Formations"
      ],
      equation: "\\tau = \\mathbf{M}(\\theta)\\ddot{\\theta} + \\mathbf{C}(\\theta, \\dot{\\theta})\\dot{\\theta} + \\mathbf{g}(\\theta)",
      equationLabel: "Manipulator Dynamic Formulation"
    },
    {
      id: "electronics-embedded",
      code: "EE-06",
      name: "Electronics, IoT & Embedded Systems",
      summary: "Schematic capture, multi-layer PCB design, low-power microcontroller firmware, and connected industrial IoT sensor mesh.",
      lead: "Ishan Chaturvedi & Aryan Singh",
      description: "From discrete 74LS TTL logic gates to 220V industrial automation control panels and Wi-Fi IoT microcontrollers, our fellows build hardware that bridges bare silicon and real-world power.",
      keyTopics: [
        "Discrete 74LS TTL Logic & ALU Architecture",
        "220V Industrial Control Panels (IEC 60204-1)",
        "ESP32 & STM32 Firmware Engineering",
        "Biometric RFID & Environmental IoT Nodes"
      ],
      equation: "S = A \\oplus B \\oplus C_{\\text{in}}, \\quad C_{\\text{out}} = (A \\cdot B) + (C_{\\text{in}} \\cdot (A \\oplus B))",
      equationLabel: "Full Adder Boolean Formulation"
    }
  ],

  projects: [
    {
      id: "aeris-10-radar",
      title: "AERIS-10: 10.5 GHz Phased Array Radar",
      domain: "Antenna Design and Electromagnetics",
      domainId: "antenna-electromagnetics",
      badge: "10.5 GHz / Patch Array / FPGA",
      lead: "Ishan Chaturvedi",
      collaborators: ["Hardware Lab Fellows", "RF & Microwave Guild"],
      status: "Hardware Prototype",
      abstract: "An open-source 10.5 GHz X-band phased array radar utilizing Pulse Linear Frequency Modulation (PLFM). Features ±45° electronic beam steering in elevation and azimuth, FPGA-accelerated pulse compression, Doppler FFT, MTI, and CFAR target tracking across modular RF, synthesizer, and power management planes.",
      technicalSpecs: {
        centerFrequency: "10.5 GHz (X-Band)",
        beamSteering: "±45° Electronic Azimuth & Elevation",
        fpgaCompute: "Xilinx Artix-7 (XC7A50T) Signal Processing",
        rfFrontend: "ADAR1000 4-Ch Phase Shifters & ADTR1107 PAs/LNAs",
        detectionRange: "3 km (Patch Array) / 20 km (Slotted Waveguide)"
      },
      tags: ["PLFM Radar", "10.5 GHz", "Phased Array", "Artix-7 FPGA", "Beamforming"],
      github: "https://github.com/linkedwithishaan/PLFM_RADAR",
      metrics: "Sub-meter range resolution with full electronic phase steering.",
      image: "/assets/drive/comm-system-setup.jpg"
    },
    {
      id: "aiot-urban-farming",
      title: "AIoT Controlled Environment Agriculture System",
      domain: "Sustainable and Green Technologies",
      domainId: "sustainable-tech",
      badge: "AIoT / Aeroponics / Closed-Loop",
      lead: "Ishan Chaturvedi",
      collaborators: ["MSIT Urban Farming Research Team"],
      status: "Bench & Field Tested",
      abstract: "An automated controlled-environment agriculture platform integrating high-pressure aeroponics (80–100 PSI micro-mist) and dual-mode hydroponics (NFT & DWC). An edge layer of microcontrollers executes real-time PID and fuzzy-logic automated nutrient dosing, backed by a 220V IP54 industrial control panel, environmental sensor arrays, and computer vision phenotyping.",
      technicalSpecs: {
        atomization: "80–100 PSI High-Pressure & Ultrasonic Mist",
        sensoryMatrix: "Atlas Scientific pH/EC, SHT30, MH-Z19B CO2, TSL2591 PAR",
        controlLogic: "Edge PID Automation & Peristaltic Dosing Relays",
        resourceEfficiency: "90% Water Reduction & 25–40% Yield Increase",
        powerSystem: "220V AC IP54 Distribution Panel with LOTO Interlocks"
      },
      tags: ["AIoT", "Aeroponics", "Hydroponics", "PID Automation", "Clean Tech"],
      github: "https://github.com/linkedwithishaan",
      metrics: "90% water conservation with ±0.2°C closed-loop thermal regulation.",
      image: "/assets/drive/aiot-urban-farm-1.jpg"
    },
    {
      id: "industrial-control-panel-220v",
      title: "220V Industrial Automation & Power Distribution Panel",
      domain: "Electronics, IoT & Embedded Systems",
      domainId: "electronics-embedded",
      badge: "220V AC / IP54 / IEC 60204-1",
      lead: "Ishan Chaturvedi",
      collaborators: ["Aryan Singh", "Dhruv Ghosal"],
      status: "Fabricated & Operational",
      abstract: "An industrial-grade 220V AC (50Hz) power distribution unit engineered to IEC 60204-1 safety standards. Features an IP54 metal enclosure, Type-C 6kA DIN-rail mounted circuit breakers, 24V DC regulated SMPS, dual-switch Permissive AND safety interlock (Key Switch + Rotary Selector), category-0 emergency stop, and real-time HMI operator telemetry.",
      technicalSpecs: {
        mainsPower: "220V AC (50Hz) Single-Phase Industrial Grid",
        circuitProtection: "Type-C Curve 6kA Miniature Circuit Breakers",
        safetyProtocol: "Permissive AND Logic (Key Switch + LOTO E-Stop)",
        dcLogicSupply: "24V Regulated SMPS with Optocoupled Isolation",
        wiringHarness: "2.5mm² Copper Wiring (20A Trunking Ampacity)"
      },
      tags: ["Industrial Panel", "MCB", "Power Distribution", "HMI", "IEC 60204-1"],
      github: "https://github.com/linkedwithishaan/CONTROL-PANEL-",
      metrics: "6kA short-circuit interrupt capacity with zero-voltage logic isolation.",
      image: "/assets/drive/control-panel-220v.jpg"
    },
    {
      id: "8-bit-ttl-alu",
      title: "Discrete 74LS TTL 8-Bit Arithmetic Logic Unit",
      domain: "Electronics, IoT & Embedded Systems",
      domainId: "electronics-embedded",
      badge: "74LS TTL / Logic Design / Hardware",
      lead: "Ishan Chaturvedi",
      collaborators: ["Digital Electronics Lab Cohort"],
      status: "Hardware Verified",
      abstract: "A physical 8-bit Arithmetic Logic Unit constructed entirely from discrete 74LS series Transistor-Transistor Logic (TTL) integrated circuits. Features a dual-bus architecture supporting ripple-carry addition and two's complement subtraction via dynamic XOR inverters, alongside bitwise logic (AND, OR, XOR, NOT) multiplexed through 74LS157 selectors with sub-55ns critical path delay.",
      technicalSpecs: {
        arithmeticCore: "Cascaded 74LS283 4-Bit Fast-Carry Adders",
        logicElements: "74LS86 XOR, 74LS08 AND, 74LS32 OR, 74LS04 Inverter",
        dataRouting: "74LS157 2-to-1 Multiplexers & 74LS173 Registers",
        criticalPathDelay: "≈ 51 ns Combinational Latency (MHz capable)",
        signalIntegrity: "100nF Ceramic Decoupling per IC Power Pin"
      },
      tags: ["TTL Logic", "ALU", "Computer Architecture", "Digital Electronics", "74LS283"],
      github: "https://github.com/linkedwithishaan/8-BIT-ALU-DIGTAL-ELECTRONICS-PROJECT",
      metrics: "Full 8-bit unsigned/signed arithmetic verified with ~51ns delay.",
      image: "/assets/drive/digital-circuit-board.jpg"
    },
    {
      id: "aqi-environmental-station",
      title: "Real-Time AQI Environmental Telemetry Station",
      domain: "Sustainable and Green Technologies",
      domainId: "sustainable-tech",
      badge: "PM2.5 / Laser Scattering / IoT",
      lead: "Ishan Chaturvedi",
      collaborators: ["Environmental Sensing Group"],
      status: "Deployed & Monitoring",
      abstract: "A continuous environmental monitoring terminal measuring particulate matter (PM2.5 & PM10), volatile organic compounds (VOCs), ambient temperature, and barometric pressure. Interfaced to an ESP microcontroller running C++ telemetry firmware, the system streams live air quality analytics to a dedicated dashboard.",
      technicalSpecs: {
        particulateSensing: "Laser Scattering PM2.5 and PM10 Detector",
        gasMicroclimate: "MQ-series VOC Array + DHT22 Temperature/Humidity",
        controller: "ESP32 Microcontroller with Wi-Fi Telemetry",
        dashboard: "Real-time AQI Analytics & Parameter Threshold Warnings",
        powerSource: "Continuous DC Supply with Solar Battery Backup"
      },
      tags: ["AQI", "PM2.5", "Environmental IoT", "ESP32", "Laser Scattering"],
      github: "https://github.com/linkedwithishaan/AQI-MONITORING",
      metrics: "Sub-second particulate measurement with cloud telemetry logging.",
      image: "/assets/drive/aqi-dashboard.png"
    },
    {
      id: "hid-robotic-eyes",
      title: "HID-Controlled Animatronic Robotic Eyes",
      domain: "Robotics and Intelligent Automation",
      domainId: "robotics-automation",
      badge: "Animatronics / PySerial / ESP32",
      lead: "Ishan Chaturvedi",
      collaborators: ["MSIT Robotics Group"],
      status: "Hardware Verified",
      abstract: "An animatronic facial interaction system featuring 3D printed mechanical eyeball and eyelid mechanisms. Python scripts capture real-time Human Interface Device (HID) keyboard inputs, transmitting serialized motion packets over USB to an ESP32 microcontroller that drives micro-servo arrays for realistic horizontal, vertical, and blinking dynamics.",
      technicalSpecs: {
        mechanicalAssembly: "Custom 3D Printed Dual-Orbit Eyeball & Eyelid Frame",
        actuatorMatrix: "Multiple SG90 Micro-Servos for Saccadic Movement",
        embeddedControl: "ESP32 Generating Synchronized PWM Motion Angles",
        hostSoftware: "Python PySerial Real-Time Input Interpretation Engine",
        responseLatency: "Sub-15ms Serial Command-to-Actuation Delay"
      },
      tags: ["Animatronics", "ESP32", "Python HID", "Servos", "Human-Robot Interaction"],
      github: "https://github.com/linkedwithishaan/ROBOTIC-EYE",
      metrics: "Sub-15ms low-latency multi-axis gaze and eyelid synchronization.",
      image: "/assets/drive/robotics-1.png"
    },
    {
      id: "autonomous-line-follower",
      title: "Autonomous Optical Line Following Robot Car",
      domain: "Robotics and Intelligent Automation",
      domainId: "robotics-automation",
      badge: "Differential Drive / IR Array / Arduino",
      lead: "Ishan Chaturvedi",
      collaborators: ["First-Year Robotics Cohort"],
      status: "Track Tested",
      abstract: "A high-speed autonomous mobile robot designed for automated factory material transit. Integrates high-contrast infrared (IR) reflection sensors with an LM393 comparator network, Arduino Uno microcontroller, and an L293D dual H-bridge motor driver regulating differential DC motor velocities with closed-loop feedback.",
      technicalSpecs: {
        sensorArray: "High-Sensitivity IR Optical Reflex Pairs with LM393",
        controller: "Arduino Uno Processing Differential Steering Logic",
        driverShield: "L293D Triple-IC Motor Driver Shield (4-Motor Capable)",
        drivetrain: "Dual High-Torque Geared DC Motors with Rubber Traction Wheels",
        powerSubsystem: "External 7–12V DC Battery Pack with Master Isolation"
      },
      tags: ["Line Follower", "L293D", "IR Sensors", "Autonomous Navigation", "Arduino"],
      github: "https://github.com/linkedwithishaan/ROBOTIC-LINE-FOLLOWER",
      metrics: "Continuous high-speed trajectory tracking on complex curved paths.",
      image: "/assets/drive/robotics-2.png"
    },
    {
      id: "smart-soil-irrigation",
      title: "IoT Cloud Smart Soil Monitoring & Irrigation System",
      domain: "Sustainable and Green Technologies",
      domainId: "sustainable-tech",
      badge: "ESP8266 / Arduino Cloud / Automation",
      lead: "Ishan Chaturvedi",
      collaborators: ["IoT Systems Cohort"],
      status: "Operational",
      abstract: "A precision agricultural IoT node built around the ESP8266 NodeMCU. Measures capacitive soil moisture, DHT11 air temperature and relative humidity, optical rain presence, and PIR intrusion. Features automated relay-driven water pump actuation, cloud dashboard monitoring via Arduino IoT Cloud, and automated Google Sheets data logging.",
      technicalSpecs: {
        microcontroller: "ESP8266 NodeMCU Wi-Fi SoC",
        sensoryStack: "Capacitive Soil Moisture, DHT11, Rain Board, PIR Sensor",
        pumpActuation: "Optocoupled 5V Relay Driving Submersible Water Pump",
        cloudTelemetry: "Arduino IoT Cloud Dashboard & Google Apps Script Logging",
        safetyOverride: "Automated Rain Detection Cutoff to Prevent Over-Irrigation"
      },
      tags: ["Smart Agriculture", "ESP8266", "Arduino Cloud", "Automated Irrigation", "IoT"],
      github: "https://github.com/linkedwithishaan/IOT-Basesd-soil-monitoring-system-",
      metrics: "Autonomous moisture-triggered irrigation with cloud telemetry sync.",
      image: "/assets/drive/soil-monitoring.jpg"
    },
    {
      id: "smart-water-testing-kit",
      title: "Portable Multi-Parameter Water Quality Testing Kit",
      domain: "Sustainable and Green Technologies",
      domainId: "sustainable-tech",
      badge: "Analog Sensors / LCD / Water Safety",
      lead: "Ishan Chaturvedi",
      collaborators: ["Environmental Instrumentation Fellows"],
      status: "Calibrated & Validated",
      abstract: "A self-contained water safety assessment terminal measuring water pH, Nephelometric Turbidity Units (NTU), and Total Dissolved Solids (TDS ppm). Analog sensor voltages are captured by an Arduino Uno ADC, evaluated against calibrated polynomial formulas, and rendered in real time on an HD44780 16×2 LCD screen.",
      technicalSpecs: {
        controller: "Arduino Uno R3 with 10-Bit ADC Multichannel Sampling",
        phSensing: "Analog Glass Combination Electrode (0–14 pH Range)",
        turbidity: "Optical Light Scattering Sensor Measuring Suspended Solids (NTU)",
        tdsMeasurement: "Conductivity Probe with 3rd-Order Polynomial PPM Mapping",
        display: "16×2 HD44780 Dot-Matrix LCD in 4-Bit Power-Saving Mode"
      },
      tags: ["Water Quality", "Turbidity NTU", "pH Sensor", "TDS ppm", "Arduino"],
      github: "https://github.com/linkedwithishaan/WATER-TESTING-KIT",
      metrics: "Simultaneous tripartite analysis (pH, NTU, PPM) updated every 2s.",
      image: "/assets/drive/water-sensor-kit.jpg"
    },
    {
      id: "multi-stage-water-filter",
      title: "Multi-Stage Physical Water Filtration & Treatment Rig",
      domain: "Sustainable and Green Technologies",
      domainId: "sustainable-tech",
      badge: "Physical Separation / Media Filtration",
      lead: "Ishan Chaturvedi",
      collaborators: ["Green Tech Research Group"],
      status: "Empirical Testing",
      abstract: "An empirical fluid filtration apparatus designed to evaluate multi-stage sediment separation, particulate adsorption, and flow rate dynamics. Features structured media strata (activated granular carbon, fine silica, coarse quartz) to clarify greywater and urban runoff prior to secondary agricultural or potable disinfection.",
      technicalSpecs: {
        filtrationStages: "Triple-Stage Gradient (Coarse Sediment, Sand, Activated Carbon)",
        flowDynamics: "Characterized Gravity Flow & Pump-Assisted Circulation",
        monitoring: "Differential Flow Rate & Pre/Post Turbidity Analysis",
        application: "Pre-Treatment for Hydroponic Irrigation & Rainwater Harvesting"
      },
      tags: ["Water Filtration", "Clean Tech", "Sediment Separation", "Environmental"],
      github: "https://github.com/linkedwithishaan",
      metrics: "High-efficiency mechanical particulate removal across media gradient.",
      image: "/assets/drive/water-filtration-rig.jpg"
    },
    {
      id: "esp32-marauder-apparatus",
      title: "ESP32 Marauder Wireless Environment Diagnostic Terminal",
      domain: "Communication & Signal Processing Systems",
      domainId: "communication-dsp",
      badge: "802.11 / BLE / Packet Sniffing",
      lead: "Ishan Chaturvedi",
      collaborators: ["Cybersecurity & Hardware Fellows"],
      status: "Bench Tested",
      abstract: "A portable, self-contained wireless audit device built around the ESP32 dual-core microcontroller and an SPI color TFT display. Executes 802.11 b/g/n packet sniffing, Wi-Fi beacon inspection, BLE advertising scans, and wireless network diagnostic auditing with full on-screen visual telemetry.",
      technicalSpecs: {
        siliconPlatform: "ESP32 Xtensa Dual-Core 32-Bit Microcontroller",
        displayInterface: "ILI9341 2.8\" Color TFT via High-Speed 4-Wire SPI",
        radiosInspected: "2.4 GHz 802.11 b/g/n Wi-Fi & Bluetooth 4.2 LE",
        formFactor: "Self-Contained Handheld with LiPo Charge Controller"
      },
      tags: ["ESP32", "Marauder", "Wireless Diagnostics", "Packet Sniffing", "BLE"],
      github: "https://github.com/linkedwithishaan",
      metrics: "Autonomous portable wireless packet capture without computer tether.",
      image: "/assets/drive/esp32-module.jpg"
    },
    {
      id: "biometric-rfid-access",
      title: "Integrated Biometric Fingerprint & 13.56 MHz RFID Terminal",
      domain: "Electronics, IoT & Embedded Systems",
      domainId: "electronics-embedded",
      badge: "Biometrics / RFID / Embedded C++",
      lead: "Ishan Chaturvedi",
      collaborators: ["Aryan Singh", "Dhruv Ghosal", "Keshav Gupta"],
      status: "Deployed Prototype",
      abstract: "A standalone access validation and attendance terminal engineered for the MSIT ONGC Lab, integrating an optical biometric fingerprint scanner with an RC522 13.56 MHz RFID card reader and real-time color status display. Managed by an ESP microcontroller with cloud telemetry synchronization to Vercel and local non-volatile credential verification.",
      technicalSpecs: {
        rfidTransceiver: "MFRC522 13.56 MHz Contactless Smart Card Reader (SPI)",
        biometricSensor: "Optical Fingerprint Scanner with Minutiae Extraction DSP",
        userInterface: "Color TFT Display with MSIT ONGC Lab Auto Check-In/Out UI",
        cloudSync: "Vercel Real-Time Telemetry & Local EEPROM Credential Cache"
      },
      tags: ["RFID", "Fingerprint", "Biometrics", "Embedded C++", "Access Control"],
      github: "https://github.com/linkedwithishaan/FINGERPRINT-BASED-ATTENDANCE-SYSTEM-",
      metrics: "Sub-second dual-factor authentication with Vercel cloud synchronization.",
      image: "/assets/drive/biometric-rfid.jpg"
    },
    {
      id: "autonomous-obstacle-car",
      title: "Ultrasonic Sonar Obstacle-Avoiding Robotic Platform",
      domain: "Robotics and Intelligent Automation",
      domainId: "robotics-automation",
      badge: "Sonar / Pan-Tilt / Autonomous",
      lead: "Ishan Chaturvedi",
      collaborators: ["Robotics Cohort"],
      status: "Operational Platform",
      abstract: "A self-navigating wheeled mobile robot that utilizes an HC-SR04 ultrasonic distance sensor mounted on an active servo panning horn. Continuously surveys the forward hemisphere, computes obstacle distance vectors, and executes non-holonomic avoidance maneuvers through an L293D motor driver.",
      technicalSpecs: {
        rangingSensor: "HC-SR04 40 kHz Ultrasonic Transducer (2cm – 400cm)",
        scanningMount: "180° Micro-Servo Azimuth Panning Bracket",
        driveArchitecture: "4-Wheel DC Gearmotors Driven by L293D H-Bridge",
        navigationAlgorithm: "Forward Distance Thresholding & Comparative Side Clearances"
      },
      tags: ["Obstacle Avoidance", "Ultrasonic", "Robotic Car", "L293D", "Arduino"],
      github: "https://github.com/linkedwithishaan/ROBOTIC-CAR",
      metrics: "Proactive distance detection from 2cm to 4m with real-time steering.",
      image: "/assets/drive/obstacle-car.jpg"
    }
  ],

  sessions: [
    {
      id: "sess-01",
      title: "Deconstructing the Smith Chart & Microwave Impedance Matching",
      speaker: "Ishaan Chaturvedi",
      role: "Co-Founder",
      date: "October 18, 2025",
      type: "Masterclass & Lab Demo",
      domain: "Radio Frequency",
      summary: "Derivation of normalized impedance coordinates, bilinear Möbius transformations, and physical matching networks (L-match, stub tuners) using a NanoVNA vector network analyzer.",
      topics: ["Möbius conformal mapping of complex reflection coefficient \\Gamma", "Quarter-wave transformers & microstrip transmission lines", "Hands-on S11 scattering parameter measurements"],
      slidesUrl: "#",
      notesAvailable: true
    },
    {
      id: "sess-02",
      title: "Autograd from Scratch: Rebuilding Backpropagation in Pure C",
      speaker: "Dhruv Ghoshal",
      role: "Co-Founder",
      date: "October 04, 2025",
      type: "Hands-on Workshop",
      domain: "AI / Systems",
      summary: "Step-by-step mathematical derivation and code implementation of a reverse-mode automatic differentiation engine. Members built computational graphs, topological sort dispatch, and backward gradient passes.",
      topics: ["Chain rule as adjoint vector-Jacobian products (VJPs)", "Dynamic computation graph memory allocation without leaks", "Training a multi-layer perceptron on non-linear spiral boundaries"],
      slidesUrl: "#",
      notesAvailable: true
    },
    {
      id: "sess-03",
      title: "Silicon Insecurity: Voltage Glitching & Hardware Bus Sniffing",
      speaker: "Keshav Gupta",
      role: "Co-Founder",
      date: "September 20, 2025",
      type: "Hardware Teardown",
      domain: "Cybersecurity",
      summary: "Live demonstration of VCC power line glitching to bypass microcontroller bootloader security fuses. Analysis of SPI, I2C, and UART bus captures using Saleae logic analyzers.",
      topics: ["Clock jitter and brownout induced instruction skips", "Extracting AES keys from unprotected flash firmware", "Defense mechanisms: hardware watchdogs and tamper meshes"],
      slidesUrl: "#",
      notesAvailable: true
    },
    {
      id: "sess-04",
      title: "Symmetries & Lie Groups in Physical Computing",
      speaker: "Dhruv Ghoshal",
      role: "Co-Founder",
      date: "September 06, 2025",
      type: "Mathematics Seminar",
      domain: "Higher Mathematics",
      summary: "An introduction to continuous symmetry groups SO(3), SE(3), and SU(2). How geometric deep learning incorporates rotational equivariance into computer vision and 3D molecular models.",
      topics: ["Matrix Lie algebras and infinitesimal generators", "Noether's theorem connecting conservation laws to symmetry", "Equivariant convolutions over spherical coordinate spaces"],
      slidesUrl: "#",
      notesAvailable: true
    },
    {
      id: "sess-05",
      title: "KiCad 8 Masterclass: High-Speed Differential Pair Routing",
      speaker: "Keshav Gupta & Ishaan Chaturvedi",
      role: "Founders",
      date: "August 23, 2025",
      type: "Practical Workshop",
      domain: "Electronics",
      summary: "Designing a 4-layer microcontroller breakout board with controlled 90-ohm USB differential impedance. Calculating return path discontinuities, via antipads, and EMI shielding planes.",
      topics: ["Layer stackup design for JLC2313 dielectric substrates", "Length matching, meander tuning, and phase skew control", "Generating manufacturing Gerber and pick-and-place packages"],
      slidesUrl: "#",
      notesAvailable: true
    },
    {
      id: "sess-06",
      title: "Paper Reading: Kolmogorov-Arnold Networks (KAN) vs MLPs",
      speaker: "Reading Group",
      role: "Melerigamy Study Circle",
      date: "August 09, 2025",
      type: "Reading Seminar",
      domain: "Scientific AI",
      summary: "In-depth review of the seminal KAN paper (Liu et al.). Mathematical breakdown of learnable B-spline activation functions on edges vs fixed activations on nodes, followed by symbolic regression benchmarks.",
      topics: ["Kolmogorov-Arnold representation theorem foundations", "Catastrophic forgetting resilience in spline networks", "Discovering physical laws from noisy scientific datasets"],
      slidesUrl: "#",
      notesAvailable: true
    },
    {
      id: "sess-07",
      title: "Radio Frequency Demystified: The Physics of Antennas",
      speaker: "Ishaan Chaturvedi",
      role: "Co-Founder",
      date: "July 26, 2025",
      type: "Foundational Lecture",
      domain: "Radio Frequency",
      summary: "Understanding the transition from guided TEM waves inside coaxial transmission lines to unguided radiative fields in free space. Radiation resistance, Poynting vectors, and antenna gain.",
      topics: ["Hertzian dipole near-field vs far-field boundary conditions", "Antenna polarization, axial ratio, and cross-talk suppression", "Building a 137 MHz QFH antenna for NOAA weather satellite reception"],
      slidesUrl: "#",
      notesAvailable: true
    },
    {
      id: "sess-08",
      title: "Introduction to GDB, Radare2 & Binary Reverse Engineering",
      speaker: "Keshav Gupta",
      role: "Co-Founder",
      date: "July 12, 2025",
      type: "Hands-on Workshop",
      domain: "Cybersecurity",
      summary: "Disassembling x86-64 Linux ELF binaries. Stack layout, calling conventions, buffer overflows, return-oriented programming (ROP), and defeating basic ASLR/stack canary protections.",
      topics: ["Assembly register discipline (AMD64 ABI)", "Constructing an interactive exploit script with pwntools", "Static vs dynamic binary analysis workflows"],
      slidesUrl: "#",
      notesAvailable: true
    }
  ],

  members: [
    {
      id: "mem-01",
      name: "Aarav Sharma",
      cohort: "First-Year B.Tech",
      domain: "Radio Frequency & Wireless",
      domainId: "rf-wireless",
      focus: "SDR Signal Demodulation & ADS-B Trackers",
      skills: ["GNU Radio", "C++", "DSP Algorithms", "RTL-SDR"],
      activeProject: "Helios Passive Radar & FM Beamformer",
      github: "https://github.com/aarav-sharma-rf",
      linkedin: "https://www.linkedin.com/in/aarav-sharma-mg/",
      bio: "Fascinated by high-frequency signal processing and RF spectrum surveillance. Currently building a multichannel ADS-B aircraft telemetry decoder in GNU Radio."
    },
    {
      id: "mem-02",
      name: "Ananya Sen",
      cohort: "First-Year B.Tech",
      domain: "Artificial Intelligence & ML",
      domainId: "ai-ml",
      focus: "Model Quantization & Symbolic Regression with KANs",
      skills: ["PyTorch", "C99", "Linear Algebra", "JAX"],
      activeProject: "TensorPrune: INT4 Microcontroller Quantization",
      github: "https://github.com/ananya-sen-ml",
      linkedin: "https://www.linkedin.com/in/ananya-sen-mg/",
      bio: "Focuses on mathematically rigorous neural network pruning and efficient edge inference. Exploring spline-based Kolmogorov-Arnold neural architectures."
    },
    {
      id: "mem-03",
      name: "Arjun Rao",
      cohort: "First-Year B.Tech",
      domain: "Electronics & Embedded Systems",
      domainId: "electronics-embedded",
      focus: "FPGA Digital Design & High-Speed Memory Controllers",
      skills: ["SystemVerilog", "KiCad", "Artix-7", "SPI/I2C"],
      activeProject: "Hyperion RV32I Processor Memory Subsystem",
      github: "https://github.com/arjun-rao-fpga",
      linkedin: "https://www.linkedin.com/in/arjun-rao-mg/",
      bio: "Passionate about low-level digital logic. Designed a custom SDRAM controller in Verilog with arbitration for embedded microprocessors."
    },
    {
      id: "mem-04",
      name: "Tanvi Desai",
      cohort: "First-Year B.Tech",
      domain: "Radio Frequency & Wireless",
      domainId: "rf-wireless",
      focus: "Microstrip Patch Antennas & EM Simulation",
      skills: ["OpenEMS", "Python", "Smith Chart", "VNA Testing"],
      activeProject: "2.4 GHz Phased Array Beamsteering Feeder",
      github: "https://github.com/tanvi-desai-rf",
      linkedin: "https://www.linkedin.com/in/tanvi-desai-mg/",
      bio: "Investigating planar antenna geometries and impedance matching. Simulating microstrip patch arrays for directional WiFi packet capture."
    },
    {
      id: "mem-05",
      name: "Kartik Pillai",
      cohort: "First-Year B.Tech",
      domain: "Artificial Intelligence & ML",
      domainId: "ai-ml",
      focus: "TinyML Embedded Inference & Wake-Word Engines",
      skills: ["Embedded C", "TensorFlow Lite", "ARM CMSIS", "DSP"],
      activeProject: "Sub-Milliwatt Acoustic Wake-Word Engine",
      github: "https://github.com/kartik-pillai-ml",
      linkedin: "https://www.linkedin.com/in/kartik-pillai-mg/",
      bio: "Building zero-latency micro-wake word engines running on bare-metal Cortex-M4 processors with under 10 KB SRAM consumption."
    },
    {
      id: "mem-06",
      name: "Neha Nambiar",
      cohort: "First-Year B.Tech",
      domain: "Electronics & Embedded Systems",
      domainId: "electronics-embedded",
      focus: "4-Layer PCB Design & Power Integrity Analysis",
      skills: ["KiCad 8", "LTSpice", "Power Systems", "Soldering"],
      activeProject: "Ultra-Low Noise LDO Power Distribution Board",
      github: "https://github.com/neha-nambiar-ee",
      linkedin: "https://www.linkedin.com/in/neha-nambiar-mg/",
      bio: "Dedicated to mixed-signal PCB layout and power distribution networks. Engineering sub-millivolt ripple power supplies for RF front-ends."
    },
    {
      id: "mem-07",
      name: "Pooja Reddy",
      cohort: "First-Year B.Tech",
      domain: "Cybersecurity & Systems",
      domainId: "cybersecurity-systems",
      focus: "Post-Quantum Lattice Schemes & Constant-Time Assembly",
      skills: ["Rust", "x86-64 ASM", "Cryptography", "C"],
      activeProject: "ZeroTrace: ML-KEM Constant-Time Polynomial Engine",
      github: "https://github.com/pooja-reddy-sec",
      linkedin: "https://www.linkedin.com/in/pooja-reddy-mg/",
      bio: "Auditing cryptographic code against cache timing side channels. Implemented Number Theoretic Transform (NTT) algorithms in optimized assembly."
    },
    {
      id: "mem-08",
      name: "Rohan Mehta",
      cohort: "First-Year B.Tech",
      domain: "Radio Frequency & Wireless",
      domainId: "rf-wireless",
      focus: "Bistatic Doppler Processing & CAF Acceleration",
      skills: ["C++20", "FFTW", "CUDA", "RF Analysis"],
      activeProject: "Helios GPU Accelerated Ambiguity Surface Engine",
      github: "https://github.com/rohan-mehta-rf",
      linkedin: "https://www.linkedin.com/in/rohan-mehta-mg/",
      bio: "High-performance computing enthusiast applying CUDA kernels to compute real-time Cross-Ambiguity surfaces for passive radar signal streams."
    },
    {
      id: "mem-09",
      name: "Vikramaditya Bose",
      cohort: "First-Year B.Tech",
      domain: "Higher Mathematics",
      domainId: "higher-mathematics",
      focus: "Algebraic Topology & Manifold Learning",
      skills: ["Python", "Ripser", "Homological Algebra", "LaTeX"],
      activeProject: "Noether: Vietoris-Rips Complexes for Sensor Meshes",
      github: "https://github.com/vikram-bose-math",
      linkedin: "https://www.linkedin.com/in/vikram-bose-mg/",
      bio: "Exploring abstract mathematics and its surprising power in signal detection. Currently researching simplicial complexes and barcode persistence."
    },
    {
      id: "mem-10",
      name: "Divya Krishnan",
      cohort: "First-Year B.Tech",
      domain: "Scientific & Technical Research",
      domainId: "scientific-research",
      focus: "Cosmic Ray Scintillation & Silicon Photomultipliers",
      skills: ["Analog Circuits", "Fast Pulse Electronics", "Python", "ROOT"],
      activeProject: "Chronos Cosmic Ray Telescope Array",
      github: "https://github.com/divya-krishnan-rs",
      linkedin: "https://www.linkedin.com/in/divya-krishnan-mg/",
      bio: "Building low-cost particle physics instrumentation. Fabricating plastic scintillator paddles connected to SensL SiPMs to measure cosmic muon fluxes."
    },
    {
      id: "mem-11",
      name: "Kabir Nair",
      cohort: "First-Year B.Tech",
      domain: "Cybersecurity & Systems",
      domainId: "cybersecurity-systems",
      focus: "Silicon Voltage Glitching & Flash Forensics",
      skills: ["GDB", "Ghidra", "Saleae Logic", "Microcontroller HW"],
      activeProject: "Hardware Glitcher Trigger Board with RP2040",
      github: "https://github.com/kabir-nair-sec",
      linkedin: "https://www.linkedin.com/in/kabir-nair-mg/",
      bio: "Specializes in physical security boundaries. Created an open-source Crowbar voltage fault injection tool to analyze protected bootloaders."
    },
    {
      id: "mem-12",
      name: "Devansh Patel",
      cohort: "First-Year B.Tech",
      domain: "Artificial Intelligence & ML",
      domainId: "ai-ml",
      focus: "Sparse Matrix Multiplication & Custom GEMM Kernels",
      skills: ["C99", "AVX2", "PyTorch Internals", "Profiling"],
      activeProject: "MicroGEMM: Cache-Optimized Tensor Multiplication",
      github: "https://github.com/devansh-patel-ml",
      linkedin: "https://www.linkedin.com/in/devansh-patel-mg/",
      bio: "Obsessed with mechanical sympathy and low-level computer architecture. Writing cache-blocked BLAS routines tailored for small microcontroller L1 caches."
    },
    {
      id: "mem-13",
      name: "Siddharth Jain",
      cohort: "First-Year B.Tech",
      domain: "Electronics & Embedded Systems",
      domainId: "electronics-embedded",
      focus: "RISC-V Hazard Detection & Branch Predictors",
      skills: ["Verilog", "GTKWave", "ISA Emulation", "C"],
      activeProject: "Hyperion RV32 2-Bit Saturating Counter Predictor",
      github: "https://github.com/siddharth-jain-ee",
      linkedin: "https://www.linkedin.com/in/siddharth-jain-mg/",
      bio: "Simulating processor architectures and pipeline interlocks. Built a cycle-accurate functional emulator for the RISC-V base integer specification."
    },
    {
      id: "mem-14",
      name: "Meera Iyer",
      cohort: "First-Year B.Tech",
      domain: "Higher Mathematics",
      domainId: "higher-mathematics",
      focus: "Spectral Graph Theory & Graph Laplacians",
      skills: ["Julia", "Linear Algebra", "Graph Theory", "Optimization"],
      activeProject: "Chebyshev Spectral Filtering on Distributed Networks",
      github: "https://github.com/meera-iyer-math",
      linkedin: "https://www.linkedin.com/in/meera-iyer-mg/",
      bio: "Investigating harmonic analysis on discrete graphs. Designing decentralized consensus protocols based on Cheeger inequalities and graph eigenvalues."
    },
    {
      id: "mem-15",
      name: "Pranav Joshi",
      cohort: "First-Year B.Tech",
      domain: "Scientific & Technical Research",
      domainId: "scientific-research",
      focus: "Picosecond Tapped Delay Lines & High-Resolution Timing",
      skills: ["FPGA Carry Chains", "High-Speed Digitization", "C++"],
      activeProject: "Chronos FPGA Vernier Interpolator Core",
      github: "https://github.com/pranav-joshi-rs",
      linkedin: "https://www.linkedin.com/in/pranav-joshi-mg/",
      bio: "Experimenting with FPGA internal carry chains as ultra-fine delay lines for sub-100 picosecond event time-stamping."
    },
    {
      id: "mem-16",
      name: "Yashvardhan Kulkarni",
      cohort: "First-Year B.Tech",
      domain: "Cybersecurity & Systems",
      domainId: "cybersecurity-systems",
      focus: "Linux Kernel Exploitation & eBPF Observability",
      skills: ["Kernel C", "eBPF", "GDB", "Memory Safety"],
      activeProject: "eBPF-based Sub-Millisecond Rootkit Sensor",
      github: "https://github.com/yash-kulkarni-sec",
      linkedin: "https://www.linkedin.com/in/yash-kulkarni-mg/",
      bio: "Probing modern OS privilege boundaries. Using extended Berkeley Packet Filters (eBPF) to detect unauthorized kernel hook modifications."
    },
    {
      id: "mem-17",
      name: "Rhea Sengupta",
      cohort: "First-Year B.Tech",
      domain: "Scientific & Technical Research",
      domainId: "scientific-research",
      focus: "Numerical Fluid Dynamics & Lattice Boltzmann",
      skills: ["Python", "OpenFOAM", "Scientific Computing", "NumPy"],
      activeProject: "Microfluidic Shear Stress Simulation in Porous Media",
      github: "https://github.com/rhea-sengupta-rs",
      linkedin: "https://www.linkedin.com/in/rhea-sengupta-mg/",
      bio: "Modeling two-phase fluid mechanics using Lattice Boltzmann equations. Simulating boundary layer drag on experimental aerodynamic foils."
    },
    {
      id: "mem-18",
      name: "Aditya Verma",
      cohort: "First-Year B.Tech",
      domain: "Radio Frequency & Wireless",
      domainId: "rf-wireless",
      focus: "Quadrifilar Helix Antennas for Satellites",
      skills: ["3D RF CAD", "Coaxial Baluns", "SDRSharp", "C++"],
      activeProject: "137 MHz Circularly Polarized Weather Satellite Station",
      github: "https://github.com/aditya-verma-rf",
      linkedin: "https://www.linkedin.com/in/aditya-verma-mg/",
      bio: "Crafting resonant helical antennas for low-earth-orbit telemetry reception. Built an automated APT image decoding pipeline for NOAA satellites."
    },
    {
      id: "mem-19",
      name: "Ishita Mukherjee",
      cohort: "First-Year B.Tech",
      domain: "Artificial Intelligence & ML",
      domainId: "ai-ml",
      focus: "State Space Models (SSMs) & Linear Transformers",
      skills: ["PyTorch", "Mamba Architecture", "Python", "CUDA Basics"],
      activeProject: "Mamba-Lite: Embedded Sequence Model on Microcontroller",
      github: "https://github.com/ishita-mukherjee-ml",
      linkedin: "https://www.linkedin.com/in/ishita-mukherjee-mg/",
      bio: "Investigating alternatives to quadratic self-attention. Implementing discretized continuous-time state equations for real-time sensor time series."
    },
    {
      id: "mem-20",
      name: "Harsh Vardhan",
      cohort: "First-Year B.Tech",
      domain: "Electronics & Embedded Systems",
      domainId: "electronics-embedded",
      focus: "Precision Analog Instrumentation & Chopper Amplifiers",
      skills: ["Analog Design", "Operational Amplifiers", "SPICE", "PCB"],
      activeProject: "Sub-Microvolt Electrometer Front End",
      github: "https://github.com/harsh-vardhan-ee",
      linkedin: "https://www.linkedin.com/in/harsh-vardhan-mg/",
      bio: "Focuses on the extreme edges of analog signal fidelity: guarding rings, zero-drift chopper amplifiers, and femtoampere leakage measurement."
    },
    {
      id: "mem-21",
      name: "Shruti Hegde",
      cohort: "First-Year B.Tech",
      domain: "Cybersecurity & Systems",
      domainId: "cybersecurity-systems",
      focus: "Firmware Reverse Engineering & Ghidra Loaders",
      skills: ["Ghidra", "ARM Thumb2", "Python", "SPI Flash"],
      activeProject: "Automated Bare-Metal Peripheral Vector Extraction",
      github: "https://github.com/shruti-hegde-sec",
      linkedin: "https://www.linkedin.com/in/shruti-hegde-mg/",
      bio: "Reversing IoT firmware binaries with missing headers. Developing automated Ghidra memory map scripts to detect Cortex-M vector tables."
    },
    {
      id: "mem-22",
      name: "Kunal Bansal",
      cohort: "First-Year B.Tech",
      domain: "Higher Mathematics",
      domainId: "higher-mathematics",
      focus: "Differential Geometry & Exterior Calculus",
      skills: ["Differential Forms", "Symplectic Geometry", "Julia", "Math"],
      activeProject: "Hamiltonian Integrators for Orbital Mechanics",
      github: "https://github.com/kunal-bansal-math",
      linkedin: "https://www.linkedin.com/in/kunal-bansal-mg/",
      bio: "Studying symplectic geometry and energy-preserving numerical integrators. Applying differential forms to computational field theory."
    },
    {
      id: "mem-23",
      name: "Tara Sundaram",
      cohort: "First-Year B.Tech",
      domain: "Scientific & Technical Research",
      domainId: "scientific-research",
      focus: "FTIR Spectroscopy Peak Deconvolution",
      skills: ["SciPy", "Spectroscopy", "Signal Smoothing", "Python"],
      activeProject: "OpenFTIR: High-Precision Spectral Peak Deconvolution",
      github: "https://github.com/tara-sundaram-rs",
      linkedin: "https://www.linkedin.com/in/tara-sundaram-mg/",
      bio: "Developing algorithms for baseline correction and Lorentzian-Gaussian deconvolution of laboratory spectroscopic measurements."
    },
    {
      id: "mem-24",
      name: "Varun Chopra",
      cohort: "First-Year B.Tech",
      domain: "Radio Frequency & Wireless",
      domainId: "rf-wireless",
      focus: "Direct Digital Synthesizers (DDS) & Phase Noise",
      skills: ["AD9850", "Spectrum Analyzers", "Phase Locked Loops", "C++"],
      activeProject: "Sub-Hertz Agile Local Oscillator Synthesizer",
      github: "https://github.com/varun-chopra-rf",
      linkedin: "https://www.linkedin.com/in/varun-chopra-mg/",
      bio: "Constructing ultra-clean local oscillator signal sources using direct digital synthesis with passive LC reconstruction filters."
    },
    {
      id: "mem-25",
      name: "Lavanya Natarajan",
      cohort: "First-Year B.Tech",
      domain: "Artificial Intelligence & ML",
      domainId: "ai-ml",
      focus: "Mechanistic Interpretability & Attention Heads",
      skills: ["TransformerLens", "Python", "Linear Probing", "PyTorch"],
      activeProject: "Induction Head Identification in Small Language Models",
      github: "https://github.com/lavanya-n-ml",
      linkedin: "https://www.linkedin.com/in/lavanya-natarajan-mg/",
      bio: "Probing internal representations of neural networks. Tracking how induction heads form in 2-layer transformers during early pre-training."
    },
    {
      id: "mem-26",
      name: "Gaurav Bhatt",
      cohort: "First-Year B.Tech",
      domain: "Electronics & Embedded Systems",
      domainId: "electronics-embedded",
      focus: "Motor Drive Inverters & Field-Oriented Control",
      skills: ["STM32", "SVPWM", "Inverter Power Stages", "C"],
      activeProject: "Sensorless BLDC Field-Oriented Control Firmware",
      github: "https://github.com/gaurav-bhatt-ee",
      linkedin: "https://www.linkedin.com/in/gaurav-bhatt-mg/",
      bio: "Writing real-time vector control algorithms for brushless motors. Calculating Park and Clarke coordinate transformations in fixed-point math."
    },
    {
      id: "mem-27",
      name: "Sanya Kapoor",
      cohort: "First-Year B.Tech",
      domain: "Cybersecurity & Systems",
      domainId: "cybersecurity-systems",
      focus: "RF Protocol Fuzzing & Keystroke Injection",
      skills: ["HackRF", "Universal Radio Hacker", "Python", "Protocols"],
      activeProject: "2.4 GHz Wireless Keyboard Security Audit",
      github: "https://github.com/sanya-kapoor-sec",
      linkedin: "https://www.linkedin.com/in/sanya-kapoor-mg/",
      bio: "Reverse-engineering proprietary 2.4 GHz wireless protocols. Uncovered unencrypted keystroke transmission vulnerabilities in consumer wireless mice."
    },
    {
      id: "mem-28",
      name: "Nikhil Menon",
      cohort: "First-Year B.Tech",
      domain: "Higher Mathematics",
      domainId: "higher-mathematics",
      focus: "Complex Analysis & Conformal Mappings",
      skills: ["Conformal Mapping", "Complex Variables", "Mathematica", "C++"],
      activeProject: "Conformal Transformation Tool for Electrostatic Fields",
      github: "https://github.com/nikhil-menon-math",
      linkedin: "https://www.linkedin.com/in/nikhil-menon-mg/",
      bio: "Investigating analytic functions and conformal mappings. Solving complex boundary value problems for eccentric transmission lines."
    },
    {
      id: "mem-29",
      name: "Kavya Murthy",
      cohort: "First-Year B.Tech",
      domain: "Scientific & Technical Research",
      domainId: "scientific-research",
      focus: "Silicon PIN Photodiode Particle Counters",
      skills: ["Charge Sensitive Pre-amps", "Pulse Shapers", "Analog"],
      activeProject: "Low-Cost Alpha & Beta Radiation Pulse Counter",
      github: "https://github.com/kavya-murthy-rs",
      linkedin: "https://www.linkedin.com/in/kavya-murthy-mg/",
      bio: "Designing discrete charge-sensitive amplifiers to detect ionized electrons generated by radioactive particles inside reverse-biased photodiodes."
    },
    {
      id: "mem-30",
      name: "Rishi Trivedi",
      cohort: "First-Year B.Tech",
      domain: "Radio Frequency & Wireless",
      domainId: "rf-wireless",
      focus: "Interdigital Bandpass Filters & Stripline Resonators",
      skills: ["KiCad Microwave", "Microstrip Resonators", "VNA", "EM Modeling"],
      activeProject: "1.420 GHz Hydrogen Line Low-Noise Microwave Filter",
      github: "https://github.com/rishi-trivedi-rf",
      linkedin: "https://www.linkedin.com/in/rishi-trivedi-mg/",
      bio: "Crafting tuned planar cavity filters for radio astronomy. Optimizing passband insertion loss around the 21cm neutral hydrogen emission line."
    },
    {
      id: "mem-31",
      name: "Deepak Choudhary",
      cohort: "First-Year B.Tech",
      domain: "Electronics & Embedded Systems",
      domainId: "electronics-embedded",
      focus: "Open-Source Logic Analyzers & High-Speed USB FIFO",
      skills: ["FT232H", "Logic Analysis", "Sigrok", "Verilog"],
      activeProject: "100 MSps 8-Channel USB Logic Probe",
      github: "https://github.com/deepak-choudhary-ee",
      linkedin: "https://www.linkedin.com/in/deepak-choudhary-mg/",
      bio: "Developing open hardware test bench instrumentation. Streaming digital trace buffers over high-speed USB interfaces into PulseView."
    },
    {
      id: "mem-32",
      name: "Ayesha Qureshi",
      cohort: "First-Year B.Tech",
      domain: "Artificial Intelligence & ML",
      domainId: "ai-ml",
      focus: "Graph Neural Networks for Electronic Circuit Schematics",
      skills: ["PyTorch Geometric", "Netlist Parsing", "NetworkX", "Python"],
      activeProject: "Netlist2Vec: Automated SPICE Property Predictor",
      github: "https://github.com/ayesha-qureshi-ml",
      linkedin: "https://www.linkedin.com/in/ayesha-qureshi-mg/",
      bio: "Translating electronic schematic netlists into directed graphs to predict parasitic capacitances and high-frequency resonance with GNNs."
    }
  ],

  achievements: [
    {
      id: "icaia-2025-research",
      title: "Research Paper Presentation at ICAIA 2025",
      category: "research",
      categoryLabel: "Peer-Reviewed Research",
      year: "2025",
      issuer: "International Conference on Artificial Intelligence and Applications (MSIT)",
      badge: "Conference Proceedings",
      abstract: "Authored and presented peer-reviewed research on applied machine learning and intelligent systems, demonstrating autonomous sensor integration and predictive analytics at MSIT's flagship international symposium.",
      impact: "Defended before academic faculty, visiting research scientists, and conference delegates.",
      tags: ["Machine Learning", "Autonomous Systems", "Applied Research", "Conference Proceedings"],
      metrics: "Oral Research Defense",
      details: {
        overview: "The International Conference on Artificial Intelligence and Applications (ICAIA) is MSIT's premier peer-reviewed forum convening machine learning practitioners and researchers. The accepted research focused on closed-loop telemetry, autonomous data acquisition, and real-time inference.",
        highlights: [
          "Peer-reviewed paper accepted and published in symposium proceedings",
          "Presented live research defense at MSIT campus before academic peer committee",
          "Demonstrated practical sensor fusion and algorithmic inference on physical hardware",
          "Collaborative dialogue with visiting researchers and industry delegates"
        ],
        relevance: "Establishes Melerigamy's commitment to producing publication-grade academic engineering and formal scientific contributions alongside pragmatic hardware builds."
      }
    },
    {
      id: "ncsc-national-selection",
      title: "National Children's Science Congress (NCSC) Selection",
      category: "national",
      categoryLabel: "National Honor",
      year: "2024",
      issuer: "National Council for Science and Technology Communication (NCSTC)",
      badge: "Apex Science Forum",
      abstract: "Selected at the prestigious national level for demonstrating first-principles scientific inquiry and technical innovation in solving empirical and environmental engineering challenges.",
      impact: "National-level selection representing competitive regional cohorts.",
      tags: ["Scientific Inquiry", "National Platform", "Applied Physics", "Empirical Research"],
      metrics: "National Selectee",
      details: {
        overview: "The National Children's Science Congress (NCSC) is India's flagship scientific platform governed by NCSTC, aimed at identifying young minds pioneering empirical scientific investigations and innovative technical problem-solving.",
        highlights: [
          "Rigorous multi-stage qualification from regional to national platform",
          "Evaluation based on empirical methodology, scientific logging, and innovative system design",
          "Exhibited working hardware prototype addressing real-world environmental challenges",
          "Recognition by senior scientists and educational leaders"
        ],
        relevance: "Validates the foundational scientific methodology and investigative rigor that underpins all Melerigamy lab projects."
      }
    },
    {
      id: "rbvp-ministry-education",
      title: "Rashtriya Bal Vaigyanik Puraskar (RBVP)",
      category: "national",
      categoryLabel: "National Honor",
      year: "2024",
      issuer: "Ministry of Education & NCERT",
      badge: "Ministry Initiative",
      abstract: "Nominated and selected under the Ministry of Education's premier national science initiative celebrating high-impact scientific innovation and multidisciplinary student research.",
      impact: "Official selection under Ministry of Education national platform.",
      tags: ["Ministry of Education", "National Recognition", "Scientific Innovation", "Youth Engineering"],
      metrics: "Ministry Selectee",
      details: {
        overview: "Rashtriya Bal Vaigyanik Puraskar (formerly Jawaharlal Nehru National Science Exhibition) is organized by the Ministry of Education and NCERT to showcase premier research exhibits across the country.",
        highlights: [
          "Selected under national ministry science forum",
          "Demonstrated interdisciplinary engineering combining electronics, automation, and applied physics",
          "Engaged with premier pedagogical mentors and national science evaluators",
          "Certificate of Excellence awarded for exceptional engineering craft"
        ],
        relevance: "Exemplifies our core philosophy: synthesizing hard technical craft with genuine intellectual curiosity to build meaningful systems."
      }
    },
    {
      id: "drdo-defense-labs",
      title: "DRDO Advanced Defense Labs Technical Immersion",
      category: "research",
      categoryLabel: "Defense & Research",
      year: "2024 - 2025",
      issuer: "Defence Research and Development Organisation (DRDO)",
      badge: "Defense Labs Immersion",
      abstract: "Technical visits and advanced engineering engagement at DRDO's premier laboratories: LRDE (Electronics and Radar Development Establishment, Bangalore) focusing on phased array radar systems, and DIPR (Delhi) for defense systems research.",
      impact: "Direct immersion with primary defense hardware architectures and radar telemetry.",
      tags: ["DRDO LRDE", "Radar Telemetry", "Defense Systems", "Microwave Electronics"],
      metrics: "LRDE Bangalore & DIPR Delhi",
      details: {
        overview: "Engagement with top DRDO facilities provided firsthand technical exposure to national-scale radar systems, signal telemetry, microwave antennas, and mission-critical hardware architectures.",
        highlights: [
          "On-site technical immersion at LRDE Bangalore (Electronics and Radar Development Establishment)",
          "Deep dive into phased array antennas, software-defined receiver architectures, and pulse-Doppler processing",
          "Technical visit to DIPR Delhi engaging with defense research frameworks",
          "Applied insights directly informed Melerigamy's RF and embedded telemetry projects"
        ],
        relevance: "Bridges student engineering with institutional-grade aerospace and defense electronics standards."
      }
    },
    {
      id: "csir-npl-competition-winner",
      title: "CSIR-National Physical Laboratory Competition Laurels",
      category: "research",
      categoryLabel: "Scientific Research",
      year: "2024",
      issuer: "Council of Scientific and Industrial Research (CSIR-NPL & CSIR-CRRI)",
      badge: "CSIR Competition Winner",
      abstract: "Achieved winning honors in national technical competitions hosted by CSIR-NPL, backed by immersion in premier research environments spanning precision metrology and infrastructure systems at CSIR-CRRI.",
      impact: "Top competition award in national laboratory scientific challenge.",
      tags: ["CSIR-NPL", "Precision Metrology", "Applied Physics", "CSIR-CRRI"],
      metrics: "Top Competition Award",
      details: {
        overview: "CSIR-NPL is India's National Metrology Institute custodian of measurement standards. Participating in CSIR-NPL competitions demands the highest calibration accuracy, measurement precision, and scientific rigor.",
        highlights: [
          "Awarded winning position in competitive technical challenge hosted by CSIR-NPL",
          "Explored state-of-the-art standards laboratories and primary measurement equipment",
          "Research exposure across CSIR-CRRI (Central Road Research Institute) engineering labs",
          "Integrated precision sensor calibration protocols into Melerigamy hardware pipelines"
        ],
        relevance: "Instills a culture of measurement accuracy, sensor calibration, and empirical honesty across all lab experiments."
      }
    },
    {
      id: "melerigamy-100-mentorship",
      title: "100+ Undergraduates Mentored in Hardware & Web3",
      category: "mentorship",
      categoryLabel: "Community & Pedagogy",
      year: "2024 - 2025",
      issuer: "Melerigamy Technical Collective",
      badge: "Pedagogical Milestone",
      abstract: "Conducted structured hardware masterclasses, logic analyzer tutorials, and blockchain workshops, personally training over 100+ undergraduate engineering students with day-one industrial exposure and zero gatekeeping.",
      impact: "100+ fellows equipped with hands-on soldering, breadboarding, and smart contract skills.",
      tags: ["Hands-On Pedagogy", "Hardware Masterclasses", "Web3 Workshops", "Zero Gatekeeping"],
      metrics: "100+ Students Mentored",
      details: {
        overview: "Melerigamy was founded on the conviction that engineering should be hands-on from the first week of university. Through peer intensives, we provide direct physical access to tools, components, and mentorship.",
        highlights: [
          "100+ undergraduate students mentored across hardware, microcontrollers, and smart contracts",
          "Comprehensive workshops on schematic reading, breadboard prototyping, and logic analysis",
          "Hands-on blockchain seminars covering Ethereum transactions, ERC standards, and smart contracts",
          "Created an open, peer-driven engineering environment free of academic gatekeeping"
        ],
        relevance: "Fulfills our foundational mission: transforming university learners into autonomous systems builders through peer apprenticeship."
      }
    },
    {
      id: "ai-urban-farming-deployment",
      title: "AI-Powered Closed-Loop Urban Farming System",
      category: "hardware",
      categoryLabel: "Hardware Systems",
      year: "2024 - 2025",
      issuer: "Melerigamy Physical Systems Lab",
      badge: "Autonomous Hardware",
      abstract: "Designed and deployed an integrated embedded system coupling sensory telemetry (soil moisture, temperature, microclimate) with automated irrigation actuators and on-device intelligent decision models.",
      impact: "Full physical hardware build with sub-second feedback loops and telemetry logging.",
      tags: ["Embedded Systems", "Closed-Loop Automation", "Microclimate Telemetry", "Industrial IoT"],
      metrics: "Live Physical Build",
      details: {
        overview: "A flagship multidisciplinary system merging core analog electronics, digital sensor buses (I2C/SPI), microcontrollers, and intelligent inference models to optimize plant yield in constrained urban microclimates.",
        highlights: [
          "Custom multi-sensor telemetry harness capturing soil metrics, VPD, ambient light, and humidity",
          "Automated closed-loop relay actuation for dynamic irrigation and environmental control",
          "On-device inference pipeline adapting watering schedules to ambient microclimate trends",
          "Low-power edge architecture with real-time logging and fail-safe hardware overrides"
        ],
        relevance: "Demonstrates full-stack engineering proficiency spanning physical actuators, analog sensor front-ends, and intelligent control algorithms."
      }
    },
    {
      id: "web3-telemetry-bridges",
      title: "Ethereum Decentralized Telemetry & IoT Oracles",
      category: "hardware",
      categoryLabel: "Web3 & IoT",
      year: "2025",
      issuer: "Melerigamy Web3 Lab",
      badge: "On-Chain Infrastructure",
      abstract: "Engineered cryptographic data pipelines connecting physical microcontroller telemetry to Ethereum smart contracts, enabling tamper-evident state attestation and verifiable hardware logs.",
      impact: "Bridged physical sensors to decentralized ledgers with gas-optimized encoding.",
      tags: ["Ethereum", "Smart Contracts", "IoT Oracles", "Decentralized Telemetry"],
      metrics: "On-Chain Hardware Bridge",
      details: {
        overview: "Addresses the oracle problem by securing hardware-level data provenance. Environmental and sensor metrics are cryptographically signed at the microcontroller boundary and relayed to Ethereum smart contracts.",
        highlights: [
          "ECDSA cryptographic signature generation on constrained microcontroller cores",
          "Gas-optimized Solidity smart contract architecture for telemetry receipt verification",
          "Tamper-evident attestation for sensor-driven physical events",
          "Exploration of zero-knowledge proofs for private telemetry verification"
        ],
        relevance: "Pioneers the convergence of Web3 decentralized protocols and physical computing hardware."
      }
    },
    {
      id: "technical-event-orchestration",
      title: "Hackathon Orchestration & Collaborative Tech Sprints",
      category: "mentorship",
      categoryLabel: "Operations & Community",
      year: "2024 - 2025",
      issuer: "Melerigamy Operations & Community Guild",
      badge: "Leadership & Scale",
      abstract: "Organized multi-tier hackathons, hardware sprints, and cross-functional technical seminars that brought together dozens of multidisciplinary teams to build production-grade prototypes under real-world constraints.",
      impact: "Cross-discipline collaboration fostering hands-on engineering culture.",
      tags: ["Hackathon Management", "Cross-Functional Teams", "Rapid Prototyping", "Technical Leadership"],
      metrics: "Multi-Team Sprints",
      details: {
        overview: "Building engineering teams requires more than code: it requires operational excellence, high-energy collaboration, and structured problem framing.",
        highlights: [
          "Planned and executed technical hackathons and competitive hardware teardowns",
          "Fostered collaboration across electrical, mechanical, and computer engineering students",
          "Mentored participants on rapid prototyping, presentation skills, and engineering defense",
          "Established recurring collaborative sprints that produce working prototypes in 48 hours"
        ],
        relevance: "Proves Melerigamy's operational capacity to organize, inspire, and mobilize technical talent at scale."
      }
    }
  ]
};
