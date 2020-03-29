const connection = require('../database/connection');


module.exports = {
    async index(request, response){
        const ongId = request.headers.authorization;
        console.log('primeira');
        console.log(ongId);
        if (!ongId) {
            ongId = localStorage.getItem('ongId');
            console.log('segunda');
            console.log(ongId);
        }
        const incidents = await connection('incidents')
                                .where('ong_id', ongId)
                                .select('*');
        return response.json( { incidents } );
    }

}
