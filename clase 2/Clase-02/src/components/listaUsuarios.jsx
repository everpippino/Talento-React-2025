function ListaUsuarios(){
    const usuarios=['ana', 'nicolas','maria', 'julieta'];
    return (
        <ul>
            {
                usuarios.map(usuario=>(
                    <li key={usuario}>{usuario}</li>
                ))}
        </ul>
    )

}

export default ListaUsuarios;