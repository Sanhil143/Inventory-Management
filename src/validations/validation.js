

const isValidString = (value) => {
      const regexName = /^[a-zA-Z]+([\s][a-zA-Z]+)*$/
      return regexName.test(value)
}

const isValidNum = (value) =>{
      const validNum = /^[1-9]?[0-9]{1,}$/
      return validNum.test(value)
}
module.exports = {isValidString ,isValidNum}