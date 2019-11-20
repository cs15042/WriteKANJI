Blockly.Blocks['fromTo'] = {
  init: function() {
    this.appendValueInput("from")
        .setCheck(null);
    this.appendValueInput("to")
        .setCheck(null)
        .appendField("から");
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["まで","until"], ["のほうへ","towards"]]), "direction")
    this.setInputsInline(true);
    this.setOutput(true, "first");
    this.setColour(120);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};