# 🏗️ SafeText AI - System Architecture & Integration

## 📊 System Flow Diagram

```
┌─────────────────────────────────────────────────────────────────────────┐
│                          USER BROWSER                                    │
│                     http://localhost:5173                               │
└────────────────────────────┬────────────────────────────────────────────┘
                             │
                    ┌────────▼────────┐
                    │  React App      │
                    │  (Vite Dev)     │
                    │                 │
                    │  - Index page   │◄──┐ User enters text
                    │  - Contact page │   │ and clicks "Analyze"
                    │  - About page   │   │
                    │  - Team page    │   │
                    └────────┬────────┘   │
                             │            │
              ┌──────────────┼────────────┘
              │ Uses VITE_API_BASE_URL
              │ (http://localhost:8000)
              │
              ▼
    ┌─────────────────────────────────┐
    │   Backend API Client            │
    │   src/integrations/             │
    │   backend/client.ts             │
    │                                 │
    │  - analyzeText()                │
    │  - sendContactEmail()           │
    └──────────┬──────────────────────┘
               │
        ┌──────┴─────┬──────────┐
        │            │          │
    POST to:    POST to:   POST to:
  /api/analyze /api/classify /api/contact
        │            │          │
        ▼            ▼          ▼
┌──────────────────────────────────────────────────────────────┐
│        Backend FastAPI (Python)                             │
│        http://localhost:8000                                │
│                                                             │
│  ┌────────────────────────────────────────────────────┐    │
│  │  main.py - 3 Endpoints                            │    │
│  │                                                    │    │
│  │  1. POST /api/analyze                             │    │
│  │     Input: {text, model, language}                │    │
│  │     Output: {category, safety, score, ...}        │    │
│  │     │                                              │    │
│  │     └─► Calls HuggingFace API                      │    │
│  │         (model: distilbert-base-uncased-ft-sst2)  │    │
│  │         Returns: classification + confidence      │    │
│  │                                                    │    │
│  │  2. POST /api/classify                            │    │
│  │     Input: {text}                                 │    │
│  │     Output: {category, safety, score}             │    │
│  │     └─► Same as above but shorter response        │    │
│  │                                                    │    │
│  │  3. POST /api/contact                             │    │
│  │     Input: {name, email, message}                 │    │
│  │     Output: {success, message}                    │    │
│  │     │                                              │    │
│  │     ├─► Send admin email to                        │    │
│  │     │   pardheevsai@gmail.com                      │    │
│  │     │   (via Resend API)                           │    │
│  │     │                                              │    │
│  │     └─► Send confirmation email to                │    │
│  │         user@example.com                          │    │
│  │         (via Resend API)                          │    │
│  │                                                    │    │
│  └────────────────────────────────────────────────────┘    │
│                                                             │
│  ┌────────────────────────────────────────────────────┐    │
│  │  Environment Variables                            │    │
│  │                                                    │    │
│  │  - HUGGING_FACE_ACCESS_TOKEN                       │    │
│  │    (for text classification)                       │    │
│  │                                                    │    │
│  │  - RESEND_API_KEY                                  │    │
│  │    (for sending emails)                           │    │
│  │                                                    │    │
│  └────────────────────────────────────────────────────┘    │
└──────────────────────────────────────────────────────────────┘
               │              │
        ┌──────▼──────┐ ┌─────▼───────┐
        │ HuggingFace │ │   Resend    │
        │ Inference   │ │   Email API │
        │ API         │ │             │
        └─────────────┘ └─────────────┘
```

---

## 🔄 Request Flow Example

### Example 1: User Analyzes Text

```
User → Types "Hello world"
     → Clicks "Analyze Text" button
     ↓
React → Calls analyzeText({text: "Hello world", ...})
     ↓
client.ts → Fetch POST to http://localhost:8000/api/analyze
         with body: {text: "Hello world", model: "gpt", language: "english"}
     ↓
Backend → Receives request
       → Extracts text
       → Calls HuggingFace API
       → Gets back: {"label": "POSITIVE", "score": 0.95}
       → Transforms to: {
              "category": "Positive Content",
              "safety": "safe",
              "score": 0.95,
              "originalLabel": "POSITIVE",
              "model_used": "gpt",
              "language": "english",
              "timestamp": "2025-11-13T..."
           }
     ↓
Response → Sent back to React
         ↓
React → Displays results on page:
     ✓ Category: Positive Content
     ✓ Safety: SAFE (green badge)
     ✓ Confidence: 95.0%
     ↓
User → Sees analysis results! ✅
```

---

### Example 2: User Submits Contact Form

```
User → Fills Contact Form:
     - Name: John Doe
     - Email: john@example.com
     - Message: "Hi, I love your app!"
     → Clicks "Send Message"
     ↓
React → Calls sendContactEmail({
           name: "John Doe",
           email: "john@example.com",
           message: "Hi, I love your app!"
        })
     ↓
client.ts → Fetch POST to http://localhost:8000/api/contact
         with form data above
     ↓
Backend → Receives request
       → Validates all fields exist
       → Prepares admin email:
           To: pardheevsai@gmail.com
           Subject: "New Contact Form Submission from John Doe"
           Body: <HTML with name, email, message>
       → Sends via Resend API ✓
       → Prepares user confirmation email:
           To: john@example.com
           Subject: "Thank you for contacting us!"
           Body: <HTML thanking user>
       → Sends via Resend API ✓
       → Returns: {success: true, message: "Email sent successfully"}
     ↓
Response → Sent back to React
         ↓
React → Shows toast notification:
     ✓ "Message sent!"
     ✓ "We'll get back to you as soon as possible."
     ↓
User → Sees success message
Form → Clears and resets
Email → Arrives in pardheevsai@gmail.com inbox ✅
```

---

## 📝 Data Models

### Request: Analyze Text

```json
{
  "text": "This is amazing!",
  "model": "gpt",
  "language": "english"
}
```

### Response: Analyze Result

```json
{
  "category": "Positive Content",
  "safety": "safe",
  "score": 0.95,
  "originalLabel": "POSITIVE",
  "model_used": "gpt",
  "language": "english",
  "timestamp": "2025-11-13T10:30:00Z"
}
```

### Request: Contact Email

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "Hello, I have a question..."
}
```

### Response: Contact Success

```json
{
  "success": true,
  "message": "Email sent successfully"
}
```

---

## 🔧 Component Integration Map

```
Frontend Components          Backend Functions        External APIs
────────────────────────────────────────────────────────────────────

Index.tsx
  └─ Textarea: user text
  └─ Button: "Analyze"
     └─ calls analyzeText()
        └─ POST /api/analyze
           └─ hf_classify()
              └─ HuggingFace API
                 (text classification)
              └─ Returns classification
           └─ Returns results
        └─ Displays on page

Contact.tsx
  └─ Form: name, email, message
  └─ Button: "Send Message"
     └─ calls sendContactEmail()
        └─ POST /api/contact
           └─ Send admin email
              └─ Resend API
                 (send to pardheevsai@gmail.com)
           └─ Send user confirmation
              └─ Resend API
                 (send to user@example.com)
           └─ Returns success
        └─ Shows toast notification

Navigation.tsx
  └─ Links to all pages
     └─ React Router handling
```

---

## 🔐 Security Flow

```
User Input (Browser)
  ↓
React validation
  ↓
HTTPS/HTTP POST to Backend (localhost:8000)
  ↓
CORS check (allow all for local dev)
  ↓
Request validation
  - Check text is not empty
  - Check email format (contact form)
  - Check all required fields
  ↓
API calls with authentication
  - HuggingFace: Authorization header with token
  - Resend: Authorization header with API key
  ↓
Response validation
  - Check API response is valid JSON
  - Extract required fields
  - Handle errors gracefully
  ↓
Response to Frontend
  ↓
User sees results/message
```

---

## 🌐 Environment & Deployment Flow

### Local Development
```
Frontend: http://localhost:5173
  ↑ VITE_API_BASE_URL=http://localhost:8000
Backend: http://localhost:8000
```

### Production
```
Frontend: https://yourfrontenddomain.com
  ↑ VITE_API_BASE_URL=https://api.yourdomain.com
Backend: https://api.yourdomain.com
```

---

## 📦 Technology Integration

| Technology | Role | Integration |
|-----------|------|-------------|
| React | UI Framework | Pages, Components, Hooks |
| Vite | Build Tool | Development & Production builds |
| TypeScript | Type Safety | All source files |
| Tailwind CSS | Styling | All UI components |
| FastAPI | Backend Framework | REST API endpoints |
| Uvicorn | ASGI Server | HTTP request handler |
| Requests | HTTP Client | Call HuggingFace & Resend |
| Python-dotenv | Env Vars | Load .env files |
| HuggingFace API | ML Model | Text classification |
| Resend API | Email Service | Send emails |

---

## ✅ Verification Checklist

- [ ] Frontend `.env` has `VITE_API_BASE_URL=http://localhost:8000`
- [ ] Backend `.env` has API tokens
- [ ] Backend listening on port 8000
- [ ] Frontend dev server on port 5173
- [ ] Network tab shows successful requests to `/api/analyze`
- [ ] Response contains expected fields: `category`, `safety`, `score`
- [ ] Contact form shows success after submission
- [ ] Email arrives at `pardheevsai@gmail.com` (with real API key)

---

## 🚀 This Replaces

**Old System (Supabase):**
- Supabase Edge Functions (Deno)
- Hosted on Supabase
- Supabase client in frontend

**New System (Python FastAPI):**
- Python FastAPI backend (local)
- Simple HTTP API
- Lightweight client wrapper
- Easier to customize & deploy
