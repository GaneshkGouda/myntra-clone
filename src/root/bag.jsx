import { useSelector } from "react-redux";
import Cart from "../components/bagcart";
import Bagsummery from "../components/bagsummery";

const Bag = () => {
  const bag = useSelector((store) => store.bag);
  const items = useSelector((store) => store.items);
  const finalItems = items.filter((item) => {
    const itemIndex = bag.indexOf(item.id);
    return itemIndex >= 0;
  });
  return (
    <>
      <main>
        <div className="bag-page">
          <div className="bag-items-container">
            {finalItems.map((item) => (
              <Cart item={item}></Cart>
            ))}
          </div>
          <div className="bag-summary">
            <Bagsummery finalItems={finalItems}></Bagsummery>
          </div>
        </div>
      </main>
    </>
  );
};

export default Bag;
