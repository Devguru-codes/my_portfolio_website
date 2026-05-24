import React, { useState, useEffect } from 'react';

const HARDCODED_PROJECTS = [
  // --- AI & ML ---
  {
    id: 1,
    title: "AI Money Mentor (Agent Swarm)",
    description: "Built an autonomous agent swarm using the OpenClaw framework to provide intelligent financial mentoring and analysis.",
    longDescription: "An advanced multi-agent AI system designed for financial literacy. I utilized the OpenClaw framework to orchestrate a swarm of specialized AI agents—each handling different aspects of financial analysis and budgeting.",
    tags: ["Agent Swarm", "OpenClaw", "LLMs", "AI Agents"],
    category: "AI & ML",
    link: "https://github.com/Devguru-codes/AI-Money-Mentor"
  },
  {
    id: 2,
    title: "3D Lung Nodule Segmentation",
    description: "Implemented advanced 3D deep learning segmentation models for medical CT scans to detect lung nodules.",
    longDescription: "A highly complex medical computer vision project. I utilized 3D convolutional neural networks to segment lung nodules from raw volumetric CT scans, demonstrating my ability to handle highly dimensional, sensitive medical data.",
    tags: ["Medical AI", "Computer Vision", "3D CNN", "PyTorch"],
    category: "AI & ML",
    link: "https://github.com/Devguru-codes/Lung-Nodule-Seg3D"
  },
  {
    id: 3,
    title: "CT Scanner Domain Adaptation",
    description: "Engineered deep learning domain adaptation techniques to normalize CT scans across different medical scanner hardware.",
    longDescription: "A cutting-edge AI research project. Medical AI models often fail when applied to images from different hospital scanners. I implemented domain adaptation techniques to normalize the data distributions, making the AI models robust regardless of the hardware used.",
    tags: ["Domain Adaptation", "Deep Learning", "Medical Imaging"],
    category: "AI & ML",
    link: "https://github.com/Devguru-codes/Med-Domain-Adapt-CT-Scanner-Domain-Adaptation-"
  },
  {
    id: 4,
    title: "AI Meeting Minutes Bot",
    description: "Designed and shipped an automated AI system for Google Meet. Integrated HuggingFace diarization and LLM summarization.",
    longDescription: "I designed and shipped an automated AI system for Google Meet that runs entirely locally. It uses HuggingFace models for accurate speaker diarization and routes the transcript through an LLM to generate structured summaries.",
    tags: ["LLMs", "Audio Processing", "Gradio", "AI Product"],
    category: "AI & ML",
    link: "https://github.com/Devguru-codes/meeting-minutes-ai"
  },

  // --- Data Science ---
  {
    id: 5,
    title: "Amazon ML Challenge 2025",
    description: "Competitive machine learning solution engineered for the official Amazon ML Challenge.",
    longDescription: "My complete solution and approach for the highly competitive Amazon Machine Learning Challenge 2025, demonstrating advanced feature engineering, model ensembling, and high-performance tabular data processing.",
    tags: ["Machine Learning", "Feature Engineering", "Competition", "Pandas"],
    category: "Data Science",
    link: "https://github.com/Devguru-codes/Amazon_ML_challenge_solution_2025"
  },
  {
    id: 6,
    title: "PySpark Movie Recommendation Engine",
    description: "Developed a highly scalable movie recommendation system using Alternating Least Squares (ALS) and PySpark.",
    longDescription: "A big data project demonstrating scalable machine learning. I utilized PySpark to process massive datasets of user movie ratings, training an Alternating Least Squares (ALS) collaborative filtering algorithm.",
    tags: ["PySpark", "Big Data", "Machine Learning", "ALS"],
    category: "Data Science",
    link: "https://github.com/Devguru-codes/bda-movie-recommendation-system"
  },
  {
    id: 7,
    title: "UIDAI Data Hackathon 2026",
    description: "Data analysis and predictive modeling built for the national UIDAI Hackathon.",
    longDescription: "A national-level hackathon project focused on India's UIDAI infrastructure. I handled complex demographic datasets to build predictive models and extract actionable intelligence.",
    tags: ["Hackathon", "Data Science", "Analytics", "UIDAI"],
    category: "Data Science",
    link: "https://github.com/Devguru-codes/UIDAI-DATA-HACKATHON-2026"
  },
  {
    id: 8,
    title: "Florida Keys Coral Reef Analysis",
    description: "Conducted long-term data analysis (1996-2023) on CREMP data to identify health trends in the Florida Keys coral reefs.",
    longDescription: "A comprehensive data science research project analyzing nearly three decades of ecological data (CREMP). I performed extensive data cleaning, statistical analysis, and geospatial visualization to uncover long-term degradation and recovery trends.",
    tags: ["Data Analysis", "NumPy", "Statistical Modeling"],
    category: "Data Science",
    link: "https://github.com/Devguru-codes/Long-Term-Trends-in-Florida-Keys-Coral-Reef-Health-Insights-from-CREMP-Data-1996-2023-"
  },
  {
    id: 9,
    title: "Telecom Customer Churn Predictor",
    description: "Predictive analytics model to forecast telecom customer churn, built during the Vodafone Idea internship.",
    longDescription: "An industry-grade predictive model developed during my time at Vodafone Idea (VOIS). I engineered a pipeline to ingest customer usage metrics and predict churn probability, allowing for proactive retention strategies.",
    tags: ["Predictive Modeling", "Telecom", "VOIS", "Data Science"],
    category: "Data Science",
    link: "https://github.com/Devguru-codes/VOIS_AICTE_DEC_2025_DevguruTiwari_Customer_Churn"
  },
  {
    id: 10,
    title: "Terrorism Incident Predictor",
    description: "Developed a predictive data model analyzing historical data to forecast incident success rates.",
    longDescription: "A data science project analyzing decades of historical incident data. I cleaned and engineered features from complex datasets, then trained predictive machine learning models to forecast the success rates of incidents.",
    tags: ["Data Science", "Machine Learning", "Analytics", "Python"],
    category: "Data Science",
    link: "https://github.com/Devguru-codes/Terrorism-Incident-Success-Prediction"
  },

  // --- Systems ---
  {
    id: 11,
    title: "PyRedis (TCP Concurrency)",
    description: "Built a lightweight, highly concurrent Redis clone from scratch in Python communicating over raw TCP sockets.",
    longDescription: "A high-performance, concurrent Redis clone built entirely from scratch using Python. Instead of relying on high-level frameworks, I implemented custom TCP socket programming and a custom event loop to handle concurrent client connections.",
    tags: ["Python", "Sockets", "Concurrency", "Distributed Systems"],
    category: "Systems",
    link: "https://github.com/Devguru-codes/PyRedis---lightweight-concurrent-Redis-clone-that-communicates-over-TCP-sockets."
  },
  {
    id: 12,
    title: "Quantum Key Distribution Network",
    description: "Simulated a hybrid quantum key distribution network to study post-quantum secure communications.",
    longDescription: "A complex systems engineering project simulating secure communication protocols using Quantum Key Distribution (QKD). The simulation evaluates network topologies for deploying hybrid quantum-classical nodes resistant to quantum attacks.",
    tags: ["Cryptography", "Network Simulation", "Security", "Python"],
    category: "Systems",
    link: "https://github.com/Devguru-codes/Quantum-Key-Distribution-Hybrid-Network-Simulation"
  },
  {
    id: 13,
    title: "Native Python Sandbox",
    description: "Built a secure, isolated Python execution environment for safely evaluating untrusted code.",
    longDescription: "A hardcore systems project focused on security and execution contexts. I built a sandboxed environment capable of safely evaluating and executing untrusted Python code by strictly limiting system calls, memory, and module access.",
    tags: ["Systems Engineering", "Security", "Sandboxing", "Python"],
    category: "Systems",
    link: "https://github.com/Devguru-codes/Native-Python-Sandbox"
  },

  // --- Other ---
  {
    id: 14,
    title: "OSIPI Visual QC Dashboard",
    description: "Built a visual quality control dashboard for analyzing and validating OSIPI perfusion imaging datasets.",
    longDescription: "A tool to assist medical researchers in quickly validating the quality of thousands of MRI scans. Built data visualization pipelines to flag anomalous scans before they enter the training phase.",
    tags: ["Data Visualization", "Quality Control", "MRI"],
    category: "Other",
    link: "https://github.com/Devguru-codes/OSIPI-Visual-QC"
  },
  {
    id: 15,
    title: "CareerFlow AI Platform",
    description: "An AI-powered career development platform engineered with a robust TypeScript backend.",
    longDescription: "A full-stack product engineering project. I designed the architecture for an AI-powered career development platform, focusing on robust backend systems and seamless AI integration to guide users through their career trajectories.",
    tags: ["TypeScript", "Full Stack", "AI Integration", "Product"],
    category: "Other",
    link: "https://github.com/Devguru-codes/CareerFlow-AI-Powered-Career-Development-Platform"
  }
];

const CREDENTIALS = [
  {
    title: "J.P. Morgan Quantitative Research",
    organization: "Forage Job Simulation",
    type: "cert"
  },
  {
    title: "Citi Markets Quantitative Analysis",
    organization: "Forage Job Simulation",
    type: "cert"
  },
  {
    title: "Applied AI Internship: Design & Build with AI",
    organization: "CSRBOX",
    type: "cert"
  },
  {
    title: "Emerging Technologies (AI & ML)",
    organization: "Edunet Foundation",
    type: "cert"
  },
  {
    title: "AICTE VOIS Conversational Data Analytics",
    organization: "Vodafone Idea Foundation",
    type: "cert"
  }
];

const categories = ["All", "AI & ML", "Data Science", "Systems", "Other"];

const openSourceContributions = [
  {
    org: "OSIPI (Perfusion Imaging)",
    role: "Core Contributor",
    description: "Led architectural refactors across the IVIM-MRI codebase. Centralized b-value management logic across 27 algorithms, resolved critical dipy deprecation warnings, and fixed macOS CI pipeline segmentation faults.",
    impact: "Ensured stability and standard compliance for medical imaging researchers worldwide.",
    tags: ["Python", "MATLAB", "CI/CD", "Architecture"],
    links: [
      { text: "IVIM-MRI PRs →", url: "https://github.com/OSIPI/TF2.4_IVIM-MRI_CodeCollection/issues?q=is%3Apr+author%3ADevguru-codes" },
      { text: "osipy PRs →", url: "https://github.com/OSIPI/osipy/issues?q=is%3Apr+author%3ADevguru-codes" }
    ],
    prGroups: [
      {
        repoName: "TF2.4_IVIM-MRI_CodeCollection",
        repoLink: "https://github.com/OSIPI/TF2.4_IVIM-MRI_CodeCollection",
        prs: [
          {
            title: "Centralize b-value management at initialization (#165)",
            description: "Enforced b-value usage exclusively at initialization across the OSIPI architecture, moving validation logic into the OsipiBase wrapper to eliminate code duplication across 27 algorithms.",
            link: "https://github.com/OSIPI/TF2.4_IVIM-MRI_CodeCollection/pull/165"
          },
          {
            title: "Replace bare except: with specific exception types (#167)",
            description: "Improved codebase error handling by replacing bare exceptions with specific types, adhering to Python best practices and preventing silent failures.",
            link: "https://github.com/OSIPI/TF2.4_IVIM-MRI_CodeCollection/pull/167"
          },
          {
            title: "Fix dipy deprecation warnings (#157)",
            description: "Replaced positional bvec arguments with keyword arguments across 11 call sites in the IAR_LU algorithm family to ensure future compatibility with dipy 2.0.0.",
            link: "https://github.com/OSIPI/TF2.4_IVIM-MRI_CodeCollection/pull/157"
          },
          {
            title: "Add body-part aware initial guesses for IVIM fitting (#149)",
            description: "Enhanced the fitting algorithms to utilize anatomical context for smarter initial guess estimations.",
            link: "https://github.com/OSIPI/TF2.4_IVIM-MRI_CodeCollection/pull/149"
          },
          {
            title: "Add Weighted Least Squares (WLS) IVIM fitting algorithm (#148)",
            description: "Implemented a robust WLS fitting algorithm to improve the accuracy of IVIM parameter estimation.",
            link: "https://github.com/OSIPI/TF2.4_IVIM-MRI_CodeCollection/pull/148"
          },
          {
            title: "Fix macOS CI Unit Test Failures",
            description: "Installed libomp on macOS CI workflows and conditionally skipped deep learning tests to avoid PyTorch CPU segmentation faults, restoring a green build for the repository.",
            link: "https://github.com/OSIPI/TF2.4_IVIM-MRI_CodeCollection/issues?q=is%3Apr+author%3ADevguru-codes"
          }
        ]
      },
      {
        repoName: "osipy",
        repoLink: "https://github.com/OSIPI/osipy",
        prs: [
          {
            title: "Replace deprecated np.trapz with np.trapezoid (#78)",
            description: "Modernized numpy API usage for compatibility with numpy 2.x releases.",
            link: "https://github.com/OSIPI/osipy/pull/78"
          },
          {
            title: "Fix self-assignment problem (#97)",
            description: "Resolved a critical logic error causing variables to overwrite themselves silently.",
            link: "https://github.com/OSIPI/osipy/pull/97"
          },
          {
            title: "Correct --cov target in pytest CI workflow (#82)",
            description: "Fixed the coverage reporting target from dbdicom to osipi, ensuring accurate code coverage metrics.",
            link: "https://github.com/OSIPI/osipy/pull/82"
          },
          {
            title: "Add __main__ guard to check_coverage.py (#84)",
            description: "Fixed an execution bug in the coverage script to ensure CI pipeline hooks run properly.",
            link: "https://github.com/OSIPI/osipy/pull/84"
          }
        ]
      }
    ]
  },
  {
    org: "libp2p (Protocol Labs)",
    role: "Spec Contributor",
    description: "Formalized the 'optimistic multistream-select' documentation in the libp2p specifications repository. Synthesized technical details from Go and Rust implementation PRs into a structured, normative spec section.",
    impact: "Addressed known security and interoperability pitfalls for decentralized networking protocols.",
    tags: ["Networking", "P2P", "Protocol Design", "Documentation"],
    links: [
      { text: "View Repository →", url: "https://github.com/libp2p/specs" }
    ],
    prGroups: [
      {
        repoName: "specs",
        repoLink: "https://github.com/libp2p/specs",
        prs: [
          {
            title: "Specify Optimistic Multistream-Select",
            description: "Synthesized technical details from existing Go and Rust implementation PRs into a structured, normative spec section, addressing known security and interoperability pitfalls.",
            link: "https://github.com/libp2p/specs"
          }
        ]
      }
    ]
  }
];

function App() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedOS, setSelectedOS] = useState(null);
  const [isClosing, setIsClosing] = useState(false);
  const [emailCopied, setEmailCopied] = useState(false);

  const handleEmailClick = () => {
    navigator.clipboard.writeText('devguruatwork@gmail.com');
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2000);
  };

  const handleCloseProject = () => {
    setIsClosing(true);
    setTimeout(() => {
      setSelectedProject(null);
      setIsClosing(false);
    }, 300);
  };

  const handleCloseOS = () => {
    setIsClosing(true);
    setTimeout(() => {
      setSelectedOS(null);
      setIsClosing(false);
    }, 300);
  };

  const filteredProjects = HARDCODED_PROJECTS.filter(p => activeFilter === "All" || p.category === activeFilter);

  return (
    <>
      <nav className="navbar">
        <div className="container nav-content">
          <a href="#" className="logo" style={{ textDecoration: 'none', letterSpacing: '-0.5px' }}>
            <span style={{ color: '#fff' }}>Dev</span><span style={{ color: 'var(--text-secondary)' }}>guru</span><span style={{ color: 'var(--accent-color)' }}>.</span>
          </a>
          <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
            <a href="#experience" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.95rem', fontWeight: 500, transition: 'color 0.2s' }} onMouseOver={(e) => e.target.style.color = '#fff'} onMouseOut={(e) => e.target.style.color = 'var(--text-secondary)'}>Experience</a>
            <a href="#map" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.95rem', fontWeight: 500, transition: 'color 0.2s' }} onMouseOver={(e) => e.target.style.color = '#fff'} onMouseOut={(e) => e.target.style.color = 'var(--text-secondary)'}>Projects</a>
            <a href="#opensource" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.95rem', fontWeight: 500, transition: 'color 0.2s' }} onMouseOver={(e) => e.target.style.color = '#fff'} onMouseOut={(e) => e.target.style.color = 'var(--text-secondary)'}>Open Source</a>
            <a href="#about" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.95rem', fontWeight: 500, transition: 'color 0.2s' }} onMouseOver={(e) => e.target.style.color = '#fff'} onMouseOut={(e) => e.target.style.color = 'var(--text-secondary)'}>About</a>
            <a href="https://github.com/Devguru-codes" target="_blank" rel="noreferrer" className="btn btn-outline" style={{ padding: '0.5rem 1rem' }}>GitHub</a>
            <a href="https://www.linkedin.com/in/devguru-tiwari/" target="_blank" rel="noreferrer" className="btn btn-linkedin" style={{ padding: '0.5rem 1rem' }}>LinkedIn</a>
            <a href="mailto:devguruatwork@gmail.com" className="btn btn-email" style={{ padding: '0.5rem 1rem' }} onClick={handleEmailClick}>
              {emailCopied ? 'Copied!' : 'Email Me'}
            </a>
          </div>
        </div>
      </nav>

      <main>
        <section style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: '8rem' }}>
          <div className="container">
            <div className="animate-fade-in">
              <h2 className="gradient-text" style={{ fontSize: '1.5rem', marginBottom: '1rem', fontFamily: 'Inter' }}>
                Hi, I'm Devguru Tiwari.
              </h2>
              <h1 className="hero-title" style={{ fontSize: '3.5rem' }}>
                3rd-Year Student at IIIT Nagpur.<br />
                <span className="gradient-text">Data Scientist & Systems Engineer.</span>
              </h1>
              <p className="hero-subtitle">
                I am a <strong>Data Scientist & Systems Engineer.</strong> I don't just write code - I architect scalable systems, analyze complex datasets, and orchestrate machine learning models to rapidly prototype and ship production-ready applications. I bridge the gap between deep analytical research and low-level system execution.
              </p>

              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <a href="#experience" className="btn btn-primary">My Experience</a>
                <a href="mailto:devguruatwork@gmail.com" className="btn btn-email" onClick={handleEmailClick}>
                  {emailCopied ? 'Copied!' : 'Email Me'}
                </a>
                <a href="https://www.linkedin.com/in/devguru-tiwari/" target="_blank" rel="noreferrer" className="btn btn-linkedin">LinkedIn</a>
                <a href="#map" className="btn btn-outline">Explore The Map</a>
              </div>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '1rem' }}>
                <a href="/resume_data_scientist_real_96_ats.pdf" target="_blank" rel="noreferrer" className="btn btn-outline" style={{ borderColor: 'var(--accent-color)', color: 'var(--accent-color)', transition: 'all 0.2s' }} onMouseOver={(e) => { e.target.style.backgroundColor = 'var(--accent-color)'; e.target.style.color = '#000'; }} onMouseOut={(e) => { e.target.style.backgroundColor = 'transparent'; e.target.style.color = 'var(--accent-color)'; }}>Resume (Data Scientist)</a>
                <a href="/resume_data_analyst_ats_94.pdf" target="_blank" rel="noreferrer" className="btn btn-outline" style={{ borderColor: 'var(--accent-purple)', color: 'var(--accent-purple)', transition: 'all 0.2s' }} onMouseOver={(e) => { e.target.style.backgroundColor = 'var(--accent-purple)'; e.target.style.color = '#fff'; }} onMouseOut={(e) => { e.target.style.backgroundColor = 'transparent'; e.target.style.color = 'var(--accent-purple)'; }}>Resume (Data Analyst)</a>
              </div>
            </div>
          </div>
        </section>

        <section id="experience" style={{ backgroundColor: 'var(--bg-color)', padding: '6rem 0' }}>
          <div className="container">
            <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem', textAlign: 'center' }} className="animate-fade-in gradient-text">Experience & Achievements</h2>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
              <div className="glass-card animate-fade-in" style={{ padding: '3rem' }}>
                <h3 style={{ color: 'var(--accent-color)', fontSize: '1.5rem', marginBottom: '1.5rem' }}>Experience</h3>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                  <div>
                    <h4 style={{ fontSize: '1.2rem', color: '#fff', marginBottom: '0.2rem' }}>Data Analyst Intern</h4>
                    <p style={{ color: 'var(--accent-purple)', fontWeight: 500, marginBottom: '0.5rem', fontSize: '0.95rem' }}>Lambence Pvt Ltd | Jan 2026 - Mar 2026</p>
                    <ul style={{ color: 'var(--text-secondary)', lineHeight: '1.6', paddingLeft: '1.2rem', margin: 0, fontSize: '0.95rem' }}>
                      <li>Engineered and optimized complex data pipelines to analyze business metrics.</li>
                      <li>Developed automated reporting dashboards to drive strategic decision-making.</li>
                    </ul>
                  </div>

                  <div>
                    <h4 style={{ fontSize: '1.2rem', color: '#fff', marginBottom: '0.2rem' }}>Data Analytics Virtual Intern</h4>
                    <p style={{ color: 'var(--accent-purple)', fontWeight: 500, marginBottom: '0.5rem', fontSize: '0.95rem' }}>Vodafone Idea Foundation | Sep 2025 - Oct 2025</p>
                    <ul style={{ color: 'var(--text-secondary)', lineHeight: '1.6', paddingLeft: '1.2rem', margin: 0, fontSize: '0.95rem' }}>
                      <li>Selected under AICTE's VOIS for Tech program for Conversational Data Analytics.</li>
                      <li>Completed rigorous training across 10+ modules covering Data Science, ML, and Neural Networks.</li>
                    </ul>
                  </div>

                  <div>
                    <h4 style={{ fontSize: '1.2rem', color: '#fff', marginBottom: '0.2rem' }}>GDG DevTalks Co-Lead</h4>
                    <p style={{ color: 'var(--accent-purple)', fontWeight: 500, marginBottom: '0.5rem', fontSize: '0.95rem' }}>GDSC IIITN | Nov 2024 - Sep 2025</p>
                    <ul style={{ color: 'var(--text-secondary)', lineHeight: '1.6', paddingLeft: '1.2rem', margin: 0, fontSize: '0.95rem' }}>
                      <li>Hosted and moderated 10+ podcasts with industry experts.</li>
                      <li>Collaborated with core teams to create impactful learning experiences for student developers.</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="glass-card animate-fade-in" style={{ padding: '3rem', animationDelay: '0.2s', opacity: 0, animationFillMode: 'forwards' }}>
                <h3 style={{ color: 'var(--accent-color)', fontSize: '1.5rem', marginBottom: '0.5rem' }}>Awards & Certifications</h3>
                <div style={{ marginTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                  {CREDENTIALS.map((cred, idx) => (
                    <div key={idx} style={{ borderLeft: `2px solid ${cred.type === 'award' ? 'var(--accent-color)' : 'var(--accent-purple)'}`, paddingLeft: '1rem' }}>
                      <h4 style={{ color: '#fff', fontSize: '1.05rem', marginBottom: '0.2rem' }}>{cred.title}</h4>
                      <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', margin: 0 }}>{cred.organization}</p>
                    </div>
                  ))}
                  
                  <a href="https://www.linkedin.com/in/devguru-tiwari/details/certifications/" target="_blank" rel="noreferrer" style={{ color: 'var(--accent-color)', textDecoration: 'none', fontWeight: 500, fontSize: '0.9rem', marginTop: '0.5rem', display: 'inline-block' }}>
                    View verifiable credentials →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="stack" style={{ backgroundColor: 'var(--surface-color)', padding: '6rem 0' }}>
          <div className="container">
            <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem', textAlign: 'center' }} className="animate-fade-in gradient-text">Core Technologies</h2>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
              
              <div className="glass-card animate-fade-in" style={{ padding: '2rem', textAlign: 'center' }}>
                <h3 style={{ color: 'var(--accent-color)', fontSize: '1.2rem', marginBottom: '1.5rem' }}>Languages</h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem', justifyContent: 'center' }}>
                  {['Python', 'SQL', 'JavaScript', 'TypeScript', 'C++'].map(tech => (
                    <span key={tech} className="tech-tag" style={{ fontSize: '0.9rem', padding: '0.5rem 1rem' }}>{tech}</span>
                  ))}
                </div>
              </div>

              <div className="glass-card animate-fade-in" style={{ padding: '2rem', textAlign: 'center', animationDelay: '0.1s', opacity: 0, animationFillMode: 'forwards' }}>
                <h3 style={{ color: 'var(--accent-purple)', fontSize: '1.2rem', marginBottom: '1.5rem' }}>AI & Data Science</h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem', justifyContent: 'center' }}>
                  {['TensorFlow', 'PyTorch', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'PySpark', 'YOLO'].map(tech => (
                    <span key={tech} className="tech-tag" style={{ fontSize: '0.9rem', padding: '0.5rem 1rem', background: 'rgba(168, 85, 247, 0.1)', color: 'var(--accent-purple)', borderColor: 'rgba(168, 85, 247, 0.2)' }}>{tech}</span>
                  ))}
                </div>
              </div>

              <div className="glass-card animate-fade-in" style={{ padding: '2rem', textAlign: 'center', animationDelay: '0.2s', opacity: 0, animationFillMode: 'forwards' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1.5rem' }}>Systems & Tools</h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem', justifyContent: 'center' }}>
                  {['AWS (Deployment)', 'Docker', 'Git', 'TCP Sockets', 'Linux', 'React'].map(tech => (
                    <span key={tech} className="tech-tag" style={{ fontSize: '0.9rem', padding: '0.5rem 1rem', background: 'rgba(255, 255, 255, 0.05)', color: '#fff', borderColor: 'rgba(255, 255, 255, 0.1)' }}>{tech}</span>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>

        <section id="map" style={{ backgroundColor: 'rgba(0,0,0,0.3)', padding: '6rem 0' }}>
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
              <h2 style={{ fontSize: '3rem', marginBottom: '1rem' }} className="animate-fade-in">The Product Map</h2>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '3rem', maxWidth: '600px', margin: '0 auto 3rem auto' }}>
                Scroll through my product journey. Filter by the technology stack and domain. <strong>Click on any project card to view the detailed case study.</strong>
              </p>

              <div className="filter-container animate-fade-in">
                {categories.map(cat => (
                  <button
                    key={cat}
                    className={`filter-btn ${activeFilter === cat ? 'active' : ''}`}
                    onClick={() => setActiveFilter(cat)}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div className="timeline">
              {filteredProjects.map((project, idx) => {
                const side = idx % 2 === 0 ? 'left' : 'right';
                return (
                  <div key={project.id || idx} className={`timeline-item ${side} animate-fade-in`} style={{ animationDelay: `${(idx % 5) * 0.1}s`, opacity: 0, animationFillMode: 'forwards' }}>
                    <div
                      className="glass-card project-card"
                      style={{ padding: '2rem', cursor: 'pointer' }}
                      onClick={() => setSelectedProject(project)}
                    >
                      <h3 className="project-title" style={{ textTransform: 'capitalize' }}>{project.title}</h3>
                      <p className="project-desc">{project.description}</p>

                      <div style={{ marginBottom: '2rem' }}>
                        {project.tags.map(tag => (
                          <span key={tag} className="tech-tag">{tag}</span>
                        ))}
                      </div>

                      <div style={{ display: 'flex', gap: '1rem', marginTop: 'auto', paddingTop: '1rem' }}>
                        <span style={{ color: 'var(--text-secondary)', fontWeight: 500, fontSize: '0.9rem' }}>
                          Click to read case study →
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {filteredProjects.length === 0 && (
              <div style={{ textAlign: 'center', padding: '4rem', color: 'var(--text-secondary)' }}>
                No projects found for this category.
              </div>
            )}
          </div>
        </section>

        <section id="opensource" style={{ backgroundColor: 'var(--bg-color)', padding: '6rem 0' }}>
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
              <h2 style={{ fontSize: '3rem', marginBottom: '1rem' }} className="animate-fade-in">Open Source Contributions</h2>
              <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
                Contributing to global standards, medical imaging research, and digital public goods.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '2rem' }}>
              {openSourceContributions.map((os, idx) => (
                <div
                  key={idx}
                  className="glass-card project-card animate-fade-in"
                  style={{ animationDelay: `${(idx + 1) * 0.1}s`, opacity: 0, animationFillMode: 'forwards', cursor: 'pointer' }}
                  onClick={() => setSelectedOS(os)}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                    <h3 className="project-title" style={{ color: 'var(--accent-purple)', fontSize: '1.4rem' }}>{os.org}</h3>
                    <span style={{ fontSize: '0.8rem', backgroundColor: 'rgba(255,255,255,0.1)', padding: '4px 10px', borderRadius: '12px' }}>{os.role}</span>
                  </div>
                  <p className="project-desc" style={{ WebkitLineClamp: 'unset', marginBottom: '1rem' }}>{os.description}</p>
                  <p style={{ fontSize: '0.9rem', color: '#fff', marginBottom: '1.5rem' }}><strong>Impact:</strong> {os.impact}</p>

                  <div style={{ marginBottom: '2rem' }}>
                    {os.tags.map(tag => (
                      <span key={tag} className="tech-tag">{tag}</span>
                    ))}
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: 'auto', paddingTop: '1rem' }}>
                    <span style={{ color: 'var(--text-secondary)', fontWeight: 500, fontSize: '0.9rem' }}>
                      Click card to read PR details
                    </span>
                    <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                      {os.links.map((linkItem, lIdx) => (
                        <a key={lIdx} href={linkItem.url} target="_blank" rel="noreferrer" className="btn btn-outline" style={{ padding: '0.4rem 0.8rem', fontSize: '0.8rem', flex: 1, textAlign: 'center' }} onClick={(e) => e.stopPropagation()}>
                          {linkItem.text}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="about" style={{ backgroundColor: 'var(--surface-color)', padding: '6rem 0' }}>
          <div className="container">
            <div className="glass-card animate-fade-in" style={{ padding: '4rem', maxWidth: '800px', margin: '0 auto' }}>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem' }} className="gradient-text">Who I Am</h2>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
                I specialize in turning complex datasets and ambiguous problems into scalable, AI-driven solutions. My background spans hardcore data science and distributed networking. I've trained custom YOLO models for smart cities, architected Zero-Knowledge Proof systems for healthcare, and built AI automation bots for daily workflows.
              </p>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
                What sets me apart is not just my ability to write code, but my ability to <strong>understand the entire system architecture</strong>. I think in terms of scalability, performance impact, and data pipelines. Whether it's managing open-source contributions for global medical imaging standards (OSIPI) or building concurrent systems from scratch, I focus on shipping robust, production-ready systems.
              </p>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#fff', fontWeight: 500, position: 'relative' }}>
                I am actively seeking roles where I can leverage AI to solve real-world problems. When I'm not training models, I'm probably <span className="easter-egg-trigger">watching anime<img src="/anime.png" alt="Anime Easter Egg" className="easter-egg-image" /></span> or sleeping. Let's build something incredible.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer style={{ borderTop: '1px solid var(--surface-border)', padding: '3rem 0', textAlign: 'center', color: 'var(--text-secondary)' }}>
        <p style={{ marginBottom: '1rem' }}>© 2026 Devguru. Architecting the future with AI.</p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem' }}>
          <a href="mailto:devguruatwork@gmail.com" onClick={handleEmailClick} style={{ color: '#EA4335', textDecoration: 'none', transition: 'color 0.2s', fontWeight: 600, cursor: 'pointer' }} onMouseOver={(e) => e.target.style.color = '#fff'} onMouseOut={(e) => e.target.style.color = '#EA4335'}>
            {emailCopied ? 'Copied!' : 'Email'}
          </a>
          <a href="https://github.com/Devguru-codes" target="_blank" rel="noreferrer" style={{ color: 'var(--text-secondary)', textDecoration: 'none', transition: 'color 0.2s', fontWeight: 600 }} onMouseOver={(e) => e.target.style.color = '#fff'} onMouseOut={(e) => e.target.style.color = 'var(--text-secondary)'}>GitHub</a>
          <a href="https://www.linkedin.com/in/devguru-tiwari/" target="_blank" rel="noreferrer" style={{ color: '#0a66c2', textDecoration: 'none', transition: 'color 0.2s', fontWeight: 600 }} onMouseOver={(e) => e.target.style.color = '#fff'} onMouseOut={(e) => e.target.style.color = '#0a66c2'}>LinkedIn</a>
        </div>
      </footer>

      {/* Project Details Modal */}
      {selectedProject && (
        <div className={`modal-overlay ${isClosing ? 'closing' : ''}`} onClick={handleCloseProject}>
          <div className={`modal-content glass-card ${isClosing ? 'closing' : ''}`} onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={handleCloseProject}>×</button>
            <h2 style={{ fontSize: '2rem', marginBottom: '1rem', color: '#fff' }}>{selectedProject.title}</h2>
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
              {selectedProject.tags.map(tag => (
                <span key={tag} className="tech-tag">{tag}</span>
              ))}
            </div>
            <div style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--text-secondary)', marginBottom: '3rem' }}>
              {selectedProject.longDescription}
            </div>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <a href={selectedProject.link} target="_blank" rel="noreferrer" className="btn btn-primary">
                View GitHub Repository
              </a>
              {selectedProject.demo && (
                <a href={selectedProject.demo} target="_blank" rel="noreferrer" className="btn btn-outline">
                  Live Demo
                </a>
              )}
            </div>
          </div>
        </div>
      )}

      {/* OS Details Modal */}
      {selectedOS && (
        <div className={`modal-overlay ${isClosing ? 'closing' : ''}`} onClick={handleCloseOS}>
          <div className={`modal-content glass-card ${isClosing ? 'closing' : ''}`} onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={handleCloseOS}>×</button>
            <h2 style={{ fontSize: '2rem', marginBottom: '1rem', color: '#fff' }}>{selectedOS.org} - Contributions</h2>
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
              {selectedOS.tags.map(tag => (
                <span key={tag} className="tech-tag">{tag}</span>
              ))}
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
              {selectedOS.prGroups && selectedOS.prGroups.map((group, gIdx) => (
                <div key={gIdx}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.5rem' }}>
                    <h3 style={{ color: 'var(--accent-color)', fontSize: '1.4rem', margin: 0 }}>
                      Repository: {group.repoName}
                    </h3>
                    {group.repoLink && (
                      <a href={group.repoLink} target="_blank" rel="noreferrer" className="btn btn-outline" style={{ padding: '0.3rem 0.8rem', fontSize: '0.85rem' }}>
                        View Repo
                      </a>
                    )}
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    {group.prs.map((pr, idx) => (
                      <div key={idx} style={{ background: 'rgba(255,255,255,0.02)', padding: '1.5rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
                        <h4 style={{ color: 'var(--accent-purple)', fontSize: '1.1rem', marginBottom: '0.5rem' }}>{pr.title}</h4>
                        <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem', fontSize: '0.95rem', lineHeight: '1.6' }}>{pr.description}</p>
                        <a href={pr.link} target="_blank" rel="noreferrer" style={{ color: 'var(--accent-color)', textDecoration: 'none', fontWeight: 500, fontSize: '0.9rem' }}>View PR →</a>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
