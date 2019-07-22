Blockly.Blocks['little'] = {
  init: function() {
    this.appendValueInput("place")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("より少し")
        .appendField(new Blockly.FieldDropdown([["上","up"], ["下","down"], ["右","right"], ["左","left"]]), "direction");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};