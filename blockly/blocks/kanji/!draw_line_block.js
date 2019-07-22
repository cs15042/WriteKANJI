Blockly.Blocks['drawline'] = {
  init: function() {
    this.appendValueInput("")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("を引く");
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};