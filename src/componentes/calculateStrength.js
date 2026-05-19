export function calculateStrength(password) {
    if (password === "") return "vacía";
    if (password.length < 8) return "débil";
    if (password.length >= 8 && /\d/ .test(password) === false) return "media";
    if (password.length >= 8 && /\d/ .test(password) === true && /[^a-zA-Z0-9]/.test(password) === false ) return "fuerte";
    if (password.length >= 8 && /\d/ .test(password) === true && /[^a-zA-Z0-9]/.test(password) === true ) return "muy fuerte";
}