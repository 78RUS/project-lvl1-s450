#!/usr/bin/env node
import {gameStart} from '..';
import {gameData, rules} from '../games/brain-gcd'

gameStart(gameData, rules);
