Blockly.JavaScript['sameLength'] = function(block) {
  var value_target = Blockly.JavaScript.valueToCode(block, 'target', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_num = block.getFieldValue('num');

  var code;
  var tmp;
  var fx,fy,tx,ty;
  var dx,dy;
  var length;

  var coordinate = new Array(4);
  for(var i = 0; i < 4; i++) {
    coordinate[i] = "-1";
  }

  if(coordinateLog[Number(dropdown_num)][0] == "-1" || coordinateLog[Number(dropdown_num)][2] == "-1"){
  	code = "alert('存在しない線を指定しています')";
  	return [code, Blockly.JavaScript.ORDER_ATOMIC];
  }

  tmp = coordinateLog[Number(dropdown_num)];
  coordinate = String(tmp).split(",");

  fx = Number(coordinate[0]);
  fy = Number(coordinate[1]);
  tx = Number(coordinate[2]);
  ty = Number(coordinate[3]);
  
  dx = Math.abs(fx-tx);
  dy = Math.abs(fy-ty);

  length = Math.sqrt((dx**2)+(dy**2));

  if(value_target == ""){
  	code = "same," + length;
  }else{
	code = value_target + ",same," + length;
  }
  console.log(code); 
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};