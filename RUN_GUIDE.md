# 🎯 SafeText AI - Complete Setup & Run Instructions

## What You Have

✅ **Frontend**: React + Vite + TypeScript (Vite dev server on port 5173)
✅ **Backend**: Python FastAPI + Uvicorn (on port 8000)
✅ **.env files**: Already configured for local development
✅ **Environment variables**: All set up and ready

---

## ⚡ Quick Start (Copy & Paste)

### Option A: Automated Setup (Recommended)

Open **PowerShell** and run:

```powershell
cd "C:\Users\pardh\OneDrive\Desktop\AI-Guard"
.\setup.ps1
```

This will:
1. Create Python virtual environment
2. Install Python dependencies
3. Install npm dependencies
4. Verify configuration

Then follow the output instructions to start backend and frontend.

---

### Option B: Manual Setup

#### Step 1: Open Terminal 1 (Backend)

```powershell
cd "C:\Users\pardh\OneDrive\Desktop\AI-Guard\backend"
.\venv\Scripts\python.exe -m uvicorn main:app --reload --host 0.0.0.0 --port 8000
```

Wait for:
```
INFO:     Uvicorn running on http://0.0.0.0:8000
INFO:     Application startup complete.
```

#### Step 2: Open Terminal 2 (Frontend)

```powershell
cd "C:\Users\pardh\OneDrive\Desktop\AI-Guard\Frontend"
npm install
npm run dev
```

Wait for:
```
  VITE v5.4.19  ready in XXX ms
  ➜  Local:   http://localhost:5173/
```

---

## 🧪 Test Everything Works

### Test 1: Backend API (PowerShell)

Open a **new PowerShell** and run:

```powershell
$body = @{text="This is great"} | ConvertTo-Json
Invoke-RestMethod -Uri "http://localhost:8000/api/classify" -Method POST -Headers @{"Content-Type"="application/json"} -Body $body
```

✅ **Expected output:**
```json
{
  "category": "Positive Content",
  "safety": "safe",
  "score": 0.95,
  "originalLabel": "POSITIVE"
}
```

---

### Test 2: Frontend UI (Browser)

1. Open browser → `http://localhost:5173`
2. You should see the **SafeText AI** homepage
3. Click the **Index** link (top navigation)
4. Enter text: `"Hello world, this is amazing!"`
5. Click **"Analyze Text"** button
6. ✅ **You should see results appear:**
   - Category: "Positive Content"
   - Safety: "SAFE"
   - Confidence Score: ~95%

---

### Test 3: Contact Form (Browser)

1. Go to **Contact** page (top navigation)
2. Fill in:
   - Name: `John Doe`
   - Email: `test@example.com`
   - Message: `This is a test message`
3. Click **"Send Message"**
4. ✅ You should see success message: `"Message sent!"`
5. ✅ Email should arrive at: `pardheevsai@gmail.com` (if using real RESEND_API_KEY)

---

## 🔑 Environment Variables Explained

### Frontend/.env
```properties
# This tells the frontend where to find the backend
VITE_API_BASE_URL=http://localhost:8000
```

**Change this to:** `https://your-backend-domain.com` when deployed to production

---

### backend/.env
```properties
# HuggingFace token for text classification
HUGGING_FACE_ACCESS_TOKEN=hf_test_token_placeholder

# Resend token for sending emails
RESEND_API_KEY=re_test_key_placeholder
```

**To use real API keys:**
1. Get HUGGING_FACE_ACCESS_TOKEN from: https://huggingface.co/settings/tokens
2. Get RESEND_API_KEY from: https://resend.com/api-keys
3. Replace the placeholders in `backend/.env`
4. Restart backend server

---

## 🏗️ How Frontend & Backend Connect

```
┌─────────────────────┐
│   Browser           │
│  (localhost:5173)   │
└──────────┬──────────┘
           │
           │ HTTP POST Request
           │ with VITE_API_BASE_URL
           ↓
┌─────────────────────────────────────────────────┐
│  Frontend React App                             │
│  - src/pages/Index.tsx                          │
│  - src/pages/Contact.tsx                        │
│  - src/integrations/backend/client.ts (wrapper) │
└──────────┬──────────────────────────────────────┘
           │
           │ /api/analyze
           │ /api/classify
           │ /api/contact
           ↓
┌──────────────────────────────────────────────┐
│  Backend FastAPI (localhost:8000)            │
│  - main.py with 3 endpoints                  │
│  - Calls HuggingFace API for classification  │
│  - Calls Resend API for emails               │
└──────────────────────────────────────────────┘
```

---

## 📁 File Locations

| What | Where |
|------|-------|
| Frontend code | `C:\Users\pardh\OneDrive\Desktop\AI-Guard\Frontend\` |
| Backend code | `C:\Users\pardh\OneDrive\Desktop\AI-Guard\backend\` |
| Frontend env vars | `C:\Users\pardh\OneDrive\Desktop\AI-Guard\Frontend\.env` |
| Backend env vars | `C:\Users\pardh\OneDrive\Desktop\AI-Guard\backend\.env` |
| Setup script | `C:\Users\pardh\OneDrive\Desktop\AI-Guard\setup.ps1` |
| This guide | `C:\Users\pardh\OneDrive\Desktop\AI-Guard\SETUP_AND_RUN.md` |

---

## 🛠️ Useful Commands

| Action | Command |
|--------|---------|
| Start backend | `cd backend && .\venv\Scripts\python.exe -m uvicorn main:app --reload --host 0.0.0.0 --port 8000` |
| Start frontend | `cd Frontend && npm run dev` |
| Build frontend | `cd Frontend && npm run build` |
| Install frontend deps | `cd Frontend && npm install` |
| Install backend deps | `cd backend && .\venv\Scripts\python.exe -m pip install -r requirements.txt` |
| Test backend API | `Invoke-RestMethod -Uri "http://localhost:8000/api/classify" -Method POST -Headers @{"Content-Type"="application/json"} -Body (@{text="test"} \| ConvertTo-Json)` |

---

## ⚠️ Common Issues & Fixes

### **Issue: "Backend won't start - port 8000 in use"**

**Solution:** Kill the process on port 8000:
```powershell
Get-Process | Where-Object {$_.Handles -like "*8000*"}
# OR just change port in backend start command:
.\venv\Scripts\python.exe -m uvicorn main:app --reload --host 0.0.0.0 --port 8001
```

---

### **Issue: "Frontend can't reach backend - 404 error"**

**Checklist:**
1. ✅ Backend is running on port 8000?
2. ✅ Frontend `.env` has `VITE_API_BASE_URL=http://localhost:8000`?
3. ✅ Restarted frontend dev server after .env change?
4. ✅ Check browser console (F12) for error details?

---

### **Issue: "npm install fails"**

**Solution:**
```powershell
cd Frontend
npm install --legacy-peer-deps
```

---

### **Issue: "Python not found"**

**Solution:** Make sure Python is installed:
```powershell
python --version
# Should show Python 3.8+
```

---

## 🚀 Next Steps

1. ✅ Run setup script or manual setup
2. ✅ Start backend and frontend (two terminals)
3. ✅ Test API (PowerShell test)
4. ✅ Test UI (browser test)
5. 🔧 Get real API keys (HuggingFace + Resend)
6. 🚀 Deploy to production (see deployment guides)

---

## 📚 Additional Resources

- **Backend README**: `backend/README.md` - Endpoint documentation
- **Frontend README**: `Frontend/README.md` - Project structure
- **Environment variables template**: `.env.example` - Copy this to create .env files

---

## ✅ Success Checklist

- [ ] Backend running on `http://localhost:8000`
- [ ] Frontend running on `http://localhost:5173` (or `8080`)
- [ ] API test (PowerShell) returns results
- [ ] Browser shows homepage
- [ ] Text analysis works (enter text, click Analyze, see results)
- [ ] Contact form works (submit, see success message)
- [ ] Check email at `pardheevsai@gmail.com` (with real API key)

---

**🎉 All set! Your SafeText AI app is ready to use!**
