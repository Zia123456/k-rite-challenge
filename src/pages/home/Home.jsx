import Products from '../../components/products/Products';
import SideBar from '../../components/sidebar/SideBar';
import './home.css';

const Home = () => {
  return (
    <div className="home-container">
      <SideBar />
      <Products />
    </div>
  );
};

export default Home;
