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

  coordinate = value_option.split(",");
  coordinate2 = value_option2.split(",");

  console.log("argument1:"+value_option);
  console.log("argument2:"+value_option2);

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

  function cmpSameCheck(c){
    cmp = 0;
    same = 0;
  	for(var i=0; i<10; i++){
  		if(c[i] == "cmp"){
  			cmp = i+1;
  		}
  		if(c[i] == "same"){
  			same = i+1;
  		}
  	}
    return;
  }

  function defineLength(){
    cmpSameCheck(coordinate);
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

  function defineLengthAdd(){
    var result;
    cmpSameCheck(coordinate2);
    switch(lineType){
      case "horizontal_line":
      case "vertical_line":
        result = 150 + (rand*100);
        break;
      case "long_horizontal_line":
      case "long_vertical_line":
        if(cmp>0){
          result = Number(coordinate2[cmp])*1.3;
        }else{
          result = 250 + (rand*100);
        }
        break;
      case "short_horizontal_line":
      case "short_vertical_line":
        if(cmp>0){
          result = Number(coordinate2[cmp])*0.7;
        }else{
          result = 50 + (rand*100);
        }
        break;      
    }
    if(same>0){
      result = Number(coordinate2[same]);
    }
    return result;
  }

  function atThrough(){
    var mul;
    var ax, ay, bx, by;
    var dx, dy;
    var x, y;
    ax = Number(coordinate[1]);
    ay = Number(coordinate[2]);
    bx = Number(coordinate[3]);
    by = Number(coordinate[4]);

    if(coordinate[0] == "at"){//～に
      mul = 0.5;
    }else{//～と交わるように(coordinate[0] == "through")
      mul = rand*(0.9-0.1)+0.1;
    }

    if(bx){//n画目と交わるように
      if(bx>ax){
        x = ax+(bx-ax)*mul;
      }else{
        x = ax+(ax-bx)*mul;
      }
      if(by>ay){
        y = ay+(by-ay)*mul;
      }else{
        y = ay+(ay-by)*mul;
      }
    }else{
      x = ax;
      y = ay;
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
    if(coordinate[5] == "no"){//交わらないように(通らないように)
      if(bx){
        while(judgeIentersected(ax,ay,bx,by,fx,fy,tx,ty)){
          noOption();
        }
      }else{
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

  function noOption(){//if no target option or no option cmp and same
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


  function judgeIentersected(ax, ay, bx, by, cx, cy, dx, dy){//二線分交差判定関数
    var ta = (cx - dx) * (ay - cy) + (cy - dy) * (cx - ax);
    var tb = (cx - dx) * (by - cy) + (cy - dy) * (cx - bx);
    var tc = (ax - bx) * (cy - ay) + (ay - by) * (ax - cx);
    var td = (ax - bx) * (dy - ay) + (ay - by) * (ax - dx);
    return tc * td <= 0 && ta * tb <= 0;
  }

  function atThroughAdd(){
    var mul;
    var ax, ay, bx, by;
    var dx, dy;
    var x, y;
    ax = Number(coordinate2[1]);
    ay = Number(coordinate2[2]);
    bx = Number(coordinate2[3]);
    by = Number(coordinate2[4]);

    if(coordinate2[0] == "at"){//～に
      if(judgeIentersected(ax,ay,ax,ay,fx,fy,tx,ty)){
        //do nothing
      }else{

      }
    }else{//(coordinate2[0] == "through")
      if(coordinate2[5] == "yes"){//～と交わるように
        while(!judgeIentersected(ax,ay,bx,by,fx,fy,tx,ty)){
          changeLength("longer");
        }
      }else{//交わらないように(通らないように)
        while(judgeIentersected(ax,ay,bx,by,fx,fy,tx,ty)){
          changeLength("shorter");
        }
      }
    }

    return fx+","+fy+","+tx+","+ty;
  }

  function changeLength(sel){
    var cx, cy;
    var dx, dy, ndx, ndy;
    var newLength = length;

    cx = (fx+tx)/2;
    cy = (fy+ty)/2;

    dx = tx-fx;
    dy = fy-ty;

    switch(sel){
      case "longer":
        newLength += 100;
        break;
      case "shorter":
        newLength -= 100;
        break;
      default:
        newLength = sel;
        break;
    }

    ndx = (newLength*dx)/length;
    ndy = (newLength*dy)/length;

    fx = cx - ndx/2;
    fy = cy + ndy/2;
    tx = cx + ndx/2;
    ty = cy - ndy/2;

    length = newLength;

    return fx+","+fy+","+tx+","+ty;
  }

  function addCondition(){//追加条件があるとき条件に合わせて線を調整する関数//未完成
    var line;
    var newLength = defineLengthAdd();//線の長さの決定
    if(coordinate2[0] != "cmp" && coordinate2[0] != "same"){
      if(coordinate2[0] == "at" || coordinate2[0] == "through"){//～に，通るように，通らないように
        line = atThroughAdd();
      }else if(coordinate2[0] == "d"){//～に向かって
        line = towardsAdd();
      }else{//～から～まで
        line = fromToAdd();
      }
    }else{//長さの変更のみの場合
      line = changeLength(newLength);
    }
    code = "drawLine("+line+");\n";
    drawLine(line);
    return;
  }

  function draw(add){//線を描く本体関数
    var line;
    defineLineType();//線の種類の決定
    defineLength();//線の長さの決定
    if(value_option != "" && coordinate[0] != "cmp" && coordinate[0] != "same"){
      if(coordinate[0] == "at" || coordinate[0] == "through"){//～に，通るように，通らないように
        line = atThrough();
      }else if(coordinate[0] == "d"){//～に向かって
        line = towards();
      }else{//～から～まで
        line = fromTo();
      }
    }else{//長さ以外何も指定が無い場合
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