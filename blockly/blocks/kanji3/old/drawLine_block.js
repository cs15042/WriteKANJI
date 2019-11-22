Blockly.Blocks['drawLine'] = {
  init: function() {
  	this.appendValueInput("option")
        .setCheck(null);
    this.appendValueInput("option2")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["線","line"], ["長い線","long_line"], ["短い線","short_line"], ["縦線","vertical_line"], ["長い縦線","long_vertical_line"], ["短い縦線","short_vertical_line"], ["横線","horizontal_line"], ["長い横線","long_horizontal_line"], ["短い横線","short_horizontal_line"]]), "line")
        .appendField("を引く");
    this.setColour(240);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};