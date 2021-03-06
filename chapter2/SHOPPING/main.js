const items = document.querySelector('.items');
const input = document.querySelector('.footer_input');
const addBtn = document.querySelector('.footer_button');
const form = document.querySelector('.new-form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  onAdd();
});

const onAdd = () => {
  // 1. 사용자가 입력한 텍스트를 받아와야함
  const inputText = input.value;
  if (inputText == '') {
    input.focus();
    return;
  }
  console.log('사용자가 입력한 텍스트', inputText);
  // 2. 그 텍스트를 이용하여 새로운 아이템을 만들어야함
  const item = createItem(inputText);
  // 3. items 컨테이너안에 새로 만든 아이템을 추가함
  items.appendChild(item);
  //4. 새로 추가된 아이템으로 스크롤링
  item.scrollIntoView({ block: 'center' });
  // 5. 인풋을 초기화 한다.
  input.value = '';
  input.focus();
};

let id = 0; // UUID

const createItem = (text) => {
  const itemRow = document.createElement('li');
  itemRow.setAttribute('class', 'item_row');
  itemRow.setAttribute('data-id', id);
  itemRow.innerHTML = `
        <li class="item_row">
          <div class="item" data-id=${id}>
            <span class="item_name">${text}</span>
            <button class="item_delete" data-id=${id}>
              <i class="fa-solid fa-trash" data-id=${id}></i>
            </button>
          </div>
          <div class="item_divider"></div>
        </li>
        `;
  // const item = document.createElement('div');
  // item.setAttribute('class', 'item');

  // const deleteBtn = document.createElement('button');
  // deleteBtn.setAttribute('class', 'item_delete');
  // deleteBtn.innerHTML = '<i class="fa-solid fa-trash"></i>';
  // deleteBtn.addEventListener('click', () => {
  //   items.removeChild(itemRow);
  // });

  // const name = document.createElement('span');
  // name.setAttribute('class', 'item_name');
  // name.innerText = text;

  // const itemDivider = document.createElement('div');
  // itemDivider.setAttribute('class', 'item_divider');

  // item.appendChild(name);
  // item.appendChild(deleteBtn);

  // itemRow.appendChild(item);
  // itemRow.appendChild(itemDivider);
  id++;
  return itemRow;
};

// addBtn.addEventListener('click', () => {
//   onAdd();
// });

// input.addEventListener('keydown', (event) => {
//   if (event.isComposing) {
//     return;
//   }
//   if (event.key === 'Enter') {
//     onAdd();
//   }
// });

items.addEventListener('click', (event) => {
  const id = event.target.dataset.id;
  if (id) {
    const toBeDeleted = document.querySelector(`.item_row[data-id="${id}"]`);
    toBeDeleted.remove();
  }
});
