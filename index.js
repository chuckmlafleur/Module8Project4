function isStrongPassword(password) {
    if (password.length < 8) {
        return false;
    }
    if (password.toLowerCase().includes("password")) {
        return false;
    }
    if (!/[A-Z]/.test(password)) {
        return false;
    }
    if (!/[a-z]/.test(password)) {
        return false;
    }
    if (!/[0-9]/.test(password)) {
        return false;
    }
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
        return false;
    }
    if (/(\w)\1{3,}/.test(password)) {
        return false;
    }
    return true;
}

console.log("Testing isStrongPassword()...");

console.log("Qwerty - " + isStrongPassword("Qwerty"));                    // false - Too short, no number, no special character
console.log("passwordQwerty - " + isStrongPassword("passwordQwerty"));    // false - Contains "password"
console.log("qwerty123 - " + isStrongPassword("qwerty123"));              // false - No uppercase chars, no special character
console.log("Qwerty123 - " + isStrongPassword("Qwerty123"));              // false - No special character
console.log("Qaaaa123! - " + isStrongPassword("Qaaaa123!"));              // false - Repeated sequence of four
console.log("Qwerty123! - " + isStrongPassword("Qwerty123!"));            // true

// Do NOT remove the following line:
export default isStrongPassword;
