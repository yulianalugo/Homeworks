class Book
{
    constructor()
    {
        this.book = {};
        this.count = 0;
    }

    push (element)
    {
        this.book[this.count] = element;
        this.count++;
        return this.book;
    }

    pop()
    {
        this.count--;
        const element = this.book[this.count];
        delete this.book[this.count];
        return element;
    }

    peek()
    {
        return this.book[this.count - 1];
    }

    size()
    {
        return this.count;
    }

    print()
    {
        console.log(this.book);
    }
}


class Libro
{
    constructor(name, ISBN, author, editorial )
    {
    this.name = name;
    this.ISBN = ISBN;
    this.author = author;
    this.editorial = editorial;
    }
}


const NewLibro = new Libro();
NewLibro.name = "XXXX";
NewLibro.ISBN = "123";
NewLibro.author = "NN";
NewLibro.editorial = "WWW";


const book = new Book();
book.push(NewLibro);

book.print();
