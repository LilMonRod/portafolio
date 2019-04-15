(function () {

function printEvents(event) {
	const containerGit = document.getElementById('contentGithub');
	for (const e of event) {
		const container = document.createElement('div');
		container.setAttribute('class', 'container-activity');
		const title = document.createElement('h3');
		title.innerText = e.repo.name;
		const subtitle = document.createElement('h4');
		subtitle.innerText = e.type;
		container.appendChild(title);
		container.appendChild(subtitle);
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
function printRepos(event) {
const containerRepos = document.getElementById('containerProjects');
console.log(event);
for (const e of event) {
	console.log(e);
	console.log(e.updated_at);
	const container = document.createElement('div');
	container.setAttribute('class', 'container-activity');
	const title = document.createElement('h3');
	title.innerText = e.name;
	const subtitle = document.createElement('a');
	subtitle.setAttribute('href', e.url);
	subtitle.innerText = e.url;
	container.appendChild(title);
	container.appendChild(subtitle);
	const date = document.createElement('p');

	const formatDate = new Date(e.created_at);
	const day = formatDate.getDate();
	const month = formatDate.getMonth();
	const year = formatDate.getFullYear();
	date.innerText = day + '/' +  month + '/' + year;
	container.appendChild(date);
	containerRepos.appendChild(container);
}
}
  
  
fetch('https://api.github.com/users/LilMonRod/events')
	.then((data) => data.json())
	.then((json) => printEvents(json))
	.catch(ex => { console.error(ex);})

fetch('https://api.github.com/users/LilMonRod/repos')
	.then((data) => data.json())
	.then((json) => printRepos(json))
	.catch(ex => { console.error(ex);})

})();