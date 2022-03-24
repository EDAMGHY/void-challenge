import { useState } from 'react';
import Header from './components/Header';
import List from './components/List';
import Modal from './components/Modal';
import Nav from './components/Nav';
function App() {
  // state to show modal
  const [show, setShow] = useState(false);
  // state for calendar link
  const [link, setLink] = useState({});

  return (
    <>
      {/* modal component */}
      <Modal show={show} setShow={setShow} link={link} />
      <div className='w-full h-full bg-white z-10'>
        <div className='container bg-gray-100 mx-auto sm:px-4 px-1 pt-4 pb-10'>
          {/* header component */}
          <Header />
          <section className='container-sm mx-auto sm:px-4 px-0 mt-5'>
            {/* nav component */}
            <Nav />
            {/* list items */}
            <List show={show} setLink={setLink} setShow={setShow} />
          </section>
        </div>
      </div>
    </>
  );
}

export default App;
