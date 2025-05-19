<style>
    table {
        width: 70%;
        border-collapse: collapse;
        margin: 20px auto;
        font-family: Arial, sans-serif;
    }
    th, td {
        padding: 12px;
        text-align: left;
        border: 1px solid #ccc;
    }
    th {
        background-color: #333;
        color: #fff;
    }
    tr:nth-child(even) {
        background-color: #f2f2f2;
    }
</style>

<?php
    include ("conexion.php");

    $sql = "SELECT id, nombre, email FROM clientes";
    $result = $db_conection -> query($sql);

    if($result -> num_rows > 0) {
        echo
        "<table border='1'
            <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Email</th>
            </tr>";
        while ($fila = $result ->fetch_assoc()) {
            echo
            "<tr>
                <td>" . htmlspecialchars($fila["id"]). "</td>
                <td>" . htmlspecialchars($fila["nombre"]). "</td>
                <td>" . htmlspecialchars($fila["email"]). "</td>
            </tr>";
        }
        echo "</table>";
    } else {
        echo "No se encontraron usuarios";
    }

    $db_conection -> close();

?>