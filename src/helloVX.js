const vscode = require('vscode');
module.exports = function(context) {
    // 注册HelloWord命令
    context.subscriptions.push(vscode.commands.registerCommand('extension.helloVX', () => {
        vscode.window.showInformationMessage('Hello VX！');
    }));
};