Blockly.JavaScript['place'] = function(block) {
  var dropdown_num = block.getFieldValue('num');
  var dropdown_where = block.getFieldValue('where');
  // TODO: Assemble JavaScript into code variable.
  var code = "window.alert('storokes = " + dropdown_num + ", place = " + dropdown_where + "')";
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};