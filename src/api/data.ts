const BASE_URL = `https://disney_api.nomadcoders.workers.dev`;

export async function queryCharacters() {
  return fetch(`${BASE_URL}/characters`).then((response) => response.json());
}

export async function queryCharacterInfo(id: number) {
  return fetch(`${BASE_URL}/characters/${id}`).then((response) =>
    response.json()
  );
}
