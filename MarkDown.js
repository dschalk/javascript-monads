export MarkDown;

var Markdown = require('react-remarkable');

ComponentBlank = React.createClass({
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

var ComponentPrimitive = React.createClass({
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

