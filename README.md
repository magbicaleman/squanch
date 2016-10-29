# squanch
JavaScript [Pattern Matching](https://en.wikipedia.org/wiki/Pattern_matching). 

## What up my glip glops!?
This is a extremely light weight pattern matching library. The main feature here is the ability
to pass truthy functions to check your value during pattern matching. 

#### Inspirations
- [funcy](https://github.com/bramstein/funcy).

### Important 
You might need to get this transpiled and have pollyfills.
- es6
- [Array.prototype.includes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes)
- [Spread Syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator)

## Types
Here are the currently supported patterns
- null
- undefined
- String
- Number
- Boolean
- Symbol
- Identical
- Truthy Functions

## TODOS
Feel free to open a pull request!
- [ ] Write tests
- [ ] Pass parameters to sequence function
- [ ] Create default/wildcard
- [ ] Display before and after examples

## Usage


```js

// comment this out to test pattern sequences
const squanching = {
	party: true,
	type: 'pizza',
	friends: [
		'305-444-4444',
		'305-777-7777'
	],
};

// In the scenario that squanching was an empty object
// const squanching = {};

/**
* Truthy functions, are important because now we can bring in something like lodash
* and create our rules that check if our value is true, which then our value
* will be passed to our function within our sequence
**/

const isSquanchingPizzaParty = _.curry(_.isMatch)(_, {party: true, type: 'pizza'});

// This is only an example function and it's a terrible one
const thirdParty = (phones) => 'everyone txt-ed';
const smsFriends = (obj) => thirdParty(obj.friends); 
const startParty = () => ({party: true, type: 'secret', friends: [ '305-555-5555' ]});

// setup patterns
const p = m(
	[_.isEmpty, startParty],
	[isSquanchingPizzaParty, smsFriends]
);

const patternResult = p(squanching); // 'everyone txt-ed' or new object or ...etc

```