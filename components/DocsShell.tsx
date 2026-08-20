import Link from "next/link";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";

const ruleNav = [
  ["rule-a", "A", "文明交流"],
  ["rule-b", "B", "尊重管理"],
  ["rule-c", "C", "违规工具"],
  ["rule-d", "D", "恶意漏洞"],
  ["rule-e", "E", "非法物品"],
  ["rule-f", "F", "虚假信息"],
  ["rule-g", "G", "欺骗管理"],
  ["rule-h", "H", "拆家盗窃"],
  ["rule-i", "I", "高负载建筑"],
  ["rule-j", "J", "现金交易"],
];

const pluginNav = [
  ["web", "A", "网页插件"],
  ["menu", "B", "钟表菜单"],
  ["city", "C", "城市插件"],
  ["lottery", "D", "抽奖插件"],
  ["death", "E", "紫砂插件"],
  ["teleport", "F", "传送插件"],
  ["land", "G", "领地插件"],
  ["fly", "H", "飞行插件"],
  ["group", "I", "群内助手"],
  ["enchant", "J", "拓展附魔"],
];

export function DocsShell({
  active,
  title,
  description,
  children,
}: {
  active: "rules" | "plugins";
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  const nav = active === "rules" ? ruleNav : pluginNav;
  return (
    <main className="inner-page docs-page">
      <SiteHeader />
      <section className="inner-hero compact page-width">
        <p className="eyebrow">SERVER HANDBOOK / {active === "rules" ? "RULES" : "FEATURES"}</p>
        <h1>{title}</h1>
        <p>{description}</p>
      </section>

      <div className="docs-tabs page-width" aria-label="玩法文档分类">
        <Link className={active === "rules" ? "active" : ""} href="/play/rules">服务器规则</Link>
        <Link className={active === "plugins" ? "active" : ""} href="/play/plugins">插件玩法</Link>
      </div>

      <div className="docs-layout page-width">
        <aside className="docs-sidebar">
          <p>本页目录</p>
          <nav>
            {nav.map(([id, letter, label]) => (
              <a href={`#${id}`} key={id}>
                <span>{letter}</span>{label}
              </a>
            ))}
          </nav>
        </aside>
        <article className="docs-content">{children}</article>
      </div>
      <SiteFooter />
    </main>
  );
}
