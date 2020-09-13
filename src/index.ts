import express from 'express';
import cors from 'cors';
import api from './services/api';
import { formatTeamwiseMatches } from './utils/dataUtils';
const app = express();
const port = 9000;

app.use(cors())

app.get('/clubs/:year', async (req, res) => {
    try {
        const year = req.params.year || '2015-16'
        const response = await api.get(`/${year}/en.1.clubs.json`)
        return res.json(response.data);
    }
    catch (err) {
        return res.json({})
    }
});

app.get('/match-details/:year', async (req, res) => {
    try {
        const year = req.params.year || '2015-16';
        const response = await api.get(`/${year}/en.1.json`)

        const teams = formatTeamwiseMatches(response.data.rounds)

        return res.json(teams);
    }
    catch (err) {
        return res.json({})
    }
});

app.get('/full', async (req, res) => {
    try {
        const year = '2015-16'
        const response = await api.get(`/${year}/en.1.json`)
        console.log(response.data);

        return res.json(response.data.rounds);
    }
    catch (err) {
        return res.json({})
    }
});

app.listen(port, () => {
    // tslint:disable-next-line:no-consoles
    // console.log(`Server started at http://localhost:${port}`)
})

