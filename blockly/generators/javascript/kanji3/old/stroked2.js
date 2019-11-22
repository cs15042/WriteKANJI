Blockly.JavaScript['stroked2'] = function(block) {
  var dropdown_num = block.getFieldValue('num');
  var code;

  code = coordinateLog[Number(dropdown_num)];
  if(coordinateLog[Number(dropdown_num)][0] == "-1" || coordinateLog[Number(dropdown_num)][2] == "-1"){
  	code = "alert('存在しない線を指定しています')";
  }
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};