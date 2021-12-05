import { ToDoContainer } from './group1';

let groupNameVar2 = '';

function Task(task) {
  this.task = task;
}

const newTask = new Task();
const list = document.createElement('ul');

// Group

const groupName = () => {
  const groupInput = document.createElement('input');
  groupInput.setAttribute('type', 'text');
  groupInput.id = 'group2';
  groupInput.setAttribute('placeholder', 'New group');

  groupInput.addEventListener('submit', (e) => {
    e.preventDefault();
  });

  return groupInput;
};

const getGroup = () => {
  groupNameVar2 = document.getElementById('group2').value;
  return groupNameVar2;
};

const groupInput2 = () => {
  const form1 = document.createElement('form');

  form1.classList.add('formGroup');

  form1.appendChild(groupName());
  form1.appendChild(submitGroup());

  return form1;
};

const submitGroup = () => {
  const inputBtn = document.createElement('button');
  inputBtn.setAttribute('type', 'sumbit');
  inputBtn.classList.add('submitGroupBtn');
  inputBtn.textContent = 'Done';

  inputBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (document.getElementById('group2').value.length == 0) {
      alert('Do Not leave group name empty');
    } else {
      getGroup();
      const bubble1 = inputBtn.parentNode;
      bubble1.style.display = 'none'; // Removing text box
      ToDoContainer.insertBefore(toDoBlock(), ToDoContainer.lastElementChild);
    }
  });

  return inputBtn;
};

// Group

const newInput = () => {
  const input = document.createElement('input');
  return input;
};

const makeInput = () => {
  const input1 = newInput();
  input1.setAttribute('type', 'text');
  input1.id = 'task1';
  input1.classList.add('taskBox');
  input1.setAttribute('placeholder', '+ New');

  input1.addEventListener('submit', (e) => {
    e.preventDefault();
  });

  return input1;
};

const getTask = () => {
  newTask.task = document.getElementById('task1').value;
  document.querySelector('.remove1').reset();
  return newTask.task;
};

function displayTask() {
  const taskDisplay = document.createElement('li');
  const span = document.createElement('span');
  span.textContent = newTask.task;
  taskDisplay.appendChild(span);
  taskDisplay.appendChild(menuButton.create());
  return taskDisplay;
}

const submitTask = () => {
  const inputBtn = document.createElement('button');
  inputBtn.setAttribute('type', 'sumbit');
  inputBtn.classList.add('inputBtn');

  inputBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (document.getElementById('task1').value.length == 0) {
      alert('Do not leave task empty');
    } else {
      getTask();
      createList().appendChild(displayTask());
    }
  });

  return inputBtn;
};

function createList() {
  list.addEventListener('click', (e) => {
    const button = e.target;
    const li = button.parentNode;
    const li2 = li.parentNode;
    if (button.textContent === '...') {
      if (li.childElementCount < 2) {
        li.appendChild(popOutMenu()); // Making sure only one menu is appended
      }
    }
  });

  return list;
}

const input = () => {
  const form1 = document.createElement('form');
  form1.classList.add('remove1');

  form1.appendChild(makeInput());
  form1.appendChild(submitTask());
  form1.appendChild(createList());

  return form1;
};

// Create group

const toDoBlock = () => {
  const block = document.createElement('div');
  const h5 = document.createElement('h5');
  h5.classList.add('group2Color');
  h5.textContent = groupNameVar2;
  block.appendChild(h5);
  block.classList.add('toDoBlock');
  block.appendChild(input());
  return block;
};

// Create group

const menuButton = (() => {
  const create = () => {
    const menuBtn = document.createElement('button');
    menuBtn.classList.add('menuBtn');
    const p = document.createElement('h6');
    p.textContent = '...';
    menuBtn.appendChild(p);
    menuBtn.setAttribute('type', 'button');
    return menuBtn;
  };
  return { create };
})();

const deleteTab = () => {
  const deleteTab = document.createElement('div');
  deleteTab.classList.add('tab');
  const MenuTitle1 = document.createElement('h3');
  MenuTitle1.textContent = 'Delete';
  const imgTrash = document.createElement('img');
  imgTrash.classList.add('Iconimg');
  imgTrash.src = 'images/garbage.png';
  deleteTab.appendChild(MenuTitle1);
  MenuTitle1.prepend(imgTrash);

  return deleteTab;
};

const renameTab = () => {
  const renameTab = document.createElement('div');
  renameTab.classList.add('tab');
  const MenuTitle2 = document.createElement('h3');
  MenuTitle2.textContent = 'Rename';
  const imgRename = document.createElement('img');
  imgRename.classList.add('Iconimg');
  imgRename.src = 'images/edit.png';
  renameTab.appendChild(MenuTitle2);
  MenuTitle2.prepend(imgRename);
  return renameTab;
};

const saveTab = () => {
  const saveTab = document.createElement('div');
  saveTab.classList.add('tab');
  const MenuTitle3 = document.createElement('h3');
  MenuTitle3.textContent = 'Save';
  const imgSave = document.createElement('img');
  imgSave.classList.add('Iconimg');
  imgSave.src = 'images/save.png';
  saveTab.appendChild(MenuTitle3);
  MenuTitle3.prepend(imgSave);
  return saveTab;
};

const popOutMenu = () => {
  const popOut = document.createElement('div');
  popOut.classList.add('popWindow');

  popOut.appendChild(deleteTab());
  popOut.appendChild(renameTab());

  popOut.addEventListener('click', (e) => {
    const button = e.target;
    const bubble1 = button.parentNode;
    const bubble2 = bubble1.parentNode;
    const bubble3 = bubble2.parentNode;
    const bubble4 = bubble3.parentNode;
    const bubble5 = bubble4.parentNode;
    if (button.textContent === 'Delete') {
      bubble5.removeChild(bubble4);
    } else if (button.textContent === 'Rename') {
      list.addEventListener('keypress', (e) => { // Preventing user from using 'Enter' after pressing edit
        if (e.key === 'Enter') {
          e.preventDefault();
          return false;
        }
      });
      const span = bubble4.firstElementChild;
      const input = document.createElement('input');
      input.type = 'text';
      bubble4.insertBefore(input, span);
      bubble4.removeChild(span);
      popOut.removeChild(popOut.childNodes[1]);
      popOut.appendChild(saveTab());
    } else if (button.textContent === 'Save') {
      const input = bubble4.firstElementChild;
      const span = document.createElement('span');
      span.textContent = input.value;
      bubble4.insertBefore(span, input);
      bubble4.removeChild(input);
      button.textContent = 'Rename';
      bubble3.removeChild(bubble3.childNodes[1]); // remove popout onced saved
    }
  });

  return popOut;
};

export { groupInput2 };
