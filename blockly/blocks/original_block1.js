Blockly.Blocks['original_block1'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("オリジナルブロックその１");
    this.appendValueInput("value_name")
        .setCheck("Number")
        .appendField("引数");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("オリジナルブロックの説明文");
 this.setHelpUrl("");
  }
};