const post = {
    title: "TechBowl youtube Channle",
    body: "Please Subscribe this one",
    keywords: ["ES6", "string", "template"]
};

const { title, body, keywords } = post;
const template = `<article>
<h1>${title}</h1>
<section>
    <p>${body}</p>
</section>
</article>
<footer>
<ul>
${keywords.map((keyword) => `<li>${keyword}</li>`).join("\n")} 

</ul>
</footer>`;
document.body.innerHTML = template;


function getAmt() {
    return 500
}

function getInfo(name, amount = getAmt(), color = "Black") {
    {
        console.log(name, amount, color);

    }

}
getInfo(`graps`);
getInfo(`graps`, 100);
getInfo(`graps`, 100, "Green");;
// <ul>
//     ${keywords.map(
//         (keyword) => {
//             `<li> ${keyword} </li>`.join(`\n`)
//         }
//     )}
// </ul>

// Rest Parameters

function add(...args) {
    return args.filter((num) => typeof num === "number")
        .reduce((prev, curr) => prev + curr);
}
const result = add(10, "hello", null, undefined, 20);
console.log(result);



let fruits = new Map();
fruits.set("apple", "Red");
fruits.set("Banana", "Yellow");
fruits.set("Graps", "Green");
for (const fruit of fruits) {
    console.log(fruit);

}

//single tone in java script
let student = new (class {
    constructor(name) {
        this.name = name;
    }
    getname() {
        console.log(`My name is ${this.name}`);
    }
})("sonal pipaliya");

student.getname();

// gettter Setter
class students {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    get fullName() {
        return this.firstName + " " + this.lastName;
    }

    set fullName(str) {
        let names = str.split(' ');
        if (names.length === 2) {
            this.firstName = names[0];
            this.lastName = names[1];
        }
        else {
            throw "Invalid name formate";
        }
    }
}
let uname = new students("Sonal", "Pipaliya");
console.log(uname.fullName);

uname.fullName = "Paras Bhesaniya";
console.log(uname.fullName);


class Queue extends Array {
    enqueue(element) {
        super.push(element);
    }
    dequeue() {
        super.shift();
    }
    peek() {
         return !this.empty() ? this[0] : undefined;
    }
    empty() {
        return this.length === 0;
    }
}
let chars = new Queue()
chars.enqueue("Sonal");
chars.enqueue("hardik");
chars.enqueue("paras");
console.log(chars);

while (!chars.empty()) {
    chars.dequeue();
}
console.log(chars);
chars.peek();
console.log(chars);
chars.empty();
console.log(chars);

