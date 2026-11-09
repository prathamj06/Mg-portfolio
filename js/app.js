/**
 * MELERIGAMY — Core Application Controller
 * Handles interactive simulations, searchable members directory,
 * modal dialogs, command palette, audio feedback, and scroll animations.
 */

(function() {
  "use strict";

  const COMMUNITY_DATA = window.COMMUNITY_DATA || {};

  // --- Global App State ---
  const state = {
    activeDomainTab: 'all',
    activeProjectFilter: 'all',
    memberSearchQuery: '',
    audioEnabled: false,
    canvasMode: 'rf', // 'rf', 'math', 'ai', 'electronics', 'cyber', 'research'
    canvasParams: {
      paramA: 5.0,
      paramB: 3.0
    }
  };

  // --- Web Audio Synthesizer (Laboratory Acoustic Feedback) ---
  let audioCtx = null;

  function initAudio() {
    if (!audioCtx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        audioCtx = new AudioContext();
      }
    }
  }

  function playHapticBeep(freq = 520, duration = 0.035, type = 'sine') {
    if (!state.audioEnabled || !audioCtx) return;
    try {
      if (audioCtx.state === 'suspended') {
        audioCtx.resume();
      }
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = type;
      osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
      gain.gain.setValueAtTime(0.04, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + duration);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start();
      osc.stop(audioCtx.currentTime + duration);
    } catch (e) {
      // Audio context silently failed or blocked
    }
  }

  // --- DOM References ---
  const dom = {
    navLinks: document.querySelectorAll('.nav-link'),
    mobileNavToggle: document.getElementById('mobileNavToggle'),
    navLinksContainer: document.getElementById('navLinksContainer'),
    audioToggle: document.getElementById('audioToggle'),
    cmdTrigger: document.getElementById('cmdTrigger'),
    cmdPaletteBackdrop: document.getElementById('cmdPaletteBackdrop'),
    cmdInput: document.getElementById('cmdInput'),
    cmdResultsList: document.getElementById('cmdResultsList'),
    modalBackdrop: document.getElementById('modalBackdrop'),
    modalDialog: document.getElementById('modalDialog'),
    modalContent: document.getElementById('modalContent'),
    modalCloseBtn: document.getElementById('modalCloseBtn'),
    toastContainer: document.getElementById('toastContainer'),
    scrollProgressBar: document.getElementById('scrollProgressBar'),
    siteNav: document.getElementById('siteNav'),

    // Domains & Founders
    domainsGrid: document.getElementById('domainsGrid'),
    foundersGrid: document.getElementById('foundersGrid'),
    projectsGrid: document.getElementById('projectsGrid'),
    projectFilterNav: document.getElementById('projectFilterNav'),
    sessionsTimeline: document.getElementById('sessionsTimeline'),

    // Members Directory
    directorySearchInput: document.getElementById('directorySearchInput'),
    directoryFilterTabs: document.getElementById('directoryFilterTabs'),
    directoryResultsCount: document.getElementById('directoryResultsCount'),
    membersGrid: document.getElementById('membersGrid'),

    // Join Form
    joinForm: document.getElementById('joinForm'),

    // Live Canvas Elements
    interactiveCanvas: document.getElementById('interactiveCanvas'),
    canvasTabBtns: document.querySelectorAll('.signal-mode-pill'),
    canvasFormula: document.getElementById('canvasFormula'),
    canvasLiveCoords: document.getElementById('canvasLiveCoords'),
  };

  // --- Show Toast Notification ---
  function showToast(title, msg) {
    if (!dom.toastContainer) return;
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `
      <span class="star-symbol">✦</span>
      <div>
        <strong style="color:var(--ink);">${title}</strong>
        <p style="font-size:0.8125rem;color:var(--ink-secondary);margin:0;">${msg}</p>
      </div>
    `;
    dom.toastContainer.appendChild(toast);
    setTimeout(() => toast.classList.add('show'), 10);
    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => toast.remove(), 250);
    }, 3500);
  }

  // --- Modal Helper Functions ---
  function openModal(htmlContent) {
    if (!dom.modalContent || !dom.modalBackdrop) return;
    dom.modalContent.innerHTML = htmlContent;
    dom.modalBackdrop.classList.add('open');
    document.body.style.overflow = 'hidden';
    playHapticBeep(640, 0.04);
  }

  function closeModal() {
    if (!dom.modalBackdrop) return;
    dom.modalBackdrop.classList.remove('open');
    document.body.style.overflow = '';
    playHapticBeep(380, 0.03);
  }

  // --- Render Founders Section ---
  function renderFounders() {
    if (!dom.foundersGrid || !COMMUNITY_DATA.founders) return;
    dom.foundersGrid.innerHTML = COMMUNITY_DATA.founders.map((founder, idx) => `
      <article class="founder-card reveal stagger-${idx + 1}" id="founder-${founder.id}">
        <div class="founder-header">
          <span class="founder-role-tag">${founder.role}</span>
          <h3 class="founder-name">${founder.name}</h3>
          <p class="founder-specialization">${founder.specialization}</p>
        </div>

        <p class="founder-bio">${founder.bio}</p>

        <div class="founder-focus-box">
          <span class="founder-focus-title">Research Focus</span>
          <ul class="founder-focus-list">
            ${founder.focusAreas.slice(0, 3).map(area => `<li class="founder-focus-item">${area}</li>`).join('')}
          </ul>
        </div>

        <div style="font-size:0.75rem; color:var(--muted);">
          <span style="color:var(--accent); font-family:var(--font-mono);">Current Project:</span> ${founder.currentProject}
        </div>

        <div class="founder-links">
          <a href="${founder.linkedin}" target="_blank" rel="noopener noreferrer" class="founder-link-btn" title="View LinkedIn Profile">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            LinkedIn Profile
          </a>
        </div>
      </article>
    `).join('');
  }

  // --- Render Domains Section ---
  function renderDomains() {
    if (!dom.domainsGrid || !COMMUNITY_DATA.domains) return;
    dom.domainsGrid.innerHTML = COMMUNITY_DATA.domains.map((d, idx) => `
      <article class="domain-card reveal stagger-${(idx % 3) + 1}" id="domain-${d.id}">
        <div class="domain-card-top">
          <div class="domain-code-bar">
            <span class="domain-code">${d.code}</span>
            <span class="domain-lead-tag">Lead: ${d.lead}</span>
          </div>
          <h3 class="domain-title">${d.name}</h3>
          <p class="domain-summary">${d.description}</p>
          
          <ul class="domain-topics">
            ${d.keyTopics.slice(0, 3).map(t => `<li class="domain-topic-item">${t}</li>`).join('')}
          </ul>
        </div>

        <div class="domain-math-box">
          <span class="lbl">${d.equationLabel}</span>
          <code>${d.equation}</code>
        </div>
      </article>
    `).join('');
  }

  // --- Render Projects Section (Airy, Premium Cards) ---
  function renderProjects(filter = 'all') {
    if (!dom.projectsGrid || !COMMUNITY_DATA.projects) return;
    const filtered = filter === 'all' 
      ? COMMUNITY_DATA.projects 
      : COMMUNITY_DATA.projects.filter(p => p.domainId === filter);

    dom.projectsGrid.innerHTML = filtered.map((p, idx) => `
      <article class="project-card reveal stagger-${(idx % 2) + 1}" data-domain="${p.domainId}">
        <div>
          <div class="project-card-header">
            <span class="project-badge">${p.badge}</span>
            <span class="project-status">${p.status}</span>
          </div>
          <h3 class="project-title">${p.title}</h3>
          <p class="project-abstract">${p.abstract}</p>
        </div>

        <div class="project-highlight-pill">
          ${p.metrics}
        </div>

        <div class="project-card-footer">
          <div class="project-collaborators">
            Lead: <span>${p.lead}</span>
          </div>
          <button class="btn btn-ghost btn-sm project-modal-trigger" data-project-id="${p.id}">
            Specs & Architecture →
          </button>
        </div>
      </article>
    `).join('');

    // Attach modal trigger listeners
    document.querySelectorAll('.project-modal-trigger').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const projId = e.currentTarget.dataset.projectId;
        const project = COMMUNITY_DATA.projects.find(p => p.id === projId);
        if (project) openProjectModal(project);
      });
    });
  }

  function openProjectModal(p) {
    openModal(`
      <div style="display:flex; flex-direction:column; gap:1.25rem;">
        <div style="display:flex; justify-content:space-between; align-items:baseline; gap:1rem;">
          <span class="project-badge">${p.badge}</span>
          <span style="font-family:var(--font-mono); font-size:0.75rem; color:var(--muted);">${p.status}</span>
        </div>
        
        <h2 style="font-size:1.85rem; color:var(--ink); line-height:1.2;">${p.title}</h2>
        <p style="font-size:0.875rem; color:var(--accent); font-family:var(--font-mono); margin-top:-0.5rem;">Domain: ${p.domain}</p>

        <div style="background-color:var(--bg); border:1px solid var(--border); border-radius:var(--radius-sm); padding:1.25rem;">
          <h4 style="font-family:var(--font-mono); font-size:0.75rem; color:var(--muted); text-transform:uppercase; margin-bottom:0.5rem;">Technical Abstract</h4>
          <p style="font-size:0.9375rem; color:var(--ink); line-height:1.6;">${p.abstract}</p>
        </div>

        <div>
          <h4 style="font-family:var(--font-mono); font-size:0.75rem; color:var(--muted); text-transform:uppercase; margin-bottom:0.75rem;">System Architecture & Specifications</h4>
          <div class="project-specs-list" style="font-size:0.875rem; padding:1rem; background-color:var(--bg); border:1px solid var(--border); border-radius:var(--radius-sm);">
            ${Object.entries(p.technicalSpecs).map(([key, val]) => `
              <div style="display:flex; justify-content:space-between; margin-bottom:0.4rem; font-size:0.8125rem;">
                <span style="color:var(--muted); text-transform:capitalize;">${key.replace(/([A-Z])/g, ' $1')}</span>
                <span style="color:var(--ink); font-family:var(--font-mono);">${val}</span>
              </div>
            `).join('')}
          </div>
        </div>

        <div style="display:flex; justify-content:space-between; align-items:center; border-top:1px solid var(--border); padding-top:1.25rem; margin-top:0.5rem;">
          <div style="font-size:0.8125rem; color:var(--muted);">
            Researchers: <span style="color:var(--ink);">${p.lead}, ${p.collaborators.join(', ')}</span>
          </div>
          <a href="${p.github}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm">
            View Repository ↗
          </a>
        </div>
      </div>
    `);
  }

  // --- Render Sessions Section ---
  function renderSessions() {
    if (!dom.sessionsTimeline || !COMMUNITY_DATA.sessions) return;
    dom.sessionsTimeline.innerHTML = COMMUNITY_DATA.sessions.map((s, idx) => `
      <article class="session-item reveal stagger-${(idx % 3) + 1}" id="session-${s.id}">
        <div class="session-meta-col">
          <span class="session-date">${s.date}</span>
          <span class="session-type">${s.type} · ${s.domain}</span>
        </div>

        <div class="session-content-col">
          <h3 class="session-title">${s.title}</h3>
          <p class="session-summary">${s.summary}</p>
          <div class="session-speaker-tag">
            Led by: <span>${s.speaker}</span> (${s.role})
          </div>
        </div>

        <div class="session-action-col">
          <button class="btn btn-ghost btn-sm session-notes-btn" data-session-id="${s.id}">
            Syllabus & Notes
          </button>
        </div>
      </article>
    `).join('');

    document.querySelectorAll('.session-notes-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const sessId = e.currentTarget.dataset.sessionId;
        const session = COMMUNITY_DATA.sessions.find(s => s.id === sessId);
        if (session) openSessionModal(session);
      });
    });
  }

  function openSessionModal(s) {
    openModal(`
      <div style="display:flex; flex-direction:column; gap:1.25rem;">
        <div style="display:flex; justify-content:space-between; align-items:baseline;">
          <span style="font-family:var(--font-mono); font-size:0.75rem; color:var(--accent);">${s.date} · ${s.type}</span>
          <span style="font-family:var(--font-mono); font-size:0.75rem; color:var(--muted);">${s.domain}</span>
        </div>

        <h2 style="font-size:1.75rem; color:var(--ink); line-height:1.2;">${s.title}</h2>
        <p style="font-size:0.875rem; color:var(--muted);">Conducted by: <strong style="color:var(--ink);">${s.speaker}</strong> (${s.role})</p>

        <div style="background-color:var(--bg); border:1px solid var(--border); border-radius:var(--radius-sm); padding:1.25rem;">
          <h4 style="font-family:var(--font-mono); font-size:0.75rem; color:var(--muted); text-transform:uppercase; margin-bottom:0.5rem;">Session Overview</h4>
          <p style="font-size:0.9375rem; color:var(--ink-secondary); line-height:1.6;">${s.summary}</p>
        </div>

        <div>
          <h4 style="font-family:var(--font-mono); font-size:0.75rem; color:var(--muted); text-transform:uppercase; margin-bottom:0.75rem;">Core Syllabus & Covered Topics</h4>
          <ul style="list-style:none; display:flex; flex-direction:column; gap:0.5rem;">
            ${s.topics.map(t => `
              <li style="font-size:0.875rem; color:var(--ink); display:flex; gap:0.6rem;">
                <span style="color:var(--accent);">✦</span>
                <span>${t}</span>
              </li>
            `).join('')}
          </ul>
        </div>

        <div style="border-top:1px solid var(--border); padding-top:1.25rem; display:flex; justify-content:space-between; align-items:center;">
          <span style="font-size:0.75rem; color:var(--muted);">Laboratory access provided during study circles.</span>
          <button class="btn btn-ghost btn-sm" onclick="alert('Session notebooks and slides are archived in our private student repository.')">
            Archive Access
          </button>
        </div>
      </div>
    `);
  }

  // --- Render Members Directory ---
  function renderMembers() {
    if (!dom.membersGrid || !COMMUNITY_DATA.members) return;
    const query = state.memberSearchQuery.toLowerCase().trim();
    const domainFilter = state.activeDomainTab;

    const filtered = COMMUNITY_DATA.members.filter(m => {
      const matchesDomain = domainFilter === 'all' || m.domainId === domainFilter;
      const matchesSearch = !query || 
        m.name.toLowerCase().includes(query) ||
        m.focus.toLowerCase().includes(query) ||
        m.activeProject.toLowerCase().includes(query) ||
        m.skills.some(s => s.toLowerCase().includes(query));
      return matchesDomain && matchesSearch;
    });

    if (dom.directoryResultsCount) {
      dom.directoryResultsCount.textContent = `Showing ${filtered.length} of ${COMMUNITY_DATA.members.length} First-Year Members`;
    }

    if (filtered.length === 0) {
      dom.membersGrid.innerHTML = `
        <div style="grid-column: 1 / -1; padding: 3rem 1rem; text-align: center; color: var(--muted);">
          <p style="font-size:1.15rem; color:var(--ink); margin-bottom:0.5rem;">No members matched your search criteria.</p>
          <p style="font-size:0.875rem;">Try clearing your search query or selecting a different technical domain.</p>
        </div>
      `;
      return;
    }

    dom.membersGrid.innerHTML = filtered.map((m, idx) => `
      <article class="member-card reveal stagger-${(idx % 4) + 1}" data-member-id="${m.id}" tabindex="0" role="button" aria-label="View profile for ${m.name}">
        <div class="member-card-top">
          <span class="member-domain-badge">${m.domain}</span>
          <h3 class="member-name">${m.name}</h3>
          <p class="member-focus">${m.focus}</p>
          
          <div class="member-skills-row">
            ${m.skills.slice(0, 3).map(sk => `<span class="member-skill-pill">${sk}</span>`).join('')}
          </div>
        </div>

        <div class="member-card-bottom">
          <span>${m.cohort}</span>
          <span class="member-expand-cue">Profile →</span>
        </div>
      </article>
    `).join('');

    // Add click listeners to member cards
    document.querySelectorAll('.member-card').forEach(card => {
      const memId = card.dataset.memberId;
      const member = COMMUNITY_DATA.members.find(m => m.id === memId);
      if (!member) return;

      card.addEventListener('click', () => openMemberModal(member));
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openMemberModal(member);
        }
      });
    });

    // Re-observe newly rendered cards for scroll reveal
    observeReveals();
  }

  function openMemberModal(m) {
    openModal(`
      <div style="display:flex; flex-direction:column; gap:1.35rem;">
        <div style="display:flex; justify-content:space-between; align-items:baseline;">
          <span class="member-domain-badge">${m.domain}</span>
          <span style="font-family:var(--font-mono); font-size:0.75rem; color:var(--muted);">${m.cohort} Cohort</span>
        </div>

        <div>
          <h2 style="font-size:2rem; color:var(--ink);">${m.name}</h2>
          <p style="font-size:0.9375rem; color:var(--accent); font-family:var(--font-mono); margin-top:0.25rem;">
            ${m.focus}
          </p>
        </div>

        <div style="background-color:var(--bg); border:1px solid var(--border); border-radius:var(--radius-sm); padding:1.25rem;">
          <h4 style="font-family:var(--font-mono); font-size:0.75rem; color:var(--muted); text-transform:uppercase; margin-bottom:0.5rem;">Academic Bio & Research Exploration</h4>
          <p style="font-size:0.9375rem; color:var(--ink-secondary); line-height:1.6;">${m.bio}</p>
        </div>

        <div style="display:grid; grid-template-columns:1fr 1fr; gap:1rem;">
          <div style="background-color:var(--surface-elevated); border:1px solid var(--border); border-radius:var(--radius-sm); padding:1rem;">
            <h4 style="font-family:var(--font-mono); font-size:0.6875rem; color:var(--muted); text-transform:uppercase; margin-bottom:0.5rem;">Active Project</h4>
            <p style="font-size:0.875rem; color:var(--ink); font-weight:500;">${m.activeProject}</p>
          </div>
          <div style="background-color:var(--surface-elevated); border:1px solid var(--border); border-radius:var(--radius-sm); padding:1rem;">
            <h4 style="font-family:var(--font-mono); font-size:0.6875rem; color:var(--muted); text-transform:uppercase; margin-bottom:0.5rem;">Key Technical Skills</h4>
            <div style="display:flex; flex-wrap:wrap; gap:0.35rem;">
              ${m.skills.map(s => `<span class="member-skill-pill" style="color:var(--ink);">${s}</span>`).join('')}
            </div>
          </div>
        </div>

        <div style="display:flex; justify-content:space-between; align-items:center; border-top:1px solid var(--border); padding-top:1.25rem; margin-top:0.5rem;">
          <span style="font-size:0.8125rem; color:var(--muted);">Melerigamy Technical Collective</span>
          <div style="display:flex; gap:0.75rem;">
            <a href="${m.linkedin}" target="_blank" rel="noopener noreferrer" class="btn btn-ghost btn-sm">
              LinkedIn
            </a>
            <a href="${m.github}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm">
              GitHub
            </a>
          </div>
        </div>
      </div>
    `);
  }

  // --- Interactive Cross-Domain Signal Viewport (The Live Thing) ---
  class SignalResonator {
    constructor(canvas) {
      this.canvas = canvas;
      this.ctx = canvas.getContext('2d');
      this.time = 0;
      this.scrollDrift = 0;
      this.resize();
      window.addEventListener('resize', () => this.resize());

      // Interactive pointer modulation
      this.bindInteractions();
      this.start();
    }

    resize() {
      const rect = this.canvas.parentElement.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      this.canvas.width = rect.width * dpr;
      this.canvas.height = rect.height * dpr;
      this.ctx.scale(dpr, dpr);
      this.width = rect.width;
      this.height = rect.height;
    }

    bindInteractions() {
      const handleMove = (clientX, clientY) => {
        const rect = this.canvas.getBoundingClientRect();
        const nx = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
        const ny = Math.max(0, Math.min(1, (clientY - rect.top) / rect.height));

        // Dynamically adjust parameters based on pointer position
        state.canvasParams.paramA = parseFloat((1 + nx * 9).toFixed(1));
        state.canvasParams.paramB = parseFloat((1 + (1 - ny) * 7).toFixed(1));

        if (dom.canvasLiveCoords) {
          dom.canvasLiveCoords.textContent = `f₀: ${state.canvasParams.paramA} · α: ${state.canvasParams.paramB}`;
        }
      };

      this.canvas.addEventListener('mousemove', (e) => {
        handleMove(e.clientX, e.clientY);
      });

      this.canvas.addEventListener('touchmove', (e) => {
        if (e.touches.length > 0) {
          handleMove(e.touches[0].clientX, e.touches[0].clientY);
        }
      }, { passive: true });

      // Connect scroll drift to signal velocity
      let lastScrollY = window.pageYOffset;
      window.addEventListener('scroll', () => {
        const delta = window.pageYOffset - lastScrollY;
        this.scrollDrift += Math.abs(delta) * 0.002;
        lastScrollY = window.pageYOffset;
      }, { passive: true });
    }

    start() {
      const loop = () => {
        this.time += 0.025 + this.scrollDrift * 0.1;
        this.scrollDrift *= 0.95; // Decay drift smoothly
        this.draw();
        requestAnimationFrame(loop);
      };
      loop();
    }

    draw() {
      const ctx = this.ctx;
      const w = this.width;
      const h = this.height;
      const midY = h / 2;

      ctx.clearRect(0, 0, w, h);

      // Coordinates grid
      ctx.strokeStyle = 'rgba(216, 202, 168, 0.04)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      for (let x = 0; x < w; x += 40) {
        ctx.moveTo(x, 0);
        ctx.lineTo(x, h);
      }
      for (let y = 0; y < h; y += 40) {
        ctx.moveTo(0, y);
        ctx.lineTo(w, y);
      }
      ctx.stroke();

      // Center reference baseline
      ctx.strokeStyle = 'rgba(216, 202, 168, 0.12)';
      ctx.beginPath();
      ctx.moveTo(0, midY);
      ctx.lineTo(w, midY);
      ctx.stroke();

      const paramA = state.canvasParams.paramA;
      const paramB = state.canvasParams.paramB;

      switch (state.canvasMode) {
        case 'rf':
          this.drawRFModulation(w, h, midY, paramA, paramB);
          break;
        case 'math':
          this.drawFourierSynthesis(w, h, midY, paramA, paramB);
          break;
        case 'ai':
          this.drawLossLandscape(w, h, midY, paramA, paramB);
          break;
        case 'electronics':
          this.drawRLCTransient(w, h, midY, paramA, paramB);
          break;
        case 'cyber':
          this.drawEntropyStream(w, h, midY, paramA, paramB);
          break;
        case 'research':
          this.drawWavePacket(w, h, midY, paramA, paramB);
          break;
      }
    }

    drawRFModulation(w, h, midY, fc, beta) {
      const ctx = this.ctx;
      ctx.beginPath();
      ctx.strokeStyle = '#d8caa8';
      ctx.lineWidth = 1.8;

      const carrierFreq = fc * 0.75;
      const modFreq = 0.5 + beta * 0.15;
      const modDepth = beta * 0.35;

      for (let x = 0; x < w; x++) {
        const t = (x / w) * 10 + this.time;
        const modSignal = Math.sin(modFreq * t);
        const y = midY + Math.sin(carrierFreq * t + modDepth * modSignal) * (h * 0.32);
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();

      // Envelope guide
      ctx.beginPath();
      ctx.strokeStyle = 'rgba(216, 202, 168, 0.2)';
      ctx.setLineDash([3, 4]);
      for (let x = 0; x < w; x += 3) {
        const t = (x / w) * 10 + this.time;
        const env = Math.cos(modFreq * t) * (h * 0.34);
        if (x === 0) ctx.moveTo(x, midY + env);
        else ctx.lineTo(x, midY + env);
      }
      ctx.stroke();
      ctx.setLineDash([]);
    }

    drawFourierSynthesis(w, h, midY, harmonics, phaseRate) {
      const ctx = this.ctx;
      const N = Math.max(1, Math.floor(harmonics));

      for (let k = 1; k <= Math.min(N, 4); k++) {
        const n = 2 * k - 1;
        ctx.beginPath();
        ctx.strokeStyle = `rgba(216, 202, 168, ${0.12 / k})`;
        ctx.lineWidth = 1;
        for (let x = 0; x < w; x++) {
          const theta = (x / w) * Math.PI * 4 + this.time * (phaseRate * 0.2);
          const y = midY + ((4 / Math.PI) * (1 / n) * Math.sin(n * theta)) * (h * 0.28);
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
      }

      ctx.beginPath();
      ctx.strokeStyle = '#f5f2eb';
      ctx.lineWidth = 2;
      for (let x = 0; x < w; x++) {
        const theta = (x / w) * Math.PI * 4 + this.time * (phaseRate * 0.2);
        let sum = 0;
        for (let k = 1; k <= N; k++) {
          const n = 2 * k - 1;
          sum += (4 / Math.PI) * (1 / n) * Math.sin(n * theta);
        }
        const y = midY + sum * (h * 0.28);
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();
    }

    drawLossLandscape(w, h, midY, lr, momentum) {
      const ctx = this.ctx;
      ctx.beginPath();
      ctx.strokeStyle = 'rgba(216, 202, 168, 0.3)';
      ctx.lineWidth = 1.5;
      for (let x = 0; x < w; x++) {
        const nx = (x / w) * 6 - 3;
        const val = Math.pow(nx, 4) - 2.5 * Math.pow(nx, 2) + 0.2 * nx;
        const y = midY + val * (h * 0.12);
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();

      const oscSpeed = lr * 0.3;
      const decay = Math.exp(-((this.time * 0.5) % 4));
      const ballNx = 1.1 + Math.sin(this.time * oscSpeed) * decay * (1 - momentum * 0.08);
      const ballX = ((ballNx + 3) / 6) * w;
      const ballVal = Math.pow(ballNx, 4) - 2.5 * Math.pow(ballNx, 2) + 0.2 * ballNx;
      const ballY = midY + ballVal * (h * 0.12);

      ctx.fillStyle = '#d8caa8';
      ctx.beginPath();
      ctx.arc(ballX, ballY, 5, 0, Math.PI * 2);
      ctx.fill();

      ctx.strokeStyle = '#f5f2eb';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(ballX, ballY);
      ctx.lineTo(ballX - 18 * decay, ballY - 10 * decay);
      ctx.stroke();
    }

    drawRLCTransient(w, h, midY, dampingParam, freqParam) {
      const ctx = this.ctx;
      const alpha = dampingParam * 0.35;
      const omega = freqParam * 1.5;

      ctx.beginPath();
      ctx.strokeStyle = '#d8caa8';
      ctx.lineWidth = 1.8;

      for (let x = 0; x < w; x++) {
        const t = (x / w) * 6;
        const env = Math.exp(-alpha * t);
        const wave = env * Math.cos(omega * t + this.time * 2);
        const y = midY + wave * (h * 0.36);
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();
    }

    drawEntropyStream(w, h, midY, entropyLevel, noiseRate) {
      const ctx = this.ctx;
      const cols = 28;
      const colWidth = w / cols;
      const maxBarH = h * 0.36;

      for (let i = 0; i < cols; i++) {
        const seed = Math.sin(i * 1.3 + this.time * (noiseRate * 0.3));
        const entropyMod = (seed * 0.5 + 0.5) * (entropyLevel / 10);
        const barHeight = entropyMod * maxBarH;

        ctx.fillStyle = i % 2 === 0 ? 'rgba(216, 202, 168, 0.65)' : 'rgba(245, 242, 235, 0.35)';
        ctx.fillRect(i * colWidth + 2, midY - barHeight / 2, colWidth - 4, barHeight);
      }

      ctx.beginPath();
      ctx.strokeStyle = '#f5f2eb';
      ctx.lineWidth = 1.75;
      for (let x = 0; x < w; x++) {
        const phase = (x / w) * Math.PI * 4 + this.time;
        const y = midY - Math.sin(phase) * Math.cos(phase * 0.5) * (maxBarH * 0.6);
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();
    }

    drawWavePacket(w, h, midY, sigma, k0) {
      const ctx = this.ctx;
      const spread = 0.5 + sigma * 0.15;
      const waveNum = k0 * 1.8;

      ctx.beginPath();
      ctx.strokeStyle = '#d8caa8';
      ctx.lineWidth = 2;

      for (let x = 0; x < w; x++) {
        const tNorm = ((x - w / 2) / (w * 0.18));
        const env = Math.exp(-Math.pow(tNorm / spread, 2) / 2);
        const psiReal = env * Math.cos(waveNum * tNorm - this.time * 3);
        const y = midY + psiReal * (h * 0.38);
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();

      ctx.beginPath();
      ctx.fillStyle = 'rgba(216, 202, 168, 0.08)';
      ctx.moveTo(0, midY);
      for (let x = 0; x < w; x++) {
        const tNorm = ((x - w / 2) / (w * 0.18));
        const env = Math.exp(-Math.pow(tNorm / spread, 2) / 2);
        const probDensity = Math.pow(env, 2) * (h * 0.36);
        ctx.lineTo(x, midY - probDensity);
      }
      ctx.lineTo(w, midY);
      ctx.closePath();
      ctx.fill();
    }
  }

  // --- Setup Canvas Mode Switcher ---
  function setupCanvasControls() {
    const modeMetadata = {
      rf: { formula: "s(t) = A_c \\cos(2\\pi f_c t + \\beta \\sin(2\\pi f_m t))" },
      math: { formula: "f(t) = \\sum_{k=1}^N \\frac{4}{\\pi(2k-1)} \\sin((2k-1)\\omega t)" },
      ai: { formula: "\\theta_{t+1} = \\theta_t - \\eta \\nabla \\mathcal{L}(\\theta_t) + \\gamma v_t" },
      electronics: { formula: "v(t) = V_0 e^{-\\alpha t} \\cos(\\omega_d t + \\phi)" },
      cyber: { formula: "H(X) = -\\sum P(x_i) \\log_2 P(x_i)" },
      research: { formula: "\\psi(x, t) = \\frac{1}{\\sqrt{2\\pi}} \\int A(k) e^{i(kx - \\omega t)} dk" }
    };

    function updateMode(mode) {
      state.canvasMode = mode;
      dom.canvasTabBtns.forEach(btn => {
        btn.classList.toggle('active', btn.dataset.mode === mode);
      });

      const meta = modeMetadata[mode] || modeMetadata.rf;
      if (dom.canvasFormula) dom.canvasFormula.textContent = meta.formula;
      playHapticBeep(520, 0.03);
    }

    dom.canvasTabBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        updateMode(btn.dataset.mode);
      });
    });
  }

  // --- Scroll Animation Engine & Scrollspy ---
  let scrollObserver = null;

  function observeReveals() {
    if (typeof IntersectionObserver === 'undefined') {
      document.querySelectorAll('.reveal').forEach(el => el.classList.add('revealed'));
      return;
    }

    if (!scrollObserver) {
      scrollObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      }, {
        threshold: 0.1,
        rootMargin: '0px 0px -40px 0px'
      });
    }

    document.querySelectorAll('.reveal:not(.revealed)').forEach(el => {
      scrollObserver.observe(el);
    });
  }

  function setupScrollTracking() {
    window.addEventListener('scroll', () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

      // Update hairline progress bar
      if (dom.scrollProgressBar) {
        dom.scrollProgressBar.style.width = `${progress}%`;
      }

      // Toggle scrolled class on navbar
      if (dom.siteNav) {
        dom.siteNav.classList.toggle('scrolled', scrollTop > 30);
      }
    }, { passive: true });
  }

  // --- Command Palette Engine (`Ctrl+K` / `⌘K`) ---
  function setupCommandPalette() {
    const searchableItems = [
      { title: "Home: Overview & Introduction", category: "Navigation", action: () => scrollToSection('hero') },
      { title: "About: Purpose, Culture & Mentorship", category: "Navigation", action: () => scrollToSection('about') },
      { title: "Domains: 6 Research Fields", category: "Navigation", action: () => scrollToSection('domains') },
      { title: "Projects: Flagship Technical Works", category: "Navigation", action: () => scrollToSection('projects') },
      { title: "Sessions: Knowledge Workshops & Seminars", category: "Navigation", action: () => scrollToSection('sessions') },
      { title: "Founders: Ishaan, Dhruv & Keshav", category: "Navigation", action: () => scrollToSection('founders') },
      { title: "Directory: 30+ First-Year Members", category: "Navigation", action: () => scrollToSection('directory') },
      { title: "Join: Community Application", category: "Navigation", action: () => scrollToSection('join') },

      ...COMMUNITY_DATA.domains.map(d => ({
        title: `${d.name} (${d.code})`,
        category: "Domain",
        action: () => {
          scrollToSection('domains');
          const el = document.getElementById(`domain-${d.id}`);
          if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      })),

      ...COMMUNITY_DATA.projects.map(p => ({
        title: p.title,
        category: "Project",
        action: () => openProjectModal(p)
      })),

      ...COMMUNITY_DATA.founders.map(f => ({
        title: `${f.name} (${f.role} - ${f.specialization})`,
        category: "Founder",
        action: () => {
          scrollToSection('founders');
          const el = document.getElementById(`founder-${f.id}`);
          if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      })),

      ...COMMUNITY_DATA.members.map(m => ({
        title: `${m.name} — ${m.focus}`,
        category: "Member",
        action: () => openMemberModal(m)
      }))
    ];

    let selectedIndex = 0;
    let currentResults = [...searchableItems.slice(0, 8)];

    function renderResults() {
      dom.cmdResultsList.innerHTML = currentResults.map((item, idx) => `
        <li class="cmd-result-item ${idx === selectedIndex ? 'selected' : ''}" data-idx="${idx}">
          <div class="cmd-result-text">
            <span class="cmd-result-title">${item.title}</span>
          </div>
          <span class="cmd-result-category">${item.category}</span>
        </li>
      `).join('');

      document.querySelectorAll('.cmd-result-item').forEach(el => {
        el.addEventListener('click', (e) => {
          const idx = parseInt(e.currentTarget.dataset.idx, 10);
          executeItem(currentResults[idx]);
        });
      });
    }

    function executeItem(item) {
      if (!item) return;
      closeCmdPalette();
      item.action();
    }

    function openCmdPalette() {
      dom.cmdPaletteBackdrop.classList.add('open');
      dom.cmdInput.value = '';
      currentResults = searchableItems.slice(0, 8);
      selectedIndex = 0;
      renderResults();
      setTimeout(() => dom.cmdInput.focus(), 50);
      playHapticBeep(700, 0.03);
    }

    function closeCmdPalette() {
      dom.cmdPaletteBackdrop.classList.remove('open');
      playHapticBeep(420, 0.03);
    }

    if (dom.cmdTrigger) dom.cmdTrigger.addEventListener('click', openCmdPalette);

    if (dom.cmdPaletteBackdrop) {
      dom.cmdPaletteBackdrop.addEventListener('click', (e) => {
        if (e.target === dom.cmdPaletteBackdrop) closeCmdPalette();
      });
    }

    window.addEventListener('keydown', (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        if (dom.cmdPaletteBackdrop.classList.contains('open')) closeCmdPalette();
        else openCmdPalette();
      }

      if (dom.cmdPaletteBackdrop && dom.cmdPaletteBackdrop.classList.contains('open')) {
        if (e.key === 'Escape') {
          closeCmdPalette();
        } else if (e.key === 'ArrowDown') {
          e.preventDefault();
          selectedIndex = (selectedIndex + 1) % currentResults.length;
          renderResults();
        } else if (e.key === 'ArrowUp') {
          e.preventDefault();
          selectedIndex = (selectedIndex - 1 + currentResults.length) % currentResults.length;
          renderResults();
        } else if (e.key === 'Enter') {
          e.preventDefault();
          executeItem(currentResults[selectedIndex]);
        }
      }
    });

    if (dom.cmdInput) {
      dom.cmdInput.addEventListener('input', (e) => {
        const q = e.target.value.toLowerCase().trim();
        if (!q) {
          currentResults = searchableItems.slice(0, 8);
        } else {
          currentResults = searchableItems.filter(item => 
            item.title.toLowerCase().includes(q) || 
            item.category.toLowerCase().includes(q)
          ).slice(0, 10);
        }
        selectedIndex = 0;
        renderResults();
      });
    }
  }

  function scrollToSection(id) {
    const el = document.getElementById(id);
    if (el) {
      const navH = 68;
      const y = el.getBoundingClientRect().top + window.pageYOffset - navH;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  }

  // --- Directory Filter Tabs & Live Search Setup ---
  function setupDirectoryListeners() {
    if (dom.directorySearchInput) {
      dom.directorySearchInput.addEventListener('input', (e) => {
        state.memberSearchQuery = e.target.value;
        renderMembers();
      });
    }

    if (dom.directoryFilterTabs) {
      dom.directoryFilterTabs.addEventListener('click', (e) => {
        const tab = e.target.closest('.directory-tab');
        if (!tab) return;
        document.querySelectorAll('.directory-tab').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        state.activeDomainTab = tab.dataset.domain;
        playHapticBeep(480, 0.025);
        renderMembers();
      });
    }
  }

  // --- Project Filter Tabs Setup ---
  function setupProjectFilterListeners() {
    if (dom.projectFilterNav) {
      dom.projectFilterNav.addEventListener('click', (e) => {
        const btn = e.target.closest('.project-filter-btn');
        if (!btn) return;
        document.querySelectorAll('.project-filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        state.activeProjectFilter = btn.dataset.domain;
        playHapticBeep(460, 0.025);
        renderProjects(state.activeProjectFilter);
        observeReveals();
      });
    }
  }

  // --- Join Form Submission Handler ---
  function setupJoinForm() {
    if (!dom.joinForm) return;
    dom.joinForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const formData = new FormData(dom.joinForm);
      const name = formData.get('name');
      const email = formData.get('email');
      const domains = formData.getAll('domains');

      if (!name || !email) {
        alert('Please fill in your name and email address.');
        return;
      }

      playHapticBeep(880, 0.06);
      showToast(
        'Interest Application Recorded',
        `Thank you, ${name}! Your submission for ${domains.join(', ') || 'our technical collective'} has been recorded.`
      );
      dom.joinForm.reset();
    });
  }

  // --- Navigation Scrollspy & Mobile Nav ---
  function setupNavigation() {
    if (dom.mobileNavToggle && dom.navLinksContainer) {
      dom.mobileNavToggle.addEventListener('click', () => {
        dom.navLinksContainer.classList.toggle('mobile-open');
        playHapticBeep(520, 0.03);
      });

      document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
          dom.navLinksContainer.classList.remove('mobile-open');
        });
      });
    }

    if (dom.audioToggle) {
      dom.audioToggle.addEventListener('click', () => {
        initAudio();
        state.audioEnabled = !state.audioEnabled;
        dom.audioToggle.classList.toggle('active', state.audioEnabled);
        dom.audioToggle.setAttribute('aria-pressed', state.audioEnabled);
        if (state.audioEnabled) {
          playHapticBeep(660, 0.05);
          showToast('Acoustic Feedback Active', 'Subtle UI ticks enabled.');
        } else {
          showToast('Acoustic Feedback Muted', 'UI audio disabled.');
        }
      });
    }

    if (dom.modalBackdrop && dom.modalCloseBtn) {
      dom.modalCloseBtn.addEventListener('click', closeModal);
      dom.modalBackdrop.addEventListener('click', (e) => {
        if (e.target === dom.modalBackdrop) closeModal();
      });
      window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && dom.modalBackdrop.classList.contains('open')) {
          closeModal();
        }
      });
    }

    const sections = document.querySelectorAll('section[id]');
    window.addEventListener('scroll', () => {
      let current = '';
      const scrollPos = window.pageYOffset + 120;
      sections.forEach(sec => {
        const top = sec.offsetTop;
        const height = sec.offsetHeight;
        if (scrollPos >= top && scrollPos < top + height) {
          current = sec.getAttribute('id');
        }
      });

      dom.navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
          link.classList.add('active');
        }
      });
    }, { passive: true });
  }

  // --- Application Entry Point ---
  document.addEventListener('DOMContentLoaded', () => {
    renderFounders();
    renderDomains();
    renderProjects();
    renderSessions();
    renderMembers();

    setupNavigation();
    setupDirectoryListeners();
    setupProjectFilterListeners();
    setupJoinForm();
    setupCommandPalette();
    setupScrollTracking();
    observeReveals();

    if (dom.interactiveCanvas) {
      new SignalResonator(dom.interactiveCanvas);
      setupCanvasControls();
    }
  });

})();
