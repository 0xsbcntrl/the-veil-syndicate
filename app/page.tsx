'use client';

import { useState, type ReactNode } from 'react';
import Image from 'next/image';
import chromeStyles from './_chrome.module.css';
import heroStyles from './_hero.module.css';
import tickerStyles from './_ticker.module.css';
import mechStyles from './_mechanism.module.css';
import cipherStyles from './_ciphers.module.css';
import vaultStyles from './_vault.module.css';
import charterStyles from './_charter.module.css';
import signalStyles from './_signal.module.css';
import copyButtonStyles from './_copy-button.module.css';
import {
  ArrowDownRight,
  ArrowUpRight,
  Check,
  Copy,
  Menu,
  MoveUpRight,
  Shield,
  X,
} from 'lucide-react';

function TokenSymbol() {
  return <span className="token-symbol">$VSYNC</span>;
}

const levels = [
  {
    label: 'Cipher',
    amount: '1×',
    cost: (
      <>
        50,000 <TokenSymbol />
      </>
    ),
    cap: 'Open',
  },
  {
    label: 'Nullifier',
    amount: '2×',
    cost: 'TBD',
    cap: '210 Ciphers',
  },
  {
    label: 'Shadow',
    amount: '3×',
    cost: 'TBD',
    cap: '105 Ciphers',
  },
  {
    label: 'Syndicate',
    amount: '5×',
    cost: 'TBD',
    cap: '21 Ciphers',
  },
  {
    label: 'Sovereign',
    amount: '10×',
    cost: 'TBD',
    cap: 'TBD',
  },
];

const articles: [string, string, ReactNode][] = [
  [
    'I',
    'The Cipher',
    'A Cipher is born sealed. It is a numbered claim, not a payment promise.',
  ],
  [
    'II',
    'The Veil',
    <>
      Burn <TokenSymbol /> to activate a Cipher. Activation writes its rank and
      opens its share.
    </>,
  ],
  [
    'III',
    'The Press',
    'Fees received by the protocol are converted into the reserve asset on a published cadence.',
  ],
  [
    'IV',
    'The Cage',
    'Each active Cipher keeps an accounting of its share and its locked reserve.',
  ],
  [
    'V',
    'The Window',
    'Burn a Cipher to close its position and redeem the ZEC representation held for it.',
  ],
  [
    'VI',
    'The Boundary',
    'Contracts, audits, reserve mechanics, and legal terms publish before issue.',
  ],
];

function CopyButton() {
  const [copied, setCopied] = useState(false);
  return (
    <button
      className={copyButtonStyles.copyButton}
      type="button"
      onClick={() => {
        void navigator.clipboard?.writeText('0x0000…c0de');
        setCopied(true);
        window.setTimeout(() => setCopied(false), 1600);
      }}
      aria-label="Copy token contract placeholder"
    >
      {copied ? <Check size={13} /> : <Copy size={13} />}
      {copied ? 'Copied' : 'Copy'}
    </button>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="site-shell">
      <div className="grain" aria-hidden="true" />
      <header className={chromeStyles.siteHeader}>
        <a
          className={chromeStyles.wordmark}
          href="#top"
          aria-label="The Veil Syndicate home"
        >
          <span className={chromeStyles.wordmarkMark}>V</span>
          <span>
            The Veil
            <br />
            <em>Syndicate</em>
          </span>
        </a>
        <nav
          className={
            menuOpen
              ? `${chromeStyles.navLinks} ${chromeStyles.navOpen}`
              : chromeStyles.navLinks
          }
          aria-label="Main navigation"
        >
          <a href="#mechanism" onClick={() => setMenuOpen(false)}>
            Mechanism
          </a>
          <a href="#ciphers" onClick={() => setMenuOpen(false)}>
            Ciphers
          </a>
          <a href="#charter" onClick={() => setMenuOpen(false)}>
            Charter
          </a>
          <a href="#vault" onClick={() => setMenuOpen(false)}>
            Vault
          </a>
        </nav>
        <div className={chromeStyles.headerActions}>
          <span className={chromeStyles.chainTag}>
            <span className="status-dot" /> RH CHAIN / 4663
          </span>
          <a className="button button-small" href="#ciphers">
            Enter the vault <MoveUpRight size={13} />
          </a>
          <button
            className={chromeStyles.menuButton}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      <section className={heroStyles.hero} id="top">
        <div className={heroStyles.heroCopy}>
          <p className={heroStyles.eyebrow}>
            <span className={heroStyles.eyebrowRule} /> A private reserve for a public
            chain <span className={heroStyles.eyebrowRule} />
          </p>
          <h1 className={heroStyles.heroTitle}>
            The asset
            <br />
            <span>behind the veil.</span>
          </h1>
          <p className={heroStyles.heroLede}>
            The Veil Syndicate is a proposed collection of activated Ciphers on
            Robinhood Chain. Fees become ZEC reserves. Ciphers keep the record.
          </p>
          <div className={heroStyles.heroCtas}>
            <a className="button button-primary" href="#mechanism">
              Read the mechanism <ArrowDownRight size={15} />
            </a>
            <a className={heroStyles.textLink} href="#charter">
              Read the charter <ArrowDownRight size={14} />
            </a>
          </div>
          <div className={heroStyles.heroFootnote}>
            <span className="seal">ⓩ</span> ZEC is a privacy-protecting asset.
            The protocol cannot make a public EVM transaction private.
          </div>
        </div>
        <figure className={heroStyles.heroArtWrap}>
          <div className={`${heroStyles.artOrbit} ${heroStyles.orbitOne}`} />
          <div className={`${heroStyles.artOrbit} ${heroStyles.orbitTwo}`} />
          <div className={heroStyles.heroArt}>
            <Image
              src="/veil-vault.png"
              alt="Pixel-art vault aperture covered by a violet veil with an amber cryptographic core"
              width={560}
              height={560}
              unoptimized
              priority
            />
          </div>
          <figcaption className={heroStyles.artCaption}>
            A reserve behind the veil.
          </figcaption>
        </figure>
      </section>

      <section
        className={tickerStyles.ticker}
        aria-label="Protocol status"
      >
        <div className={tickerStyles.cell}>
          <span className={tickerStyles.label}>NETWORK</span>
          <strong className={tickerStyles.value}>Robinhood Chain</strong>
        </div>
        <div className={tickerStyles.cell}>
          <span className={tickerStyles.label}>CHAIN ID</span>
          <strong className={tickerStyles.value}>4663</strong>
        </div>
        <div className={tickerStyles.cell}>
          <span className={tickerStyles.label}>CIPHERS</span>
          <strong className={tickerStyles.value}>
            2,100 <small className={tickerStyles.unit}>total</small>
          </strong>
        </div>
        <div className={tickerStyles.cell}>
          <span className={tickerStyles.label}>RESERVE ASSET</span>
          <strong className={tickerStyles.value}>$ZEC</strong>
        </div>
        <div className={tickerStyles.cell}>
          <span className={tickerStyles.label}>STATUS</span>
          <strong className={tickerStyles.statusLive}>
            <span className="status-dot" /> Forging the vault
          </strong>
        </div>
      </section>

      <section className="intro section-pad" id="mechanism">
        <div className="section-kicker">THE MACHINE</div>
        <div className={mechStyles.introGrid}>
          <h2 className={mechStyles.introHeading}>
            What happens
            <br />
            <em>under the cloth.</em>
          </h2>
          <div className={mechStyles.introText}>
            <p>
              One token unlocks the room. One Cipher records your place in it.
              Only an activated Cipher can share in the ZEC reserve.
            </p>
            <p>
              <TokenSymbol /> is the access key, not the prize. You burn it to
              light a Cipher and climb its rank. The money that feeds the
              reserve comes from the protocol’s trading activity.
            </p>
          </div>
        </div>
        <div className={mechStyles.flow}>
          <div className={mechStyles.flowStep}>
            <span className={mechStyles.flowStepNumber}>01</span>
            <h3 className={mechStyles.flowStepTitle}>Acquire</h3>
            <p className={mechStyles.flowStepDescription}>
              <TokenSymbol /> is the utility token of the Syndicate.
            </p>
          </div>
          <ArrowUpRight className={mechStyles.flowArrow} />
          <div
            className={`${mechStyles.flowStep} ${mechStyles.flowStepActive}`}
          >
            <span className={mechStyles.flowStepNumber}>02</span>
            <h3 className={mechStyles.flowStepTitle}>Activate</h3>
            <p className={mechStyles.flowStepDescription}>
              Burn <TokenSymbol />. Your Cipher becomes active after the waiting
              period.
            </p>
          </div>
          <ArrowUpRight className={mechStyles.flowArrow} />
          <div className={mechStyles.flowStep}>
            <span className={mechStyles.flowStepNumber}>03</span>
            <h3 className={mechStyles.flowStepTitle}>Accumulate</h3>
            <p className={mechStyles.flowStepDescription}>
              Active Ciphers receive their share of reserve purchases.
            </p>
          </div>
          <ArrowUpRight className={mechStyles.flowArrow} />
          <div className={mechStyles.flowStep}>
            <span className={mechStyles.flowStepNumber}>04</span>
            <h3 className={mechStyles.flowStepTitle}>Redeem</h3>
            <p className={mechStyles.flowStepDescription}>
              Burn the Cipher to close the position and open its window.
            </p>
          </div>
        </div>
      </section>

      <section
        className={`${cipherStyles.darkBand} section-pad`}
        id="ciphers"
      >
        <div className="section-kicker light">THE CIPHERS</div>
        <div className={cipherStyles.darkHeading}>
          <h2>
            Rank is weight.
            <br />
            <em>Weight is memory.</em>
          </h2>
          <p>
            A Cipher doesn’t promise a fixed yield. It earns a share of what the
            press actually receives, weighted by the rank engraved on it.
          </p>
        </div>
        <div className={cipherStyles.levelTable}>
          <div className={cipherStyles.headRow}>
            <span>RANK</span>
            <span>WEIGHT</span>
            <span>UPGRADE</span>
            <span>CAP</span>
          </div>
          {levels.map((level, i) => (
            <div
              className={
                i === levels.length - 1
                  ? `${cipherStyles.rankRow} ${cipherStyles.rankTop}`
                  : cipherStyles.rankRow
              }
              key={level.label}
            >
              <span className={cipherStyles.rankName}>
                <b>{String(i + 1).padStart(2, '0')}</b> {level.label}
              </span>
              <strong className={cipherStyles.rankWeight}>
                {level.amount}
              </strong>
              <span>{level.cost}</span>
              <span>{level.cap}</span>
            </div>
          ))}
        </div>
        <div className={cipherStyles.transferNote}>
          <span>Transfer a Cipher and it goes dark.</span>
          <p>
            The rank and cage travel with it. The new bearer burns{' '}
            <TokenSymbol /> to light it again.
          </p>
        </div>
      </section>

      <section className={`${vaultStyles.vault} section-pad`} id="vault">
        <div className={vaultStyles.vaultHeading}>
          <div className="section-kicker">THE VAULT</div>
          <h2 className={vaultStyles.vaultHeadingTitle}>
            Nothing leaves
            <br />
            <em>without a window.</em>
          </h2>
          <p className={vaultStyles.vaultLede}>
            Every active Cipher carries its own accounting. A portion of each
            distribution remains locked as its reserve, the rest is claimable by
            its bearer.
          </p>
        </div>
        <div className={vaultStyles.vaultCard}>
          <div className={vaultStyles.vaultCardTop}>
            <span>CIPHER #0000</span>
            <span>STATUS / SEALED</span>
          </div>
          <div className={vaultStyles.vaultSeal}>ⓩ</div>
          <div className={vaultStyles.vaultCardCopy}>
            <h3>The cage</h3>
            <p>
              Reserve balance is published before issue. The protocol can
              allocate the reserve, it cannot borrow against the cage.
            </p>
          </div>
          <div className={vaultStyles.vaultMetrics}>
            <div>
              <span>INITIAL CAGE</span>
              <strong>— ZEC</strong>
            </div>
            <div>
              <span>COVER RATIO</span>
              <strong>—</strong>
            </div>
            <div>
              <span>WINDOW</span>
              <strong>LOCKED</strong>
            </div>
          </div>
          <div className={vaultStyles.vaultContract}>
            <span>$VSYNC CONTRACT</span>
            <code>0x0000…c0de</code>
            <CopyButton />
          </div>
        </div>
        <div className={vaultStyles.vaultNote}>
          <Shield size={16} />
          <span>
            Reserves, contracts, audits and redemption terms publish before
            issue.
          </span>
        </div>
      </section>

      <section
        className={`${charterStyles.charter} section-pad`}
        id="charter"
      >
        <div className="section-kicker">THE CHARTER</div>
        <div className={charterStyles.charterIntro}>
          <h2>
            Six articles.
            <br />
            <em>No fog.</em>
          </h2>
          <p>
            The public version of the rules. The final charter will be a
            contract, a document and a commitment to make the numbers legible.
          </p>
        </div>
        <div className={charterStyles.articleGrid}>
          {articles.map(([number, title, body]) => (
            <article key={number} className={charterStyles.article}>
              <span className={charterStyles.articleNumber}>{number}</span>
              <h3 className={charterStyles.articleTitle}>{title}</h3>
              <p className={charterStyles.articleBody}>{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={`${signalStyles.signal} section-pad`}>
        <div>
          <p className="eyebrow left">
            <span className={heroStyles.eyebrowRule} /> Before the first light
          </p>
          <h2 className={signalStyles.signalHeading}>
            Watch the
            <br />
            <em>veil.</em>
          </h2>
          <p className={signalStyles.signalCopy}>
            Follow @TheVeilSyndicate_RH on Twitter for the charter, contract
            addresses and activation schedule.
          </p>
        </div>
        <div className={signalStyles.followCard}>
          <span className={signalStyles.followLabel}>PUBLIC SIGNAL</span>
          <a
            className="button button-primary"
            href="https://twitter.com/TheVeilSyndicate_RH"
            target="_blank"
            rel="noreferrer"
          >
            Follow on Twitter <ArrowUpRight size={14} />
          </a>
          <small className={signalStyles.followNote}>
            New filings, contract notices and activation updates.
          </small>
        </div>
      </section>

      <footer className={chromeStyles.siteFooter}>
        <a className={chromeStyles.wordmark} href="#top">
          <span className={chromeStyles.wordmarkMark}>V</span>
          <span>
            The Veil
            <br />
            <em>Syndicate</em>
          </span>
        </a>
        <p>Designed for Robinhood Chain · 2026</p>
        <div>
          <a href="#charter">Charter</a>
          <a href="#vault">Vault</a>
          <a href="#top">Back to top ↑</a>
        </div>
      </footer>
    </main>
  );
}
