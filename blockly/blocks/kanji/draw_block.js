Blockly.Blocks['draw'] = {
  init: function() {
    this.appendValueInput("line")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("を引く");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(100);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};