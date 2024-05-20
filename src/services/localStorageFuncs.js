export const setItem = (key, value) => {
    localStorage.setItem(key,JSON.stringify(value))
}
export const getItem = (key) => {
    return JSON.parse(localStorage.getItem(key))
    
}
export const conhecimento = ["item1", "item2", "item3"]