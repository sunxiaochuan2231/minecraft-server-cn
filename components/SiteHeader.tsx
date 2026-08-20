import Link from "next/link";

const navItems = [
  { href: "/", label: "主页面" },
  { href: "/play", label: "服务器玩法" },
  { href: "/hall-of-fame", label: "封神榜" },
  { href: "/sponsors", label: "赞助榜" },
  { href: "/join", label: "加入我们" },
];

export function SiteHeader({ theme = "light" }: { theme?: "light" | "dark" }) {
  return (
    <header className={`site-header ${theme === "dark" ? "on-dark" : ""}`}>
      <div className="header-inner page-width">
        <Link className="brand" href="/" aria-label="乌合之众服务器首页">
          <span className="brand-mark" aria-hidden="true">乌</span>
          <span className="brand-name">乌合之众</span>
        </Link>

        <nav className="desktop-nav" aria-label="主导航">
          {navItems.map((item) => (
            <Link href={item.href} key={item.href}>{item.label}</Link>
          ))}
        </nav>

        <Link className="header-join" href="/join">
          加入服务器 <span aria-hidden="true">↗</span>
        </Link>

        <details className="mobile-menu">
          <summary aria-label="打开导航菜单"><span /><span /></summary>
          <nav aria-label="移动端导航">
            {navItems.map((item, index) => (
              <Link href={item.href} key={item.href}>
                <small>0{index + 1}</small>{item.label}
              </Link>
            ))}
          </nav>
        </details>
      </div>
    </header>
  );
}
