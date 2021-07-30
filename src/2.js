// ASYNCHORNOTUS :: NON BLOCKING :: PROMISE
async function sum(n1, n2) {
  // cooking the pizza.
  return n1 + n2;
}

async function main() {
  const output = await sum(10, 10);
  console.log(output);
}

main();