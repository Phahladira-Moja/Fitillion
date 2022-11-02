export default function makeReadLaterList({commitsDB}) {
    return async function getReadLaterCommits() {
        const result = await commitsDB.getReadLater();
        return result;
    }
}