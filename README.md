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
onClick={() => mM1
  .bnd(ran)
  .bnd(branch, mM5
    .bnd(ran).bnd(a => mM6
                  .bnd(ran)
                  .bnd(b => mM7
                    .bnd(ran)
                    .bnd(c => mM8
                      .bnd(this.ch,a,b,c)
                    ) ) )  )
  .bnd(ran)
  .bnd(x => mM2
    .bnd(ran)
    .bnd(y => mM3
      .bnd(ran)
      .bnd(z => mM4
        .bnd(this.ch,x,y,z)
        .bnd(() => mM9.ret([x,y,z,mM5.x,mM6.x,mM7.x]))
        .bnd(mM10.ret)
        .bnd(this.jackpot)
        .bnd(refresh)    ) ) )   }
```
This code shows that chains can form trees, and that the branches of the trees can share data during computations.


Some Observations About Monads
----------------------

  First, I want to point out that I haven't proven that these creations are monads in the Category Theory sense. The functions mapping values to monads can have all sorts of side effects, so I would begin a proof by looking only at the functions that do nothing other than map values to monads. I don't plan to go down that road any time soon, but  I will show that "ret" is the left and right identity on monads, and that the order of evaluation of segments in chains does not affect the result. Those are the Haskell monad laws, and it is reassuring to see that they apply here. 

  The Monad constructor will accept a value of any type and of any degree of
complexity. Monad instances can exchange their values for any other
values, most simply by using the ret method. We will be looking at functions of the form (v,m) => { ... ; return mon; }, where v can be any Javascript value and m can be any monad. These work as stand-alone functions, and they also work as arguments for the monad method 'bnd', which ignores v and m, substituting its value and itsself for them. 


Examples:

cube is defined as 

cube = (x,mon) => {
  mon.ret(x\\*x\\*x);
  return mon;
};

It maps x -> x\\*x\\*x -> m, where m has the new value x\\*x\\*x. When used with bnd on some monad m, m.bnd(cube) returns cube(this.x, this, x, mon  ...args). No extra arguments were provided to bnd, so cube ignores the trailing arguments. Therefore, cube(this.x, this, x, mon  ...args) is essentially cube(this.x, this), which returns m with its former value cubed.

add is defined as:

add = (x,mon,y) => {
  mon.ret(x + y);
  return mon;
}

It takes two values, x and y, and a monad mon as asarguments, returning 
m with a value of x + y. By the definition of bnd, monad.bnd(add,7) = add(monad.x, monad, 7), which returns m with a
new value of m.x + y.

Here are some facts about these monads:

(1) By the definition of ret, we know that for any monad m and value v,
m.ret(v) maps v to m, giving m the value v. Since m.ret maps values to
monads, m.ret is a valid argument for its own or any other monad's bnd
method. 

(2) m.bnd(m.ret) = m Proof: By definition, m.bnd(m.ret) = m.ret(m.x,
this ...args). Since bnd uses only the first argument, the equation is
equivalent to m.bnd(m.ret) = m.ret(m.x). By definition, m.ret(m.x)
assigns the value m.x to m and returns m. But m.x already was the value
of m, So m.bnd(m.ret) returns m unchanged, which is what we set out to
prove.

(3) m.bnd(f).bnd(g) = m.bnd(a => f(a).bnd(g)), where a is the original value of m.
We can prove this by showing that both sides of the equation return g(f(a).x). f is not supplied with any supplemental arguments, so
m.bnd(f) = f(m.x) = f(a). Now we have m.bnd(f).bnd(g) = (f(a)).bnd(g) By
the definition of bnd, (f(a)).bnd(g) = g(f(a).x) since bnd had only one
argument. This completes the first half of the proof. In the right side
of the equation, the monad f(a) calls bnd(g). By the definition of bnd,
f(a).bnd(g) = g(f(a).x) and the proof complete. Here are a couple of
demonstrations:
