const strs = ["eat", "tea", "tan", "ate", "nat", "bat"];

var groupAnagrams = function(strs) {
    let check = {};

    for(const str of strs){
        let key = [...str].sort().join('');

        if(!check[key]){
            check[key] = [];
        }
        check[key].push(str);
    }
    return Object.values(check);
};
console.log(groupAnagrams(strs));