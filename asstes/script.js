const tbody = document.getElementById('tbody');
const ID = document.getElementById('id');
const myName = document.getElementById('name')
const Username = document.getElementById('username')

const addRow = (id,completed,title) => {

    tbody.innerHTML+= 
    `<tr>
    <td>${id}</td>
    <td>${completed}</td>
    <td>${title}</td>
    <td><button class="btn btn-danger">EDIT</button></td>
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


