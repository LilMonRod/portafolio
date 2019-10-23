(function () {

function printEvents(event) {
	const containerGit = document.getElementById('contentGithub');
	for (const e of event) {
		const container = document.createElement('div');
		container.setAttribute('class', 'activity__cont');
		const title = document.createElement('h4');
		title.innerText = e.repo.name;
		container.appendChild(title);
		if (e.payload.commits !== undefined){
			const commit = document.createElement('p');
			commit.innerText = e.payload.commits['0'].message;
			container.appendChild(commit);
		}

		const date = document.createElement('p');
		const formatDate = new Date(e.created_at);
		const day = formatDate.getDate();
		const month = formatDate.getMonth();
		const year = formatDate.getFullYear();
		date.innerText = day + '/' +  month + '/' + year;

		container.appendChild(date);
		containerGit.appendChild(container);
	}
}  
  
fetch('https://api.github.com/users/LilMonRod/events')
	.then((data) => data.json())
	.then((json) => printEvents(json))
	.catch(ex => { console.error(ex);})

})();