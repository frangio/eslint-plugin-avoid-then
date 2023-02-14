module.exports = {
  create: context => {
    const s = context.getSourceCode();
    return {
      MemberExpression(node) {
        if (
          node.property.type === 'Identifier' &&
          node.property.name === 'then' &&
          node.parent.type === 'CallExpression'
        ) {
          const parent = node.parent;
          const start = s.getLocFromIndex(parent.range[0]);
          const end = s.getLocFromIndex(parent.range[1]);
          if (start.line !== end.line) {
            context.report({
              node: parent,
              message: 'Prefer `await` instead of `then`.',
            });
          }
        }
      },
    };
  },
};
