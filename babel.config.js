module.exports = {
  presets: [
    [
      "babel-preset-gatsby",
      {
        targets: {
          browsers: [">0.25%", "not dead"],
        },
      },
    ],
  ],
  env: {
    test: {
      presets: [
        [
          "@babel/preset-env",
          {
            targets: {
              node: "current",
            },
          },
        ],
        "@babel/preset-react",
      ],
      plugins: [
        ["@babel/plugin-proposal-private-property-in-object", { loose: true }],
      ],
    },
  },
};
