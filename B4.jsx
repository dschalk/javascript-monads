'use strict'
import React from 'react';
import {render} from 'react-dom';
var Markdown = require('react-remarkable');
export {B4};


var ComponentBlank = React.createClass({
  render: function() {
    return (
      <div style={{fontSize: 20, color: '#FFD700', backgroundColor: '#0000ff' }} >
        <Markdown>
        {`
        `}
        </Markdown>
      </div>
    );
  }

});

var ComponentMonad = React.createClass({
  render: function() {
    return (
      <div style={{fontSize: 18, color: '#00FFFF' }} >
        <Markdown>
        {`
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
            mon.ret( f(mon.x, ...args );
            return mon;
          };

        }
      };
        `}
        </Markdown>
      </div>
    );
  }

});

var ComponentChanceA = React.createClass({
  render: function() {
    return (
      <div style={{fontSize: 18, color: '#00FFFF' }} >
        <Markdown>
        {`
			chance = (x,mon) => {
				let a = this.rand(1,5);
				let b = this.rand(1,5);
				let c = this.rand(1,5);
				this.mM1.ret(a);
				this.mM2.ret(b);
				this.mM3.ret(c);
				if (a === b && a===c) {
				  this.mM4.ret('Winner! Three of a kind');
				  return mon;
				}
				if (a === b || a ===c || b ===c) {
				  this.mM4.ret('Pair. Try for three');
				  return mon;
				}
				this.mM4.ret('Zilch. Don\'t give up now.');
				return mon;
			}
        `}
        </Markdown>
      </div>
    );
  }

});

var ComponentChanceB = React.createClass({
  render: function() {
    return (
      <div style={{fontSize: 18, color: '#00FFFF' }} >
        <Markdown>
        {`
onClick={() => {mM1
 .bnd(this.chance)
 .bnd(refresh)  }}
        `}
        </Markdown>
      </div>
    );
  }

});

var ComponentRet = React.createClass({
  render: function() {
    return (
      <div style={{fontSize: 18, color: '#00FFFF' }} >
        <Markdown>
        {`
		 onClick={() => {mM1	
			.ret(2)
			.bnd(mM2.ret)
			.bnd(square)
			.bnd(mM3.ret)
			.bnd(square)
			.bnd(mM4.ret)
			.bnd(square)
			.bnd(refresh)  }}
        `}
        </Markdown>
      </div>
    );
  }

});

var ComponentMorphismsA = React.createClass({
  render: function() {
    return (
      <div style={{fontSize: 18, color: '#00FFFF' }} >
        <Markdown>
        {`
			refresh = (x,mon) => {
				this.forceUpdate.apply(this);		
				return mon;
			};

			doub = (x,mon) => {
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
        `}
        </Markdown>
      </div>
    );
  }

});

var ComponentAddA = React.createClass({
  render: function() {
    return (
      <div style={{fontSize: 18, color: '#00FFFF' }} >
        <Markdown>
        {`
onClick={() => {mM1.ret(3).bnd(add,4).bnd(refresh)  }}
        `}
        </Markdown>
      </div>
    );
  }

});

var ComponentLambdaA = React.createClass({
  render: function() {
    return (
      <div style={{fontSize: 18, color: '#00FFFF' }} >
        <Markdown>
        {`
			onClick={() => mM1
				.ret(3)
				.bnd(x => mM2.ret(2)		
					.bnd(cube)
					.bnd(add,x)
					.bnd(refresh)) }
        `}
        </Markdown>
      </div>
    );
  }

});

var ComponentLambdaB = React.createClass({
  render: function() {
    return (
      <div style={{fontSize: 18, color: '#00FFFF' }} >
        <Markdown>
        {`
      onClick={() => {mM1
     	.ret(3)
     	.bnd(x => mM2
     		.ret(2)
     		.bnd(square)
         .bnd(y => mM3
         	.ret(50)
         	.bnd(doub)
           .bnd(mult,(x+y))
           .bnd(() => mM4.ret(0))
           .bnd(add,(x*x + y*y))
     			.bnd(refresh)  ) ) }}    
        `}
        </Markdown>
      </div>
    );
  }

});

var ComponentLambdaC = React.createClass({
  render: function() {
    return (
      <div style={{fontSize: 18, color: '#00FFFF' }} >
        <Markdown>
        {`
			onClick={() => {mM1
				.ret(3)
				.bnd(x => mM2.ret(2)		
					.bnd(cube)
					.bnd(add,x)
					.bnd(refresh)) }}
        `}
        </Markdown>
      </div>
    );
  }

});

var ComponentLambdaD = React.createClass({
  render: function() {
    return (
      <div style={{fontSize: 18, color: '#00FFFF' }} >
        <Markdown>
        {`
			onClick={() => mM1
				.ret(3)
				.bnd(x => mM2.ret(2)		
					.bnd(cube)
					.bnd(add,x)
					.bnd(refresh)) }
        `}
        </Markdown>
      </div>
    );
  }

});

var ComponentRandom = React.createClass({
  render: function() {
    return (
      <div style={{fontSize: 18, color: '#00FFFF' }} >
        <Markdown>
        {`
      ran = (x,mon) => {
        mon.ret(Math.floor(Math.random() * (-4) + 5));     
        return mon;
      }
        `}
        </Markdown>
      </div>
    );
  }

});

var ComponentChanceD = React.createClass({
  render: function() {
    return (
      <div style={{fontSize: 18, color: '#00FFFF' }} >
        <Markdown>
        {`
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
        `}
        </Markdown>
      </div>
    );
  }

});

var ComponentChanceE = React.createClass({
  render: function() {
    return (
      <div style={{fontSize: 18, color: '#00FFFF' }} >
        <Markdown>
        {`
    onClick={() => mM1
      .bnd(ran)
      .bnd(x => mM2
        .bnd(ran)
        .bnd(y => mM3
          .bnd(ran)
          .bnd(z => mM4
            .bnd(this.ch,x,y,z)
            .bnd(refresh)  ) ) )   }}
        `}
        </Markdown>
      </div>
    );
  }

});

var ComponentBranchA = React.createClass({
  render: function() {
    return (
      <div style={{fontSize: 18, color: '#00FFFF' }} >
        <Markdown>
        {`
       branch = (x,mon,a) => {     
         return mon;
       }
        `}
        </Markdown>
      </div>
    );
  }

});

var ComponentJackpotA = React.createClass({
  render: function() {
    return (
      <div style={{fontSize: 18, color: '#00FFFF' }} >
        <Markdown>
        {`
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
        `}
        </Markdown>
      </div>
    );
  }

});

var ComponentJackpotB = React.createClass({
  render: function() {
    return (
      <div style={{fontSize: 18, color: '#00FFFF' }} >
        <Markdown>
        {`
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
             `}
        </Markdown>
      </div>
    );
  }

});

var ComponentHypotenuse = React.createClass({
  render: function() {
    return (
      <div style={{fontSize: 18, color: '#00FFFF' }} >
        <Markdown>
        {`
      onClick={() => mM1
        .bnd(branch, mM5
        .ret(0).bnd(mM6.ret).bnd(mM7.ret).bnd(mM8.ret)
        .bnd(a => { setTimeout(function() {
                   mM5.ret("a*a + b*b =")
                  .bnd(() => mM6.ret(mM1.x)
                  .bnd(a => mM7
                    .ret(mM2.x)
                    .bnd(b => mM8
                      .ret([a*a,"+",b*b,"=", a*a+b*b])
                      .bnd(() => mM10.ret(Math.sqrt(mM8.x[4]))    
                        .bnd(() => mM9.ret("hypotenuse:")
                        .bnd(refresh) ))))) },900 ) }))
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
              .bnd(refresh) ))) }
        `}
        </Markdown>
      </div>
    );
  }

});

var ComponentCube = React.createClass({
  render: function() {
    return (
      <div style={{fontSize: 18, color: '#00FFFF' }} >
        <Markdown>
        {`
       cube = (x,mon) => {     
         mon.ret(x*x*x);
         return mon;
       };
        `}
        </Markdown>
      </div>
    );
  }

});

var ComponentBnd = React.createClass({
  render: function() {
    return (
      <div style={{fontSize: 18, color: '#00FFFF' }} >
        <Markdown>
        {`
      let bnd = (f, mon, ...args) => {
        return f(mon.x, mon, ...args);     
      }
        `}
        </Markdown>
      </div>
    );
  }
});

var ComponentFmap = React.createClass({
  render: function() {
    return (
      <div style={{fontSize: 18, color: '#00FFFF' }} >
        <Markdown>
        {`
      let fmap = (f, mon, ...args) => {     
        mon.ret( f(mon.x, ...args));
        return mon;
      }
        `}
        </Markdown>
      </div>
    );
  }
});

var ComponentAdd = React.createClass({
  render: function() {
    return (
      <div style={{fontSize: 18, color: '#00FFFF' }} >
        <Markdown>
        {`
      add = (x,mon,y) => {    
        mon.ret(x + y);
        return mon;
      }
        `}
        </Markdown>
      </div>
    );
  }

});

var ComponentDiscussion = React.createClass({
  render: function() {
    return (
      <div style={{fontSize: 18, color: 'burlywood' }} >
        <Markdown>
        {`
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
f(a).bnd(g) = g(f(a).x) and the proof complete. Here are a couple of
demonstrations:
        `}
        </Markdown>
      </div>
    );
  }

});

var Bench1 = React.createClass({
  render: function() {
    return (
      <div style={{fontSize: 18, color: '#00FFFF' }} >
        <Markdown>
        {`
      bench = (x,mon) => {
        let self = this;
        let k = 0;
        let j = 0;
        let d1 = new Date();
        for (k; k<1000000; k++) {
          this.mM1 = new Monad(k);     
        }
        mon.ret((new Date()) - d1);
        return mon;
  }
        `}
        </Markdown>
      </div>
    );
  }
});

var Bench2 = React.createClass({
  render: function() {
    return (
      <div style={{fontSize: 18, color: '#00FFFF' }} >
        <Markdown>
        {`
      bench2 = () => {
        let self = this;
        let k = 0;
        let j = 0;
        let d1 = new Date();
        for (k; k<100000; k++) {
          this.mM2.ret(k);
        }
        this.resBench2 = ((new Date()) - d1);
        setTimeout( function() {
        },12 )
      }
        `}
        </Markdown>
      </div>
    );
  }
});

var ComponentFmap1 = React.createClass({
  render: function() {
    return (
      <div style={{fontSize: 18, color: '#00FFFF' }} >
        <Markdown>
        {`
      onClick={
        () => mM1.bnd(ran)
        .fmap(id,mM5)
          .bnd(ran).bnd(a => mM6
                        .bnd(ran)
                        .bnd(b => mM7
                          .bnd(ran)
                          .bnd(c => mM8
                            .bnd(this.ch,a,b,c)
                          ) ) )  
        .fmap(id,mM1)
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
        `}
        </Markdown>
      </div>
    );
  }
});

var ComponentAdd = React.createClass({
  render: function() {
    return (
      <div style={{fontSize: 18, color: '#00FFFF' }} >
        <Markdown>
        {`
      add = (x,mon,y) => {    
        mon.ret(x + y);
        return mon;
      }
        `}
        </Markdown>
      </div>
    );
  }
});

var ComponentFmapBnd = React.createClass({
  render: function() {
    return (
      <div style={{fontSize: 18, color: '#00FFFF' }} >
        <Markdown>
        {`
      let fmap = (f, mon, ...args) => {    
        let v = mon.x;
        mon.ret(f(v, ...args));
        return mon;
      }
    
      let bnd = (f, mon, ...args) => {
        return f(mon.x, mon, ...args);
      }
        `}
        </Markdown>
      </div>
    );
  }
})

var ComponentFmap2 = React.createClass({
  render: function() {
    return (
      <div style={{fontSize: 18, color: '#00FFFF' }} >
        <Markdown>
        {`
      cu = x => x*x*x;
    
      ad = (a,b) => a + b;

      add = (x,mon,y) => {       
        mon.ret(x + y);
        return mon;
      }
        `}
        </Markdown>
      </div>
    );
  }
})

var ComponentBench3 = React.createClass({
  render: function() {
    return (
      <div style={{fontSize: 18, color: '#00FFFF' }} >
        <Markdown>
        {`
      onClick={() => {mM2
           .bnd(bench)
           .bnd(mM3.ret)
           .bnd(bench)
           .bnd(mM4.ret)     
           .bnd(bench)
           .bnd(mM5.ret)
           .bnd(bench)
           .bnd(mM6.ret)
           .bnd(bench)
           .bnd(refresh)
       } }
        `}
        </Markdown>
      </div>
    );
  }
})

var ComponentBench4 = React.createClass({
  render: function() {
    return (
      <div style={{fontSize: 18, color: '#00FFFF' }} >
        <Markdown>
        {`
      onClick={() => {mM2
       .bnd(bench)
       .bnd(a => mM3
         .bnd(bench)
         .bnd(b => mM4
           .bnd(bench)
           .bnd(c => mM5
             .bnd(bench)
             .bnd(d => mM6
               .bnd(bench)
               .bnd(e => mM7
                 .ret((a+b+c+d+e)/5)
                 .bnd(refresh) )))))     
      }}
        `}
        </Markdown>
      </div>
    );
  }
})

var ComponentMonadSeq = React.createClass({
  render: function() {
    return (
      <div style={{fontSize: 18, color: '#00FFFF' }} >
        <Markdown>
        {`
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
               if (self.flag === false) {
                 console.log('Hello from fmap', self.id, self.x, self.flag);
                 mon.ret(f(mon.x,  ...args));
               }
               if (self.flag === true) {
                 setTimeout( function() {
                   console.log('fmap retry', self.id, self.x, self.flag);
                   retry(); 
                 },200  ); 
               }
             })();
             this.flag = false;
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
        `}
        </Markdown>
      </div>
    );
  }
})

var ComponentMonadSeq2 = React.createClass({
  render: function() {
    return (
      <div style={{fontSize: 18, color: '#00FFFF' }} >
        <Markdown>
        {`
      block = (x,mon,mon2) => {
        mon2.flag = true;
        return mon;
      }
    
      release = (x,mon,mon2) => {
        mon2.flag = false;
        return mon;
      }
        `}
        </Markdown>
      </div>
    );
  }
})

var ComponentMonadSeq3 = React.createClass({
  render: function() {
    return (
      <div style={{fontSize: 18, color: '#00FDFF' }} >
        <Markdown>
        {`
      <button style={this.bool1 ? this.style1 : this.style2 } 
        onClick={() => mMS1
        .ret('one')
        .bnd(refresh)
        .bnd((a) => setTimeout(function() {
        mMS2.ret('two')
        .bnd(() => {mM1.bnd(block,mMS1)
                  .bnd(() => mMS1
                  .ret('First branch complete')
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
                 mMS6.ret('Done').bnd(() => mMS1
                  .ret('Second branch complete'))
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
        mM1.bnd(release,mMS2)
        mM1.bnd(release,mMS3)
        mMS6.ret([a,' ',b,' ',c,' ',d,' ',e])
        .bnd(refresh)
        },1000 )})
        },1000 )})
        },1000 )})
        },1000 )})
        },1000 ))
          }
        `}
        </Markdown>
      </div>
    );
  }
})

var ComponentLog = React.createClass({
  render: function() {
    return (
      <div style={{fontSize: 18, color: '#00FFCF' }} >
        <Markdown>
        {`
        `}
        </Markdown>
      </div>
    );
  }
})

 var ComponentIter1 = React.createClass({
  render: function() {
    return (
      <div style={{fontSize: 18, color: '#00DFCF' }} >
        <Markdown>
        {`
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
               p = [self.id, 'bnd', func, args];
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
               p = [self.id, 'ret', a];
               return self;
               }
             this.flag = false;
             return this;
           }
         }}
        `}
        </Markdown>
      </div>
    );
  }
})

var ComponentIter2 = React.createClass({
  render: function() {
    return (
      <div style={{fontSize: 18, color: '#00FFCF' }} >
        <Markdown>
        {`
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
                  },1600 )})
                  },1600 )})
                  },1600 )})
                  },1600 )})
                  },1600 )})
                  },1600 )})   }) 
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
      },1600 )})
      },1600 )})
      },1600 )})
      },1600 )})
      },1600 ))}
      `}
        </Markdown>
      </div>
    );
  }
})

var ComponentIter3 = React.createClass({
  render: function() {
    return (
      <div style={{fontSize: 18, color: '#00FFCF' }} >
        <Markdown>
        {`
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
        `}
        </Markdown>
      </div>
    );
  }
})

var ComponentBlock = React.createClass({
  render: function() {
    return (
      <div style={{fontSize: 18, color: '#00FFCF' }} >
        <Markdown>
        {`
      .bnd(() => {mMI1.block()
                .bnd(() => {chain of method calls ...     
        `}
        </Markdown>
      </div>
    );
  }
})

var ComponentNEXT1 = React.createClass({
  render: function() {
    return (
      <div style={{fontSize: 18, color: '#00FFCF' }} >
        <Markdown>
        {`
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
      .bnd(() => mM1.ret(0).bnd(mM2.ret).bnd(mM3.ret)
      .bnd(mM4.ret).bnd(refresh)
       )))))))))       }} 
        `}
        </Markdown>
      </div>
    );
  }
})

var ComponentNEXT2 = React.createClass({
  render: function() {
    return (
      <div style={{fontSize: 18, color: '#00FFCF' }} >
        <Markdown>
        {`
      onClick={() => {
         mMI2.release()       
       }} 
        `}
        </Markdown>
      </div>
    );
  }
})

var ComponentBox = React.createClass({
  render: function() {
    return (
      <div style={{fontSize: 18, color: '#00FFCF' }} >
        <Markdown>
        {`
      <input style={{height: 25, backgroundColor: '#d8d17d'}}  
        onChange={e => {mM8.ret(e.target.value).bnd(refresh) }}    
      />
        `}
        </Markdown>
      </div>
    );
  }
})

var ComponentBox2 = React.createClass({
  render: function() {
    return (
      <div style={{fontSize: 18, color: '#00FFCF' }} >
        <Markdown>
        {`
      <input style={{height: 25, backgroundColor: '#d8d17d'}}   
         onKeyDown={(e) => {
           let v = e.target.value;
           if (v == '' || v == mM9.x) {
             return
           } else {
             if( e.keyCode == 13 ) {
               mM9.ret(v).bnd(refresh);
             }
           }
         }}
      />
        `}
        </Markdown>
      </div>
    );
  }
})

var ComponentFRP1 = React.createClass({
  render: function() {
    return (
      <div style={{fontSize: 18, color: '#FFAAAA' }} >
        <Markdown>
        {`
       {mM8.x} + {mM9.x} = {1.0 * mM8.x + 1.0 *  mM9.x}     
        `}
        </Markdown>
      </div>
    );
  }
})

var ComponentFRP2 = React.createClass({
  render: function() {
    return (
      <div style={{fontSize: 18, color: '#FFAAAA' }} >
        <Markdown>
        {`
       {mM8.x} + {mM9.x} = {mM8.x + mM9.x}     
        `}
        </Markdown>
      </div>
    );
  }
})

var ComponentCompute = React.createClass({
  render: function() {
    return (
      <div style={{fontSize: 18, color: '#00FFCF' }} >
        <Markdown>
        {`
 onClick={() => {mM2.ret(mM1.ret(3).bnd((x => (x+x + x*x*x) - 32*x))) }} 
        `}
        </Markdown>
      </div>
    );
  }
})

var ComponentCompute2 = React.createClass({
  render: function() {
    return (
      <div style={{fontSize: 18, color: '#00FFCF' }} >
        <Markdown>
        {`
 onClick={() => {mM1.ret(3).fmap((x => (x+x + x*x*x) - 32*x)) }} 
        `}
        </Markdown>
      </div>
    );
  }
})

var ComponentCompute3 = React.createClass({
  render: function() {
    return (
      <div style={{fontSize: 18, color: '#00FFCF' }} >
        <Markdown>
        {`
 onClick={() => {mM2.ret(mM1.bnd(() => {return [mM1, mM2, mM3]})).fmap(x => x.map(a => a.ret(888).x)) }} 
        `}
        </Markdown>
      </div>
    );
  }
})

var ComponentFmap3 = React.createClass({
  render: function() {
    return (
      <div style={{fontSize: 18, color: '#00FFCF' }} >
        <Markdown>
        {`
      onClick={() => {
        fmap(x => x * 0, mM2);
        fmap(x => x + 3, mM2);
        fmap(cu,mM2).bnd(refresh);     
        } 
      }
        `}
        </Markdown>
      </div>
    );
  }
})







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

  var mM11 = new Monad(0);
  var mM12 = new Monad(0);
  


  var MFLAG = false;

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
            return fun(self.x, self, ...args);
          }
          if (self.flag === true) {
            setTimeout( function() {
              retry(fun, ...args); 
            },200  ); 
          }
        })();
        return this;
      }

      this.fmap = (f, mon = this, ...args) => {      
        let self = this;
        (function retry() {
          if (self.flag === false) {
            mon.ret(f(mon.x,  ...args));
          }
          if (self.flag === true) {
            setTimeout( function() {
              retry(); 
            },200  ); 
          }
        })();
        this.flag = false;
        return mon;
      }


      this.ret = a => {
        let self = this;
        (function retry() {
          if (self.flag === false) {
            self.x = a;
          } else {
            setTimeout( function() {
              retry(); 
            },100  ); 
          }
        })();
        return this;
      }
    }
  };
    
  /*class MonadSeq {
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
*/

  let fmap = (f,mon, ...args) => {
    let v = mon.x;
    mon.ret(f(v, ...args));
    return mon;
  }

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

  let join = m => m.x;

  let bnd = (f,mon, ...args) => {
    f(mon.x,mon, ...args);
    return mon;
  }

class B4 extends React.Component {
  constructor(props) {
    super(props);

  this.M = a => new Monad(a);
  this.MS = (a,b)  => new MonadSeq(a,b);
  this.MI = (a,b)  => new MonadIter(a,b);
  this.MFLAG = MFLAG;
  this.mM1 = this.M(0);
  this.mM2 = this.M(0);
  this.mM3 = this.M(0);
  this.mM4 = this.M(0);
  this.mM5 = this.M(0);
  this.mM6 = this.M(0);
  this.mM7 = this.M(0);
  this.mM8 = this.M(0);
  this.mM9 = this.M(0);
  this.mM10 = this.M(0);
  this.mM11 = mM11;
  this.mM12 = mM12;
  this.mMS1 = this.MS(0,'mMS1');
  this.mMS2 = this.MS(0,'mMS2');
  this.mMS3 = this.MS(0,'mMS3');
  this.mMS4 = this.MS(0,'mMS4');
  this.mMS5 = this.MS(0,'mMS5');
  this.mMS6 = this.MS(0,'mMS6');

  this.mMI1 = this.MI(0,'mMI1');
  this.mMI2 = this.MI(0,'mMI2');
  this.mMI3 = this.MI(0,'mMI3');
  this.mMI4 = this.MI(0,'mMI4');
  this.mMI5 = this.MI(0,'mMI5');
  this.mMI6 = this.MI(0,'mMI6');

  this.style2 = {backgroundColor: '#000', textAlign: 'left', borderColor: 'darkred', outline: 0,
  color: 'burlywood', borderRadius: 10, paddingTop: 1.1, paddingBottom: 0.9, marginRight: 3,
  marginLeft: 12, fontSize: 18 };
  this.style1 = {backgroundColor: 'blue', textAlign: 'left', borderColor: 'lightblue', outline: 0,
  color: 'yellow', borderRadius: 10, paddingTop: 1.1, paddingBottom: 0.9, marginRight: 3,
  marginLeft: 12, fontSize: 18 };
  this.bool1 = false;
  this.bool2 = false;
  this.bool3 = false;
  this.bool4 = false;
  this.bool5 = false;
  this.test = (x) => {
    return (new Monad(x + 1000));
  }
  this.resBench = 888;
  this.resBench2 = 888;
  this.VAL = 0;
}

  style3 = {backgroundColor: '#000', textAlign: 'left', borderColor: 'darkblue', outline: 0,
    color: 'red', borderRadius: 10, paddingTop: 1.1, paddingBottom: 0.9, marginRight: 3, marginLeft: 12, fontSize: 18 }

  cT1 = () => {
    let self = this;
    this.bool1 = true
    setTimeout(function() {
      self.forceUpdate();
    },8 );
    return;
  };

  cF1 = () => {
    let self = this;
    this.bool1 = false
    setTimeout(function() {
      self.forceUpdate();
    },8 );
    return;
  };

  cT2 = () => {
    let self = this;
    this.bool2 = true
    setTimeout(function() {
      self.forceUpdate();
    },8 );
    return;
  };

  cF2 = () => {
    let self = this;
    this.bool2 = false
    setTimeout(function() {
      self.forceUpdate();
    },8 );
    return;
  };

  cT3 = () => {
    let self = this;
    this.bool3 = true
    setTimeout(function() {
      self.forceUpdate();
    },8 );
    return;
  };

  cF3 = () => {
    let self = this;
    this.bool3 = false
    setTimeout(function() {
      self.forceUpdate();
    },8 );
    return;
  };

  cT4 = () => {
    let self = this;
    this.bool4 = true
    setTimeout(function() {
      self.forceUpdate();
    },8 );
    return;
  };

  cF4 = () => {
    let self = this;
    this.bool4 = false
    setTimeout(function() {
      self.forceUpdate();
    },8 );
    return;
  };

  cT5 = () => {
    let self = this;
    this.bool5 = true
    setTimeout(function() {
      self.forceUpdate();
    },8 );
    return;
  };

  cF5 = () => {
    let self = this;
    this.bool5 = false
    setTimeout(function() {
      self.forceUpdate();
    },8 );
    return;
  };

  refresh = (x,mon) => {
    this.forceUpdate.apply(this);
    return mon;
  };

  doub = (x,mon) => {
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

  lg = '';

  log = (x,mon,y) => {
    this.lg = y;
    return mon;
  }

  fnc = (a,b) => a.b;

  branch = (x,mon,a) => {
    return mon;
  }

  branchT = (x,mon,a) => {
    setTimeout(function() {
      return mon;
    },500  )
  }

  rand = (a,b) => {
      return Math.floor(Math.random() * (a - b)) + b;
  }

  ran = (x,mon) => {
    mon.ret(Math.floor(Math.random() * (-4) + 5));
    return mon;
  }

  chance = (x,mon) => {
    let a = this.rand(1,5);
    let b = this.rand(1,5);
    let c = this.rand(1,5);
    this.mM1.ret(a);
    this.mM2.ret(b);
    this.mM3.ret(c);
    if (a === b && a===c) {
      this.mM4.ret('Winner! Three of a kind');
      return mon;
    }
    if (a === b || a ===c || b ===c) {
      this.mM4.ret('Pair. Try for three');
      return mon;
    }
    this.mM4.ret('Zilch. Don\'t give up now.');
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

  bench = (x,mon) => {
    let self = this;
    let k = 0;
    let j = 0;
    let d1 = new Date();
    for (k; k<1000000; k++) {
      this.mM1 = new Monad(k);
    }
    mon.ret((new Date()) - d1);
    return mon;
  }

  bench2 = () => {
    let self = this;
    let k = 0;
    let j = 0;
    let d1 = new Date();
    for (k; k<1000000; k++) {
      this.mM2.ret(k);
    }
    this.resBench2 = ((new Date()) - d1);
    setTimeout( function() {
      self.forceUpdate();
    },12 )
  }

  cu = x => x*x*x;
  sq = x => x*x;
  du = x => x*x;
  ad = (a,b) => a + b;
  id = x => x;
  lo = x => console.log(x);

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

  test5 = m => {
    let x = m.x;
    m.ret(x+3).bnd(this.add,1).bnd(this.mMS2.ret).bnd(this.add,1).bnd(this.doub);
  }

  test6 = () => {
    this.mMS1.ret(3).fmap(this.ad,this.mMS2,this.mMS1.x)
    .fmap(this.du).fmap(this.ad,this.mM1,this.mMS1.x)
    .fmap(this.cu).fmap(this.id,this.mMS3).bnd(this.add,this.mMS2.x + 1000);
  }

// function delay(time) {
delay = (x,mon) => {
    return new Promise( function(resolve,reject){
        setTimeout( resolve, 2000 );
    } );
}




/*
.then( function STEP3(){
    console.log( "step 3 (after another 2000ms)" );
} )
.then( function STEP4(){
    console.log( "step 4 (next Job)" );
    return delay( 2000 );
} )
.then( function STEP5(){
    console.log( "step 5 (after another 2000ms)" );
} )
*/

increment = () => {
  this.VAL = this.VAL + 1;
}

 render = () => {
    this.increment();
    let mM1 = this.mM1;
    let mM2 = this.mM2;
    let mM3 = this.mM3;
    let mM4 = this.mM4;
    let mM5 = this.mM5;
    let mM6 = this.mM6;
    let mM7 = this.mM7;
    let mM8 = this.mM8;
    let mM9 = this.mM9;
    let mMS1 = this.mMS1;
    let mMS2 = this.mMS2;
    let mMS3 = this.mMS3;
    let mMS4 = this.mMS4;
    let mMS5 = this.mMS5;
    let mMS6 = this.mMS6;
    let mM10 = this.mM10;
    let mMI1 = this.mMI1;
    let mMI2 = this.mMI2;
    let mMI3 = this.mMI3;
    let mMI4 = this.mMI4;
    let mMI5 = this.mMI5;
    let mMI6 = this.mMI6;
    let cu = this.cu;
    let sq = this.sq;
    let ad = this.ad;
    let id = this.id;
    let du = this.du;
    let lo = this.lo;
    let bench = this.bench;
    let resBench = this.resBench;
    let refresh = this.refresh;
    let square = this.square;
    let cube = this.cube;
    let doub = this.doub;
    let tripple = this.tripple;
    let add = this.add;
    let mult = this.mult;
    let ran = this.ran;
    let branch = this.branch;
    let test = this.test;
    let delay = this.delay;
    let log = this.log;
    let lg = this.lg;
    let block = this.block;
    let release = this.release;
    let VAL = this.VAL;
    return(
      <div style={{ backgroundColor: '#000', height: '100%' , width: '100%', color: '#FFE4C4', fontSize: 18 }}>
        <br /><br />

<div style={{ width: '65%', textAlign: 'left', marginLeft: 40, marginRight: '17%', fontSize: 20 }} >
<h2 style={{textAlign: 'center'}} >Javascript Monads</h2>
<p>The monads in this demonstration are instances of the following class: </p>
<ComponentMonad />
<p>Monads can be instantiated with entities of any Javascript type, and the type of a monad's value can change. I won't go into detail about the category of monads. Its morphisms are accomplished by the monad methods "bnd" and "ret" in combination with functions such as those presented below. I'll only demonstrate, without formal proof, that "ret" is the left and right identity, and that the commutative property holds for chains of 'bnd' computations; i.e., the order of evaluation of monads in a chain does not affect the final result.</p>
<p> First, let's see how these monads work. Trivially, they can provide a format for organizing code, as the following example demonstates. Here's the function "chance":</p>

<ComponentChanceA />
<p>Now, if you click below, you will see what calling "chance" does. </p>
      <button style={this.bool1 ? this.style1 : this.style2 } 
   onClick={() => {mM1
     .bnd(this.chance)
     .bnd(refresh)  }}
   onMouseEnter={ () => this.cT1() }
   onMouseLeave={ () => this.cF1() }
        >
   <ComponentChanceB />
      </button>
  <p>From the definition of primitive monads, you can see that the monad which calls "ret" is the return value of "ret". Next, we demonstrate this by chaining calls to "ret" and "square" in order to provide succeeding squares of the number "2" to the four display monads.</p>

      <button style={this.bool2 ? this.style1 : this.style2 } 
   onClick={() => {mM1.ret(2)
.bnd(mM2.ret)
.bnd(square)
.bnd(mM3.ret)
.bnd(square)
.bnd(mM4.ret)
.bnd(square)
.bnd(refresh)  }}
   onMouseEnter={ () => this.cT2() }
   onMouseLeave={ () => this.cF2() }
        >
<ComponentRet />
      </button>
<p>These are some of the functions we are using to demonstrate primitive monads:</p>
<ComponentMorphismsA />
<p>The first two arguments are a primitive value and a monad. They return a monad with the specified value when they are called as stand-alone functions. When called by "bnd", they are the value of the calling monad and the calling monad itself. The last two functions, "add" and "mult", take three arguments. Here's how that works: </p> 
      <button style={this.bool3 ? this.style1 : this.style2 } 
   onClick={() => {mM1.ret(3).bnd(add,4).bnd(refresh)  }}
   onMouseEnter={ () => this.cT3() }
   onMouseLeave={ () => this.cF3() }
        >
<ComponentAddA />
      </button>
<p>We gave mM1 the value "3" and added "4" to it. Next, we show how a monad can pass its value down the line for a later computation. mM1 get the value "3", mM2 gets the value "2", which is cubed to give "8", and finally, mM2 gets the value 3 + 8 = 11. </p>
<button style={this.bool4 ? this.style1 : this.style2 } 
  onClick={() => mM1
    .ret(3)
    .bnd(x => mM2
	.ret(2)
	.bnd(cube)
	.bnd(add,x)
	.bnd(refresh) ) }

   onMouseEnter={ () => this.cT4() }
   onMouseLeave={ () => this.cF4() }
        >
  <ComponentLambdaA />
</button>
<p>Play around with monads and, lo and behold, the lambda calculus appears out of the mist! </p>
<p>In the next example, x = 3, y = 4, and the final computation is x*x + y*y = 25. Along the way, mM3 is assigned the value "50", which is doubled and multiplied times x + y, giving a result of 700.  </p>
      <button style={this.bool5 ? this.style1 : this.style2 } 
 onClick={() => mM1
	.ret(3)
	.bnd(x => mM2
		.ret(2)
		.bnd(square)
    .bnd(y => mM3
    	.ret(50)
    	.bnd(doub)
      .bnd(mult,(x+y))
      .bnd(() => mM4.ret(0))
      .bnd(add,(x*x + y*y))
			.bnd(refresh)  ) ) }
		 onMouseEnter={ () => this.cT5() }
		 onMouseLeave={ () => this.cF5() }
        >
<ComponentLambdaB />
      </button>

      <p>Now we will use "ch()", a modification of "chance()" used in the first example. Here is the code: </p>
      <ComponentChanceD />
    <p>And here is the code for "ran()": </p>
    <ComponentRandom />
      <p> With these functions, we can implement "chance" as a single chain of monads. Click the code below to see it in action. </p>
  <button style={this.bool1 ? this.style1 : this.style2 } 
    onClick={() => mM1
      .bnd(ran)
      .bnd(x => mM2
        .bnd(ran)
        .bnd(y => mM3
          .bnd(ran)
          .bnd(z => mM4
            .bnd(this.ch,x,y,z)
            .bnd(refresh)  ) ) )   }
   onMouseEnter={ () => this.cT1() }
   onMouseLeave={ () => this.cF1() }
        >
        <ComponentChanceE />
   </button>
   <p>The functional algorithm works, and I think most people would find it more esthetically pleasing than the first imperitive example. It would be interesting to know which of these two algorithms is more efficient in the browsers. If anyone wants to volunteer to run some benchmark tests, just raise an issue  or make a pull request at <a href="https://github.com/dschalk/javascript-monads" style={{color: 'green'}}>https://github.com/dschalk/javascript-monads</a> or <a href="https://github.com/dschalk/mobservable-monads" style={{color: 'green'}} >https://github.com/dschalk/mobservable-monads.</a> </p>
        <p>Branching is facilitated by the function "branch()", defined as follows:  </p>
        <ComponentBranchA />
        <p>For the next demonstration, we use the function "jackpot". It's arguments are an array and a monad. We will call it with the "bnd" method of a monad whose value is an array. Here is "jackpot":  </p>
        <ComponentJackpotA />
        <p>We'll use "branch" to run chance in two separate groups of monads. We'll assign the array of all six randomly generated numbers to monads mM9 and mM10, and then mM10 will use its "bnd" method to call "jackpot". The "random" numbers are either 1, 2, 3,or 4, so there are 4 to the power of 6 (4,096) possible arrays. Only four of those are jackpot arrays, so the probability of hitting the jackpot on each turn is approximately 1/1000.   </p>
  <button style={this.bool2 ? this.style1 : this.style2 } 
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
   onMouseEnter={ () => this.cT2() }
   onMouseLeave={ () => this.cF2() }
        >
        <ComponentJackpotB />
   </button>
   <p>In the next example, "fmap(id,mM5)" starts a new branch and "fmap(id,mM1" switches back to the beginning of the tree, mM1. "id" is defined as "id = x => x".  Click to see the code in action: </p>
  <button style={this.bool5 ? this.style1 : this.style2 } 
    onClick={
      () => mM1
      .bnd(ran)
      .fmap(id,mM5)
        .bnd(ran).bnd(a => mM6
                      .bnd(ran)
                      .bnd(b => mM7
                        .bnd(ran)
                        .bnd(c => mM8
                          .bnd(this.ch,a,b,c)
                        ) ) )  
      .fmap(id,mM1)
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
 
   onMouseEnter={ () => this.cT5() }
   onMouseLeave={ () => this.cF5() }
        >
        <ComponentFmap1 />
   </button>
   <p>And here the branch displays the square root of the sum of the squares of the first two random numbers:  </p>

  <button style={this.bool3 ? this.style1 : this.style2 } 
    onClick={() => mM1
      .bnd(branch, mM5
      .ret(0).bnd(mM6.ret).bnd(mM7.ret).bnd(mM8.ret)
      .bnd(a => { setTimeout(function() {
                 mM5.ret("a*a + b*b =")
                .bnd(() => mM6.ret(mM1.x)
                .bnd(a => mM7
                  .ret(mM2.x)
                  .bnd(b => mM8
                    .ret([a*a,"+",b*b,"=", a*a+b*b])
                    .bnd(() => mM10.ret(Math.sqrt(mM8.x[4]))
                      .bnd(() => mM9.ret("hypotenuse:")
                      .bnd(refresh) ))))) },300 ) }))
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
            .bnd(refresh) ))) }
   onMouseEnter={ () => this.cT3() }
   onMouseLeave={ () => this.cF3() }
        >
        <ComponentHypotenuse />
   </button>

   <p></p>
   
   <p> Is this fun, or what? </p>
   <ComponentDiscussion />
<br />
  <button style={this.bool4 ? this.style1 : this.style2 } 
    onClick={() => mM1.bnd(mM1.ret).bnd(refresh)   }
   onMouseEnter={ () => this.cT4() }
   onMouseLeave={ () => this.cF4() }
        >
    mM1.bnd(mM1.ret)
   </button>

<br /><br />
  <button style={this.bool5 ? this.style1 : this.style2 } 
    onClick={() => mM2.bnd(add, 2).bnd(cube).bnd(refresh)  }
   onMouseEnter={ () => this.cT5() }
   onMouseLeave={ () => this.cF5() }
        >
    mM2.bnd(add, 2).bnd(cube)  
   </button>

<br /><br />
  <button style={this.bool1 ? this.style1 : this.style2 } 
    onClick={() => mM3.bnd(a => add(a, mM3, 2).bnd(cube)).bnd(refresh) }
   onMouseEnter={ () => this.cT1() }
   onMouseLeave={ () => this.cF1() }
        >
    mM3.bnd(a => add(a, mM3, 2).bnd(cube,mM3)) 
   </button>

<p>When add was an argument of bnd, it was provided with the calling monad's value and "this", which was the calling monad. Since bnd didn't provide these arguments, we did. add is defined as a function of three arguments. Notice we didn't have to specify the value of a. bnd saw to it that mM3's value was assigned to a. The point is that the order of evaluation of links in a monad chain does not matter. In the example, we called bnd on f and used the result to call bnd on g, then we called bnd on the composit function and got the same answer, as expected.</p>

<p>  </p>
<h2>Comparing Elapsed Times For Changing Monad Values</h2>
<p>Next, we compare the time it takes to create one million new monads with the time it takes to update the value of a monad a million times. Here is the first function we use, called "bench":  </p>
<Bench1 />
<p>Click below to run bench five times. The results in microseconds appear on the right after several seconds.  </p>
      <button style={this.bool2 ? this.style1 : this.style2 } 
   onClick={() => {mM2
        .bnd(bench)
        .bnd(mM3.ret)
        .bnd(bench)
        .bnd(mM4.ret)
        .bnd(bench)
        .bnd(mM5.ret)
        .bnd(bench)
        .bnd(mM6.ret)
        .bnd(bench)
        .bnd(refresh)
    } }
   onMouseEnter={ () => this.cT2() }
   onMouseLeave={ () => this.cF2() }
        >
        <ComponentBench3 />
      </button>
<p>Each subsequent call to bench waited for the previous call to finish. There was no need for promises or iterators. Next, we will run bench five times again only this time we also compute the average. The average will be in monad mM7.   </p>
      <button style={this.bool2 ? this.style1 : this.style2 } 
   onClick={() => {mM2
    .bnd(bench)
    .bnd(a => mM3
      .bnd(bench)
      .bnd(b => mM4
        .bnd(bench)
        .bnd(c => mM5
          .bnd(bench)
          .bnd(d => mM6
            .bnd(bench)
            .bnd(e => mM7
              .ret((a+b+c+d+e)/5)
              .bnd(refresh) ))))) 
   }}
   onMouseEnter={ () => this.cT2() }
   onMouseLeave={ () => this.cF2() }
        >
         <ComponentBench4 />
      </button>
<p>  </p>
<h2 >Re-use a monad 1,000,000 times:<span style={{color: 'lightblue' }} >  {this.resBench2} </span> ms</h2>
<p>  </p>
      <button style={this.bool3 ? this.style1 : this.style2 } 
   onClick={() => {this.bench2()}  }
   onMouseEnter={ () => this.cT3() }
   onMouseLeave={ () => this.cF3() }
        >
        <Bench2 />
      </button>
<p>On my Ubuntu 14.04 desktop machine, Firefox outperformed Chrome and Opera. After doing 1,000,000 updates using mM2.ret once or twice, it consistently finished in less than 2 milliseconds. The first time took 4 milliseconds. Firefox consistently created a million new instances in under 200 milliseconds. Typical times for Chrome were 680 and 14 ms for new instances and updates respectively. For Opera, it was 700 and 15. Since the times are so miniscule, choosing one or the other wouldn't significantly affect performance in applications involving monad chaining without loops. Besides, loops would ordinarily work on values, and not the monads where the values would eventually be incorporated. Chrome on my machine is more loaded with features down than Firefox, so not much can be learned from the comparrison. It is interesting that Firefox computed subsequent runs much faster than the first.</p>
<p>Some functional purists, and perhaps others, prefer to use functions over using methods bound to objects (monads in this case). This repository provides stand-alone bnd and fmap functions similar to the bnd and fmap monad methods. Instead of extracting the value of the monad that calls bnd, the stand-lone bnd() function must be provided with a monad from which to extract a value. bnd and fmap are defined as follows: </p>
<ComponentFmapBnd />
<p>cu, ad, and add are defined as follows: </p>
<ComponentFmap2 />
<p>Here is bnd in action:</p>

<p>  </p>
      <button style={this.bool4 ? this.style1 : this.style2 } 
   onClick={() => {bnd(add,mM1,5).bnd(cube).bnd(refresh) }}  
   onMouseEnter={ () => this.cT4() }
   onMouseLeave={ () => this.cF4() }
        >
   bnd(add, mM1, 5).bnd(cube).bnd(refresh)  
      </button>
      <p>   </p>
<p> Next, we run the fmap function three separate times. </p>
      <button style={this.bool5 ? this.style1 : this.style2 } 
   onClick={() => {
     fmap(x => x * 0, mM2);
     fmap(x => x + 3, mM2);
     fmap(cu,mM2).bnd(refresh);
     } 
   }
   onMouseEnter={ () => this.cT5() }
   onMouseLeave={ () => this.cF5() }
        >
        <ComponentFmap3 />
      </button>
      <p>    </p>
      <button style={this.bool1 ? this.style1 : this.style2 } 
   onClick={() => {
     mM1.ret(0).bnd(mM2.ret).bnd(mM3.ret).bnd(mM4.ret).bnd(mM5.ret).bnd(mM6.ret).bnd(mM7.ret).bnd(mM8.ret).bnd(mM9.ret).bnd(mM10.ret).bnd(refresh)
        } }
   onMouseEnter={ () => this.cT1() }
   onMouseLeave={ () => this.cF1() }
        >
        REFRESH
      </button>

<p>   </p>
<h2> MonadIter - Control the Order of Execution </h2>
<p> The class MonadIter provides exact control over sequencing and timing of monad actions. And as one of the examples shows, MonadIter provides a way to iterate one step at a time through a sequence of monad actions. Here is the code: </p>
  <ComponentIter1 />
<p>Here are are some instances of MonadIter in action: </p>

      <button style={this.bool2 ? this.style1 : this.style2 } 
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
           onMouseEnter={ () => this.cT2() }
           onMouseLeave={ () => this.cF2() }
                >
         <ComponentIter2 />
           </button>
<p> The above code is wasteful in that only mMI1 needs to be an instance of MonadIter. The others could be simple monads. Here is a variation on the example using simple monads: </p>

      <button style={this.bool3 ? this.style1 : this.style2 } 
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
        mMI1.release();
        },1000 )})
        },1000 )})
        },1000 )})
        },1000 )})
        },1000 )}))  
        },100 )}) }}
           onMouseEnter={ () => this.cT3() }
           onMouseLeave={ () => this.cF3() }
                >
         <ComponentIter3 />
           </button>
<p>Next we use mMI1.block() to pause execution of the side branch, but we remove mMI1 from the code and place it under the NEXT button.  </p>
      <button style={this.bool4 ? this.style1 : this.style2 } 
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
<p>  </p>
      <button style={this.bool2 ? this.style1 : this.style2 } 
        onClick={() => {
           mMI1.release()  
         }} 
           onMouseEnter={ () => this.cT4() }
           onMouseLeave={ () => this.cF4() }
                >
                NEXT
           </button>
<p>Click the button below to start iterating through a sequence of commands.  </p>

      <button style={this.bool5 ? this.style1 : this.style2 } 
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
           onMouseEnter={ () => this.cT5() }
           onMouseLeave={ () => this.cF5() }
                >
                <ComponentNEXT1 />
           </button>
           
<p>Now click the next button four times to journey through the sequence. </p>
      <button style={this.bool1 ? this.style1 : this.style2 } 
        onClick={() => {
           mMI2.release()  
         }} 
           onMouseEnter={ () => this.cT1() }
           onMouseLeave={ () => this.cF1() }
                >
                <ComponentNEXT2 />
           </button>

<p>Making an instantaneously responsive text box requires very little code. Here it is:  </p>
<ComponentBox />
<p>Making a text box that updates when the ENTER key is pressed requires some extra lines </p>
<ComponentBox2 />

<p>Some functional reactive programming (FRP) demonstrations show streams of numbers merging into computations. When a number is changed, the computation immediately updates, like in a spreadsheet application. If you put numbers in the boxes below, the sum will immediately update. This is a React application, so the following code does the trick:  </p>

<ComponentFRP1 />
<span style={{color: '#AAFFAA'}} >{mM8.x} + {mM9.x} = {1.0 * mM8.x + 1.0 *  mM9.x} </span>

<p>A simpler variation concatenates numbers and text. If you put a space after the first word, the two words won't run together.  </p>

<ComponentFRP2 />
<span style={{color: '#AAFFAA'}} >{mM8.x} + {mM9.x} = {mM8.x + mM9.x} </span>

<p>Here is the instantly updating text box: </p>

<input autoFocus style={{height: 25, backgroundColor: '#d8d17d'}}  
onChange={e => {mM8.ret(e.target.value).bnd(refresh) }}
/>

<p>And here is the box that updates when you press ENTER: </p>

<input style={{height: 25, backgroundColor: '#d8d17d'}}  
   onKeyDown={(e) => {
     let v = e.target.value;
     if (v == '' || v == mM9.x) {
       return
     } else {
       if( e.keyCode == 13 ) {
         mM9.ret(v).bnd(refresh);
       }
     }
   }}
/>

<p>When the text in the box is the same as the current value, render() is not executed. The counter below increments on each render, verifying this resource-saving feature. </p>
DOM render number {VAL}
<p> These monads aren't inherently reactive. The instantaneous updates of the browser page is accomplished by the use (or should I say "misuse") of React.This presentation isn't about React, which is just a convenience for displaying monad values. In some applications, it might be advantageous to make the monads into React components, or perhaps include them in the React state object. That would be for another day. For now, I use React.forceUpdate() whenever I want to refresh the browser display, and keep the monads outside of the React re-render mechanism. </p>
  
   <h2> Ordinary Functions </h2>
<p>m.fmap(func), where m is a monad and func is an ordinary mathematical function, returns the monad m with value func(v), where v is the original value of m. But m.bnd(func) returns the number func(val) where val is the value of m, both before and after the operation. Here is an example that places the value of a computation in mM2. </p>

      <button style={this.bool5 ? this.style1 : this.style2 } 
        onClick={() => {mM2.ret(mM1.ret(3).bnd((x => (x+x + x*x*x) - 32*x))).bnd(refresh) }}
           onMouseEnter={ () => this.cT5() }
           onMouseLeave={ () => this.cF5() }
                >
                <ComponentCompute />
           </button>
<p>As expected, the computation did not change the value of mM1. It returned the number -63, which became the value of mM2. The method bnd has two distinct uses. It can return monads for sequences of computations, or it can return simple values. If mM1 had used its fmap method instead of bnd, the computation would have returned mM1 with the value -63. The next example demonstrates this.  </p>

      <button style={this.bool2 ? this.style1 : this.style2 } 
        onClick={() => {mM1.ret(3).fmap((x => (x+x + x*x*x) - 32*x)).bnd(refresh) }}
           onMouseEnter={ () => this.cT2() }
           onMouseLeave={ () => this.cF2() }
                >
                <ComponentCompute2 />
           </button>
<p>  </p>
      <button style={this.bool3 ? this.style1 : this.style2 } 
        onClick={() => {mM1.ret(0).bnd(mM2.ret).bnd(mM3.ret).bnd(refresh) }}
           onMouseEnter={ () => this.cT3() }
           onMouseLeave={ () => this.cF3() }
                >
                RE-SET
           </button>

           <p>The next example illustrates the possibilities for using .bnd and .fmap with anonymous functions. The display on the right won't adequately reflect this, but mM2.x will become [888,888,888], not 888888888. </p>
      <button style={this.bool4 ? this.style1 : this.style2 } 
        onClick={() => {mM2.ret(mM1.bnd(() => {return [mM1, mM2, mM3]})).fmap(x => x.map(a => a.ret(888).x)).bnd(refresh) }}
           onMouseEnter={ () => this.cT4() }
           onMouseLeave={ () => this.cF4() }
                >
                <ComponentCompute3 />
           </button>









</div>
<div style={{ width: '30%', fontSize: 18, position: 'fixed', top: 0, right: 15}}  >
   <div style={{height: 40}} />
   <span> Monad mM1.x: <button  style={this.style3} >{mM1.x}</button> </span> <br />
   <span> Monad mM2.x: <button  style={this.style3} >{mM2.x}</button> </span> <br />
   <span> Monad mM3.x: <button  style={this.style3} >{mM3.x}</button> </span> <br />
   <span> Monad mM4.x: <button  style={this.style3} >{mM4.x}</button> </span> <br />
   <span> Monad mM5.x: <button  style={this.style3} >{mM5.x}</button> </span> <br />
   <span> Monad mM6.x: <button  style={this.style3} >{mM6.x}</button> </span> <br />
   <span> Monad mM7.x: <button  style={this.style3} >{mM7.x}</button> </span> <br />
   <span> Monad mM8.x: <button  style={this.style3} >{mM8.x}</button> </span> <br />
   <span> Monad mM9.x: <button  style={this.style3} >{mM9.x}</button> </span> <br />
   <span> Monad mM10.x: <button  style={this.style3} >{(mM10).x}</button> </span> <br />
   <span> Monad mM11.x: <button  style={this.style3} >{(mM11).x}</button> </span> <br />
   <span> Monad mM12.x: <button  style={this.style3} >{(mM12).x}</button> </span> <br />
   <span> Monad mMS1.x: <button  style={this.style3} >{mMS1.x}</button> </span> <br />
   <span> Monad mMS2.x: <button  style={this.style3} >{mMS2.x}</button> </span> <br />
   <span> Monad mMS3.x: <button  style={this.style3} >{mMS3.x}</button> </span> <br />
   <span> Monad mMS4.x: <button  style={this.style3} >{mMS4.x}</button> </span> <br />
   <span> Monad mMS5.x: <button  style={this.style3} >{mMS5.x}</button> </span> <br />
   <span> Monad mMS6.x: <button  style={this.style3} >{mMS6.x}</button> </span> <br />
   <span> Monad mMI1.x: <button  style={this.style3} >{mMI1.x}</button> </span> <br />
   <span> Monad mMI2.x: <button  style={this.style3} >{mMI2.x}</button> </span> <br />
   <span> Monad mMI3.x: <button  style={this.style3} >{mMI3.x}</button> </span> <br />
   <span> Monad mMI4.x: <button  style={this.style3} >{mMI4.x}</button> </span> <br />
   <span> Monad mMI5.x: <button  style={this.style3} >{mMI5.x}</button> </span> <br />
   <span> Monad mMI6.x: <button  style={this.style3} >{mMI6.x}</button> </span> <br />
   <span style={this.style3} >{lg} </span> <br />

</div>
      <br /><br /> 
<div style={{height: 300}} />
</div>
)
}
}
render(<B4 key='B4' />, document.getElementById('divSix'));





