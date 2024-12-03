import { render, useState } from "hono/jsx/dom";
import {IsFoolNum,CreateFoolNumDic} from "../mod.ts"
import image from "./foolimage.jpg"

function App() {
    const [dict, setDict] = useState(CreateFoolNumDic((x)=>{x=Number(x);return x%2===0},{maxNum:100}));
    const [fool, setFool] = useState(false);
    const [num, setNum] = useState(0);
    return (
        <>
        <h1>Fool!!</h1>
        <input type="number" name="a" id="a"/>
        <button onClick={() => setFool(IsFoolNum((document.getElementById("a") as HTMLInputElement).value, dict))}>IsFool??</button>
        <div class="foolbox">
            {fool ? <Fool/> : <nonFool/>}
        </div>
        </>
    )
}

function nonFool() {
    return (<>This is not fool</>)
}
function Fool() {
    return (<><img src={image} alt="fool image" /></>)
}

render(<App/>,document.getElementById("app")!);