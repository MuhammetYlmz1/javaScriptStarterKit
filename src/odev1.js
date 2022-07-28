function findPrime(...params) {
    for (let i = 0; i < params.length; i++) {
        console.log(params[i])
        let say=0
        for (let j = 2; j < params[i]; j++) {
            
            if(params[i]%j==0 &&params[i]!=1 && params[i]!=2)
            {
                say++
            }

        }
        if(say==0){
            console.log(params[i],"Sayı asal bir sayidir ")
        }
        else
        { 
            console.log(params[i], "Sayi Asal Değildir ")
        }
    }    
}


findPrime(45,26,12,8,2)



function arkadasSayi(param1,param2) {
    var toplam1=0,toplam2=0;
    for (let i = 1; i < param1; i++) {
        if(param1%i==0)
        {
            toplam1=toplam1+i;
            
        } 
        if(param2%i==0)
        {
            toplam2=toplam2+i;
        }  
    }
    


    if (param2==toplam1 && param1==toplam2) {
        console.log(param1+" ve "+param2+" Sayıları Arkadaş Sayılarıdır")   
    }
    else
    {   console.log(param1+" ve "+param2+" Sayıları Arkadaş Sayı Değillerdir")
}



}


arkadasSayi(15,25)


