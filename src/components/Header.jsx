import Logo from "../images/Mlogo.svg";

const Header = () => {
  return (
    <div className="flex justify-end w-full mt-6 px-20 ">
      <div className="w-1/12 fixed top-10 left-10 right-0 cursor-pointer">
        {" "}
        <img
          src={Logo}
          alt="placeholder"
          className=" w-full mx-auto cursor-pointer hover:scale-110 ransition-transform duration-500"
         
        />
      </div>
      <div className="w-5/6  mt-6 flex  text-white text-lg">
       <div className="mx-auto">Atlas Vector Search Movies </div>
      </div> 
    </div>
  )
}

export default Header