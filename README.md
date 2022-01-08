## Pipeable Operator Implementation In JS 

The code for achievieng this functionality is pretty straightforward(~20 lines).

We make use of the feature of "coercion" to primitive values done by some of the 
binary operators and enhance it's usability by extending it to the Functions.

Example - 

![image](https://user-images.githubusercontent.com/42679346/148640362-e6d1f93c-e20f-4d59-8524-ace542767baf.png)


So by keep this behavior, (and overwriting primitive prototypes) I was able to go as far as to make the following work and produce the expected result:


```js

$$([1, 6, 4, 9, 3])
| sort
| removeLessThanThree
| doubleAll
| print // prints [6, 8, 12, 18]
| _end

```


This is designed just for fun and exploring Javascript's hidden functionalities 

Leave a ⭐ if you liked the magic :D
