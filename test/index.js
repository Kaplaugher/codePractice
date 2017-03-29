const fs = require('fs-promise');
const _ = require('lodash');

var arr = [];
var route_split = [];
fs.readFile('input.txt')
  .then((data) => {
    // console.log(data);

    arr.push(data.toString().split('\n'));
     var another_arr = _.flatten(arr);
    //  console.log(another_arr);
    another_arr.forEach((route) => {
      // console.log(route);
      route_split = route.split("/");
      console.log(route_split);
    })
  });
