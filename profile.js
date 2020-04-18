class Profile{
    constructor(){
        this.clientid = '',
        this.clientSecret = ''
    }
    async getUserName(username){
        const profileResponse = await fetch(`https://jsonplaceholder.typicode.com/users?username=${username}`);
   

        const profile = await profileResponse.json();
        const todoRespo = await fetch(`https://jsonplaceholder.typicode.com/todos?userId=${profile[0].id}`);
        const todo = await todoRespo.json();
        return {
            profile, todo
        }
    }
}