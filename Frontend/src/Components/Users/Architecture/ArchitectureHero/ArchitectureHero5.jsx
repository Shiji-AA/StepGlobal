
import img1 from "../../../../assets/architect/1.jpg"
import img2 from "../../../../assets/architect/2.jpg"
import img3 from "../../../../assets/architect/3.jpg"
import img4 from "../../../../assets/architect/1.jpg"
import img5 from "../../../../assets/architect/2.jpg"
import img6 from "../../../../assets/architect/3.jpg"
import { useState } from "react"
function ArchitectureHero5() {
    const [isClick, setIsClick]=useState(false);


    const articles=[
        {id:1,img:img1,headline: "Loptrem 1 lorem lorem lorem lorem lorem lorem,lorem"},
        {id:2,img:img2,headline: "Loptrem 2 lorem lorem lorem lorem lorem lorem,lorem"},
        {id:3,img:img3,headline: "Loptrem 3 lorem lorem lorem lorem lorem lorem,lorem"},
        {id:4,img:img4,headline: "Loptrem 4 lorem lorem lorem lorem lorem lorem,lorem"},
        {id:5,img:img5,headline: "Loptrem 5 orem lorem lorem lorem lorem lorem,lorem"},
        {id:6,img:img6,headline: "Loptrem 6 lorem lorem lorem lorem lorem lorem,lorem"},
   

    ]
    return (
        <>
        <section className="p-40 flex flex-col gap-20 items-center justify-center border-b border-gray-300">
        <h1 className="font-custom text-4xl font-normal">Actual News</h1>
            <div className="flex flex-wrap items-center justify-center gap-12">
                {articles.map((article,index)=>{
                    return (<div  className= {`${index >=4 && isClick ? "hidden" :""} flex flex-col gap-2 w-96 `}key={article?.id}>
                        <img className="min-h=[500px] max-h-[600px] h-full object-cover rounded-lg"src={article.img} alt=""/>
                        <h3 className="font-custom">{article.headline}</h3>
                        <button className="font-custom text-teal-500 font-normal   ">More details</button>
                    </div>)
                })}
            </div>
            <button  onClick= { ()=>setIsClick(!isClick)}className=" font-custom btn border border-gray-300 px-12 mt-12">See {isClick? "More":"Less"}</button>


        </section>
            
        </>
    )
}

export default ArchitectureHero5
