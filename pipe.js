/* 
    $$([1,2,3,4]) 
    | fn1
    | fn2
    | fn3
    | _end
  
*/

const $$ = ((scope) => {

    let pipes = []
    let pipedData = null
    let addToPipe = false 

    const executePipe = () => {
        pipes.reduce((prevVal, fn) => fn(prevVal),pipedData)
        pipes = [],
        addToPipe = false
    }

    scope._end = {
        valueOf: executePipe
    }

    Function.prototype.valueOf = function (){
        return addToPipe ? pipes.push(this) : this
    }

    return (newPipedData) => {
        pipedData = newPipedData,
        addToPipe = true
    }

})(window)


// Some scooby doo hack to make interface curried
const sort = xs => Array.prototype.sort.apply(xs);

const doubleAll = xs => xs.map(x => 2*x);

const print = console.log

const removeLessThenThree = xs => Array.prototype.filter.apply(xs, [n => n >= 3])

