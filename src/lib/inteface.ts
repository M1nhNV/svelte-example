interface dataTransfer {
  setData: (key: string, value: string) => '';
  getData: (key: string) => '';
  getAttribute: (key: string) => '';
}

interface eventTarget {
  target: {
    id: string;
    getAttribute: (key: string) => '';
    value: string;
  };
}

interface elDragDrop {
  preventDefault: () => '';
  getAttribute: (key: string) => '';
  target: {
    id: string;
    getAttribute: (key: string) => '';
    value: string;
  };
  dataTransfer: dataTransfer;
}

interface dataDragDrop {
  type: string;
  key: string;
  value: string;
  el: elDragDrop;
  item_id: string;
  move_key: string;
}
interface todoItem {
  label: string;
  id: string;
}

interface todoCategory {
  label: string;
  id: string;
  items: todoItem[];
}
interface todolistType {
  todo: todoCategory;
  in_progress: todoCategory;
  tested: todoCategory;
  done: todoCategory;
}

interface dataUpdate {
  type: 'remove_item' | 'update_item' | 'move_item';
  key: keyof todolistType;
  item_id: string;
  value?: string;
  move_key?: keyof todolistType;
}

interface eventCallback {
  type: string;
  value: string;
}

export {
  elDragDrop,
  dataDragDrop,
  todoItem,
  todoCategory,
  todolistType,
  dataUpdate,
  dataTransfer,
  eventTarget,
  eventCallback
};
