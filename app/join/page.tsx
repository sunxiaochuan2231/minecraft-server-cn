import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "../../components/SiteFooter";
import { SiteHeader } from "../../components/SiteHeader";

export const metadata: Metadata = {
  title: "加入我们",
  description: "加入乌合之众服务器 QQ 群，获取服务器地址、最新公告与玩家交流。",
};

export default function JoinPage() {
  return (
    <main className="inner-page join-page">
      <SiteHeader />
      <section className="join-layout page-width">
        <div className="join-copy">
          <p className="eyebrow">JOIN THE COMMUNITY</p>
          <h1>新的故事，<br />从一句“你好”开始。</h1>
          <p className="join-lede">扫码加入服务器 QQ 群，获取最新服务器地址、版本通知、活动公告，并认识正在这个世界里生活的人。</p>
          <div className="group-number">
            <small>QQ 群号</small>
            <strong>761132406</strong>
          </div>
          <div className="join-steps">
            <span><b>1</b>打开手机 QQ</span>
            <span><b>2</b>扫描右侧二维码</span>
            <span><b>3</b>完成入群验证</span>
          </div>
          <Link href="/play/rules" className="text-link">加入前先读服务器规则 <span aria-hidden="true">→</span></Link>
        </div>
        <div className="qr-card">
          <div className="qr-frame">
            <img src="/images/qq-group.webp" alt="乌合之众服务器 QQ 群二维码，群号 761132406" />
          </div>
          <p><span className="status-dot" />扫描二维码，加入群聊</p>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
