import image from '../images/praticien_img.gif';
const Item = ({
  setLink,
  setShow,
  attributes: {
    title,
    field_vactory_telephone,
    field_elsan_rdv,
    field_elsan_profession,
  },
}) => {
  const onClick = () => {
    setShow(true);
    field_elsan_rdv ? setLink({ ...field_elsan_rdv, title }) : setLink({});
  };
  return (
    <div className='bg-white text-black py-4 px-2 grid sm:grid-cols-item grid-cols-res-item items-center'>
      <div className='justify-self-center relative cursor-pointer'>
        <span className='bg-secondary font-bold p-icon  rounded-full text-white absolute top-0 -right-3'>
          <i className='fa-solid fa-plus text-lg'></i>
        </span>
        <img src={image} alt={title} className='h-70 w-70 rounded-full' />
      </div>
      <div className='px-4'>
        <a
          className='sm:text-3xl text-xl font-medium hover:underline'
          href='https://elsan.void.fr/fr/jsonapi/node/elsan_praticien'
        >
          {title}
        </a>
        <p className='text-gray-500'>{field_elsan_profession}</p>
        <a
          className='block text-secondary font-medium hover:underline'
          href='https://elsan.void.fr/fr/jsonapi/node/elsan_praticien'
        >
          Clinique Saint-François
        </a>
        <a
          className='block hover:underline'
          href='https://elsan.void.fr/fr/jsonapi/node/elsan_praticien'
        >
          Tel : {field_vactory_telephone}
        </a>
      </div>
      {/* check  if field_elsan_rdv exists */}
      {field_elsan_rdv && (
        <button
          className='sm:col-auto col-span-2 justify-self-center sm:justify-self-end  sm:my-0 my-3 sm:mr-7 mr-0 bg-secondary text-white py-1 px-2 rounded-md font-medium shadow-lg'
          onClick={onClick}
        >
          <i className='fa-solid fa-calendar-check pr-1'></i> Rendez-vous
        </button>
      )}
    </div>
  );
};
export default Item;
