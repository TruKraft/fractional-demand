# Multi-Page Website Conversion Outline

Based on "Website Copy for Reference.md", this document outlines all tasks needed to convert the single-page site to a multi-page website.

---

## 1. NAVIGATION STRUCTURE CHANGES

### 1.1 Update Nav Component (`components/Nav.tsx`)
**Current:** Simple links to hash sections (#why-us, #services, #about-us)

**New Structure Required:**
- **Home** → `/` (home page)
- **Services** (dropdown menu):
  - Fractional Head of Marketing → `/services/fractional-head-of-marketing`
  - Fractional Paid Media → `/services/fractional-paid-media`
  - *(Note: Document mentions 4 services but only 2 are detailed - need to confirm: Fractional RevOps and Email/Lifecycle Marketing)*
- **How We Work** → `/how-we-work`
- **Resources** (dropdown menu):
  - Blog → `/resources/blog` or `/blog`
- **About** → `/about`
- **Let's Talk** (CTA button) → Calendly link: `https://calendly.com/fractionaldemand/30min`

**Implementation Tasks:**
- Add dropdown menu functionality for Services and Resources
- Update mobile drawer to support nested navigation
- Ensure dropdowns are keyboard accessible
- Add proper ARIA attributes for dropdown menus
- Maintain current styling (backdrop blur, energy effects)

---

## 2. NEW PAGES TO CREATE

### 2.1 Home Page (`app/page.tsx`)
**Status:** Exists but needs complete restructure

**New Sections Required:**
1. **Section 1 / Hero**
   - H1: "Get a GTM Team That Builds Pipeline Fast."
   - Sub copy: "Fractional Demand is a Go-To-Market Partner that embeds senior operators across strategy, paid media, RevOps, and lifecycle to build and run a demand system that accelerates pipeline, without the overhead of a full team."

2. **Section 2 / Social Proof + Trust**
   - Headline: "Trusted by B2B teams who can't afford to miss their number."
   - Scrolling logos (reuse existing `LogosStrip` component, may need to fetch current logos)

3. **Section 3**
   - Headline: "You're not shopping for an agency. You're choosing your GTM team."
   - Sub copy: "Your real decision: hire a full-time head of marketing and team, or plug in a fractional GTM team that's already built."
   - Visual: Reference code from `https://new-job-survival-kit-gwa6.bolt.host/philip-brown` (may need color scheme adjustments)

4. **Section 4 - Fractional DemandOS**
   - Headline: "Fractional DemandOS: The Operating System Behind Your Pipeline"
   - Sub copy: "Our proven Fractional Demand Operating System connects positioning, messaging, paid media, and RevOps into one repeatable GTM system"
   - Three-column layout:
     - **Build** (with iconography): Brand positioning, messaging, ICP development, offer development, tracking & measurement, and GTM strategy.
     - **Run** (with iconography): Operate the system, launch campaigns, refine offers and messaging, run weekly experiments, align with sales, and optimize the full funnel.
     - **Scale** (with iconography): Expand channels, increase budgets, multiply winning plays, deepen lifecycle & RevOps automation, and turn the GTM engine into a predictable revenue machine.

5. **Section 5 - Service Cards (Flip Cards)**
   - Headline: "Plug in the senior help you actually need"
   - Sub copy: "One partner, four offerings—all run by experienced operators."
   - **Card 1: Fractional Paid Media**
     - Side A: Header + "LinkedIn, Meta, Google, X, Reddit"
     - Side B: Benefits list
   - **Card 2: Fractional Head of Marketing**
     - Side A: Header + "Hands on keyboard marketing lead"
     - Side B: Benefits list
   - **Card 3: Fractional RevOps**
     - Side A: Header + "HubSpot + GTM Engineering"
     - Side B: Benefits list
   - **Card 4: Email / Lifecycle Marketing**
     - Side A: Header + "Nurtures that actually move pipeline"
     - Side B: Benefits list
   - **Implementation:** Need to create flip card component with hover effect

6. **Section 6 - Customer Stories**
   - Headline: "Customer Stories"
   - Reference design from Refine Labs (bottom of their site)
   - Three testimonials with photos:
     - Zena from Merge
     - Blake from Digioh
     - Kate from Incident.io
   - **Note:** Need LinkedIn profile pics for these people

7. **Section 7 - CTA**
   - Headline: "Ready to Get Started?"
   - CTA: "Let's Talk" → Calendly link

**Tasks:**
- Remove/replace existing sections (WhyUs, WhyNeedUs, Services, Bios, Scheduler)
- Create new section components
- Create flip card component
- Create DemandOS three-column component
- Update testimonials component
- Add metadata for SEO

---

### 2.2 Services Pages

#### 2.2.1 Fractional Paid Media (`app/services/fractional-paid-media/page.tsx`)
**New Page**

**Sections:**
1. **Hero**
   - Headline: "Paid Media That Actually Drives Pipeline"
   - Sub copy: "Senior performance marketers embedded directly into your team to run LinkedIn, Meta, Google, X, and Reddit with a demand system built to generate qualified pipeline."
   - CTA: "Book a Paid Media Audit" (Calendly)

2. **Section 1**
   - Headline: "Most paid media programs fail because they're built on activity, not strategy."
   - Bullet points about what you need

3. **Section 2 - What's Included?**
   - Headline: "What's Included?"
   - Sub copy: "Clear ownership. Senior talent. Pipeline-focused execution."
   - Three subsections:
     - Strategy + Foundations (list)
     - Execution + Optimization (list)
     - Measurement + Attribution (list)

4. **Section 3 - Process**
   - Headline: "Our Paid Media Process"
   - Four steps: Diagnose, Build, Run & Optimize, Scale

5. **Section 4 - Testimonials**
   - Headline: "Some of Our Biggest Fans"
   - Reuse testimonials from home page

6. **Section 5 - FAQ**
   - Headline: "Frequently Asked Questions"
   - 6 Q&A pairs

7. **Section 6 - Final CTA**
   - Headline: "Ready to Scale Pipeline with Paid Media?"
   - Sub copy + CTA: "Book a Paid Media Audit"

**Tasks:**
- Create page structure
- Create reusable FAQ component
- Add metadata

---

#### 2.2.2 Fractional Head of Marketing (`app/services/fractional-head-of-marketing/page.tsx`)
**New Page**

**Sections:**
1. **Hero**
   - Headline: "Fractional Head of Marketing That Builds GTM Momentum Fast."
   - Sub copy + CTA: "Book a Strategy Session"

2. **Section 1**
   - Headline: "Most marketing teams aren't missing effort—they're missing experienced leadership."
   - Sub copy + bullet points

3. **Section 2 - What's Included?**
   - Headline: "Strategic leadership. Hands-on execution. Full-funnel ownership."
   - Four subsections:
     - GTM Strategy & Leadership
     - Campaigns & Execution (Hands-on keyboard)
     - Funnel, Analytics & Measurement
     - Embedded Partnership

4. **Section 3 - DemandOS System**
   - Headline: "Our DemandOS System"
   - Four steps: Diagnose, Build, Run & Optimize, Scale

5. **Section 4 - Sample Plays**
   - Headline: "Sample Plays We Run"
   - Bullet list of plays

6. **Section 5 - Testimonials**
   - Reuse from home page

7. **Section 6 - FAQ**
   - 6 Q&A pairs

8. **Section 7 - Final CTA**
   - Headline: "Ready to Add Instant GTM Leadership?"
   - CTA: "Book a Strategy Session"

**Tasks:**
- Create page structure
- Reuse FAQ component
- Add metadata

---

#### 2.2.3 Fractional RevOps (`app/services/fractional-revops/page.tsx`)
**New Page**

**Status:** Document mentions this service in home page cards but no dedicated page content provided. Need to confirm if this page should be created or if it's just mentioned in the services overview.

**If Created:**
- Would follow similar structure to other service pages
- Need content from client

---

#### 2.2.4 Email / Lifecycle Marketing (`app/services/email-lifecycle-marketing/page.tsx`)
**New Page**

**Status:** Document mentions this service in home page cards but no dedicated page content provided. Need to confirm if this page should be created.

**If Created:**
- Would follow similar structure to other service pages
- Need content from client

---

### 2.3 How We Work Page (`app/how-we-work/page.tsx`)
**New Page**

**Sections:**
1. **Hero**
   - Headline: "How We Work: The DemandOS System"
   - Sub copy + Primary CTA: "Let's Talk"

2. **Section 1 - Why DemandOS Exists**
   - Headline: "Strategy without execution breaks. Execution without strategy burns money. You need a GTM system that connects both strategy and execution."
   - Sub copy + problem list

3. **Section 2 - The DemandOS Framework**
   - Headline: "The DemandOS System"
   - Three-column layout: Build → Run → Scale
   - Each column has description + outcome

4. **Section 3 - What DemandOS Includes**
   - Headline: "What DemandOS Actually Covers"
   - Five cards/icon grid:
     - Positioning & Messaging
     - Paid Media & Demand
     - RevOps Infrastructure
     - Lifecycle & Nurtures
     - Campaigns & Content

5. **Section 4 - The DemandOS Engagement Model**
   - Headline: "Here's What Working With Us Looks Like"
   - Four steps: Kickoff + GTM Audit, Build, Run, Scale
   - Each step has deliverables/activities

6. **Section 5 - Why DemandOS Works**
   - Headline: "Why Teams Choose Fractional DemandOS"
   - Five benefits (numbered list)

7. **Section 6 - What Success Looks Like**
   - Headline: "What Happens When Your GTM Works Like a System"
   - Bullet list of outcomes

8. **Section 7 - Final CTA**
   - Headline: "Ready to Install Your DemandOS?"
   - CTA: "Book a DemandOS Session"

**Tasks:**
- Create page structure
- Create three-column layout component
- Create icon grid/card component
- Add metadata

---

### 2.4 Resources/Blog Page (`app/resources/blog/page.tsx` or `app/blog/page.tsx`)
**New Page**

**Requirements:**
- Port over existing blog content from `https://www.fractionaldemand.com/blog`
- Set up blog structure for future posts
- Create blog listing page
- Create individual blog post pages (dynamic route: `app/blog/[slug]/page.tsx`)

**Tasks:**
- Determine blog structure (markdown files? CMS?)
- Create blog listing component
- Create blog post template
- Migrate existing blog posts
- Add metadata for SEO
- Set up RSS feed if needed

**Future State:**
- Resources should be a dropdown with "Blog" as first item
- Other resource types can be added later

---

### 2.5 About Page (`app/about/page.tsx`)
**New Page**

**Requirements:**
- Headline: "Meet the Team Behind Fractional Demand"
- Reuse existing bios from current site (`components/Bios.tsx`)
- Add new team member bios (need content from client)

**Tasks:**
- Create page structure
- Update Bios component if needed
- Add new team member data
- Add metadata

---

## 3. FOOTER CHANGES

### 3.1 Update Footer Component (`components/Footer.tsx`)
**Current:** Simple footer with logo, links, and copyright

**New Requirements:**
- **Careers** link → `/careers` (or modal with form)
- **Privacy** link → `/privacy-policy` (already exists, may need to verify content matches reference)
- **Contact** link → Calendly: `https://calendly.com/fractionaldemand/30min`

**Tasks:**
- Add Careers link
- Verify Privacy Policy page content matches reference
- Update Contact link to Calendly
- Maintain current styling

---

## 4. NEW COMPONENTS TO CREATE

### 4.1 Flip Card Component (`components/FlipCard.tsx`)
**Purpose:** Service cards that flip on hover to reveal details

**Features:**
- Two sides (Side A and Side B)
- Hover animation to flip
- Accessible (keyboard navigation, screen readers)
- Responsive design
- Energy border styling (optional)

**Usage:** Home page Section 5

---

### 4.2 DemandOS Three-Column Component (`components/DemandOSColumns.tsx`)
**Purpose:** Reusable three-column layout for Build/Run/Scale

**Features:**
- Three columns with icons
- Responsive (stacks on mobile)
- Consistent styling
- Reusable across pages

**Usage:** Home page Section 4, How We Work page Section 2

---

### 4.3 Testimonials Component (`components/Testimonials.tsx`)
**Purpose:** Reusable testimonials section

**Features:**
- Display multiple testimonials
- Include photos (LinkedIn profile pics)
- Reference Refine Labs design
- Responsive layout

**Usage:** Home page Section 6, Service pages

---

### 4.4 FAQ Component (`components/FAQ.tsx`)
**Purpose:** Reusable FAQ section

**Features:**
- Accordion-style expandable Q&A
- Accessible (keyboard navigation, ARIA)
- Consistent styling
- Reusable across pages

**Usage:** Service pages

---

### 4.5 Process Steps Component (`components/ProcessSteps.tsx`)
**Purpose:** Display multi-step processes

**Features:**
- Numbered or labeled steps
- Visual timeline/flow
- Responsive design

**Usage:** Service pages, How We Work page

---

### 4.6 Icon Grid Component (`components/IconGrid.tsx`)
**Purpose:** Display services/features in grid with icons

**Features:**
- Grid layout with icons
- Responsive (adjusts columns based on screen size)
- Consistent icon styling

**Usage:** How We Work page Section 3

---

### 4.7 Careers Form Component (`components/CareersForm.tsx`)
**Purpose:** Simple form for careers page

**Features:**
- Form fields (name, email, message, resume upload)
- Email to: jordan@fractionaldemand.com + gavin@fractonaldemand.com
- File upload for resume (if not too complex)
- Validation
- Success/error states

**Usage:** Careers page or modal

---

## 5. EXISTING COMPONENTS TO MODIFY

### 5.1 Nav Component (`components/Nav.tsx`)
- Add dropdown menu functionality
- Update navigation links
- Support nested navigation in mobile drawer
- Maintain accessibility

### 5.2 Hero Component (`components/Hero.tsx`)
- Update headline and sub copy
- Maintain current styling and animations

### 5.3 Footer Component (`components/Footer.tsx`)
- Add Careers link
- Update Contact link
- Verify Privacy link

### 5.4 Bios Component (`components/Bios.tsx`)
- May need updates for new team members
- Ensure responsive design

---

## 6. CONTENT MIGRATION TASKS

### 6.1 Blog Content
- Fetch existing blog posts from current site
- Determine format (markdown, JSON, CMS)
- Create blog post template
- Migrate all posts
- Set up blog listing page

### 6.2 Privacy Policy
- Verify current `/privacy-policy` page content
- Update if needed to match reference

### 6.3 Team Bios
- Keep existing bios
- Add new team member bios (need from client)
- Update Bios component if needed

### 6.4 Logos
- Confirm existing logos can be extracted from current site
- Add new logos (client will provide)
- Update LogosStrip component

---

## 7. ROUTING & METADATA

### 7.1 New Routes to Create
- `/services/fractional-paid-media`
- `/services/fractional-head-of-marketing`
- `/services/fractional-revops` (if needed)
- `/services/email-lifecycle-marketing` (if needed)
- `/how-we-work`
- `/resources/blog` or `/blog`
- `/about`
- `/careers` (if separate page)

### 7.2 Metadata for Each Page
- Title (with template: "%s | Fractional Demand")
- Description
- Open Graph tags
- Twitter cards
- Canonical URLs

### 7.3 Sitemap Updates (`app/sitemap.ts`)
- Add all new pages
- Ensure proper priority and change frequency

---

## 8. DESIGN & STYLING TASKS

### 8.1 Visual Elements Needed
- Icons for DemandOS columns (Build, Run, Scale)
- Icons for service cards
- Icons for How We Work section
- LinkedIn profile photos for testimonials
- Visual reference from Refine Labs for testimonials section
- Visual reference from new-job-survival-kit for Section 3

### 8.2 Color Scheme Adjustments
- May need to adjust colors for Section 3 visual
- Maintain brand consistency

### 8.3 Responsive Design
- Ensure all new pages are mobile-responsive
- Test dropdown menus on mobile
- Test flip cards on touch devices
- Ensure all components work on all breakpoints

---

## 9. ACCESSIBILITY TASKS

### 9.1 Navigation
- Keyboard navigation for dropdowns
- ARIA attributes for menu states
- Focus management

### 9.2 Interactive Components
- Flip cards: keyboard accessible, screen reader friendly
- FAQ accordions: proper ARIA
- Forms: proper labels and validation messages

### 9.3 Content
- Proper heading hierarchy
- Alt text for all images
- Descriptive link text

---

## 10. QUESTIONS FOR CLIENT

### 10.1 Content Questions
1. Do we need dedicated pages for Fractional RevOps and Email/Lifecycle Marketing, or just mention them on home page?
2. Can you provide LinkedIn profile photos for Zena (Merge), Blake (Digioh), and Kate (Incident.io)?
3. Can you provide bios for new team members?
4. Can you provide the new logos to add to the scrolling strip?
5. What format should blog posts be in? (markdown, JSON, CMS?)

### 10.2 Design Questions
1. For Section 3 visual, should we use the exact code from the reference site or adapt it?
2. What color scheme should we use for Section 3 visual if adapting?
3. For testimonials, should we match Refine Labs design exactly or adapt to our brand?
4. What icons should we use for DemandOS columns and service cards?

### 10.3 Technical Questions
1. Should blog be at `/resources/blog` or `/blog`?
2. Should careers be a separate page or a modal?
3. For resume uploads in careers form, is file upload complexity acceptable?
4. Should we set up a CMS for blog posts or use markdown files?

---

## 11. IMPLEMENTATION PRIORITY

### Phase 1: Foundation
1. Update navigation structure
2. Create new page routes
3. Update home page structure
4. Create reusable components (FlipCard, FAQ, Testimonials, etc.)

### Phase 2: Service Pages
1. Fractional Paid Media page
2. Fractional Head of Marketing page
3. Confirm if other service pages needed

### Phase 3: Supporting Pages
1. How We Work page
2. About page
3. Resources/Blog page

### Phase 4: Polish
1. Footer updates
2. Careers form/page
3. Content migration
4. SEO optimization
5. Accessibility audit
6. Responsive testing

---

## 12. ESTIMATED COMPLEXITY

### High Complexity
- Flip card component with hover animations
- Blog system setup and content migration
- Dropdown navigation with mobile support
- Careers form with file upload

### Medium Complexity
- New page structures
- DemandOS components
- FAQ component
- Process steps component

### Low Complexity
- Content updates
- Footer changes
- Metadata additions
- Route creation

---

This outline provides a comprehensive roadmap for converting the single-page site to a multi-page website. All tasks should be completed while maintaining the existing design system, accessibility standards, and brand consistency.

