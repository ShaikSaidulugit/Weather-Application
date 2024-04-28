import { BrowserRouter,Routes,Route,Link } from "react-router-dom";
import Comp1 from "./Comp1"
const Demo=()=>{
    return(
        <>
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Comp1/>}/>
        </Routes>
        </BrowserRouter>
        </>
    )
}
export default Demo
