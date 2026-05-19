import { useState } from 'react';
import './PasswordStrengthMeter.css';
import { calculateStrength } from './calculateStrength';


function PasswordStrengthMeter() {
    const [inputValue, setPassword] = useState("");
    const [strength, setStrength] = useState("vacía");

    const handleChange = (e) => {
        const password = e.target.value 
        setPassword(password);
        setStrength(calculateStrength(password));
    }

    return (
        <div className="password-strength-meter">
            <label htmlFor="password">Password</label>
            <input
            id="password"
            type="password"
            value={inputValue}
            onChange={handleChange}
            />
            <p className={strength === 'débil' ?  'debil'
                : strength === 'media' ? 'media'
                : strength === 'fuerte' ? 'fuerte'
                : strength === 'muy fuerte' ? 'muy-fuerte'
                : 'vacia'}>
                    {strength}
            </p>
            <progress value={strength === 'vacía' ? null
                : strength === 'débil' ? 25
                : strength === 'media' ? 50
                : strength === 'fuerte' ? 75
                : strength === 'muy fuerte' ? 100
                : 0} max="100">
            </progress>
        </div>
    )
}

export default PasswordStrengthMeter; 