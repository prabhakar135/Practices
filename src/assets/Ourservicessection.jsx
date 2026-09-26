import Ourservices from "../assets/Ourservices"

function Ourservicessection (){
    return(
        <section className="bg-dark text-white"> 
        <div>
            <h3 className ="text-center">Our Services</h3>
            <div className ="mt-5">
            <Ourservices/>
            </div>
            <div className="text-center mt-5">
            <button  className="btn btn-warning text-white">View More</button>
            </div>
        </div>
        </section>
    )
}
export default Ourservicessection
