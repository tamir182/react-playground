import MenuItem from "./Menu/MenuItem/MenuItem";
import Menu from "./Menu/Menu";
import Article from "./Article/Article"
import Initials from "./Initials/Initials";
import DayOfWeek from "./DayOfWeek/DayOfWeek.js";
import Counter from "./Counter/Counter"
import StudentPicker from "./StudentPicker/StudentPicker"
import RandomColorSquare from './RandomColorSquare/RandomColorSquare'
import './App.css';


function clickHandler() {
    console.log('you clicked');
}

function App() {
  return (
    <div>


       <RandomColorSquare/>

     {/*   ------------*/}
     {/*<button onClick={clickHandler}>Click me</button>*/}

     {/*<br/>-----*/}

     {/*<Counter/>*/}
     {/*   -----*/}
     {/*   <StudentPicker/>*/}
     {/*   -----*/}
        <Menu>
           <MenuItem label="Homepage" link="/" icon={'  '}/>
            <MenuItem label="Gallery" link="/gallery"/>
            <MenuItem label="Contact" link="/contact"/>
            <MenuItem label="About" link="/about"/>
            <MenuItem label="Location" link="/location"/>
        </Menu>
     {/*   ---------*/}
     {/*   <Initials name="tamir amar"/>*/}
     {/*    ----*/}
     {/*<DayOfWeek day={5} />*/}
     {/*     -----*/}
     {/* <Article*/}
     {/* title="thy the world need superman"*/}
     {/* content=" log article  articleartrticlearticlearticlearticle" />*/}
    </div>
  );
}

export default App;
