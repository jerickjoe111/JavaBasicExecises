function greet() {
    console.log(`${greeting()}, ${recipient()}!`);
  }
  
  greet('Salutations'); // logs: Salutations, world!
  
  greet();              // logs: undefined, world!
                        // should log: Hello, world!




function greeting() {
    return 'Good morning';
  }
  
  function recipient() {
    return 'Launch School';
  }