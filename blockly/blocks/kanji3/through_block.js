Blockly.Blocks['through'] = {
  init: function() {
    this.appendValueInput("target")
        .setCheck(null);
    this.appendDummyInput()
 	   	.appendField("と")
        .appendField(new Blockly.FieldDropdown([["交わるように","yes"], ["交わらないように","no"]]), "through");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(90);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};