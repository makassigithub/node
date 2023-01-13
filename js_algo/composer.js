const compose = (...fns) => (initialValue) =>
  fns.reduceRight((acc, currentFn) => currentFn(acc), initialValue);

const add10 = (x) => x + 10;
const squareIt = (y) => y * y;
const divideBy2 = (z) => z / 2;

const composer = compose(divideBy2, squareIt, add10);
console.log("composition: " + composer(0));

const pipe = (...fcts) => (initialValue) =>
  fcts.reduce((acc, fct) => fct(acc), initialValue);
const trace = (desc) => (acc) => {
  console.log(`${desc} : ${acc}`);
  return acc;
};

const piper = pipe(add10, squareIt, divideBy2);
console.log("piping: " + piper(2));

const pipeAndLog = pipe(
  add10,
  trace("after add10"),
  squareIt,
  trace("after squareIt"),
  divideBy2,
  trace("after divideBy2")
);
console.log("pipeAndLog: " + pipeAndLog(4));
