const Modal = ({ show, setShow, link }) => {
  return (
    <div
      className={`${
        show ? 'z-10 opacity-100' : '-z-10 opacity-0'
      } fixed top-0 left-0 w-full bg-modal h-screen  flex justify-center items-center`}
    >
      <div className='bg-blue-100 text-black md:w-3/4 md:h-80 h-full w-full flex flex-col justify-evenly items-center relative'>
        <span
          className=' cursor-pointer absolute top-3 right-5 shadow-lg pt-1 pb-0 px-2 rounded-full text-secondary bg-white'
          onClick={() => setShow(false)}
        >
          <i className='fas fa-times fa-2x'></i>
        </span>
        <h1 className='text-3xl font-bold text-center my-5 text-modalText'>
          Prenez rendez-vous avec le Dr {link.title}
        </h1>
        {/* show spécialiste calendar */}
        <a
          href={link.uri}
          target='_blank'
          rel='noreferrer'
          className='inline-block bg-secondary text-white text-lg p-2 rounded-md font-bold tracking-wide shadow-lg'
        >
          Consulter le calendrier
        </a>
      </div>
    </div>
  );
};
export default Modal;
