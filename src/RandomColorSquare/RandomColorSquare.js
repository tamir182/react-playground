
import {useState} from "react";
import "./RandomColorSquare.css"

export default function RandomColorSquare(props) {
    const [color, setColor] = useState('black');
    const colors = ['red','blue','orange','pink','black'];
    function clickHandler(){
        let num = Math.floor(Math.random() * colors.length);
        setColor(colors[num]);
    }


    return <div className="divColor" onClick={clickHandler} style={{'background': color}}> </div>

}




