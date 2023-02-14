const { RuleTester } = require("eslint");

const rule = require("./rule");

const t = new RuleTester({ env: { es2022: true } });

t.run("avoid-then", rule, {
  valid: [
    {
      code: "const a = b.then(f);",
    },
    {
      code: "const a = b\n.map(x =>\n  f(x));",
    },
  ],

  invalid: [
    {
      code: "const a = b\n  .then(f);",
      errors: [{ message: "Prefer `await` instead of `then`." }],
    },
    {
      code: "const a = b.then(\nf);",
      errors: [{ message: "Prefer `await` instead of `then`." }],
    },
  ],
});
