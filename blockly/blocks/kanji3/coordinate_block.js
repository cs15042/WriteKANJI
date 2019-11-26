Blockly.Blocks['coordinate'] = {
  init: function() {
    this.appendValueInput("option")
        .setCheck(null);
    this.appendDummyInput()
    	.appendField(new Blockly.FieldDropdown([["の","no"],["　","nashi"]]), "no")
        .appendField(new Blockly.FieldDropdown([["まん中","center"], ["上のはし","up"], ["下のはし","down"], ["右のはし","right"], ["右上","right_up"], ["右下","right_down"], ["左のはし","left"], ["左上","left_up"], ["左下","left_down"]]), "place");
    this.setOutput(true, "inside");
    this.setColour(280);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};