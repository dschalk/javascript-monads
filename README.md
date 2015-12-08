#Javascript Monads

Originally, I used the excellent Mobservable package to make the browser interface instantly reflect changes in the values of the monads. Since I don't work at Facebook, where I would cause consternation for "setting a bad example" and/or failing to follow guidelines, I am free to use "forceUpdate()" at the end of monadic computations, thereby providing a fluent user interface with minimal overhead. I don't bother with the state object, nor do I define props. 

Now I don't bother with React. It is probably a good fit for a large enterprise like Facebook, but for my little demonstrations it is overkill. This project has converted over to snabbdom. This repo is, to a large extent, a first draft of "Fun With Monads", which is the first installment in the "Javascript Monads" series. You can see how it works at [http://schalk.net:4002](schalk.net:4002). The code is at [https://github.com/dschalk/fun-with-monads](https://github.com/dschalk/fun-with-monads). I suggest that you leave this site and go to "Fun With Monads".

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

      this.fmap = (f, mon = this, ...args) => {      
        mon.ret( f(mon.x, ...args ));
        return mon;

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


It maps x -> x\\*x\\*x -> m, where m has the new value x\\*x\\*x. When used with bnd on some monad m, m.bnd(cube) returns cube(this.x, this, x, mon  ...args). cube takes two argumens, so cube(this.x, this, x, mon  ...args) is, for all practical purposes, the same thing as cube(this.x, this). Therefore, when cube is called with bnd, the calling monad's value gets cubed if it is a number and becomes 'NAN' otherwise.

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
f(a).bnd(g) = g(f(a).x) and the proof complete. Here are some demonstrations, 
including demonstrations of the fmap method, and the global functions 
fmap and bnd: http://transcendent.ninja

##Flow Control With MonadSeq
A branch of a monad tree can be forced to wait for one or more other branches to complete by using instances of MonadSeq. The class is defined as:

```javascript
class MonadSeq {
    constructor(z,g) {

      this.x = z;
      this.id = g;

      this.flag = false;

      this.bnd = (func, ...args) => {
        let self = this;
        let fun = func;
        (function retry(func, ...args) {
          if (self.flag === false) {
            console.log('Hello from bnd ', self.id, self.x, self.flag);
            return fun(self.x, self, ...args);
          }
          if (self.flag === true) {
            setTimeout( function() {
              console.log('bnd retry', self.id, self.x, self.flag);
              retry(fun, ...args); 
            },200  ); 
          }
        })();
        console.log('Now leaving bnd ', self.id, self.x, self.flag);
        return this;
      }

      this.fmap = (f, mon = this, ...args) => {      
        let self = this;
        (function retry() {
          if (MFLAG === false) {
            console.log('Hello from fmap');
            console.log(mon);
            MFLAG = true;
            mon.ret(f(mon.x,  ...args));
          } else {
            setTimeout( function() {
              console.log('fmap retry');
              retry(); 
            },100  ); 
          }
        })();
        MFLAG = false;
        return mon;
      }


      this.ret = a => {
        let self = this;
        (function retry() {
          if (self.flag === false) {
            console.log('Hello from ret ', self.id, self.x, self.flag);
            self.x = a;
          } else {
            setTimeout( function() {
              console.log('ret retry',self.id, self.x, self.flag);
              retry(); 
            },100  ); 
          }
        })();
        console.log('Now leaving ret ', self.id, self.x, self.flag);
        return this;
      }
    }
  };
```

The functions that lock and release instances of MonadSeq are:

```Javascript
  block = (x,mon,mon2) => {
    mon2.flag = true;
    console.log('$$$$$$$$$$$$$$$$$$$$$$$$$$$',mon2.id,mon2.x,mon2.flag);
    return mon;
  }

  release = (x,mon,mon2) => {
    mon2.flag = false;
    console.log('***************************',mon2.id,mon2.x,mon2.flag);
    return mon;
  }
```

The following examples are domonstrated at http://transcendent.ninja :

```javascript
onClick={() => mMS1
    .ret('one')
    .bnd(refresh)
    .bnd((a) => setTimeout(function() {
    mMS2.ret('two')
    .bnd(() => {mM1.bnd(block,mMS1).bnd(() => mMS1
            .ret('First pass complete')
            .bnd(refresh)).bnd(() => {setTimeout(function() {
             mMS2.ret('First')
             .bnd(refresh)
             .bnd(a => {setTimeout(function() {
               mMS3.ret('Second')
             .bnd(refresh)
             .bnd(b => {setTimeout(function() {
               mMS4.ret('Third')
             .bnd(refresh)
             .bnd(c => {setTimeout(function() {
               mMS5.ret('Fourth')
             .bnd(refresh)
             .bnd(d => {setTimeout(function() {
               mMS6.ret('Done').bnd(() => mMS1.ret('Second pass complete'))
             .bnd(refresh)
             },1000 )})
             },1000 )})
             },1000 )})
             },1000 )})
             },1000 )})
             })
    .bnd(refresh)
    .bnd(b => { setTimeout(function() {
    mMS3.ret('three')
    .bnd(refresh)
    .bnd(c => { setTimeout(function() {
    mMS4.ret('four')
    .bnd(refresh)
    .bnd(d => { setTimeout(function() {
    mMS5.ret('five')
    .bnd(refresh)
    .bnd(e => { setTimeout(function() {
    mM1.bnd(release,mMS1)
    mMS6.ret([a,' ',b,' ',c,' ',d,' ',e])
    .bnd(refresh)
    },1000 )})
    },1000 )})
    },1000 )})
    },1000 )})
    },1000 ))}
```
The branch beginning after "mMS2.ret('two')" is bypassed (because of the command "mM1.bnd(block,mMS1") until after "mMS5.ret('five')", where the command "mM1.bnd(release,mMS1)" releases monad mMS1, thereby allowing the side branch to begin execution.
That was the automatic method. It works, but it drains memory and processor power while blocked computations loop. It is also a potential source of memory leaks. The garbage collector would not notice a perpetually looping blocked computation that a coder forgot to release. </p> 

The class MonadIter provides exact control over branched chains without looping. Here is the code:

```javascript
  class MonadIter {
    constructor(z,g) {

      this.x = z;
      this.id = g;
      this.flag = false;
      this.p = [];

      this.block = () => {
        this.flag = true;
        return this;
        }

      this.release = () => {
        let self = this;
        let p = this.p;

        if (p[1] === 'bnd') {
          p[2](self.x, self, ...p[3]);
          self.flag = false;
          return self;
        }

        if (p[1] === 'ret') {
          self.x = p[2];
          self.flag = false;
          return self;
        }

        if (p[1] === 'fmap') { 
          p[3].ret(p[2](p[3].x, ...p[4]));
          self.flag = false;
          return p[3];
        }
     }

      this.bnd = (func, ...args) => {
        let self = this;
        if (self.flag === false) {
          func(self.x, self, ...args);
          return self;
        }
        if (self.flag === true) {
          self.p = [self.id, 'bnd', func, args];
          return self;
        }
      }

      this.fmap = (f, mon = this, ...args) => {   
        let self = this;
          if (self.flag === false) {
            mon.ret(f(mon.x,  ...args));
            return mon;
          }
          if (self.flag === true) {
            self.p = [self.id, 'fmap', f, mon, args];
            return self;
          }
      }

      this.ret = a => { 
        let self = this;
          if (self.flag === false) {
            self.x = a;
          }
          if (self.flag === true) {
          self.p = [self.id, 'ret', a];
          return self;
          }
        this.flag = false;
        return this;
      }
    }}
```
Here are are some instances of MonadIter in action:

```javascript
        onClick={() => mMI1
        .ret('one')
        .bnd(refresh)
        .bnd((a) => setTimeout(function() {
        mMI2.ret('two')
        .bnd(refresh)
        .bnd(() => {mMI1.block()
                  .bnd(() => {setTimeout(function() { 
                 mMI1.bnd(refresh)
                  .ret('First branch complete')
                  .bnd(refresh)
                  .bnd(() => {setTimeout(function() {
                 mMI2
                  .ret('First')
                  .bnd(refresh)
                  .bnd(a => {setTimeout(function() {
                 mMI3.ret('Second')
                  .bnd(refresh)
                  .bnd(b => {setTimeout(function() {
                 mMI4.ret('Third')
                  .bnd(refresh)
                  .bnd(c => {setTimeout(function() {
                 mMI5.ret('Fourth')
                  .bnd(refresh)
                  .bnd(d => {setTimeout(function() {
                 mMI6.ret('Done')
                  .bnd(() => mMI1.ret('Second branch complete'))
                  .bnd(refresh)
                    },1000 )})
                    },1000 )})
                    },1000 )})
                    },1000 )})
                    },1000 )})
                    },1000 )})   }) 
        mMI2.bnd(b => { setTimeout(function() {
        mMI3.ret('three')
        .bnd(refresh)
        .bnd(c => { setTimeout(function() {
        mMI4.ret('four')
        .bnd(refresh)
        .bnd(d => { setTimeout(function() {
        mMI5.ret('five')
        .bnd(refresh)
        .bnd(e => { setTimeout(function() {
        mMI6.ret([a,' ',b,' ',c,' ',d,' ',e]);
        mM8.bnd(refresh);
        mMI1.release();
        },1000 )})
        },1000 )})
        },1000 )})
        },1000 )})
        },1000 ))}
```

The above code is wasteful in that only mMI1 needs to be an instance of MonadIter. The others could be simple monads. Here is a variation on the example using simple monads: 

```javascript
      <button style={this.bool1 ? this.style1 : this.style2 } 
        onClick={() => {mM1.bnd(() => {setTimeout(function() {
        mM2.ret(0).bnd(mMI1.ret).bnd(mM3.ret).bnd(mM4.ret)
        .bnd(mM5.ret).bnd(mM6.ret).bnd(mM7.ret).bnd(mM8.ret)
        .bnd(mM9.ret).bnd(mM10.ret).bnd(mM11.ret).bnd(mM12.ret)
        .bnd(() => mM1.ret('one')
        .bnd(refresh)
        .bnd((a) => {setTimeout(function() {
        mM2.ret('two')
        .bnd(refresh)
        .bnd(() => {mMI1.block()
                  .bnd(() => {setTimeout(function() { 
                 mM7.bnd(refresh)
                  .ret('First branch complete')
                  .bnd(refresh)
                  .bnd(() => {setTimeout(function() {
                 mM8
                  .ret('First')
                  .bnd(refresh)
                  .bnd(a => {setTimeout(function() {
                 mM9.ret('Second')
                  .bnd(refresh)
                  .bnd(b => {setTimeout(function() {
                 mM10.ret('Third')
                  .bnd(refresh)
                  .bnd(c => {setTimeout(function() {
                 mM11.ret('Fourth')
                  .bnd(refresh)
                  .bnd(d => {setTimeout(function() {
                 mM12.ret('Done')
                  .bnd(() => mMI1.ret('Second branch complete'))
                  .bnd(refresh)
                    },1000 )})
                    },1000 )})
                    },1000 )})
                    },1000 )})
                    },1000 )})
                    },1000 )})   }) 
        mM2.bnd(b => { setTimeout(function() {
        mM3.ret('three')
        .bnd(refresh)
        .bnd(c => { setTimeout(function() {
        mM4.ret('four')
        .bnd(refresh)
        .bnd(d => { setTimeout(function() {
        mM5.ret('five')
        .bnd(refresh)
        .bnd(e => { setTimeout(function() {
        mM6.ret([a,' ',b,' ',c,' ',d,' ',e]);
        mM8.bnd(refresh);
        mMI1.release();
        },1000 )})
        },1000 )})
        },1000 )})
        },1000 )})
        },1000 )}))  
        },1000 )}) }}
```
Next we use mMI1.block() to pause execution of the side branch, but we remove mMI1 from the code and place it under the NEXT button.  

```javascript
      <button style={this.bool2 ? this.style1 : this.style2 } 
        onClick={() => {mM1.bnd(() => {setTimeout(function() {
        mM2.ret(0).bnd(mMI1.ret).bnd(mM3.ret).bnd(mM4.ret)
        .bnd(mM5.ret).bnd(mM6.ret).bnd(mM7.ret).bnd(mM8.ret)
        .bnd(mM9.ret).bnd(mM10.ret).bnd(mM11.ret).bnd(mM12.ret)
        .bnd(() => mM1.ret('one')
        .bnd(refresh)
        .bnd((a) => {setTimeout(function() {
        mM2.ret('two')
        .bnd(refresh)
        .bnd(() => {mMI1.block()
                  .bnd(() => {setTimeout(function() { 
                 mM7.bnd(refresh)
                  .ret('First branch complete')
                  .bnd(refresh)
                  .bnd(() => {setTimeout(function() {
                 mM8
                  .ret('First')
                  .bnd(refresh)
                  .bnd(a => {setTimeout(function() {
                 mM9.ret('Second')
                  .bnd(refresh)
                  .bnd(b => {setTimeout(function() {
                 mM10.ret('Third')
                  .bnd(refresh)
                  .bnd(c => {setTimeout(function() {
                 mM11.ret('Fourth')
                  .bnd(refresh)
                  .bnd(d => {setTimeout(function() {
                 mM12.ret('Done')
                  .bnd(() => mMI1.ret('Second branch complete'))
                  .bnd(refresh)
                    },1000 )})
                    },1000 )})
                    },1000 )})
                    },1000 )})
                    },1000 )})
                    },100 )})   }) 
        mM2.bnd(b => { setTimeout(function() {
        mM3.ret('three')
        .bnd(refresh)
        .bnd(c => { setTimeout(function() {
        mM4.ret('four')
        .bnd(refresh)
        .bnd(d => { setTimeout(function() {
        mM5.ret('five')
        .bnd(refresh)
        .bnd(e => { setTimeout(function() {
        mM6.ret([a,' ',b,' ',c,' ',d,' ',e]);
        mM8.bnd(refresh);
        },1000 )})
        },1000 )})
        },1000 )})
        },1000 )})
        },1000 )}))  
        },1000 )}) }}
           onMouseEnter={ () => this.cT2() }
           onMouseLeave={ () => this.cF2() }
                >
    Run part then wait
           </button>
```

```javascript
      <button style={this.bool2 ? this.style1 : this.style2 } 
        onClick={() => {
           mMI1.release()  
         }} 
           onMouseEnter={ () => this.cT2() }
           onMouseLeave={ () => this.cF2() }
                >
                NEXT
           </button>
<p>Click the button below to start iterating through a sequence of commands.  </p>

      <button style={this.bool2 ? this.style1 : this.style2 } 
        onClick={() => {
        mM1.ret(0).bnd(mM2.ret).bnd(mM3.ret).bnd(mM4.ret)
        .bnd(() => mM1.ret('Click the mMI2.release() button to proceed')
        .bnd(refresh)
        .bnd(() => mMI2.block()
        .bnd(() => mM2.ret('Click it again.').bnd(refresh)
        .bnd(() => mMI2.block()
        .bnd(() => mM3.ret('Keep going').bnd(refresh)
        .bnd(() => mMI2.block()
        .bnd(() => mM4.ret('One more').bnd(refresh)
        .bnd(() => mMI2.block()
        .bnd(() => mM1.ret(0).bnd(mM2.ret).bnd(mM3.ret).bnd(mM4.ret).bnd(refresh)
         )))))))))       }} 
           onMouseEnter={ () => this.cT2() }
           onMouseLeave={ () => this.cF2() }
                >
                <ComponentNEXT1 />
           </button>
```           
Now click the next button four times to journey through the sequence.

```javascript
      <button style={this.bool2 ? this.style1 : this.style2 } 
        onClick={() => {
           mMI2.release()  
         }} 
           onMouseEnter={ () => this.cT2() }
           onMouseLeave={ () => this.cF2() }
                >
                <ComponentNEXT2 />
           </button>
```

To see try out these examples, go to http://transcendent.ninja .





