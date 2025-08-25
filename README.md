# Cursor - Clinical Study Management Platform

## 🎯 Project Overview

Cursor transforms clinical research site management from chaos to seamless, organized operations. Built specifically for clinical research coordinators, Cursor provides a unified platform to manage all studies, visits, and compliance requirements.

**Core Value Proposition**: "One Platform to Run All Your Studies – Smarter, Simpler, Compliant"

## 🏗️ Project Structure

```
SiteAI/
├── web/                          # Next.js application (existing)
├── web-portal/                   # Create React App for the actual Cursor platform
├── marketing-website/            # Marketing website for Cursor
└── README.md                     # This file
```

## 🚀 Quick Start

### 1. Marketing Website (Current Focus)
```bash
cd marketing-website
npm install
npm start
```
Access at: http://localhost:3000

### 2. Web Portal (Cursor Platform)
```bash
cd web-portal
npm install
npm start
```
Access at: http://localhost:3001

### 3. Existing Next.js App
```bash
cd web
npm run dev
```
Access at: http://localhost:3002

## 📋 Build Requirements & Instructions

### Phase 1: Marketing Website ✅ (COMPLETED)
- [x] Create marketing website structure
- [x] Implement Main Landing Page ("Why Cursor")
- [x] Add Tailwind CSS configuration
- [x] Create responsive design with brand messaging

**Files Created:**
- `marketing-website/src/pages/MainLanding.tsx` - Main landing page
- `marketing-website/package.json` - Dependencies and scripts
- `marketing-website/tailwind.config.js` - Tailwind configuration
- `marketing-website/postcss.config.js` - PostCSS configuration

### Phase 2: Web Portal Setup ✅ (COMPLETED)
- [x] Create web-portal directory structure
- [x] Implement Dockerfile with SPA fallback
- [x] Configure TypeScript with proper exclusions
- [x] Create productionMonitoring.ts with safe types
- [x] Set up package.json with CRA scripts
- [x] Create basic React app structure
- [x] Add docker-compose.yml service

**Files Created:**
- `web-portal/Dockerfile` - Multi-stage build with serve for SPA fallback
- `web-portal/tsconfig.json` - TypeScript configuration
- `web-portal/src/services/productionMonitoring.ts` - Safe monitoring service
- `web-portal/package.json` - CRA dependencies and scripts
- `web-portal/src/App.tsx` - Main application component
- `web-portal/src/index.tsx` - Entry point
- `docker-compose.yml` - Docker service configuration

### Phase 3: Core Cursor Platform Features (NEXT)
**Priority Order:**
1. **Unified Multi-Study Calendar** - The heart of Cursor
2. **User & Role Management** - Site Manager, PI, CRC/CTA, CRA roles
3. **Study & Protocol Management** - Protocol upload and parsing
4. **Visit Scheduling & Calendar Engine** - Visit date calculations and windows
5. **Subject Management** - Subject records and visit tracking
6. **Visit Execution & eSource Capture** - Digital checklists and evidence
7. **Notifications & Reminders** - SMS/email automation
8. **Supply & Equipment Tracking** - Inventory management
9. **Investigational Product (IP) Management** - Drug accountability
10. **Temperature Logging** - Daily monitoring with alerts
11. **Document Management** - eReg binder and regulatory files
12. **Monitoring & CRA Portal** - External monitor access
13. **Reporting & Analytics** - Site performance KPIs
14. **Audit Trail & Compliance** - 21 CFR Part 11 compliance

### Phase 4: Marketing Website Pages (NEXT)
1. **Features & Benefits Page** ("How Cursor Helps You") - Detailed feature breakdown
2. **Demo/Trial Signup Page** ("Get Started") - Conversion-focused landing page

### Phase 5: Backend Architecture (NEXT)
- **API-First Design** - REST/GraphQL APIs
- **Database Design** - PostgreSQL with proper indexing
- **Media & File Storage** - Encrypted object storage
- **Performance & Caching** - Redis for frequently accessed data
- **Background Workers** - Heavy task processing

### Phase 6: Integrations (FUTURE)
- **Calendar & Productivity Tools** - Outlook/Google Calendar sync
- **Communication Providers** - Twilio for SMS, SendGrid for email
- **Clinical Trial Platforms** - EDC/ePRO integration
- **CRM Integration** - Salesforce/HubSpot for lead management
- **Identity Providers** - SSO via SAML/OIDC

## 🎨 Design & UX Principles

### Brand Identity
- **Core Message**: Innovation, trust, and simplicity in clinical trial site management
- **Tone**: Professional yet approachable
- **Key Values**: Efficiency & Automation, Reliability & Compliance, Clarity & Ease of Use

### Design Principles
- **Minimalist Aesthetic** - Clean, uncluttered look with ample white space
- **Consistency** - Standardized buttons, icons, and fonts
- **Responsive & Accessible** - Mobile-first design with accessibility compliance
- **Focus on Functionality** - Design never trumps function
- **Intuitive Navigation** - Shallow navigation structure (1-2 levels deep)

## 🔒 Compliance Requirements

### 21 CFR Part 11 Compliance
- **Validation** - Documented software validation (IQ/OQ/PQ)
- **Security & Access Control** - Role-based access with password policies
- **Audit Trails** - Immutable logs for all regulated data changes
- **Electronic Signatures** - Part 11 compliant e-signatures
- **Data Integrity** - Write protections and backup systems

### Privacy & Security
- **HIPAA Compliance** - End-to-end encryption and secure data handling
- **SOC 2 Type II** - Enterprise-grade security and availability
- **Data Isolation** - Multi-tenant architecture with site segregation

## 🐳 Docker Deployment

### Build Commands
```bash
# Build web-portal image
docker compose build web-portal

# Run web-portal service
docker compose up -d web-portal

# Check status
docker compose ps
```

### Service Configuration
- **Port Mapping**: 3009:3000 (host:container)
- **Image**: epro-web-portal
- **Dependencies**: api-gateway (future)
- **Restart Policy**: unless-stopped

## 🧪 Testing & Quality Assurance

### TypeScript Configuration
- **Target**: ES2017
- **Strict Mode**: Enabled
- **Exclusions**: Tests, build artifacts, coverage reports
- **Safe Types**: Proper type guards and assertions

### Build Process
- **Development**: `npm start` (port 3001)
- **Production**: `npm run build` → Docker container
- **Testing**: `npm test` (Jest with React Testing Library)

## 📱 Target Audience

### Primary Users
- **Clinical Research Site Coordinators/Managers (CRCs)**
- **Site Directors and Principal Investigators (PIs)**
- **Clinical Research Associates (CRAs)**

### User Pain Points Addressed
- Multiple calendar management
- Manual task reminders
- Compliance documentation
- Supply inventory tracking
- Visit scheduling complexity
- Audit preparation

## 🎯 Success Metrics

### Site Performance KPIs
- **Visit Confirmation Rate**: Target ≥90%
- **Time Savings**: 5+ hours per week per coordinator
- **Error Reduction**: Digital validation and checklists
- **Compliance Score**: 21 CFR Part 11 and HIPAA adherence

## 🚧 Development Status

### Completed ✅
- [x] Project structure setup
- [x] Marketing website foundation
- [x] Web portal Docker configuration
- [x] TypeScript setup and configuration
- [x] Basic React app structure

### In Progress 🔄
- [ ] Main landing page content review
- [ ] Feature highlights implementation
- [ ] Compliance messaging refinement

### Next Up 📋
- [ ] Features & Benefits page
- [ ] Demo/Trial signup page
- [ ] Core platform development
- [ ] Backend architecture setup

## 📚 Resources

### Documentation
- **Playbook**: "Cursor Study Management Platform — Web & Backend Playbook (v0.1).pdf"
- **Brand Guidelines**: Section 1 of playbook
- **Technical Requirements**: Sections 6-8 of playbook

### External References
- [Navigating the Maze: The Daily Challenges of a Clinical Research Coordinator](https://www.proofpilot.com/blog/navigating-the-maze-the-daily-challenges-of-a-clinical-research-coordinator)
- [21 CFR 11 Compliance at Investigator Sites](https://www.appliedclinicaltrialsonline.com/view/21-cfr-11-compliance-investigator-sites)
- [Best Minimalist Website Examples](https://www.hostinger.com/tutorials/minimalist-website-examples)

## 🤝 Contributing

### Development Workflow
1. Create feature branch: `git checkout -b feature/feature-name`
2. Implement changes following design principles
3. Test with TypeScript compilation: `npm run build`
4. Commit with descriptive messages
5. Create pull request for review

### Code Standards
- **TypeScript**: Strict mode enabled
- **React**: Functional components with hooks
- **Styling**: Tailwind CSS with custom design tokens
- **Accessibility**: WCAG 2.1 AA compliance
- **Performance**: Optimized bundle sizes and lazy loading

## 📞 Support & Contact

For questions about the build process or technical implementation, refer to the playbook document or create an issue in the repository.

---

**Last Updated**: 2025-08-24  
**Version**: v0.1  
**Status**: Marketing Website Phase Complete, Core Platform Development Pending
