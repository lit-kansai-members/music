import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('lit-footer')
export class LitFooter extends LitElement {
  @property({ type: Boolean })
  isMVMode = false;

  static styles = css`
    :host {
      display: block;
    }

    .lit-footer {
      background: #f1f5f9;
      padding: 3rem 1rem;
      text-align: center;
      margin-top: 4rem;
      border-top: 1px solid #e2e8f0;
      color: var(--color-text-secondary);
      width: 100%;
      box-sizing: border-box;
      transition:
        width 0.3s ease,
        padding-right 0.3s ease;
    }

    .lit-footer.mv-active {
      width: 50%;
      padding-right: 1rem;
    }

    @media (max-width: 768px) {
      .lit-footer.mv-active {
        width: 100%;
        padding-right: 1rem;
      }
    }

    .lit-footer__inner {
      max-width: 800px;
      margin: 0 auto;
    }

    #thanks {
      font-size: 2rem;
      font-weight: 800;
      margin-bottom: 2rem;
      text-transform: uppercase;
      letter-spacing: 0;
    }

    .copyright {
      font-size: 0.8rem;
      margin-top: 2rem;
    }

    .colorful {
      display: inline-block;
      transition: transform 0.3s;
    }

    .colorful:hover {
      transform: translateY(-5px);
    }

    .colorful:nth-child(6n + 1) {
      color: var(--color-red);
    }
    .colorful:nth-child(6n + 2) {
      color: var(--color-yellow);
    }
    .colorful:nth-child(6n + 3) {
      color: var(--color-green);
    }
    .colorful:nth-child(6n + 4) {
      color: var(--color-blue);
    }
    .colorful:nth-child(6n + 5) {
      color: var(--color-orange);
    }
    .colorful:nth-child(6n + 0) {
      color: var(--color-purple);
    }

    .icon-gh {
      height: 1.2em;
      vertical-align: middle;
    }

    .lit-footer a {
      color: var(--color-blue);
      text-decoration: none;
      font-weight: bold;
    }

    .lit-footer a:hover {
      text-decoration: underline;
    }
  `;

  render() {
    const base = import.meta.env.BASE_URL;
    return html`
      <footer class="lit-footer ${this.isMVMode ? 'mv-active' : ''}">
        <div class="lit-footer__inner">
          <p id="thanks">
            ${Array.from('Thanks for visiting!').map(
              (char) => html`
                <span class="colorful" style="${char === ' ' ? 'margin-right:0.5em;' : ''}"
                  >${char}</span
                >
              `
            )}
          </p>
          <p>
            Do you have any information?<br />
            Please tell us on
            <a
              href="https://www.facebook.com/LiTmusic-182225395894104"
              target="_blank"
              rel="noopener"
              >Facebook</a
            >,<br />
            or<br />
            You can check it on
            <a href="https://github.com/lit-kansai-members/music" target="_blank" rel="noopener">
              <img src="${base}res/img/github-mark.svg" alt="GitHub" class="icon-gh" /> GitHub </a
            >.<br />
            <br />
            <a href="${base}post/">曲の掲載をリクエストする</a><br />
            <span style="color: var(--color-gray)">(Githubアカウントが必要です)</span><br />
            <br />
            <small>This project is unofficial.</small>
          </p>
          <p class="copyright">&copy; Life is Tech ! Kansai Members</p>
        </div>
      </footer>
    `;
  }
}
