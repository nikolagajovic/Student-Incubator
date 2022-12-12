const getAllProjects = "SELECT * FROM projectinfo";
const getAccInfoById = "SELECT * FROM accountinfo WHERE id = $1";
const getUserByUsername = "SELECT * FROM accountinfo WHERE username = $1";
const updatePassword = "UPDATE accountinfo SET password = $1, oldpassword = $2 WHERE id = $3";
const getAllProjectsByUser = "SELECT projectinfo.name, projectinfo.description, projectinfo.startdate, " + 
                             "projectinfo.finishdate, projectinfo.estimated, projectinfo.status, projectinfo.idowner FROM projectinfo " + 
                             "INNER JOIN projectmembers ON projectinfo.id  = projectmembers.idprojectinfo " + 
                             "INNER JOIN users on projectmembers.iduser = users.id " + 
                             "WHERE users.id = $1;"

module.exports = {
    getAllProjects,
    getAccInfoById,
    getUserByUsername,
    updatePassword,
    getAllProjectsByUser,
}