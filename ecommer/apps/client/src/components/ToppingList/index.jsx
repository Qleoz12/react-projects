import React, { useState } from 'react';
import Checkbox from '@mui/material/Checkbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

export const ToppingList = ({ detail,setValue,handlechecked,handleCheckboxChange}) => {
  const [selectedValues, setSelectedValues] = useState([]); // Estado para almacenar los valores seleccionados
  
  const enviarmensaje= (x)=> {
    setValue(x);
  }
  const handleChangee = (e) => {
    const selectedValue = e.target.value;

    if (e.target.checked) {
      
      // Si el checkbox está marcado, agrégalo a la listalis
      setSelectedValues([...selectedValues, selectedValue]);
      
      enviarmensaje(selectedValue);
    } else {
      // Si el checkbox se desmarca, elimínalo de la lista
      setSelectedValues(selectedValues.filter(value => value !== selectedValue));
    }
  };

 // Muestra la lista de valores seleccionados en la consola
 
  return (
    <div className="topping-list">
      <List>
        <ListItem>
          <ListItemText
            primary={
              <div className="flex items-center">
                <div className="flex-1">
                  {detail.ItemSeleccion}
                  <br />
                  <span className="">${detail.precioSeleccion}</span>
                </div>
                <Checkbox
                  name="selectedProduct"
                  value={detail.skuItemSeleccion}
                  onChange={handleCheckboxChange}
                  checked={handlechecked} // Marcar checkbox si está en la lista
                />
              </div>
            }
          />
        </ListItem>
      </List>
    </div>
  );
};