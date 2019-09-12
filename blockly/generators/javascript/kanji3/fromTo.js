Blockly.JavaScript['fromTo'] = function(block) {
  var value_from = Blockly.JavaScript.valueToCode(block, 'from', Blockly.JavaScript.ORDER_ATOMIC);
  var value_to = Blockly.JavaScript.valueToCode(block, 'to', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_direction = block.getFieldValue('direction');

  var code;
  var coordinate;
  var fx, fy, tx, ty;


  if(value_from == "up" || value_from == "down" || value_from == "right" || value_from == "left" || value_from == "right_up" || value_from == "right_down" || value_from == "left_up" || value_from == "left_down" || value_from == "cUp" || value_from == "cDown" || value_from == "cRight" || value_from == "cLeft"){
    switch(value_from){
      case "up":
      case "cUp":
        fx = 200;
        fy = 0;
        break;
      case "down":
      case "cDwon":
        fx = 200;
        fy = 400;
        break;
      case "right":
      case "cRight":
        fx = 400;
        fy = 200;
        break;
      case "left":
      case "cLeft":
        fx = 0;
        fy = 200;
        break;
      case "right_up":
        fx = 400;
        fy = 0;
        break;
      case "right_down":
        fx = 400;
        fy = 400;
        break;
      case "left_up":
        fx = 0;
        fy = 0;
        break;
      case "left_down":
        fx = 0;
        fy = 400;
        break;
    }
    value_from = fx + "," + fy;
  }

  if(value_to == "up" || value_to == "down" || value_to == "right" || value_to == "left" || value_to == "right_up" || value_to == "right_down" || value_to == "left_up" || value_to == "left_down" || value_to == "cUp" || value_to == "cDown" || value_to == "cRight" || value_to == "cLeft"){
    coordinate = value_from.split(",");
    fx = Number(coordinate[0]);
    fy = Number(coordinate[1]);

    switch(value_to){
      case "up":
      case "cUp":
        tx = fx;
        ty = 0;
        break;
      case "down":
      case "cDown":
        tx = fx;
        ty = 400;
        break;
      case "right":
      case "cRight":
        tx = 400;
        ty = fy;
        break;
      case "left":
      case "cLeft":
        tx = 0;
        ty = fy;
        break;
      case "right_up":
        tx = fx + 400;
        ty = fy - 400;
        break;
      case "right_down":
        tx = fx + 400;
        ty = fy + 400;
        break;
      case "left_up":
        tx = fx - 400;
        ty = fy - 400;
        break;
      case "left_down":
        tx = fx - 400;
        ty = fy + 400;
        break;
    }
    value_to = tx + "," + ty;
  }

  if(dropdown_direction == "towards"){
  	code =  "d,"+value_from+","+value_to;
  }else{
  	code = value_from+","+value_to;
  }

  return [code, Blockly.JavaScript.ORDER_ATOMIC];

};