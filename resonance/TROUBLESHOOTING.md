# Contact Form Troubleshooting Guide

## Common Issues and Solutions

### 1. **Environment Variables Not Loading**

**Problem:** Email service not configured error

**Solution:**
- Make sure you created `.env.local` file (NOT `.env`)
- Restart the dev server after creating/modifying `.env.local`
- Check that the file is in the correct location: `resonance/.env.local`

```bash
# Stop the dev server (Ctrl+C)
# Then restart it
npm run dev
```

### 2. **Gmail Authentication Error**

**Problem:** "Invalid login" or authentication errors

**Solution:**
- Make sure you're using a Gmail **App Password**, not your regular password
- Generate App Password here: https://myaccount.google.com/apppasswords
- You need 2-Step Verification enabled first
- Copy the 16-character password exactly (no spaces)

### 3. **Form Not Submitting**

**Problem:** Nothing happens when clicking "Send Message"

**Solution:**
- Open browser DevTools (F12)
- Check the Console tab for JavaScript errors
- Check the Network tab for failed API calls
- Look for `/api/send-message` request and click it to see details

### 4. **CORS Errors**

**Problem:** Blocked by CORS policy

**Solution:**
- This shouldn't happen on localhost
- Make sure you're accessing via `http://localhost:3000` (or your port)
- Don't access via `127.0.0.1` if running on `localhost`

### 5. **Rate Limiting**

**Problem:** "Too many requests" error

**Solution:**
- Wait 1 minute before trying again
- Or restart the dev server to reset rate limits

## Checking What's Wrong

### Step 1: Check Terminal Output

When you submit the form, check your terminal where `npm run dev` is running. You should see:

```
[Contact Form] POST request received
[Contact Form] Environment check: { hasEmailUser: true, hasEmailPass: true, hasReceiverEmail: true }
Email sent successfully from test@example.com (Test User)
```

If you see:
- `hasEmailUser: false` → Your .env.local file is missing or EMAIL_USER is not set
- Authentication error → Check your Gmail App Password

### Step 2: Check Browser Console

1. Open DevTools (F12)
2. Go to Console tab
3. Submit the form
4. Look for errors or `[Contact Form]` messages

### Step 3: Check Network Tab

1. Open DevTools (F12)
2. Go to Network tab
3. Submit the form
4. Look for the `send-message` request
5. Click on it and check:
   - **Status**: Should be 200 (success) or 400/500 (error)
   - **Response**: Shows the actual error message from server
   - **Headers**: Check if request went through

## Quick Checklist

- [ ] `.env.local` file exists in the `resonance` folder
- [ ] All three environment variables are set (EMAIL_USER, EMAIL_PASS, RECEIVER_EMAIL)
- [ ] Using Gmail App Password (not regular password)
- [ ] Dev server restarted after creating .env.local
- [ ] Browser console shows no JavaScript errors
- [ ] Network tab shows request to `/api/send-message`

## Still Not Working?

If you've checked everything above and it's still not working:

1. **Check the exact error message:**
   - In browser DevTools Console
   - In terminal where dev server is running
   - In Network tab Response

2. **Test the API directly:**
   Open a new terminal and run:
   ```bash
   curl -X POST http://localhost:3000/api/send-message -H "Content-Type: application/json" -d "{\"name\":\"Test\",\"email\":\"test@example.com\",\"message\":\"Test message\"}"
   ```

3. **Verify Gmail settings:**
   - 2-Step Verification is ON
   - App Password is generated
   - Using the full 16-character app password
   - Gmail account is not locked or restricted

## Next.js Environment Variables Priority

Next.js loads environment variables in this order (later ones override earlier):
1. `.env` (all environments)
2. `.env.local` (all environments, ignored by git) ← **USE THIS FOR DEVELOPMENT**
3. `.env.development` (development only)
4. `.env.development.local` (development only, ignored by git)

For local development, use `.env.local` and restart the server after changes.
