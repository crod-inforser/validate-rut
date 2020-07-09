# Validate rut

_Tool for validate rut with document number in Chile_

## Starting 🚀

### How to install 📋

_First install with npm_

```bash
npm i validate-rut-serie
```

_Or yarn_

```bash
yarn add validate-rut-serie
```


## Using the tool ⚙️

_First import the tool, then call the async method isValid, sending an object with rut and serie (without points), it will return an boolean_

### Example 🔩

```javascript
const { isValid } = require("validate-rut-serie")

async function tellIfIsValid() {
    const valid = await isValid({rut:"11.111.111-1", serie:"123456789"})
    console.log(valid) // return true if is valid, or false if is invalid
}

tellIfIsValid()
```

### Valid formats for serie

_The only format is 9 numbers of the number document, without points, string format_

### Valid formats for rut ⌨️

```
// valids
('18.972.631-7')
('18972631-7')
('189726317')
('9.068.826-k')
('9068826-k')
('9068826k')

// invalids
('18.972.631-0')
('18,972,631-7')
('18*972*631-7')
('18-972-631-7')
('error18.972.631-7')
('9068826-1')
('')
(189726317)
('0')
(0)

```


## Building with: 🛠️

* [rut.js](https://github.com/jlobos/rut.js#readme) - Tool for validate RUT
* [axios](https://github.com/axios/axios) - To request if the rut is valid (to chilean servers)

## Authors ✒️

* **Christian Rodriguez** - *Inforser* - [crod](mailto:crodriguez@inforser.cl)


## Licence 📄

MIT

## Thanks 🎁

* Thanks for read this readme! 📢

---
⌨️ with ❤️ for [crod-inforser](mailto:crodriguez@inforser.cl) 😊
