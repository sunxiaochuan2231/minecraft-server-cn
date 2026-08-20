import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="page-width footer-grid">
        <div>
          <Link className="brand footer-brand" href="/">
            <span className="brand-mark" aria-hidden="true">乌</span>
            <span className="brand-name">乌合之众</span>
          </Link>
          <p>一个由玩家共同写下故事的<br />Minecraft 基岩版长期社区。</p>
        </div>
        <div className="footer-nav">
          <p>探索</p>
          <Link href="/play">服务器玩法</Link>
          <Link href="/hall-of-fame">封神榜</Link>
          <Link href="/sponsors">赞助榜</Link>
        </div>
        <div className="footer-nav">
          <p>联系</p>
          <Link href="/join">加入 QQ 群</Link>
          <a href="http://91.whzz.online:35116" target="_blank" rel="noreferrer">网页中心 ↗</a>
        </div>
      </div>
      <div className="page-width footer-bottom">
        <span>© {new Date().getFullYear()} 乌合之众服务器</span>
        <span>非 Minecraft 官方产品，与 Mojang Studios 无关联</span>
      </div>
    </footer>
  );
}
