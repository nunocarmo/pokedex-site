import { useRef } from "react"
import "./style.css"

function SideBar({ searchHandle, resetHandle }) {
    const textInput = useRef();
    return (
        <nav id='sideBar'>
            <label htmlFor="pokemon-search">Search Pokemon Name</label>
            <input type="text" name='pokemon-search' ref={textInput} />
            <button className='search buttonStyle' onClick={() => searchHandle(textInput.current.value)}>Search</button>
            <button className='reset buttonStyle' onClick={() => {
                textInput.current.value = "";
                resetHandle()
            }}>Reset</button>
        </nav>
    )
}

export default SideBar