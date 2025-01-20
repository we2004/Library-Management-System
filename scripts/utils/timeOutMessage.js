
export function timeOutMessage(selector,message) {
    document.querySelector(`${selector}`).innerHTML = message;
    setTimeout(() => {
        document.querySelector(`${selector}`).innerHTML = '';
    }, 3000)
}