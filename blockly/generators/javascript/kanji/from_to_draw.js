Blockly.JavaScript['from_to_draw'] = function(block) {
  var from_value = Blockly.JavaScript.valueToCode(block, 'from', Blockly.JavaScript.ORDER_NONE);
  var to_value = Blockly.JavaScript.valueToCode(block, 'to', Blockly.JavaScript.ORDER_NONE);
  // TODO: Assemble JavaScript into code variable.
  if (to_value == ""){
  	var code = "drawLine(" + from_value + ");\n";
  }else if(from_value == ""){
  	var code = "drawLine(" + to_value + ");\n";
  }else{
  	var code = "drawLine(" + from_value + "," + to_value + ");\n";
  }
  return code;
};
