Blockly.Blocks['absolute_place'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("画面の");
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["中央","center"], ["上側","up"], ["下側","down"], ["右側","right"], ["左側","left"]]), "place");
    this.appendStatementInput("block")
        .setCheck(null);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(300);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};