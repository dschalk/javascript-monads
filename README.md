#Javascript Monads

Originally, I used the excellent Mobservable package to make the browser interface instantly reflect changes in the values of the monads. Since I don't work at Facebook, where I would cause consternation for "setting a bad example" and/or failing to follow guidelines, I am free to use "forceUpdate()" at the end of monadic computations, thereby providing a fluent user interface with minimal overhead. I don't bother with the state object, nor do I define props. I feel that I have taken control of React, and it has become a very useful tool.

The code pertaining to monads, along with explanations and running examples, can be found at [http://transcendent.ninja](http://transcendent.ninja). Here are the three categories of monads:
```Javascript
class M_Primitive {
  constructor(z) {

    this.x = z;

    this.bnd = (func, ...args) => {
      return func(this.x, this, ...args);
    };

    this.fmap = (func, ...args) => {
      this.x = func(this.x, ...args);
      return this;
    }

    this.id = () => {return this};

    this.ret = a => {
      this.x = a;
      return this;
    };
  }
};

class M_Object {
  constructor(ob) {

    this.x = ob;

    this.bnd = (func, ...args) => {
      return func(this.x, this, ...args);
    };

    this.fmap = (func, ...args) => {
      this.x = func(this.x, ...args);
      return this;
    };

    this.id = () => {return this};

    this.ret = w => {
      Object.assign(this.x, w);
      return this;
    }
  }
}

class M_Array {
  constructor(z) {

    this.x = z;

    this.bnd = (func, ...args) => {
      return func(this.x,this, ...args);
    };

    this.fmap = (func, ...args) => {
      this.x = func(this.x, ...args);
      return this;
    };

    this.id = () => {return this};

    this.ret = a => {
      this.x.replace(a);
      return this;
    };
  }
};
```
Here are some of M_Primitive's morphisms:
```Javascript
refresh = (x,mon) => {
  this.forceUpdate.apply(this);
  return mon;
};

double = (x,mon) => {
  mon.ret(x+x);
  return mon;
};

square = (x,mon) => {
  mon.ret(x*x);
  return mon;
};

tripple = (x,mon) => {
  mon.ret(x+x+x);
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
```
And here is an example of the code running at [http://transcendent.ninja](http://transcendent.ninja):
```Javascript
onClick={() => {mM1
 .ret(3)
 .bnd(x => {mM2
   .ret(2)
   .bnd(square)
   .bnd(y => {mM3
     .ret(50)
     .bnd(double)
     .bnd(mult,(x+y))
     .bnd(mM4
     .bnd(add,(x*x + y*y))
     .bnd(refresh) ) }) }) }}
```
The display shows 3, 4, 700, and 25 for monads mM1, mM2, mM3, and mM4 respectively.

Soon, this repository will be moved to /dschalk/javascript-monads.
