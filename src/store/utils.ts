export const getUniqId = (arr: {id: number}[]) => {
    if(!arr.length) {
        return 1
    }

    return Math.max(...arr.map(({id}) => id)) + 1;
}
