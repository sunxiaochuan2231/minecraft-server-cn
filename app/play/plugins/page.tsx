import type { Metadata } from "next";
import { DocsShell } from "../../../components/DocsShell";

export const metadata: Metadata = {
  title: "插件玩法",
  description: "乌合之众服务器网页中心、钟表菜单、群内助手与拓展附魔完整说明。",
};

const menuFeatures = [
  ["city", "C", "城市插件", "城市发展相关功能，详细入口与当前规则请以钟表菜单内说明为准。"],
  ["lottery", "D", "抽奖插件", "参与服务器活动与抽奖，奖励内容和开放时间以游戏内菜单为准。"],
  ["death", "E", "紫砂插件", "服务器特色玩法之一，具体触发方式与规则请在游戏内查看。"],
  ["teleport", "F", "传送插件", "便捷前往已开放区域，减少重复赶路，使用限制以游戏内提示为准。"],
  ["land", "G", "领地插件", "保护建筑与物资边界；领地周围五格同样受到规则保护。"],
  ["fly", "H", "飞行插件", "提供特定条件下的飞行体验，获取方式与使用范围以菜单说明为准。"],
];

const groupCommands = [
  "绑定玩家 xxx（xxx 为你的 MCID）",
  "查在线",
  "服务器信息",
  "服务器状态",
  "健康检查",
  "解绑玩家",
  "历史记录",
  "玩家历史统计",
  "玩家列表",
  "玩家名列表",
  "玩家数据统计（生成你的数据图）",
  "玩家在线详情",
  "# xxx（将 xxx 发送到游戏内）",
];

const enchants = [
  ["岩浆行者", "走过岩浆时在脚下生成玄武岩，体验类似“冰霜行者”。"],
  ["夜视镜", "附魔于头盔，提供永久夜视。"],
  ["雷击", "附魔于剑，攻击时概率触发闪电。最高 5 级：1 级概率 5%，每级提高 7.5%。"],
  ["岩浆保护", "附魔于胸甲，使玩家免受岩浆烫伤。"],
  ["我回来了", "附魔于不死图腾，使该图腾可以复活两次。"],
  ["欲上青天", "附魔于护腿，获得永久飞行能力。"],
  ["寒冰", "附魔于剑，命中时概率用冰块冻结目标。最高 5 级：1 级概率 5%，每级提高 7.5%。"],
  ["鬼影", "附魔于剑，命中后概率使目标无法移动。最高 3 级：1 级概率 5%、控制 5 秒；每级增加 5% 概率与 3 秒时长。"],
  ["万箭齐发", "附魔于弓，命中时有 10% 概率触发十支箭；不可升级。"],
  ["百毒不侵", "可附魔于四件盔甲，每多一件拦截负面效果的概率提高 25%；集齐后免疫全部负面效果。"],
  ["蛛网束缚", "附魔于弓，命中后有 10% 概率召唤 3×3 蛛网困住目标。"],
  ["生命提升", "附魔于胸甲，最高 3 级；每提升 1 级增加两颗心的生命上限。"],
  ["血魔", "附魔于剑，攻击时有 20% 概率扣除目标当前生命的 25%，并恢复自身等量生命；恢复量不超过生命上限。"],
  ["锻造者", "附魔于镐子，开采铁、黄金等矿物时可直接获得熔炼后的矿锭。"],
  ["识忆", "重锤触发下落攻击后，0.5 秒追加本次攻击 35% 的伤害。"],
  ["冷启动", "须与“风暴”配合：重锤首次重击总伤害降低 60%，后续重击为原伤害的 1.3 倍。"],
  ["鬼手", "附魔于剑，仅 1 级；攻击生物时有 5% 概率直接击杀。"],
  ["柴刀", "附魔于斧，仅 1 级；有 3% 概率使目标随机一件盔甲上的拓展附魔降低 1 级。若仅 1 级，则清除并掉落对应卷轴。"],
  ["鬼域", "独立卷轴，最高 6 层。手持右键后进入完全隐身：第 1 层持续 10 秒，每层额外增加 10 秒；过程中不可主动关闭。"],
  ["屹立不倒", "附魔于胸甲。残血受到伤害时有 15% 概率触发图腾效果并恢复 6 点生命，不突破生命上限。"],
  ["无量空处", "附魔于剑，攻击玩家时有 5% 概率将对方传送到攻击者所在位置。"],
  ["随机词条", "通过 GUI 表单抽取，每次花费 100,000 金币和 1 个钻石块。"],
  ["原版附魔突破", "通过合成卷轴突破原版附魔等级，每项最高不超过 8 级。普通附魔书无法通过叠加突破上限。"],
  ["升级卷轴", "可在 GUI 表单中选择合成数量。每张消耗：5 个荧光墨囊、1 个下界之星、1 个潮涌核心、1 个合金块与 1 个龙首。"],
];

export default function PluginsPage() {
  return (
    <DocsShell
      active="plugins"
      title="插件玩法"
      description="所有拓展都围绕一个目标：减少琐碎操作，让生存、交易和成长更有层次。"
    >
      <section className="plugin-section" id="web">
        <header className="plugin-title"><span>A</span><div><small>WEB HUB</small><h2>网页插件</h2></div></header>
        <p>网页中心同步服务器商店，并提供自由交易、聊天、服务器状态查看与签到等功能。</p>
        <a className="external-card" href="http://91.whzz.online:35116" target="_blank" rel="noreferrer">
          <span><small>网页中心</small><strong>91.whzz.online:35116</strong></span>
          <b aria-hidden="true">↗</b>
        </a>
        <div className="command-box">
          <code>/zxdash reg</code><span>打开注册表单</span>
          <code>/zxdash unreg</code><span>注销后重新注册</span>
        </div>
        <ul className="clean-list">
          <li>自助地图画：商店 → 地图画</li>
          <li>点歌台：商店 → 点歌台</li>
          <li>网页商店与游戏内商城同步</li>
        </ul>
      </section>

      <section className="plugin-section" id="menu">
        <header className="plugin-title"><span>B</span><div><small>QUICK MENU</small><h2>钟表菜单</h2></div></header>
        <p>输入 <code>/mmenu</code> 或使用任意钟表即可打开。主城压力板可领取钟表，所有插件入口均可从菜单进入。</p>
      </section>

      <div className="plugin-mini-grid">
        {menuFeatures.map(([id, letter, title, text]) => (
          <section id={id} key={id}>
            <span>{letter}</span>
            <h2>{title}</h2>
            <p>{text}</p>
          </section>
        ))}
      </div>

      <section className="plugin-section" id="group">
        <header className="plugin-title"><span>I</span><div><small>COMMUNITY BOT</small><h2>群内助手 · 白雫</h2></div></header>
        <p>直接在服务器 QQ 群内发送以下指令，即可完成角色绑定、状态查询与游戏内消息联动。</p>
        <div className="command-grid">
          {groupCommands.map((command) => <code key={command}>{command}</code>)}
        </div>
      </section>

      <section className="plugin-section enchant-section" id="enchant">
        <header className="plugin-title"><span>J</span><div><small>CUSTOM ENCHANTMENTS</small><h2>拓展附魔</h2></div></header>
        <p>卷轴为装备带来新的战斗、探索与生存能力。概率、等级与效果以以下说明为准。</p>
        <div className="enchant-list">
          {enchants.map(([name, text], index) => (
            <article key={name}>
              <small>{String(index + 1).padStart(2, "0")}</small>
              <h3>{name}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>
    </DocsShell>
  );
}
