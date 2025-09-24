import { Timestamp } from "@angular/fire/firestore";

export interface Bunny {
    id: string;
    name: string;
    avatar?: string;
    hapiness: number;
}

export interface Config {
    lettucePoints: number;
    carrotPoints: number;
    playPoints: number;
    playBonusPoints: number;
}

export interface Events {
    id: string;
    bunnyId: string;
    type: 'eating' | 'playing';
    detail: string;
    timestamp: Timestamp;
    points: number;
}