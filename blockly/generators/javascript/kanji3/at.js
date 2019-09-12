Blockly.JavaScript['at'] = function(block) {
  var value_target = Blockly.JavaScript.valueToCode(block, 'target', Blockly.JavaScript.ORDER_ATOMIC);
  var coordinate;
  var x,y;
  var code;

  coordinate = (String(value_target)).split(",");
  x = Number(coordinate[0]);
  y = Number(coordinate[1]);

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
    default:
      break;
  }

  code = "at,"+x+","+y;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};