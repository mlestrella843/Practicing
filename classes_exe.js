//Create a subclass tennisPlayer
import { Player, tennisPlayer } from './classes.js';

const soccer_player = new Player('Messi', 'Argentina');
soccer_player.aboutPlayer();

const tennis_Player = new tennisPlayer('Rafael Nadal', 'Spain', 34);
tennis_Player.aboutPlayer();

const soccer_player2 = new Player('Cristiano Ronaldo', 'Portugal');
soccer_player2.aboutPlayer();