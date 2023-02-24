import { useState, useContext } from "react";

import AuthContext from "../../store/AuthContext";
import Logoutsvg from "../../assets/Logout.svg";

import Model from "../Model/Model";

const Navbar = () => {
  const authCtx = useContext(AuthContext);

  const logoutHandler = async () => {
    // await logoutApi(authCtx.token);
    authCtx.logout();
  };
  const [modalShow, setModalShow] = useState(false);
  return (
    <>
      <div className='bg-white dark:bg-gray-800  shadow  w-full z-40 '>
        <nav className='container'>
          <div className='max-w-7xl mx-auto'>
            <div className='flex items-center justify-content-between  h-16 '>
              <div className='d-flex flex-shrink-0 align-items-center '>
                <img
                  className='h-10 w-10 mr-2'
                  src='https://cdn-icons-png.flaticon.com/512/3249/3249935.png'
                  alt='icon'
                />

                <div className='text-gray-800 px-3 py-2 rounded-md text-base font-medium'>
                  React Page Builder
                </div>
              </div>
              <div className='hidden md:block'>
                <div className='ml-10 flex  items-baseline space-x-4'>
                  {authCtx.isLoggedIn && (
                    <img
                      src={Logoutsvg}
                      style={{ width: "30px" }}
                      alt='view'
                      onClick={logoutHandler}
                    />
                  )}
                </div>
              </div>

              <div className='mr-2 flex md:hidden'>
                <button className='text-gray-800 dark:text-white hover:text-gray-300 inline-flex items-center justify-center p-2 rounded-md focus:outline-none'>
                  <svg
                    width='20'
                    height='20'
                    fill='currentColor'
                    className='h-8 w-8'
                    viewBox='0 0 1792 1792'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path d='M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z'></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          {/* <div className='md:hidden '>
            <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3'>
              <div className='text-gray-800 hover:text-gray-800 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium'>
                Home
              </div>
              <div className='text-gray-300 dark:text-white block px-3 py-2 rounded-md text-base font-medium'>
                Search
              </div>
              <div className='text-gray-300 hover:text-gray-800 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium'>
                Post
              </div>
              <div className='text-gray-300 hover:text-gray-800 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium'>
                Profile
              </div>
            </div>
          </div> */}
        </nav>
      </div>
      <Model show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
};
export default Navbar;
