class Queue
{
    constructor()
    {
        this.queue = [];      
    }

    enqueue (element)
    {
        this.queue.push(element);
        return this.queue;
    }

    dequeue()
    {
        return this.queue.shift();
    }

    peek()
    {
        return this.queue[0];
    }

    size()
    {
        return this.queue.length;
    }

    isEmpty()
    {
        return this.queue.length === 0;
    }

    print()
    {
        return this.queue;
    }
}


class Personas
{
    constructor(name, time)
    {
    this.name = name;
    this.time = time;
    }
}


const NewPersonas = new Personas();
NewPersonas.name = "XXXX";
NewPersonas.time = "3"


const queue = new Queue();
queue.enqueue(NewPersonas);

queue.print();