import { useState } from 'react';
import './sidebar.css';
import Logo from '../../assets/web-dev-logo.avif';
import Profile from '../../assets/zia-sexy.jpeg';
import { CiPen } from 'react-icons/ci';
import { TbSpeakerphone } from 'react-icons/tb';
import { IoMdCode } from 'react-icons/io';
import { MdOutlineAddBox } from 'react-icons/md';
import { IoMdAdd } from 'react-icons/io';
import { FaRegFolder } from 'react-icons/fa6';
import { IoMdArrowDropup } from 'react-icons/io';
import { IoMdArrowDropdown } from 'react-icons/io';
import { MdPersonAddAlt } from 'react-icons/md';
import { IoMdHelpCircleOutline } from 'react-icons/io';
import { PiNumberCircleSeven } from 'react-icons/pi';

const data = [
  {
    folderName: 'Products',
    sub: ['Roadmap', 'Feedback', 'Performance', 'Team', 'Analysis'],
  },
  {
    folderName: 'Sales',
    sub: ['Roadmap', 'Feedback', 'Performance', 'Team', 'Analysis'],
  },
  {
    folderName: 'Design',
    sub: ['Roadmap', 'Feedback', 'Performance', 'Team', 'Analysis'],
  },
  {
    folderName: 'Office',
    sub: ['Roadmap', 'Feedback', 'Performance', 'Team', 'Analysis'],
  },
  {
    folderName: 'Legal',
    sub: ['Roadmap', 'Feedback', 'Performance', 'Team', 'Analysis'],
  },
];

const SideBar = () => {
  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }

    setSelected(i);
  };
  return (
    <div className="sidebar-container">
      <div className="top-div-container">
        <header className="header">
          <div className="logo-container">
            <img src={Logo} className="logo-img" alt="logo" />
          </div>
          <div className="text-container">
            <span className="inc">INC</span>
            <span className="innovatedHub">InnovatedHub</span>
          </div>
          <div className="profile-container">
            <img src={Profile} className="profile-img" alt="Profile" />
          </div>
        </header>
        <div className="team-container">
          <div className="team-row">
            <div className="icon-dev">
              <CiPen />
            </div>
            <div className="team-text-container">
              <span>Design team</span>
            </div>
            <div className="number-container">
              <span>x+1</span>
            </div>
          </div>
          <div className="team-row">
            <div className="icon-dev">
              <TbSpeakerphone />
            </div>
            <div className="team-text-container">
              <span>Marketting team</span>
            </div>
            <div className="number-container">
              <span>x+2</span>
            </div>
          </div>
          <div className="team-row">
            <div className="icon-dev">
              <IoMdCode />
            </div>
            <div className="team-text-container">
              <span>Marketting team</span>
            </div>
            <div className="number-container">
              <span>x+3</span>
            </div>
          </div>
          <div className="create-team-container">
            <div className="icon-dev">
              <MdOutlineAddBox />
            </div>
            <div className="input-dev">
              <input type="text" placeholder="Create a team" />
            </div>
          </div>
        </div>
        <div className="folders-container">
          <div className="add-folder-container">
            <div className="top-row-container">
              <p>FOLDERS</p>
              <IoMdAdd />
            </div>
            <div className="acordion-container">
              {data?.map((item, i) => (
                <div className="item">
                  <div
                    className={selected === i ? 'top-row bg-color' : 'top-row'}
                    onClick={() => toggle(i)}
                  >
                    <FaRegFolder className="icon" />
                    <span className="title">{item.folderName}</span>
                    <span>
                      {selected === i ? (
                        <IoMdArrowDropup />
                      ) : (
                        <IoMdArrowDropdown />
                      )}
                    </span>
                  </div>
                  <div
                    className={
                      selected === i ? 'folder-content show' : 'folder-content'
                    }
                  >
                    {item?.sub?.map((content, i) => (
                      <div className="sub-container">
                        <span>{content}</span>
                      </div>
                    ))}
                    <div className="add-sub-container">
                      <MdOutlineAddBox className="add-icon" />
                      <input type="text" placeholder="Add new sub" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <section className="bottom-div-container">
        <div className="add-teammates-container row">
          <MdPersonAddAlt className="icon" />
          <p>Invite teammates</p>
        </div>
        <div className="help-container row">
          <IoMdHelpCircleOutline className="icon" />
          <p>Help and first steps</p>
        </div>
        <div className="trial-container row">
          <PiNumberCircleSeven className="icon" />
          <p>days left on trial</p>
          <button>add billing</button>
        </div>
      </section>
    </div>
  );
};

export default SideBar;
