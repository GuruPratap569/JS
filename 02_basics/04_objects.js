// const tinderUser= new Object() //singleton object
// console.log(tinderUser);
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Hitesh",
            lastname: "Gupta"
        }
    }
}
// console.log(regularUser.fullname.userfullname.lastname);


const obj1 = { 1: "a", 2: "b" }
const obj2 = { 3: "a", 4: "b" }
const obj3 = { 5: "a", 6: "b" }

// const obj4 = {obj1, obj2} 
// const obj4 = {obj1, obj2 ,obj3}
// console.log(obj4);
// const obj4 = Object.assign(obj1, obj2, obj3)
// const obj4 = Object.assign({}, obj1, obj2, obj3)// good way to assign but we can also done as previously
// console.log(obj4);

const obj4 = {...obj1, ...obj2, ...obj3}// most of time is used
// console.log(obj4);

const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    }
]
// console.log(users[1].email);

// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));

// ______________________________________

// Destructure of Object

const course = {
    course: "JS in Hindi",
    price: "999",
    courseInstructor:"Hitesh"
}

// course.courseInstructor
const { courseInstructor: Instructor } = course  //destructoring of object
// console.log(courseInstructor);
console.log(Instructor);


//     JSON look like--     
//                        =>  API se jb data aata h to o JSON formate me hi rhta h
//     {                             => kisi variable me assign nii rhta h
//       "course" : "JS in Hindi",
//       "price" : "999",
//       "courseInstructor" : "free"
//     }