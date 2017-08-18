## Data and Functions #3 ##

A simple database with users, products, and orders. The task is to write
functions and get all of the tests to pass. The data structure is identical
to the second exercise. We are now going to mutate the data.

Please write the following functions:

1. `addProduct = (data, product) => // adds a new product. Returns the new product`
1. `addOrder = (data, order) => // adds a new order. Returns the new order`

### Hints ###

* The `product` you pass into `addProduct` should not have an `id` property.
Your `addProduct` function should generate a new `id`. The returned `product` object
should contain the new `id`.

* `addOrder` should behave similarly.