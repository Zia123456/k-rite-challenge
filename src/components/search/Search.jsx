import './search.css';
import PropTypes from 'prop-types';
import { FiSearch } from 'react-icons/fi';

function Search({ search, handleSearch }) {
  return (
    <div className="search-container">
      <FiSearch />
      <input
        onChange={handleSearch}
        className="search-input"
        type="text"
        value={search}
        placeholder="Search for..."
      />
    </div>
  );
}

Search.propTypes = {
  search: PropTypes.string.isRequired,
  handleSearch: PropTypes.func.isRequired,
};
export default Search;
