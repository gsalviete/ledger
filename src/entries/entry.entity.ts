import { Direction } from "../shared/types";

export interface Entry {
    id: string,
    direction: Direction,
    account_id: string,
    amount: number 
}
