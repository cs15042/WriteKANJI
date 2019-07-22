Blockly.Blocks['place'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["1","one"], ["2","two"], ["3","three"], ["4","four"], ["5","five"], ["6","six"], ["7","seven"], ["8","eight"], ["9","nine"]]), "num");
    this.appendDummyInput()
        .appendField("画目の");
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["中央","center"], ["右端","right"], ["左端","left"], ["上端","up"], ["下端","down"]]), "where");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};