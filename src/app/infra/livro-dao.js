class LivroDao {
    constructor(db){
      this._db=db
    }

    lista(){
      return new Promise((resolve, reject)=>{
        this._db.all(
          'SELECT * FROM livros',
          function(erro,resultados){

            if(erro) return reject ('Não foi possivel listar os livros');
            return resolve(resultados);
          }
        )
      })

    }
}

module.exports = LivroDao;