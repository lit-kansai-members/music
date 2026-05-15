import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { EventData, Song } from '../types';
import './lit-song-item';

@customElement('lit-event-card')
export class LitEventCard extends LitElement {
  @property({ type: Object }) event!: EventData;
  @property({ type: String }) playingSongTitle = '';
  @property({ type: String }) playingEventName = '';
  @property({ type: Boolean }) isMobile = false;

  static styles = css`
    :host {
      display: block;
      margin-bottom: 3rem;
    }

    .lit-event-card {
      background: var(--color-surface);
      border-radius: var(--radius-md);
      box-shadow: var(--shadow-md);
      overflow: hidden;
    }

    .lit-event-card__header {
      aspect-ratio: 16 / 9;
      background-size: cover;
      background-position: center;
      position: relative;
      color: white;
      text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      padding: 2rem;
      width: 100%;
      box-sizing: border-box;
    }

    .lit-event-card__header::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.3);
      z-index: 1;
    }

    .lit-event-card__title-wrap {
      position: relative;
      z-index: 2;
      border-left: 4px solid white;
      padding-left: 1rem;
      margin-left: 1rem;
    }

    .lit-event-card__year {
      font-size: 1.2rem;
      font-weight: bold;
      color: var(--color-yellow);
      margin: 0;
    }

    .lit-event-card__title {
      font-size: 2rem;
      margin: 0;
      font-weight: 900;
    }

    .lit-event-card__theme {
      font-size: 1rem;
      font-style: italic;
      margin-top: 0.5rem;
      opacity: 0.9;
    }

    .lit-event-card__body {
      padding: 1.5rem;
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    @media (max-width: 768px) {
      .lit-event-card__title {
        font-size: 1.5rem; /* Reduced from 2rem for mobile */
      }
      .lit-event-card__theme {
        font-size: 0.85rem;
      }
      .lit-event-card__year {
        font-size: 1rem;
      }
      .lit-event-card__header {
        padding: 1.5rem 0;
      }
    }
    @media (max-width: 768px) {
      lit-song-item {
        display: block;
        padding: 0; /* let inner component control its vertical spacing */
      }
      lit-song-item:not(:last-child) {
        border-bottom: 1px solid var(--color-border);
      }
    }
  `;

  render() {
    // Determine background URL
    const base = import.meta.env.BASE_URL;
    let bgUrl = '';
    if (this.event.background) {
      bgUrl = this.event.background.replace('../../res/', `${base}res/`);
    } else {
      const isBefore2024 = (this.event as any).isBefore2024 === true;
      bgUrl = isBefore2024
        ? `${base}res/img/backgrounds/common_v1.webp`
        : `${base}res/img/backgrounds/common_v2.webp`;
    }

    return html`
      <article class="lit-event-card">
        <header
          class="lit-event-card__header"
          style=${bgUrl ? `background-image: url('${bgUrl}')` : ''}
        >
          <div class="lit-event-card__title-wrap">
            <h3 class="lit-event-card__year">${this.event.year}</h3>
            <h2 class="lit-event-card__title">${this.event.name}</h2>
            ${this.event.theme
              ? html`<p class="lit-event-card__theme">${this.event.theme}</p>`
              : ''}
          </div>
        </header>
        <div class="lit-event-card__body">
          ${this.event.songs.map(
            (song) => html`
              <lit-song-item
                .song=${song}
                .isMobile=${this.isMobile}
                ?mobile=${this.isMobile}
                ?is-playing=${this.playingSongTitle === song.title &&
                this.playingEventName === this.event.name}
                @play-song=${(e: CustomEvent) => this.handlePlaySongInEvent(e, song)}
              >
              </lit-song-item>
            `
          )}
        </div>
      </article>
    `;
  }

  private handlePlaySongInEvent(e: CustomEvent, targetSong: Song) {
    e.stopPropagation(); // Stop the original event
    this.dispatchEvent(
      new CustomEvent('play-song-queue', {
        detail: {
          song: targetSong,
          queue: this.event.songs,
          eventName: this.event.name,
        },
        bubbles: true,
        composed: true,
      })
    );
  }
}
