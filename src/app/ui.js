class UI{
    constructor(){
        this.profile = document.getElementById('profile')
    }
    showProfile(user){
       
        this.profile.innerHTML = `
        <div class="card mt-2 animated bounceInLeft">
            <img src="${user.avatar_url}" class="card-img-top"/>
            <div class="card-body">
                <h4 class="card-title">${user.name} / ${user.login}</h4>
                <a href="${user.html_url}" class="btn btn-primary mb-3" target="_blank">View Profile</a>
                <span class="badge badge-succes">
                    followers: ${user.followers}
                </span>
                <span class="badge badge-primary">
                    following: ${user.following}
                </span>
                <span class="badge badge-primary">
                    company: ${user.company}
                </span>
                <span class="badge badge-primary">
                    blog: ${user.blog}
                </span>
            </div>
        </div>
        `;
        this.clearMessage();
    }

    showMessage(menssage, cssClass){
        const div = document.createElement('div');
        div.className = cssClass;
        div.appendChild(document.createTextNode(menssage));
        const content = document.querySelector('.row');
        const profile = document.querySelector('#profile');
        content.insertBefore(div, profile);
    }

    clearMessage(){
      const alertFound = document.querySelector('.alert');
      if(alertFound){
          alertFound.remove();
      }
    }
    showRepositories(repositories){
        let template = '';

        repositories.forEach(repo =>{
        template += `
        <div class="card card-body mt-2 animated bounceInUp">
            <div class="row">
                <div class="col-md-6">
                    <a href="${repo.html_url}" target="_blank">
                        ${repo.name}
                    </a>
                </div>

                <div class="col-md-6">
                    <span class="babge badge-primary p-2">
                        ${repo.language}
                    </span>
                    <span class="babge badge-primary p-2">
                        ${repo.forks_count}
                    </span>
                </div>
            </div>
        </div>
        `;
        })
        document.getElementById('repositorios').innerHTML = template; 
    }
    
}
module.exports = UI;