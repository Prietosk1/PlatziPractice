function findingIndex (selectedArray, selectedString) {
    const firstIndex = selectedArray.indexOf(selectedString)
    const lastIndex = selectedArray.lastIndexOf(selectedString)
    if (firstIndex === -1) {
        return `El arreglo no contiene la palabra`
    } else if (firstIndex === lastIndex){
        return `Primer y ultimo indice de la palabra: ${firstIndex}`
    } else {
        return `Primer indice de la palabra es ${firstIndex}, y el ultimo indice de la palabra es ${lastIndex}.`
    }
}

const myArray = ["manzana","pera","queso","uva","fresa","pera","uva","mango","mango","manzana","banano"]

console.log(findingIndex(myArray,"manzana"))