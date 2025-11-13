# ⚡ SafeText AI - Command Reference Card

## 🚀 Start Everything

### Terminal 1: Backend
```powershell
cd "C:\Users\pardh\OneDrive\Desktop\AI-Guard\backend"
.\venv\Scripts\python.exe -m uvicorn main:app --reload --host 0.0.0.0 --port 8000
```

### Terminal 2: Frontend
```powershell
cd "C:\Users\pardh\OneDrive\Desktop\AI-Guard\Frontend"
npm install
npm run dev
```

**Result:**
- Backend: `http://localhost:8000`
- Frontend: `http://localhost:5173`

---

## 🧪 Quick Tests

### Test 1: API Endpoint (PowerShell)
```powershell
$body = @{text="This is great!"} | ConvertTo-Json
Invoke-RestMethod -Uri "http://localhost:8000/api/classify" `
  -Method POST `
  -Headers @{"Content-Type"="application/json"} `
  -Body $body
```

### Test 2: Health Check
```powershell
Invoke-RestMethod "http://localhost:8000/docs"
# Opens API documentation
```

### Test 3: Browser (Manual)
1. Open `http://localhost:5173`
2. Enter text on Index page
3. Click "Analyze Text"
4. See results

---

## 📦 Setup Commands

### First Time Setup (Automated)
```powershell
cd "C:\Users\pardh\OneDrive\Desktop\AI-Guard"
.\setup.ps1
```

### First Time Setup (Manual)

#### Backend
```powershell
cd backend
python -m venv venv
.\venv\Scripts\python.exe -m pip install -r requirements.txt
```

#### Frontend
```powershell
cd Frontend
npm install --legacy-peer-deps
```

---

## 🔄 Restart Services

### Restart Backend
1. Press `CTRL+C` in backend terminal
2. Run backend command again:
   ```powershell
   .\venv\Scripts\python.exe -m uvicorn main:app --reload --host 0.0.0.0 --port 8000
   ```

### Restart Frontend
1. Press `CTRL+C` in frontend terminal
2. Run:
   ```powershell
   npm run dev
   ```

---

## 🏗️ Build & Deploy

### Build Frontend
```powershell
cd Frontend
npm run build
# Creates dist/ folder
```

### Build Frontend (Development Mode)
```powershell
cd Frontend
npm run build:dev
```

### Lint Frontend
```powershell
cd Frontend
npm run lint
```

---

## 🔑 Environment Configuration

### View Frontend Config
```powershell
cat "C:\Users\pardh\OneDrive\Desktop\AI-Guard\Frontend\.env"
```

### View Backend Config
```powershell
cat "C:\Users\pardh\OneDrive\Desktop\AI-Guard\backend\.env"
```

### Update API Keys
1. Open `backend\.env` in editor
2. Replace placeholder tokens:
   ```
   HUGGING_FACE_ACCESS_TOKEN=your_real_token
   RESEND_API_KEY=your_real_key
   ```
3. Save
4. Restart backend

---

## 📁 Directory Navigation

```powershell
# Go to project root
cd "C:\Users\pardh\OneDrive\Desktop\AI-Guard"

# Go to frontend
cd Frontend

# Go to backend
cd backend

# Go to backend venv
cd backend\venv

# List files
ls
ls -la  # with hidden files

# Open in Explorer
explorer .
```

---

## 🐛 Troubleshooting Commands

### Check if Port is Free
```powershell
# Check port 8000
netstat -ano | findstr :8000

# Check port 5173
netstat -ano | findstr :5173
```

### Kill Process on Port
```powershell
# Windows - Kill by PID (from netstat output)
taskkill /PID <PID> /F

# Example: Kill process 1234
taskkill /PID 1234 /F
```

### Check Python Version
```powershell
python --version
python3 --version
```

### Check Node Version
```powershell
node --version
npm --version
```

### Clear npm Cache
```powershell
npm cache clean --force
```

### Reinstall Dependencies (Fresh)

#### Frontend
```powershell
cd Frontend
rm -r node_modules
rm package-lock.json
npm install --legacy-peer-deps
```

#### Backend
```powershell
cd backend
rm -r venv
python -m venv venv
.\venv\Scripts\python.exe -m pip install -r requirements.txt
```

---

## 📊 Check Logs

### Frontend Errors
1. Open browser (F12)
2. Check Console tab for errors
3. Check Network tab for failed requests

### Backend Errors
1. Check terminal output
2. Look for red error messages
3. Note the line number and error type

---

## 🌐 Useful URLs

| What | URL |
|------|-----|
| Frontend App | `http://localhost:5173` |
| Backend API | `http://localhost:8000` |
| API Docs | `http://localhost:8000/docs` |
| API Redoc | `http://localhost:8000/redoc` |

---

## 📝 Configuration Files

| File | Purpose | Path |
|------|---------|------|
| Frontend Config | VITE_API_BASE_URL | `Frontend/.env` |
| Backend Config | API Keys | `backend/.env` |
| Frontend Build | Vite config | `Frontend/vite.config.ts` |
| Backend App | FastAPI code | `backend/main.py` |
| Frontend Pages | React pages | `Frontend/src/pages/` |
| Backend Deps | Python packages | `backend/requirements.txt` |

---

## 🔍 File Locations

```powershell
# Project root
C:\Users\pardh\OneDrive\Desktop\AI-Guard\

# Frontend
C:\Users\pardh\OneDrive\Desktop\AI-Guard\Frontend\

# Backend
C:\Users\pardh\OneDrive\Desktop\AI-Guard\backend\

# Backend venv
C:\Users\pardh\OneDrive\Desktop\AI-Guard\backend\venv\

# Frontend config
C:\Users\pardh\OneDrive\Desktop\AI-Guard\Frontend\.env

# Backend config
C:\Users\pardh\OneDrive\Desktop\AI-Guard\backend\.env
```

---

## ✅ Quick Checklist

- [ ] Backend running (`INFO: Application startup complete`)
- [ ] Frontend running (`ready in XXX ms`)
- [ ] Can access `http://localhost:5173`
- [ ] API test returns results
- [ ] Text analysis works in browser
- [ ] Contact form submits successfully

---

## 📞 When Things Break

| Problem | Command | Solution |
|---------|---------|----------|
| Port in use | `netstat -ano \| findstr :8000` | Kill process or change port |
| npm error | `npm cache clean --force` | Clear cache and reinstall |
| Python error | `python --version` | Check Python installed |
| Module not found | `pip install -r requirements.txt` | Reinstall deps |
| Can't connect | Check terminals running | Start both backend & frontend |

---

## 🎯 Typical Workflow

1. **Start Backend**
   ```powershell
   cd "C:\Users\pardh\OneDrive\Desktop\AI-Guard\backend"
   .\venv\Scripts\python.exe -m uvicorn main:app --reload --host 0.0.0.0 --port 8000
   ```

2. **Start Frontend** (new terminal)
   ```powershell
   cd "C:\Users\pardh\OneDrive\Desktop\AI-Guard\Frontend"
   npm run dev
   ```

3. **Open Browser**
   ```powershell
   start http://localhost:5173
   ```

4. **Test & Develop**
   - Frontend auto-reloads on save
   - Backend auto-reloads on save

5. **When Done**
   - Press `CTRL+C` in both terminals
   - Close terminals

---

## 💡 Pro Tips

- 💾 Frontend changes auto-reload (Vite)
- 💾 Backend changes auto-reload (--reload flag)
- 🔗 Keep both terminals visible for debugging
- 📱 Check Network tab (F12) to see API calls
- 🐛 Check Console tab (F12) for frontend errors
- 📊 Check backend terminal for server errors
- 🔄 Restart both if things act weird
- 🗝️ Never commit `.env` files
- 🚀 Use production build: `npm run build`
