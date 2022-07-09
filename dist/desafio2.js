var ocupação;
(function (ocupação) {
    ocupação[ocupação["atriz"] = 0] = "atriz";
    ocupação[ocupação["padeiro"] = 1] = "padeiro";
})(ocupação || (ocupação = {}));
var pessoa1 = {
    name: "maria",
    age: 29,
    occupation: ocupação.atriz
};
var pessoa2 = {
    name: "roberto",
    age: 19,
    occupation: ocupação.padeiro
};
var pessoa3 = {
    name: "laura",
    age: 32,
    occupation: ocupação.atriz
};
var pessoa4 = {
    name: "carlos",
    age: 19,
    occupation: ocupação.padeiro
};
