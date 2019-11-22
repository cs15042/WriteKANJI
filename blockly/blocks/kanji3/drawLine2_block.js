Blockly.Blocks['drawLine2'] = {
  init: function() {
    this.appendValueInput("option")
        .setCheck(["first", "second"]);
    this.appendValueInput("option2")
        .setCheck(["second"]);
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["線","line"], ["長い線","long_line"], ["短い線","short_line"], ["たて線","vertical_line"], ["長いたて線","long_vertical_line"], ["短いたて線","short_vertical_line"], ["横線","horizontal_line"], ["長い横線","long_horizontal_line"], ["短い横線","short_horizontal_line"]]), "line")
        .appendField("を")
        .appendField(new Blockly.FieldDropdown([["引く","nomal"], ["引いて上にはねる","up"], ["引いて下にはねる","down"], ["引いて右にはねる","right"], ["引いて左にはねる","left"]]), "brushstroke");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};