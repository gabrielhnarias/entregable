const transferencia = (monto, costo) => {
    const eleccion = prompt ("Elija el tipo de transferencia que desea realizar: local o internacional").toLowerCase()
        if (eleccion == "local") {
            monto = prompt ("TRANSFERENCIA LOCAL: ingrese el monto en pesos a transferir")
            costo = monto * 0.05
            resta = monto - costo
            alert("¡Acabás de transferir en forma " + eleccion + " un importe de ARS " + resta + "! Habiendose cobrado una comisión de ARS " + costo)
            alert("Presione F5 para volver a operar.")
        } 
        else if (eleccion == "internacional") {
            monto = prompt ("TRANSFERENCIA INTERNACIONAL: ingrese el monto en dólares a transferir")
            costo = monto * 0.02
            resta = monto - costo 
            alert("¡Acabás de transferir en forma " + eleccion + " un importe de USD " + resta + "! Habiendose cobrado una comisión de USD " + costo)
            alert ("Presione F5 para volver a operar.")
        } 
        else {
            do {
                alert ("La opción ingresada no es válida.")
                transferencia()
                break
            } while (eleccion != "local" && "internacional") 
        }
    
}

transferencia()
