export function randomId() {
    let arr = ``
    for(let i = 0; i < 10; i++) {
        arr += `${Math.floor(Math.random() * 7)}`
    }
    return arr
}