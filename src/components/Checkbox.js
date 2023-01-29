import React, {useState} from 'react'
import {ImCheckboxChecked} from 'react-icons/im'

const Checkbox = () => {
    //état de mon bouton par défault initialisé à false
    const [checked, setChecked] = useState(false);

    const onChange = (event) => {
        setChecked(event.target.checked)
    };


    return (
        <div className="checkbox">
            <input type="checkbox" checked={checked} onChange={onChange} />
            {checked && (
                <ImCheckboxChecked />
            )}
        </div>
    )
}

export default Checkbox