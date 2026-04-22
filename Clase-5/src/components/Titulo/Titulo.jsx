
export function Titulo({titulo, color}){

    // console.log("Props Titulo: ", props);

    // const { titulo, color } = props

    return (
        <h1 style={{color: color}}>{titulo}</h1>
    )
}

export function SubTitulo({subtitulo}){


    return(
        <h3>{subtitulo}</h3>
    )
}

