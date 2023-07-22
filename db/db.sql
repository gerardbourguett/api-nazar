-- Creación de la tabla de empleados
CREATE TABLE empleados (
    id_empleado INT AUTO_INCREMENT PRIMARY KEY,
    nombre_completo VARCHAR(100)
);

-- Creación de la tabla de archivos
CREATE TABLE archivos (
    id_archivo INT AUTO_INCREMENT PRIMARY KEY,
    nombre_archivo VARCHAR(100),
    id_empleado INT,
    FOREIGN KEY (id_empleado) REFERENCES empleados(id_empleado)
);
