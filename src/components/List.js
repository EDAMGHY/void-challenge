import { useState, useEffect } from 'react';
import Item from './Item';
const List = ({ show, setShow, setLink }) => {
  // state for api data
  const [items, setItems] = useState([]);
  // url with no-cors mode
  const url =
    'https://cors-anywhere.herokuapp.com/' +
    'https://elsan.void.fr/fr/jsonapi/node/elsan_praticien';
  // fetch data from api
  const fetchData = async (url) => {
    const res = await fetch(url);
    const { data } = await res.json();
    setItems(data);
  };
  // call fetchData when the component is mounted with lifecycle method useEffect
  useEffect(() => {
    fetchData(url);
    // eslint-disable-next-line
  }, []);
  return (
    <div className='border-t-4 border-t-primary border-solid shadow-md divide-y divide-gray-300'>
      {/* map through the items state */}
      {items.map((item, index) => (
        <Item
          key={index}
          setLink={setLink}
          show={show}
          setShow={setShow}
          {...item}
        />
      ))}
    </div>
  );
};
export default List;
