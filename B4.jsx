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

var ComponentPrimitive = React.createClass({
  render: function() {
    return (
      <div style={{fontSize: 18, color: '#00FFFF' }} >
        <Markdown>
        {`
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
			onClick={() => {mM1
				.ret(3)
				.bnd(x => {mM2.ret(2)		
					.bnd(cube)
					.bnd(add,x)
					.bnd(refresh)}) }}
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
			.bnd(x => {mM2
				.ret(2)
				.bnd(square)
				.bnd(y => {mM3
					.ret(50)
					.bnd(double)
				  .bnd(mult,(x+y))
				  .bnd(mM4
          .ret(0)
				  .bnd(add,(x*x + y*y))
					.bnd(refresh) ) }) }) }}		
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
				.bnd(x => {mM2.ret(2)		
					.bnd(cube)
					.bnd(add,x)
					.bnd(refresh)}) }}
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
			onClick={() => {mM1
				.ret(3)
				.bnd(x => {mM2.ret(2)		
					.bnd(cube)
					.bnd(add,x)
					.bnd(refresh)}) }}
        `}
        </Markdown>
      </div>
    );
  }

});



class B4 extends React.Component {
  constructor(props) {
    super(props);

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

    this.mM1 = new M_Primitive(0);
    this.mM2 = new M_Primitive(0);
    this.mM3 = new M_Primitive(0);
    this.mM4 = new M_Primitive(0);
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

  rand = (a,b) => {
      return Math.floor(Math.random() * (a - b)) + b;
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

    render = () => {
    let mM1 = this.mM1;
    let mM2 = this.mM2;
    let mM3 = this.mM3;
    let mM4 = this.mM4;
    let refresh = this.refresh;
    let square = this.square;
    let cube = this.cube;
    let double = this.double;
    let tripple = this.tripple;
    let add = this.add;
    let mult = this.mult;
    return(
      <div style={{ backgroundColor: '#000', height: '100%' , width: '100%', color: '#FFE4C4', fontSize: 22 }}>
        <br /><br />

<div style={{ width: '30%', fontSize: 22, position: 'fixed', top: 200, right: 5}}  >
   <span> Monad mM1: <button  style={this.style3} >{mM1.x}</button> </span> <br />
   <span> Monad mM2: <button  style={this.style3} >{mM2.x}</button> </span> <br />
   <span> Monad mM3: <button  style={this.style3} >{mM3.x}</button> </span> <br />
   <span> Monad mM4: <button  style={this.style3} >{mM4.x}</button> </span> <br />
 </div>
      <br /><br /> 

  <div style={{ width: '65%', textAlign: 'left', marginLeft: 40, marginRight: 40, fontSize: 20 }} >

<h2 style={{textAlign: 'center'}} >Javascript Monads</h2>
<p>First, let's take a look at monads in the category of primitive value monads. Then we'll look at monads whose values are objects and monads whose values are arrays. Here is the definition of the primitive value monad:  </p>
<ComponentPrimitive />
<p>I'm going to postpone any discussion of precisely what sorts of categories and morphisms are involved here. I'll only demonstrate, without formal proof, that "ret" is the left and right identity, and that the commutative property holds; i.e., how computations are grouped in a chain of computations does not affect the result.</p>
<p> Let's see how these monads work. They can provide a format for organizing code, as the following example demonstates. Here's the function "chance":</p>

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
<p>These are the functions we are using to demonstrate primitive monads:</p>
<ComponentMorphismsA />
<p>The first two arguments are a primitive value and a monad. They return a monad with the specified value when they are called as stand-alone functions. When called by "bnd", they are the value of the calling monad and the calling monad itself. The last two functions, "add" and "mult", take three arguments. Here's how that works: </p> 
      <button style={this.bool2 ? this.style1 : this.style2 } 
   onClick={() => {mM1.ret(3).bnd(add,4).bnd(refresh)  }}
   onMouseEnter={ () => this.cT2() }
   onMouseLeave={ () => this.cF2() }
        >
<ComponentAddA />
      </button>
<p>We gave mM1 the value "3" and added "4" to it. Next, we show how a monad can pass its value down the line for a later computation. mM1 get the value "3", mM2 gets the value "2", which is cubed to give "8", and finally, mM2 gets the value 3 + 8 = 11. </p>
      <button style={this.bool2 ? this.style1 : this.style2 } 
   onClick={() => {mM1
.ret(3)
.bnd(x => {mM2
	.ret(2)
	.bnd(cube)
	.bnd(add,x)
	.bnd(refresh) }) }}

   onMouseEnter={ () => this.cT2() }
   onMouseLeave={ () => this.cF2() }
        >
<ComponentLambdaA />
      </button>
<p>We play around with monads and, lo and behold, the lambda calculus appears! </p>
<p>In the next example, x = 3, y = 4, and the final computation is x*x + y*y = 25. Along the way, mM3 is assigned the value "50", which is doubled and multiplied times x + y, giving a result of 700.  </p>
      <button style={this.bool2 ? this.style1 : this.style2 } 
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
      .ret(0)
      .bnd(add,(x*x + y*y))
			.bnd(refresh) ) }) }) }}
		 onMouseEnter={ () => this.cT2() }
		 onMouseLeave={ () => this.cF2() }
        >
<ComponentLambdaB />
      </button>
<br /><br /><br /><br /><br /><br />
</div>
</div>
)
}
}
render(<B4 key='B4' />, document.getElementById('divSix'));
























