const { RuleTester } = require("eslint");

const rule = require("./rule");

const t = new RuleTester({ env: { es2022: true } });

t.run("avoid-then", rule, {
  valid: [
    {
      code: "const a = b.then(f);",
    },
  ],

  invalid: [
    {
      code: "const a = b\n  .then(f);",
      errors: [{ message: "Prefer `await` instead of `then`." }],
    },
  ],
});
