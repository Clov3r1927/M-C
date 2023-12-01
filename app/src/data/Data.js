export const getMuebles = async() =>{

    const response = await fetch(`http://localhost:9000/producto`)
    const result = await response.json()

    return result
}

export const getMuebleId = async (id) => {
    
    const response = await fetch(`http://localhost:9000/producto/${id}`)
    const result = await response.json()

    return result
}


export const editarMueble = async (id, datos) => {
    try {
        const response = await fetch(`http://localhost:9000/producto/${id}`,{
            method: 'PUT',
            body: JSON.stringify(datos),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const responseData = await response.json()

        console.log(responseData);

    } catch (error) {
        console.error("Error en el post", error);
    }
}

export const agregarMueble = async (datos) =>{
    try {

        console.log(datos);
        const response = await fetch(`http://localhost:9000/producto`,{
            method: 'POST',
            body: JSON.stringify(datos),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const responseData = await response.json(); // Captura el resultado de la respuesta JSON

        console.log(responseData); 

    } catch (error) {
        console.error("Error en el post", error);
    }

}


export const deleteMueble = async (id) => {
    try {
        const  response = await fetch(`http://localhost:9000/producto/${id}`,{
            method: 'DELETE',
        })
        await response
        } catch (error) {
        console.error("Error en el delete", error);
    }
}