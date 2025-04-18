import React, {useState} from "react"
export default function Player ({name, symbol}) {
    const [isEditing, setIsEditing] = useState(false);
    let player = <span className='player-name'>{name}</span>;
    let btnCaption = 'Edit';
    const handleSubmit = () => {
        setIsEditing((isEditing) => !isEditing);
    }
    if(isEditing){
        player = <input type='text' required />
        btnCaption = 'Save';
    }
    return (
        <>
            <li>
              <span className='player'>
              {player}
              <span className='player-symbol'>{symbol}</span>
              </span>        
              <button onClick={handleSubmit}>{btnCaption}</button>      
            </li>
        </>
    )
}