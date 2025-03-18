let tbody = document.getElementById('userDetails');

function deleteApiUsers100(){
   
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://mimic-server-api.vercel.app/users");
   
    xhr.onload = () =>{
        if(xhr.status === 200){
            var response = JSON.parse(xhr.response);
            tbody.innerHTML='';
            // console.log(tbody)
            response.forEach(element => {
                var tableRow = document.createElement('tr');
                var tableData1 = document.createElement('td');
                tableData1.innerText = element.id;
    
                var tableData2 = document.createElement('td');
                tableData2.innerText = element.username;
    
                var tableData3 = document.createElement('td');
                tableData3.innerText = element.name;
    
                var tableData4 = document.createElement('td');
                tableData4.innerText = element.email;
    
                var tableData5 = document.createElement("td");
                var editbtn = document.createElement('button')
                editbtn.id = "editbtn";
                editbtn.textContent = "Edit";
                
                var tableData6 = document.createElement("td");
                var detailButton = document.createElement('button')
                detailButton.id = "delbtn";
                detailButton.textContent = "Delete";
    
                detailButton.addEventListener('click', function(){
                    deleteApiUser(Number(tableData1.textContent));
                 });

                 editbtn.addEventListener("click", function(){
                    const numberUser = element.id
                    editApiUser(numberUser);
                    // console.log(numberUser)
                 })
    
                tableRow.append(tableData1);
                tableRow.append(tableData2);
                tableRow.append(tableData3);
                tableRow.append(tableData4);
                tableRow.append(tableData5);
                tableData5.append(editbtn);
                tableRow.append(tableData6);
                tableData6.append(detailButton);
                userDetails.append(tableRow);
    
            });
            }
        }
    
    xhr.send();
}
deleteApiUsers100()

function deleteApiUser(num){
    const dele = new XMLHttpRequest()
    dele.open('DELETE', `https://mimic-server-api.vercel.app/users/${num}`)
    dele.onload = () => {
        deleteApiUsers100();
        
    //    alert('data deleted successfully');
    }
    dele.send();
}


function editApiUser(num){
    let submitbtn = document.getElementById('submitbutton');
        submitbtn.addEventListener('click', function(){
            // console.log(num)
            let flag = false;
            const edit = new XMLHttpRequest()
            edit.open('PUT', `https://mimic-server-api.vercel.app/users/${num}`)
            edit.onload = () => {
                if(num===response.id){
                    flag = true;
                    alert('data deleted successfully')
                }
            }
            edit.send();
})
}
