export default function takspage() {
    return (

        <div className="bg-white h-screen flex gap-6 justify-center items-center flex-col">

          <div className= "flex gap-4 justify-center"> 
            <div className="bg-blue-100 h-76 w-116 flex flex-col justify-between p-8 rounded-4xl text-blue-950">
                <div className="flex gap-2">
                    <img src="/palette.svg"/>
                     <p>Design </p>
                </div>
                <div>
                    <h1 className="text-4xl font-bold">Adobe Photoshop </h1>
                    <div className=" flex justify-between">
                    <p className="text-lg"> in 3 days</p>
                    <div className="flex -space-x-3 items-center">
                <img src="/miki.jpg" className="w-6 h-6 rounded-full border-2 border-white" />
                 <img src="/bunny.jpg" className="w-6 h-6 rounded-full border-2 border-white" />
                  <img src="/sepongbob.jpg" className="w-6 h-6 rounded-full border-2 border-white" />

                  <div className="rounded-full bg-white p-1 w-6 h-6 text-xs">+3 </div>
                 </div>
                </div>
                </div>
                
         </div>

         <div className="bg-green-100 h-76 w-116 flex flex-col justify-between p-8 rounded-4xl text-blue-950">
            <div className= "flex justify-between items-center">
              <div className=" flex gap-2">
                <img src="/terminal-2.svg"/>
                <p>AI </p>
                
                 </div>
                 <div>  <img src="/star.svg"/> </div>
             </div>

             <div>
                <h1 className="text-4xl font-bold">DALL.E, Midjourney,Stable Diffusion </h1>

                <div className=" flex justify-between"> 
               <p className="text-lg"> in 5 days</p>

               
               <div className="flex -space-x-3 items-center">
                <img src="/miki.jpg" className="w-6 h-6 rounded-full border-2 border-white" />
                 <img src="/bunny.jpg" className="w-6 h-6 rounded-full border-2 border-white" />
                  <img src="/sepongbob.jpg" className="w-6 h-6 rounded-full border-2 border-white" />

                  <div className="rounded-full bg-white p-1 w-6 h-6 text-xs">+3 </div>
                 </div>
             </div>
            </div>
        </div>

         </div>
         

        <div> 
        <div className="flex gap-4 justify-center">
          <div className= "flex gap-4 justify-center"> 
         <div className="bg-purple-100 h-72 w-96 flex flex-col justify-between p-8 rounded-4xl text-blue-950">
              <div className="flex gap-2">
                <img src="/palette.svg"/>
                <p>Design </p>
             </div>
             <div>
                <h1 className="text-4xl font-bold">Figma</h1>
               <p className="text-lg"> 8 hours ago</p>
             </div>
         </div>

         <div className="bg-orange-100 h-72 w-96 flex flex-col justify-between p-8 rounded-4xl text-blue-950">
              <div className="flex gap-2">
                <img src="/code.svg"/>
                <p>Codding </p>
             </div>
             <div>
                <h1 className="text-4xl font-bold">Python </h1>
               <p className="text-lg"> 2 days ago</p>
             </div>
         </div>

         <div className="bg-pink-100 h-72 w-96 flex flex-col justify-between p-8 rounded-4xl text-blue-950">
              <div className="flex gap-2">
                <img src="/palette.svg"/>
                <p>Design </p>
             </div>
             <div>
                <h1 className="text-4xl font-bold">Sketch </h1>
               <p className="text-lg"> 4 days ago</p>
             </div>
         </div>
         </div>
         </div>
        </div>
        </div>
    

    )
}