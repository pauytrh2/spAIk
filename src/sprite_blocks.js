Blockly.Blocks['sprite_create'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("create sprite named")
            .appendField(new Blockly.FieldTextInput("hero"), "NAME");
        this.appendValueInput("X")
            .setCheck("Number")
            .appendField("x");
        this.appendValueInput("Y")
            .setCheck("Number")
            .appendField("y");
        this.appendValueInput("COLOR")
            .setCheck("String")
            .appendField("color");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(10);
    }
};

Blockly.Python['sprite_create'] = function (block) {
    const name = block.getFieldValue("NAME");
    const x = Blockly.Python.valueToCode(block, "X", Blockly.Python.ORDER_ATOMIC) || 0;
    const y = Blockly.Python.valueToCode(block, "Y", Blockly.Python.ORDER_ATOMIC) || 0;
    const color = Blockly.Python.valueToCode(block, "COLOR", Blockly.Python.ORDER_ATOMIC) || "'red'";

    return `import game\ngame.createSprite("${name}", ${x}, ${y}, ${color})\n`;
};

Blockly.Blocks['sprite_move'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("move sprite")
            .appendField(new Blockly.FieldTextInput("hero"), "NAME");
        this.appendValueInput("DX")
            .setCheck("Number")
            .appendField("dx");
        this.appendValueInput("DY")
            .setCheck("Number")
            .appendField("dy");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(10);
    }
};

Blockly.Python['sprite_move'] = function (block) {
    const name = block.getFieldValue("NAME");
    const dx = Blockly.Python.valueToCode(block, "DX", Blockly.Python.ORDER_ATOMIC) || 0;
    const dy = Blockly.Python.valueToCode(block, "DY", Blockly.Python.ORDER_ATOMIC) || 0;

    return `import game\ngame.moveSprite("${name}", ${dx}, ${dy})\n`;
};

Blockly.Blocks['sprite_set_position'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("set sprite")
            .appendField(new Blockly.FieldTextInput("hero"), "NAME")
            .appendField("position");
        this.appendValueInput("X")
            .setCheck("Number")
            .appendField("x");
        this.appendValueInput("Y")
            .setCheck("Number")
            .appendField("y");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(10);
    }
};

Blockly.Python['sprite_set_position'] = function (block) {
    const name = block.getFieldValue("NAME");
    const x = Blockly.Python.valueToCode(block, "X", Blockly.Python.ORDER_ATOMIC) || 0;
    const y = Blockly.Python.valueToCode(block, "Y", Blockly.Python.ORDER_ATOMIC) || 0;

    return `import game\ngame.setSpritePosition("${name}", ${x}, ${y})\n`;
};

Blockly.Blocks['sprite_set_color'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("set sprite")
            .appendField(new Blockly.FieldTextInput("hero"), "NAME")
            .appendField("color");
        this.appendValueInput("COLOR")
            .setCheck("String")
            .appendField("to");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(10);
    }
};
