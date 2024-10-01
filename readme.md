CC18 Fakebook api
---
### env Guide

PORT=8899

DATABASE="mysql://u:pw@localhost3306/cc18_fakebook"

JWT_SECRET

CLOUDINARY_NAME

CLOUDINARY_API_KEY

CLOUDINARY_API_SECRET

---
### Service

| Method | Path | Authen | Params | Query | Body |
|:-------|:-----|:------:|:------:|:-----:|:-----|
|POST|/auth/register|-|-|-|{ identity,firstName, lastName, password, confirmPassword }
|POST|/auth/login|-|-|-|{ identity, password }
|GET|/auth/me|y|-|-|-|
|GET|/post|y|-|-|-|
|POST|/post|y|-|-|{message, image(file)}
|PUT|/post|y|:id|-|{message, image(file)}
|DELETE|/post|y|:id|-|-
|POST|/comment|y|-|-|{message, postId} 
|POST|/like|y|-|-|{postId}
|DELETE|/like|y|:id|-|-

---
## Note
