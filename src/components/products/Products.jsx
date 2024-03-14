import { useState } from 'react';
import './products.css';
import { FaWix } from 'react-icons/fa';
import { FaShopify } from 'react-icons/fa';
import { FaPaypal } from 'react-icons/fa';
import { TbBrandDisney } from 'react-icons/tb';
import { FcGoogle } from 'react-icons/fc';
import { FaMicrosoft } from 'react-icons/fa';
import Header from '../header/Header';
import Menu from '../menu/Menu';

import AddData from '../addData/AddData';
import BottomMenu from '../bottomMenu/BottomMenu';
import Product from '../product/Product';
import NotFound from '../notFound/NotFound';
import TableHead from '../tableHead/TableHead';

const products = [
  {
    brands: [
      {
        check: true,
        logo: <FaWix />,
        name: 'Wix',
        message: '2',
        description: ['Maria Andres'],
        members: [
          'https://th.bing.com/th/id/OIP.PztowP3ljup0SM75tkDimQHaHa?w=147&h=180&c=7&r=0&o=5&cb=11&dpr=1.3&pid=1.7',
          'https://th.bing.com/th/id/OIP.PztowP3ljup0SM75tkDimQHaHa?w=147&h=180&c=7&r=0&o=5&cb=11&dpr=1.3&pid=1.7',
        ],
        categories: ['E-commerce', 'B2B'],
        tags: ['DigitalTransformation', 'dfghhfjk'],
        nextMeeting: 'in 30 minutes',
      },
      {
        check: false,
        logo: <FaShopify />,
        name: 'Shopify',
        message: '6',
        description: ['Maria Andres cfbgf'],
        members: [
          'https://th.bing.com/th/id/OIP.PztowP3ljup0SM75tkDimQHaHa?w=147&h=180&c=7&r=0&o=5&cb=11&dpr=1.3&pid=1.7',
          'https://th.bing.com/th/id/OIP.PztowP3ljup0SM75tkDimQHaHa?w=147&h=180&c=7&r=0&o=5&cb=11&dpr=1.3&pid=1.7',
        ],
        categories: ['E-commerce'],
        tags: ['DigitalTransformation'],
        nextMeeting: 'in 10 minutes',
      },
      {
        check: false,
        logo: <FaPaypal />,
        name: 'PayPal',
        message: '4',
        description: ['Maria Andres cfbgf cvgbh'],
        members: [
          'https://th.bing.com/th/id/OIP.PztowP3ljup0SM75tkDimQHaHa?w=147&h=180&c=7&r=0&o=5&cb=11&dpr=1.3&pid=1.7',
        ],
        categories: ['E-commerce'],
        tags: ['Money Transfer'],
        nextMeeting: 'in 30 minutes',
      },
      {
        check: false,
        logo: <FcGoogle />,
        name: 'Google',
        message: '3',
        description: ['Maria Andres cfbgf cvgbh'],
        members: [
          'https://th.bing.com/th/id/OIP.PztowP3ljup0SM75tkDimQHaHa?w=147&h=180&c=7&r=0&o=5&cb=11&dpr=1.3&pid=1.7',
        ],
        categories: ['Information'],
        tags: ['Search engine'],
        nextMeeting: 'in 1 hour',
      },
      {
        check: false,
        logo: <TbBrandDisney />,
        name: 'Disney',
        message: '5',
        description: ['Maria Andres cfbgf cvgbh'],
        members: [
          'https://th.bing.com/th/id/OIP.PztowP3ljup0SM75tkDimQHaHa?w=147&h=180&c=7&r=0&o=5&cb=11&dpr=1.3&pid=1.7',
          'https://th.bing.com/th/id/OIP.PztowP3ljup0SM75tkDimQHaHa?w=147&h=180&c=7&r=0&o=5&cb=11&dpr=1.3&pid=1.7',
        ],
        categories: ['Movie'],
        tags: ['Animation'],
        nextMeeting: 'in 3 hour',
      },
      {
        check: false,
        logo: <FaMicrosoft />,
        name: 'Microsoft',
        message: '12',
        description: ['Maria Andres cfbgf cvgbh'],
        members: [
          'https://th.bing.com/th/id/OIP.PztowP3ljup0SM75tkDimQHaHa?w=147&h=180&c=7&r=0&o=5&cb=11&dpr=1.3&pid=1.7',
          'https://th.bing.com/th/id/OIP.PztowP3ljup0SM75tkDimQHaHa?w=147&h=180&c=7&r=0&o=5&cb=11&dpr=1.3&pid=1.7',
        ],
        categories: ['Software'],
        tags: ['OperatingSystem'],
        nextMeeting: 'in 6 hour',
      },
      {
        check: false,
        logo: <TbBrandDisney />,
        name: 'Disney',
        message: '5',
        description: ['Maria Andres cfbgf cvgbh'],
        members: [
          'https://th.bing.com/th/id/OIP.PztowP3ljup0SM75tkDimQHaHa?w=147&h=180&c=7&r=0&o=5&cb=11&dpr=1.3&pid=1.7',
          'https://th.bing.com/th/id/OIP.PztowP3ljup0SM75tkDimQHaHa?w=147&h=180&c=7&r=0&o=5&cb=11&dpr=1.3&pid=1.7',
        ],
        categories: ['Movie'],
        tags: ['Animation'],
        nextMeeting: 'in 3 hour',
      },
      {
        check: false,
        logo: <FcGoogle />,
        name: 'Google',
        message: '3',
        description: ['Maria Andres cfbgf cvgbh'],
        members: [
          'https://th.bing.com/th/id/OIP.PztowP3ljup0SM75tkDimQHaHa?w=147&h=180&c=7&r=0&o=5&cb=11&dpr=1.3&pid=1.7',
          'https://th.bing.com/th/id/OIP.PztowP3ljup0SM75tkDimQHaHa?w=147&h=180&c=7&r=0&o=5&cb=11&dpr=1.3&pid=1.7',
        ],
        categories: ['Information'],
        tags: ['Search engine'],
        nextMeeting: 'in 1 hour',
      },
    ],
  },
];

const Products = () => {
  const a = products[0];
  const b = a?.brands;

  const [search, setSearch] = useState('');

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const filtered = b?.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="products-container">
      <section>
        <Header search={search} handleSearch={handleSearch} />
        <Menu />
        <table>
          <TableHead />
          <tbody>
            {filtered?.map((item, index) => (
              <Product product={item} key={index} />
            ))}
            {filtered?.length === 0 && <NotFound />}
          </tbody>
          <AddData />
        </table>
      </section>
      <BottomMenu />
    </div>
  );
};

export default Products;
