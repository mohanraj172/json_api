const tbody = document.getElementById('tbody');
const ID = document.getElementById('id');
const myName = document.getElementById('name');
const Username = document.getElementById('username');
const submitBtn = document.getElementById('submitBtn');
const Updatebtn = document.getElementById('updateBtn');

const  getData = async()=>{
    try{
        const url = await fetch('http://localhost:3000/users')
        const response = await url.json();
        response.map((datas)=>{
            tbody.innerHTML+= 
            `<tr>
            <td>${datas.id}</td>
            <td>${datas.name}</td>
            <td>${datas.username}</td>
            <td><button class="btn btn-primary" onclick="handleEdit(${datas.id},'${datas.name}','${datas.username}')">Edit</button>
            <button class="btn btn-danger" onclick="handleDelete(${datas.id})">Delete</button></td>
            </tr>
            `
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
  const handleEdit = (id,data,username) => { 
    alert('click the edit btn');
             ID.value = id;
             myName.value = data;
             Username.value = username;
             submitBtn.style .display = 'none'
             Updatebtn.style.display = 'block'
  }

  Updatebtn.addEventListener('click',(e)=>{
    e.preventDefault()
    const editedUser = {
        id: `${ID.value}`,
        data : `${myName.value}`,
        username : `${Username.value}`
      }
      console.log(editedUser)
      putData(editedUser)
      ID.value = ''
      myName.value = ''
      Username.value =''

  })
        
const putData = async(user) =>{
         const url = await fetch(`http://localhost:3000/users/${ID}`,{
            method: 'PUT',
            headers: {
                'content-Type' : 'Application/json'
            },
            body: JSON.stringify(user)
        })
    }
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
