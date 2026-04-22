import React, { useState } from 'react'

export const Seccion = ({Titulo, Descripcion, Subtitulo, colorTitulo}) => {

    // [elNombreDelEstado, setFuncionQueCambiaElEstado] = useState(valor inicial)
    const [contador, setContador] = useState(0)


    const handleClick = () => {

        setContador(contador + 1)

        console.log("handleClick: ", contador);
        

    }

    console.log("contador: ", contador);


  return (
        <section id="center" style={{border: "1px solid white"}}>

        <h1 style={{color: colorTitulo}}>{Titulo}</h1>
        <h3>{Subtitulo}</h3>
        <p>{Descripcion}</p>
        <p>Contador: {contador}</p>
        <button onClick={handleClick} >+1</button>
      </section>
  )
}
