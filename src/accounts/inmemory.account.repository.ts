import { Account } from "./account.entity";
import { AccountRepository } from "./account.repository";

export class InMemoryAccountRepository implements AccountRepository {
    private accounts: Account[] = []

    async save(account: Account): Promise<Account>{
        const existingId = await this.findById(account.id)
        if(existingId){
            throw new Error(`Id ${account.id} já existe.`)
        }
        this.accounts.push(account)
        return account
        
        
    }

    async findById(id: string): Promise<Account | undefined> {
        const account = this.accounts.find(a => a.id === id)
        return account;
    }
}