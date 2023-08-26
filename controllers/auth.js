import  jwt  from 'jsonwebtoken'
const jwtSecret = "e6c75f135f27a4d27bd25ba4a6aa9ff041800d921ea55cb5444c0b09e88ee12b8e98d0"

export async function auth (req, res, next) {
  const token = req.cookies.jwt
  if (token) {
    jwt.verify(token, jwtSecret, (err, decodedToken) => {
      if (err) {
        return res.status(401).json({ message: "Not authorized" })
      } else {
        next()
      }
    })
  } else {
    return res
      .status(401)
      .json({ message: "Not authorized, token not available" })
  }
}