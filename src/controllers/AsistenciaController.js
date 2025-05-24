import AsistenciaService from "../services/AsistenciaService.js";

export async function registrarAsistencia(req, res) {
  try {
    const asistencia = await AsistenciaService.registrarAsistencia(
      req.body.id_cliente
    );
    res.status(200).json(asistencia);
  } catch (error) {
    res.status(error.statusCode || 500).json({
      message: error.message || "Error interno del servidor",
    });
  }
}

export async function listarAsistenciasPorCliente(req, res) {
  console.log("Petición recibida con DNI:", req.params.dni);
  try {
    const { dni } = req.params;
    const fechas = await AsistenciaService.obtenerAsistenciasPorCliente(dni);
    res.json(fechas);
  } catch (error) {
    console.error("Error al obtener asistencias:", error);
    res.status(500).json({ message: "Error al obtener asistencias" });
  }
}

export default {
  registrarAsistencia,
  listarAsistenciasPorCliente,
};
