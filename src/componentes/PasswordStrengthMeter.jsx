import { use } from 'react';
import styles from './PasswordStrengthMeter.css';

function calculateStrength(password) {
    if (password === "") return "vacía";
    if (password.length < 8) return "débil";
    if (password.length >= 8 && /\d/ .test(password) === false) return "media";
    if (password.length >= 8 && /\d/ .test(password) === true && /[^a-zA-Z0-9]/.test(password) === false ) return "fuerte";
    if (password.length >= 8 && /\d/ .test(password) === true && /[^a-zA-Z0-9]/.test(password) === true ) return "muy fuerte";
}


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
            <label htmlFor="password">Contraseña</label>
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
        </div>
    )
}

export default PasswordStrengthMeter; 