const Navbar = () => {
  return (
    <nav>
      <div className="flex justify-center p-4 bg-red-300 shadow-xl shadow-red-200">
        <div className="flex items-center ">
          <div className="w-[10%] ">
            <img
              src="https://images.unsplash.com/photo-1453487977089-77350a275ec5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fGdzZHxlbnwwfHwwfHx8MA%3D%3D"
              alt="logo"
            />
          </div>
          <div>
            <h1 className="text-[36px] font-[800] pl-[1rem]">
              <span className="text-yellow-700">DOG </span>CARE
            </h1>
          </div>
        </div>
        <div className="flex flex-col items-center gap-4 cursor-pointer ">
          <div>
            <button
              type="button"
              className="text-[20px] font-[700] border-2 border-black px-[1rem] bg-black text-white hover:bg-white hover:text-black "
            >
              DONATE NOW !
            </button>
          </div>
          <div className="flex gap-8 text-[16px] font-[600]">
            <span>HOME</span>
            <span>ABOUT</span>
            <span>CONTACT US</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
