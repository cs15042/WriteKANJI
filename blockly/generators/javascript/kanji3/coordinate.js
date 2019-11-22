Blockly.JavaScript['coordinate'] = function(block) {
  var value_option = Blockly.JavaScript.valueToCode(block, 'option', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_no = block.getFieldValue("no");
  var dropdown_place = block.getFieldValue("place");
  var code;
  var place;
  var fx,fy,tx,ty;
  var x,y;

  var coordinate = new Array(4);
  for(var i = 0; i < 4; i++) {
    coordinate[i] = "-1";
  }

  if(value_option == "canvas"){
    if(dropdown_no == "nashi"){
      code = "error";
      return [code, Blockly.JavaScript.ORDER_ATOMIC];
    }
    switch (dropdown_place){
      case "center":
        place = "200,200";
        break;
      case "up":
        place = "cUp";
        break;
      case "down":
        place = "cDown";
        break;
      case "right":
        place = "cRight";
        break;
      case "right_up":
        place = "400,0";
        break;
      case "right_down":
        place = "400,400";
        break;
      case "left":
        place = "cLeft";
        break;
      case "left_up":
        place = "0,0";
        break;
      case "left_down":
        place = "0,400";
        break;
    }
  }else if(value_option == ""){// no option
    if(dropdown_no == "no"){
      code = "error";
      return [code, Blockly.JavaScript.ORDER_ATOMIC];
    }
    switch (dropdown_place){
      case "center":
        place = "";
        break;
      case "up":
        place = "up";
        break;
      case "down":
        place = "down";
        break;
      case "right":
        place = "right";
        break;
      case "right_up":
        place = "right_up";
        break;
      case "right_down":
        place = "right_down";
        break;
      case "left":
        place = "left";
        break;
      case "left_up":
        place = "left_up";
        break;
      case "left_down":
        place = "left_down";
        break;
    }
  }else if(value_option == "alert('存在しない線を指定しています')"){
    place = value_option;
  }else{//n画目の～
    if(dropdown_no == "nashi"){
      code = "error";
      return [code, Blockly.JavaScript.ORDER_ATOMIC];
    }
    coordinate = value_option.split(",");
    fx = Number(coordinate[0]);
    fy = Number(coordinate[1]);
    tx = Number(coordinate[2]);
    ty = Number(coordinate[3]);
    switch (dropdown_place){
      case "center":
        x = (fx+tx)/2;
        y = (fy+ty)/2;
        place = x+","+y;
        break;
      case "up":
        if(fy < ty){
          y = fy;
          x = fx;
        }else if(ty > fy){
          y = ty;
          x = tx;
        }else{
        	code = "error";
        	return [code, Blockly.JavaScript.ORDER_ATOMIC];
        }
        place = x+","+y;
        break;
      case "down":
        if(fy > ty){
          y = fy;
          x = fx;
        }else if(ty > fy){
          y = ty;
          x = tx;
        }else{
        	code = "error";
        	return [code, Blockly.JavaScript.ORDER_ATOMIC];
        }
        place = x+","+y;
        break;
      case "right":
        if(fx > tx){
          x = fx;
          y = fy;
        }else if(tx > fx){
          x = tx;
          y = ty;
        }else{
        	code = "error";
        	return [code, Blockly.JavaScript.ORDER_ATOMIC];
        }
        place = x+","+y;
        break;
      case "right_up":
        place = "400,0";
        break;
      case "right_down":
        place = "400,400";
        break;
      case "left":
        if(fx > tx){
          x = tx;
          y = ty;
        }else if(tx > fx){
          x = fx;
          y = fy;
        }else{
        	code = "error";
        	return [code, Blockly.JavaScript.ORDER_ATOMIC];
        }
        place = x+","+y;
        break;
      case "left_up":
        place = "0,0";
        break;
      case "left_down":
        place = "0,400";
        break;
    }
  }
  code = place;

  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};