Blockly.Blocks['absolute_place'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("キャンバスの")
        .appendField(new Blockly.FieldDropdown([["中央","center"], ["右上","right_up"], ["右下","right_down"], ["左上","left_up"], ["左下","left_down"]]), "place");
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};