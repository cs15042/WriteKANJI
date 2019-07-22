Blockly.JavaScript['relation'] = function(block) {
  var dropdown_stroke1 = block.getFieldValue('stroke1');
  var dropdown_stroke2 = block.getFieldValue('stroke2');
  var dropdown_option = block.getFieldValue('option');
  
  var code;
  var stroke1 = coordinateLog[Number(dropdown_stroke1)];
  var stroke2 = coordinateLog[Number(dropdown_stroke2)];
  var coordinate;
  var ax,ay,bx,by,cx,cy,dx,dy;
  var acx,acy,bunbo,rTmp,sTmp,r,s;
  var px,py;

  var abx,aby,cdx,cdy;

  coordinate = (String(stroke1)).split(",");
  ax = Number(coordinate[0]);
  ay = Number(coordinate[1]);
  bx = Number(coordinate[2]);
  by = Number(coordinate[3]);

  coordinate = (String(stroke2)).split(",");
  cx = Number(coordinate[0]);
  cy = Number(coordinate[1]);
  dx = Number(coordinate[2]);
  dy = Number(coordinate[3]);

  if(ax == -1 || cx == -1){
    code = "alert('存在しない線を指定しています')";
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
  }

  if(dropdown_option == "between"){
    abx = (ax+bx)/2;
    aby = (ay+by)/2;
    cdx = (cx+dx)/2;
    cdy = (cy+dy)/2;

    px = (abx+cdx)/2;
    py = (aby+cdy)/2;
  }else{
    acx = cx-ax;
    acy = cy-ay;
    bunbo = (bx-ax)*(dy-cy)-(by-ay)*(dx-cx);

    rTmp = (dy-cy)*acx-(dx-cx)*acy;
    sTmp = (by-ay)*acx-(bx-ax)*acy;

    r = rTmp/bunbo;
    s = sTmp/bunbo;

    px = ax+r*(bx-ax);
    py = ay+r*(by-ay);

    if(bunbo == 0){
      code = "alert('2直線は平行です')";
      if(rTmp == 0 && sTmp == 0){
        code = "alert('2直線は重なり合っています')";
      }
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
    }

    if(r > 1 || r < 0 || s > 1 || s < 0){
    code = "alert('2直線は交わりません')";
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
    }
  }
  code = px + "," + py;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};