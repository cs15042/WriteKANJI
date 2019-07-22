Blockly.Blocks['fromTo'] = {
  init: function() {
    this.appendValueInput("from")
        .setCheck(null);
    this.appendValueInput("to")
        .setCheck(null)
        .appendField("から");
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["まで","until"], ["に向かって","towards"]]), "direction")
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(120);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};