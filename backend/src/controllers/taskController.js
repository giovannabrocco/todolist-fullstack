const getAll = (request, reponse) => {
    return response.status(200).json({ message: 'controller está tudo certo'})
};


module.exports = {
    getAll
};