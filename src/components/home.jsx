import { useDispatch } from "react-redux";
import { bagAction } from "../store/bagsclice";

const HomeItems = ({ item }) => {
  const dispatch = useDispatch();
  const handeladdTobag = () => {
    dispatch(bagAction.addItobag(item.id));
  };
  return (
    <div className="item-container">
      <img className="item-image" src={item.image} alt={"item image"} />
      <div className="rating">
        {item.rating.stars} ⭐ | {item.rating.count}
      </div>
      <div className="company-name">{item.company}</div>
      <div className="item-name">{item.item_name}</div>
      <div className="price">
        <span className="current-price">Rs {item.current_price}</span>
        <span className="original-price">Rs{item.original_price}</span>
        <span className="discount">({item.discount_percentage}% OFF)</span>
      </div>
      <button className="btn-add-bag" onClick={handeladdTobag}>
        Add to Cart
      </button>
    </div>
  );
};

export default HomeItems;
