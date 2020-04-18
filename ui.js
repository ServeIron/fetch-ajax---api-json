class UI{
    constructor(){
        this.profileCont = document.querySelector('#profileContainer');
        this.alert = document.querySelector('#alert');
        this.todo = document.querySelector('#profileTodo');
      
     
   
    }


    showProfile(profile){
        
     this.profileCont.innerHTML = `
     isim: ${profile.name} <br>
     kullanıcı adı: ${profile.username} <br>
     mail: ${profile.email} <br>
     adres: ${profile.address.street} <br>
     
     `;
    }

    showAlert(gelen){
        this.alert.innerHTML = "Böyle bir kullanıcı yok: "+gelen;
    }

    resTodo(gelenTodo){
        
        let html ="";
       gelenTodo.forEach(element => {
          
        if(element.completed){
             html+= `<li class="list-group-item list-group-item-success"> ${element.title}</li><br>`;
        }
        else{
            html+= `<li class="list-group-item list-group-item-danger"> ${element.title}</li><br>`;
        }
       });
       this.todo.innerHTML = "<h3>Yapılacak Listesi</h3>";
       this.todo.innerHTML += html;
     
     
    }
    clear(){
        this.profileCont.innerHTML =" ";
        this.alert.innerHTML =" ";
    }
}