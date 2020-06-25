type Combinable = string | number;

function add235(a: string, b: string): string;
function add235(a: number, b: string): string;
function add235(a: string, b: number): string;
function add235(a: number, b: number): number;
function add235(a: Combinable, b: Combinable) {
  if (typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString();
  }
  return a + b;
}

const result1 = add235('Max', 'milian');
result1.split(' ');

const fetcheduserData = {
  id: 'ul',
  name: 'MAx',
  job: { title: 'CEO', description: 'My own company' },
};

console.log(fetcheduserData?.job?.title);

const userInput = undefined;
const storeData = userInput ?? 'DEFAULT';
console.log(storeData);
