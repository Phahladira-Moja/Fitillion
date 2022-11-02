export default function makeCommitsRepo({ fetch }) {

    return Object.freeze({
        addCommit,
        getCommits,
        getReadLater,
        deleteReadLater
    })

    async function getCommits({
        repo = "Spoon-Knife", 
        owner = "octocat",
        pageNumber = 1, 
    }) {
        const response = await fetch(`https://api.github.com/repos/${owner}/${repo}/commits?per_page=5&page=${pageNumber}`, {
            method: 'GET',
        });

        const result = await response.json();
        return result
    }

    async function addCommit({
        commit
    }) {
        const response = await fetch('https://3spx1ttq9k.execute-api.af-south-1.amazonaws.com/commits', {
            method: 'POST',
            body: JSON.stringify(commit),
            headers: {'Content-Type': 'application/json'}
        });

        const data = await response.json();

        return data
    }

    async function getReadLater() {
        const response = await fetch('https://3spx1ttq9k.execute-api.af-south-1.amazonaws.com/commits', {
            method: 'GET',
        });
        const data = await response.json();

        return data;
    }
    
    async function deleteReadLater({id}) {
        const response = await fetch('https://3spx1ttq9k.execute-api.af-south-1.amazonaws.com/commits', {
            method: 'DELETE',
            body: JSON.stringify({
                "id": id
            }),
            headers: {'Content-Type': 'application/json'}
        });
        const data = await response.json();

        return data;
    }
}