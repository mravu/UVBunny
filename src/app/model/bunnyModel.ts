export interface Bunny {
    id: string;
    name: string;
    avatar?: string;
    hapiness?: string;
}

export interface Config {
    lettucePoints: number;
    carrotPoints: number;
    playPoints: number;
}

export interface Events {
    id: string;
    bunnyId: string;
    type: 'eating' | 'playing';
    detail: 'carrot' | 'lettuce';
    timestamp: Date;
}