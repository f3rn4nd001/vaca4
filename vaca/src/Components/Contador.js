import React, { useState,useEffect }  from 'react'
    const Contador=()=>{
        let [contador ,setContado] = useState(0);
        
        const onChangeMas = (a)=>{     
                 ( a ? setContado(contador ++) : setContado(contador --)); 
        } 
        useEffect(() => {
            console.log('contador :' +contador);
            
        })

        return (
            <div>
                <button onClick={()=>onChangeMas(true)} > contador +</button>
                <button onClick={()=>onChangeMas(false)} > contador -</button>
                {contador}
          </div>
        )
    }
export default Contador;
