/*jshint esversion: 6*/

var chai = require("chai");
var expect = chai.expect;
var quicksort = require("../quicksort");

var sortA = [35,45,5,40,50,25,10,15,20,30];
var sortC = [26,6,8,14,20,4,10,12,2,16,18,22,24];

describe("quicksort", function(){

  it("should be a function", function(){
    expect(quicksort).to.be.a("function");
  });

  it("should return an array", function(){
    expect(quicksort(sortA)).to.be.a("array");
  });

  it("should return the array sorted to consecutive order (left to right)", function(){
    console.log(quicksort(sortA), 'done')
    expect(quicksort(sortA)).to.deep.equal([5,10,15,20,25,30,35,40,45,50]);
    expect(quicksort(sortC)).to.deep.equal([2,4,6,8,10,12,14,16,18,20,22,24,26]);
  });

});