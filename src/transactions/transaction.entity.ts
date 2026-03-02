import { Entry } from "../entries/entry.entity";

export interface Transaction {
    id: string,
    name?: string,
    entries: Entry[],
}