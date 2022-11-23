var hash = require('object-hash');

const api_pix = (pix_data) => {
// this class will simulate the PIX API Response

    // hash the entire json object (e2e_id,pix_value,pix_key)
    var pix_hash = hash(pix_data);

    let sum = 0;
    for (let i = 0; i < pix_hash.length; i++) {
        sum += pix_hash[i].charCodeAt(0);
    }

    if (sum%2 !== 0) {
        return null;
    }
    else{
        return pix_hash;
    }
}

module.exports = { api_pix };