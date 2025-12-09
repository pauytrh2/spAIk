let pyodide;
pyodide = await loadPyodide();
pyodide.registerJsModule("game", {
    createSprite,
    moveSprite,
    setSpritePosition,
    setSpriteColor,
});

const toolbox = document.getElementById('toolbox');
const workspace = Blockly.inject('blocklyDiv', {
    toolbox: toolbox
});

const stage = document.getElementById("stage");
const sprites = {};

function createSprite(name, x = 0, y = 0, color = "red") {
    if (sprites[name]) return sprites[name];

    const el = document.createElement("div");
    el.className = "character";
    el.style.left = x + "px";
    el.style.top = y + "px";
    el.style.backgroundColor = color;
    stage.appendChild(el);

    sprites[name] = el;
    return el;
}

function moveSprite(name, dx, dy) {
    const s = sprites[name];
    if (!s) return;

    const x = parseInt(s.style.left) + dx;
    const y = parseInt(s.style.top) + dy;
    s.style.left = x + "px";
    s.style.top = y + "px";
}

function setSpritePosition(name, x, y) {
    const s = sprites[name];
    if (!s) return;
    s.style.left = x + "px";
    s.style.top = y + "px";
}

function setSpriteColor(name, color) {
    const s = sprites[name];
    if (!s) return;
    s.style.backgroundColor = color;
}

async function runCode(mancode) {
    let code;
    if (!mancode) {
        code = Blockly.Python.workspaceToCode(workspace);
        console.log("Generated code:\n" + code);
    } else {
        code = mancode;
        console.log("Manual code:\n" + code);
    }

    if (!pyodide) {
        alert("Pyodide not loaded yet!");
        return;
    }

    try {
        let result = await pyodide.runPythonAsync(code);
        console.log("Result:", result);
    } catch (err) {
        console.error(err);
    }
}

window.runCode = runCode;
