const fs = require("fs")
const html = fs.readFileSync("public/index.html", "utf8")
const idx = html.indexOf("5-时事新闻")
console.log("idx:", idx)
if (idx >= 0) {
  console.log(html.slice(Math.max(0, idx - 2200), idx + 200))
}