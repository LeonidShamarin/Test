const axios = require('axios');
const fs = require('fs');

async function getBase64FromUrl(url) {
    try {
        const response = await axios.get(url, { responseType: 'arraybuffer' });
        const buffer = Buffer.from(response.data, 'binary');
        const base64 = buffer.toString('base64');
        return base64;
    } catch (error) {
        throw new Error('Unable to fetch URL or convert to base64.');
    }
}

getBase64FromUrl('https://lh3.googleusercontent.com/i7cTyGnCwLIJhT1t2YpLW-zHt8ZKalgQiqfrYnZQl975-ygD_0mOXaYZMzekfKW_ydHRutDbNzeqpWoLkFR4Yx2Z2bgNj2XskKJrfw8')
    .then(console.log)
    .catch(console.error);
