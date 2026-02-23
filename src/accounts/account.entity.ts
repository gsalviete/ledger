import type { Direction } from "../shared/types";

export interface Account {
    id: string,
    name: string,
    direction: Direction,
    balance: number
}