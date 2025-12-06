let pyodide;
pyodide = await loadPyodide();

const toolbox = document.getElementById('toolbox');
const workspace = Blockly.inject('blocklyDiv', {
    toolbox: toolbox
});

async function runCode() {
    const code = Blockly.Python.workspaceToCode(workspace);
    console.log("Generated code:\n" + code);

    if (!pyodide) {
        alert("Pyodide not loaded yet!");
        return;
    }

    try {
        let result = await pyodide.runPythonAsync(code);
        console.log("Result:", result);
        document.getElementById("outputDiv").textContent = result ?? "None";
    } catch (err) {
        console.error(err);
        document.getElementById("outputDiv").textContent = err;
    }
}

window.runCode = runCode;
