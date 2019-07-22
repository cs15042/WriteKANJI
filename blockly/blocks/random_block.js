Blockly.Blocks['random'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("ランダム");
    this.appendValueInput("min")
        .setCheck("Number")
        .appendField("最小");
    this.appendValueInput("max")
        .setCheck("Number")
        .appendField("最大");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("2数間の範囲でランダムな整数を取得します");
 this.setHelpUrl("");
  }
};