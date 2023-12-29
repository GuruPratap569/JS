const accountId = 12345
let accountEmail = "guru@gmail.com"
var accountPassword = "123456"
city = "maharajganj"
console.table([accountId, accountEmail, accountPassword, city])

/*
  prefer not to use var
  because of issue in block scope and functional scope
*/

// accountId = 12345444

 accountEmail = "guru564@gmail.com"
 accountPassword = "12344444456"
city = "maharajganj_city"
console.table([accountId, accountEmail, accountPassword, city])
