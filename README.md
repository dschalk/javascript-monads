
The documentation for this project is running online at [http://transcendent.ninja](http://transcendent.ninja). You can run it locally by loading the "index.html" file directly into a browser, or by firing up any web server from the cloned repo. You might be able to run modified code by entering "npm install" followed by "webpack" on your command line. It works for me in my Ubuntu 14.04 box.  

The monads used in the demonstration are instances of the following classes:
```js
class Monad {
  constructor(z) {

    this.x = mobservable.makeReactive(z);

    this.bnd = (func, ...args) => {
      return func(this.x(),this, ...args);
    };

    this.fmap = (func, ...args) => {
      return func(this, ...args);
    };

    this.id = () => {return this};

    this.ret = a => {
      this.x(a);
      return this;
    };
  }
};

class MonadObject {
  constructor(ob) {

    this.x = mobservable.makeReactive(ob);

    this.bnd = (func, ...args) => {
      return func(this.x, this, ...args);
    };

    this.fmap = (func, ...args) => {
      return func(this, ...args);
    };

    this.id = () => {return this};

    this.ret = w => {
      Object.assign(this.x, w);
      return this;
    }
  }
}

class MonadArray {
  constructor(z) {

    this.x = mobservable.makeReactive(z);

    this.bnd = (func, ...args) => {
      return func(this.x,this, ...args);
    };

    this.fmap = (func, ...args) => {
      return func(this, ...args);
    };

    this.id = () => {return this};

    this.ret = a => {
      this.x.replace(a);
      return this;
    };
  }
};
```
Here is some of the commentary you will find in the application running at [http://transcendent.ninja](http://transcendent.ninja). It includes live examples of the code discussed below.

 This demonstration does not contain formal proofs. It does show, among other things, that these little inventions obey the monad laws. The "return" function is the left and right identity function, and the evaluation of linked "bind" methods gives the same result regardless of how you group the evaluations. That's a good sign that they are mathematical monads, but this isn't about category theory. The significance of adherence to the monad laws is that these entities will be versitile, predictable, modular, composable, and maintainable.

 Instances of the three classes shown above best resemble Haskell monads when the functions used as arguments for 'bnd' and 'fmap' operate only on the value of the calling monad. Isolation from other parts of the program is not enforced. The 'monads' have access to all of the variables in the scope in which they were instantiated.
 
 I don't think anything would be gained by adding the overhead involved in insisting that monadic values be immutable, and I think it would be absurd to create a fresh monad instance each time the value contained in a monad changed. Trying to mirror Haskell with Javascript is, no doubt, an amusing and satisfying endeavor; but it isn't exactly my cup of tea. This project might always remain a toy, but I want it to have the potential of being useful in chained computations in which JS6 promises aren't the better option.

In the online demo, I show instances of the three monad classes conforming to the monad laws. I didn't cherry pick these because they conform. I can't think of an example that doesn't.

Here are the monad laws: For all monads 'm' with value type 'a' (primitive, object, or array) and for all functions f and g mapping values of type a to monads of type a, the folling three equalities are true:
```
ret(a).bnd(f)              = f(a)
m.bnd(ret)                 = m
m.bnd(x => f(x).bnd(g))    = m.bnd(f).bnd(g)
```
Both sides of the equation on the third line show 'm' ending up with the value g(f(v)) where 'v' is the original value of m.
In this section, we work with monads whose 'bnd' method maps objects to MonadObject instances. If m is an instance of MonadObject with value a, then m.bnd(f,this, ...args) returns 'm' with the value 'f(a,this, ...args)', where 'this' is the monad calling 'bnd' ('m' in this case), and 'args' are optional arguments.

The first two laws are known as the left and right identity laws respectively. We demonstrate it here with the functions 'obDouble' and 'obTripple', which are defined as follows:
```js
obDouble = (x,mon) => {
  for (let o in x) {
    mon.x[o] = x[o] + x[o];
  }
  return mon;
}

obTripple = (x,mon) => {
  for (let c in x) {
    mon.x[c] = 3*x[c];
  }
  return mon;
}
```
These works with monads or, as shown here, as a stand-alone functions which take a value and an object as arguments and return a MonadObject instace with its value doubled or trippled.

###Demonstration of the Left Identity Property

The running demo shows this button in action:
```js
onClick={() => {this.obDouble({a:2,b:4,c:6}, mo1)
```
It then show the same result is obtained by binding obDouble to a monad containing {a:2,b:4,c:6} with this demonstration:
```js
onClick={() => {mo2.ret({a:2,b:4,c:6}).bnd(this.obDouble)
```
".bnd(this.obDouble)" caused obDouble to operate on the value of the monad that called 'ret' on {a:2,b:4,c:6}; that value being {a:2,b:4,c:6}.
The left identity property of monads is 'ret(x).bind(f) = f(x)' We illustrate the left identity feature of ObjectMonad by executing:
```js
onClick={() => {mo2.ret({a:2,b:4,c:6}).bnd(this.obDouble)
```
As shown in the demo, both ways of providing an argument to 'obDouble' yield the same result. The left identity law holds in this case and, I postulate, in all other cases.

###Demonstration of the Right Identity Property

The right identity law is 'monad.bind(return) = monad'. Here we test right identity on 'mo2':
```js
onClick={() => {mo2.bnd(mo2.ret)
```
As expected, 'mo2' doesn't change, no matter what its value happens to be.  </p>

###Demonstration of the Associative Property

The associative law is "m.bnd(x => f(x).bnd(g)) = m.bnd(f).bnd(g)". We demonstrate the associative law by calling 'mo1.bnd' on the composite of 'obTripple' and 'obDouble' and then calling 'mo2.bind' on the functions sequentially.
```js
onClick={() => {mo1.bnd(x => this.obTripple(x,mo1).bnd(this.obDouble))

onClick={() => {mo2.bnd(this.obTripple).bnd(this.obDouble)
```
'bnd' is a function whose arguments must start with a function, and which can accept additional optional arguments. The function operates on the calling monad's value, 'this' referring to the calling monad, and possibly other arguments which were provided to 'bnd'. The types of the arguments accepted by 'ret' must be the same type as the value of the monad which calls 'ret'. If monad 'm' calls '.bnd(m2.ret)', 'm2.ret' operates on the value of 'm' (which is m.x), giving 'm2' that same value. 'm2.ret' returns the monad 'm2', therefore a subsequent '.ret(arg)' call will cause 'm2' to have the value 'arg'.

The third line below illustrates the use of 'ret' to change the calling monad to 'mo2'. A more efficient method is used in line '5'. The method 'id' changes the calling function to 'mo3' without the unnecessary overhead of giving it the value of another monad. Here is the clickable code:
```js
  onClick={() => {mo1
  .ret({a: 'one', b: 'two', c: 'three'})
  .bnd(mo2.ret)
  .ret({a: 'four', b: 'five', c: 'six'})
  .bnd(mo3.id)
  .ret({a: 'SEVEN', b: 'two', c: 'three'})  }}
```
The following code demonstrates an alternative way of changing the calling monad:
```js
  onClick={() => {mo1
  .ret({a: 8, b: 9, c: 10})
  .bnd(() => {return mo2
    .ret({a: 11, b: 12, c: 13})})
    .bnd(() => {return mo3
      .ret({a: 14, b: 'two', c: 'three'})})  }}
```
There are more examples of MonadObject, as well as Monad and MonadArray, in the running demo.
