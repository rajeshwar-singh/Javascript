const accountId = 55454
let accountEmail = "Raj@sjijis.com"
var accountPassword = "234234"
accountCity = "Delhi"
let accountState

/*
    Avoid using var keyword because of scope block and functional block issue
*/

accountState = "Uttar Pradesh"

console.table([accountId, accountEmail, accountPassword, accountCity,accountState])