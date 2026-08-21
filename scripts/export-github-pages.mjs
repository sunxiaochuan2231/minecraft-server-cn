import { cp, mkdir, readFile, readdir, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const outputRoot = path.join(projectRoot, "pages-dist");
const clientRoot = path.join(projectRoot, "dist", "client");
const basePath = "/minecraft-server-cn";
const routes = [
  "/",
  "/play",
  "/play/rules",
  "/play/plugins",
  "/hall-of-fame",
  "/sponsors",
  "/join",
];

function makeStaticHtml(source) {
  const htmlEnd = source.indexOf("</html>");
  let html = htmlEnd >= 0 ? source.slice(0, htmlEnd + "</html>".length) : source;

  html = html
    .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, "")
    .replace(/<link\b(?=[^>]*\brel=["']modulepreload["'])[^>]*>\s*/gi, "")
    .replace(/\b(href|src)=(["'])\/(?!\/)/gi, (_, attribute, quote) =>
      `${attribute}=${quote}${basePath}/`,
    );

  return html.replace("</head>", '<meta name="github-pages" content="static"/></head>');
}

async function rewriteCssAsset(filePath) {
  const css = await readFile(filePath, "utf8");
  const rewritten = css.replace(/url\((["']?)\/(?!\/)/gi, (_, quote) =>
    `url(${quote}${basePath}/`,
  );
  await writeFile(filePath, rewritten);
}

async function rewriteCssDirectory(directory) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const entryPath = path.join(directory, entry.name);
    if (entry.isDirectory()) await rewriteCssDirectory(entryPath);
    else if (entry.isFile() && entry.name.endsWith(".css")) await rewriteCssAsset(entryPath);
  }
}

await rm(outputRoot, { recursive: true, force: true });
await cp(clientRoot, outputRoot, { recursive: true });

const workerUrl = pathToFileURL(path.join(projectRoot, "dist", "server", "index.js"));
workerUrl.searchParams.set("static-export", `${process.pid}-${Date.now()}`);
const { default: worker } = await import(workerUrl.href);

for (const route of routes) {
  const response = await worker.fetch(
    new Request(`http://localhost${route}`, { headers: { accept: "text/html" } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
  if (!response.ok) throw new Error(`Static render failed for ${route}: ${response.status}`);

  const routeDirectory = route === "/" ? outputRoot : path.join(outputRoot, route.slice(1));
  await mkdir(routeDirectory, { recursive: true });
  await writeFile(path.join(routeDirectory, "index.html"), makeStaticHtml(await response.text()));
}

await rewriteCssDirectory(outputRoot);

await writeFile(path.join(outputRoot, ".nojekyll"), "");
await cp(path.join(outputRoot, "index.html"), path.join(outputRoot, "404.html"));

console.log(`Exported ${routes.length} routes to ${outputRoot}`);
