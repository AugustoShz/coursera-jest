// import fetch from 'node-fetch'

export const getPeople = (fetch: any) => {
  return fetch('https://swapi.dev/api/people')
    .then((res: any) => res.json())
    .then((data: any) => {
      return {
        count: data.count,
        results: data.results
      }
    })
    .catch((error: any) => error)
}

export const isCity = (city: string, db: string[]) => {
  return db.includes(city)
}