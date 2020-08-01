var convert = require('xml-js');

module.exports.XML2JSON = function (xml) {
    return convert.xml2json(xml, {compact: true, spaces: 4});
}

module.exports.JSON2XML = function (json) {
    var options = {compact: true, ignoreComment: true, spaces: 4};
    return convert.json2xml(json, options);
}
