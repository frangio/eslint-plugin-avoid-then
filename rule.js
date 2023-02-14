module.exports = {
  create: context => {
    const s = context.getSourceCode();
    return {
      MemberExpression(node) {
        const start = s.getLocFromIndex(node.range[0]);
        const end = s.getLocFromIndex(node.range[1]);
        if (start.line !== end.line) {
          context.report({ node, message: "Prefer `await` instead of `then`." });
        }
      },
    };
  },
};
