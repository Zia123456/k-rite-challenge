import './addProduct.css';

import { MdOutlineCountertops } from 'react-icons/md';
import { IoMdAdd } from 'react-icons/io';
const AddData = () => {
  return (
    <tr className="add-data-container">
      <td>
        <div className="add-data">
          <MdOutlineCountertops />
          <p>Count</p>
        </div>
      </td>
      <td>
        <div className="add-data">
          <IoMdAdd />
          <p>Add description</p>
        </div>
      </td>
      <td>
        <div className="add-data">
          <IoMdAdd />
          <p>Add member</p>
        </div>
      </td>
      <td>
        {' '}
        <div className="add-data">
          <IoMdAdd />
          <p>Add category</p>
        </div>
      </td>
      <td>
        {' '}
        <div className="add-data">
          <IoMdAdd />
          <p>Add tag</p>
        </div>
      </td>
      <td></td>
    </tr>
  );
};

export default AddData;
