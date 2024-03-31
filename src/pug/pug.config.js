const { marked } = require("marked");
const YAML = require("js-yaml");
const fs = require("fs");

module.exports = {
  locals: {
    data: {
      marked,
      years: YAML.load(fs.readFileSync("./index.yml")),
      chuitens: fs
        .readdirSync("./注意点")
        .filter((p) => /.+\.md$/.test(p))
        .map((p) => ({
          content: fs.readFileSync("./注意点/" + p).toString(),
          name: p.slice(0, -3),
        })),
    },
  },
};
