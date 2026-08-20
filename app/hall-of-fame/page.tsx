import type { Metadata } from "next";
import { SiteFooter } from "../../components/SiteFooter";
import { SiteHeader } from "../../components/SiteHeader";

export const metadata: Metadata = {
  title: "封神榜",
  description: "乌合之众服务器纪律记录。点击榜单条目查看记录摘要。",
  robots: { index: false, follow: true },
};

const records = [
  {
    rank: "01",
    name: "酥皮蛋挞 & weina & 猴子 & 咸鱼",
    text: "辱骂管理、发表不当言论并散布服务器谣言；此后试图付费寻找他人网暴服主，并持续针对服务器。",
  },
  {
    rank: "02",
    name: "yangguodang",
    text: "大量刷取物品，被查处后拒绝承认；带弟弟进入服务器游玩，两人均有违规记录。",
  },
  {
    rank: "03",
    name: "LeanMarmot90361",
    text: "大量刷取物品，并将违规物资分发给多人，险些破坏服务器经济；被发现后辱骂服主。",
  },
  {
    rank: "04",
    name: "Rotaeno2162",
    text: "在群内发布不当内容，并使用多个小号、转发聊天记录冲击群聊秩序。",
  },
  {
    rank: "05",
    name: "zwanmo999",
    text: "辱骂、污蔑管理，多次在群内无理争执，并以曝光服务器相威胁。",
  },
  {
    rank: "06",
    name: "tty",
    text: "将服务器玩家拉入个人存档，并存在刷取物品的违规记录。",
  },
];

export default function HallOfFamePage() {
  return (
    <main className="inner-page hall-page">
      <SiteHeader theme="dark" />
      <section className="hall-hero">
        <div className="page-width hall-hero-inner">
          <p className="eyebrow light">DISCIPLINE ARCHIVE</p>
          <h1>封神榜</h1>
          <p>留档不是为了围观，而是为了让规则被记住。</p>
        </div>
      </section>

      <section className="ranking-section page-width">
        <div className="ranking-intro">
          <p>点击任意记录可展开查看摘要。所有条目依据服务器管理记录整理。</p>
          <span>{String(records.length).padStart(2, "0")} RECORDS</span>
        </div>
        <div className="ranking-list">
          {records.map((record) => (
            <details key={record.rank}>
              <summary>
                <span className="rank-number">{record.rank}</span>
                <strong>{record.name}</strong>
                <span className="expand-mark" aria-hidden="true" />
              </summary>
              <div className="record-body">
                <small>记录摘要</small>
                <p>{record.text}</p>
              </div>
            </details>
          ))}
        </div>
        <p className="ranking-note">如对记录内容有异议，请通过服务器 QQ 群联系管理核实。</p>
      </section>
      <SiteFooter />
    </main>
  );
}
