const{response} = require('express');

const direccionesGet = (req, res = response) => {
    res.json({
        msg:" api GET desde controlador"
    });
}

module.exports = {
    direccionesGet
};