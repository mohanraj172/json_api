const tbody = document.getElementById('tbody');
const ID = document.getElementById('id');
const myName = document.getElementById('name');
const Username = document.getElementById('username');
const submitBtn = document.getElementById('submitBtn');
const Updatebtn = document.getElementById('updateBtn');


const addRow = (id,name,username) => {
    tbody.innerHTML+= 
    `<tr>
    <td>${id}</td>
    <td>${name}</td>
    <td>${username}</td>
    <td><button class="btn btn-primary" onclick="handleEdit(${id},'${name}','${username}')">Edit</button>
    <button class="btn btn-danger" onclick="handleDelete(${id})">Delete</button></td>
    </tr>
    `
}
const  getData = async()=>{
    try{
        const url = await fetch('http://localhost:3000/users')
        const response = await url.json();
        response.map((datas)=>{
            addRow(datas.id,datas.name,datas.username);
    
        })

    }
    catch(error){
        console.log('error');

    }
}
submitBtn.addEventListener('click',()=>{
    const userData = {
        id:`${ID.value}`,
        name: `${myName.value}`,
        username: `${Username.value}`
    }
    postData(userData)
})

const  postData = async(userData)=>{      
    try{
        const url = await fetch('http://localhost:3000/users',{
            method: 'POST',
            headers: {
                'Content-Type' : 'Application/json'
            },
            body: JSON.stringify(userData)
        })
    }
    catch(error){
        console.log('error');

    }
}
// const handleEdit = (id,data,username) => { 
//             console.log("click edit button");
//               uid = id;
//               useremail.value = data;
//               userdata.value = username;
//               submitBtn.style .display = 'none'
//               Updatebtn.style.display = 'block'

//               const editedUser = {
//                 id: `${uid}`,
//                 name : `${useremail.value}`,
//                 role : `${userdata.value}`
//             }
//             console.log(editedUser)
//             handleJsonEdit(editedUser)
//         }

//          Updatebtn.addEventListener('click', (e) => {
//            e.preventDefault()
//             const editedUser = {
//                 id: `${uid}`,
//                 name : `${useremail.value}`,
//                 role : `${userdata.value}`
//            }
//             console.log(editedUser)
//            handleJsonEdit(editedUser)
//          })
        


//  async function putData(){
//      const url = await fetch(`http://localhost:3000/users/${Id}`,{
//          method: 'PUT',
//          headers: {
//              'content-Type' : 'Application/json'
//          },
//          body: JSON.stringify(userData)
//      })
//  }
const handleDelete = async(id)=>{
    try{
        const url = await fetch(`http://localhost:3000/users/${id}`,{
            method: 'DELETE'
        })
    }
    catch(error){
        console.log('error');

    }
}
