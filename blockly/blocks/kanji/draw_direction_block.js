Blockly.Blocks['draw_direction'] = {
  init: function() {
    this.appendValueInput("from")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("から");
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["右上","r_up"], ["右下","r_down"], ["左上","l_up"], ["左下","l_down"]]), "direction");
    this.appendDummyInput()
        .appendField("へ向かって斜線を引く")
        .appendField("");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(100);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};