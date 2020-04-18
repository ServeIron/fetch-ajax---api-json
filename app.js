const profile = new Profile();
const ui = new UI();
const search = document.querySelector('#searchProfile');


search.addEventListener('keyup',(event)=>{
    ui.clear();
    let text =event.target.value;
    if(text !== ''){
        profile.getUserName(text).then(res=>{
            if(res.profile.length ===0){
                ui.showAlert(text);
            }
            else{
                 
             ui.resTodo(res.todo);
            ui.showProfile(res.profile[0]);
        }
        }).catch(err =>{
            ui.showAlert(text);
        });
    }
})