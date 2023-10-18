
const registerDao = require('../repository/registerDao');
const profileDao = require('../repository/profileDAO');
//////////////////////////////////
async function addCognitoToDb(user_id, username){
    try {
        await registerDao.addCognitoToDb(user_id, username);
        console.log("added to db" );
        await profileDao.createProfile(user_id);
        console.log("added to profiles" );
        return user_id;
    } catch (error) {
        console.error("error in registerService", error);
        return null;
    }
}


module.exports = {
    addCognitoToDb
}