# How to Add a New Project to Your Portfolio

## 📝 Quick Steps:

### 1. **Prepare Your Images**
Place your project images in: `public/assets/images/Your Project Name/`

Example structure:
```
public/assets/images/
└── Your Project Name/
    ├── main-image.png      ← Main thumbnail (shows on homepage)
    ├── screenshot1.png     ← Gallery images
    ├── screenshot2.png
    └── screenshot3.png
```

### 2. **Edit the Portfolio Data**
Open: `data/portfolio.js`

Find the `portfolios2` array and add your project:

```javascript
export const portfolios2 = [
  // ... existing projects (Color Drop, Fish Out) ...
  
  // Your new project:
  {
    id: 17,  // Use next available number
    imageUrl: "/assets/images/Your Project Name/main-image.png",
    gallery: [
      "/assets/images/Your Project Name/main-image.png",
      "/assets/images/Your Project Name/screenshot1.png",
      "/assets/images/Your Project Name/screenshot2.png",
    ],
    title: "Your Project Title",
    description: "Brief description of your project.",
    externalUrl: "https://your-link.com",  // Optional
    categories: ["development"],
  },
];
```

### 3. **Test Locally**
```bash
npm run dev
```
Visit `http://localhost:3000` and scroll to the Portfolio section.

### 4. **Deploy to Vercel**
```bash
git add .
git commit -m "Add new project: Your Project Name"
git push
```

---

## 🎯 Field Descriptions:

| Field | Description | Required |
|-------|-------------|----------|
| `id` | Unique number (use next sequential ID) | ✅ Yes |
| `imageUrl` | Main thumbnail image path | ✅ Yes |
| `gallery` | Array of image paths for detail page | ✅ Yes |
| `title` | Project name | ✅ Yes |
| `description` | Short description (1-2 sentences) | ✅ Yes |
| `externalUrl` | External link (app store, website, etc.) | ❌ Optional |
| `categories` | Array of categories | ✅ Yes |

### Available Categories:
- `"development"` - For games, apps, software
- `"design"` - For UI/UX, graphics
- `"branding"` - For brand identity work

---

## 📸 Image Recommendations:

- **Main Image (imageUrl):**
  - Size: 1200 x 819 pixels (or similar 3:2 ratio)
  - Format: PNG or JPG
  - High quality

- **Gallery Images:**
  - Multiple screenshots/images showing project features
  - Same format as main image
  - At least 3-6 images recommended

---

## ✅ Example: Adding a Game Project

```javascript
{
  id: 17,
  imageUrl: "/assets/images/My Cool Game/cover.png",
  gallery: [
    "/assets/images/My Cool Game/cover.png",
    "/assets/images/My Cool Game/gameplay1.png",
    "/assets/images/My Cool Game/gameplay2.png",
    "/assets/images/My Cool Game/gameplay3.png",
  ],
  title: "My Cool Game",
  description: "An action-packed adventure game with stunning graphics and challenging gameplay.",
  externalUrl: "https://play.google.com/store/apps/details?id=com.yourcompany.coolgame",
  categories: ["development"],
}
```

---

## 🔧 Troubleshooting:

**Images not showing?**
- Check file path (case-sensitive!)
- Make sure images are in `public/assets/images/`
- Restart dev server (`npm run dev`)

**Project not appearing?**
- Check that you saved `data/portfolio.js`
- Make sure the syntax is correct (commas, brackets)
- Check browser console for errors (F12)

**External link not working?**
- The link opens in the project detail page
- Make sure the URL starts with `https://` or `http://`

---

## 📍 Current Projects:

1. **Color Drop** (id: 15)
2. **Fish Out** (id: 16)
3. **Your New Project** (id: 17) ← Add here!

Next project should use id: 18
