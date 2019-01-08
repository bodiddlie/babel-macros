const { createMacro, MacroError } = require('babel-plugin-macros');

module.exports = createMacro(macro);

function macro({ babel: { types: t }, references: { default: calls } }) {
  calls.forEach(({ parentPath }) => {
    if (parentPath.type !== 'CallExpression') {
      const { line } = parentPath.node.loc.start;
      throw new MacroError(`Invalid input given to test.macro at line ${line}`);
    }

    const value = parentPath.node.arguments[0];
    const test = t.unaryExpression('!', value);
    const body = t.returnStatement(t.nullLiteral());
    const consequent = t.blockStatement([body]);
    const ifStatement = t.ifStatement(test, consequent);
    parentPath.parentPath.replaceWith(ifStatement);
  });
}
