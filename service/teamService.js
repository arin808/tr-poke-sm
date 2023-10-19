const teamDao = require('../repository/teamDAO');
//const {v4: uuidv4} = require('uuid')

//Add team
function createTeam(name, list, user_id) {
    
    return new Promise((resolve, reject) => {
        console.log("promising...")
        teamDao.createTeam(name, list, user_id)
            .then((data) => {
                resolve(data)
            })
            .catch((err) => {
                reject(err)
            })
    })
  
}

// function getTeamById(team_id) {
//     return new Promise((resolve, reject) => {
//         teamDao.getTeamById(team_id)
//         .then((data) => {
//             resolve(data)
//         })
//         .catch((err) => {
            
//             reject(err)
//         })
//     })
// }

function getTeamByUserId(user_id) {
    return new Promise((resolve, reject) => {
        teamDao.getTeamByUserId(user_id)
            .then((data) => {
                resolve(data)
            })
            .catch((err) => {
                reject(err)
            })
    })
}

function updateTeamById(user_id, name, pokemonList) {
    return new Promise((resolve, reject) => {
        teamDao.updateTeamById(user_id, name, pokemonList)
        .then((data) => {
            resolve(data)
        }).catch((err) => {
            reject(err)
        })
    })
}

module.exports = {
    createTeam, updateTeamById, getTeamByUserId
}