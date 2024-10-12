const tbody = document.getElementById('tbody');
const ID = document.getElementById('id');
const myName = document.getElementById('name');
const Username = document.getElementById('username');
const submitBtn = document.getElementById('submitBtn');
const Updatabtn = document.getElementById('updateBtn');

const addRow = (id,completed,title) => {

    tbody.innerHTML+= 
    `<tr>
    <td>${id}</td>
    <td>${completed}</td>
    <td>${title}</td>
    <td><button onclick="editUser(${id},${completed},${title})"class="btn btn-primary">EDIT</button>
    <button class="btn btn-danger" onclick="handleDelete(${id})">Delete</button></td>
    </tr>
    `
}
async function getData(){
    const url = await fetch('http://localhost:3000/users')
    const response = await url.json();
    response.map((datas)=>{
        addRow(datas.id,datas.name,datas.username);

    })
}
async function postData(){
    
    const userData = {
        id:`${ID.value}`,
        name: `${myName.value}`,
        username: `${Username.value}`
    }

    const url = await fetch('http://localhost:3000/users',{
        method: 'POST',
        headers: {
            'Content-Type' : 'Application/json'
        },
        body: JSON.stringify(userData)
    })
}
 function editUser(id,name,username){
    alert(hello)
        userId.value =id;
        useremail.value= name;
       userName.value=username;
       submitBtn.style.display='none'
       Updatabtn.style.display='block'
  }

// const editUser ={
//     id :`${ID}`,
//     name :`${emailname.value}`,
//     username :`${username.value}`
// }
// putData(editUser)
// console.log(editUser);

// async function putData(){
//     const url = await fetch('http://localhost:3000/users${Id}',{
//         method: 'PUT',
//         headers: {
//             'content-Type' : 'Application/json'
//         },
//         body: JSON.stringify()
//     })
// }
async function handleDelete(id){
    const url = await fetch(`http://localhost:3000/users/${id}`,{
        method: 'DELETE'
    })
}
