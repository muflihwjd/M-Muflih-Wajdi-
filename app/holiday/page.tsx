export default function takspage() {
    return(
        <div className="bg-gray-300 h-screen flex gap-4 justify-center items center flex-col text-black">
           <div className="flex gap-4 justify-center"> </div>

             <div className="bg-white h-110 w-80 flex p-5 rounded-4x1 flex-col gap-4"> </div>

                <div className="flex justify-center">
                    <img src="kucing melamun.png" className="h-60 w-75 items-center rounded-4xl"></img>
                    </div>

                    <div className="flex flex-col">
                        <p className="text 2x1 font-bold text-black"> San Francisco </p>                                        
                           <p className="text-gray-500"> premuim economy </p>

                </div>
 
               <div className="flex justify-between"> </div>
               <img src="tag.svg"></img>
               <p>from $240</p>
               <img src="plane-tilt.svg"></img>
        </div>
    )
}