const getAllProjects = "SELECT * FROM projectinfo";
const getAccInfoById = "SELECT * FROM accountinfo WHERE id = $1";

module.exports = {
    getAllProjects,
    getAccInfoById,
}