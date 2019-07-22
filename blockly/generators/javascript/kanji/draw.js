Blockly.JavaScript['draw'] = function(block) {
  var value = Blockly.JavaScript.valueToCode(block, 'line', Blockly.JavaScript.ORDER_NONE);
  // TODO: Assemble JavaScript into code variable.
  // var code = value_line;
  var code = "drawLine(" + value + ");\n";
  return code;
};
