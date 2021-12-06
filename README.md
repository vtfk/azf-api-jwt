# azf-api-jwt

Generates a JWT token

## Usage

### `POST /generate`

**Request**
```json
{
  "secret": "your-very-secret-secret",
  "system": "What-system-to-create-token-for",
  "version": "Version-of-system-to-create-token-for",
  "expiration": "5m", // defaults to 1m if not set
  "issuer": "https://auth.vtfk.no", // defaults to https://auth.vtfk.no if not set
  "payload": { // optional token claims
    "whatEverYouWant": "whatEverYouLike"
  }
}
```

**Response**
```json
{
  "jwt": "generated-token-for-secret"
}
```
