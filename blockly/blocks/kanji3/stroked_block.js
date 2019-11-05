Blockly.Blocks['stroked'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["1","1"], ["2","2"], ["3","3"], ["4","4"], ["5","5"], ["6","6"], ["7","7"], ["8","8"], ["9","9"], ["10","10"]]), "num")
        .appendField("画目");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(280);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};