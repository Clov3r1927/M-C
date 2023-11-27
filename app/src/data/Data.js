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