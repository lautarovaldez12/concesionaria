const { FORMERR } = require('dns');
let fs = require('fs');
const { index } = require('./homeController');
const dataJSON = JSON.parse(fs.readFileSync('./data/concesionarias.json', 'utf-8'));

module.exports = {
    marcas : function(req,res) {
        let arro = [];
        let i = 0;
        let otroArray = [];
        let hash = [];

        

        dataJSON.forEach(element => {
            arro = element.autos;
            arro.forEach(element => {
                otroArray.push(element.marca)
            })
            /*
            otroArray = arro.filter((thing, index, self) =>
                index === self.findIndex((t) => (
                    t.marca === thing.marca
                    ))
            )
            */
            /*
            arro.forEach(function (element,index) {
                if("audi" !== element.marca){
                    console.log('no esta repetido');
                }else{
                    console.log(element.marca)
                }
                i++;
            });
            */
          

        });
        
        
        const dataArr = new Set(otroArray);

        let result = [...dataArr];
        
        result.forEach(element => {
            res.write(element + '\n')
        })

        res.end();

        /*
        for (let index = 0; index < dataJSON.length; index++) {
            arro.push(dataJSON[index].autos[index].marca)
            
        }
        /*
        arro.forEach(element => {
            console.log(element[12].marca)
        });
        /*
        dataJSON.forEach(element => {
            arro.push(dataJSON[i].autos);
            i = i + 1;
        });
        let contador = 0;
        */
        /*
        arro.forEach(element => {
            console.log(element[0][contador].marca);
            contador = contador + 1;    
        });
        */
       /*
       let coso = 0;
        while(coso < arro.length){

            while (contador < arro[coso].length) {
                console.log(arro[coso][contador].marca);
                contador = contador + 1;

            }
            coso++

        }

        */
       /*
        const result = otroArray.filter((item, index) => {
            return dataJSON.indexOf(item) !== index
        })
        console.log(result)
        */

        
    },
    marca : function(req, res) {
        
        let data = [];
        let sup = [];

        dataJSON.forEach(element => {
            sup = element.autos
            sup.forEach(element => {
                data.push(element)
            })
        });


        let sucursal = data.filter(dato => {return dato.marca == req.params.id});
        
        


        if(sucursal.length !== 0){
            for (let index = 0; index < sucursal.length; index++) {
                res.write("marca: " + sucursal[index].marca + "\n");
                res.write("modelo: " + sucursal[index].modelo + "\n");
                res.write("anio: " + sucursal[index].anio + "\n");  
                res.write("\n")         
            }

        }else {
            res.write('sucursal no encontrada');
        }
        
        res.end();
    }

}



