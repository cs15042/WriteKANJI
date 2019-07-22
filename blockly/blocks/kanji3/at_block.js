Blockly.Blocks['at'] = {
  init: function() {
    this.appendValueInput("target")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("に");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(90);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};