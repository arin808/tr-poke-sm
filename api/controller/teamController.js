const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const teamService = require('../service/teamService')
const mw = require('../middleware.js')
const URL = require('url').URL;

router.use(bodyParser.json());



router.post('/teams', mw.validateTeam, (req, res) => {
    const team = req.body
    if(req.body.valid) {
        console.log("valid team")
        
        teamService.createTeam(team.name, team.pokemonList)
            .then((data) => {
                res.statusCode = 200;
                res.send({
                    message: `Team submitted: ${data}`
                })
            })
            .catch((err) => {
                res.statusCode = 400
                res.send({message: `Team creation failed. ${err}`})
            })
    } else {
        res.statusCode = 400
        res.send({message: "Team validation failed."})
    }
})

router.get('/teams/:team_id', (req,res) => {
    
    const id = req.params.team_id


    teamService.getTeamById(id)
    .then((data) => {
        res.send({body: data.Item})
    }).catch((err) => {
        res.statusCode = 400
        res.send({message: err})
    })
})

router.put('/teams/:team_id', (req, res) => {
    const id = req.params.team_id
    const body = req.body
    teamService.updateTeamById(id, body.name, body.pokemonList)
        .then((data) => {
            res.send({message: `Successfully updated team ${data}`})
        }).catch((err) => {
            res.statusCode = 400
            res.send({message: err})
        })

})

module.exports = router