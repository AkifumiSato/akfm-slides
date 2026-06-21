module.exports = function (plop) {
  plop.setHelper("currentYear", () => {
    const parts = new Intl.DateTimeFormat("ja-JP", {
      timeZone: "Asia/Tokyo",
      year: "numeric",
    }).formatToParts(new Date());
    const currentYear = parts.find((p) => p.type === "year").value;
    return currentYear;
  });
  plop.setGenerator("slide", {
    description: "Create a new Slidev project inside monorepo",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "スライドのnameを入力してください（e.g. `react-tips`）:",
        validate: (value) => {
          if (/.+/.test(value)) {
            return true;
          }
          return "nameは必須です";
        },
      },
    ],
    actions: [
      {
        type: "addMany",
        // e.g.: slides/2026/kebab-case-name/
        destination: "slides/{{currentYear}}/{{kebabCase name}}",
        // テンプレートの場所
        base: "plop-templates/slide",
        templateFiles: "plop-templates/slide/**/*",
        globOptions: { dot: true },
      },
    ],
  });
};
