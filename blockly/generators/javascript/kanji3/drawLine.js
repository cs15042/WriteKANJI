Blockly.JavaScript['drawLine'] = function(block) {
  var value_option = Blockly.JavaScript.valueToCode(block, 'option', Blockly.JavaScript.ORDER_ATOMIC);
  var value_option2 = Blockly.JavaScript.valueToCode(block, 'option2', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_line = block.getFieldValue('line');

  var lineType;
  var code;
  var coordinate, coordinate2;
  var fx, fy, tx, ty;
  var length;
  var cmp = 0;
  var same = 0;
  var rand = Math.random();

  if(value_option2 != ""){//AND条件がある場合
    draw(true);
  }else{//無い場合
    draw(false);    
  }
  return code;

  function defineLineType(){
     if(dropdown_line == "line"){
      if(rand<0.5){
        lineType = "vertical_line";
      }else{
        lineType = "horizontal_line";
      }
    }else if(dropdown_line == "long_line"){
      if(rand<0.5){
        lineType = "long_vertical_line";
      }else{
        lineType = "long_horizontal_line";
      }
    }else if(dropdown_line == "short_line"){
      if(rand<0.5){
        lineType = "short_vertical_line";
      }else{
        lineType = "short_horizontal_line";
      }
    }else{
      lineType = dropdown_line;
    }
    return;
  }

  function defineLength(){
    cmpSameCheck();
    switch(lineType){
      case "horizontal_line":
      case "vertical_line":
        length = 150 + (rand*100);
        break;
      case "long_horizontal_line":
      case "long_vertical_line":
        if(cmp>0){
          length = Number(coordinate[cmp])*1.3;
        }else{
          length = 250 + (rand*100);
        }
        break;
      case "short_horizontal_line":
      case "short_vertical_line":
        if(cmp>0){
          length = Number(coordinate[cmp])*0.7;
        }else{
          length = 50 + (rand*100);
        }
        break;      
    }
    if(same>0){
      length = Number(coordinate[same]);
    }    
  }

  function cmpSameCheck(){
    if(coordinate[3] == "cmp"){
      cmp = 4;
    }else if(coordinate[5] == "cmp"){
      cmp = 6;
    }
    if(coordinate[3] == "same"){
      same = 4;
    }else if(coordinate[5] == "same"){
      same = 6;
    }
    return;
  }

  function atThrough(){
    var mul;
    var x, y;
    var dx, dy;
    x = Number(coordinate[1]);
    y = Number(coordinate[2]);
    
    if(coordinate[0] == "at"){
      mul = 0.5;
    }else{
      mul = rand*(0.9-0.1)+0.1;
    }

    switch(lineType){
      case "horizontal_line":
      case "long_horizontal_line":
      case "short_horizontal_line":
        tx = x+(length*mul);
        fx = x-(length*(1-mul));
        ty = y;
        fy = y;
        break;
      case "vertical_line":
      case "long_vertical_line":
      case "short_vertical_line":
        ty = y+(length*mul);
        fy = y-(length*(1-mul));
        tx = x;
        fx = x;
        break;
    }
    if(coordinate[3] == "no"){//交わらないように(通らないように)
      while(true){
        noOption();
        dx = tx-fx;
        dy = ty-fy; 
        if((y-fy)/(x-fx) != (dy/dx)){//線の傾きが一致しないから交わらない
          break;
        }else if( (fx<tx && (x<fx || tx<x)) || (tx<fx && (x<tx || fx<x)) ){//傾きは一致するけど交わらない
            break;
        }
      }
    }
    return fx+","+fy+","+tx+","+ty;
  }

  function towards(){
    var dx, dy;
    var r;
    fx = Number(coordinate[1]);
    fy = Number(coordinate[2]);
    tx = Number(coordinate[3]);
    ty = Number(coordinate[4]);
    
    dx = tx-fx;
    dy = ty-fy;

    r = Math.sqrt((length**2)/((dx**2)+(dy**2)));
    tx = fx + r*dx;
    ty = fy + r*dy;

    return fx+","+fy+","+tx+","+ty;
  }

  function fromTo(){
    fx = Number(coordinate[0]);
    fy = Number(coordinate[1]);
    tx = Number(coordinate[2]);
    ty = Number(coordinate[3]);
    return fx+","+fy+","+tx+","+ty;
  }

  function noOption(){//if no target option or no option cmp
    if(coordinate[0] == "cmp"){
        cmp = 1;
    }else if(coordinate[0] == "same"){
        same = 1;
    }
    switch(lineType){
      case "horizontal_line":
      case "vertical_line":
        length = 150 + (rand*100);
        break;
      case "long_horizontal_line":
      case "long_vertical_line":
        if(cmp == 1){
          length = Number(coordinate[cmp])*1.3;
        }else{
          length = 250 + (rand*100);
        }
        break;
      case "short_horizontal_line":
      case "short_vertical_line":
        if(cmp == 1){
          length = Number(coordinate[cmp])*0.7;
        }else{
          length = 50 + (rand*100);
        }
    }
    if(same == 1){
      length = Number(coordinate[same]);
    }
    switch(lineType){
      case "horizontal_line":
      case "long_horizontal_line":
      case "short_horizontal_line":
        fx = Math.random()*200;
        fy = Math.random()*400;
        tx = fx + length;
        ty = fy;
        break;
      case "vertical_line":
      case "long_vertical_line":
      case "short_vertical_line":
        fx = Math.random()*400;
        fy = Math.random()*200;
        tx = fx;
        ty = fy + length;
        break;
    }
    return fx+","+fy+","+tx+","+ty;
  }

  function addCondition(){//追加条件があるとき条件に合わせて線を調整する関数//未完成
    var line;
    coordinate2 = value_option2.split(",");
    if(coordinate[0] != "cmp" && coordinate[0] != "same"){
      defineLength();//線の長さの決定
      if(coordinate[0] == "at" || coordinate[0] == "through"){//～に，通るように，通らないように
        line = atThroughAdd();
      }else if(coordinate[0] == "d"){//～に向かって
        line = towardsAdd();
      }else{//～から～まで
        line = fromToAdd();
      }
    }else{//長さの変更のみの場合
      line = fx+","+fy+","+tx+","+ty;
    }


    code = "drawLine("+line+");\n";
    drawLine(line);
    return;
  }

  function draw(add){//線を描く本体関数
    var line;
    defineLineType();//線の種類の決定
    coordinate = value_option.split(",");
    if(value_option != "" && coordinate[0] != "cmp" && coordinate[0] != "same"){
      defineLength();//線の長さの決定
      if(coordinate[0] == "at" || coordinate[0] == "through"){//～に，通るように，通らないように
        line = atThrough();
      }else if(coordinate[0] == "d"){//～に向かって
        line = towards();
      }else{//～から～まで
        line = fromTo();
      }
    }else{//何も指定が無い場合
      line = noOption();
    }
    if(add){
      addCondition();
    }else{
      code = "drawLine("+line+");\n";
      drawLine(line);
    }
    return;
  }
};