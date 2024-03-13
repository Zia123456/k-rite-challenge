import React from 'react';
import { GrRadialSelected } from 'react-icons/gr';
import { IoArchiveOutline } from 'react-icons/io5';
import { AiOutlineDelete } from 'react-icons/ai';
import { RxCross1 } from 'react-icons/rx';
import { IoMdArrowDropdown } from 'react-icons/io';

const BottomMenu = () => {
  return (
    <menu className="bottom-menu">
      <div className="selected-container">
        <GrRadialSelected />
        <span>Selected</span>
      </div>
      <div className="archive-container border-style">
        <IoArchiveOutline />
        <span>Archive</span>
      </div>
      <div className="delete-container border-style">
        <AiOutlineDelete />
        <span>Delete</span>
      </div>
      <div className="delete-container border-style">
        <span>More</span>
        <IoMdArrowDropdown />
      </div>
      <RxCross1 />
    </menu>
  );
};

export default BottomMenu;
