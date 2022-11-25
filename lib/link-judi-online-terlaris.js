'use babel';

import LinkJudiOnlineTerlarisView from './link-judi-online-terlaris-view';
import { CompositeDisposable } from 'atom';

export default {

  linkJudiOnlineTerlarisView: null,
  modalPanel: null,
  subscriptions: null,

  activate(state) {
    this.linkJudiOnlineTerlarisView = new LinkJudiOnlineTerlarisView(state.linkJudiOnlineTerlarisViewState);
    this.modalPanel = atom.workspace.addModalPanel({
      item: this.linkJudiOnlineTerlarisView.getElement(),
      visible: false
    });

    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'link-judi-online-terlaris:toggle': () => this.toggle()
    }));
  },

  deactivate() {
    this.modalPanel.destroy();
    this.subscriptions.dispose();
    this.linkJudiOnlineTerlarisView.destroy();
  },

  serialize() {
    return {
      linkJudiOnlineTerlarisViewState: this.linkJudiOnlineTerlarisView.serialize()
    };
  },

  toggle() {
    console.log('LinkJudiOnlineTerlaris was toggled!');
    return (
      this.modalPanel.isVisible() ?
      this.modalPanel.hide() :
      this.modalPanel.show()
    );
  }

};
