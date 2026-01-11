// Project Data
const projectsData = {

  'sarathi-astra': {
    id: 'sarathi-astra',
    title: "Sarathi Astra",
    category: "RAG / Document Intelligence",
    tagline: "Your Personal AI Knowledge Guide — Like NotebookLM",
    description: "Sarathi Astra is a personal knowledge and guidance system that works like NotebookLM. Upload your documents, notes, and PDFs, and it helps you understand, query, summarize, and reason over your own content. Built with RAG-style logic (retrieval + reasoning), it acts as your 'sarthi' (guide) — not just a chatbot, but an intelligent assistant focused on helping students, learners, and professionals master their own knowledge base.",
    features: [
      "Upload and process multiple documents (PDFs, notes, docs) with OCR support",
      "RAG-powered retrieval + reasoning for intelligent answers from your content",
      "Multi-document knowledge base with semantic search",
      "Contextual Q&A that understands your documents deeply",
      "Citation tracking — always shows source references",
      "Acts as a personal guide for learning and knowledge retention"
    ],
    technologies: ["Python", "LangChain", "ChromaDB", "OpenAI API", "FastAPI", "React", "Vector Database"],
    githubUrl: "https://github.com/yourusername/sarathi-astra",
    demoUrl: null,
    screenshots: [
      'assets/img/portfolio/sarathi_astra.png',
      'assets/img/portfolio/sarathi_astra.png',
      'assets/img/portfolio/sarathi_astra.png',
      'assets/img/portfolio/sarathi_astra.png'
    ]
  },
  'chetanalabs': {
    id: 'chetanalabs',
    title: "ChetanaLabs",
    category: "Voice AI / HR Tech",
    tagline: "AI-powered HR voice assistant",
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
      'assets/img/portfolio/chetanalabs.png',
      'assets/img/portfolio/chetanalabs.png',
      'assets/img/portfolio/chetanalabs.png',
      'assets/img/portfolio/chetanalabs.png'
    ]
  },
  'dream-weaver': {
    id: 'dream-weaver',
    title: "Dream Weaver AI",
    category: "Generative AI / Creative Co-Pilot",
    tagline: "Your Creative Co-Pilot for Storytelling & Ideation",
    description: "Dream Weaver AI is a creative co-pilot designed for storytelling, ideation, and design. It helps users generate, expand, and refine creative work through multimodal input (text, images, sketches). Unlike surface-level text generators, Dream Weaver emphasizes deep context retention, versioning, and intuitive prompts. It augments the creator's vision rather than replacing it — giving users full control while enhancing their creative process. Perfect for writers, designers, and non-creatives exploring new ideas.",
    features: [
      "🎨 AI-driven story generation with character and plot development",
      "🧠 Deep context retention — remembers your creative journey",
      "🖼️ Multimodal input support (text, images, sketches)",
      "📝 Creative writing assistance with versioning and iteration",
      "🧩 User control — AI augments, doesn't rewrite everything",
      "💡 Intuitive prompts for brainstorming and idea exploration"
    ],
    technologies: ["Python", "OpenAI API", "LangChain", "Streamlit", "Vector Database", "Multimodal AI"],
    githubUrl: "https://github.com/Samay-AI-Verse/DreamWeaver-Project.git",
    demoUrl: null,
    screenshots: [
      'assets/img/portfolio/dream_weaver.png',
      'assets/img/portfolio/dream_weaver.png',
      'assets/img/portfolio/dream_weaver.png',
      'assets/img/portfolio/dream_weaver.png'
    ]
  },
  'trinetra-drone': {
    id: 'trinetra-drone',
    title: "Trinetra — Officer Drone Control System",
    category: "Drone Tech / Security & Surveillance",
    tagline: "Full-Control Drone System for Authorized Officers",
    description: "Trinetra is an officer-only drone control system designed for police, disaster response, and security forces. It provides complete situational control over drone operations, camera feeds, mission planning, and AI-powered threat detection. Built with enterprise-level security (role-based access, encrypted communication, mission logs), it gives officers full command over manual flight, live video streaming, object detection, and geofencing. The AI intelligence layer assists with threat detection and event flagging — but never auto-acts, keeping human officers in control.",
    features: [
      "🕹️ Full drone control — manual flight, takeoff/land, emergency override",
      "🎥 Live camera feed with zoom, thermal vision, and GPS-tagged recording",
      "🤖 AI intelligence — object detection (person, vehicle, fire), threat scoring",
      "🗺️ Mission control — patrol routes, waypoints, geofencing alerts",
      "🔐 Enterprise security — role-based access, device binding, encrypted comms",
      "📊 Officer dashboard — live status, AI alerts, incident reports"
    ],
    technologies: ["Flutter", "FastAPI", "PostgreSQL", "YOLO / RT-DETR", "WebRTC", "WebSocket", "Computer Vision", "Drone SDK"],
    githubUrl: "https://github.com/Samay-AI-Verse/Trinetra",
    demoUrl: null,
    screenshots: [
      'assets/img/portfolio/trinetra_drone.png',
      'assets/img/portfolio/trinetra_drone.png',
      'assets/img/portfolio/trinetra_drone.png',
      'assets/img/portfolio/trinetra_drone.png'
    ]
  },
  'shakti-chatbot': {
    id: 'shakti-chatbot',
    title: "Shakti AI Chatbot",
    category: "AI Companion",
    tagline: "Your Personal AI Companion for Support & Well-being",
    description: "Shakti is a fully functional AI chatbot designed to be a personal companion for women. It provides empathetic, human-like conversations with a focus on mental health support, stress relief, and emotional well-being. The AI is supportive, non-judgmental, and privacy-first, creating a safe space for users to express themselves. With multilingual capabilities, Shakti ensures everyone can communicate in their preferred language, making support accessible to all.",
    features: [
      "🧠 Mental health & emotional support through empathetic AI conversations",
      "💬 Human-like, supportive, and non-judgmental chat experience",
      "🌍 Multilingual support — communicate in your preferred language",
      "🔒 Privacy-first design with end-to-end encrypted conversations",
      "� Personalized responses based on conversation context and user needs",
      "🤝 24/7 availability for stress relief and emotional guidance",
      "🎯 Focused on women's well-being and safety concerns"
    ],
    technologies: ["Python", "OpenAI API", "LangChain", "NLP", "Streamlit", "Multilingual AI Models", "Sentiment Analysis"],
    githubUrl: "https://github.com/Samay-AI-Verse/Chatbot-Women-Sefty",
    demoUrl: null,
    screenshots: [
      'assets/img/portfolio/womens_safety_ai.png',
      'assets/img/portfolio/womens_safety_ai.png',
      'assets/img/portfolio/womens_safety_ai.png',
      'assets/img/portfolio/womens_safety_ai.png'
    ]
  },
  'cold-email-generator': {
    id: 'cold-email-generator',
    title: "Cold Email Generator",
    category: "AI / Productivity",
    tagline: "AI-Powered Outreach Made Easy",
    description: "💌 The Cold Email Generator is a cutting-edge AI tool that automates the process of crafting personalized, compelling cold emails in seconds. Designed for sales, marketing, freelancers, and job seekers, it helps you break through inbox clutter and capture attention with customized messages tailored to your audience.",
    features: [
      "🔹 AI-driven email generation: Personalizes every message based on your inputs",
      "🔹 Industry-specific templates: Tailored to sales, marketing, freelancing, and more",
      "🔹 Boosts response rates: Makes your outreach stand out",
      "🔹 Easy-to-use interface: Write smarter, not harder"
    ],
    technologies: ["Python", "OpenAI API", "Streamlit", "LangChain"],
    githubUrl: "https://github.com/Samay-Verse/ColdEmailGenerator.git",
    demoUrl: null,
    screenshots: [
      'assets/img/projects/cold_email_1.png',
      'assets/img/projects/cold_email_2.png',
      'assets/img/projects/cold_email_3.png',
      'assets/img/projects/cold_email_4.png'
    ]
  },
  'hotel-booking-analysis': {
    id: 'hotel-booking-analysis',
    title: "Hotel Booking Data Analysis & Insights",
    category: "Data Science / Analytics",
    tagline: "Uncovering insights from hotel booking data",
    description: "This project focuses on analyzing a real-world hotel booking dataset to uncover meaningful insights about customer behavior, booking trends, and cancellation patterns. The goal was to perform exploratory data analysis (EDA) and visualize trends to help hotels improve their business strategy and customer satisfaction.",
    features: [
      "Comprehensive exploratory data analysis (EDA)",
      "Customer behavior pattern identification",
      "Booking trend visualization",
      "Cancellation pattern analysis",
      "Data-driven business recommendations"
    ],
    technologies: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Jupyter Notebook"],
    githubUrl: "https://github.com/Samay-AI-Verse/hotel-booking-insights",
    demoUrl: null,
    screenshots: [
      'assets/img/projects/hotel_analysis_1.png',
      'assets/img/projects/hotel_analysis_2.png',
      'assets/img/projects/hotel_analysis_3.png',
      'assets/img/projects/hotel_analysis_4.png'
    ]
  },
  'movie-recommendation': {
    id: 'movie-recommendation',
    title: "Movie Recommendation System",
    category: "Machine Learning / Recommendation",
    tagline: "Personalized movie recommendations using ML",
    description: "🎬 Built a personalized movie recommendation system using machine learning techniques. The system analyzes user preferences and movie attributes to suggest relevant films, improving user engagement and viewing experience. Utilized both content-based and collaborative filtering methods to ensure accurate recommendations.",
    features: [
      "Content-based filtering using movie metadata (genre, cast, director, etc.)",
      "Collaborative filtering using user ratings (user-user and item-item similarity)",
      "Integrated cosine similarity and matrix factorization techniques",
      "Interactive UI for search and recommendations",
      "Real-time suggestions with TMDB API integration"
    ],
    technologies: ["Python", "Pandas", "NumPy", "Scikit-learn", "Surprise", "Streamlit", "TMDB API"],
    githubUrl: "https://github.com/Samay-AI-Verse/hotel-booking-insights",
    demoUrl: null,
    screenshots: [
      'assets/img/projects/movie_rec_1.png',
      'assets/img/projects/movie_rec_2.png',
      'assets/img/projects/movie_rec_3.png',
      'assets/img/projects/movie_rec_4.png'
    ]
  }
};

// Modal Functions
function openProjectModal(projectId) {
  const project = projectsData[projectId];
  if (!project) return;

  const modal = document.getElementById('projectModal');
  const modalContent = document.getElementById('modalProjectContent');

  // Build modal content
  let screenshotsHTML = '';
  if (project.screenshots && project.screenshots.length > 0) {
    screenshotsHTML = `
      <div class="modal-screenshots">
       
        <div class="screenshots-single">
          <a href="${project.screenshots[0]}" class="screenshot-item glightbox" data-gallery="project-${projectId}">
            <img src="${project.screenshots[0]}" alt="${project.title} screenshot" class="screenshot-img">
            <div class="screenshot-overlay">
              <i class="bi bi-zoom-in"></i>
            </div>
          </a>
        </div>
      </div>
    `;
  }

  let featuresHTML = '';
  if (project.features && project.features.length > 0) {
    featuresHTML = `
      <div class="modal-features">
        <h4>✨ Key Features</h4>
        <ul>
          ${project.features.map(feature => `<li>${feature}</li>`).join('')}
        </ul>
      </div>
    `;
  }

  let technologiesHTML = '';
  if (project.technologies && project.technologies.length > 0) {
    technologiesHTML = `
      <div class="modal-technologies">
        <h4>🔧 Built With</h4>
        <div class="tech-tags">
          ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
        </div>
      </div>
    `;
  }

  let actionsHTML = `<div class="modal-actions">`;
  if (project.githubUrl) {
    actionsHTML += `
      <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="modal-btn modal-btn-github">
        <i class="bi bi-github"></i> View on GitHub
      </a>
    `;
  }
  if (project.demoUrl) {
    actionsHTML += `
      <a href="${project.demoUrl}" target="_blank" rel="noopener noreferrer" class="modal-btn modal-btn-demo">
        <i class="bi bi-play-circle"></i> Live Demo
      </a>
    `;
  }
  actionsHTML += `</div>`;

  modalContent.innerHTML = `
    <div class="modal-header">
      <div>
        <span class="modal-category">${project.category}</span>
        <h2 class="modal-title">${project.title}</h2>
        <p class="modal-tagline">${project.tagline}</p>
      </div>
    </div>
    
    <div class="modal-description">
      <h4>📋 About This Project</h4>
      <p>${project.description}</p>
    </div>
    
    ${featuresHTML}
    
    ${technologiesHTML}
    
    ${actionsHTML}
    
    ${screenshotsHTML}
  `;

  modal.style.display = 'flex';
  document.body.style.overflow = 'hidden';

  // Animate modal in
  setTimeout(() => {
    modal.classList.add('active');
  }, 10);
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
  // Add click handlers to all project cards
  document.querySelectorAll('.portfolio-card').forEach(card => {
    card.style.cursor = 'pointer';
    card.addEventListener('click', function (e) {
      // Don't open modal if clicking on a link inside the card
      if (e.target.tagName === 'A' || e.target.closest('a')) {
        return;
      }

      const projectId = this.getAttribute('data-project-id');
      if (projectId) {
        openProjectModal(projectId);
      }
    });
  });

  // Close modal on X button click
  const closeBtn = document.querySelector('.modal-close');
  if (closeBtn) {
    closeBtn.addEventListener('click', closeProjectModal);
  }

  // Close modal on overlay click
  const modal = document.getElementById('projectModal');
  if (modal) {
    modal.addEventListener('click', function (e) {
      if (e.target === modal) {
        closeProjectModal();
      }
    });
  }

  // Close modal on ESC key
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      closeProjectModal();
    }
  });
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', initializeProjectModals);
