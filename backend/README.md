# SafeText AI - Backend

FastAPI-based Python backend for text analysis and email handling.

## Endpoints

| Endpoint | Method | Body | Response |
|----------|--------|------|----------|
| `/api/analyze` | POST | `{text, model?, language?}` | `{category, safety, score, originalLabel, model_used, language, timestamp}` |
| `/api/classify` | POST | `{text}` | `{category, safety, score, originalLabel}` |
| `/api/contact` | POST | `{name, email, message}` | `{success: true, message: "Email sent successfully"}` |

## How Frontend Integrates

The frontend (`../Frontend/src/integrations/backend/client.ts`) calls these endpoints:

1. **User enters text** on Index page → calls `/api/analyze`
2. **User submits contact form** → calls `/api/contact`
3. **Results returned** and displayed on page

The frontend uses `VITE_API_BASE_URL` environment variable to know where to find this backend (e.g., `http://localhost:8000` for local dev).

## Environment Variables (Required)

Set these before running:

- `HUGGING_FACE_ACCESS_TOKEN` — Hugging Face Inference API token (for text classification)
- `RESEND_API_KEY` — Resend API key (for sending emails)

Optional:
- `ADMIN_EMAIL` — Admin recipient for contact emails (default: pardheevsai@gmail.com)

## Local Development

### Setup

```powershell
cd backend
python -m venv .venv
.\\.venv\\Scripts\\Activate.ps1
pip install -r requirements.txt
```

### Run Dev Server

```powershell
# Set environment variables (example)
$env:HUGGING_FACE_ACCESS_TOKEN = "hf_your_token_here"
$env:RESEND_API_KEY = "re_your_key_here"

# Start the server
uvicorn main:app --reload --host 0.0.0.0 --port 8000
```

The backend will run on `http://localhost:8000`.

## API Details

### POST /api/analyze
Analyzes text for content safety using Hugging Face distilbert model.

**Request:**
```json
{
  "text": "Your text here",
  "model": "gpt",
  "language": "english"
}
```

**Response:**
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

### POST /api/classify
Classifies text (similar to analyze, shorter response).

**Request:**
```json
{
  "text": "Your text here"
}
```

**Response:**
```json
{
  "category": "Positive Content",
  "safety": "safe",
  "score": 0.95,
  "originalLabel": "POSITIVE"
}
```

### POST /api/contact
Sends contact form emails to admin and confirmation to user.

**Request:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "Hello, I have a question..."
}
```

**Response:**
```json
{
  "success": true,
  "message": "Email sent successfully"
}
```

## Technology Stack

- **FastAPI** — Web framework
- **Uvicorn** — ASGI server
- **Requests** — HTTP client for Hugging Face & Resend APIs
- **Python-dotenv** — Environment variable management

## CORS

CORS is enabled for all origins (`*`) to make local dev easy. In production, restrict this to your frontend domain in `main.py`:

```python
app.add_middleware(
    CORSMiddleware,
    allow_origins=["https://yourfrontenddomain.com"],  # Change this
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
```

## Security Notes

- Keep `HUGGING_FACE_ACCESS_TOKEN` and `RESEND_API_KEY` out of git.
- Use environment variables or a secrets manager in production.
- Validate and sanitize inputs on the server side (basic validation included).
- Restrict CORS to your frontend domain in production.
