// copy pages/api directory to out
const fs = require("fs");

// create api directory if not exists
const apiDir = "./out/api";
if (!fs.existsSync(apiDir)) {
  fs.mkdirSync(apiDir);
}

// copy api files
const apiFiles = fs.readdirSync("./pages/api");
apiFiles.forEach((file) => {
  fs.copyFileSync(`./pages/api/${file}`, `./out/api/${file}`);
});
