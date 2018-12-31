const expect = require('chai').expect

const CarInsurance = require('../src/carInsurance')
const Product = require('../src/product')

describe ('Co Test', function() {

  it('should foo', function() {
    const coTest = new CarInsurance([ new Product('foo', 0, 0) ])
    const products = coTest.updatePrice()
    expect(products[0].name).equal('foo')
  })

})