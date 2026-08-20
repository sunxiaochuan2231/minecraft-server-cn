import Link from "next/link";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";

const highlights = [
  {
    index: "01",
    title: "一起生活的世界",
    text: "在持续生长的存档里建城、交易、远行。玩法有边界，创造没有标准答案。",
  },
  {
    index: "02",
    title: "有分寸的拓展",
    text: "从网页市场到拓展附魔，插件服务于生存体验，而不是盖过原版的乐趣。",
  },
  {
    index: "03",
    title: "看得见的秩序",
    text: "规则、处罚与社区记录公开可查，让每位长期玩家都能安心投入时间。",
  },
];

export default function Home() {
  return (
    <main>
      <section className="hero-shell">
        <div className="hero-image" aria-hidden="true" />
        <div className="hero-shade" aria-hidden="true" />
        <SiteHeader theme="dark" />

        <div className="hero-content page-width">
          <div className="hero-copy">
            <div className="eyebrow light">
              <span className="status-dot" />
              基岩版 · 社区生存服务器
            </div>
            <h1>
              乌合之众
              <span>也能建成一个世界。</span>
            </h1>
            <p className="hero-lede">
              有人盖城，有人远行，也有人只是来看看晚霞。
              <br className="desktop-break" />
              在这里，属于你的玩法不必与别人相同。
            </p>
            <div className="hero-actions">
              <Link className="button primary" href="/join">
                加入服务器 <span aria-hidden="true">↗</span>
              </Link>
              <Link className="button glass" href="/play">
                浏览玩法
              </Link>
            </div>
          </div>

          <aside className="hero-card glass-panel" aria-label="服务器特点">
            <p className="hero-card-kicker">WORLD PROFILE</p>
            <div className="profile-row">
              <span>版本</span>
              <strong>基岩版</strong>
            </div>
            <div className="profile-row">
              <span>类型</span>
              <strong>生存 · 社区</strong>
            </div>
            <div className="profile-row">
              <span>体验</span>
              <strong>插件拓展</strong>
            </div>
            <div className="hero-card-foot">
              <span className="mini-avatar">乌</span>
              <p>从一个存档，长成一群人的共同记忆。</p>
            </div>
          </aside>
        </div>

        <a className="scroll-cue" href="#about" aria-label="向下了解服务器">
          <span />
          向下探索
        </a>
      </section>

      <section className="intro-section page-width" id="about">
        <div className="section-heading split-heading">
          <div>
            <p className="eyebrow">ABOUT THE WORLD</p>
            <h2>这里不是大厅，<br />是一个长期世界。</h2>
          </div>
          <p className="section-lede">
            我们把复杂的系统藏在顺手的交互里，把最重要的位置留给玩家、建筑和故事。
            无论你是生存党、建筑党，还是喜欢研究机制的人，都能找到自己的节奏。
          </p>
        </div>

        <div className="highlight-grid">
          {highlights.map((item) => (
            <article className="highlight-card" key={item.index}>
              <span className="card-index">{item.index}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <span className="card-line" aria-hidden="true" />
            </article>
          ))}
        </div>
      </section>

      <section className="feature-band">
        <div className="page-width feature-band-inner">
          <div>
            <p className="eyebrow light">PLAY YOUR WAY</p>
            <h2>原版的自由，<br />多一点新鲜感。</h2>
          </div>
          <div className="feature-list">
            <Link href="/play#web" className="feature-link">
              <span>网页市场与自由交易</span><b>01</b>
            </Link>
            <Link href="/play#menu" className="feature-link">
              <span>钟表菜单与便捷服务</span><b>02</b>
            </Link>
            <Link href="/play#enchant" className="feature-link">
              <span>二十余种拓展附魔</span><b>03</b>
            </Link>
          </div>
        </div>
      </section>

      <section className="home-cta page-width">
        <div>
          <p className="eyebrow">READY TO START?</p>
          <h2>下一位住民，会是你吗？</h2>
        </div>
        <Link className="button dark" href="/join">
          查看加入方式 <span aria-hidden="true">→</span>
        </Link>
      </section>

      <SiteFooter />
    </main>
  );
}
