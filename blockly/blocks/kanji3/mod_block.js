Blockly.Blocks['mod'] = {
  init: function() {
    this.appendValueInput("target")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["の少し","little"], ["の","nomal"]]), "degree")
        .appendField(new Blockly.FieldDropdown([["上","up"], ["下","down"], ["右","right"], ["右上","right_up"], ["右下","right_down"], ["左","left"], ["左上","left_up"], ["左下","left_down"]]), "place");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(280);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};