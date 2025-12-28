# 🔐 Authentication in Web Development (Revision Notes)

## 1. Authentication vs Authorization

### 🔑 Authentication (AuthN)
- **Purpose:** Verify *who* the user is  
- Example: Username + Password login  
- It is the **process of verifying user identity**

### 🛂 Authorization (AuthZ)
- **Purpose:** Decide *what* the user can do  
- Example: Admin vs normal user permissions  

---

## 2. Common Authentication Methods

### 1️⃣ Username & Password Login
- User provides credentials
- Server verifies credentials
- Passwords **must never be stored in plain text**
- Password hashing is done using **bcrypt**

**Credentials required:**
- `username` → text input  
- `password` → hashed using **bcrypt**

---

### 2️⃣ OTP Login
- One-Time Password sent via:
  - SMS
  - Email
- Valid for a short time
- Commonly used for password-less authentication

---

### 3️⃣ Social Login (OAuth)
- Login using:
  - Google
  - GitHub
- Uses OAuth 2.0 flow
- User trusts a third-party provider
- No need to manage passwords manually

---

### 4️⃣ Token-Based Authentication (JWT)
- Uses **JSON Web Tokens (JWT)**
- Stateless authentication
- Widely used in REST APIs

---

## 3. What Happens During Login?

> Login means **creation of a session or token**

### Login Flow (High Level)
1. User registers or logs in (`/login`)
2. Server verifies credentials
3. Server creates **session or JWT**
4. Client stores session/cookie or token
5. Client sends authentication proof with every request

---

## 4. Types of Authentication Systems

## A️⃣ Session-Based Authentication

### How it works:
- Server stores session data
- Browser stores session ID in **cookies**
- Cookie is automatically sent with every request

### Key Points:
- Server-side stateful
- Uses cookies
- Suitable for traditional web apps

---

## B️⃣ Token-Based Authentication (JWT)

### How it works:
1. User logs in
2. Server verifies credentials
3. Server generates a **JWT**
4. Client stores JWT (localStorage / cookie)
5. Client sends token in **HTTP headers**
6. Server verifies token on each request

### Header Format:


➡️ This token is called a **Bearer Token**

---

## 5. JWT Authentication Flow

1. User sends credentials to `/login`
2. Server verifies username & password
3. Server generates JWT
4. Client stores JWT
5. Client sends JWT with every request
6. Server verifies JWT signature & expiry
7. Access granted or denied

---

## 6. Key Libraries & Concepts

| Purpose | Tool |
|------|------|
| Password hashing | `bcrypt` |
| Token-based auth | `JWT` |
| Authorization header | `Bearer Token` |

---

## 7. Summary

- **Authentication** → Who the user is  
- **Authorization** → What the user can do  
- Passwords must be hashed (bcrypt)  
- Login creates session or token  
- Sessions use cookies  
- JWT uses tokens in headers  
- JWT token is sent as a **Bearer Token**

---

📌 **Interview Tip**  
> “Authentication verifies identity, authorization defines permissions.”






