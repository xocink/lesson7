
class QElement {
  constructor(element, priority)
  {
    this.element = element;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.items = [];
  }

  enqueue(element, priority) {
    let qElement = new QElement(element, priority);
    let contain = false;

    for (let i = 0; i < this.items.length; i++) {
      if (+this.items[i].priority > +qElement.priority) {
        this.items.splice(i, 0, qElement);
        contain = true;
        break;
      }
    }

    if (!contain) {
      this.items.push(qElement);
    }
  }
  dequeue() {
    if (this.isEmpty())
      return "Underflow";
    return this.items.shift();
  }
  front() {
    if (this.isEmpty())
      return "No elements in Queue";
    return this.items[0];
  }

  rear() {
    if (this.isEmpty())
      return "No elements in Queue";
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }
  printPQueue() {
    let str = "";
    for (let i = 0; i < this.items.length; i++)
      str += this.items[i].element + " ";
    return str;
  }

  runTasks() {
    for (let task of this.items) {
      task.element()
    }
  }

  get length() {
    return this.items;
  }
}



class TaskRunner {
  constructor() {
    this.q = new PriorityQueue();
  }

  executeTasks() {
    this.q.runTasks();
  }

  addTask(task, priority) {
    this.q.enqueue(task, priority);
  }
}

const runnerInstance = new TaskRunner();

const job = (number, priority) => {
  console.log(`job with number: ${number} priority ${priority}`);
};


const testRunner = (tasksNumber) => {
  const runnerInstance = new TaskRunner();

  for (let i = 0; i < tasksNumber; i++) {
    const priority =(Math.random() * tasksNumber).toFixed(0)
    runnerInstance.addTask(job.bind(null,i,priority),priority)
  }

  runnerInstance.executeTasks();
}


testRunner(1000)
