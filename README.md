# My Portfolio Website

This is a personal portfolio website built using **Next.js** for the frontend and **Sanity.io** as the content management system (CMS). It showcases my projects, skills, and experience as a developer, and it is fully customizable through Sanity Studio.

## Table of Contents

- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Development Server](#running-the-development-server)
- [Deployment](#deployment)
- [License](#license)

## Tech Stack

- **Frontend**: [Next.js](https://nextjs.org/docs)
- **CMS**: [Sanity.io](https://www.sanity.io)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/docs)
- **Other**: [Umami](https://umami.is) for analytics

## Getting Started

### Prerequisites

- Node.js (>= 18.x.x)
- NPM or Yarn

### CMS Configuration (Sanity.io)

- Create and account on the platform
- Create a project
- Get the project id to store in env file

### For analytics

- Create an account on [umami.is](https://umami.is/)
- Add your website
- Get website id to store in env file

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/mahmudz/portfolio.git
   cd portfolio
   ```

2. **Update the keys in env file**:

   - Copy the `.env.example` to to `.env.local`
   - Update the values

3. **Install dependencies**:
   If using npm:

   ```bash
   npm install
   ```

   If using yarn:

   ```bash
   yarn install
   ```

### Running the Development Server

Start the Next.js development server:

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to view the portfolio in the browser. The page will automatically reload as you make changes to the code.

Visit [http://localhost:3000/studio](http://localhost:3000/studio) to manage CMS data of [Sanity.io](https://www.sanity.io)

## Deployment

This website can be deployed easily to hosting services like **Vercel**. The simplest way is to link your GitHub repository to Vercel.

To deploy on Vercel:

1. Push your code to GitHub.
2. Visit [https://vercel.com](https://vercel.com) and create a new project.
3. Connect your GitHub repo and follow the deployment steps.

Once deployed, you can still manage your CMS using your domain for vercel `https://your-website-address/studio`.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
