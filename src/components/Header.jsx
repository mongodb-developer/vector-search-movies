
import Leaf from "../images/leaf.png"

const Header = () => {
  return (
    <div className="flex justify-end w-full  px-6 ">
     
      <div className="w-5/6 justify-between mt-8 flex  text-white text-xl items-center">
       <div className="">Atlas Vector Search Movies </div>
       <img
          src={Leaf}
          alt="MDB"
          className=" w-6"    
        />
      </div> 
    </div>
  )
}

export default Header