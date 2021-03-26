import React from 'react'
const Couses = () => {
    let courses = [
        {
          name: 'Half Stack application development',
          id: 1,
          parts: [
            {
              name: 'Fundamentals of React',
              exercises: 10,
              id: 1
            },
            {
              name: 'Using props to pass data',
              exercises: 7,
              id: 2
            },
            {
              name: 'State of a component',
              exercises: 14,
              id: 3
            },
            {
              name: 'Redux',
              exercises: 11,
              id: 4
            },
            
          ]
        }
    ]
    
    return(
        <div>
          <ul>
           {courses.map((course)=>{
              let{name,id,parts}=course;
              let conta=0;
              return(
                <div key={id}>
                  <h1>
                    {name}
                  </h1>
                  {parts.map((part)=>{
                    const{id:idPart,name: nPart,exercises:exPart}=part;
                    conta =conta+exPart;
                    return(
                      <div key={idPart}>
                        {nPart}{exPart}
                      </div>
                    )
                  })}
                    <h3>total {conta}</h3>  
                  </div>
              )
            })} 

        </ul>
        </div>
    )
}

export default Couses;