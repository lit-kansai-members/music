import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('lit-header')
export class LitHeader extends LitElement {
  @property({ type: Number })
  introProgress = 0;

  @property({ type: String })
  activeTab = 'camp';

  @property({ type: Boolean, reflect: true, attribute: 'mobile' })
  isMobile = false;

  @property({ type: Boolean })
  splashActive = true;

  @property({ type: Boolean })
  isAtPageTop = true;

  @property({ type: Boolean })
  isMVMode = false;

  static styles = css`
    :host {
      display: block;
    }

    .lit-header {
      background: var(--color-surface);
      box-shadow: var(--shadow-sm);
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 100;
      height: calc((1 - var(--intro-progress, 0)) * 100vh + var(--intro-progress, 0) * 128px);
      transition:
        box-shadow var(--transition-fast),
        width 0.3s ease,
        padding-right 0.3s ease;
      overflow: hidden;
    }

    .lit-header.mv-active {
      width: 50%;
      padding-right: 1rem;
      box-sizing: border-box;
    }

    @media (max-width: 768px) {
      .lit-header.mv-active {
        width: 100%;
        padding-right: 0;
      }
    }

    :host([mobile]) .lit-header__inner {
      justify-content: center;
      padding-top: 0;
    }

    .lit-header__inner {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      position: relative;
      overflow: hidden;
    }

    .lit-header__logos {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0;
      padding: 0;
      height: 56px;
      max-width: 90vw;
      transform: scale(calc(1 - (var(--intro-progress, 0) * 0.28)));
      transform-origin: center;
      margin-bottom: calc(
        (1 - var(--intro-progress, 0)) * 1.5rem + var(--intro-progress, 0) * 0.35rem
      );
    }

    .lit-header__logos img {
      height: 100%;
    }

    .lit-header__logos #logo,
    .lit-header__logos #music {
      transition:
        opacity 1s cubic-bezier(0.2, 0.8, 0.2, 1),
        transform 1s cubic-bezier(0.2, 0.8, 0.2, 1);
      opacity: 1;
      transform: translateX(0);
    }

    .lit-header__logos.splash-active #logo {
      opacity: 0;
      transform: translateX(-20px);
    }

    .lit-header__logos.splash-active #music {
      opacity: 0;
      transform: translateX(20px);
    }

    .lit-scroll-down {
      position: absolute;
      bottom: 150px;
      left: 50%;
      transform: translateX(-50%);
      border: none;
      background: transparent;
      color: var(--color-text-secondary);
      padding: 0.2rem 0.4rem;
      display: inline-flex;
      flex-direction: column;
      align-items: center;
      gap: 0.1rem;
      cursor: pointer;
      font-size: 0.72rem;
      font-weight: 500;
      letter-spacing: 0.03em;
      line-height: 1;
      transition:
        opacity var(--transition-fast),
        transform var(--transition-fast);
      opacity: 0.62;
    }

    .lit-scroll-down:hover {
      transform: translateX(-50%) translateY(-1px);
      opacity: calc((1 - var(--intro-progress, 0)) * 0.82);
    }

    .lit-scroll-down__chevron {
      display: inline-flex;
      flex-direction: column;
      align-items: center;
      gap: 1px;
      margin-top: 1px;
    }

    .lit-scroll-down__chevron-line {
      width: 6px;
      height: 6px;
      border-right: 1px solid currentColor;
      border-bottom: 1px solid currentColor;
      transform: rotate(45deg);
    }

    .lit-scroll-down--hidden {
      opacity: 0;
      pointer-events: none;
      transform: translateX(-50%);
    }

    .lit-tabs {
      display: flex;
      gap: 8px;
      background: #f1f5f9;
      padding: 4px;
      border-radius: var(--radius-full);
    }

    .lit-tabs__button {
      border: none;
      background: transparent;
      padding: 8px 24px;
      font-size: 1rem;
      font-weight: bold;
      color: var(--color-text-secondary);
      border-radius: var(--radius-full);
      cursor: pointer;
      transition: var(--transition-fast);
    }

    .lit-tabs__button--active {
      background: var(--color-surface);
      color: var(--color-blue);
      box-shadow: var(--shadow-sm);
    }

    .lit-tabs__button:hover:not(.lit-tabs__button--active) {
      color: var(--color-text-primary);
    }

    @media (max-width: 768px) {
      :host([mobile]) .lit-header__logos {
        height: 56px;
        max-width: 84vw;
        transform: scale(0.72);
        margin-bottom: 0.35rem;
      }

      :host([mobile]) .lit-header__logos img {
        height: 100%;
      }

      :host([mobile]) .lit-header__logos.splash-active #mark,
      :host([mobile]) .lit-header__logos.splash-active #logo,
      :host([mobile]) .lit-header__logos.splash-active #music {
        /* Allow default splash animation (opacity and translateX) to work on mobile */
      }

      :host([mobile]) .lit-scroll-down {
        position: relative;
        bottom: auto;
        left: auto;
        transform: none;
        margin-top: 2.5rem;
        display: inline-flex;
      }

      :host([mobile]) .lit-scroll-down--hidden {
        display: none;
      }
    }
  `;

  render() {
    const base = import.meta.env.BASE_URL;
    const isScrollDownVisible = this.isAtPageTop;

    return html`
      <header
        class="lit-header ${this.isMVMode ? 'mv-active' : ''}"
        style="--intro-progress: ${this.introProgress};"
      >
        <div class="lit-header__inner">
          <div class="lit-header__logos ${this.splashActive ? 'splash-active' : ''}">
            <img src="${base}res/img/mark.svg" alt="Mark" id="mark" />
            <img src="${base}res/img/logo.svg" alt="Life is Tech!" id="logo" />
            <img src="${base}res/img/music.svg" alt="music" id="music" />
          </div>

          <div class="lit-tabs">
            <button
              class="lit-tabs__button ${this.activeTab === 'camp'
                ? 'lit-tabs__button--active'
                : ''}"
              @click=${() => this.dispatchEvent(new CustomEvent('tab-changed', { detail: 'camp' }))}
            >
              Camp
            </button>
            <button
              class="lit-tabs__button ${this.activeTab === 'school'
                ? 'lit-tabs__button--active'
                : ''}"
              @click=${() =>
                this.dispatchEvent(new CustomEvent('tab-changed', { detail: 'school' }))}
            >
              School
            </button>
            <button
              class="lit-tabs__button ${this.activeTab === 'event'
                ? 'lit-tabs__button--active'
                : ''}"
              @click=${() =>
                this.dispatchEvent(new CustomEvent('tab-changed', { detail: 'event' }))}
            >
              Event
            </button>
          </div>

          <button
            class="lit-scroll-down ${isScrollDownVisible ? '' : 'lit-scroll-down--hidden'}"
            @click=${() => this.dispatchEvent(new CustomEvent('scroll-click'))}
            aria-label="Scroll down"
          >
            <span>Scroll Down</span>
            <span class="lit-scroll-down__chevron" aria-hidden="true">
              <span class="lit-scroll-down__chevron-line"></span>
              <span class="lit-scroll-down__chevron-line"></span>
            </span>
          </button>
        </div>
      </header>
    `;
  }
}
