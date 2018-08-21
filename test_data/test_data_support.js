module.exports.sortStringArray = function (a, b) {
    let x = a.item.title.toLowerCase();
    let y = b.item.title.toLowerCase();
    if (x < y) {
        return -1;
    }
    if (x > y) {
        return 1;
    }
    return 0;
};

module.exports.showInnerIdAndValueArray = function (map, logName) {
    console.log('--' + logName + '--');
    map.forEach((item) => {
        console.log(JSON.stringify(item))
    });
};

module.exports.addKey_Map = function (arr) {
    let map = new Map();
    arr.forEach((item, i) => {
        map.set(i,item)
    });
    return map;
};
