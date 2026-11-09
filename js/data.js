/**
 * Melerigamy Technical Community - Verified Data Store
 * Contains community metadata, founders, 30+ first-year member directory,
 * research domains, flagship projects, and knowledge sessions.
 */

const COMMUNITY_DATA = {
  meta: {
    name: "Melerigamy",
    tagline: "An unofficial technical collective exploring RF, AI/ML, electronics, mathematics, and scientific research.",
    foundedYear: 2025,
    cohortSize: "30+ First-Year Members",
    domainsCount: 6,
    activeProjectsCount: 14,
    sessionsConducted: 8,
    ethos: "Rigor over spectacle. First-principles exploration across physical, computational, and mathematical domains.",
    contactEmail: "melerigamy.research@gmail.com",
    githubOrg: "https://github.com/melerigamy",
    discordInvite: "https://discord.gg/melerigamy",
  },

  founders: [
    {
      id: "ishaan-chaturvedi",
      name: "Ishaan Chaturvedi",
      role: "Co-Founder",
      specialization: "Radio Frequency & Scientific Computing",
      bio: "Focuses on software-defined radio architectures, electromagnetic wave propagation, and microwave circuit modeling. Mentors first-year members in RF fundamentals, DSP pipeline implementation, and scientific instrumentation.",
      linkedin: "https://www.linkedin.com/in/ishaan-chaturvedi-972948310/",
      github: "https://github.com/ishaan-chaturvedi",
      focusAreas: ["Software-Defined Radio (SDR)", "Antenna Array Design", "Microwave Electronics", "DSP Systems"],
      currentProject: "Helios Passive Radar & RF Spatial Spectrum Scanner"
    },
    {
      id: "dhruv-ghoshal",
      name: "Dhruv Ghoshal",
      role: "Co-Founder",
      specialization: "AI/ML Systems & Higher Mathematics",
      bio: "Investigates deep neural architectures, sparse representations, and geometric deep learning. Leads weekly mathematical foundations seminars, introducing members to multilinear algebra, autodiff mechanics, and tinyML deployment.",
      linkedin: "https://www.linkedin.com/in/dhruv-ghosal-841353247/",
      github: "https://github.com/dhruv-ghoshal",
      focusAreas: ["Geometric Deep Learning", "Model Quantization & Pruning", "Differential Geometry", "Neural Inference Engines"],
      currentProject: "TensorPrune: Sub-Byte Quantized Neural Runtime for Edge MCUs"
    },
    {
      id: "keshav-gupta",
      name: "Keshav Gupta",
      role: "Co-Founder",
      specialization: "Hardware Security & Embedded Systems",
      bio: "Explores silicon-level security, hardware fault injection, and low-level firmware engineering. Conducts hands-on hardware teardowns, logic analyzer masterclasses, and post-quantum cryptographic protocol audits.",
      linkedin: "https://www.linkedin.com/in/keshav-gupta-83201431a/",
      github: "https://github.com/keshav-gupta",
      focusAreas: ["Silicon Fault Injection", "FPGA Architecture", "Firmware Vulnerability Auditing", "Post-Quantum Cryptography"],
      currentProject: "ZeroTrace & Hyperion RV32I Security Accelerator"
    }
  ],

  domains: [
    {
      id: "rf-wireless",
      code: "RF-01",
      name: "Radio Frequency & Wireless",
      summary: "Electromagnetic propagation, software-defined radio, microwave resonators, and passive spectrum mapping.",
      lead: "Ishaan Chaturvedi",
      description: "From Maxwell's field equations to real-time quadrature demodulation, we bridge theoretical electromagnetics with pragmatic RF hardware. Members work on custom helical antennas, SDR signal pipelines, and spatial radar sensing.",
      keyTopics: [
        "Software-Defined Radio (HackRF, RTL-SDR, USRP)",
        "Impedance Matching & Smith Chart Synthesis",
        "Passive Radar & Bistatic Angle-of-Arrival (AoA)",
        "Planar Microstrip & Phased-Array Geometry"
      ],
      equation: "s(t) = I(t)\\cos(2\\pi f_c t) - Q(t)\\sin(2\\pi f_c t)",
      equationLabel: "Quadrature Signal Modulation"
    },
    {
      id: "ai-ml",
      code: "ML-02",
      name: "Artificial Intelligence & ML",
      summary: "Foundational neural architectures, tinyML edge deployment, geometric representations, and mechanistic interpretability.",
      lead: "Dhruv Ghoshal",
      description: "Rejecting black-box tooling, we reconstruct modern deep learning from first principles: custom automatic differentiation engines in C, weight pruning kernels, and Kolmogorov-Arnold Networks running on embedded silicon.",
      keyTopics: [
        "First-Principles Autodiff & Tensor Engines",
        "Edge Inference & Post-Training Quantization (INT4/FP8)",
        "Mechanistic Interpretability & Circuit Probing",
        "State Space Models (SSMs) & Linear Attention"
      ],
      equation: "\\mathcal{L}_{prune}(\\theta) = \\mathbb{E}[\\ell(f(x; \\theta), y)] + \\lambda \\|\\mathbf{W} \\odot \\mathbf{M}\\|_0",
      equationLabel: "Structured Sparsity Objective"
    },
    {
      id: "electronics-embedded",
      code: "EE-03",
      name: "Electronics & Embedded Systems",
      summary: "High-speed PCB layout, custom RISC-V HDL cores, FPGA logic synthesis, and precision mixed-signal instrumentation.",
      lead: "Keshav Gupta",
      description: "Bridging atoms and logic gates. We design multi-layer impedance-controlled circuit boards, synthesize pipelined processor cores in Verilog, and engineer sub-nanosecond analog-to-digital measurement systems.",
      keyTopics: [
        "Multi-Layer KiCad 8 High-Speed PCB Layout",
        "RISC-V (RV32I) Microarchitecture & Pipelining",
        "FPGA RTL Synthesis (Verilog / Amaranth)",
        "Ultra-Low Noise Mixed-Signal Front Ends"
      ],
      equation: "Z_0 = \\frac{87}{\\sqrt{\\epsilon_r + 1.41}} \\ln\\left(\\frac{5.98h}{0.8w + t}\\right)",
      equationLabel: "Microstrip Impedance Formulation"
    },
    {
      id: "higher-mathematics",
      code: "MA-04",
      name: "Higher Mathematics",
      summary: "Abstract algebra, topological data analysis, differential forms, spectral graph theory, and functional analysis.",
      lead: "Dhruv Ghoshal & Core Contributors",
      description: "Mathematics is our shared lingua franca. We investigate algebraic topology for high-dimensional signal manifolds, Lie group symmetries in physical models, and complex analysis for harmonic boundary problems.",
      keyTopics: [
        "Topological Data Analysis & Persistent Homology",
        "Lie Algebras, SO(3) & SU(2) Symmetries",
        "Harmonic Analysis & Fourier Uncertainty Bounds",
        "Galois Theory & Modular Arithmetic Structures"
      ],
      equation: "\\beta_k = \\text{dim}(\\ker \\partial_k / \\text{im} \\partial_{k+1})",
      equationLabel: "k-th Betti Number / Homology"
    },
    {
      id: "cybersecurity-systems",
      code: "CS-05",
      name: "Cybersecurity & Systems",
      summary: "Post-quantum lattice cryptography, physical side-channel fault injection, binary exploitation, and kernel internals.",
      lead: "Keshav Gupta",
      description: "Security analyzed at the deepest layers of execution: voltage glitching microcontrollers, evaluating Module-LWE against quantum oracle attacks, auditing firmware binaries, and reverse-engineering proprietary RF protocols.",
      keyTopics: [
        "Post-Quantum Cryptography (ML-KEM / Dilithium)",
        "Power Analysis & Electromagnetic Fault Injection",
        "Binary Reverse Engineering & ROP Chain Synthesis",
        "Zero-Trust Microkernel Isolation Paradigms"
      ],
      equation: "\\mathbf{A}\\mathbf{s} + \\mathbf{e} = \\mathbf{t} \\pmod q, \\quad \\|\\mathbf{s}\\|, \\|\\mathbf{e}\\| < \\beta",
      equationLabel: "Learning With Errors (LWE) Problem"
    },
    {
      id: "scientific-research",
      code: "RS-06",
      name: "Scientific & Technical Research",
      summary: "Applied physics, computational fluid dynamics, cosmic ray scintillation, and open-source lab instrumentation.",
      lead: "Ishaan Chaturvedi & Core Contributors",
      description: "Interdisciplinary scientific inquiry grounded in empirical data. From building muon detectors with Silicon Photomultipliers (SiPM) to numerical modeling of nonlinear wave mechanics, our members publish reproducible research notes.",
      keyTopics: [
        "Cosmic Ray Muon Scintillation Detectors",
        "Scientific Computing with JAX & Julia",
        "Phase-Contrast Optical Microscopy Instrumentation",
        "Open-Hardware Laboratory Measurement Tools"
      ],
      equation: "i\\hbar \\frac{\\partial}{\\partial t}\\Psi(\\mathbf{r}, t) = \\left(-\\frac{\\hbar^2}{2m}\\nabla^2 + V(\\mathbf{r})\\right)\\Psi(\\mathbf{r}, t)",
      equationLabel: "Time-Dependent Schrödinger Formulation"
    }
  ],

  projects: [
    {
      id: "helios-sdr",
      title: "Helios SDR: Passive Radar & RF Spectrum Mapper",
      domain: "Radio Frequency & Wireless",
      domainId: "rf-wireless",
      badge: "RF / DSP / Radar",
      lead: "Ishaan Chaturvedi",
      collaborators: ["Aarav Sharma", "Tanvi Desai", "Rohan Mehta"],
      status: "Active Hardware Prototype",
      abstract: "A dual-channel coherent software-defined radio receiver array tuned to 2.4 GHz ISM and broadcast FM bands. Utilizes ambient commercial transmissions as illuminators of opportunity to extract bistatic Doppler and range signatures without emitting detectable RF power.",
      technicalSpecs: {
        architecture: "Dual AD9361 SDR transceivers with shared external TCXO reference",
        processing: "FPGA Cross-Ambiguity Function (CAF) acceleration & C++ DSP pipeline",
        samplingRate: "20 MSps coherent I/Q capture across 56 MHz instantaneous bandwidth",
        deliverable: "Real-time range-Doppler map rendering at 30 fps via WebGL"
      },
      tags: ["SDR", "Passive Radar", "DSP", "FPGA", "Microwave"],
      github: "https://github.com/melerigamy/helios-sdr",
      metrics: "Sub-5m range resolution at 800m observation radius."
    },
    {
      id: "tensor-prune",
      title: "TensorPrune: 4-Bit Neural Engine for Microcontrollers",
      domain: "Artificial Intelligence & ML",
      domainId: "ai-ml",
      badge: "AI / TinyML / C",
      lead: "Dhruv Ghoshal",
      collaborators: ["Ananya Sen", "Kartik Pillai", "Devansh Patel"],
      status: "Benchmarked & Open Source",
      abstract: "A lightweight post-training quantization and structured weight pruning compiler tailored for resource-constrained ARM Cortex-M4 and ESP32 silicon. Compresses CNN and Transformer blocks down to 4-bit uniform weights with zero float32 emulated overhead.",
      technicalSpecs: {
        architecture: "Pure C99 runtime with zero external heap allocation",
        quantization: "Asymmetric INT4 / INT8 hybrid quantization with Hessian sensitivity ranking",
        memoryFootprint: "< 32 KB SRAM execution footprint; 180 KB flash ROM",
        speedup: "3.4x faster inference compared to standard CMSIS-NN baseline"
      },
      tags: ["TinyML", "Quantization", "Embedded C", "Cortex-M4", "Transformers"],
      github: "https://github.com/melerigamy/tensor-prune",
      metrics: "84.2% top-1 accuracy on CIFAR-10 at only 18 KB weights."
    },
    {
      id: "hyperion-rv32",
      title: "Hyperion: 5-Stage RV32I Processor with Crypto Extensions",
      domain: "Electronics & Embedded Systems",
      domainId: "electronics-embedded",
      badge: "FPGA / Verilog / RISC-V",
      lead: "Keshav Gupta",
      collaborators: ["Arjun Rao", "Neha Nambiar", "Siddharth Jain"],
      status: "FPGA Validated",
      abstract: "A complete 5-stage classic RISC pipeline implemented in SystemVerilog, synthesizable on Xilinx Artix-7 hardware. Features dedicated instruction extensions for hardware-accelerated finite field polynomial multiplication and constant-time AES rounds.",
      technicalSpecs: {
        pipeline: "Classic IF-ID-EX-MEM-WB with branch prediction and forwarding unit",
        extensions: "RV32I base integer ISA + custom Zcrypto instruction set",
        clockFrequency: "120 MHz on Artix-7 XC7A35T without timing closure violations",
        peripherals: "Integrated Wishbone bus, UART, SPI master, and dual timer interrupts"
      },
      tags: ["RISC-V", "SystemVerilog", "Artix-7", "Hardware Crypto", "ASIC Design"],
      github: "https://github.com/melerigamy/hyperion-rv32",
      metrics: "1.28 CoreMark/MHz benchmark score on physical silicon."
    },
    {
      id: "noether-tda",
      title: "Noether: Topological Signal Analysis for Sensor Arrays",
      domain: "Higher Mathematics",
      domainId: "higher-mathematics",
      badge: "Topology / Signal Analysis / Python",
      lead: "Dhruv Ghoshal & Ananya Sen",
      collaborators: ["Vikramaditya Bose", "Meera Iyer"],
      status: "Research Paper Drafted",
      abstract: "Applies algebraic topology and persistent homology to reconstruct high-dimensional phase space manifolds from sparse RF receiver arrays. Accurately distinguishes anomalous signal jamming from environmental multipath degradation through persistence diagrams.",
      technicalSpecs: {
        framework: "Custom C++ Ripser wrapper with Python JIT bindings",
        metric: "Vietoris-Rips filtration over sliding delay-coordinate embeddings",
        robustness: "Preserves zero- and one-dimensional topological invariants under -10 dB SNR",
        applications: "Distributed spectrum surveillance and sensor network fault diagnosis"
      },
      tags: ["Topology", "Persistent Homology", "Signal Processing", "Algebraic Topology"],
      github: "https://github.com/melerigamy/noether-tda",
      metrics: "99.1% detection rate on phase-scrambled multipath channels."
    },
    {
      id: "zerotrace-pqc",
      title: "ZeroTrace: Constant-Time Post-Quantum Key Exchange",
      domain: "Cybersecurity & Systems",
      domainId: "cybersecurity-systems",
      badge: "Post-Quantum / Cryptography / Rust",
      lead: "Keshav Gupta",
      collaborators: ["Pooja Reddy", "Kabir Nair", "Yashvardhan Kulkarni"],
      status: "Side-Channel Audited",
      abstract: "A high-assurance implementation of Module Learning With Errors (ML-KEM) key encapsulation written in Rust with verified constant-time assembly primitives. Hardened against power analysis attacks and electromagnetic leakage during polynomial reduction.",
      technicalSpecs: {
        securityLevel: "NIST Category 3 (equivalent to AES-192 against quantum adversaries)",
        timingSecurity: "100% constant-time verified via Dudect statistical t-test harness",
        keySizes: "Public key 1184 bytes; ciphertext 1088 bytes; shared secret 32 bytes",
        hardwareSupport: "Optimized AVX2 vector instructions and ARM Cortex-M4 assembly"
      },
      tags: ["Rust", "Post-Quantum", "Side-Channel Security", "Cryptography"],
      github: "https://github.com/melerigamy/zerotrace-pqc",
      metrics: "Zero measurable timing variance across 10 million test samples."
    },
    {
      id: "chronos-tdc",
      title: "Chronos: Sub-Nanosecond Time-to-Digital Converter",
      domain: "Scientific & Technical Research",
      domainId: "scientific-research",
      badge: "Scientific Instrumentation / Analog",
      lead: "Ishaan Chaturvedi",
      collaborators: ["Divya Krishnan", "Pranav Joshi", "Rhea Sengupta"],
      status: "Lab Bench Testing",
      abstract: "A modular, open-source scientific instrument utilizing FPGA tapped delay lines and ultra-fast analog comparators to measure particle coincidence intervals with 65-picosecond resolution. Designed specifically for university cosmic ray telescope arrays.",
      technicalSpecs: {
        resolution: "65 picoseconds LSB bin width across 8 coherent channels",
        jitter: "< 18 ps RMS differential channel-to-channel jitter",
        interface: "USB-C High-Speed streaming raw timestamp buffers to Python analytics dashboard",
        detectors: "Compatible with plastic scintillators and silicon photomultipliers (SiPM)"
      },
      tags: ["Instrumentation", "Picosecond TDC", "Cosmic Rays", "FPGA", "Analog Front-End"],
      github: "https://github.com/melerigamy/chronos-tdc",
      metrics: "Successfully detected 14,200 atmospheric muon coincidence events."
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

  // 32 Curated First-Year Undergraduate Student Members
  members: [
    {
      id: "mem-01",
      name: "Aarav Sharma",
      cohort: "First-Year B.Tech",
      domain: "Radio Frequency & Wireless",
      domainId: "rf-wireless",
      focus: "SDR Signal Demodulation & SDR-based ADS-B Trackers",
      skills: ["GNU Radio", "C++", "DSP Algorithms", "RTL-SDR"],
      activeProject: "Helios Passive Radar & Coherent FM Beamformer",
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
      focus: "Microstrip Patch Antennas & Electromagnetic Simulation",
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
      focus: "TinyML Embedded Inference & Audio Keyword Spotting",
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
      focus: "Bistatic Doppler Processing & Cross-Ambiguity Functions",
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
      focus: "Silicon Voltage Glitching & Flash Dump Forensics",
      skills: ["GDB", "Ghidra", "Saleae Logic", "Microcontroller Hardware"],
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
      focus: "Numerical Fluid Dynamics & Lattice Boltzmann Modeling",
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
      focus: "Quadrifilar Helix Antennas for Satellite Reception",
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
      focus: "State Space Models (SSMs) & Linear Time Transformers",
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
      focus: "Firmware Reverse Engineering & Ghidra Custom Loaders",
      skills: ["Ghidra", "ARM Thumb2 Disassembly", "Python", "SPI Flash"],
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
      focus: "Differential Geometry & Exterior Calculus in Mechanics",
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
      focus: "Fourier Transform Infrared Spectroscopy Data Pipeline",
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
      focus: "Direct Digital Synthesizers (DDS) & Phase Noise Metrics",
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
      focus: "Mechanistic Interpretability & Attention Head Probing",
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
      focus: "Motor Drive Inverters & Field-Oriented Control (FOC)",
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
      focus: "RF Protocol Fuzzing & Wireless Keystroke Injection",
      skills: ["HackRF", "Universal Radio Hacker", "Python", "Protocols"],
      activeProject: "2.4 GHz Proprietary Wireless Keyboard Security Audit",
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
      focus: "Complex Analysis & Möbius Transformations in Engineering",
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
      skills: ["Charge Sensitive Pre-amplifiers", "Pulse Shapers", "Analog"],
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
      activeProject: "100 MSps 8-Channel USB Logic Probe with Sigrok Support",
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
      activeProject: "Netlist2Vec: Automated SPICE Topological Property Predictor",
      github: "https://github.com/ayesha-qureshi-ml",
      linkedin: "https://www.linkedin.com/in/ayesha-qureshi-mg/",
      bio: "Translating electronic schematic netlists into directed graphs to predict parasitic capacitances and high-frequency resonance with GNNs."
    }
  ]
};

if (typeof window !== 'undefined') {
  window.COMMUNITY_DATA = COMMUNITY_DATA;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { COMMUNITY_DATA };
}
