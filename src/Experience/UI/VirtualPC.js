export default class VirtualPC {
  constructor(experience) {
    this.experience = experience;
    this.isOpen = false;
    this.activeWindow = null;
    this.terminalHistory = [
      'JubayerOS v3.5 Pro (x86_64-pc-cloud)',
      'Type "help" or click suggested command pills below.'
    ];

    this.projectsList = [
      {
        id: 'special-agent',
        name: 'Special Agent One',
        category: 'live',
        badge: 'LIVE ON VERCEL',
        tech: 'Next.js 15 • Python • Multi-Agent',
        desc: 'Autonomous Agent Framework with terminal reasoning loops, multi-tool scheduling, and contextual workspace synthesis.',
        liveUrl: 'https://special-agent-one.vercel.app',
        repoUrl: 'https://github.com/Jubayer-AI-Studio/special-agent'
      },
      {
        id: 'ai-video',
        name: 'AI Content Engine',
        category: 'ai',
        badge: 'AI PRODUCTION',
        tech: 'Google Veo 3.1 • Gemini 3.7 • TTS',
        desc: 'High-speed cinematic video synthesis platform with dialect-aware audio dubbing and real-time generation.',
        liveUrl: null,
        repoUrl: 'https://github.com/Jubayer-AI-Studio'
      },
      {
        id: 'shono-ai',
        name: 'Shono AI (Bangla Jarvis)',
        category: 'ai',
        badge: 'VOICE AI',
        tech: 'FastAPI • Whisper • Desktop Automation',
        desc: 'Bangla dialect-aware AI desktop assistant for voice workflows, automated file management, and speech synthesis.',
        liveUrl: null,
        repoUrl: 'https://github.com/Jubayer-AI-Studio'
      },
      {
        id: 'slk-studio',
        name: 'Mercedes 3D Studio',
        category: 'saas',
        badge: 'WEBGL 3D',
        tech: 'Three.js • WebGL • GSAP • PBR',
        desc: 'Real-time automotive engineering showroom with full mechanical disassembly, audio synthesis, and sky penthouse architecture.',
        liveUrl: 'https://max-portfolio-eta.vercel.app',
        repoUrl: 'https://github.com/Jubayer-AI-Studio/max-portfolio'
      },
      {
        id: 'saas-billing',
        name: 'Enterprise SaaS Hub',
        category: 'saas',
        badge: 'FULL STACK',
        tech: 'Next.js 15 • Stripe • PostgreSQL • Redis',
        desc: 'Multi-tenant cloud management platform with subscription billing, team RBAC, and telemetry analytics.',
        liveUrl: null,
        repoUrl: 'https://github.com/Jubayer-AI-Studio'
      },
      {
        id: 'github-all',
        name: '22 Repositories Directory',
        category: 'games',
        badge: 'OPEN SOURCE',
        tech: 'SaaS • AI Agents • Three.js Games',
        desc: 'Explore the full portfolio of 22 active open-source repositories hosted on GitHub Studio.',
        liveUrl: 'https://github.com/Jubayer-AI-Studio',
        repoUrl: 'https://github.com/Jubayer-AI-Studio'
      }
    ];

    this.createDOM();
    this.bindEvents();
  }

  createDOM() {
    this.container = document.createElement('div');
    this.container.id = 'virtual-pc-container';
    this.container.className = 'virtual-pc-container';

    this.container.innerHTML = `
      <!-- Realistic Monitor Bezel & Frame -->
      <div class="virtual-pc-bezel">
        <!-- Bezel Top Sensor & Camera Dot -->
        <div class="bezel-top-sensor">
          <span class="bezel-camera-dot"></span>
        </div>

        <!-- Monitor Screen Display -->
        <div class="pc-screen" id="pc-screen">
          
          <!-- Top OS Menu Bar -->
          <header class="pc-os-topbar">
            <div class="pc-topbar-left">
              <span class="pc-apple-icon">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
              </span>
              <span class="pc-os-title">JubayerOS 3.5 Pro</span>
              <span class="pc-status-tag">CPU: 2% • 60 FPS • VERCEL ACTIVE</span>
            </div>

            <div class="pc-topbar-right">
              <span class="pc-clock" id="pc-live-clock">12:00 PM</span>
              <button class="pc-exit-button" id="pc-exit-trigger" title="Return to Mercedes SLK 55 AMG">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="6"></line></svg>
                <span>Exit PC / Return to Car</span>
              </button>
            </div>
          </header>

          <!-- Desktop Workspace -->
          <main class="pc-desktop-workspace" id="pc-desktop-workspace">
            
            <!-- Grid of Touch/Click Desktop Square App Icons -->
            <div class="pc-desktop-icons">
              
              <!-- 1. My Projects (Square App Icon) -->
              <div class="pc-app-icon" data-app="projects" tabindex="0">
                <div class="app-icon-box folder-glow">
                  <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#FFD700" stroke-width="1.8">
                    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                  </svg>
                  <span class="app-icon-badge">22</span>
                </div>
                <span class="app-icon-name">My Projects</span>
              </div>

              <!-- 2. Special Agent One (Live App) -->
              <div class="pc-app-icon" data-app="agent" tabindex="0">
                <div class="app-icon-box live-agent-glow">
                  <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#10B981" stroke-width="2">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                  <span class="app-icon-pulse"></span>
                </div>
                <span class="app-icon-name">Special Agent</span>
              </div>

              <!-- 3. About Me -->
              <div class="pc-app-icon" data-app="about" tabindex="0">
                <div class="app-icon-box user-glow">
                  <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#38BDF8" stroke-width="1.8">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </div>
                <span class="app-icon-name">About Me</span>
              </div>

              <!-- 4. Upwork Hub -->
              <div class="pc-app-icon" data-app="upwork" tabindex="0">
                <div class="app-icon-box upwork-glow">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="#14A800">
                    <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-3.715 0-5.596 2.493-6.236 4.351-.837-1.636-1.464-3.528-1.748-4.99H7.63v6.529c0 1.95-1.587 3.537-3.537 3.537-1.95 0-3.537-1.587-3.537-3.537V4.378H0v6.529c0 3.57 2.903 6.473 6.473 6.473 2.274 0 4.275-1.177 5.429-2.966.528 1.411 1.444 2.68 2.802 3.522 1.272.788 2.756 1.222 4.316 1.222 4.333 0 7.857-3.524 7.857-7.857 0-4.333-3.524-7.857-7.857-7.857z"/>
                  </svg>
                </div>
                <span class="app-icon-name">Upwork Hub</span>
              </div>

              <!-- 5. Social Channels -->
              <div class="pc-app-icon" data-app="social" tabindex="0">
                <div class="app-icon-box fb-glow">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="#1877F2">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </div>
                <span class="app-icon-name">Social Hub</span>
              </div>

              <!-- 6. Dev Terminal -->
              <div class="pc-app-icon" data-app="terminal" tabindex="0">
                <div class="app-icon-box term-glow">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#F59E0B" stroke-width="2">
                    <polyline points="4 17 10 11 4 5"></polyline>
                    <line x1="12" y1="19" x2="20" y2="19"></line>
                  </svg>
                </div>
                <span class="app-icon-name">Terminal</span>
              </div>

            </div>

            <!-- Active OS Window Layer -->
            <div class="pc-window-layer" id="pc-window-layer"></div>

          </main>

          <!-- Bottom Floating Dock -->
          <footer class="pc-dock">
            <button class="dock-item" data-app="projects" title="Projects">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FFD700" stroke-width="2"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
            </button>
            <button class="dock-item" data-app="agent" title="Special Agent One Live">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#10B981" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
            </button>
            <button class="dock-item" data-app="about" title="About Jubayer">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#38BDF8" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
            </button>
            <button class="dock-item" data-app="upwork" title="Upwork Profile">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="#14A800"><path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-3.715 0-5.596 2.493-6.236 4.351-.837-1.636-1.464-3.528-1.748-4.99H7.63v6.529c0 1.95-1.587 3.537-3.537 3.537-1.95 0-3.537-1.587-3.537-3.537V4.378H0v6.529c0 3.57 2.903 6.473 6.473 6.473 2.274 0 4.275-1.177 5.429-2.966.528 1.411 1.444 2.68 2.802 3.522 1.272.788 2.756 1.222 4.316 1.222 4.333 0 7.857-3.524 7.857-7.857 0-4.333-3.524-7.857-7.857-7.857z"/></svg>
            </button>
            <button class="dock-item" data-app="social" title="Facebook Studio">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="#1877F2"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </button>
            <button class="dock-item" data-app="terminal" title="Terminal">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#F59E0B" stroke-width="2"><polyline points="4 17 10 11 4 5"></polyline><line x1="12" y1="19" x2="20" y2="19"></line></svg>
            </button>
          </footer>

        </div>

        <!-- Interactive Mechanical Keyboard Bar at Desk Level -->
        <div class="pc-keyboard-bar">
          <div class="keyboard-row">
            <button class="mech-key" data-key="ESC">ESC</button>
            <button class="mech-key" data-key="TAB">TAB</button>
            <button class="mech-key" data-key="ABOUT">ABOUT</button>
            <button class="mech-key" data-key="PROJECTS">PROJECTS</button>
            <button class="mech-key" data-key="AGENT">LIVE APP</button>
            <button class="mech-key" data-key="SPACE">SPACE</button>
            <button class="mech-key" data-key="ENTER">ENTER ↵</button>
          </div>
        </div>

      </div>
    `;

    document.body.appendChild(this.container);

    this.windowLayer = this.container.querySelector('#pc-window-layer');
    this.clockEl = this.container.querySelector('#pc-live-clock');

    // Live clock ticker
    this.updateClock();
    setInterval(() => this.updateClock(), 1000);
  }

  updateClock() {
    if (!this.clockEl) return;
    const now = new Date();
    this.clockEl.textContent = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  }

  bindEvents() {
    // Exit PC trigger
    const exitBtn = this.container.querySelector('#pc-exit-trigger');
    if (exitBtn) {
      exitBtn.addEventListener('click', () => {
        this.close();
      });
    }

    // App icons click
    const appIcons = this.container.querySelectorAll('.pc-app-icon, .dock-item');
    appIcons.forEach((el) => {
      el.addEventListener('click', () => {
        const appId = el.dataset.app;
        if (appId) {
          this.openWindow(appId);
        }
      });
    });

    // Mechanical keyboard key clicks
    const keys = this.container.querySelectorAll('.mech-key');
    keys.forEach((key) => {
      key.addEventListener('click', () => {
        const val = key.dataset.key;
        if (this.experience.sounds) {
          this.experience.sounds.playMechanicalKey();
        }
        if (val === 'PROJECTS') this.openWindow('projects');
        else if (val === 'ABOUT') this.openWindow('about');
        else if (val === 'AGENT') this.openWindow('agent');
        else if (val === 'ESC') this.closeWindow();
        else if (val === 'ENTER' && this.activeWindow === 'terminal') {
          this.executeTerminalCommand('projects');
        }
      });
    });

    // Escape key closes window or exits PC
    window.addEventListener('keydown', (e) => {
      if (!this.isOpen) return;
      if (e.key === 'Escape') {
        if (this.activeWindow) {
          this.closeWindow();
        } else {
          this.close();
        }
      }
    });
  }

  open() {
    this.isOpen = true;
    document.body.classList.add('pc-mode-active');
    this.container.classList.add('active');

    if (this.experience.sounds) {
      this.experience.sounds.playWhoosh();
    }

    // Smoothly fly camera right into the 3D ultrawide monitor display
    if (this.experience.camera) {
      this.experience.camera.transitionTo(
        { x: 3.8, y: 1.44, z: -0.62 },
        { x: 3.8, y: 1.42, z: -1.6 },
        1.0
      );
    }

    // Open projects window by default so the user immediately sees the square cards
    setTimeout(() => {
      if (this.isOpen && !this.activeWindow) {
        this.openWindow('projects');
      }
    }, 450);
  }

  close() {
    this.isOpen = false;
    document.body.classList.remove('pc-mode-active');
    this.container.classList.remove('active');
    this.closeWindow();

    if (this.experience.sounds) {
      this.experience.sounds.playWhoosh();
    }

    // Reset camera back to Mercedes SLK 55 AMG showroom overview
    if (this.experience.camera) {
      this.experience.camera.resetView();
    }
  }

  openWindow(appId) {
    this.activeWindow = appId;

    if (this.experience.sounds) {
      this.experience.sounds.playMechanicalKey();
    }

    let title = '';
    let contentHtml = '';

    switch (appId) {
      case 'projects':
        title = 'My Projects Directory (22 Projects)';
        contentHtml = this.getProjectsWindowHtml();
        break;

      case 'agent':
        title = 'Special Agent One — Live Vercel Production Hub';
        contentHtml = this.getSpecialAgentHtml();
        break;

      case 'about':
        title = 'About Me — Jubayer Ahmad';
        contentHtml = this.getAboutHtml();
        break;

      case 'upwork':
        title = 'Upwork Client Portal — Verified Freelancer';
        contentHtml = this.getUpworkHtml();
        break;

      case 'social':
        title = 'Official Social & Developer Channels';
        contentHtml = this.getSocialHtml();
        break;

      case 'terminal':
        title = 'Developer Terminal — bash: ~/projects';
        contentHtml = this.getTerminalHtml();
        break;
    }

    this.windowLayer.innerHTML = `
      <div class="pc-window" id="active-pc-window">
        <div class="pc-win-header">
          <div class="pc-win-controls">
            <button class="win-btn win-close" id="win-close-btn" title="Close Window"></button>
            <button class="win-btn win-min" title="Minimize"></button>
            <button class="win-btn win-max" title="Maximize"></button>
          </div>
          <div class="pc-win-title">${title}</div>
          <div class="pc-win-meta">JubayerOS</div>
        </div>

        <div class="pc-win-body">
          ${contentHtml}
        </div>
      </div>
    `;

    // Bind window close button
    const closeBtn = this.windowLayer.querySelector('#win-close-btn');
    if (closeBtn) {
      closeBtn.addEventListener('click', () => {
        this.closeWindow();
      });
    }

    // Bind project filters inside window
    this.bindWindowSpecificHandlers(appId);
  }

  closeWindow() {
    this.activeWindow = null;
    if (this.windowLayer) {
      this.windowLayer.innerHTML = '';
    }
    if (this.experience.sounds) {
      this.experience.sounds.playClick();
    }
  }

  getProjectsWindowHtml(selectedCategory = 'all') {
    const filtered = selectedCategory === 'all'
      ? this.projectsList
      : this.projectsList.filter(p => p.category === selectedCategory || (selectedCategory === 'live' && p.liveUrl));

    return `
      <!-- Filter Bar -->
      <div class="project-filter-bar">
        <button class="pc-filter-btn ${selectedCategory === 'all' ? 'active' : ''}" data-cat="all">All (22)</button>
        <button class="pc-filter-btn ${selectedCategory === 'live' ? 'active' : ''}" data-cat="live">Live Apps (1)</button>
        <button class="pc-filter-btn ${selectedCategory === 'saas' ? 'active' : ''}" data-cat="saas">SaaS (8)</button>
        <button class="pc-filter-btn ${selectedCategory === 'ai' ? 'active' : ''}" data-cat="ai">AI (8)</button>
        <button class="pc-filter-btn ${selectedCategory === 'games' ? 'active' : ''}" data-cat="games">Games (6)</button>
      </div>

      <!-- Square Project Cards Grid (Exact user request: সুন্দর চতুর্ভুজ আইকন কার্ড) -->
      <div class="square-projects-grid">
        ${filtered.map(item => `
          <div class="square-project-card ${item.id === 'special-agent' ? 'featured-agent-card' : ''}">
            <div class="card-square-header">
              <span class="card-square-badge ${item.liveUrl ? 'live-badge' : ''}">
                ${item.liveUrl ? '<span class="green-live-dot"></span>' : ''}
                ${item.badge}
              </span>
              <span class="card-square-cat">${item.tech.split('•')[0]}</span>
            </div>

            <h4 class="card-square-title">${item.name}</h4>
            <p class="card-square-desc">${item.desc}</p>
            <div class="card-square-tags">${item.tech}</div>

            <div class="card-square-actions">
              ${item.liveUrl ? `
                <a href="${item.liveUrl}" target="_blank" class="card-btn-live-launch">
                  <span>LAUNCH APP ↗</span>
                </a>
              ` : ''}
              ${item.repoUrl ? `
                <a href="${item.repoUrl}" target="_blank" class="card-btn-square-code">
                  <span>Source Code</span>
                </a>
              ` : ''}
            </div>
          </div>
        `).join('')}
      </div>
    `;
  }

  getSpecialAgentHtml() {
    return `
      <div class="special-agent-spotlight">
        <div class="agent-hero-banner">
          <span class="agent-live-tag"><span class="green-live-dot"></span> ACTIVE PRODUCTION INSTANCE</span>
          <h2 class="agent-title">Special Agent One</h2>
          <p class="agent-subtitle">Autonomous AI Agent Framework with terminal reasoning loops, multi-tool scheduling, and contextual workspace synthesis.</p>
        </div>

        <div class="agent-specs-grid">
          <div class="spec-tile">
            <span class="spec-label">CLOUD INFRASTRUCTURE</span>
            <span class="spec-val">Vercel Production Edge</span>
          </div>
          <div class="spec-tile">
            <span class="spec-label">RUNTIME ENGINE</span>
            <span class="spec-val">Next.js 15 + Python FastAPI</span>
          </div>
          <div class="spec-tile">
            <span class="spec-label">TOOL SCHEDULER</span>
            <span class="spec-val">Autonomous Reactive Loop</span>
          </div>
          <div class="spec-tile">
            <span class="spec-label">RESPONSE LATENCY</span>
            <span class="spec-val">&lt; 180 ms Edge Execution</span>
          </div>
        </div>

        <div class="agent-launch-hero-row">
          <a href="https://special-agent-one.vercel.app" target="_blank" class="btn-giant-launch">
            <span>LAUNCH LIVE WEB APP ON VERCEL ↗</span>
          </a>
          <a href="https://github.com/Jubayer-AI-Studio/special-agent" target="_blank" class="btn-giant-code">
            <span>View Source on GitHub</span>
          </a>
        </div>
      </div>
    `;
  }

  getAboutHtml() {
    return `
      <div class="about-me-container">
        <div class="about-profile-hero">
          <div class="about-avatar-wrap">
            <img src="./images/jubayer.jpg" alt="Jubayer Ahmad" class="about-avatar-img">
            <span class="about-status-ring"></span>
          </div>
          <div class="about-hero-details">
            <h2 class="about-name">Jubayer Ahmad</h2>
            <div class="about-title-tag">Full-Stack Developer & AI Content Creator</div>
            <p class="about-bio">Specializing in Next.js 15, Three.js 3D WebGL experiences, and generative AI pipelines (Google Veo 3.1 & Gemini 3.7). Building agency-grade digital products and intelligent autonomous tools.</p>
          </div>
        </div>

        <div class="about-metrics-row">
          <div class="metric-box">
            <span class="metric-num">22+</span>
            <span class="metric-sub">GitHub Repos</span>
          </div>
          <div class="metric-box">
            <span class="metric-num">60 FPS</span>
            <span class="metric-sub">WebGL 3D Engine</span>
          </div>
          <div class="metric-box">
            <span class="metric-num">100%</span>
            <span class="metric-sub">Verified Freelancer</span>
          </div>
          <div class="metric-box">
            <span class="metric-num">24/7</span>
            <span class="metric-sub">Global Availability</span>
          </div>
        </div>

        <div class="about-stack-section">
          <h3 class="stack-section-title">Core Engineering Stack</h3>
          <div class="tech-pills-wrap">
            <span class="tech-pill">Next.js 15</span>
            <span class="tech-pill">React 19</span>
            <span class="tech-pill">TypeScript</span>
            <span class="tech-pill">Three.js WebGL</span>
            <span class="tech-pill">Node.js</span>
            <span class="tech-pill">Python FastAPI</span>
            <span class="tech-pill">PostgreSQL</span>
            <span class="tech-pill">Google Veo 3.1</span>
            <span class="tech-pill">Gemini 3.7</span>
            <span class="tech-pill">Cloudflare</span>
          </div>
        </div>
      </div>
    `;
  }

  getUpworkHtml() {
    return `
      <div class="upwork-portal-container">
        <div class="upwork-badge-banner">
          <div class="upwork-logo-box">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="#14A800"><path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-3.715 0-5.596 2.493-6.236 4.351-.837-1.636-1.464-3.528-1.748-4.99H7.63v6.529c0 1.95-1.587 3.537-3.537 3.537-1.95 0-3.537-1.587-3.537-3.537V4.378H0v6.529c0 3.57 2.903 6.473 6.473 6.473 2.274 0 4.275-1.177 5.429-2.966.528 1.411 1.444 2.68 2.802 3.522 1.272.788 2.756 1.222 4.316 1.222 4.333 0 7.857-3.524 7.857-7.857 0-4.333-3.524-7.857-7.857-7.857z"/></svg>
          </div>
          <div>
            <span class="portal-badge-green">VERIFIED UPWORK TALENT</span>
            <h2 class="portal-title">Jubayer Ahmad • Freelance Client Hub</h2>
          </div>
        </div>

        <p class="portal-desc">Available for high-stakes full-stack web applications, 3D interactive WebGL showrooms, and specialized AI automation pipelines.</p>

        <div class="portal-card-box">
          <div class="portal-row">
            <span class="row-label">Freelancer Profile ID:</span>
            <span class="row-val">~0185d56d4075d701a6</span>
          </div>
          <div class="portal-row">
            <span class="row-label">Services:</span>
            <span class="row-val">Full-Stack SaaS, 3D WebGL, AI Video & Automation</span>
          </div>
          <div class="portal-row">
            <span class="row-label">Contract Type:</span>
            <span class="row-val">Hourly & Fixed-Price Milestones</span>
          </div>
        </div>

        <div class="portal-actions">
          <a href="https://www.upwork.com/freelancers/~0185d56d4075d701a6" target="_blank" class="btn-upwork-hire">
            <span>HIRE JUBAYER ON UPWORK ↗</span>
          </a>
        </div>
      </div>
    `;
  }

  getSocialHtml() {
    return `
      <div class="social-channels-container">
        <h3 class="social-window-title">Official Human Profiles & Verified Channels</h3>
        <p class="social-window-sub">Authentic direct contact points for developer collaboration, freelance inquiries, and project reviews.</p>

        <div class="social-cards-grid">
          <!-- Facebook Profile -->
          <a href="https://www.facebook.com/share/1CopAWZnyX/" target="_blank" class="social-big-card fb-card-accent">
            <div class="social-big-icon fb-icon-bg">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="#1877F2"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </div>
            <div class="social-big-info">
              <div class="social-big-title">Facebook Profile</div>
              <div class="social-big-meta">Jubayer Ahmad (Personal ID) ↗</div>
            </div>
          </a>

          <!-- Facebook Page -->
          <a href="https://www.facebook.com/share/1C8RmiURup/" target="_blank" class="social-big-card fb-card-accent">
            <div class="social-big-icon fb-icon-bg">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="#1877F2"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </div>
            <div class="social-big-info">
              <div class="social-big-title">Facebook Studio Page</div>
              <div class="social-big-meta">Official Developer Studio ↗</div>
            </div>
          </a>

          <!-- GitHub -->
          <a href="https://github.com/Jubayer-AI-Studio" target="_blank" class="social-big-card gh-card-accent">
            <div class="social-big-icon gh-icon-bg">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="#FFFFFF"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
            </div>
            <div class="social-big-info">
              <div class="social-big-title">GitHub Studio</div>
              <div class="social-big-meta">@Jubayer-AI-Studio • 22 Repos ↗</div>
            </div>
          </a>

          <!-- YouTube -->
          <a href="https://www.youtube.com/@jubayeraispecialist" target="_blank" class="social-big-card yt-card-accent">
            <div class="social-big-icon yt-icon-bg">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="#EF4444"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
            </div>
            <div class="social-big-info">
              <div class="social-big-title">YouTube AI Theater</div>
              <div class="social-big-meta">@jubayeraispecialist ↗</div>
            </div>
          </a>
        </div>
      </div>
    `;
  }

  getTerminalHtml() {
    return `
      <div class="pc-terminal-container">
        <div class="terminal-output" id="term-output">
          ${this.terminalHistory.map(line => `<div class="term-line">${line}</div>`).join('')}
        </div>

        <div class="terminal-quick-actions">
          <span class="quick-title">Quick Commands:</span>
          <button class="term-pill" data-cmd="projects">projects</button>
          <button class="term-pill" data-cmd="skills">skills</button>
          <button class="term-pill" data-cmd="launch-agent">launch-agent</button>
          <button class="term-pill" data-cmd="contact">contact</button>
          <button class="term-pill" data-cmd="clear">clear</button>
        </div>

        <form class="terminal-input-row" id="term-form">
          <span class="term-prompt">jubayer@penthouse:~$</span>
          <input type="text" class="term-input" id="term-input" autocomplete="off" placeholder="Type a command...">
        </form>
      </div>
    `;
  }

  bindWindowSpecificHandlers(appId) {
    if (appId === 'projects') {
      const filterBtns = this.windowLayer.querySelectorAll('.pc-filter-btn');
      filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
          const cat = btn.dataset.cat;
          const body = this.windowLayer.querySelector('.pc-win-body');
          if (body) {
            body.innerHTML = this.getProjectsWindowHtml(cat);
            this.bindWindowSpecificHandlers('projects');
            if (this.experience.sounds) {
              this.experience.sounds.playClick();
            }
          }
        });
      });
    } else if (appId === 'terminal') {
      const form = this.windowLayer.querySelector('#term-form');
      const input = this.windowLayer.querySelector('#term-input');
      const pills = this.windowLayer.querySelectorAll('.term-pill');

      if (form && input) {
        form.addEventListener('submit', (e) => {
          e.preventDefault();
          const cmd = input.value.trim();
          input.value = '';
          if (cmd) {
            this.executeTerminalCommand(cmd);
          }
        });
      }

      pills.forEach(pill => {
        pill.addEventListener('click', () => {
          const cmd = pill.dataset.cmd;
          if (cmd) this.executeTerminalCommand(cmd);
        });
      });
    }
  }

  executeTerminalCommand(cmd) {
    if (this.experience.sounds) {
      this.experience.sounds.playMechanicalKey();
    }

    const c = cmd.toLowerCase().trim();
    this.terminalHistory.push(`jubayer@penthouse:~$ ${cmd}`);

    if (c === 'clear') {
      this.terminalHistory = [];
    } else if (c === 'help') {
      this.terminalHistory.push(
        'Available commands: "projects", "skills", "launch-agent", "contact", "about", "exit", "clear"'
      );
    } else if (c === 'projects') {
      this.terminalHistory.push(
        '1. Special Agent One (Live on Vercel: https://special-agent-one.vercel.app)',
        '2. AI Content Engine (Google Veo 3.1 & Gemini 3.7)',
        '3. Shono AI (Bangla Voice Assistant)',
        '4. Mercedes SLK 55 AMG 3D Studio',
        'Type "launch-agent" to open Special Agent One live.'
      );
    } else if (c === 'skills') {
      this.terminalHistory.push(
        'Core Tech Stack: Next.js 15, React 19, Three.js WebGL, Node.js, Python FastAPI, PostgreSQL, Google Cloud, Vercel Edge'
      );
    } else if (c === 'launch-agent') {
      this.terminalHistory.push('Launching https://special-agent-one.vercel.app in new tab...');
      window.open('https://special-agent-one.vercel.app', '_blank');
    } else if (c === 'contact') {
      this.terminalHistory.push(
        'Upwork: https://www.upwork.com/freelancers/~0185d56d4075d701a6',
        'Facebook: https://www.facebook.com/share/1CopAWZnyX/'
      );
    } else if (c === 'exit') {
      this.close();
      return;
    } else {
      this.terminalHistory.push(`Command not found: "${cmd}". Type "help" for available commands.`);
    }

    const out = this.windowLayer.querySelector('#term-output');
    if (out) {
      out.innerHTML = this.terminalHistory.map(line => `<div class="term-line">${line}</div>`).join('');
      out.scrollTop = out.scrollHeight;
    }
  }
}
