import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { RootData, Song, QueuedSong } from '../types';
import { marked } from 'marked';
import dataJson from '../data/index.json';
import loadingWords from '../data/loading.json';

import './lit-event-card';
import './lit-player';
import './lit-footer';
import './lit-header';
import './lit-nav-years';

const allData = dataJson as unknown as RootData;
const COLORS = [
  'var(--color-red)',
  'var(--color-yellow)',
  'var(--color-green)',
  'var(--color-blue)',
  'var(--color-orange)',
  'var(--color-purple)',
];

function createId(str: string) {
  return 'a-' + str.toString().replace(/[!-/:-@\\[-`{-~ \s]/g, '-');
}

@customElement('lit-music-app')
export class LitMusicApp extends LitElement {
  @state()
  private activeTab: 'camp' | 'school' | 'event' = 'camp';

  @state()
  private playerQueue: QueuedSong[] = [];

  @state()
  private currentSongIndex: number = 0;

  @state()
  private currentEventName: string = '';

  @state()
  private playerQueueTab: 'camp' | 'school' | 'event' | '' = '';

  @state()
  private videoOffsetTop = 0;

  @state()
  private isLoaded: boolean = false;

  @state()
  private splashActive: boolean = window.innerWidth > 768;

  @state()
  private loadingWord: string = '';

  @state()
  private isMarkdownModalOpen = false;

  @state()
  private markdownModalContent = '';

  @state()
  private markdownModalTitle = '';

  @state()
  private isMVMode: boolean = false;

  @state()
  private isMobile: boolean = window.innerWidth <= 768;

  @state()
  private navigationTop: number = 0;

  @state()
  private introProgress: number = 0;

  @state()
  private isAtPageTop: boolean = true;

  constructor() {
    super();
    const msgs = loadingWords || ['なんと！　ななんと！　なななんと！'];
    this.loadingWord = msgs[Math.floor(Math.random() * msgs.length)];
  }

  private get currentPlayingSong(): QueuedSong | undefined {
    return this.playerQueue[this.currentSongIndex];
  }

  private syncResponsiveMode() {
    const nextIsMobile = window.innerWidth <= 768;
    if (nextIsMobile !== this.isMobile) {
      this.isMobile = nextIsMobile;
    }

    if (this.isMobile) {
      this.classList.remove('mv-active');
    } else if (this.isMVMode) {
      this.classList.add('mv-active');
    } else {
      this.classList.remove('mv-active');
    }
  }

  private handleResize = () => {
    this.syncResponsiveMode();
    this.updateIntroProgress();
    this.updateNavigationTop();
  };

  private handleScroll = () => {
    this.updateIntroProgress();
  };

  private updateIntroProgress() {
    const progress = Math.min(window.scrollY / window.innerHeight, 1);
    if (progress !== this.introProgress) {
      this.introProgress = progress;
    }

    const atTop = window.scrollY <= 1;
    if (atTop !== this.isAtPageTop) {
      this.isAtPageTop = atTop;
    }
  }

  private updateNavigationTop() {
    this.navigationTop = 184;
  }

  firstUpdated() {
    this.updateIntroProgress();
    this.updateNavigationTop();

    setTimeout(() => {
      const mark = this.shadowRoot?.querySelector('#mark') as HTMLElement;
      if (mark && !this.isMobile) {
        const markRect = mark.getBoundingClientRect();
        mark.style.transform = `translateX(${window.innerWidth / 2 - markRect.left}px) translateX(-50%)`;
      }

      setTimeout(() => {
        this.isLoaded = true;
        setTimeout(() => {
          if (mark && !this.isMobile) {
            mark.style.transition = 'transform 1s cubic-bezier(0.2, 0.8, 0.2, 1)';
            mark.style.transform = 'none';
          }
          this.splashActive = false;
        }, 300);
      }, 2000);
    }, 50);
  }

  static styles = css`
    :host {
      display: block;
      min-height: 100vh;
      padding-bottom: 100px; /* space for player */
      transition: padding-right 0.3s ease;
    }

    :host(.mv-active) {
      /* Padding moved to children to avoid squashing the whole container */
    }

    :host(.mv-active) .lit-main {
      max-width: none;
      margin: 0;
      width: 50%;
      padding-right: 1rem;
      box-sizing: border-box;
    }

    @media (max-width: 768px) {
      :host {
        padding-bottom: 0; /* Player bar is hidden on mobile */
        position: relative; /* Ensure absolute positioning works for lit-player */
      }
      :host(.mv-active) {
        padding-bottom: 0;
      }
      :host(.mv-active) .lit-main {
        width: 100%;
        padding-right: 0;
        box-sizing: border-box;
      }
      :host(.mv-active) #navigations {
        display: none;
      }

      .lit-main {
        padding-right: 0;
        box-sizing: border-box;
      }
    }

    .lit-modal-overlay {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.6);
      z-index: 9999;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 1rem;
    }
    .lit-modal-content {
      background: var(--color-surface);
      border-radius: var(--radius-md);
      box-shadow: var(--shadow-lg);
      width: 100%;
      max-width: 600px;
      max-height: 80vh;
      display: flex;
      flex-direction: column;
      overflow: hidden;
      animation: modalFadeIn 0.2s ease-out;
    }
    @keyframes modalFadeIn {
      from {
        transform: translateY(20px);
        opacity: 0;
      }
      to {
        transform: translateY(0);
        opacity: 1;
      }
    }
    .lit-modal-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1rem 1.5rem;
      border-bottom: 1px solid var(--color-border);
      background: var(--color-background);
    }
    .lit-modal-header h3 {
      margin: 0;
      font-size: 1.25rem;
      color: var(--color-text-primary);
    }
    .lit-modal-close {
      background: none;
      border: none;
      font-size: 1.5rem;
      cursor: pointer;
      color: var(--color-text-secondary);
    }
    .lit-modal-close:hover {
      color: var(--color-text-primary);
    }
    .lit-modal-body {
      padding: 1.5rem;
      overflow-y: auto;
      color: var(--color-text-primary);
      line-height: 1.6;
    }
    .lit-modal-body p {
      margin-top: 0;
    }

    .lit-main {
      max-width: 800px;
      margin: 0 auto;
      padding: 128px 1rem 2rem;
    }

    .lit-controls {
      display: flex;
      justify-content: flex-end;
      margin-bottom: 2rem;
    }

    .lit-btn-random {
      background: var(--color-blue);
      color: white;
      border: none;
      padding: 12px 24px;
      border-radius: var(--radius-full);
      font-weight: bold;
      font-size: 1rem;
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 8px;
      box-shadow: var(--shadow-sm);
      transition: var(--transition-fast);
    }

    .lit-btn-random:hover {
      transform: translateY(-2px);
      box-shadow: var(--shadow-md);
      background: #004ecc;
    }

    /* Splash & Loading Animations */
    #loading {
      width: 100vw;
      height: 100vh;
      position: fixed;
      top: 0;
      left: 0;
      background: #fff;
      z-index: 9999;
      transition:
        opacity 0.5s,
        visibility 0.5s;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    #loading.loaded {
      opacity: 0;
      visibility: hidden;
      pointer-events: none;
    }

    #loading img {
      height: 60px;
    }

    #loading-message {
      position: absolute;
      bottom: 20%;
      font-weight: bold;
      text-align: center;
      width: 100%;
      opacity: 0.5;
      color: #333;
    }

    .lit-intro-spacer {
      width: 100%;
      height: 100vh;
    }
  `;

  private setTab(tab: 'camp' | 'school' | 'event') {
    this.activeTab = tab;
    this.scrollToContentStart();
  }

  private handlePlayRandom() {
    const allSongs = this.buildTabQueue();

    // Shuffle
    for (let i = allSongs.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [allSongs[i], allSongs[j]] = [allSongs[j], allSongs[i]];
    }

    const playableSongs = allSongs.filter(
      (s) =>
        s.youtubeUrl &&
        s.youtubeUrl.match(
          /(?:\/\/|https?:\/\/)?(?:www\.)?(?:youtube\.com\/watch\?v=|youtu\.be\/)([\w-]{11})/
        )
    );

    if (playableSongs.length > 0) {
      this.playerQueue = playableSongs;
      this.currentSongIndex = 0;
      this.playerQueueTab = this.activeTab;
      this.currentEventName = this.playerQueue[0]?.eventName || '';

      const player = this.shadowRoot?.querySelector('lit-player') as any;
      if (!this.isMobile && player && typeof player.playSongImmediately === 'function') {
        player.playSongImmediately(this.playerQueue, this.currentSongIndex);
      }
    } else {
      alert('No playable songs found in this category.');
    }
  }

  async updated(changedProperties: Map<string, any>) {
    if (changedProperties.has('currentSongIndex')) {
      await this.updateComplete;
      if (!this.isMobile) {
        this.scrollToCurrentSong();
      }
    }
  }

  private scrollToCurrentSong() {
    // Only scroll if we are in the same tab as the queue
    if (this.activeTab !== this.playerQueueTab) return;

    const currentSong = this.playerQueue[this.currentSongIndex] as any;
    if (!currentSong || !currentSong.eventName) return;

    const el = this.shadowRoot?.querySelector(`[data-event="${currentSong.eventName}"]`);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }

  private buildTabQueue(): QueuedSong[] {
    const queue: QueuedSong[] = [];
    const currentYearsData = allData[this.activeTab];
    const sortedYearsData = Object.entries(currentYearsData).sort(([yearA], [yearB]) => {
      if (yearA === '番外編') return 1;
      if (yearB === '番外編') return -1;
      return parseInt(yearB) - parseInt(yearA);
    });

    for (const [year, events] of sortedYearsData) {
      const sortedEvents = [...events].sort((a, b) => {
        const getSeasonRank = (name: string) => {
          if (name.includes('Winter')) return 4;
          if (name.includes('Autumn')) return 3;
          if (name.includes('Summer')) return 2;
          if (name.includes('Spring')) return 1;
          return 0;
        };
        return getSeasonRank(b.name) - getSeasonRank(a.name);
      });

      for (const ev of sortedEvents) {
        for (const song of ev.songs) {
          queue.push({ ...song, eventName: ev.name });
        }
      }
    }
    return queue;
  }

  private handlePlaySongWithQueue(e: CustomEvent<{ song: Song; eventName: string }>) {
    const fullQueue = this.buildTabQueue();
    this.playerQueue = fullQueue;
    this.playerQueueTab = this.activeTab;
    this.currentSongIndex = fullQueue.findIndex(
      (s) => s.title === e.detail.song.title && s.eventName === e.detail.eventName
    );
    if (this.currentSongIndex === -1) this.currentSongIndex = 0;
    this.currentEventName = e.detail.eventName;

    const player = this.shadowRoot?.querySelector('lit-player') as any;
    if (!this.isMobile && player && typeof player.playSongImmediately === 'function') {
      player.playSongImmediately(this.playerQueue, this.currentSongIndex);
    }
  }

  private scrollToId(e: Event, id: string) {
    e.preventDefault();
    const el = this.shadowRoot?.querySelector('#' + id);
    if (el) {
      const header = this.shadowRoot?.querySelector('.lit-header') as HTMLElement | null;
      const headerHeight = header ? Math.ceil(header.getBoundingClientRect().height) : 128;
      const safeMargin = 24;
      const top = el.getBoundingClientRect().top + window.scrollY - headerHeight - safeMargin;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  }

  private scrollToEvent(e: Event, eventName: string) {
    e.preventDefault();
    const el = this.shadowRoot?.querySelector(`[data-event="${eventName}"]`);
    if (el) {
      const header = this.shadowRoot?.querySelector('.lit-header') as HTMLElement | null;
      const headerHeight = header ? Math.ceil(header.getBoundingClientRect().height) : 128;
      const safeMargin = 24;
      const top = el.getBoundingClientRect().top + window.scrollY - headerHeight - safeMargin;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  }

  private async handleOpenMarkdown(e: CustomEvent<{ url: string }>) {
    const url = e.detail.url;
    const filename = url.split('/').pop() || 'Markdown';
    this.markdownModalTitle = decodeURIComponent(filename.replace(/\.md$/i, ''));
    this.isMarkdownModalOpen = true;
    this.markdownModalContent = '<p>Loading...</p>';

    try {
      // relative URL fetching
      const res = await fetch(url);
      if (!res.ok) throw new Error('Network error');
      const text = await res.text();
      this.markdownModalContent = await marked.parse(text, { breaks: true });
    } catch (err) {
      this.markdownModalContent = '<p style="color:var(--color-red)">Failed to load content.</p>';
    }
  }

  private closeMarkdownModal() {
    this.isMarkdownModalOpen = false;
  }

  private scrollToContentStart() {
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
  }

  connectedCallback() {
    super.connectedCallback();
    this.syncResponsiveMode();
    this.addEventListener(
      'video-position-changed',
      this.handleVideoPositionChanged as EventListener
    );
    window.addEventListener('scroll', this.handleScroll, { passive: true });
    window.addEventListener('resize', this.handleResize);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.removeEventListener(
      'video-position-changed',
      this.handleVideoPositionChanged as EventListener
    );
    window.removeEventListener('scroll', this.handleScroll);
    window.removeEventListener('resize', this.handleResize);
  }

  private handleVideoPositionChanged = (e: CustomEvent<{ top: number }>) => {
    const appRect = this.getBoundingClientRect();
    // e.detail.top is the absolute document Y coordinate.
    // appRect.top + window.scrollY is the absolute document Y coordinate of lit-app.
    const appAbsoluteTop = appRect.top + window.scrollY;
    this.videoOffsetTop = e.detail.top - appAbsoluteTop;
  };

  render() {
    const currentYearsData = allData[this.activeTab];

    const sortedYears = Object.entries(currentYearsData).sort(([yearA], [yearB]) => {
      if (yearA === '番外編') return 1;
      if (yearB === '番外編') return -1;
      return parseInt(yearB) - parseInt(yearA);
    });

    const isScrollDownVisible = this.isAtPageTop;
    const isSideNavVisible = this.introProgress > 0.92;

    const base = import.meta.env.BASE_URL;
    return html`
      <div id="loading" class="${this.isLoaded ? 'loaded' : ''}">
        <p id="loading-message">${this.loadingWord}</p>
        <img src="${base}res/img/loading.svg" alt="Loading" />
      </div>

      <lit-header
        .introProgress=${this.introProgress}
        .activeTab=${this.activeTab}
        .isMobile=${this.isMobile}
        .splashActive=${this.splashActive}
        .isAtPageTop=${this.isAtPageTop}
        .isMVMode=${this.isMVMode}
        @tab-changed=${(e: CustomEvent) => this.setTab(e.detail)}
        @scroll-click=${this.scrollToContentStart}
      ></lit-header>

      <div class="lit-intro-spacer"></div>

      <lit-nav-years
        .years=${sortedYears}
        .isMobile=${this.isMobile}
        .navigationTop=${this.navigationTop}
        .isVisible=${isSideNavVisible}
        @year-click=${(e: CustomEvent) => this.scrollToId(e.detail.event, e.detail.id)}
        @event-click=${(e: CustomEvent) => this.scrollToEvent(e.detail.event, e.detail.name)}
      ></lit-nav-years>

      <main class="lit-main" @open-markdown=${this.handleOpenMarkdown}>
        ${sortedYears.map(([year, events]) => {
          const sortedEvents = [...events].sort((a, b) => {
            const getSeasonRank = (name: string) => {
              if (name.includes('Winter')) return 4;
              if (name.includes('Autumn')) return 3;
              if (name.includes('Summer')) return 2;
              if (name.includes('Spring')) return 1;
              return 0;
            };
            return getSeasonRank(b.name) - getSeasonRank(a.name);
          });

          return html`
            <h2
              id="${createId('year-' + year)}"
              style="text-align:center; font-size: 2rem; margin: 3rem 0 1rem; color: var(--color-blue);"
            >
              ${year}
            </h2>
            ${sortedEvents.map(
              (ev) => html`
                <div data-event="${ev.name}">
                  <lit-event-card
                    .event=${{ ...ev, year }}
                    .playingSongTitle=${this.currentPlayingSong?.title || ''}
                    .playingEventName=${this.currentPlayingSong?.eventName || this.currentEventName}
                    .isMobile=${this.isMobile}
                    @play-song-queue=${this.handlePlaySongWithQueue}
                  ></lit-event-card>
                </div>
              `
            )}
          `;
        })}
      </main>

      ${this.isMarkdownModalOpen
        ? html`
            <div class="lit-modal-overlay" @click=${this.closeMarkdownModal}>
              <div class="lit-modal-content" @click=${(e: Event) => e.stopPropagation()}>
                <div class="lit-modal-header">
                  <h3>${this.markdownModalTitle}</h3>
                  <button class="lit-modal-close" @click=${this.closeMarkdownModal}>&times;</button>
                </div>
                <div class="lit-modal-body" .innerHTML=${this.markdownModalContent}></div>
              </div>
            </div>
          `
        : ''}

      <lit-footer .isMVMode=${this.isMVMode}></lit-footer>

      ${!this.isMobile
        ? html`
            <lit-player
              style="--video-offset-top: ${this.videoOffsetTop}px;"
              .queue=${this.playerQueue}
              .currentIndex=${this.currentSongIndex}
              .eventName=${this.currentEventName}
              @index-changed=${(e: CustomEvent<{ index: number }>) => {
                this.currentSongIndex = e.detail.index;
              }}
              @mv-mode-changed=${(e: CustomEvent<{ active: boolean }>) => {
                this.isMVMode = e.detail.active;
                if (this.isMVMode) {
                  this.classList.add('mv-active');
                } else {
                  this.classList.remove('mv-active');
                }
              }}
            ></lit-player>
          `
        : ''}
    `;
  }
}
