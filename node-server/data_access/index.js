import * as dotenv from 'dotenv'
import  { Octokit } from 'octokit'
import repo from './repo'
import fetch from 'node-fetch';
dotenv.config()


const octokit = new Octokit({
    auth: process.env.PERSONAL_ACCESS_TOKEN
});

const commitsDB = repo({octokit, fetch})

export default commitsDB