# SafeText AI 🛡️

**AI-powered text classification & content safety analyzer** with a React frontend and Python FastAPI backend.

---

## 📊 Project Overview

SafeText AI analyzes user-submitted text for:
- **Content Safety** (Safe ✅ / Unsafe ❌)
- **Category** (Positive, Negative, etc.)
- **Confidence Score** (0-100%)

It also provides a **contact form** that sends emails to admin.

---

## 🏗️ Architecture

```
Frontend (React + Vite)          Backend (FastAPI + Python)
├─ pages/Index.tsx      ───────> POST /api/analyze
├─ pages/Contact.tsx    ───────> POST /api/contact
└─ src/integrations/             └─ Uses HuggingFace API
   └─ backend/client.ts              + Resend API
```

**Ports:**
- Frontend: `http://localhost:5173`
- Backend: `http://localhost:8000`

---

## 🚀 Quick Start

### Option 1: Automated (Easiest)

```powershell
cd C:\Users\pardh\OneDrive\Desktop\AI-Guard
.\setup.ps1
```

Then follow the output instructions.

---

### Option 2: Manual

**Terminal 1 - Backend:**
```powershell
cd C:\Users\pardh\OneDrive\Desktop\AI-Guard\backend
.\venv\Scripts\python.exe -m uvicorn main:app --reload --host 0.0.0.0 --port 8000
```

**Terminal 2 - Frontend:**
```powershell
cd C:\Users\pardh\OneDrive\Desktop\AI-Guard\Frontend
npm install
npm run dev
```

Open browser → `http://localhost:5173`

---

## 📚 Documentation

- **[RUN_GUIDE.md](RUN_GUIDE.md)** ← Start here! Complete setup & testing guide
- **[SETUP_AND_RUN.md](SETUP_AND_RUN.md)** ← Detailed troubleshooting & deployment
- **[Frontend/README.md](Frontend/README.md)** ← React app structure
- **[backend/README.md](backend/README.md)** ← API endpoints & integration

---

## 🧪 Test It

### Test 1: API (PowerShell)
```powershell
$body = @{text="Amazing day!"} | ConvertTo-Json
Invoke-RestMethod -Uri "http://localhost:8000/api/classify" -Method POST `
  -Headers @{"Content-Type"="application/json"} -Body $body
```

### Test 2: Browser
1. Open `http://localhost:5173`
2. Enter text: "This is wonderful!"
3. Click "Analyze Text"
4. See results appear ✅

---

## 🔑 Environment Setup

### Frontend `.env`
```
VITE_API_BASE_URL=http://localhost:8000
```

### Backend `.env`
```
HUGGING_FACE_ACCESS_TOKEN=your_token_here
RESEND_API_KEY=your_key_here
```

Get real API keys:
- HuggingFace: https://huggingface.co/settings/tokens
- Resend: https://resend.com/api-keys

---

## 📁 Project Structure

```
AI-Guard/
├── Frontend/                  # React + Vite frontend
│   ├── src/pages/
│   │   ├── Index.tsx         # Text analysis page
│   │   ├── Contact.tsx       # Contact form
│   │   └── ...
│   ├── .env                  # Frontend config
│   └── package.json
│
├── backend/                  # Python FastAPI backend
│   ├── main.py              # 3 API endpoints
│   ├── requirements.txt      # Dependencies
│   ├── .env                 # Backend config
│   └── venv/                # Python environment
│
├── setup.ps1                # One-click setup
├── RUN_GUIDE.md            # Quick start guide
├── SETUP_AND_RUN.md        # Detailed guide
└── .env.example            # Template
```

---

## ✨ Features

✅ **Text Analysis**
- Real-time classification using HuggingFace
- Sentiment analysis (Positive/Negative)
- Confidence scoring

✅ **Email Notifications**
- Admin receives new contact submissions
- Users get confirmation emails
- Powered by Resend API

✅ **Clean UI**
- Modern React components with Tailwind CSS
- Responsive design
- Smooth animations

✅ **Production Ready**
- Separate frontend & backend
- Environment variable configuration
- Error handling
- CORS enabled

---

## 🚢 Deployment

### Frontend
```powershell
npm run build
# Upload dist/ to Netlify, Vercel, or similar
```

### Backend
```
# Deploy to Fly.io, Render, Railway, etc.
# Set HUGGING_FACE_ACCESS_TOKEN and RESEND_API_KEY
```

---

## 📧 Contact Form

Emails are sent to: **pardheevsai@gmail.com**

(Configure in `backend/main.py` line ~109 to change recipient)

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| **Frontend** | React, Vite, TypeScript, Tailwind CSS |
| **Backend** | Python, FastAPI, Uvicorn |
| **APIs** | HuggingFace Inference, Resend Email |
| **UI** | shadcn/ui components, Lucide icons |

---

## 🤝 Support

**Stuck?** Check:
1. [RUN_GUIDE.md](RUN_GUIDE.md) - Copy & paste commands
2. [SETUP_AND_RUN.md](SETUP_AND_RUN.md) - Troubleshooting section
3. Terminal output for error messages
4. Browser console (F12) for frontend errors

---

## 📝 Next Steps

1. Run `.\setup.ps1` or follow [RUN_GUIDE.md](RUN_GUIDE.md)
2. Start backend and frontend
3. Test in browser
4. Get real API keys
5. Deploy to production

---

**Built with ❤️ for content safety** 🛡️
