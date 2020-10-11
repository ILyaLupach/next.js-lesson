export default function echo(req, res) {
  res.statusCode = 200
  res.setHeader('Content-Type', 'aplication/json')
  res.end(JSON.stringify(req.query.message ?? 'Base message'))
}
