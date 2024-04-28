import * as Blockly from "blockly";
import { toolboxCategories, createPlayground } from "@blockly/dev-tools";
import { MultiselectPlugin, PluginFlags } from "@rshaker/multiselect-blockly";

function createWorkspace(blocklyDiv: HTMLElement, options: Blockly.BlocklyOptions): Blockly.WorkspaceSvg {
    const pluginOptions: PluginFlags = {
        copyPasteToStorage: true,     // Use local storage to persist copied blocks between sessions and across tabs
        copyPasteToClipboard: true,   // `false` prevents use of system clipboard
        hideDisabledMenuItems: false, // `false` greys out disabled menu options, `true` hides them completely
        enableBlockMenu: true,        // Adds a custom context menu for blocks (only when multiselect is active)
        blockScope: {
            // comment: true,
            // copy: true,
            // deletable: true,
            // delete: true,
            // duplicate: true,
            // editable: true,
            // expand: true,
            // help: true,
            // inline: true,
            // movable: true,
        },
        enableWorkspaceMenu: true, // Replaces Blockly's default workspace context menu
        workspaceScope: {
            // cleanup: true,
            // delete: true,
            // expand: true,
            // help: true,
            // paste: true,
            // redo: true,
            // reset: true,
            // select: true,
            // undo: true,
        },
        multiselectScope: {
            // cleanup: true,
            // comment: true,
            // copy: true,
            // deletable: true,
            // delete: true,
            // duplicate: true,
            // editable: true,
            // expand: true,
            // inline: true,
            // movable: true,
            // paste: true,
            // redo: true,
            // reset: true,
            // select: true,
            // undo: true,
            // undeletable: true,
            // uneditable: true,
            // unmovable: true,
        },
    };
    const workspace = Blockly.inject(blocklyDiv, options);
    const plugin = new MultiselectPlugin(pluginOptions, workspace);
    plugin.init();

    return workspace;
}

document.addEventListener("DOMContentLoaded", function () {
    const defaultOptions = {
        toolbox: toolboxCategories,
    };
    const blocklyDiv = document.getElementById("blocklyDiv");
    if (blocklyDiv) {
        createPlayground(blocklyDiv, createWorkspace, defaultOptions);
    }
});
