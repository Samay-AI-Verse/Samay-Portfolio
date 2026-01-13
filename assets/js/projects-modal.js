// Project Data
const projectsData = {

  'sarathi-astra': {
    id: 'sarathi-astra',
    title: "Sarathi Astra",
    category: "RAG / Document Intelligence",
    tagline: "Your Personal AI Knowledge Guide — Like NotebookLM",
    // NEW FIELDS
    problem: "Students and professionals often struggle to synthesize information from multiple dense documents (PDFs, notes) quickly. Traditional keyword search misses context, and generic AI chatbots hallucinate or lack access to specific private user data.",
    solution: "Sarathi Astra acts as a personalized RAG (Retrieval-Augmented Generation) system. It indexes your specific documents and allows you to 'chat' with them. It retrieves exact context before answering, ensuring accuracy, citation tracking, and deep reasoning over your own knowledge base.",
    // END NEW FIELDS
    description: "Sarathi Astra is a personal knowledge and guidance system that works like NotebookLM. Upload your documents, notes, and PDFs, and it helps you understand, query, summarize, and reason over your own content.",
    features: [
      "Upload and process multiple documents (PDFs, notes, docs) with OCR support",
      "RAG-powered retrieval + reasoning for intelligent answers from your content",
      "Multi-document knowledge base with semantic search",
      "Citation tracking — always shows source references",
      "Acts as a personal guide for learning and knowledge retention"
    ],
    technologies: ["Python", "LangChain", "ChromaDB", "OpenAI API", "FastAPI", "React", "Vector Database"],
    githubUrl: "https://github.com/yourusername/sarathi-astra",
    demoUrl: null,
    screenshots: [
      'assets/img/portfolio/sarathi_astra.png'
    ]
  },
  'chetanalabs': {
    id: 'chetanalabs',
    title: "ChetanaLabs",
    category: "Voice AI / HR Tech",
    tagline: "AI-powered HR voice assistant",
    problem: "HR teams spend hundreds of hours manually screening candidates, asking repetitive questions, and scheduling interviews, leading to hiring bottlenecks and fatigue.",
    solution: "ChetanaLabs automates the first round of screening using a Voice AI agent. It calls candidates, conducts natural conversations, evaluates responses in real-time, and scores them, allowing HR to focus only on the best talent.",
    description: "AI-powered HR voice assistant automating candidate screening, calling workflows, and interview scheduling. Streamlines the recruitment process with intelligent automation and natural language processing.",
    features: [
      "Automated candidate screening calls",
      "Natural language interview scheduling",
      "Real-time conversation analysis",
      "Candidate evaluation and scoring",
      "Integration with HR management systems"
    ],
    technologies: ["Node.js", "Express", "MongoDB", "Vapi AI", "React", "WebSocket"],
    githubUrl: "https://github.com/Samay-AI-Verse/ChetanaLabs-",
    demoUrl: null,
    screenshots: [
      'assets/img/portfolio/chetanalabs.png'
    ]
  },
  'trinetra-drone': {
    id: 'trinetra-drone',
    title: "Trinetra System",
    category: "Drone Tech / Security",
    tagline: "Full-Control Drone System for Authorized Officers",
    problem: "Security forces lack real-time, autonomous aerial surveillance that is easy to control and integrates seamlessly with ground command for immediate threat detection.",
    solution: "Trinetra provides an end-to-end authorized drone control system with manual flight override, live encrypted video streaming, and AI-based object detection for immediate threat flagging on a centralized dashboard.",
    description: "Trinetra is an officer-only drone control system designed for police, disaster response, and security forces. It provides complete situational control over drone operations.",
    features: [
      "🕹️ Full drone control — manual flight, takeoff/land",
      "🎥 Live camera feed with zoom, thermal vision",
      "🤖 AI intelligence — object detection (person, vehicle, fire)",
      "🗺️ Mission control — patrol routes, waypoints",
      "🔐 Enterprise security — role-based access"
    ],
    technologies: ["Flutter", "FastAPI", "PostgreSQL", "YOLO / RT-DETR", "WebRTC", "WebSocket"],
    githubUrl: "https://github.com/Samay-AI-Verse/Trinetra",
    demoUrl: null,
    screenshots: [
      'assets/img/portfolio/trinetra_drone.png'
    ]
  },
  'dream-weaver': {
    id: 'dream-weaver',
    title: "Dream Weaver AI",
    category: "Generative AI",
    tagline: "Your Creative Co-Pilot for Storytelling",
    problem: "Writers and creators often face 'blank page syndrome' and struggle to maintain consistency in long-form stories or visualize their abstract ideas.",
    solution: "Dream Weaver serves as an intelligent co-pilot that accepts multimodal input (sketches, text). It retains deep context of the story arc to suggest plot points, character developments, and visualizations without losing the narrative thread.",
    description: "Dream Weaver AI is a creative co-pilot designed for storytelling, ideation, and design. It helps users generate, expand, and refine creative work through multimodal input.",
    features: [
      "🎨 AI-driven story generation",
      "🧠 Deep context retention",
      "🖼️ Multimodal input support",
      "📝 Creative writing assistance"
    ],
    technologies: ["Python", "OpenAI API", "LangChain", "Streamlit", "Vector Database"],
    githubUrl: "https://github.com/Samay-AI-Verse/DreamWeaver-Project.git",
    demoUrl: null,
    screenshots: [
      'assets/img/portfolio/dream_weaver.png'
    ]
  },
  'shakti-chatbot': {
    id: 'shakti-chatbot',
    title: "Shakti AI",
    category: "AI Companion",
    tagline: "Your Personal AI Companion for Support",
    problem: "Mental health support is often expensive, inaccessible, or stigmatized, leaving many women without a safe space to express their concerns or seek guidance.",
    solution: "Shakti is a privacy-first, multilingual AI companion available 24/7. It provides empathetic, non-judgmental conversation and mental wellness support tailored specifically for women's safety and emotional health.",
    description: "Shakti is a fully functional AI chatbot designed to be a personal companion for women. It provides empathetic, human-like conversations with a focus on mental health support.",
    features: [
      "🧠 Mental health & emotional support",
      "💬 Human-like, supportive chat experience",
      "🌍 Multilingual support",
      "🔒 Privacy-first design"
    ],
    technologies: ["Python", "OpenAI API", "LangChain", "NLP", "Streamlit"],
    githubUrl: "https://github.com/Samay-AI-Verse/Chatbot-Women-Sefty",
    demoUrl: null,
    screenshots: [
      'assets/img/portfolio/womens_safety_ai.png'
    ]
  },
  'cold-email-generator': {
    id: 'cold-email-generator',
    title: "Cold Email Generator",
    category: "AI / Productivity",
    tagline: "AI-Powered Outreach Made Easy",
    problem: "Creating personalized cold emails at scale is time-consuming, and generic templates often end up in the spam folder, resulting in low conversion rates.",
    solution: "This tool uses LLMs to analyze the recipient's profile or industry and generates highly personalized, persuasion-optimized email drafts instantly, increasing engagement rates.",
    description: "The Cold Email Generator is a cutting-edge AI tool that automates the process of crafting personalized, compelling cold emails in seconds.",
    features: [
      "🔹 AI-driven personalized email generation",
      "🔹 Industry-specific templates",
      "🔹 Boosts response rates"
    ],
    technologies: ["Python", "OpenAI API", "Streamlit", "LangChain"],
    githubUrl: "https://github.com/Samay-Verse/ColdEmailGenerator.git",
    demoUrl: null,
    screenshots: [
      'assets/img/projects/coldemail.png'
    ]
  },
  'hotel-booking-analysis': {
    id: 'hotel-booking-analysis',
    title: "Hotel Booking Analysis",
    category: "Data Science",
    tagline: "Uncovering insights from booking data",
    problem: "Hotels struggle to understand high cancellation rates and booking patterns, leading to revenue loss and poor inventory management.",
    solution: "This project provides a comprehensive EDA (Exploratory Data Analysis) dashboard that identifies key factors driving cancellations and seasonal trends, enabling data-driven pricing strategies.",
    description: "This project focuses on analyzing a real-world hotel booking dataset to uncover meaningful insights about customer behavior, booking trends, and cancellation patterns.",
    features: [
      "Comprehensive exploratory data analysis (EDA)",
      "Customer behavior pattern identification",
      "Cancellation pattern analysis"
    ],
    technologies: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
    githubUrl: "https://github.com/Samay-AI-Verse/hotel-booking-insights",
    demoUrl: null,
    screenshots: [
      'assets/img/projects/Hotel.png'
    ]
  },
  'movie-recommendation': {
    id: 'movie-recommendation',
    title: "Movie Recommender",
    category: "Machine Learning",
    tagline: "Personalized movie recommendations",
    problem: "Users are overwhelmed by content choices and struggle to find movies that match their specific tastes among thousands of options.",
    solution: "A hybrid recommendation engine that combines Content-Based Filtering (matching movie attributes) and Collaborative Filtering (user similarities) to suggest the most relevant movies.",
    description: "Built a personalized movie recommendation system using machine learning techniques. The system analyzes user preferences and movie attributes to suggest relevant films.",
    features: [
      "Content-based filtering using movie metadata",
      "Collaborative filtering using user ratings",
      "Real-time suggestions with TMDB API"
    ],
    technologies: ["Python", "Scikit-learn", "Surprise", "Streamlit", "TMDB API"],
    githubUrl: "https://github.com/Samay-AI-Verse/hotel-booking-insights",
    demoUrl: null,
    screenshots: [
      'assets/img/projects/movie.png'
    ]
  },
  'loan-prediction': {
    id: 'loan-prediction',
    title: "Loan Prediction System",
    category: "Machine Learning / MLOps",
    tagline: "End-to-End Deployed ML Pipeline",
    problem: "Financial institutions struggle with manual loan approval processes that are time-consuming and prone to human error, leading to inefficient risk assessment.",
    solution: "This system automates the eligibility process using a Random Forest model wrapped in a FastAPI backend. It is fully containerized with Docker and hosted on Hugging Face Spaces with a user-friendly Gradio interface for real-time predictions.",
    description: "A robust Machine Learning pipeline designed to assess loan eligibility automatically. The system utilizes the Random Forest algorithm for high-accuracy predictions and is built for production using modern MLOps practices.",
    features: [
      "🌲 Random Forest Algorithm for high accuracy",
      "🐳 Fully containerized using Docker",
      "⚡ Fast REST API endpoints via FastAPI",
      "🤗 Hosted on Hugging Face Spaces",
      "🖥️ Interactive Gradio UI for live testing"
    ],
    technologies: ["Python", "Random Forest", "FastAPI", "Docker", "Hugging Face", "Gradio"],
    githubUrl: "https://github.com/Samay-AI-Verse/Loan-Prediction-System",
    demoUrl: "https://huggingface.co/spaces/your-username/loan-prediction",
    screenshots: [
      'assets/img/projects/loan_prediction.png'
    ]
  }
};

// Modal Functions
function openProjectModal(projectId) {
  const project = projectsData[projectId];
  if (!project) return;

  const modal = document.getElementById('projectModal');
  const modalContent = document.getElementById('modalProjectContent');

  // Build technologies HTML
  let technologiesHTML = '';
  if (project.technologies && project.technologies.length > 0) {
    technologiesHTML = `
      <div class="modal-technologies">
        <h4><i class="bi bi-cpu"></i> Tech Stack</h4>
        <div class="tech-tags">
          ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
        </div>
      </div>
    `;
  }

  // Build features HTML
  let featuresHTML = '';
  if (project.features && project.features.length > 0) {
    featuresHTML = `
      <div class="modal-features">
        <h4><i class="bi bi-stars"></i> Key Features</h4>
        <ul class="feature-list">
          ${project.features.map(feature => `<li>${feature}</li>`).join('')}
        </ul>
      </div>
    `;
  }

  // Build Problem/Solution HTML (New Section)
  let probSolHTML = '';
  if (project.problem || project.solution) {
    probSolHTML = `
      <div class="modal-prob-sol">
        <div class="prob-box">
          <h4><i class="bi bi-exclamation-triangle"></i> Problem Statement</h4>
          <p>${project.problem || "Information coming soon."}</p>
        </div>
        <div class="sol-box">
          <h4><i class="bi bi-lightbulb"></i> Our Solution</h4>
          <p>${project.solution || "Information coming soon."}</p>
        </div>
      </div>
    `;
  }

  // Build Image HTML (For right sidebar)
  let imageHTML = '';
  if (project.screenshots && project.screenshots.length > 0) {
    imageHTML = `
      <div class="modal-side-image">
        <img src="${project.screenshots[0]}" alt="${project.title}">
      </div>
    `;
  }

  // Build Links
  let linksHTML = '<div class="modal-links">';
  if (project.githubUrl) {
    linksHTML += `<a href="${project.githubUrl}" target="_blank" class="modal-btn github"><i class="bi bi-github"></i> GitHub</a>`;
  }
  if (project.demoUrl) {
    linksHTML += `<a href="${project.demoUrl}" target="_blank" class="modal-btn demo"><i class="bi bi-box-arrow-up-right"></i> Live Demo</a>`;
  }
  linksHTML += '</div>';

  // Assemble Content - Image moved to right sidebar
  modalContent.innerHTML = `
    <div class="modal-top-header">
       <span class="modal-badge">${project.category}</span>
       <h2>${project.title}</h2>
       <p class="tagline">${project.tagline}</p>
    </div>

    <div class="modal-body-grid">
       <div class="modal-main-col">
          ${probSolHTML}
          <div class="modal-description-text">
            <h4><i class="bi bi-file-text"></i> About</h4>
            <p>${project.description}</p>
          </div>
       </div>
       <div class="modal-side-col">
          ${imageHTML}
          ${technologiesHTML}
          ${featuresHTML}
          ${linksHTML}
       </div>
    </div>
  `;

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
  modal.style.display = 'flex';
}

function closeProjectModal() {
  const modal = document.getElementById('projectModal');
  modal.classList.remove('active');
  setTimeout(() => {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
  }, 300);
}

function initializeProjectModals() {
  document.querySelectorAll('.portfolio-card').forEach(card => {
    card.addEventListener('click', function (e) {
      if (e.target.tagName === 'A' || e.target.closest('a')) return;
      const projectId = this.getAttribute('data-project-id');
      if (projectId) openProjectModal(projectId);
    });
  });

  const closeBtn = document.querySelector('.modal-close');
  if (closeBtn) closeBtn.addEventListener('click', closeProjectModal);

  const modal = document.getElementById('projectModal');
  if (modal) {
    modal.addEventListener('click', function (e) {
      if (e.target === modal) closeProjectModal();
    });
  }

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeProjectModal();
  });
}

document.addEventListener('DOMContentLoaded', initializeProjectModals);