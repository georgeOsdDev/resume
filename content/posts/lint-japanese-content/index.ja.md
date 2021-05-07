---
title: 日本語記事にtextlintを実行する
date: 2021-05-06
slug: "/lint-japanese-content"
tags:
  - Info
  - Tips
  - textlint
  - 日本語
canonicalUrl: "https://blog.toshida.org/lint-japanese-content"
---

日本語コンテンツに対して [textlint](https://textlint.github.io/) を実行するように、VSCode の設定および、ワークフローを追加した。

```js:title=.vscode/setting.json
  "textlint.configPath": ".textlintrc",
  "textlint.targetPath": "content/**/*.ja.md",
```

[textlint-rule-preset-ja-technical-writing](https://github.com/textlint-ja/textlint-rule-preset-ja-technical-writing) を使用しているので、
この行は注意されます！
