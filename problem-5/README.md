# How to run this source

### Step1: Install docker

### Step2: Run command line: docker compose up. Now the application run

# CRUD APIs

### 1. API Create User

Method POST
Url: http://localhost:3000/api/users
</br>
Body: {
"name": "danh", "active": true
}

### 2. API Update User

Method: PUT
</br>
Url: http://localhost:3000/api/users/{id}
</br>
Body:{
"name": "danh", "active": true
}

### 3. API Get One User

Method: GET
</br>
Url: http://localhost:3000/api/users/{id}

### 4. API Get List User

Method: GET
</br>
Url: http://localhost:3000/api/users?size=10&page=0

### 5. API Delete User

Method: DELETE
</br>
Url: http://localhost:8000/api/users/{id}
