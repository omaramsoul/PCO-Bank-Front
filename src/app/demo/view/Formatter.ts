import { map } from "rxjs";

export class Formatter{

// la fonction qui se charge de formatter les tableaux generiques tel que les contacts, les impayes ...
       static format(data:any) {
        let colorMapper =  new Map<any, String>();


// au debut on cherche les "#..#" qui signifient que l'entete du tableau contient un code de formattage
            for(let i = 0; i < data[0].length; i++){

                if (data[0][i].match(/(?<=#)(.*?)(?=#)/g) !== null){

// si l'entete de la table contient un code de formattage ( e.g: le check ne donne pas un resultat null, on procede vers le formattage de la colonne correspondante)
                    let codeFormattage = data[0][i].match(/(?<=#)(.*?)(?=#)/g).toString();

            switch (codeFormattage){
                case 'JJMMAA':
                            data[0][i] =data[0][i].replace(/#(.*?)#/g, ""); // enlever l'encodage de l'entete

                            //formattage de la date
                            for(let j = 1; j < data.length ; j++){
                                if(data[j][i] === 19000000) data[j][i] = "";

                                else data[j][i]= data[j][i].toString().slice(2, 4) +"/" +data[j][i].toString().slice(4, 6) + "/" + data[j][i].toString().slice(6, 8) ;
                            }
                            break;
                case 'JJMMAA+':
                            data[0][i] =data[0][i].replace(/#(.*?)#/g, ""); // enlever l'encodage de l'entete
                           
                            //formattage de la date
                            for(let j = 1; j < data.length ; j++){
                                if(data[j][i] === 19000000){ data[j][i] = ""; }
                                else{ 
                                    const current_date = new Date();
                                    const data_date = new Date(data[j][i].toString().slice(0, 4) +"-" +data[j][i].toString().slice(4, 6) + "-" + data[j][i].toString().slice(6, 8));
                                    data[j][i]= data[j][i].toString().slice(2, 4) +"/" +data[j][i].toString().slice(4, 6) + "/" + data[j][i].toString().slice(6, 8);
                                    if(current_date.getTime() < data_date.getTime()){colorMapper.set(data[j][i], "#32CD32");} 
                                    else {colorMapper.set(data[j][i], "#FF0000");}

                            
                                    }

                            }
                            break;
                    






                    }
                }
                
            
            
                }
                return colorMapper;
        }

}
