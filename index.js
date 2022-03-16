function findMatching(arr,string){
    let istring = string.toLowerCase();
    const result = arr.filter(names => names.toLowerCase() == istring);
    return result
};
function fuzzyMatch(arr,string){
    const result = arr.filter((name) => name.startsWith(string));
    return result;
};
function matchName(driver,string){
    let istring = result
    const result = driver.filter(names => names.name == string);
    return result;
}