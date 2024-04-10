import { IoMdArrowRoundUp } from "react-icons/io";

const Header = () => {
  return (
    <div className="w-full h-screen bg-[#333] px-1 overflow-hidden">
      <div className="mt-28 px-20">
        {["We create", "eye-opening", "presentations"].map((val, index) => <div key={index}>
          <div className="maker">
            <div className="flex items-end w-fit">
              {index ===1 && <div className="mr-[1vw] w-[9vw] h-[5.5vw] relative rounded-md  bg-green-500"></div>}
              <h1 className="text-[9vw] uppercase leading-[6.6vw] font-['FoundersGrotesk']">
                  {val}
              </h1>
            </div>
          </div>
        </div>)}
        <div className="border-t-2 border-zinc-100 mt-32 flex justify-between py-2 px-4">
          {["For public and private companies","From the first pitch to IPO"].map((val, index) =><div key={index} className="text-lg">{val}</div>)}
          <div className="flex gap-x-2">
            <div className="px-4 py-2 border rounded-3xl border-zinc-700">START THE PROJECT</div>
            <span className="px-3 py-2 rounded-full border border-zinc-700 flex justify-center items-center rotate-45"><IoMdArrowRoundUp  /></span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
