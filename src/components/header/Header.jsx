import { AiTwotoneSetting } from 'react-icons/ai';
import { HiOutlineChatBubbleLeftRight } from 'react-icons/hi2';
import Search from '../search/Search';

const Header = ({ search, handleSearch }) => {
  return (
    <nav className="nav-container ">
      <div className="product-container left">
        <h3>Products</h3>
      </div>
      <div className="right">
        <Search search={search} handleSearch={handleSearch} />
        <HiOutlineChatBubbleLeftRight className="icon-container" />
        <AiTwotoneSetting className="icon-container" />
      </div>
    </nav>
  );
};

export default Header;
