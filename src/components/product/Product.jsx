import React from 'react';
import { HiOutlineChatBubbleLeftRight } from 'react-icons/hi2';

const Product = ({ product, key }) => {
  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };
  return (
    <tr key={key}>
      <td>
        <div className="first-column-container">
          <div className="brand-check">
            <input type="checkbox" checked={product.check} name="" id="" />
            {product.logo}
            <p>{product.name}</p>
          </div>
          <div className="chat-number-container">
            <HiOutlineChatBubbleLeftRight />
            <span>{product.message}</span>
          </div>
        </div>
      </td>
      <td className="description-container">
        <div className="description-container">
          {product.description.join(', ')}
        </div>
      </td>
      <td>
        <div className="member-profile-container">
          {product.members.map((member) => (
            <img src={member} className="member-profile" alt="" />
          ))}
        </div>
      </td>
      <td>
        <div className="category-container">
          {product.categories.map((categorie) => (
            <span
              className="category"
              style={{ backgroundColor: getRandomColor() }}
            >
              {categorie}
            </span>
          ))}
        </div>
      </td>
      <td>
        <div className="td-tags-container">
          {product.tags.map((tag) => (
            <span className="tag">{tag}</span>
          ))}
        </div>
      </td>
      <td>
        <span
          className="next-meeting"
          style={{ backgroundColor: getRandomColor() }}
        >
          {product.nextMeeting}
        </span>
      </td>
    </tr>
  );
};

export default Product;
