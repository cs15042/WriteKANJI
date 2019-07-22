Blockly.Blocks['coordinate'] = {
  init: function() {
    this.appendValueInput("option")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["真ん中","center"], ["上端","up"], ["下端","down"], ["右端","right"], ["右上","right_up"], ["右下","right_down"], ["左端","left"], ["左上","left_up"], ["左下","left_down"]]), "place");
    this.setOutput(true, null);
    this.setColour(0);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};