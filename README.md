# ✨ AdForge AI

> The Future of AI-Powered Product Imagery & Video Generation

![Banner](https://img.shields.io/badge/AI-Powered-blue?style=for-the-badge) ![React](https://img.shields.io/badge/React-19-blue?style=for-the-badge&logo=react) ![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue?style=for-the-badge&logo=typescript) ![Express](https://img.shields.io/badge/Express-5.2-green?style=for-the-badge&logo=express) ![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-06B6D4?style=for-the-badge&logo=tailwindcss)

---

## 🎯 About AdForge AI

AdForge AI is a cutting-edge platform that revolutionizes how brands and businesses create professional lifestyle imagery and short-form video content. Powered by advanced AI technology, AdForge instantly generates stunning product visuals optimized for commercials, Instagram Reels, TikTok, and other social platforms.

**Say goodbye to expensive photoshoots and hello to unlimited AI-generated professional content!** 🚀

---

## ✨ Key Features

- 🎬 **AI-Powered Generation** - Generate professional lifestyle imagery and short-form videos instantly
- 🎨 **Smart Product Imaging** - Upload your product and model images, let AI create magic
- 📐 **Flexible Aspect Ratios** - Support for 9:16, 16:9, and square formats for any platform
- 🎥 **Social Media Optimized** - Pre-optimized for Instagram Reels, TikTok, YouTube Shorts, and more
- 👥 **User Authentication** - Secure authentication with Clerk
- 💳 **Flexible Pricing Plans** - Multiple subscription tiers to fit every business size
- 🌍 **Community Features** - Connect with other creators and share experiences
- ⚡ **High Performance** - Lightning-fast generation with optimized processing
- 🎨 **Beautiful UI** - Gorgeous, modern interface with smooth animations

---

## 🚀 Tech Stack

### Frontend

- **React 19** - Modern UI library with latest features
- **TypeScript** - Type-safe development
- **Vite** - Lightning-fast build tool
- **Tailwind CSS 4** - Utility-first styling
- **Framer Motion** - Smooth, professional animations
- **React Router DOM** - Seamless navigation
- **Clerk** - Enterprise-grade authentication
- **Lenis** - Smooth scrolling experience
- **Lucide React** - Beautiful icon library

### Backend

- **Node.js + Express 5** - Robust API server
- **TypeScript** - Type-safe backend
- **CORS** - Cross-origin support
- **Dotenv** - Environment configuration

---

## 📋 Project Structure

```
adforge-ai-web/
├── client/                    # React frontend application
│   ├── src/
│   │   ├── pages/            # Route pages (Home, Generator, MyGenerations, etc.)
│   │   ├── components/       # Reusable UI components
│   │   ├── assets/           # Dummy data and schemas
│   │   ├── types/            # TypeScript type definitions
│   │   ├── App.tsx           # Main app component
│   │   └── main.tsx          # Entry point
│   ├── public/               # Static assets
│   ├── package.json          # Frontend dependencies
│   └── vite.config.ts        # Vite configuration
│
└── server/                    # Express backend API
    ├── server.ts             # Main server file
    ├── package.json          # Backend dependencies
    └── tsconfig.json         # TypeScript configuration
```

---

## ⚙️ Installation & Setup

### Prerequisites

- **Node.js** (v16 or higher)
- **npm** or **yarn**
- **Git**

### 1. Clone the Repository

```bash
git clone https://github.com/atishay5845/adforge-ai-web.git
cd adforge-ai-web
```

### 2. Install Dependencies

**Frontend:**

```bash
cd client
npm install
```

**Backend:**

```bash
cd ../server
npm install
```

### 3. Environment Configuration

Create a `.env` file in the `server` directory:

```env
PORT=5000
CLERK_SECRET_KEY=your_clerk_secret_key_here
# Add other environment variables as needed
```

Create a `.env.local` file in the `client` directory:

```env
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key_here
```

### 4. Run the Application

**Start the Backend Server:**

```bash
cd server
npm run server
```

**Start the Frontend Development Server (in another terminal):**

```bash
cd client
npm run dev
```

The application will be available at `http://localhost:5173`

---

## 🎮 Usage

### Using AdForge AI

1. **Sign Up/Login** - Create an account using Clerk authentication
2. **Navigate to Generator** - Click on the Generator in the navigation
3. **Upload Images** - Upload your product image and model image
4. **Customize** - Select aspect ratio and add your custom prompt
5. **Generate** - Click the magic wand button to generate AI content
6. **Download** - Download your generated imagery and videos
7. **Track** - View all your generations in "My Generations"

### Developer Commands

**Frontend:**

```bash
npm run dev        # Start development server
npm run build      # Build for production
npm run lint       # Run ESLint
npm run preview    # Preview production build
```

**Backend:**

```bash
npm run server     # Start with hot reload (nodemon)
npm run start      # Start production server
npm run build      # Build TypeScript
```

---

## 📁 Key Pages & Components

### Pages

- **Home** - Landing page with hero, features, pricing, and FAQ
- **Generator** - Main AI generation interface
- **MyGenerations** - View and manage all your generated content
- **Plans** - Subscription pricing information
- **Community** - Connect with other users
- **Result** - View detailed generation results
- **Loading** - Loading state UI

### Components

- **Hero** - Eye-catching landing section
- **Features** - Showcase of platform capabilities
- **Pricing** - Subscription tier options
- **FAQ** - Common questions and answers
- **Navbar** - Navigation header
- **Footer** - Footer with links and info
- **UploadZone** - Drag-and-drop file upload
- **ProjectCard** - Display generated projects
- **Buttons** - Reusable button components

---

## 🔐 Authentication

AdForge AI uses **Clerk** for secure, enterprise-grade authentication:

- 🔒 Secure sign up and login
- 🔑 Multi-factor authentication support
- 📧 Email verification
- 🔄 Social login integrations
- 👤 User profile management

---

## 🎨 Design Philosophy

AdForge AI features a modern, sleek design with:

- **Smooth Animations** - Powered by Framer Motion
- **Responsive Design** - Perfect on all devices
- **Accessibility First** - WCAG compliant
- **Dark Mode Optimized** - Easy on the eyes
- **Professional Aesthetics** - Modern UI patterns

---

## 🤝 Contributing

We welcome contributions! Here's how to get started:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

Please ensure your code passes linting:

```bash
npm run lint
```

---

## 📦 Build & Deployment

### Production Build

**Frontend:**

```bash
cd client
npm run build
# Output in dist/
```

**Backend:**

```bash
cd server
npm run build
# Output in dist/
```

### Deployment Recommendations

- **Frontend**: Deploy to Vercel, Netlify, or similar
- **Backend**: Deploy to Heroku, Railway, or your preferred Node.js hosting
- **Database**: Configure your Database connection in environment variables
- **CDN**: Use a CDN for assets like images and videos

---

## 📊 Performance

- ⚡ **Fast Build Times** - Using Vite for rapid development
- 🚀 **Optimized Bundle** - Tree-shaking and code splitting
- 🎬 **Smooth Animations** - GPU-accelerated with Framer Motion
- 📱 **Mobile Optimized** - Responsive design and touch-friendly
- 🔄 **Efficient Caching** - Smart caching strategies

---

## 🐛 Troubleshooting

### Port Already in Use

```bash
# Change port in server/server.ts or use environment variable
PORT=5001 npm run server
```

### Module Not Found Errors

```bash
# Clear node_modules and reinstall
rm -r node_modules package-lock.json
npm install
```

### Vite Cache Issues

```bash
# Clear Vite cache
rm -r client/.vite
npm run dev
```

---

## 📚 Documentation

For detailed information:

- Check individual component files for prop documentation
- Review TypeScript types in `client/src/types/`
- See API endpoints in `server/server.ts`

---

## 📄 License

This project is licensed under the ISC License - see the LICENSE file for details.

---

## 🙋 Support & Feedback

- 📧 Email: support@adforge.ai
- 🐛 Report Issues: [GitHub Issues](https://github.com/yourusername/adforge-ai-web/issues)
- 💬 Discussions: [GitHub Discussions](https://github.com/yourusername/adforge-ai-web/discussions)

---

## 🌟 Show Your Support

If you love AdForge AI, please give us a ⭐ on GitHub!

---

<div align="center">

**Made with ❤️ by the AdForge Team**

[Website](https://adforge.ai) • [Twitter/X](https://twitter.com/adforgeai) • [LinkedIn](https://linkedin.com/company/adforge)

</div>
