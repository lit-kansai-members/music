import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { starIcon, arrowUpIcon } from '../styles/icons';

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

@customElement('lit-nav-years')
export class LitNavYears extends LitElement {
  @property({ type: Array })
  years: [string, any[]][] = [];

  @property({ type: Boolean })
  isMobile = false;

  @property({ type: Number })
  navigationTop = 0;

  @property({ type: Boolean })
  isVisible = false;

  static styles = css`
    #navigations {
      position: fixed;
      display: flex;
      align-items: flex-end;
      flex-direction: column;
      top: 50%;
      transform: translateY(-50%);
      right: 1em;
      z-index: 110;
      padding: 0;
      margin: 0;
      list-style: none;
      font-size: 0.8em;
      transition: opacity 0.3s ease;
    }

    .nav-year {
      cursor: pointer;
      position: relative;
      margin: 0.5em 0;
      display: grid;
      grid-template-columns: min-content;
      grid-template-rows: 2em;
      z-index: 1;
    }

    .nav-year:hover {
      z-index: 10;
    }

    .nav-year > a.year-main-link {
      grid-column: 1;
      grid-row: 1;
      background: var(--theme-color);
      border: solid 2px var(--theme-color);
      color: #fff;
      border-radius: 2em;
      text-decoration: none;
      display: flex;
      align-items: center;
      height: 2em;
      min-width: 2em;
      box-sizing: border-box;
      transition:
        background 0.4s,
        color 0.4s,
        border-radius 0.4s ease;
      position: relative;
      z-index: 2;
    }

    .nav-year > a.year-main-link .label {
      display: none;
      padding: 0.5em;
      flex: 1;
      text-align: left;
      font-weight: bold;
    }

    .nav-year > a.year-main-link .short-label {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      font-weight: bold;
    }

    .nav-year:hover > a.year-main-link {
      background: #fff;
      color: var(--theme-color);
      border-radius: 2em 2em 2em 0;
    }

    .nav-year.no-panel:hover > a.year-main-link {
      border-radius: 2em;
    }

    .nav-year:hover > a.year-main-link .label {
      display: block;
    }

    .nav-year:hover > a.year-main-link .short-label {
      display: none;
    }

    .nav-year .sub-nav-panel {
      grid-column: 1;
      grid-row: 1;
      align-self: start;
      justify-self: stretch;
      display: flex;
      flex-direction: column;
      overflow: hidden;
      max-width: 0;
      max-height: 0;
      opacity: 0;
      background: var(--theme-color);
      border-radius: 0 0 0.5em 0.5em;
      margin-right: 2em;
      margin-top: calc(2em - 2px);
      transition:
        max-width 0.4s ease,
        max-height 0.4s ease,
        opacity 0.3s ease,
        margin-right 0.4s ease;
      white-space: nowrap;
      z-index: 1;
    }

    .nav-year:hover .sub-nav-panel {
      max-width: 500px;
      max-height: 500px;
      opacity: 1;
      margin-right: 2.8em;
    }

    .nav-year .sub-nav-panel a {
      color: #fff;
      text-decoration: none;
      font-size: 0.85em;
      font-weight: 500;
      padding: 0.4em 1em;
      transition: background 0.2s;
      border-bottom: 1px solid rgba(255, 255, 255, 0.4);
      text-align: left;
    }

    .nav-year .sub-nav-panel a:last-child {
      border-bottom: none;
    }

    .nav-year .sub-nav-panel a:hover {
      background: rgba(255, 255, 255, 0.2);
    }
  `;

  render() {
    if (this.isMobile) return html``;

    return html`
      <ul
        id="navigations"
        style="${this.navigationTop ? `--nav-top: ${this.navigationTop}px;` : ''} opacity: ${this
          .isVisible
          ? 1
          : 0}; pointer-events: ${this.isVisible ? 'auto' : 'none'};"
      >
        <li class="nav-year no-panel" style="--theme-color: #333;">
          <a
            class="year-main-link"
            href="#"
            @click=${(e: Event) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <span class="label">TOP</span>
            <span class="short-label">${arrowUpIcon}</span>
          </a>
        </li>
        ${this.years.map(([year, _events], index) => {
          const color = COLORS[index % COLORS.length];
          const sortedEvents = [..._events].sort((a, b) => {
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
            <li class="nav-year" style="--theme-color: ${color};">
              <a
                class="year-main-link"
                href="#"
                @click=${(e: Event) => {
                  this.dispatchEvent(
                    new CustomEvent('year-click', {
                      detail: { event: e, id: createId('year-' + year) },
                    })
                  );
                }}
              >
                <span class="label">${year}</span>
                <span class="short-label">${isNaN(Number(year)) ? starIcon : year.slice(-2)}</span>
              </a>
              <div class="sub-nav-panel">
                ${sortedEvents.map(
                  (ev) => html`
                    <a
                      href="#"
                      @click=${(e: Event) => {
                        e.preventDefault();
                        e.stopPropagation();
                        this.dispatchEvent(
                          new CustomEvent('event-click', { detail: { event: e, name: ev.name } })
                        );
                      }}
                    >
                      ${ev.name}
                    </a>
                  `
                )}
              </div>
            </li>
          `;
        })}
        <li class="nav-year no-panel" style="--theme-color: #333;">
          <a
            class="year-main-link"
            href="#"
            @click=${(e: Event) => {
              e.preventDefault();
              window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
            }}
          >
            <span class="label">Thanks!</span>
            <span class="short-label">!</span>
          </a>
        </li>
      </ul>
    `;
  }
}
