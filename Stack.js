// stacks
// LIFO (Last In, First Out)
// factoryFunction

function createStack() {
  const array = [];
  return {
    push(item) {
      array.push(item);
    },
    pop() {
      return array.pop();
    },
    peek() {
      return array[array.length - 1];
    },
    get length() {
      return this.length;
    },
    isEmpty() {
      return array.length === 0;
    },
  };
}

const stack = createStack();

stack.push('Hello');
stack.push('Meow');
stack.push('Funky Bunky');
stack.push('Hellooooooooooooooz');
stack.pop();
console.log(stack.peek());
