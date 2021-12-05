import { getTask, getinput } from './getUserInput';

const task1 = [];

const storeTask = () => {
  task1.push(getinput);
  console.log(task1);
};

export default storeTask;
