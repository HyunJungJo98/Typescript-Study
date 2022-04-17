let admin3:Readonly<User> = {
    id:1,
    name:"Bob",
    gender:"m",
    age:20,
}

// Readonly이기 때문에 에러
// admin3.age = 1;
