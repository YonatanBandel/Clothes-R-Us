const uuidv1 = require('uuid/v1');

class TransactionService {
    constructor() {
        this.transactions = [];
    }

    addTransaction(username,items) {

        const total = items.map((item) => item.quantity * item.price).reduce((a,b) => a+b);
        
        this.transactions.push({
            id: uuidv1(),
            username,
            processingTime: new Date(),
            items: items.map(item => item.id),
            payment: total
        });
    }
}

module.exports = TransactionService;