import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { RootData, EventData, Song } from '../types';
import { marked } from 'marked';
import { spotifyIcon, playIcon } from '../styles/icons';

@customElement('lit-song-item')
export class LitSongItem extends LitElement {
  @property({ type: Object }) song!: Song;
  @property({ type: Boolean, attribute: 'is-playing' }) isPlaying = false;
  @property({ type: Boolean }) isMobile = false;

  static styles = css`
    :host {
      display: block;
      position: relative;
      transition: margin-bottom 0.3s ease;
    }

    .lit-song {
      display: flex;
      flex-direction: column;
      padding: 1rem;
      border: 1px solid var(--color-border);
      border-radius: var(--radius-sm);
      transition: var(--transition-fast);
      background: #fafafa;
      position: relative;
    }

    .lit-song--playable {
      cursor: pointer;
    }

    .lit-song:hover {
      background: var(--color-surface);
      box-shadow: var(--shadow-sm);
      border-color: var(--color-blue);
    }

    .lit-song__header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 0.5rem;
    }

    .lit-song__title-wrap {
      display: flex;
      align-items: baseline;
      gap: 0.8rem;
    }

    .lit-song__title-row {
      display: inline-flex;
      align-items: center;
      gap: 0.35rem;
      min-width: 0;
    }

    .lit-song__title {
      font-size: 1.25rem;
      font-weight: bold;
      margin: 0;
      color: var(--color-text-primary);
    }

    .lit-song__author {
      font-size: 0.9rem;
      color: var(--color-text-secondary);
      margin: 0;
    }

    .lit-song__actions {
      display: flex;
      gap: 8px;
    }

    .lit-btn-action {
      background: none;
      border: none;
      font-size: 1.5rem;
      cursor: pointer;
      color: var(--color-text-secondary);
      transition: var(--transition-fast);
    }

    .lit-btn-action:hover {
      transform: scale(1.1);
    }

    .lit-btn-action--play:hover {
      color: var(--color-red);
    }

    /* No mobile-specific play-button overrides — use base .lit-btn-action styles */

    .lit-btn-action--spotify {
      color: #1ed760;
      text-decoration: none;
      display: inline-flex;
      align-items: center;
    }

    .lit-btn-action--spotify:hover {
      color: #1fdf64;
    }

    .lit-song__desc {
      font-size: 0.85rem;
      color: var(--color-text-secondary);
    }

    .lit-song__desc p {
      margin: 0.2rem 0;
    }

    .lit-song__desc a {
      color: var(--color-blue);
      text-decoration: none;
    }

    .lit-song__desc a:hover {
      text-decoration: underline;
    }

    .lit-song__embed {
      margin-top: 1rem;
      width: 100%;
      aspect-ratio: 16 / 9;
      overflow: hidden;
      border-radius: var(--radius-sm);
      background: #000;
    }

    .lit-song__embed iframe {
      display: block;
      width: 100%;
      height: 100%;
      border: 0;
    }

    @media (max-width: 768px) {
      .lit-song__title {
        font-size: 1.1rem; /* Reduced from 1.25rem */
      }
      .lit-song__author {
        font-size: 0.85rem;
      }
      .lit-song__title-wrap {
        flex-direction: column;
        gap: 0.25rem;
        align-items: flex-start;
      }
      .lit-song__title-row {
        width: 100%;
      }
    }
    :host([mobile]) .lit-song {
      border: none;
      background: transparent;
      border-radius: 0;
      padding: 0.75rem 0;
      box-shadow: none;
    }

    :host([mobile]) .lit-song:hover {
      background: transparent;
      box-shadow: none;
      border-color: var(--color-border);
    }

    /* Mobile: enclose play button in a circular border */
    :host([mobile]) .lit-btn-action--play {
      border-radius: 50%;
      border: 1px solid var(--color-text-secondary);
      width: 40px;
      height: 40px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      padding: 0;
      background: transparent;
      color: var(--color-text-secondary);
    }
  `;

  private handlePlay() {
    this.dispatchEvent(
      new CustomEvent('play-song', {
        detail: { song: this.song },
        bubbles: true,
        composed: true,
      })
    );
  }

  private handleLinkClick(e: MouseEvent) {
    const target = e.target as HTMLElement;
    const anchor = target.closest('a');
    if (anchor) {
      e.stopPropagation();
      const href = anchor.getAttribute('href');
      if (href && href.toLowerCase().endsWith('.md')) {
        e.preventDefault();
        this.dispatchEvent(
          new CustomEvent('open-markdown', {
            detail: { url: href },
            bubbles: true,
            composed: true,
          })
        );
      }
    }
  }

  connectedCallback() {
    super.connectedCallback();
    window.addEventListener('resize', this.handleResize);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    window.removeEventListener('resize', this.handleResize);
  }

  private handleResize = () => {
    if (this.isPlaying) {
      this.reportPlaceholderPosition();
    }
  };

  updated(changedProperties: Map<string, any>) {
    if (changedProperties.has('isPlaying')) {
      if (this.isPlaying) {
        // Wait for placeholder to render
        setTimeout(() => this.reportPlaceholderPosition(), 50);
      }
    }
  }

  private reportPlaceholderPosition() {
    const ph = this.shadowRoot?.getElementById('video-placeholder');
    if (ph) {
      const rect = ph.getBoundingClientRect();
      const top = rect.top + window.scrollY; // Absolute document position
      this.dispatchEvent(
        new CustomEvent('video-position-changed', {
          detail: { top },
          bubbles: true,
          composed: true,
        })
      );
    }
  }

  render() {
    const description = this.song.description || '';
    const ytMatch = this.song.youtubeUrl?.match(
      /(?:\/\/|https?:\/\/)?(?:www\.)?(?:youtube\.com\/watch\?v=|youtu\.be\/)([\w-]{11})/
    );
    const youtubeId = ytMatch ? ytMatch[1] : null;
    const showInlinePlayer = this.isMobile && this.isPlaying && youtubeId;
    const embedUrl = youtubeId
      ? `https://www.youtube.com/embed/${youtubeId}?autoplay=1&playsinline=1&rel=0&modestbranding=1`
      : '';

    return html`
      <div
        class="lit-song ${youtubeId ? 'lit-song--playable' : ''}"
        @click=${youtubeId && !this.isMobile ? this.handlePlay : null}
      >
        <div class="lit-song__header">
          <div class="lit-song__title-wrap">
            ${this.isMobile
              ? html`
                  <div class="lit-song__title-row">
                    <h4 class="lit-song__title">${this.song.title}</h4>
                    ${this.song.spotify
                      ? html`
                          <a
                            href="${this.song.spotify}"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="lit-btn-action lit-btn-action--spotify"
                            title="Play on Spotify"
                            @click=${(e: Event) => e.stopPropagation()}
                          >
                            ${spotifyIcon}
                          </a>
                        `
                      : ''}
                  </div>
                `
              : html`
                  <h4 class="lit-song__title">${this.song.title}</h4>
                  ${this.song.spotify
                    ? html`
                        <a
                          href="${this.song.spotify}"
                          target="_blank"
                          rel="noopener noreferrer"
                          class="lit-btn-action lit-btn-action--spotify"
                          title="Play on Spotify"
                          @click=${(e: Event) => e.stopPropagation()}
                        >
                          ${spotifyIcon}
                        </a>
                      `
                    : ''}
                `}
            <span class="lit-song__author">${this.song.author}</span>
          </div>
          <div class="lit-song__actions">
            ${youtubeId && !showInlinePlayer
              ? html`
                  <button
                    class="lit-btn-action lit-btn-action--play"
                    title="Play on YouTube"
                    @click=${(e: Event) => {
                      e.stopPropagation();
                      this.handlePlay();
                    }}
                  >
                    ${playIcon}
                  </button>
                `
              : ''}
          </div>
        </div>
        <div class="lit-song__desc" @click=${this.handleLinkClick}>
          ${description
            ? html`<div .innerHTML=${marked.parse(description, { breaks: true })}></div>`
            : ''}
          <div
            style="display: flex; gap: 1rem; flex-wrap: wrap; margin-top: 0.5rem; font-size: 0.8rem; color: var(--color-text-secondary);"
          >
            <div>
              [DAM]
              ${this.song.damNumber
                ? this.song.damUrl
                  ? html`<a href="${this.song.damUrl}" target="_blank" rel="noopener"
                      >${this.song.damNumber}</a
                    >`
                  : this.song.damNumber
                : '404 NotFound'}
              [JOYSOUND]
              ${this.song.joyNumber
                ? this.song.joyUrl
                  ? html`<a href="${this.song.joyUrl}" target="_blank" rel="noopener"
                      >${this.song.joyNumber}</a
                    >`
                  : this.song.joyNumber
                : '404 NotFound'}
            </div>
            ${this.song.lyricsUrl
              ? html`
                  <div>
                    [歌詞]
                    <a href="${this.song.lyricsUrl}" target="_blank" rel="noopener"
                      >${this.song.lyricsSiteName || '歌詞サイト'}</a
                    >
                  </div>
                `
              : ''}
            ${this.song.youtubeUrl && !youtubeId
              ? html`
                  <div>
                    [動画]
                    <a href="${this.song.youtubeUrl}" target="_blank" rel="noopener">YouTube</a>
                  </div>
                `
              : ''}
          </div>
        </div>
        ${showInlinePlayer
          ? html`
              <div class="lit-song__embed">
                <iframe
                  src="${embedUrl}"
                  title="${this.song.title}"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </div>
            `
          : ''}
      </div>
    `;
  }
}
