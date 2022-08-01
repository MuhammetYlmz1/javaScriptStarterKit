import { BaseLogger, ElasticLogger } from "../crossCuttingConcerns/logger.js"
import User from "../models/user.js"
import UserService from "../services/userService.js"
import Customer from "../models/customer.js"


console.log("User Component Yüklendi")

let userService=new UserService(new ElasticLogger)

let user1=new User(1,"Mehmet","Kara","İstanbul")
let user2=new User(2,"Ahmet","Duman","Ankara")
let user3=new User(3,"Ali","Kırmızı","İzmir")



userService.add(user1)
userService.add(user2)
userService.add(user3)


//console.log(userService.getById(1))
//console.log(userService.list())

//prototyping
let customer={id:1,firstName:"Muhammet"}
customer.lastName="Yılmaz"
console.log(customer.lastName)

console.log("---------------------------------------")
userService.load()

let customerToAdd=new Customer(6,"Elif","File","Ankara","asdsa")

customerToAdd.type="customer"

userService.add(customerToAdd)
console.log(userService.customers)
console.log(userService.employees)
console.log(userService.errors)
console.log(userService.getCustomersSorted());
