import express from 'express';
import api from './services/api';
import { getTeams } from './utils/dataUtils';
const app = express();
const port = 8080;

app.get('/clubs', async (req, res) => {
    try {
        const year = '2015-16'
        const response = await api.get(`/${year}/en.1.clubs.json`)
        return res.json(response.data);
    }
    catch (err) {
        return res.json({})
    }
});

app.get('/match-details', async (req, res) => {
    try {
        const year = '2015-16'
        const response = await api.get(`/${year}/en.1.json`)

        const teams = getTeams(response.data.rounds)
        
        return res.json(response.data);
    }
    catch (err) {
        return res.json({})
    }
});

app.get('/teams', async (req, res) => {
    try {
        const year = '2015-16'
        const response = await api.get(`/${year}/en.1.json`)
        console.log(response.data);

        return res.json(getTeams(response.data.rounds));
    }
    catch (err) {
        return res.json({})
    }
});

app.listen(port, () => {
    // tslint:disable-next-line:no-consoles
    // console.log(`Server started at http://localhost:${port}`)
})

