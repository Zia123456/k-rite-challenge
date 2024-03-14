import './tableHead.css';
import { IoMdAdd } from 'react-icons/io';

const TableHead = () => {
  return (
    <thead>
      <tr>
        <th className="brand-container">
          <div className="brand-check">
            <input type="checkbox" name="" id="" />
            <p>Brand</p>
          </div>
          <IoMdAdd />
        </th>
        <th>Description</th>
        <th>Members</th>
        <th>Categories</th>
        <th>Tags</th>
        <th>Next meeting</th>
        <th>
          <IoMdAdd />
        </th>
      </tr>
    </thead>
  );
};

export default TableHead;
