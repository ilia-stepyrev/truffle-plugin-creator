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
|  | none | Skip test creation |
| --migration | new | _(def value)_ Put a contract to a new migration file |
|  | current | Put a contract to the existing migration file |
|  | none | Skip migration creation |