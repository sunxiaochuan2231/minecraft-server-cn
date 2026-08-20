# 乌合之众服务器网站

乌合之众 Minecraft 基岩版社区服务器的中文官方网站。包含主页面、服务器玩法、封神榜、赞助榜和加入我们五个主页面，并提供规则与插件玩法的详细子页面。

## 页面

- `/`：服务器主页面
- `/play`：玩法手册入口
- `/play/rules`：服务器规则
- `/play/plugins`：插件玩法与拓展附魔
- `/hall-of-fame`：可展开的纪律记录榜单
- `/sponsors`：赞助榜与用途说明
- `/join`：QQ群二维码与加入步骤

## 本地运行

需要 Node.js 22.13.0 或更高版本。

```bash
npm install
npm run dev
```

浏览器打开终端显示的本地地址即可查看。

## 生产构建

```bash
npm run build
```

网站图片位于 `public/images`，页面内容位于 `app`，共用页头和页脚位于 `components`。

## 内容更新

- 赞助名单：编辑 `app/sponsors/page.tsx`
- 封神榜：编辑 `app/hall-of-fame/page.tsx` 中的 `records`
- 服务器规则：编辑 `app/play/rules/page.tsx` 中的 `rules`
- 拓展附魔：编辑 `app/play/plugins/page.tsx` 中的 `enchants`
- QQ 群二维码：替换 `public/images/qq-group.webp`

Minecraft 是 Mojang Studios 的商标。本网站为社区作品，与 Mojang Studios 无关联。
