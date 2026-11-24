import { copyFile, mkdir, readFile, writeFile } from "node:fs/promises";

// GitHub Pages must serve legal URLs directly, without relying on a 404 fallback.
const template = await readFile(new URL("../dist/index.html", import.meta.url), "utf8");
for (const [route, title, description] of [
  ["privacy-policy", "Privacy Policy", "How OpenWellness handles personal and health information, security, subscriptions, and deletion requests."],
  ["terms-of-service", "Terms of Service &amp; EULA", "OpenWellness Terms of Service and End User License Agreement, including Apple in-app subscriptions."],
]) {
  const directory = new URL(`../dist/${route}/`, import.meta.url);
  await mkdir(directory, { recursive: true });
  const html = template
    .replace(/<title>.*?<\/title>/, `<title>${title} | OpenWellness</title>`)
    .replace(/(<meta (?:name="description"|property="og:description") content=")[^"]*("\s*\/>)/g, `$1${description}$2`)
    .replace(/(<meta property="og:title" content=")[^"]*("\s*\/>)/, `$1${title} | OpenWellness$2`);
  await writeFile(new URL("index.html", directory), html);
}
await copyFile(new URL("../CNAME", import.meta.url), new URL("../dist/CNAME", import.meta.url));
await copyFile(new URL("../dist/index.html", import.meta.url), new URL("../dist/404.html", import.meta.url));
