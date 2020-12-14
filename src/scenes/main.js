import * as Phaser from 'phaser';

export class MainScene extends Phaser.Scene {

    constructor() {
        super({key: 'main'});
    }

    preload() {
    }

    create() {
        this.physics.world.setFPS(60);

        this.cameras.main.setBounds(0, 0, 20 * 32, 20 * 32);

        // Events
        this.input.on('pointerdown', (pointer) => {
        });
    }

    update() {
    }

}
