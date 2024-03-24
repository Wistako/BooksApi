const formatFullname = require('../formatFullname.js');
const expect = require('chai').expect;

describe('FormatFullname', () => {

  it('should return an error if "fullName" arg is not a string', () => {
    expect(formatFullname(undefined)).to.equal(false);
    expect(formatFullname(12)).to.equal(false);
    expect(formatFullname({})).to.equal(false);
    expect(formatFullname([])).to.equal(false);
    expect(formatFullname(function() {})).to.equal(false);
  });
  
  it('should return an error if "fullName" arg is empty', () => {
    expect(formatFullname()).to.equal(false);
  });

  it('should return an error if "fullName" arg is not in format "firstName lastName"', () => {
    expect(formatFullname('Lorem')).to.equal(false);
    expect(formatFullname('Lorem Ipsum dolor')).to.equal(false);
  });
});