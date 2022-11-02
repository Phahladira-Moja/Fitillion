export default function buildMakeCommit() {
    return function makeCommit({
        commit,
        author,
        committer,
        readLater = false
    } = {}) {
        if (!author) {
            throw new Error('Commit must have an author.')
        }

        if (!commit) {
            throw new Error('Commit must have an commit object.')
        }

        if (!committer) {
            throw new Error('Commit must have an committer.')
        }

        return Object.freeze({

            getCommitId: () => commit.id,
            getCommitMessage: () => commit.message,
            getCommitCommentCount: () => commit.commentCount,

            getAuthorId: () => author.id,
            getAuthorName: () => author.name,
            getAuthorAvatarUrl: () => author.avatarUrl,

            getCommitterId: () => committer.id,
            getCommitterName: () => committer.name,
            getCommitterAvatarUrl: () => committer.avatarUrl,

            isSaved: () => readLater,
            
            readLater: () => {
                readLater = true
            },
            
        });
    }
};