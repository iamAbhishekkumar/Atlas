import * as vscode from 'vscode';
import { SidebarProvider } from './sideBar';
export function activate(context: vscode.ExtensionContext) {
	
	console.log('Congratulations, your extension "atlas" is now active!');
	let disposable = vscode.commands.registerCommand('atlas.helloWorld', () => {
		vscode.window.showInformationMessage('Hello World from Atlas!');
	});
	context.subscriptions.push(disposable);

	const sidebarProvider = new SidebarProvider(context.extensionUri);
	context.subscriptions.push(
	  vscode.window.registerWebviewViewProvider(
		"atlas-sidebar",
		sidebarProvider
	  )
	);
  
}

// this method is called when your extension is deactivated
export function deactivate() {}
