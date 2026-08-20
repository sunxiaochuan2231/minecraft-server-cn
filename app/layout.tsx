import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://minecraft-server-cn.milvona.chatgpt.site"),
  title: {
    default: "乌合之众服务器｜基岩版社区生存服",
    template: "%s｜乌合之众服务器",
  },
  description:
    "乌合之众基岩版社区生存服务器：自由生存、插件拓展、玩家共建，在一个长期世界里留下属于你的故事。",
  openGraph: {
    type: "website",
    locale: "zh_CN",
    url: "/",
    siteName: "乌合之众服务器",
    title: "乌合之众服务器｜基岩版社区生存服",
    description: "自由生存 · 插件玩法 · 长久陪伴，在一个长期世界里留下你的故事。",
    images: [{ url: "/og.png", width: 1730, height: 909, alt: "乌合之众服务器社区合影" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "乌合之众服务器｜基岩版社区生存服",
    description: "自由生存 · 插件玩法 · 长久陪伴，在一个长期世界里留下你的故事。",
    images: ["/og.png"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
