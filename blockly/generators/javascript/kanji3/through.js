Blockly.JavaScript['through'] = function(block) {
  var value_target = Blockly.JavaScript.valueToCode(block, 'target', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_through = block.getFieldValue('through');
  var coordinate;
  var x,y;
  var code;

  coordinate = (String(value_target)).split(",");
  x = Number(coordinate[0]);
  y = Number(coordinate[1]);

  code = "through,"+x+","+y+","+dropdown_through;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};