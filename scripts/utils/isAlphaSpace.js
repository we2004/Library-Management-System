//this to make sure that the name contains characters and spaces
export function isAlphaOrSpace(char) {
    return /^[A-Za-z\s]$/.test(char);
}

//to make sure the numeric data is not characers
export function isAlpha(char) {
    return /^[A-Za-z]$/.test(char);
}
