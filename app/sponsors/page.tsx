import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "../../components/SiteFooter";
import { SiteHeader } from "../../components/SiteHeader";

export const metadata: Metadata = {
  title: "赞助榜",
  description: "感谢每一位帮助乌合之众服务器持续运行的社区成员。",
};

const uses = [
  ["01", "稳定运行", "用于服务器基础资源与日常运行维护。"],
  ["02", "体验优化", "用于性能改善、玩法维护与必要的技术服务。"],
  ["03", "社区活动", "用于玩家活动、纪念内容与社区共同项目。"],
];

const sponsors = [
  ["es服主芜湖", "850"],
  ["洛杨", "765"],
  ["魔王", "544.94"],
  ["dkgt", "75"],
  ["wcc", "70"],
  ["楼下差1块钱不凹", "21"],
  ["wusihan", "20"],
  ["卡提希娅的乔治", "20"],
  ["猫娘", "13"],
  ["Mauve Tag7855757", "11.3"],
  ["tan", "10"],
];

export default function SponsorsPage() {
  return (
    <main className="inner-page sponsor-page">
      <SiteHeader />
      <section className="sponsor-hero page-width">
        <div>
          <p className="eyebrow">COMMUNITY SUPPORT</p>
          <h1>每一份支持，<br />都让世界走得更远。</h1>
        </div>
        <p>感谢每一位支持服务器持续运行的社区成员。每一次帮助都会被认真记录，也会回到服务器的长期运行与社区体验中。</p>
      </section>

      <section className="support-panel page-width">
        <div className="support-state">
          <div className="sponsor-list-heading">
            <p>SPONSOR LIST</p>
            <h2>赞助鸣谢</h2>
            <span>按累计赞助金额排序</span>
          </div>
          <ol className="sponsor-list">
            {sponsors.map(([name, amount], index) => (
              <li key={name}>
                <small>{String(index + 1).padStart(2, "0")}</small>
                <strong>{name}</strong>
                <span><b>¥</b>{amount}</span>
              </li>
            ))}
          </ol>
        </div>
        <div className="support-copy">
          <p className="eyebrow light">WHERE IT GOES</p>
          <h2>让支持去到<br />真正需要的地方。</h2>
          <div className="use-list">
            {uses.map(([number, title, text]) => (
              <article key={number}>
                <small>{number}</small>
                <div><strong>{title}</strong><p>{text}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="sponsor-cta page-width">
        <div><p className="eyebrow">CONTACT THE TEAM</p><h2>想了解赞助方式？</h2></div>
        <Link className="button dark" href="/join">加入 QQ 群咨询 <span aria-hidden="true">→</span></Link>
      </section>
      <SiteFooter />
    </main>
  );
}
