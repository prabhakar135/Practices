import { useState } from "react"
import service1 from "../assets/images/service-1.png"
import service2 from "../assets/images/service-2.png"
import service3 from "../assets/images/service-3.png"
import service4 from "../assets/images/service-4.png"
function Ourservices (){
    const[data,setdata]=useState([
        {
            image:service1,
            tittle:"Engine Repairs",
            desc:"REliable engine repair and maintenance for the home application serimport Ourservice fromices"
        },
        {
            image:service2,
            tittle:"Electrical Services",
            desc:"REliable engine repair and maintenance for the home application serimport Ourservice fromices"
        },
        {
            image:service3,
            tittle:"plumbing services",
            desc:"REliable engine repair and maintenance for the home application serimport Ourservice fromices"
        },
        {
            image:service4,
            tittle:"House Repair&Remodelling",
            desc:"REliable engine repair and maintenance for the home application serimport Ourservice fromices"
        },
,
        

    ])


    return(
        <>
        <div className="row">
            {data.map((user)=>{
                return(
                    <div className="col-md-3 text-center">
                        <div class="border border-primary p-4">

                            <img src={user.image} className="text-white"/>
                            <h4>{user.tittle}</h4>
                            <p>{user.desc}</p>
                            </div>
                        </div>
                )
            })}
        </div>
        </>


    )
}
export default Ourservices