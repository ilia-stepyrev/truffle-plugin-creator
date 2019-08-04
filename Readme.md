This truffle plugin allows you to automatically create contracts with related stuff like migrations, tests ets.

## Installation
1. Install the plugin with npm
    ```sh
    npm install truffle-plugin-creator
    ```

2. Add the plugin to your `truffle.js` or `truffle-config.js` file
    ```js
    module.exports = {
      /* ... rest of truffle-config */

      plugins: [
        'truffle-plugin-creator'
      ]
    }
    ```

## Usage
You can create a bunch of contracts like:
```sh
truffle run creator <Contract1> <Contract2> <ContractN> <options here>
```

| Option | Value | Meaning |
|---------|---------| ---------|
| --test | sol | _(def value)_ Generate *.sol file as a test |
|  | js | Generate *.js file as a test |
|  | both | Generate *.js file as a test as well as *.sol file |
|  | none | Skip test creation |
| --migration | new | _(def value)_ Put a contract to a new migration file |
|  | current | Put a contract to the existing migration file |
|  | none | Skip migration creation |
| --constr | true | _(def value)_ Create a constructor for the contract |
|  | false | Don't create a constructor for the contract |
| --sol-min | <version> | _(def value = 0.4.22)_ Minimum version of solidity |
| --sol-max | <version> | _(def value = 0.6.0)_ Maximum version of solidity |

## How to extend functionality of the plugin
In order to extend functionality and generate something else you can create new generator and put it to one of the arrays inside creator.js

There are 2 kinds of generators:

- *regular:* is used to generate something for each contract
  - arguments are contract and config
- *collection:* is used to generate something for all contracts at once
  - arguments are contract and config
