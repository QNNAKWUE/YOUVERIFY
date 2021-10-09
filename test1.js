const isUnique = (str) => {

    //create an empty object
    const obj = {};

    //create a loop through the strings
    for(let i of str) 
        (!obj [i]) ? obj[i] = 1 : obj[i]++;
        for(let i in obj) {
            if(obj[i] > 1) 
            return false
        }
        return true;
    }


//console.log({isUnique : isUnique('beach')}) returns true
//console.log({isUnique : isUnique('onyourown')}) returns false