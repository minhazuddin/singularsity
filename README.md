# Singularsity - Privacy-First Synthetic Data Platform

A modern, interactive website for Singularsity, a synthetic data platform that helps businesses and startups generate synthetic data for their AI models while maintaining privacy and compliance.

## 🚀 Features

- **Modern Design**: Built with Next.js 14, React 18, and Tailwind CSS
- **Interactive UI**: Smooth animations with Framer Motion
- **Privacy-First**: Focused on synthetic data generation and privacy compliance
- **Mobile Responsive**: Fully responsive design for all devices
- **Authentication**: Login page with demo credentials
- **Professional Navigation**: Multi-level dropdown menus
- **Industry Use Cases**: Healthcare, Finance, E-commerce, and Manufacturing
- **Comprehensive Footer**: Inspired by leading synthetic data platforms

## 🎨 Design System

- **Colors**: 
  - Primary: `#238c44`
  - Secondary: `#409A5D`
- **Fonts**:
  - Headings: Space Grotesk (Google Fonts)
  - Body Text: Segoe UI
- **Components**: Modern glass effects, gradient backgrounds, and smooth transitions

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS with custom design system
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Language**: TypeScript
- **Authentication**: Demo implementation with bcryptjs and JWT

## 📦 Installation

1. **Clone the repository**
   \`\`\`bash
   git clone <repository-url>
   cd singularsity
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install
   \`\`\`

3. **Run the development server**
   \`\`\`bash
   npm run dev
   \`\`\`

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🔐 Demo Login

Use these credentials to test the login functionality:
- **Email**: demo@singularsity.com
- **Password**: demo123

## 📱 Pages

- **Home** (`/`): Main landing page with hero, features, use cases, and how it works
- **Login** (`/login`): Authentication page with demo credentials
- **Services**: Data generation, masking, quality assurance, API integration
- **Solutions**: AI/ML training, software testing, analytics & BI, privacy compliance
- **Use Cases**: Industry-specific applications
- **Pricing**: Pricing plans and packages
- **About**: Company information

## 🏗️ Project Structure

\`\`\`
singularsity/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles and Tailwind
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── login/
│       └── page.tsx       # Login page
├── components/            # Reusable components
│   ├── Navigation.tsx     # Header navigation
│   └── Footer.tsx         # Site footer
├── public/               # Static assets
├── package.json          # Dependencies
├── tailwind.config.js    # Tailwind configuration
├── tsconfig.json         # TypeScript configuration
└── next.config.js        # Next.js configuration
\`\`\`

## 🎯 Key Features

### Navigation
- Fixed header with backdrop blur effect
- Dropdown menus for Services, Solutions, and Use Cases
- Mobile-responsive hamburger menu
- Smooth hover animations

### Home Page Sections
1. **Hero Section**: Eye-catching title with call-to-action buttons
2. **Features**: Six key features with icons and descriptions
3. **Use Cases**: Industry-specific applications with detailed benefits
4. **How It Works**: Four-step process explanation
5. **Call to Action**: Final conversion section

### Login Page
- Modern form design with icons
- Password visibility toggle
- Social login options (Google, Facebook)
- Error handling and loading states
- Demo credentials for testing

### Footer
- Comprehensive link structure
- Contact information
- Social media links
- Trust badges and compliance certifications
- Copyright and legal links

## 🧩 Content Focus

All content is specifically tailored for synthetic data platforms:

- **Privacy-first approach**: Emphasizing GDPR, HIPAA, and SOC 2 compliance
- **AI/ML focus**: Targeting machine learning and AI development use cases
- **Industry applications**: Healthcare, finance, e-commerce, and manufacturing
- **Technical features**: GANs, VAEs, differential privacy, and API integration
- **Enterprise solutions**: Scalability, security, and professional services

## 🚀 Development

### Available Scripts

- `npm run dev`: Start development server
- `npm run build`: Build for production
- `npm run start`: Start production server
- `npm run lint`: Run ESLint

### Adding New Pages

1. Create a new folder in the `app` directory
2. Add a `page.tsx` file with your component
3. Follow the existing pattern with Navigation and Footer components

### Customizing Styles

1. Modify `tailwind.config.js` for design system changes
2. Update `app/globals.css` for global styles
3. Use the existing color scheme and typography system

## 🔒 Security Considerations

- Demo authentication for development only
- Implement proper authentication for production
- Add CSRF protection and input validation
- Use environment variables for sensitive data

## 📈 Performance

- Optimized with Next.js 14 App Router
- Image optimization with Next.js Image component
- Code splitting and lazy loading
- Minimal bundle size with tree shaking

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is created for demonstration purposes. Please ensure you have the right to use any content or assets.

## 🆘 Support

For questions or issues:
- Check the existing documentation
- Review the code comments
- Contact the development team

---

Built with ❤️ for the future of privacy-preserving synthetic data generation. 