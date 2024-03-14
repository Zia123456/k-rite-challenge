import './menu.css';
import { FaSortAlphaDown } from 'react-icons/fa';
import { IoFilter } from 'react-icons/io5';
import { CgAddR } from 'react-icons/cg';
import { TiExportOutline } from 'react-icons/ti';
import { TbBrand4Chan } from 'react-icons/tb';
import { IoMdArrowDropdown } from 'react-icons/io';

const Menu = () => {
  return (
    <menu className="menu-container">
      <div className="left-menu">
        <div className="brands-container small-box">
          <TbBrand4Chan />
          <p>All brands</p>
          <IoMdArrowDropdown />
        </div>
        <div className="dardMode-container small-box">
          <p>Dark</p>
          <IoMdArrowDropdown />
        </div>
        <div className="tags-container small-box">
          <p>Tags</p>
          <IoMdArrowDropdown />
        </div>
        <div className="sort-container small-box">
          <FaSortAlphaDown />
          <p>Sort</p>
        </div>
        <div className="filter-container small-box">
          <IoFilter />
          <p>Filter</p>
        </div>
      </div>
      <div className="right-menu">
        <div className="meeting-container small-box">
          <CgAddR />
          <p>Meeting</p>
        </div>
        <div className="import-export-container small-box">
          <TiExportOutline />
          <p>Import/Export</p>
        </div>
      </div>
    </menu>
  );
};

export default Menu;
