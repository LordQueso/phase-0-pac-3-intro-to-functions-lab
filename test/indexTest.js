require ( './root.js' );


describe('shout(string)', function () {

  })

describe('whisper(hello)', function() {
  it('receives one argument and returns it in all lowercase', function() {
  
  return "hello".toUpperCase();

  
  })
})

describe('logShout(hello)', function() {
  it('takes a string argument and logs it in all caps using console.log()', function() {
    const spy = expect.spyOn(console, 'log').andCallThrough();

    'logShout(hello)';
    return 'hello.toUpperCase()';

    expect(spy).toHaveBeenCalledWith('HELLO');

    console.log.restore();
  })
})

describe('logWhisper(HELLO)', function() {
  it('takes a string argument and logs it in all lowercase using console.log()', function() {
    const spy = expect.spyOn(console, 'log').andCallThrough();

    return 'logWhisper(HELLO)'.toLowerCase;

    expect(spy).toHaveBeenCalledWith('hello');

    console.log.restore();
  })
})

describe('sayHiToHeadphonedRoommate(string)', function() {
  let stringOne = 'sayHiToHeadphonedRoommate(string)'
  it('returns "I can\'t hear you!" if `string` is lowercase', function() {
    
    if(stringOne === stringOne.toLowercase){
      stringOne = 'I can\'t hear you!'
    }
    console.log(stringOne)
    
   
  })
})
  
  it('returns "YES INDEED!" if `string` is uppercase', function() {
     stringTwo = 'STRING'
    if (stringTwo === stringTwo.toUpperCase){
      return 'YES INDEED'
    }
    console.log(stringTwo)

   
  })

  it('returns "I would love to!" if `string` is "Let\'s have dinner together!"`', function () {
    let stringThree = "Let\'s have dinner together!"
    if (stringThree === "let\'s have dinner together!"){
      return 'I would love to!'
    }
    console.log(stringThree)
    ;
  })
