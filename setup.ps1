#!/usr/bin/env powershell
# SafeText AI - One-Click Setup Script
# Run this once to set up both frontend and backend

Write-Host "========================================" -ForegroundColor Green
Write-Host "SafeText AI - Automated Setup" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Green
Write-Host ""

$projectRoot = "C:\Users\pardh\OneDrive\Desktop\AI-Guard"

# Step 1: Setup Backend
Write-Host "[1/3] Setting up Backend..." -ForegroundColor Cyan
$backendDir = "$projectRoot\backend"
cd $backendDir

if (Test-Path "venv") {
    Write-Host "✓ Virtual environment already exists" -ForegroundColor Green
} else {
    Write-Host "  Creating Python virtual environment..." -ForegroundColor Yellow
    python -m venv venv
    Write-Host "✓ Virtual environment created" -ForegroundColor Green
}

Write-Host "  Installing Python dependencies..." -ForegroundColor Yellow
& ".\venv\Scripts\python.exe" -m pip install -r requirements.txt -q
Write-Host "✓ Backend dependencies installed" -ForegroundColor Green

# Step 2: Setup Frontend
Write-Host ""
Write-Host "[2/3] Setting up Frontend..." -ForegroundColor Cyan
$frontendDir = "$projectRoot\Frontend"
cd $frontendDir

if (Test-Path "node_modules") {
    Write-Host "✓ npm dependencies already installed" -ForegroundColor Green
} else {
    Write-Host "  Installing npm dependencies..." -ForegroundColor Yellow
    npm install --legacy-peer-deps -q
    Write-Host "✓ Frontend dependencies installed" -ForegroundColor Green
}

# Step 3: Check .env files
Write-Host ""
Write-Host "[3/3] Verifying Configuration..." -ForegroundColor Cyan

if (Test-Path "$frontendDir\.env") {
    Write-Host "✓ Frontend .env exists" -ForegroundColor Green
} else {
    Write-Host "⚠ Frontend .env missing" -ForegroundColor Yellow
}

if (Test-Path "$backendDir\.env") {
    Write-Host "✓ Backend .env exists" -ForegroundColor Green
} else {
    Write-Host "⚠ Backend .env missing" -ForegroundColor Yellow
}

# Summary
Write-Host ""
Write-Host "========================================" -ForegroundColor Green
Write-Host "Setup Complete! ✅" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Green
Write-Host ""
Write-Host "Next Steps:" -ForegroundColor Cyan
Write-Host ""
Write-Host "Terminal 1 - Start Backend:" -ForegroundColor Yellow
Write-Host "  cd '$backendDir'"
Write-Host "  .\venv\Scripts\python.exe -m uvicorn main:app --reload --host 0.0.0.0 --port 8000"
Write-Host ""
Write-Host "Terminal 2 - Start Frontend:" -ForegroundColor Yellow
Write-Host "  cd '$frontendDir'"
Write-Host "  npm run dev"
Write-Host ""
Write-Host "Then open: http://localhost:5173" -ForegroundColor Green
Write-Host ""
Write-Host "See SETUP_AND_RUN.md for detailed instructions and testing" -ForegroundColor Cyan
