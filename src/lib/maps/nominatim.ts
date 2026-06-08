export async function geocodeNominatim(address: string) {
  const q = `${address}, Mar del Plata, Buenos Aires, Argentina`;
  const url = `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(q)}&format=json&limit=1`;

  // Se recomienda configurar NOMINATIM_USER_AGENT en .env
  const userAgent = process.env.NOMINATIM_USER_AGENT || 'EnviosDosRuedas/1.0 (https://www.enviosdosruedas.com)';

  const response = await fetch(url, {
    headers: {
      'User-Agent': userAgent,
    },
  });

  if (!response.ok) {
    throw new Error('Geocoding failed');
  }
  const data = await response.json();
  if (data && data.length > 0) {
    return {
      lat: parseFloat(data[0].lat),
      lng: parseFloat(data[0].lon),
    };
  }
  return null;
}
