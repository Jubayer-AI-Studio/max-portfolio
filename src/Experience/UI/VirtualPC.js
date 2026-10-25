export default class VirtualPC {
  constructor(experience) {
    this.experience = experience;
    this.isOpen = false;
    this.activeApp = 'finder'; // 'finder', 'safari', 'notes', 'terminal', 'upwork', 'social'
    this.terminalInput = '';
    this.terminalLines = [
      'Last login: ' + new Date().toLocaleDateString() + ' on ttys001',
      'JubayerOS (Darwin Kernel Version 24.1.0: x86_64)',
      'Type "help", "projects", "launch", or "skills" to execute commands.',
      ''
    ];
    this.searchQuery = '';

    this.projects = [
      {
        id: 'special-agent',
        title: 'Special Agent One',
        category: 'live',
        type: 'Autonomous Agent Framework',
        badge: 'LIVE ON VERCEL',
        tech: 'Next.js 15 • Python • LangGraph',
        desc: 'Autonomous multi-tool agent system with live terminal reasoning loops and workspace synthesis. Deployed in production on Vercel.',
        url: 'https://special-agent-one.vercel.app',
        github: 'https://github.com/Jubayer-AI-Studio/special-agent'
      },
      {
        id: 'ai-video',
        title: 'AI Content Engine',
        category: 'ai',
        type: 'Generative Video Pipeline',
        badge: 'PRODUCTION',
        tech: 'Google Veo 3.1 • Gemini 3.7 • TTS',
        desc: 'High-speed automated video production pipeline with contextual voice synthesis and narrative scene generation.',
        url: null,
        github: 'https://github.com/Jubayer-AI-Studio'
      },
      {
        id: 'shono-ai',
        title: 'Shono AI (Bangla Jarvis)',
        category: 'ai',
        type: 'Voice Assistant',
        badge: 'VOICE AI',
        tech: 'FastAPI • Whisper • Desktop Automation',
        desc: 'Bangla dialect-aware AI desktop assistant for voice workflows, automated file management, and speech synthesis.',
        url: null,
        github: 'https://github.com/Jubayer-AI-Studio'
      },
      {
        id: 'mercedes-3d',
        title: 'Mercedes 3D Studio',
        category: 'saas',
        type: '3D WebGL Showroom',
        badge: 'WEBGL 3D',
        tech: 'Three.js • WebGL • GSAP • PBR',
        desc: 'Cinematic real-time automotive showroom with procedural sky penthouse, audio synthesis, and battlestation workstation.',
        url: 'https://max-portfolio-eta.vercel.app',
        github: 'https://github.com/Jubayer-AI-Studio/max-portfolio'
      },
      {
        id: 'saas-cloud',
        title: 'Enterprise Cloud Platform',
        category: 'saas',
        type: 'SaaS Architecture',
        badge: 'ENTERPRISE',
        tech: 'Next.js 15 • Stripe • PostgreSQL • Redis',
        desc: 'Multi-tenant cloud management platform with subscription billing, team RBAC, and telemetry analytics.',
        url: null,
        github: 'https://github.com/Jubayer-AI-Studio'
      },
      {
        id: 'github-all',
        title: '22 Repositories Directory',
        category: 'all',
        type: 'Open Source Studio',
        badge: 'GITHUB',
        tech: 'Next.js • Python • AI Agents • Three.js',
        desc: 'Explore the full catalog of 22 active open-source repositories hosted on the official Jubayer AI Studio account.',
        url: 'https://github.com/Jubayer-AI-Studio',
        github: 'https://github.com/Jubayer-AI-Studio'
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
      <!-- Realistic Monitor Housing / Frame -->
      <div class="virtual-pc-bezel">
        <!-- Bezel WebCam Dot -->
        <div class="bezel-top-sensor">
          <span class="bezel-camera-dot"></span>
        </div>

        <!-- Realistic High-Res Screen Display -->
        <div class="pc-screen" id="pc-screen">
          
          <!-- Authentic macOS Top Menu Bar -->
          <header class="pc-macos-menubar">
            <div class="macos-menu-left">
              <!-- Apple Logo -->
              <span class="macos-apple-logo">
                <svg width="14" height="14" viewBox="0 0 170 170" fill="currentColor">
                  <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.35.13-9.16-1.9-14.42-6.08-3.7-3.08-7.7-7.94-12-14.58-6.19-9.59-11.01-20.73-14.46-33.42-3.46-12.68-5.19-24.31-5.19-34.88 0-14.73 3.63-26.79 10.88-36.19 7.26-9.4 16.48-14.22 27.67-14.47 5.02 0 10.45 1.28 16.29 3.86 5.84 2.57 9.53 3.91 11.06 4 1.89-.1 5.76-1.45 11.61-4.06 5.85-2.61 11.05-3.85 15.61-3.71 10.51.65 19.16 4.71 25.96 12.18-9.26 5.62-13.8 13.43-13.62 23.43.18 8.16 3.27 15.01 9.27 20.55 6 5.54 13.06 8.79 21.19 9.75-2.22 6.84-5.07 14.19-8.56 22.06zM119.22 31.81c0-7.39 2.65-14.28 7.95-20.67 5.3-6.39 11.75-10.47 19.34-12.24.63 7.6-1.78 14.77-7.23 21.52-5.45 6.75-12.14 10.68-20.06 11.39z"/>
                </svg>
              </span>
              <span class="macos-menu-title" id="macos-app-name">Finder</span>
              <span class="macos-menu-item">File</span>
              <span class="macos-menu-item">Edit</span>
              <span class="macos-menu-item">View</span>
              <span class="macos-menu-item">Go</span>
              <span class="macos-menu-item">Window</span>
              <span class="macos-menu-item">Help</span>
            </div>

            <div class="macos-menu-right">
              <span class="macos-status-pill">60 FPS • STUDIO ACTIVE</span>
              <span class="macos-wifi-icon">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12.55a11 11 0 0 1 14.08 0"></path><path d="M1.42 9a16 16 0 0 1 21.16 0"></path><path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path><line x1="12" y1="20" x2="12.01" y2="20"></line></svg>
              </span>
              <span class="macos-clock" id="macos-clock">12:00 PM</span>
              <button class="macos-exit-btn" id="pc-exit-trigger" title="Return to Mercedes SLK 55 AMG">
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="6"></line></svg>
                <span>Exit to Car</span>
              </button>
            </div>
          </header>

          <!-- Desktop Workspace with Realistic Minimal Wallpaper -->
          <main class="pc-desktop-workspace" id="pc-workspace">
            
            <!-- Active Application Window (Authentic Realistic macOS Window) -->
            <div class="macos-window" id="macos-active-window">
              <!-- Window Title Bar with Traffic Light Dots -->
              <div class="macos-win-titlebar">
                <div class="macos-traffic-lights">
                  <button class="traffic-dot dot-close" id="win-dot-close" title="Close"></button>
                  <button class="traffic-dot dot-min" id="win-dot-min" title="Minimize"></button>
                  <button class="traffic-dot dot-max" id="win-dot-max" title="Zoom"></button>
                </div>
                <div class="macos-win-title" id="win-title-text">Finder — Projects</div>
                <div class="macos-win-search-box">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                  <input type="text" id="win-search-input" placeholder="Search projects or type..." autocomplete="off">
                </div>
              </div>

              <!-- Window Inner Content (Rendered Dynamically) -->
              <div class="macos-win-content" id="macos-win-content"></div>
            </div>

          </main>

          <!-- Authentic macOS Dock at Screen Bottom -->
          <footer class="pc-macos-dock">
            <button class="dock-app-icon active" data-app="finder" title="Finder (My Projects)">
              <div class="dock-icon-inner finder-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="1.8"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              </div>
              <span class="dock-dot"></span>
            </button>

            <button class="dock-app-icon" data-app="safari" title="Safari (Live Apps & Web)">
              <div class="dock-icon-inner safari-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="1.8"><circle cx="12" cy="12" r="10"></circle><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon></svg>
              </div>
              <span class="dock-dot"></span>
            </button>

            <button class="dock-app-icon" data-app="notes" title="Notes (About Jubayer Ahmad)">
              <div class="dock-icon-inner notes-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="1.8"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
              </div>
              <span class="dock-dot"></span>
            </button>

            <button class="dock-app-icon" data-app="terminal" title="Terminal (Interactive ZSH)">
              <div class="dock-icon-inner terminal-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#34D399" stroke-width="2"><polyline points="4 17 10 11 4 5"></polyline><line x1="12" y1="19" x2="20" y2="19"></line></svg>
              </div>
              <span class="dock-dot"></span>
            </button>

            <span class="dock-divider"></span>

            <button class="dock-app-icon" data-app="upwork" title="Upwork (Hire Jubayer)">
              <div class="dock-icon-inner upwork-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="#14A800"><path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-3.715 0-5.596 2.493-6.236 4.351-.837-1.636-1.464-3.528-1.748-4.99H7.63v6.529c0 1.95-1.587 3.537-3.537 3.537-1.95 0-3.537-1.587-3.537-3.537V4.378H0v6.529c0 3.57 2.903 6.473 6.473 6.473 2.274 0 4.275-1.177 5.429-2.966.528 1.411 1.444 2.68 2.802 3.522 1.272.788 2.756 1.222 4.316 1.222 4.333 0 7.857-3.524 7.857-7.857 0-4.333-3.524-7.857-7.857-7.857z"/></svg>
              </div>
              <span class="dock-dot"></span>
            </button>

            <button class="dock-app-icon" data-app="social" title="Facebook Profile & Studio">
              <div class="dock-icon-inner fb-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="#1877F2"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </div>
              <span class="dock-dot"></span>
            </button>
          </footer>

        </div>

        <!-- Real Keyboard Interaction Deck (Clickable / Touchable Keys on Desk) -->
        <div class="pc-real-keyboard-bar">
          <div class="keyboard-chiclets-row">
            <button class="chiclet-key" data-key="esc">esc</button>
            <button class="chiclet-key" data-key="tab">tab</button>
            <button class="chiclet-key key-wide" data-key="cmd_finder">⌘ Finder</button>
            <button class="chiclet-key key-wide" data-key="cmd_safari">⌘ Safari</button>
            <button class="chiclet-key key-wide" data-key="cmd_term">⌘ Terminal</button>
            <button class="chiclet-key key-space" data-key="space">space</button>
            <button class="chiclet-key key-wide" data-key="enter">return ↵</button>
          </div>
        </div>

      </div>
    `;

    document.body.appendChild(this.container);

    this.screenEl = this.container.querySelector('#pc-screen');
    this.contentEl = this.container.querySelector('#macos-win-content');
    this.titleTextEl = this.container.querySelector('#win-title-text');
    this.appNameEl = this.container.querySelector('#macos-app-name');
    this.searchInput = this.container.querySelector('#win-search-input');
    this.clockEl = this.container.querySelector('#macos-clock');

    this.updateClock();
    setInterval(() => this.updateClock(), 1000);
  }

  updateClock() {
    if (!this.clockEl) return;
    const now = new Date();
    this.clockEl.textContent = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  }

  bindEvents() {
    // 1. Exit PC trigger
    const exitBtn = this.container.querySelector('#pc-exit-trigger');
    if (exitBtn) {
      exitBtn.addEventListener('click', () => this.close());
    }

    // 2. Window close button (traffic dot)
    const winCloseBtn = this.container.querySelector('#win-dot-close');
    if (winCloseBtn) {
      winCloseBtn.addEventListener('click', () => {
        // Toggle or switch to finder
        if (this.activeApp !== 'finder') {
          this.switchApp('finder');
        } else {
          this.close();
        }
      });
    }

    // 3. Dock icons click
    const dockIcons = this.container.querySelectorAll('.dock-app-icon');
    dockIcons.forEach(btn => {
      btn.addEventListener('click', () => {
        const app = btn.dataset.app;
        if (app) this.switchApp(app);
      });
    });

    // 4. Search input typing in window header
    if (this.searchInput) {
      this.searchInput.addEventListener('input', (e) => {
        this.searchQuery = e.target.value.toLowerCase().trim();
        if (this.activeApp === 'finder') {
          this.renderFinder();
        }
      });
    }

    // 5. On-screen Keyboard Chiclets Click
    const chiclets = this.container.querySelectorAll('.chiclet-key');
    chiclets.forEach(key => {
      key.addEventListener('click', () => {
        const k = key.dataset.key;
        if (this.experience.sounds) {
          this.experience.sounds.playMechanicalKey();
        }
        if (k === 'esc') this.close();
        else if (k === 'cmd_finder') this.switchApp('finder');
        else if (k === 'cmd_safari') this.switchApp('safari');
        else if (k === 'cmd_term') this.switchApp('terminal');
        else if (k === 'enter' && this.activeApp === 'terminal') {
          this.handleTerminalEnter();
        }
      });
    });

    // 6. GLOBAL PHYSICAL KEYBOARD LISTENER (User can type on actual keyboard!)
    window.addEventListener('keydown', (e) => {
      if (!this.isOpen) return;

      if (e.key === 'Escape') {
        this.close();
        return;
      }

      // Play mechanical switch click audio on typing
      if (this.experience.sounds) {
        this.experience.sounds.playMechanicalKey();
      }

      // If active app is Terminal:
      if (this.activeApp === 'terminal') {
        if (e.key === 'Enter') {
          e.preventDefault();
          this.handleTerminalEnter();
        } else if (e.key === 'Backspace') {
          e.preventDefault();
          this.terminalInput = this.terminalInput.slice(0, -1);
          this.renderTerminalInput();
        } else if (e.key.length === 1 && !e.ctrlKey && !e.metaKey) {
          e.preventDefault();
          this.terminalInput += e.key;
          this.renderTerminalInput();
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

    // Camera smoothly glides right to the 3D monitor screen and desk keyboard
    if (this.experience.camera) {
      this.experience.camera.transitionTo(
        { x: 3.6, y: 1.18, z: -0.9 },
        { x: 3.6, y: 1.05, z: -1.6 },
        0.85
      );
    }

    this.switchApp(this.activeApp || 'finder');
  }

  close() {
    this.isOpen = false;
    document.body.classList.remove('pc-mode-active');
    this.container.classList.remove('active');

    if (this.experience.sounds) {
      this.experience.sounds.playWhoosh();
    }

    // Reset camera back to showroom overview
    if (this.experience.camera) {
      this.experience.camera.resetView();
    }
  }

  switchApp(appName) {
    this.activeApp = appName;

    // Update Dock active state
    const dockIcons = this.container.querySelectorAll('.dock-app-icon');
    dockIcons.forEach(btn => {
      if (btn.dataset.app === appName) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    if (this.experience.sounds) {
      this.experience.sounds.playMechanicalKey();
    }

    // Update Window Header
    if (appName === 'finder') {
      this.appNameEl.textContent = 'Finder';
      this.titleTextEl.textContent = 'Projects — Jubayer AI Studio';
      this.renderFinder();
    } else if (appName === 'safari') {
      this.appNameEl.textContent = 'Safari';
      this.titleTextEl.textContent = 'Safari — Live Production Web Apps';
      this.renderSafari();
    } else if (appName === 'notes') {
      this.appNameEl.textContent = 'Notes';
      this.titleTextEl.textContent = 'Notes — About Jubayer Ahmad';
      this.renderNotes();
    } else if (appName === 'terminal') {
      this.appNameEl.textContent = 'Terminal';
      this.titleTextEl.textContent = 'jubayer@macbook-pro: ~/projects (zsh)';
      this.renderTerminal();
    } else if (appName === 'upwork') {
      this.appNameEl.textContent = 'Upwork';
      this.titleTextEl.textContent = 'Upwork — Verified Client Portal';
      this.renderUpwork();
    } else if (appName === 'social') {
      this.appNameEl.textContent = 'Social';
      this.titleTextEl.textContent = 'Developer Profiles & Social Hub';
      this.renderSocial();
    }
  }

  // 1. Finder: Clean, Realistic macOS File & Project Browser
  renderFinder() {
    const q = this.searchQuery;
    const filtered = q
      ? this.projects.filter(p => p.title.toLowerCase().includes(q) || p.tech.toLowerCase().includes(q) || p.desc.toLowerCase().includes(q))
      : this.projects;

    this.contentEl.innerHTML = `
      <div class="finder-layout">
        <!-- Finder Sidebar -->
        <aside class="finder-sidebar">
          <div class="sidebar-section-title">Favorites</div>
          <button class="sidebar-item active" data-cat="all">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
            <span>All Projects (${this.projects.length})</span>
          </button>
          <button class="sidebar-item" data-cat="live">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#10B981" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
            <span>Live Deployed (1)</span>
          </button>
          <button class="sidebar-item" data-cat="ai">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#38BDF8" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
            <span>AI Systems</span>
          </button>
          <button class="sidebar-item" data-cat="saas">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#A855F7" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
            <span>SaaS Platforms</span>
          </button>
        </aside>

        <!-- Finder Project Grid (Clean, Authentic, Square Cards) -->
        <div class="finder-main">
          <div class="finder-grid">
            ${filtered.map(item => `
              <div class="finder-card ${item.id === 'special-agent' ? 'featured-finder-card' : ''}">
                <div class="card-top-row">
                  <span class="card-badge ${item.url ? 'badge-live' : 'badge-standard'}">${item.badge}</span>
                  <span class="card-type-tag">${item.type}</span>
                </div>

                <div class="card-title-row">
                  <h4 class="card-heading">${item.title}</h4>
                </div>

                <p class="card-summary">${item.desc}</p>
                <div class="card-tech-meta">${item.tech}</div>

                <div class="card-button-row">
                  ${item.url ? `
                    <a href="${item.url}" target="_blank" class="finder-btn-launch">
                      <span>Launch App ↗</span>
                    </a>
                  ` : ''}
                  ${item.github ? `
                    <a href="${item.github}" target="_blank" class="finder-btn-code">
                      <span>Source Code</span>
                    </a>
                  ` : ''}
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    `;

    // Sidebar filter clicks
    const sideItems = this.contentEl.querySelectorAll('.sidebar-item');
    sideItems.forEach(btn => {
      btn.addEventListener('click', () => {
        sideItems.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const cat = btn.dataset.cat;
        this.filterFinderCategory(cat);
      });
    });
  }

  filterFinderCategory(cat) {
    const filtered = cat === 'all'
      ? this.projects
      : this.projects.filter(p => p.category === cat || (cat === 'live' && p.url));

    const grid = this.contentEl.querySelector('.finder-grid');
    if (!grid) return;

    grid.innerHTML = filtered.map(item => `
      <div class="finder-card ${item.id === 'special-agent' ? 'featured-finder-card' : ''}">
        <div class="card-top-row">
          <span class="card-badge ${item.url ? 'badge-live' : 'badge-standard'}">${item.badge}</span>
          <span class="card-type-tag">${item.type}</span>
        </div>

        <div class="card-title-row">
          <h4 class="card-heading">${item.title}</h4>
        </div>

        <p class="card-summary">${item.desc}</p>
        <div class="card-tech-meta">${item.tech}</div>

        <div class="card-button-row">
          ${item.url ? `
            <a href="${item.url}" target="_blank" class="finder-btn-launch">
              <span>Launch App ↗</span>
            </a>
          ` : ''}
          ${item.github ? `
            <a href="${item.github}" target="_blank" class="finder-btn-code">
              <span>Source Code</span>
            </a>
          ` : ''}
        </div>
      </div>
    `).join('');
  }

  // 2. Safari: Clean, Authentic Web Browser Interface
  renderSafari() {
    this.contentEl.innerHTML = `
      <div class="safari-browser-layout">
        <!-- Safari Browser Nav Bar -->
        <div class="safari-navbar">
          <div class="safari-nav-buttons">
            <button class="safari-nav-btn" title="Back">&larr;</button>
            <button class="safari-nav-btn" title="Forward">&rarr;</button>
          </div>
          <div class="safari-address-bar">
            <span class="safari-lock-icon">🔒</span>
            <span class="safari-url-text">https://special-agent-one.vercel.app</span>
          </div>
          <a href="https://special-agent-one.vercel.app" target="_blank" class="safari-open-external" title="Open in real new tab">
            Open in Tab ↗
          </a>
        </div>

        <!-- Safari Web Preview Card -->
        <div class="safari-page-viewport">
          <div class="safari-hero-card">
            <div class="hero-live-indicator">
              <span class="pulse-green-dot"></span>
              <span>VERCEL CLOUD • PRODUCTION ACTIVE</span>
            </div>

            <h2 class="safari-web-title">Special Agent One</h2>
            <p class="safari-web-desc">Autonomous Agent Framework with terminal reasoning loops, multi-tool scheduling, and contextual workspace synthesis. Live production deployment verified on Vercel.</p>

            <div class="safari-specs-row">
              <div class="safari-spec-box">
                <span class="spec-k">Framework</span>
                <span class="spec-v">Next.js 15 (App Router)</span>
              </div>
              <div class="safari-spec-box">
                <span class="spec-k">Agent Runtime</span>
                <span class="spec-v">Python FastAPI</span>
              </div>
              <div class="safari-spec-box">
                <span class="spec-k">Edge Latency</span>
                <span class="spec-v">&lt; 150 ms Edge</span>
              </div>
            </div>

            <div class="safari-cta-row">
              <a href="https://special-agent-one.vercel.app" target="_blank" class="safari-btn-primary">
                <span>Launch Live Web Application ↗</span>
              </a>
              <a href="https://github.com/Jubayer-AI-Studio/special-agent" target="_blank" class="safari-btn-secondary">
                <span>View Source Code on GitHub</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  // 3. Notes: Clean Apple Notes App
  renderNotes() {
    this.contentEl.innerHTML = `
      <div class="notes-layout">
        <!-- Notes Sidebar -->
        <aside class="notes-sidebar">
          <div class="notes-folder-item active">
            <span class="note-title-preview">Jubayer Ahmad Profile</span>
            <span class="note-snippet">Full-Stack Developer & AI Creator</span>
          </div>
          <div class="notes-folder-item">
            <span class="note-title-preview">Core Engineering Stack</span>
            <span class="note-snippet">Next.js 15, Three.js, Python</span>
          </div>
          <div class="notes-folder-item">
            <span class="note-title-preview">Verified Milestones</span>
            <span class="note-snippet">22 GitHub Repositories</span>
          </div>
        </aside>

        <!-- Notes Main Editor Content -->
        <div class="notes-editor">
          <div class="note-date">Updated: Today at ${this.clockEl ? this.clockEl.textContent : '12:00 PM'}</div>
          <h2 class="note-header">Jubayer Ahmad</h2>
          <div class="note-badge-sub">Full-Stack Developer & AI Content Creator</div>

          <p class="note-paragraph">
            Passionate full-stack developer and AI content creator with deep expertise in <strong>Next.js 15, Three.js 3D WebGL experiences</strong>, and modern generative AI media pipelines (Google Veo 3.1 & Gemini 3.7).
          </p>

          <h3 class="note-section-heading">Core Competencies</h3>
          <ul class="note-list">
            <li><strong>Frontend & 3D:</strong> Next.js 15, React 19, TypeScript, Three.js WebGL, GSAP, Tailwind CSS</li>
            <li><strong>Backend & Cloud:</strong> Node.js, Python FastAPI, PostgreSQL, Redis, Cloudflare, Vercel Edge</li>
            <li><strong>AI Engineering:</strong> Google Veo 3.1 Video Engine, Gemini 3.7 Flash, Voice AI (Whisper)</li>
          </ul>

          <h3 class="note-section-heading">Verified Credentials & Links</h3>
          <div class="note-links-grid">
            <a href="https://www.upwork.com/freelancers/~0185d56d4075d701a6" target="_blank" class="note-chip">
              <span>Upwork: Verified Freelancer ↗</span>
            </a>
            <a href="https://www.facebook.com/share/1CopAWZnyX/" target="_blank" class="note-chip">
              <span>Facebook: Jubayer Ahmad ↗</span>
            </a>
            <a href="https://www.facebook.com/share/1C8RmiURup/" target="_blank" class="note-chip">
              <span>Facebook: Official Studio Page ↗</span>
            </a>
            <a href="https://github.com/Jubayer-AI-Studio" target="_blank" class="note-chip">
              <span>GitHub: @Jubayer-AI-Studio ↗</span>
            </a>
          </div>
        </div>
      </div>
    `;
  }

  // 4. Terminal: Functional Interactive ZSH Terminal with Real Keyboard Input!
  renderTerminal() {
    this.contentEl.innerHTML = `
      <div class="terminal-shell" id="term-shell">
        <div class="terminal-scroll-area" id="term-scroll">
          ${this.terminalLines.map(l => `<div class="term-text-line">${l}</div>`).join('')}
          <div class="term-input-prompt-line">
            <span class="term-prompt-prefix">jubayer@macbook-pro ~ % </span>
            <span class="term-active-input" id="term-input-text">${this.terminalInput}</span>
            <span class="term-cursor"></span>
          </div>
        </div>

        <div class="terminal-command-hints">
          <span class="hint-label">Quick Commands:</span>
          <button class="term-click-btn" data-c="projects">projects</button>
          <button class="term-click-btn" data-c="launch">launch</button>
          <button class="term-click-btn" data-c="skills">skills</button>
          <button class="term-click-btn" data-c="contact">contact</button>
          <button class="term-click-btn" data-c="clear">clear</button>
        </div>
      </div>
    `;

    // Clickable command buttons inside terminal
    const btns = this.contentEl.querySelectorAll('.term-click-btn');
    btns.forEach(b => {
      b.addEventListener('click', () => {
        this.terminalInput = b.dataset.c;
        this.handleTerminalEnter();
      });
    });

    // Auto-focus scroll to bottom
    const scrollArea = this.contentEl.querySelector('#term-scroll');
    if (scrollArea) scrollArea.scrollTop = scrollArea.scrollHeight;
  }

  renderTerminalInput() {
    const el = this.contentEl.querySelector('#term-input-text');
    if (el) {
      el.textContent = this.terminalInput;
    }
  }

  handleTerminalEnter() {
    const cmd = this.terminalInput.trim();
    const c = cmd.toLowerCase();

    this.terminalLines.push(`jubayer@macbook-pro ~ % ${cmd}`);
    this.terminalInput = '';

    if (c === 'clear') {
      this.terminalLines = [];
    } else if (c === 'help') {
      this.terminalLines.push(
        'Available commands:',
        '  projects       List all 22 projects',
        '  launch         Launch Special Agent One in browser',
        '  skills         Display core engineering stack',
        '  about          Show biography and achievements',
        '  contact        Display verified Upwork and Facebook links',
        '  clear          Clear console screen'
      );
    } else if (c === 'projects') {
      this.terminalLines.push(
        '1. Special Agent One (Live on Vercel: https://special-agent-one.vercel.app)',
        '2. AI Content Engine (Google Veo 3.1 & Gemini 3.7)',
        '3. Shono AI (Bangla Voice Assistant)',
        '4. Mercedes SLK 55 AMG 3D Studio',
        '5. Enterprise Cloud Billing Hub',
        '6. 22 Repositories on GitHub: https://github.com/Jubayer-AI-Studio'
      );
    } else if (c === 'launch' || c === 'launch-agent') {
      this.terminalLines.push('Launching https://special-agent-one.vercel.app in new browser window...');
      window.open('https://special-agent-one.vercel.app', '_blank');
    } else if (c === 'skills') {
      this.terminalLines.push('Tech Stack: Next.js 15, React 19, TypeScript, Three.js WebGL, Node.js, Python FastAPI, PostgreSQL, Cloudflare, Google Veo 3.1');
    } else if (c === 'about') {
      this.terminalLines.push('Jubayer Ahmad — Full-Stack Developer & AI Content Creator based in Bangladesh. 22 Active Repositories.');
    } else if (c === 'contact') {
      this.terminalLines.push(
        'Upwork: https://www.upwork.com/freelancers/~0185d56d4075d701a6',
        'Facebook Profile: https://www.facebook.com/share/1CopAWZnyX/',
        'Facebook Page: https://www.facebook.com/share/1C8RmiURup/'
      );
    } else if (cmd !== '') {
      this.terminalLines.push(`zsh: command not found: ${cmd}. Type "help" for a list of commands.`);
    }

    if (this.activeApp === 'terminal') {
      this.renderTerminal();
    }
  }

  // 5. Upwork Client Hub
  renderUpwork() {
    this.contentEl.innerHTML = `
      <div class="client-portal-layout">
        <div class="portal-header">
          <div class="portal-logo-wrap">
            <svg width="36" height="36" viewBox="0 0 24 24" fill="#14A800"><path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-3.715 0-5.596 2.493-6.236 4.351-.837-1.636-1.464-3.528-1.748-4.99H7.63v6.529c0 1.95-1.587 3.537-3.537 3.537-1.95 0-3.537-1.587-3.537-3.537V4.378H0v6.529c0 3.57 2.903 6.473 6.473 6.473 2.274 0 4.275-1.177 5.429-2.966.528 1.411 1.444 2.68 2.802 3.522 1.272.788 2.756 1.222 4.316 1.222 4.333 0 7.857-3.524 7.857-7.857 0-4.333-3.524-7.857-7.857-7.857z"/></svg>
          </div>
          <div>
            <div class="portal-tag">VERIFIED UPWORK PROFILE</div>
            <h2 class="portal-heading">Jubayer Ahmad • Freelance Client Hub</h2>
          </div>
        </div>

        <p class="portal-intro">Available for full-stack web applications, 3D interactive WebGL projects, and generative AI media engineering.</p>

        <div class="portal-info-card">
          <div class="info-row">
            <span class="info-k">Talent ID:</span>
            <span class="info-v">~0185d56d4075d701a6</span>
          </div>
          <div class="info-row">
            <span class="info-k">Availability:</span>
            <span class="info-v">Open for Freelance & Contract</span>
          </div>
          <div class="info-row">
            <span class="info-k">Primary Stack:</span>
            <span class="info-v">Next.js 15 • Three.js WebGL • Python</span>
          </div>
        </div>

        <div class="portal-cta">
          <a href="https://www.upwork.com/freelancers/~0185d56d4075d701a6" target="_blank" class="portal-btn-hire">
            Hire Jubayer on Upwork ↗
          </a>
        </div>
      </div>
    `;
  }

  // 6. Social Channels
  renderSocial() {
    this.contentEl.innerHTML = `
      <div class="social-portal-layout">
        <h3 class="social-head">Official Developer Profiles</h3>
        <p class="social-sub">Direct official links for developer inquiries, collaboration, and client communication.</p>

        <div class="social-grid-two">
          <a href="https://www.facebook.com/share/1CopAWZnyX/" target="_blank" class="social-clean-card">
            <div class="social-icon-box fb-blue">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="#FFFFFF"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </div>
            <div>
              <div class="card-main-txt">Facebook Profile</div>
              <div class="card-sub-txt">Jubayer Ahmad (Official Personal ID) ↗</div>
            </div>
          </a>

          <a href="https://www.facebook.com/share/1C8RmiURup/" target="_blank" class="social-clean-card">
            <div class="social-icon-box fb-blue">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="#FFFFFF"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </div>
            <div>
              <div class="card-main-txt">Facebook Studio Page</div>
              <div class="card-sub-txt">Official Developer Studio Page ↗</div>
            </div>
          </a>

          <a href="https://github.com/Jubayer-AI-Studio" target="_blank" class="social-clean-card">
            <div class="social-icon-box gh-dark">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="#FFFFFF"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
            </div>
            <div>
              <div class="card-main-txt">GitHub Studio</div>
              <div class="card-sub-txt">@Jubayer-AI-Studio • 22 Repos ↗</div>
            </div>
          </a>

          <a href="https://www.youtube.com/@jubayeraispecialist" target="_blank" class="social-clean-card">
            <div class="social-icon-box yt-red">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="#FFFFFF"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
            </div>
            <div>
              <div class="card-main-txt">YouTube Channel</div>
              <div class="card-sub-txt">@jubayeraispecialist ↗</div>
            </div>
          </a>
        </div>
      </div>
    `;
  }
}
