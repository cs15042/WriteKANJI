Blockly.Blocks['at'] = {
  init: function() {
    this.appendValueInput("target")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("に");
    this.setInputsInline(true);
    this.setOutput(true, "first");
    this.setColour(120);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};