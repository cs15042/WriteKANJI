Blockly.JavaScript['mod'] = function(block) {
  var value_target = Blockly.JavaScript.valueToCode(block, 'target', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_degree = block.getFieldValue('degree');
  var dropdown_place = block.getFieldValue('place');

  var x,y;
  var code;
  var coordinate;
  var mod;

  switch(value_target){
    case "cUp":
      x = 200;
      y = 0;
      break;
    case "cDown":
      x = 200;
      y = 400;
      break;
    case "cRight":
      x = 400;
      y = 200;
      break;
    case "cLeft":
      x = 0;
      y = 200;
      break;
    default:
      coordinate = value_target.split(",");
      x = Number(coordinate[0]);
      y = Number(coordinate[1]);
      break;
  }

  if(dropdown_degree == "nomal"){
    mod = 50;
  }else{
    mod = 20;
  }

  switch(dropdown_place){
  	case "up":
      y -= mod; 
  	  break;
    case "down":
      y += mod;
      break;
    case "right":
      x += mod;
      break;
    case "right_up":
      x += mod;
      y -= mod;
      break;
    case "right_down":
      x += mod;
      y += mod;
      break;
    case "left":
      x -= mod;
      break;
    case "left_up":
      x -= mod;
      y -= mod;
      break;
    case "left_down":
      x -= mod;
      y += mod;
      break;
  }
  code = x + "," + y;

  if(value_target == "error") code = "error";
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};