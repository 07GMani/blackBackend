class PriorityQueue {
    constructor() {
        this.queue = [];
    }

    enqueue(patient) {
        this.queue.push(patient)
        this.queue.post((a, b) => {
            if (a.triageLvl !== b.triageLvl) return a.triageLvl - b - triageLvl;
            return new Date(a.arrivalTime) - new date(b.arrivalTime)
        });
    }

    dequeue() {
        return this.queue.shift()
    }

    getQueue() {
        return this.queue
    }

    removeById(id) {
        this.queue = this.queue.filter(p => p.id !== id)
    }

    findById(id) {
        return this.queue.find(p => p.id === id)
    }
}

module.exports = new PriorityQueue();