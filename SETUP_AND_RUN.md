# Complete Setup & Run Guide for SafeText AI

## 📋 Summary

- **Frontend**: React + Vite on `http://localhost:5173`
- **Backend**: Python FastAPI on `http://localhost:8000`
- **How they connect**: Frontend calls backend endpoints via `VITE_API_BASE_URL` environment variable

---

## 🚀 Quick Start (All in One)

Run these commands in **separate PowerShell terminals**:

### Terminal 1: Start Backend

```powershell
cd "C:\Users\pardh\OneDrive\Desktop\AI-Guard\backend"
.\venv\Scripts\python.exe -m uvicorn main:app --reload --host 0.0.0.0 --port 8000
```

✅ Backend will start on: `http://localhost:8000`

You should see:
```
INFO:     Uvicorn running on http://0.0.0.0:8000 (Press CTRL+C to quit)
INFO:     Application startup complete.
```

### Terminal 2: Start Frontend

```powershell
cd "C:\Users\pardh\OneDrive\Desktop\AI-Guard\Frontend"
npm install
npm run dev
```

✅ Frontend will start on: `http://localhost:5173` (or `http://localhost:8080`)

---

## 🔑 Environment Variables

Both `.env` files are already created:

**Frontend/.env:**
```properties
VITE_API_BASE_URL=http://localhost:8000
```

**backend/.env:**
```properties
HUGGING_FACE_ACCESS_TOKEN=hf_test_token_placeholder
RESEND_API_KEY=re_test_key_placeholder
```

> **Important for Production:**
> Replace the placeholder tokens with real API keys from:
> - HuggingFace: https://huggingface.co/settings/tokens
> - Resend: https://resend.com/api-keys

---

## 🧪 Testing the Integration

### Step 1: Verify Backend Responds

Open a **new PowerShell** and test the backend:

```powershell
Invoke-RestMethod -Uri "http://localhost:8000/api/classify" `
  -Method POST `
  -Headers @{"Content-Type"="application/json"} `
  -Body (@{text="hello world"} | ConvertTo-Json)
```

Expected response (even with test tokens):
```json
{
  "category": "Positive Content",
  "safety": "safe",
  "score": 0.95,
  "originalLabel": "POSITIVE"
}
```

### Step 2: Test Frontend in Browser

1. Open browser → `http://localhost:5173`
2. Go to **Index page** (main page)
3. Enter text in the text area: `"This is a great day"`
4. Click **"Analyze Text"**
5. You should see results:
   - Category: "Positive Content"
   - Safety: "SAFE"
   - Confidence Score: ~95%

### Step 3: Test Contact Form

1. Go to **Contact page**
2. Fill in the form:
   - Name: `John Doe`
   - Email: `test@example.com`
   - Message: `Test message`
3. Click **"Send Message"**
4. Check console for success/error

> **Note:** Contact email sending requires real `RESEND_API_KEY`. With test token, it will fail, but backend validates correctly.

---

## 📁 File Structure Overview

```
C:\Users\pardh\OneDrive\Desktop\AI-Guard\
│
├── Frontend/                           # React frontend
│   ├── .env                           # Frontend env vars (VITE_API_BASE_URL)
│   ├── src/
│   │   ├── pages/
│   │   │   ├── Index.tsx              # Text analysis page ← calls /api/analyze
│   │   │   └── Contact.tsx            # Contact form ← calls /api/contact
│   │   ├── integrations/backend/
│   │   │   └── client.ts              # Fetch wrapper for backend calls
│   │   ├── App.tsx                    # Router setup
│   │   └── ...
│   ├── package.json                   # npm dependencies
│   └── vite.config.ts                 # Vite config
│
├── backend/                           # Python FastAPI backend
│   ├── .env                          # Backend env vars (API keys)
│   ├── main.py                       # FastAPI app with 3 endpoints
│   ├── requirements.txt              # Python dependencies
│   ├── venv/                         # Virtual environment (created by us)
│   └── README.md                     # Backend docs
│
└── .env.example                      # Template for env vars
```

---

## 🔗 API Endpoints (Backend)

| Endpoint | Method | Purpose | Response |
|----------|--------|---------|----------|
| `/api/analyze` | POST | Analyze text for safety | `{category, safety, score, ...}` |
| `/api/classify` | POST | Classify text | `{category, safety, score}` |
| `/api/contact` | POST | Send contact emails | `{success: true, message}` |

---

## 🐛 Troubleshooting

### Backend won't start

**Error:** `.\venv\Scripts\python.exe: command not found`

**Fix:** Make sure you're in the backend directory:
```powershell
cd "C:\Users\pardh\OneDrive\Desktop\AI-Guard\backend"
# Then run the command
.\venv\Scripts\python.exe -m uvicorn main:app --reload --host 0.0.0.0 --port 8000
```

---

### Frontend can't connect to backend

**Error:** `POST http://localhost:8000/api/analyze 404` or connection refused

**Fix:** Check:
1. Backend is running (Terminal 1)
2. Backend is on port 8000 (should say `http://0.0.0.0:8000`)
3. Frontend `.env` has `VITE_API_BASE_URL=http://localhost:8000`
4. Restart frontend dev server after .env change

---

### npm dependencies missing

**Error:** `npm ERR! ERESOLVE unable to resolve dependency tree`

**Fix:** Install without legacy deps:
```powershell
npm install --legacy-peer-deps
npm run dev
```

---

## 🚀 Production Deployment

### Frontend
```powershell
npm run build  # Creates dist/ folder
# Upload dist/ to Netlify, Vercel, or any static host
# Set VITE_API_BASE_URL to production backend URL
```

### Backend
```powershell
# Set real env vars on your server
# Set HUGGING_FACE_ACCESS_TOKEN and RESEND_API_KEY
# Deploy the backend/ folder to Fly.io, Render, Railway, etc.
```

---

## ✅ Checklist

- [ ] Backend running on `http://localhost:8000`
- [ ] Frontend running on `http://localhost:5173` (or `8080`)
- [ ] Frontend `.env` has `VITE_API_BASE_URL=http://localhost:8000`
- [ ] Backend `.env` has placeholder or real API keys
- [ ] Test API call works (PowerShell test above)
- [ ] Browser test works (enter text, click Analyze, see results)

---

## 📞 Need Help?

- Check terminal output for error messages
- Make sure both terminals are running (don't close them)
- If .env changes, restart the dev server
- Check network tab in browser DevTools to see API calls
