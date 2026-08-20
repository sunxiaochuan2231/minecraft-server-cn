import type { Metadata } from "next";
import { DocsShell } from "../../../components/DocsShell";

export const metadata: Metadata = {
  title: "服务器规则",
  description: "乌合之众服务器社区规则与处罚说明。",
};

const rules = [
  {
    id: "rule-a",
    letter: "A",
    title: "文明交流",
    text: "辱骂玩家，包括连续骂人、使用脏话两句及以上。",
    penalty: "封禁 1—48 小时；情节严重时可永久封禁。",
  },
  {
    id: "rule-b",
    letter: "B",
    title: "尊重服主与管理",
    text: "辱骂服主或管理人员；多次辱骂、累计十句以上视为严重情节。",
    penalty: "封禁 1 天以上；严重或屡犯者可永久封禁。",
  },
  {
    id: "rule-c",
    letter: "C",
    title: "禁止外挂与违规材质包",
    text: "使用外挂或违规材质包；试图开挂但未成功；指使或帮助他人开挂。",
    penalty: "实际开挂或指使他人开挂：永久封禁；未成功的尝试：封禁 7 天至永久。",
  },
  {
    id: "rule-d",
    letter: "D",
    title: "禁止恶意利用漏洞",
    text: "利用漏洞或版本特性刷取物品、获得无敌效果、异常传送等。",
    penalty: "首次封禁 3 天并清除违规物品；第二次 7 天；第三次永久封禁。",
  },
  {
    id: "rule-e",
    letter: "E",
    title: "禁止索取非法物品",
    text: "向外挂使用者或管理人员索要无法通过正常玩法取得的物品。",
    penalty: "清空背包，并封禁 7 天至永久。",
  },
  {
    id: "rule-f",
    letter: "F",
    title: "禁止恶意散布虚假信息",
    text: "散布“服务器即将关闭”等不实内容，引起社区恐慌或不满。",
    penalty: "封禁 12 小时至 3 天。",
  },
  {
    id: "rule-g",
    letter: "G",
    title: "禁止欺骗管理",
    text: "谎称物品丢失等情况，试图要求管理进行不当赔偿。",
    penalty: "清理部分背包，并封禁 7 天。",
  },
  {
    id: "rule-h",
    letter: "H",
    title: "禁止非法拆家与盗窃",
    text: "在禁止拆家的日期拆家、破坏受保护内容，或在领地周围五格范围内违规破坏、偷取物品。",
    penalty: "封禁 2 天以上。",
  },
  {
    id: "rule-i",
    letter: "I",
    title: "限制高负载建筑",
    text: "建造超高效率猪人塔、小黑塔或其他刷资源设施，并对服务器造成明显卡顿等负面影响。发现后请立即拆除。",
    penalty: "首次封禁 3—5 小时；第二次 3 天；第三次永久封禁。",
  },
  {
    id: "rule-j",
    letter: "J",
    title: "禁止人民币交易",
    text: "禁止使用人民币交易任何游戏物品，包括抽奖获得的物品。恶意钓鱼、诱导他人交易的情况由管理另行核实。",
    penalty: "永久封禁并清理游戏数据；举报真实交易行为可获得奖励。",
  },
];

export default function RulesPage() {
  return (
    <DocsShell
      active="rules"
      title="服务器规则"
      description="十条明确、可查的社区约定。请在投入时间之前读完，也请在发生争议时以本页为共同依据。"
    >
      <div className="docs-note">
        <strong>阅读提示</strong>
        <p>处罚时长会结合影响范围、主观恶意与历史记录综合判断；最终结果以管理核实为准。</p>
      </div>
      {rules.map((rule) => (
        <section className="rule-section" id={rule.id} key={rule.id}>
          <header>
            <span>{rule.letter}</span>
            <h2>{rule.title}</h2>
          </header>
          <p>{rule.text}</p>
          <div className="penalty-line">
            <small>处置</small>
            <strong>{rule.penalty}</strong>
          </div>
        </section>
      ))}
    </DocsShell>
  );
}
