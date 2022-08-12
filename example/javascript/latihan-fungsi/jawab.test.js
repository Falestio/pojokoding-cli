const chai = require('chai');  
const assert = chai.assert;    // Using Assert style
const expect = chai.expect;    // Using Expect style
const should = chai.should();  // Using Should style

const { sum } = require('./jawab')

describe('Latihan Fungsi Dasar - Javascript', () => {
    it('Jika a = 3, dan b = 2 maka fungsi harus menghasilkan 5', () => {
        sum(2 ,3).should.equal(5)
    })
})