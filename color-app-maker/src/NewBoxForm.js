import React, {useState} from 'react';
import { v4 as uuid } from "uuid";
const NewBoxForm = ({addBox}) => {
    const INITIAL_STATE = {width: '', height: '', backgroundColor: ''};
    const [formData, setFormData] = useState(INITIAL_STATE);
    const handleSubmit = (e) => {
        e.preventDefault();
        addBox({...formData, id: uuid()})
        setFormData(INITIAL_STATE)
    }
    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData(fData => ({...fData, [name]: value})
        )
    }
    return (
      <form onSubmit={handleSubmit}>
        <label htmlFor="width">Width:</label>
        <input
          type ="number"
          id="width"
          name="width"
          value={formData.width}
          onChange={handleChange}
        />

        <label htmlFor="height">Height:</label>
        <input
          type="number"
          id="height"
          name="height"
          value={formData.height}
          onChange={handleChange}
          />
        <label htmlFor="backgroudColor">backgroud Color:</label>
        <input
          type="text"
          id="backgroundColor"
          name="backgroundColor"
          value={formData.backgroundColor}
          onChange={handleChange}
        />

        <button>Create a new box!</button>
      </form>
    );
    
}
export default NewBoxForm;