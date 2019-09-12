Blockly.JavaScript['absolute_place'] = function(block) {
  var dropdown_place = block.getFieldValue('place');
  // TODO: Assemble JavaScript into code variable.
  var place;
  switch (dropdown_place){
  	case "center":
  		place = "200,200";
  		break;
  	case "right_up":
  		place = "300,100";
  		break;
  	case "right_down":
  		place = "300,300"
  		break;
  	case "left_up":
  		place = "100,100";
  		break;
  	case "left_down":
  		place = "100,300";
  		break;
  }
  var code = place;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};