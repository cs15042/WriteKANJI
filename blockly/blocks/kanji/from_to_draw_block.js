Blockly.Blocks['from_to_draw'] = {
  init: function() {
    this.appendValueInput("from")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("から");
    this.appendValueInput("to")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("まで線を引く");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(100);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};