import { Transaction } from "./transaction.entity";
import { TransactionRepository } from "./transaction.repository";

export class InMemoryTransactionRepository implements TransactionRepository{
    private transactions: Transaction[] = []
    
        async save(transaction: Transaction): Promise<Transaction>{
            const existingId = await this.findById(transaction.id)
            if(existingId){
                throw new Error(`Id ${transaction.id} já existe.`)
            }
            this.transactions.push(transaction)
            return transaction
            
            
        }
    
        async findById(id: string): Promise<Transaction | undefined> {
            const transaction = this.transactions.find(t => t.id === id)
            return transaction;
        }
}