import Phaser from 'phaser';

class BaseScene extends Phaser.Scene {
  constructor(key, config) {
    super(key);
    this.config = config;
    this.screenCenter = [1200 / 2, 600 / 2];
    this.resumeScreenCenter = [1200 / 4, 750 / 4];
    this.fontSize = 60;
    this.lineHeight = 30;
    this.fontOptions = { fontSize: `${this.fontSize}px`, fill: '#eee' };
    this.fontResume = { fontSize: `${this.fontSize}px`, fill: '#f5ef42' };
  }

  createMenu(menu, setupMenuEvents) {
    let lastMenuPositionY = 0;
    menu.forEach((menuItem) => {
      const menuPosition = [this.screenCenter[0], this.screenCenter[1] + lastMenuPositionY];
      menuItem.textGO = this.add
        .text(...menuPosition, menuItem.text, this.fontOptions).setOrigin(0.5, 1);
      lastMenuPositionY += this.lineHeight;
      setupMenuEvents(menuItem);
    });
  }
}

export default BaseScene;
