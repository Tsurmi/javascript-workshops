## Data and Functions #2 ##

A simple database with users, products, and orders. The task is to write
functions and get all of the tests to pass. The data structure is almost identical
to the first exercise, but the `order` object now contains an array of product
ids.

Please write the following functions:

1. `getProductsForOrder = (data, orderId) => // returns an array of product objects`
1. `getTotalPriceForOrder = (data, orderId) => // returns an order's total price`

### Hints ###

* When writing `getProductsForOrder`, consider copying your `getProductById`
function from the previous lesson. Also, consider writing a `getOrderById` 
function as well.

* `getTotalPriceForOrder` should use `getProductsForOrder` to do its work.