class GitHub {
    constructor(clientId, clientSecret){
        this.client_id = clientId;
        this.client_secret = clientSecret;
       
    }

    async fetchUser(user){
        const userData = await fetch(`http://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const userInfo = await userData.json();

        const repositorios = await fetch(`http://api.github.com/users/${user}/repos?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const reposData = await repositorios.json();

        return {
            userInfo,
            reposData
        };
    }
}

module.exports = GitHub;