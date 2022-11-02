export default function makeListCommits({commitsDB, makeCommit}) {
    return async function getCommits({
        repo,
        owner,
        pageNumber, 
    }) {

        const commits = await commitsDB.getCommits({
            repo,
            owner,
            pageNumber, 
        });

        const commitsArray = [];

        commits.forEach(commit => {

            if (!isCommitObjectValid(commit)) return;

            const commitObj = {
                id: commit.sha,
                message: commit.commit.message,
                commentCount: commit.commit.comment_count
            }

            if (!isAuthorObjectValid(commit)) return;

            const authorObj = {
                id: commit.author.id,
                name: commit.author.login,
                avatarUrl: commit.author.avatar_url ?? ''
            }

            if (!isCommitterObjectValid(commit)) return;

            const committerObj = {
                id: commit.committer.id,
                name: commit.committer.login,
                avatarUrl: commit.committer.avatar_url ?? ''
            }

            const newCommit = makeCommit({
                commit: commitObj,
                author: authorObj,
                committer: committerObj,
                readLater: false
            })

            commitsArray.push({
                id: newCommit.getCommitId(),
                message: newCommit.getCommitMessage(),
                readLater: newCommit.isSaved(),
                commentCount: newCommit.getCommitCommentCount(),
                author: {
                    id: newCommit.getAuthorId(),
                    name: newCommit.getAuthorName(),
                    avatarUrl: newCommit.getAuthorAvatarUrl(),
                },
                committer: {
                    id: newCommit.getCommitterId(),
                    name: newCommit.getCommitterName(),
                    avatarUrl: newCommit.getCommitterAvatarUrl(),
                }
            })

        })

        return commitsArray;

        function isCommitObjectValid(commit) {
            if (commit === undefined || commit === null || commit === '') return false;
    
            if (commit.sha === undefined || commit.sha === null || commit.sha === '') return false;
    
            if (commit.commit.message === undefined || commit.commit.message === null || commit.commit.message === '') return false;
            
            return true;
        }

        function isAuthorObjectValid(commit) {
            if (commit.author === undefined || commit.author === null || commit.author === '') return;
            
            if (commit.author.id === undefined || commit.author.id === null || commit.author.id === '') return;

            if (commit.author.login === undefined || commit.author.login === null || commit.author.login === '') return;

            return true;

        }

        function isCommitterObjectValid(commit) {
            if (commit.committer === undefined || commit.committer === null || commit.committer === '') return;

            if (commit.committer.id === undefined || commit.committer.id === null || commit.committer.id === '') return;

            if (commit.committer.login === undefined || commit.committer.login === null || commit.committer.login === '') return;

            return true;

        }
    }


}