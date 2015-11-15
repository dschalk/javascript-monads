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
      <div style={{fontSize: 22, color: '#00FFFF' }} >
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
            let v = mon.x;
            let v2 = f(v, ...args);
            mon.ret(v2);
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
      <div style={{fontSize: 22, color: '#00FFFF' }} >
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
      <div style={{fontSize: 22, color: '#00FFFF' }} >
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
      <div style={{fontSize: 22, color: '#00FFFF' }} >
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
      <div style={{fontSize: 22, color: '#00FFFF' }} >
        <Markdown>
        {`
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
        `}
        </Markdown>
      </div>
    );
  }

});

var ComponentAddA = React.createClass({
  render: function() {
    return (
      <div style={{fontSize: 22, color: '#00FFFF' }} >
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
      <div style={{fontSize: 22, color: '#00FFFF' }} >
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
      <div style={{fontSize: 22, color: '#00FFFF' }} >
        <Markdown>
        {`
      onClick={() => {mM1
     	.ret(3)
     	.bnd(x => mM2
     		.ret(2)
     		.bnd(square)
         .bnd(y => mM3
         	.ret(50)
         	.bnd(double)
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
      <div style={{fontSize: 22, color: '#00FFFF' }} >
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
      <div style={{fontSize: 22, color: '#00FFFF' }} >
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
      <div style={{fontSize: 22, color: '#00FFFF' }} >
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
      <div style={{fontSize: 22, color: '#00FFFF' }} >
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
      <div style={{fontSize: 22, color: '#00FFFF' }} >
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
      <div style={{fontSize: 22, color: '#00FFFF' }} >
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
      <div style={{fontSize: 22, color: '#00FFFF' }} >
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
      <div style={{fontSize: 22, color: '#00FFFF' }} >
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
      <div style={{fontSize: 22, color: '#00FFFF' }} >
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
      <div style={{fontSize: 22, color: '#00FFFF' }} >
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
      <div style={{fontSize: 22, color: '#00FFFF' }} >
        <Markdown>
        {`
      this.bnd = (func, ...args) => {
        return func(this.x, this, ...args);    
      };
        `}
        </Markdown>
      </div>
    );
  }

});

var ComponentAdd = React.createClass({
  render: function() {
    return (
      <div style={{fontSize: 22, color: '#00FFFF' }} >
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
      <div style={{fontSize: 22, color: 'burlywood' }} >
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
      <div style={{fontSize: 22, color: '#00FFFF' }} >
        <Markdown>
        {`
      bench = () => {
        let self = this;
        let k = 0;
        let j = 0;
        let d1 = new Date();
        for (k; k<100000; k++) {
          this.mM1 = new Monad(k);
        }
        this.resBench = ((new Date()) - d1);    
        setTimeout( function() {
          self.forceUpdate();
        },12 )
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
      <div style={{fontSize: 22, color: '#00FFFF' }} >
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
          self.forceUpdate();
        },12 )
      }
        `}
        </Markdown>
      </div>
    );
  }
});

var DummyE = React.createClass({
  render: function() {
    return (
      <div style={{fontSize: 22, color: '#00FFFF' }} >
        <Markdown>
        {`
        `}
        </Markdown>
      </div>
    );
  }
});

var ComponentAdd = React.createClass({
  render: function() {
    return (
      <div style={{fontSize: 22, color: '#00FFFF' }} >
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

var ComponentFmap = React.createClass({
  render: function() {
    return (
      <div style={{fontSize: 22, color: '#00FFFF' }} >
        <Markdown>
        {`
      let fmap = (f,mon, ...args) => {    
        let v = mon.x;
        mon.ret(f(v, ...args));
        return mon;
      }
    
      let bnd = (f,mon, ...args) => {
        f(mon.x,mon, ...args);
        return mon;
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
      <div style={{fontSize: 22, color: '#00FFFF' }} >
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

var ComponentBlankr4 = React.createClass({
  render: function() {
    return (
      <div style={{fontSize: 22, color: '#00FFFF' }} >
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
})

var ComponentBlank5 = React.createClass({
  render: function() {
    return (
      <div style={{fontSize: 22, color: '#00FFFF' }} >
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
        let v = mon.x;
        let v2 = f(v, ...args);
        mon.ret(v2);
        return mon;
      };
    }
  };

  let fmap = (f,mon, ...args) => {
    let v = mon.x;
    mon.ret(f(v, ...args));
    return mon;
  }

  let join = m => m.x;

  let bnd = (f,mon, ...args) => {
    f(mon.x,mon, ...args);
    return mon;
  }

class B4 extends React.Component {
  constructor(props) {
    super(props);

  this.M = a => new Monad(a);
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
  this.style2 = {backgroundColor: '#000', textAlign: 'left', borderColor: 'darkred', outline: 0,
  color: 'burlywood', borderRadius: 10, paddingTop: 1.1, paddingBottom: 0.9, marginRight: 3,
  marginLeft: 12, fontSize: 22 };
  this.style1 = {backgroundColor: 'blue', textAlign: 'left', borderColor: 'lightblue', outline: 0,
  color: 'yellow', borderRadius: 10, paddingTop: 1.1, paddingBottom: 0.9, marginRight: 3,
  marginLeft: 12, fontSize: 22 };
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
}

  style3 = {backgroundColor: '#000', textAlign: 'left', borderColor: 'darkblue', outline: 0,
    color: 'red', borderRadius: 10, paddingTop: 1.1, paddingBottom: 0.9, marginRight: 3, marginLeft: 12, fontSize: 27 }

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

  fnc = (a,b) => a.b;

  branch = (x,mon,a) => {
    return mon;
  }

  branchT = (x,mon,a) => {
    setTimeout(function() {
      return mon;
    },1500  )
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

  bench = () => {
    let self = this;
    let k = 0;
    let j = 0;
    let d1 = new Date();
    for (k; k<1000000; k++) {
      this.mM1 = new Monad(k);
    }
    this.resBench = ((new Date()) - d1);
    setTimeout( function() {
      self.forceUpdate();
    },12 )
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
  ad = (a,b) => a + b;

    render = () => {
    let mM1 = this.mM1;
    let mM2 = this.mM2;
    let mM3 = this.mM3;
    let mM4 = this.mM4;
    let mM5 = this.mM5;
    let mM6 = this.mM6;
    let mM7 = this.mM7;
    let mM8 = this.mM8;
    let mM9 = this.mM9;
    let mM10 = this.mM10;
    let cu = this.cu;
    let ad = this.ad;
    let refresh = this.refresh;
    let square = this.square;
    let cube = this.cube;
    let double = this.double;
    let tripple = this.tripple;
    let add = this.add;
    let mult = this.mult;
    let ran = this.ran;
    let branch = this.branch;
    let test = this.test;
    return(
      <div style={{ backgroundColor: '#000', height: '100%' , width: '100%', color: '#FFE4C4', fontSize: 22 }}>
        <br /><br />

<div style={{ width: '30%', fontSize: 22, position: 'fixed', top: 200, right: 5}}  >
   <span> Monad mM1: <button  style={this.style3} >{mM1.x}</button> </span> <br />
   <span> Monad mM2: <button  style={this.style3} >{mM2.x}</button> </span> <br />
   <span> Monad mM3: <button  style={this.style3} >{mM3.x}</button> </span> <br />
   <span> Monad mM4: <button  style={this.style3} >{mM4.x}</button> </span> <br />
       <br />
   <span> Monad mM5: <button  style={this.style3} >{mM5.x}</button> </span> <br />
   <span> Monad mM6: <button  style={this.style3} >{mM6.x}</button> </span> <br />
   <span> Monad mM7: <button  style={this.style3} >{mM7.x}</button> </span> <br />
   <span> Monad mM8: <button  style={this.style3} >{mM8.x}</button> </span> <br />
      <br />
   <span> Monad mM9: <button  style={this.style3} >{mM9.x}</button> </span> <br />
   <span> Monad mM10: <button  style={this.style3} >{mM10.x}</button> </span> <br />
 </div>
      <br /><br /> 

<div style={{ width: '65%', textAlign: 'left', marginLeft: 40, marginRight: 40, fontSize: 24 }} >

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
    	.bnd(double)
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
   onMouseEnter={ () => this.cT3() }
   onMouseLeave={ () => this.cF3() }
        >
        <ComponentHypotenuse />
   </button>

   <p> If you organizes an application with instances of Monad, please tell me about it. I am going to look into the feasibility of feeding websocket data into a monad and having it send instructions down branches in accordance with the message prefixes. The <a href="http://schalk.net" style={{color: 'green' }}>game of Score</a> seems like a good candida1te.</p>
   
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
<h2>Create a new instance 1,000,000 times: <span style={{color: 'lightblue' }} >  {this.resBench} </span> ms</h2>
<p>  </p>
      <button style={this.bool2 ? this.style1 : this.style2 } 
   onClick={() => {this.bench()}  }
   onMouseEnter={ () => this.cT2() }
   onMouseLeave={ () => this.cF2() }
        >
        <Bench1 />
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
<p>This repository also provides bnd and fmap functions similar to the bnd and fmap monad methods. They are defined as follows: </p>
<ComponentFmap />
<p>Here is bnd in action:</p>

<p>  </p>
      <button style={this.bool2 ? this.style1 : this.style2 } 
   onClick={() => {bnd(add,mM1,5).bnd(refresh) }}  
   onMouseEnter={ () => this.cT2() }
   onMouseLeave={ () => this.cF2() }
        >
   bnd(add,mM2,5).bnd(refresh)  
      </button>
      <p>   </p>
<p> Next, we run the fmap function twice. </p>
      <button style={this.bool2 ? this.style1 : this.style2 } 
   onClick={() => {
     fmap(ad,mM2,3)
     fmap(cu,mM2).bnd(refresh);
        } }
   onMouseEnter={ () => this.cT2() }
   onMouseLeave={ () => this.cF2() }
        >
     fmap(ad,mM2,3)<br />
     fmap(cu,mM2).bnd(refresh);
      </button>
<p>cu, ad, and add are defined as follows: </p>
<ComponentFmap2 />
<p>The fmap functions were run independently and sequentially. fmap(ad.mM1,3) updated mM1 in time or fmap(cu.mM1) to update it, but if we had used a time-consuming function instead of ad, the second call to fmap might have used the value of mM1 before three was added. Using the monad method fmap doesn't help. If the first fmap computation was still in progress, no monad would be available for the call to fmap and an error would result. Things like callbacks, promises, or iterators can guarantee execution in a specified order. But the fmap method can be useful in chains.  </p>

      <button style={this.bool2 ? this.style1 : this.style2 } 
   onClick={() => {
     fmap(ad,mM3,3)
     .fmap(cu,mM3).bnd(refresh);
        } }
   onMouseEnter={ () => this.cT2() }
   onMouseLeave={ () => this.cF2() }
        >
     fmap(ad,mM3,3)<br />
     .fmap(cu).bnd(refresh);
      </button>
<p>The only difference is the addition of a dot in front of the second call to fmap, and since the fmap method uses the calling method's value by default, we were able to write ".fmap(cu)" instead of ".fmap(cu,mM3)". Here is another example: </p>
      <button style={this.bool2 ? this.style1 : this.style2 } 
   onClick={() => {
     mM4.fmap(ad,mM5,5)
     .fmap(ad,mM6,3)
     .fmap(cu)
     .fmap(ad,mM5,1)
     .fmap(cu)
     .fmap(ad,mM4,(mM6.x + 1000))
     .bnd(refresh)
        } }
   onMouseEnter={ () => this.cT2() }
   onMouseLeave={ () => this.cF2() }
        >
     mM4.fmap(ad,mM5,5) <br />
     .fmap(ad,mM6,3) <br />
     .fmap(cu) <br />
     .fmap(ad,mM5,1) <br />
     .fmap(cu) <br />
     .fmap(ad,mM4,(mM6.x + 1000)) <br />
     .bnd(refresh) <br />
      </button>
<p>mM4 gets the ball rolling and is immediately abandoned. Its value does not change until the end of the chain. 3 is added to mM6's value and that value gets cubed. Then mM6 is abandoned and attention shifts to mM5 whose value gets incremented by 1 and then cubed. Finally, mM4 gets mM6's value, incremented by 1000. </p>
<p>Creating branches with fmap is simpler than using "branch" with the bnd method. </p> 

<div style={{height:500}} />
</div>
</div>
)
}
}
render(<B4 key='B4' />, document.getElementById('divSix'));





