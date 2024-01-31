import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { itemsAction } from "../store/itemsclice";
import { fetchAction } from "../store/sstatussclice";

const Fetching = () => {
  const fetching = useSelector((store) => store.fetchStatus);

  const dispatch = useDispatch();
  useEffect(() => {
    if (fetching.fetchingDone) return;
    const Controller = new AbortController();
    const signal = Controller.signal;

    fetch("http://localhost:8080/items", { signal })
      .then((res) => res.json())
      .then(({ items }) => {
        dispatch(itemsAction.addIntialItems(items[0]));
      });
    return () => {
      Controller.abort();
    };
  }, [fetching]);

  return <></>;
};
export default Fetching;
