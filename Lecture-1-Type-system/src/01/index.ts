function sort(items: number[], order?: string){
    return items.sort((a, b) => {
        if (order === 'asc'){
            return a - b
        }
        return b - a
    })
}



const result = sort([14, 7, 17, 6, 8])
const result1 = sort([14, 7, 17, 6, 8], 'asc')
console.log(result);
console.log(result1);