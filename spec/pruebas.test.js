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

describe ('Test 1', function() {

  it('Super Sale', function() {
    const coTest = new CarInsurance([ new Product('Super Sale', 3, 10) ])
    coTest.updatePrice()
    coTest.updatePrice()
    const products = coTest.updatePrice()
    console.log('products: ', products)
    expect(products[0].price).equal(4)
  })

})

describe ('Test 2', function() {

  it('Special Full Coverage', function() {
    const coTest = new CarInsurance([ new Product('Special Full Coverage', 3, 10) ])
    coTest.updatePrice()
    coTest.updatePrice()
    coTest.updatePrice()
    const products = coTest.updatePrice()
    console.log('products: ', products)
    expect(products[0].price).equal(0)
  })

})