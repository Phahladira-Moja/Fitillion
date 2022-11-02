export default function makeAddCommit({commitsDB, makeCommit}) {
    return async function addCommit({commit}) {
        
        const commitObj = {
            id: commit.id,
            message: commit.message,
            commentCount: commit.comment_count
        }

        const newCommit = makeCommit({
            commit: commitObj,
            author: commit.author,
            committer: commit.committer,
            readLater: true
        })

        commit = {
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
        }

        const result = await commitsDB.addCommit({ 
            commit
         });

        return result;
    }

}