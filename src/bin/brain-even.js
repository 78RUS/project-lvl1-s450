#!/usr/bin/env node
import { gameStart } from '..';
import { gameData, rules } from '../games/brain-even';

gameStart(gameData, rules);
