import React, {useState} from "react"
export default function Player ({name, symbol}) {
    const [playerName, setPlayerName] = useState(name);
    const [isEditing, setIsEditing] = useState(false);
    let player = <span className='player-name'>{playerName}</span>;
    let btnCaption = 'Edit';
    const handleSubmit = () => {
        setIsEditing((isEditing) => !isEditing);
    }
    function handleChange (e) {
        setPlayerName(e.target.value);
    }
    if(isEditing){
        player = <input type='text' required value={playerName} onChange={handleChange}/>
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