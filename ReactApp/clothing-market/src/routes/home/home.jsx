import Directory from "../../components/directory/directory.jsx"
import { Outlet } from "react-router-dom";
import { Fragment } from "react";

const Home = ()=>{


 return(
      <Fragment>
      	<Outlet/>
      	<Directory/>
      </Fragment>
   )
}



export default Home;
