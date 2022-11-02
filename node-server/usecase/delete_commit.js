export default function makeDeleteCommit({ commitsDB }) {
    return async function deleteCommit({id}) {
        const result = await commitsDB.deleteReadLater({id});
        return result;
    }
}