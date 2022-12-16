const getAllProjects = "SELECT * FROM projectinfo";
const getAccInfoById = "SELECT * FROM accountinfo WHERE id = $1";
const getAccInfoByUsername = "SELECT * FROM accountinfo WHERE username = $1";
const updatePassword = "UPDATE accountinfo SET password = $1, oldpassword = $2 WHERE id = $3";
const getAllProjectsByUser = "SELECT projectinfo.name, projectinfo.description, projectinfo.startdate, " + 
                             "projectinfo.finishdate, projectinfo.estimated, projectinfo.status, projectinfo.idowner FROM projectinfo " + 
                             "INNER JOIN projectmembers ON projectinfo.id  = projectmembers.idprojectinfo " + 
                             "INNER JOIN users on projectmembers.iduser = users.id " + 
                             "WHERE users.id = $1;";
const getPostcodes = "SELECT * from postcode";
const getCitiesByCountry = "SELECT * FROM country INNER JOIN city ON city.idcountry = country.id WHERE country.id = $1;";
const getUserByOib = "SELECT oib FROM users WHERE oib = $1";
const addAccInfo = "INSERT INTO accountinfo (username, password) " + 
                    "VALUES ($1, $2) RETURNING id;";

const addUser = "INSERT INTO users (idaccountinfo, name, surname, oib, dateofbirth, gender) VALUES ($1, $2, $3, $4, $5, $6) RETURNING id;";
const addAddress = "INSERT INTO address (iduser, idcity, streetname, streetnumber) VALUES ($1, $2, $3, $4) RETURNING id;";
const addContact = "INSERT INTO contactinfo (contacttype, iduser, info) VALUES ($1, $2, $3);";
const getCityByName = "SELECT id FROM city WHERE name = $1;";

module.exports = {
    getAllProjects,
    getAccInfoById,
    getAccInfoByUsername,
    updatePassword,
    getAllProjectsByUser,
    getPostcodes,
    getUserByOib,
    addAccInfo,
    getCitiesByCountry,
    addUser,
    addAddress,
    addContact,
    getCityByName,
}