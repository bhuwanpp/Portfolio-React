import { useState } from "react";

// frontend
 function Frontend() {
  return (
    <div className="frontend text-base font-semibold  grid gap-5">
        <div className="html">
            <p>HTML</p>
            <hr class="border-t-2 border-text-color my-2"/>
        </div>
        <div className="html">
            <p>CSS</p>
            <hr class="border-t-2 border-text-color my-2"/>
        </div>
        <div className="html">
            <p>Tailwind CSS</p>
            <hr class="border-t-2 border-text-color my-2"/>
        </div>
        <div className="html">
            <p>JavaScript</p>
            <hr class="border-t-2 border-text-color my-2"/>
        </div>
        <div className="html">
            <p>React Js</p>
            <hr class="border-t-2 border-text-color my-2"/>
        </div>
    </div>
  )
}
// frontend
 function BackEnd() {
  return (
    <div className="backend uppercase grid gap-5">
        <div className="html">
            <p>Node Js</p>
            <hr class="border-t-2 border-text-color my-2"/>
        </div>
        <div className="html">
            <p>MongoDB</p>
            <hr class="border-t-2 border-text-color my-2"/>
        </div>
    </div>
  )
}
//frontend and backend
export  function FullStack() {
    const [showFront, setShowFront] = useState(false);
    const [showBack, setShowBack] = useState(false);

    function handleFront() {
        setShowFront(!showFront);
        setShowBack(false)
      }
    function handleBack() {
        setShowBack(!showBack);
        setShowFront(false)
      }
   
  return (
    <div className="fullStack middle flex  justify-center gap-10 pb-20">
         <div className="front">
            <button onClick={handleFront}>
                <div className="flex items-center gap-3">
                    <div className="icon text-3xl text-text-color">
                        <iconify-icon icon="uil:brackets-curly"></iconify-icon>
                            </div>
                        <p className='text-xl font-semibold pb-6'>Frontend development</p>
                            {showFront ? (
                               <i className="fa-solid fa-chevron-up text-lg text-text-color"></i>
                              ) : (
                                <i className="fa-solid fa-chevron-down text-lg text-text-color"></i>
                              )}
                        </div>
                        <p className='text-text-color -mt-6'>With 1+ years of experience</p>
                        </button>
                        {showFront && 
                         <Frontend/>
                        }
                    </div>
                    <div className="back">
                        <button onClick={handleBack}>
                            <div className="flex items-center gap-3">
                                <div className="icon text-3xl text-text-color">
                                    <iconify-icon icon="uil:server-network"></iconify-icon>
                                </div>
                                <p className='text-xl font-semibold pb-6'>Backend development</p>
                                {showBack ? (
                                   <i className="fa-solid fa-chevron-up text-lg text-text-color"></i>
                                  ) : (
                                    <i className="fa-solid fa-chevron-down text-lg text-text-color"></i>
                                  )}
                            </div>
                            <p className='text-text-color -mt-6'>With 1+ years of experience</p>

                        </button>
                        {showBack && 
                         <BackEnd/>
                        }
                    </div>
    </div>
  )
}
export default function Skills() {
    const [showEducation, setShowEducation] = useState(true); // Initialize with education content
    const [showWork, setShowWork] = useState(false);
  
    function toggleContent(contentType) {
      setShowEducation(contentType === "education");
      setShowWork(contentType === "work");
    }
    return (
        <div className="skills grid h-screen pt-20 " id='skills'>

            <div className="technologies">
                <div className="up">
                    <div className="a-top flex flex-col items-center justify-center text-center  pb-20">
                        <h2 className='text-5xl'>Technologies</h2>
                        <p className='text-text-color'>Expert proficiency</p>
                    </div>
                </div>
                {/* full stack */}
                    <FullStack/>
                </div>
        
            {/* qualification */}
            <div className="qualification">
                <div className="up pb-20">
                    <div className="a-top flex flex-col items-center justify-center text-center ">
                        <h2 className='text-5xl'>Qualification</h2>
                        <p className='text-text-color'>Why you should hire me</p>
                    </div>
                </div>
                <div className="down flex justify-center gap-10">
                <button onClick={() => toggleContent("education")}>
                    <div className="education flex gap-2  cursor-pointer hover:text-text-color">
                        <div className="ed text-2xl pt-1">
                        <iconify-icon icon="tdesign:education"></iconify-icon>
                        </div>
                        <p className="text-xl font-semibold">Education</p>
                    </div>
                </button>
                <button onClick={() => toggleContent("work")}>
                    <div className="work flex gap-2 cursor-pointer hover:text-text-color">
                        <div className="briefcase text-2xl pt-1">
                        <iconify-icon icon="pajamas:work"></iconify-icon>
                        </div>
                        <p className="text-xl font-semibold">Work</p>
                    </div>
                </button>
                </div>
                {showEducation && (
                 <div className="patan h-20 grid justify-center text-gray-400 pt-5 pr-32">
                 <h6 className="text-xl font-semibold text-gray-300">Computer Science & IT</h6>
                 <p className="">Patan multiple campus</p>
                 <div className="icon flex gap-2 items-center pt-2">
                 <i class="fa-solid fa-calendar-days"></i>
                 <p>2021 - Date </p>
                 </div>
             </div>
                     )}
                     {showWork && (
                 <div className=" grid  h-20 justify-center text-gray-400 pt-5 pr-32">
                <h6 className="text-xl font-semibold text-gray-300">Don't have any experience</h6>
            </div>
                    )}
            </div>
        </div>
    )
}
