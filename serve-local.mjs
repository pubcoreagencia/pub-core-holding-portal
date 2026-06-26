import { createReadStream, existsSync, statSync } from "node:fs";
import { createServer } from "node:http";
import { extname, join, normalize, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("./out/", import.meta.url));
const port = Number(process.env.PORT || 3000);

const mimeTypes = {
  ".css": "text/css; charset=utf-8",
  ".gif": "image/gif",
  ".html": "text/html; charset=utf-8",
  ".ico": "image/x-icon",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".txt": "text/plain; charset=utf-8",
  ".webp": "image/webp",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
};

function safePath(urlPath) {
  const decoded = decodeURIComponent(urlPath.split("?")[0] || "/");
  const clean = normalize(decoded).replace(/^(\.\.[/\\])+/, "");
  const fullPath = resolve(join(root, clean));

  return fullPath.startsWith(resolve(root)) ? fullPath : null;
}

function resolveFile(urlPath) {
  const requested = safePath(urlPath);

  if (!requested) {
    return join(root, "404.html");
  }

  const candidates = [];
  const hasExtension = Boolean(extname(requested));

  if (urlPath === "/" || urlPath === "") {
    candidates.push(join(root, "index.html"));
  } else {
    candidates.push(requested);

    if (!hasExtension) {
      candidates.push(`${requested}.html`, join(requested, "index.html"));
    }
  }

  for (const candidate of candidates) {
    if (existsSync(candidate) && statSync(candidate).isFile()) {
      return candidate;
    }
  }

  return join(root, "404.html");
}

createServer((request, response) => {
  const filePath = resolveFile(request.url || "/");
  const statusCode = filePath.endsWith("404.html") && !(request.url || "/").includes("404")
    ? 404
    : 200;
  const contentType = mimeTypes[extname(filePath)] || "application/octet-stream";

  response.writeHead(statusCode, {
    "Content-Type": contentType,
    "Cache-Control": "no-store",
  });

  createReadStream(filePath).pipe(response);
}).listen(port, () => {
  console.log(`Portal local no ar: http://localhost:${port}/`);
});
