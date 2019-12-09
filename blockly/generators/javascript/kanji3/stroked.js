Blockly.JavaScript['stroked'] = function(block) {
  var dropdown_num = block.getFieldValue('num');
  var code;

  code = coordinateLog[Number(dropdown_num)];
  if(coordinateLog[Number(dropdown_num)][0] == "-1" || coordinateLog[Number(dropdown_num)][2] == "-1"){
  	code = "NaN";
  }
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};