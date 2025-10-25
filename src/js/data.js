export const API_URL = 'http://localhost/crud-laravel-framework7/laravel-back/public/api/vehiculos'; //directo del xampp
// const API_URL = 'http://localhost:8000/api/vehiculos';

export async function getVehiculos() {
  const res = await fetch(API_URL);
  return res.json();
}

export async function addVehiculo(vehiculo) {
  const res = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(vehiculo)
  });
  return res.json();
}

export async function updateVehiculo(id, updatedData) {
  const res = await fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(updatedData)
  });
  return res.json();
}

export async function deleteVehiculo(id) {
  await fetch(`${API_URL}/${id}`, {
    method: 'DELETE'
  });
}
