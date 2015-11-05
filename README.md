#Javascript Monads

Originally, I used the excellent Mobservable package to make the browser interface instantly reflect changes in the values of the monads. Since I don't work at Facebook, where I would cause consternation for "setting a bad example" and/or failing to follow guidelines, I am free to use "forceUpdate()" at the end of monadic computations, thereby providing a fluent user interface with minimal overhead. I don't bother with the state object, nor do I define props. I feel that I have taken control of React, and it has become a very useful tool.

The code pertaining to monads, along with explanations and running examples, can be found at [http://transcendent.ninja](http://transcendent.ninja). Here is the class that generates the monad instances:
```Javascript
class Monad {
  constructor(z) {

    this.x = z;

    this.bnd = (func, ...args) => {
      return func(this.x, this, ...args);
    };

    this.ret = a => {
      this.x = a;
      return this;
    };
  }
};
```
Here are some of some of the functions which are used by the "bnd" method in the examples:
```Javascript
  refresh = (x,mon) => {
    this.forceUpdate.apply(this);
    return mon;
  };

  double = (x,mon) => {
    mon.ret(x+x);
    return mon;
  };

  cube = (x,mon) => {
    mon.ret(x*x*x);
    return mon;
  };

  add = (x,mon,y) => {
    mon.ret(x + y);
    return mon;
  }

  mult = (x,mon,y) => {
    mon.ret(x * y);
    return mon;
  }

  ran = (x,mon) => {
     mon.ret(Math.floor(Math.random() * (-4) + 5));
     return mon;
   }

  ch = (x,mon,a,b,c) => {
   if (a === b && a===c) {
     mon.ret('Winner! Three of a kind');
     return mon;
   }
   if (a === b || a ===c || b ===c) {
     mon.ret('Pair. Try for three');
     return mon;
   }
   mon.ret('Zilch. Don\'t give up now.');
   return mon;
  }

  jackpot = (x,mon) => {
   let k = 1;
   for (k;k<5;k+=1) {
     if (x === [k,k,k,k,k,k]) {
       this.mM10.ret("Jackpot!");
       return mon;
     }
   }
   this.mM10.ret("No jackpot this time");
   return mon;
  }
```
And here is an example of the code running at [http://transcendent.ninja](http://transcendent.ninja):
```
onClick={() => {mM1
  .bnd(ran)
  .bnd(branch, this.mM5
    .bnd(this.ran).bnd(a => {this.mM6
                  .bnd(this.ran)
                  .bnd(b => {this.mM7
                    .bnd(this.ran)
                    .bnd(c => {this.mM8
                      .bnd(this.ch,a,b,c)
                    }) }) })  )
  .bnd(ran)
  .bnd(x => {mM2
    .bnd(ran)
    .bnd(y => {mM3
      .bnd(ran)
      .bnd(z => {mM4
        .bnd(this.ch,x,y,z)
        .bnd(() => mM9.ret([x,y,z,mM5.x,mM6.x,mM7.x]))
        .bnd(mM10.ret)
        .bnd(this.jackpot)
        .bnd(refresh)    }) }) })   }}
```
This code shows that chains can form trees, and that the branches of the trees can share data during computations.

Now that I am using "forceUpdate" instead of reactive observers, I should move this repository to the more appropriately named /dschalk/javascript-monads. Right now they are mirrors of one another.
