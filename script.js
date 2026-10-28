/* ============================================================
   Modern Developer Portfolio — script.js
   Vanilla JavaScript. No frameworks.

   EASY CONTENT MANAGEMENT
   -----------------------
   Edit the CONFIG object below to update your portfolio.
   - Add/edit skills, projects, education, experience, certifications
   - Update links (resume, social, GitHub, LeetCode)
   - Add project screenshots to /assets/projects/ and update image paths
   ============================================================ */

/* ------------------------------------------------------------------
   1. CONTENT CONFIGURATION (update this section)
   ------------------------------------------------------------------ */

   const CONFIG = {
    site: {
      name: "Vivek Sahu",
      headline: "Full Stack Developer",
      intro:
        "Full Stack Developer with 1+ year of experience building web applications and RESTful APIs with PHP, Laravel and MySQL, and frontend interfaces with HTML, CSS, JavaScript and React. Delivered loan modules, customer forms and authentication workflows for an NBFC platform.",
      resumeUrl:
        "https://drive.google.com/file/d/1zhAkdfeWpKtxypFevfq8HbCO5Ojzdda_/view?usp=drive_link"
    },
  
    social: {
      email: "2.0viveksahu@gmail.com",
      phone: "+91-7389147085",
      github: "https://github.com/20vivek",
      linkedin: "https://www.linkedin.com/in/vivek-k-sahu",
      leetcode: "https://leetcode.com/u/vivek_k_sahu/"
    },
  
    /* ------------------------------------------------------------------
       SKILLS — Add or remove categories and skills here.
       ------------------------------------------------------------------ */
    skills: {
      "Programming Languages": ["PHP", "JavaScript", "Python", "C", "C++", "SQL",],
      "Frontend Development": ["React.js", "HTML5", "CSS3", "Responsive Web Design"],
      "Backend Development": [
        "Laravel",
        "RESTful APIs",
        "MVC Architecture",
        "Authentication Workflows",
        "Backend Business Logic"
      ],
      "Databases": ["MySQL", "MongoDB", "Query Optimization"],
      "Tools & Technologies": ["Git", "GitHub", "VS Code", "Linux"],
      "Core Concepts": [
        "Data Structures & Algorithms",
        "OOP",
        "Operating Systems",
        "Computer Networks",
        "RDBMS",
        "Agile"
      ]
    },
  
    /* ------------------------------------------------------------------
       PROJECTS — Add your project details here.
       Replace image paths with actual files in /assets/projects/.
       ------------------------------------------------------------------ */
    projects: [
      {
        title: "Laravel CRUD Application",
        image: "assets/projects/laravel-crud.jpg",
        alt: "Laravel CRUD Application screenshot",
        description:
          "Built a Laravel application with full Create, Read, Update and Delete operations, structured with MVC (routes, controllers, views). Managed the MySQL database with Laravel migrations and Eloquent ORM; included a SQL backup for quick setup.",
        tech: ["PHP", "Laravel", "MySQL", "MVC"],
        github: "https://github.com/20vivek/Laravel-CRUD",
        live: null
      },
      {
        title: "Travel Booking Website",
        image: "assets/projects/travel-website.jpg",
        alt: "Travel Booking Website screenshot",
        description:
          "Built a full stack web application where users can plan and book tours to destinations of their choice, using PHP and MySQL for the backend and external API integrations for destination data. Developed a fully responsive interface with Flexbox, CSS Grid and media queries, plus CSS animations for a more engaging user experience.",
        tech: ["PHP", "MySQL", "JavaScript", "REST APIs"],
        github: null,
        live: "https://20vivek.github.io/travel-website/"
      },
      {
        title: "Personal Blog Website",
        image: "assets/projects/blog-website.jpg",
        alt: "Personal Blog Website screenshot",
        description:
          "Developed and deployed a responsive blog using HTML5, CSS3 and JavaScript, with DOM manipulation, interactive navigation and cross-browser compatibility.",
        tech: ["HTML5", "CSS3", "JavaScript"],
        github: null,
        live: "https://20vivek.github.io/blog-website/"
      },
      {
        title: "Admin Dashboard",
        image: "assets/projects/admin-dashboard.jpg",
        alt: "Admin Dashboard screenshot",
        description:
        "Responsive analytics and management dashboard featuring interactive data cards, sidebar navigation, and clean UI components built with vanilla HTML, CSS, and JavaScript.",
        tech: ["HTML", "CSS", "JavaScript"],
        github: null,
        live: "https://20vivek.github.io/Admin-Dashbord/"
      }
    ],
  
    /* ------------------------------------------------------------------
       EXPERIENCE — Add roles here. Each role supports title, company,
       location, date, tech (array), and responsibilities (array).
       ------------------------------------------------------------------ */
    experience: [
      {
        title: "Associate Backend Developer",
        company: "Thinkers Paradize",
        location: "Raipur, Chhattisgarh, India",
        date: "Feb 2025 – Mar 2026",
        tech: ["PHP", "Laravel", "MySQL", "HTML", "CSS", "JavaScript", "Git"],
        responsibilities: [
          "Developed and maintained an NBFC/finance company website with loan modules, customer application forms and authentication workflows using PHP, Laravel, MySQL, HTML, CSS and JavaScript.",
          "Built RESTful APIs and backend business logic, and integrated frontend pages with Laravel services and MySQL data.",
          "Optimized MySQL queries and database access to improve page and API response times.",
          "Debugged production issues and refactored code for maintainability, performance and security across loan and customer modules.",
          "Collaborated with cross-functional teams in Agile sprints, using Git for version control and code collaboration."
        ]
      },
      {
        title: "Computer Science Tutor (Self-Employed)",
        company: "Private Tutor",
        location: "India",
        date: "Aug 2022 – Dec 2023",
        tech: ["C", "C++", "OOP", "Mathematics", "Computer Science Fundamentals"],
        responsibilities: [
          "Taught mathematics, core Computer Science subjects and C/C++ programming fundamentals, including OOP concepts, to junior students.",
          "Mentored students in problem-solving techniques and core computer science concepts."
        ]
      }
    ],
  
    /* ------------------------------------------------------------------
       EDUCATION — Add your degree details here.
       ------------------------------------------------------------------ */
    education: [
      {
        degree: "B.Tech in Computer Science and Engineering",
        institution: "Shri Shankaracharya Technical Campus",
        location: "Bhilai, Chhattisgarh, India",
        date: "Aug 2018 – Aug 2022",
        cgpa: "6.73"
      }
    ],
  
    /* ------------------------------------------------------------------
       CERTIFICATIONS — Add your Google Drive certification links here.
       ------------------------------------------------------------------ */
    certifications: [
      {
        name: "PCAP: Programming Essentials in Python",
        issuer: "Cisco Networking Academy® in collaboration with OpenEDG Python Institute",
        date: "6 Jan 2023",
        credentialId: "",
        url: "https://drive.google.com/file/d/1j8KUOe4Uc35TVIbI0DdF0uiBYWxlFwcc/view?usp=drive_link"
      },
      {
        name: "Introduction to Cybersecurity",
        issuer: "Cisco",
        date: "3 Jan 2023",
        credentialId: "",
        url: "https://drive.google.com/file/d/1rou_8FBvv3Ygwn9GD0deOcc2acYA2arK/view?usp=drive_link"
      },
      {
        name: "Getting Started with Artificial Intelligence",
        issuer: "IBM SkillsBuild",
        date: "16 Jul 2025",
        credentialId: "",
        url: "https://drive.google.com/file/d/1UJn9oxWkAKDKNWsT_oT1T5OLoS7OBlWx/view?usp=drive_link"
      }
    ]
  };
  
  /* ------------------------------------------------------------------
     2. RENDER FUNCTIONS
     ------------------------------------------------------------------ */
  
  function escapeHtml(text) {
    if (!text) return "";
    const div = document.createElement("div");
    div.textContent = text;
    return div.innerHTML;
  }
  
  function renderSkills() {
    const grid = document.getElementById("skillsGrid");
    if (!grid) return;
  
    grid.innerHTML = Object.entries(CONFIG.skills)
      .map(
        ([category, items]) => `
        <article class="skill-category reveal">
          <h3>${escapeHtml(category)}</h3>
          <div class="skill-tags">
            ${items.map((skill) => `<span class="skill-tag">${escapeHtml(skill)}</span>`).join("")}
          </div>
        </article>
      `
      )
      .join("");
  }
  
  function renderProjects() {
    const grid = document.getElementById("projectsGrid");
    if (!grid) return;
  
    grid.innerHTML = CONFIG.projects
      .map((proj, index) => {
        const hasGithub = !!proj.github;
        const hasLive = !!proj.live;
  
        return `
       <article class="project-card reveal" data-category="${escapeHtml(proj.category || '')} ${proj.tech.join(' ').toLowerCase()}" data-index="${index}">
          <div class="project-image">
            <img src="${escapeHtml(proj.image)}" alt="${escapeHtml(proj.alt)}" loading="lazy" />
            <div class="project-placeholder-img" style="display:none;">
              ${escapeHtml(proj.title)}<br>Screenshot placeholder
            </div>
          </div>
          <div class="project-body">
            <h3>${escapeHtml(proj.title)}</h3>
            <p>${escapeHtml(proj.description)}</p>
            <div class="project-tech">
              ${proj.tech.map((t) => `<span>${escapeHtml(t)}</span>`).join("")}
            </div>
            <div class="project-links">
              ${hasGithub ? `<a href="${escapeHtml(proj.github)}" target="_blank" rel="noopener">GitHub</a>` : `<a class="secondary" disabled style="opacity:0.5;cursor:default;">GitHub</a>`}
              ${hasLive ? `<a href="${escapeHtml(proj.live)}" target="_blank" rel="noopener">Live Demo</a>` : `<a class="secondary" disabled style="opacity:0.5;cursor:default;">Live Demo</a>`}
            </div>
          </div>
        </article>
      `;
      })
      .join("");
  
    // Handle missing images gracefully
    document.querySelectorAll(".project-image img").forEach((img) => {
      img.addEventListener("error", function () {
        this.style.display = "none";
        const placeholder = this.parentElement.querySelector(".project-placeholder-img");
        if (placeholder) placeholder.style.display = "flex";
      });
    });
  }
  
  function renderExperience() {
    const timeline = document.getElementById("timeline");
    const empty = document.getElementById("experienceEmpty");
  
    if (!CONFIG.experience || CONFIG.experience.length === 0) {
      if (timeline) timeline.style.display = "none";
      if (empty) empty.style.display = "block";
      return;
    }
  
    if (empty) empty.style.display = "none";
  
    timeline.innerHTML = CONFIG.experience
      .map(
        (job) => `
        <div class="timeline-item reveal">
          <div class="timeline-content">
            <span class="timeline-date">${escapeHtml(job.date)}</span>
            <h3>${escapeHtml(job.title)}</h3>
            <div class="timeline-company">${escapeHtml(job.company)}</div>
            <div class="timeline-location">${escapeHtml(job.location)}</div>
            <div class="timeline-tech">${escapeHtml(job.tech.join(", "))}</div>
            <ul class="timeline-responsibilities">
              ${job.responsibilities.map((r) => `<li>${escapeHtml(r)}</li>`).join("")}
            </ul>
          </div>
        </div>
      `
      )
      .join("");
  }
  
  function renderEducation() {
    const grid = document.getElementById("educationGrid");
    const empty = document.getElementById("educationEmpty");
  
    if (!CONFIG.education || CONFIG.education.length === 0) {
      if (grid) grid.style.display = "none";
      if (empty) empty.style.display = "block";
      return;
    }
  
    if (empty) empty.style.display = "none";
  
    grid.innerHTML = CONFIG.education.map((edu) => {
      const metaParts = [];
      if (edu.date) metaParts.push(`<span>${escapeHtml(edu.date)}</span>`);
      if (edu.cgpa) metaParts.push(`<span>CGPA: ${escapeHtml(edu.cgpa)}</span>`);
  
      return `
        <article class="education-card reveal">
          <h3>${escapeHtml(edu.degree)}</h3>
          <div class="institution">${escapeHtml(edu.institution)}</div>
          <div class="degree-meta">
            ${edu.location ? `<span>${escapeHtml(edu.location)}</span>` : ""}
            ${metaParts.join("")}
          </div>
        </article>
      `;
    }).join("");
  }
  
  function renderCertifications() {
    const grid = document.getElementById("certsGrid");
    if (!grid) return;
  
    grid.innerHTML = CONFIG.certifications.map((cert) => {
      const meta = [];
      meta.push(`<span><strong>Issuer:</strong> ${escapeHtml(cert.issuer)}</span>`);
      if (cert.date) meta.push(`<span><strong>Date:</strong> ${escapeHtml(cert.date)}</span>`);
      if (cert.credentialId) meta.push(`<span><strong>Credential ID:</strong> ${escapeHtml(cert.credentialId)}</span>`);
  
      return `
        <article class="cert-card reveal">
          <h3>${escapeHtml(cert.name)}</h3>
          <div class="cert-meta">
            ${meta.join("")}
          </div>
          <a href="${escapeHtml(cert.url)}" class="btn btn-primary" target="_blank" rel="noopener">View Certificate</a>
        </article>
      `;
    }).join("");
  }
  
  /* ------------------------------------------------------------------
     3. TYPEWRITER EFFECT (hero)
     ------------------------------------------------------------------ */
  
  function initTypewriter() {
    const el = document.getElementById("typewriter");
    if (!el) return;
  
    const text = "Building web applications with PHP, Laravel, and React.";
    let i = 0;
  
    function type() {
      if (i < text.length) {
        el.textContent += text.charAt(i);
        i++;
        setTimeout(type, 40);
      } else {
        const blink = document.querySelector(".blink");
        if (blink) blink.style.display = "none";
      }
    }
  
    type();
  }
  
  /* ------------------------------------------------------------------
     4. INTERACTIONS
     ------------------------------------------------------------------ */
  
  function initNavbar() {
    const navbar = document.getElementById("navbar");
    const navLinks = document.querySelectorAll(".nav-link");
    const toggle = document.getElementById("navToggle");
    const menu = document.getElementById("navLinks");
  
    // Sticky background on scroll
    window.addEventListener("scroll", () => {
      if (window.scrollY > 20) {
        navbar.style.boxShadow = "0 4px 24px rgba(0,0,0,0.25)";
      } else {
        navbar.style.boxShadow = "none";
      }
    });
  
    // Active link on scroll
    const sections = document.querySelectorAll("section[id]");
    window.addEventListener("scroll", () => {
      let current = "";
      sections.forEach((section) => {
        const top = window.scrollY;
        const offset = section.offsetTop - 100;
        const height = section.offsetHeight;
        if (top >= offset && top < offset + height) {
          current = section.getAttribute("id");
        }
      });
  
      navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${current}`) {
          link.classList.add("active");
        }
      });
    });
  
    // Mobile menu toggle
    toggle.addEventListener("click", () => {
      const open = menu.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open);
    });
  
    // Close mobile menu when clicking a link
    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        menu.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }
  
  function initProjectFilters() {
    const buttons = document.querySelectorAll(".filter-btn");
    const cards = document.querySelectorAll(".project-card");
  
    buttons.forEach((btn) => {
      btn.addEventListener("click", () => {
        const filter = btn.getAttribute("data-filter");
  
        buttons.forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
  
        cards.forEach((card) => {
          if (filter === "all") {
            card.style.display = "flex";
            setTimeout(() => (card.style.opacity = "1"), 50);
          } else {
            const match = card.getAttribute("data-category").includes(filter);
            if (match) {
              card.style.display = "flex";
              setTimeout(() => (card.style.opacity = "1"), 50);
            } else {
              card.style.opacity = "0";
              setTimeout(() => {
                card.style.display = "none";
              }, 300);
            }
          }
        });
      });
    });
  }
  
  function initRevealAnimations() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
    );
  
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
  }
  
  function initCursor() {
    const cursor = document.getElementById("cursor");
    const glow = document.getElementById("cursorGlow");
  
    // Disable custom cursor on touch devices
    if ("ontouchstart" in window || navigator.maxTouchPoints > 0) {
      cursor.style.display = "none";
      glow.style.display = "none";
      return;
    }
  
    window.addEventListener("mousemove", (e) => {
      cursor.style.left = e.clientX + "px";
      cursor.style.top = e.clientY + "px";
      glow.style.left = e.clientX + "px";
      glow.style.top = e.clientY + "px";
    });
  
    // Magnetic / grow effect on interactive elements
    const interactives = document.querySelectorAll("a, button, .btn, .project-card, .skill-category");
    interactives.forEach((el) => {
      el.addEventListener("mouseenter", () => {
        cursor.style.transform = "translate(-50%, -50%) scale(2.5)";
        cursor.style.background = "transparent";
        cursor.style.border = "2px solid var(--accent)";
      });
      el.addEventListener("mouseleave", () => {
        cursor.style.transform = "translate(-50%, -50%) scale(1)";
        cursor.style.background = "var(--accent)";
        cursor.style.border = "none";
      });
    });
  }
  
  function initBackToTop() {
    const btn = document.getElementById("backToTop");
  
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        btn.classList.add("visible");
      } else {
        btn.classList.remove("visible");
      }
    });
  
    btn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
  
  function initContactForm() {
    const form = document.getElementById("contactForm");
    if (!form) return;
  
    form.addEventListener("submit", (e) => {
      // No backend: open default email client instead of fake success
      e.preventDefault();
  
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const message = document.getElementById("message").value;
  
      const subject = `Portfolio Contact from ${name}`;
      const body = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
const mailtoLink = `mailto:${CONFIG.social.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      window.location.href = mailtoLink;
    });
  }
  
  function initYear() {
    const yearEl = document.getElementById("year");
    if (yearEl) yearEl.textContent = new Date().getFullYear();
  }
  
  /* ------------------------------------------------------------------
     5. INITIALIZE
     ------------------------------------------------------------------ */
  
  document.addEventListener("DOMContentLoaded", () => {
    renderSkills();
    renderProjects();
    renderExperience();
    renderEducation();
    renderCertifications();
  
    initNavbar();
    initProjectFilters();
    initRevealAnimations();
    initCursor();
    initBackToTop();
    initContactForm(fetch("[https://api.web3forms.com/submit](https://api.web3forms.com/submit)"));
    initYear();
    initTypewriter();
  });