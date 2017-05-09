const API = 'https://api.graph.cool/simple/v1/cj2hrejjq9j4g01873n392eq5'

const query = (body) => {
  return window.fetch(API, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query: `query { ${body} }` })
  }).then(r => r.json())
}

window.query = query

export { query }
