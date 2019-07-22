Blockly.Blocks['absolute'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField(new Blockly.FieldDropdown([["まん中","center"], ["右","right"], ["左","left"], ["上","up"], ["下","down"], ["右上","right_up"], ["右下","right_down"], ["左上","left_up"], ["左下","left_down"]]), "absolute");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};