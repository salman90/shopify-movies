/**
 * @description removes an object from an array
 * @param {Object} nominationItem 
 * @param {Array} stateArray 
 * @returns {Array} 
 */
export const removeFromArray = (nominationItem, stateArray) => {
    let copyArray = [...stateArray];
    let index = copyArray.indexOf(nominationItem);
    if (index !== -1) 
    {
        copyArray.splice(index, 1);
        return copyArray
    }
    else
    {
        return null;
    }
}

