const usernameDefault = 'linktic90210'
const passwordDefault = '123456'
const authCodeDefault = 'h6fCL6OcgmZSmb4GCRSfAyAXfG4CXuBEb1v2H2OFZSYyi0B53a'

const delay = ms => {
  return new Promise((resolve, reject) => {
    if (ms > 3000) reject(`Se rechazo la promesa porque tarda mas de 3s`)

    setTimeout(() => {
      resolve(`Se ejecuto despues de ${ms}ms`)
    }, ms)
  })
}

export { usernameDefault, passwordDefault, authCodeDefault, delay }
