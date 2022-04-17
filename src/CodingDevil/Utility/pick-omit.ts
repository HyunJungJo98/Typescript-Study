// User에서 id와 name만 가져와서 사용 가능
const admin4:Pick<User, "id"|"name"> = {
    id:0,
    name:"Bob"
}

// id와 name만 생략하기, 속성 기준
const admin5:Omit<User, "id"|"name"> = {
    age:20,
    gender:"f"
}