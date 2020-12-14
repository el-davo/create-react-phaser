import * as React from 'react';
import Phaser from "phaser";
import {MainScene} from "./scenes/main";

export class Game extends React.Component {

    phaserGame;
    config = {
        type: Phaser.AUTO,
        height: 20 * 32,
        width: 20 * 32,
        scene: [MainScene],
        parent: 'game',
        backgroundColor: '#000000',
        physics: {
            default: 'arcade',
            arcade: {
                debug: true
            }
        }
    };

    constructor(props) {
        super(props);

        this.phaserGame = new Phaser.Game(this.config);
    }

    render() {
        return (
            <div>
                Hello
            </div>
        );
    }
}
