import repo from './repo'
import fetch from 'node-fetch';

const commitsDB = repo({fetch})

export default commitsDB