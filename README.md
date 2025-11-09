# Student Productivity App Landing Page

A modern, responsive landing page for the **Student Planner App**, built with **Next.js 14**, **TypeScript**, and **Tailwind CSS**. It showcases the features, UI, and technology stack of the mobile app — designed to help students manage their **tasks, notes, and expenses** efficiently.

🔗 **Live Site:** [Student Productivity App Landing Page](https://github.com/EternalKnight002/student-productivity-app-landingPage.git)

📱 **Main App Repository:** [Student Planner App](https://github.com/EternalKnight002/student-productivity-app)

---

## ✨ Overview

This landing page acts as the web showcase for the **Student Planner App**, highlighting its design, features, and core functionalities with smooth animations, gradients, and call-to-action sections. It’s built for performance, accessibility, and aesthetics.

### 🌟 Key Highlights

* Interactive and animated hero section with gradient highlights
* Beautifully designed features and app preview mockups
* Smooth scrolling and responsive layouts
* Dark/light theme toggle
* Dynamic technology showcase section
* Engaging call-to-action with direct download links

---

## 🧠 Sections

### 1. **Hero Section** (`AnimatedHero.tsx`)

* Animated introduction showcasing the app’s purpose
* Direct download and GitHub view buttons
* Floating UI mockups with motion effects

### 2. **Technology Stack Section** (`BrandSection.tsx`)

* Animated display of key technologies used: React Native, Expo, TypeScript, Zustand, etc.

### 3. **Why Us Section** (`FeaturesSection.tsx`)

* Lists main advantages like Expense Tracking, Unified Productivity, and Analytics

### 4. **App Features Section** (`AppFeaturesSection.tsx`)

* Displays app capabilities: Task Management, Notes, and Expenses
* Includes mobile mockups styled like real app screens

### 5. **Call-to-Action Section** (`CTASection.tsx`)

* Gradient background section prompting users to download or explore
* App preview screenshots with layered glowing effects

### 6. **Video and Modal Components** (`VideoPlayer.tsx`, `Modal.tsx`)

* Custom reusable video player component with overlay play button
* Responsive modal for embedded content

### 7. **Theme Toggle** (`ThemeToggle.tsx`)

* Implements light/dark mode using `next-themes`

---

## 🛠️ Tech Stack

| Category          | Technologies                                |
| ----------------- | ------------------------------------------- |
| **Framework**     | Next.js 14 (App Router)                     |
| **Language**      | TypeScript                                  |
| **Styling**       | Tailwind CSS                                |
| **Animations**    | Framer Motion                               |
| **UI Components** | Radix UI, Lucide Icons, React Icons         |
| **Theming**       | next-themes                                 |
| **Other**         | Intersection Observer for scroll animations |

---

## 🚀 Getting Started

### Prerequisites

* Node.js 18+
* npm or yarn

### Installation

```bash
git clone https://github.com/EternalKnight002/student-productivity-app-landingPage.git
cd student-productivity-app-landingPage
npm install
```

### Run Locally

```bash
npm run dev
```

Visit: [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

---

## 📂 Project Structure

```
student-productivity-app-landingPage/
├── src/
│   ├── app/
│   │   ├── layout.tsx        # Root layout with header, footer, and metadata
│   │   └── page.tsx          # Homepage assembling all sections
│   └── components/
│       ├── AnimatedHero.tsx
│       ├── AppFeaturesSection.tsx
│       ├── BrandSection.tsx
│       ├── CTASection.tsx
│       ├── FeaturesSection.tsx
│       ├── Modal.tsx
│       ├── ThemeToggle.tsx
│       ├── VideoPlayer.tsx
│       └── SearchInput.tsx
├── public/
│   ├── screenshots/          # App screenshots used in mockups
│   └── mockups/              # Device mockup images
├── styles/globals.css        # Global Tailwind + custom animations
├── tailwind.config.js
├── tsconfig.json
├── package.json
└── README.md
```

---

## 💡 Design Notes

* Built with a **minimal yet vibrant gradient aesthetic**
* Focused on **clean typography and balanced whitespace**
* **Motion design principles** for natural UI flow
* Fully **responsive** on all devices

---

## 👤 Author

**Aman Kumar**
📧 [alternatewavelenght@gmail.com](mailto:alternatewavelenght@gmail.com)
🔗 [GitHub](https://github.com/EternalKnight002) · [LinkedIn](https://linkedin.com/in/aman-kumar-537a73296) · [X (Twitter)](https://x.com/Eternalknigh)

---

## 🪪 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## ❤️ Acknowledgments

* **Framer Motion** for smooth, elegant animations
* **Tailwind CSS** for rapid UI styling
* **Next.js** for server-rendered and optimized performance
* **React Native App Inspiration** from the main [Student Planner App](https://github.com/EternalKnight002/student-productivity-app)

---

> *A clean, modern, and performance-optimized landing page to showcase your student productivity app with style and motion.*
