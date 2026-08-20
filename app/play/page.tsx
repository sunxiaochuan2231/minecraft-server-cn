import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "../../components/SiteFooter";
import { SiteHeader } from "../../components/SiteHeader";

export const metadata: Metadata = {
  title: "服务器玩法",
  description: "查看乌合之众服务器的社区规则、网页市场、钟表菜单、群内助手与拓展附魔玩法。",
};

const featureLinks = [
  ["A", "网页中心", "市场、地图画、点歌、交易与签到", "/play/plugins#web"],
  ["B", "钟表菜单", "从一块钟表进入全部便捷服务", "/play/plugins#menu"],
  ["I", "群内助手", "查询状态、玩家数据并联动聊天", "/play/plugins#group"],
  ["J", "拓展附魔", "二十余种能力与独立成长路径", "/play/plugins#enchant"],
];

export default function PlayPage() {
  return (
    <main className="inner-page">
      <SiteHeader />
      <section className="inner-hero page-width">
        <p className="eyebrow">SERVER HANDBOOK</p>
        <h1>玩法手册</h1>
        <p>规则不是门槛，而是让每一种玩法都能长久存在的共同约定。</p>
      </section>

      <section className="handbook-choice page-width">
        <Link href="/play/rules" className="handbook-card rule-card">
          <span className="handbook-number">01</span>
          <div>
            <p>COMMUNITY RULES</p>
            <h2>服务器规则</h2>
            <span>十项社区共识与对应处置说明</span>
          </div>
          <b aria-hidden="true">↗</b>
        </Link>
        <Link href="/play/plugins" className="handbook-card plugin-card">
          <span className="handbook-number">02</span>
          <div>
            <p>EXTENDED PLAY</p>
            <h2>插件玩法</h2>
            <span>网页中心、便利系统与拓展附魔</span>
          </div>
          <b aria-hidden="true">↗</b>
        </Link>
      </section>

      <section className="quick-feature page-width">
        <div className="quick-feature-heading">
          <p className="eyebrow">QUICK ACCESS</p>
          <h2>从这里开始探索</h2>
        </div>
        <div className="quick-feature-list">
          {featureLinks.map(([letter, title, text, href]) => (
            <Link href={href} key={letter}>
              <span className="quick-letter">{letter}</span>
              <strong>{title}</strong>
              <p>{text}</p>
              <b aria-hidden="true">→</b>
            </Link>
          ))}
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
