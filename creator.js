module.exports = async (config) => {
    if (config.help) {
      console.log(`Usage: truffle run hello [name]`);   
      return;
    }
  
    let name = config._.length > 1 ? config._[1] : 'World!';
    console.log(`Hello, ${name}`);
  }