import pagenotfound from "./components/pagenotfound.jpg"
const NotFound= () =>{
    return(
    <div className="Errorpage">
        <h1 style={{color:"#56642A"}}>Error 404</h1>
        
        <img src={pagenotfound} height="627" width="926" alt="not found" />
    </div>
    )
}
  
export default NotFound;