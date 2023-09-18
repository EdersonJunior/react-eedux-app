import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createItem } from '../actions/itemActions';

function CreateItem() {
  const [itemName, setItemName] = useState('');
  const dispatch = useDispatch();

  const handleCreateItem = () => {
    dispatch(createItem({ name: itemName }));
    setItemName('');
  };

  return (
    <div>
      <h2>Criar Item</h2>
      <input
        type="text"
        placeholder="Nome do item"
        value={itemName}
        onChange={(e) => setItemName(e.target.value)}
      />
      <button onClick={handleCreateItem}>Criar</button>
    </div>
  );
}

export default CreateItem;
