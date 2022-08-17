const { tambah } = require('./index')
const expect = require('chai').expect

describe('Hasil Test', () => {
    it('Fungsi mengeluarkan output', () => {
        expect(tambah()).to.not.be.false;
    })

    it('Test Uji 1 (a = 2, b = 2)', () => {
        expect(tambah(2, 3)).to.equal(5);
    })

    it('Test Uji 2 (a = -122, b = 22)', () => {
        expect(tambah(-122, 22)).to.equal(-100);
    })
})