Blockly.Blocks['relation'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["1","1"], ["2","2"], ["3","3"], ["4","4"], ["5","5"], ["6","6"], ["7","7"], ["8","8"], ["9","9"], ["10","10"]]), "stroke1")
        .appendField("画目と")
        .appendField(new Blockly.FieldDropdown([["1","1"], ["2","2"], ["3","3"], ["4","4"], ["5","5"], ["6","6"], ["7","7"], ["8","8"], ["9","9"], ["10","10"]]), "stroke2")
        .appendField("画目の")
        .appendField(new Blockly.FieldDropdown([["交わった点","intersection"], ["あいだ","between"]]), "option");
    this.setOutput(true, null);
    this.setColour(280);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};