# Lambda Hack Basel

**Date:** Saturday, 18 April 2026
**Location:** Riehenstrasse 6/14, Basel
**Expected attendance:** ~5 participants
**Hosted by:** Lambda Biolab / Lamb Consulting

---

## Event name candidates

Pick one or riff on these:

- **Lambda Hack Basel** (clean, memorable, scalable to future editions)
- **LambdaHack #1** (signals it's a series)
- **Hack the Bench** (captures the wet lab + code crossover)
- **Basel Biohack** (geographic + identity)

## Tagline candidates

Your originals:

- "Automating the boring so you can do the brilliant"
- "From bench to bot, one tip at a time"
- "Science for the rest of us"

Additional ideas:

- "Where pipettes meet prompts"
- "Small lab, big ideas"
- "Garage science meets garage compute"
- "Four tracks. One basement. Zero gatekeeping."
- "Open bench. Open source. Open bar." (if you're providing drinks)
- "The CHF 0 hackathon that pharma doesn't want you to know about" (tongue-in-cheek)

---

## Tracks

### Track 1: Biology (Wet Lab)

**What participants get:**

- Cloning reagents, primer synthesis, enzymes (from Lambda Biolab stock)
- Access to BSL-1 lab space and equipment

**Prize:** 1 month free Lambda Biolab bench membership

- Winner featured on Lambda Biolab LinkedIn + Lamb Consulting socials
- Ask 1-2 attendees/judges to post about the event independently (organic reach > forced mentions)

**Project format:**

- Participants can enroll their own project by Thursday 16 April (cutoff)
- Antonio provides 3 suggested topics of interest (from ongoing human cell culture work)
- Open to participant-proposed projects (review by Wednesday to confirm reagent availability)

**Suggested topics from your work (pick 3):**

1. HEK293T/17 transfection optimization (you have the cell line and the egg incubator setup)
2. Cloning workflow for a gene of interest (use OpenCloning for design)
3. Antibiotic resistance cassette characterization (you have a good panel of antibiotics on hand)

**Judges:** Neutral third-party scientists from industry

- *Action item:* Reach out to contacts at Novartis, Roche, or Bachem. Even a single senior scientist adds credibility.
- *Backup:* Ask Kit Braybrooke (FHNW) or Shem (London Grow Lab guy who emailed you) if they'd serve remotely

---

### Track 2: Computational / IT

**What participants get:**

- Local compute time on "beast": 32-core i9-13900K, 192 GB DDR5, RTX 4090 24 GB
- Subscription credit to vast.ai for GPU rental

**Topics:**

1. AlphaFold2 or Boltz-2 structure prediction for novel drug targets (directly relevant to SP2TX work with Raghu)
2. Meta-harnessing / self-evolving harness (AI agent that iterates on its own evaluation framework)

**Judges:**

- Jonas (the person Andre met, confirm last name and affiliation)
- *Action item:* Andre to make the intro and confirm Jonas's availability by April 12

---

### Track 3: Hardware / Robotics

**What participants get:**

- 1 month free membership at Starship Factory (Klybeckstrasse 141, Basel)

**Topics:**

1. SO-101 general-purpose robotics build or integration
   - *Action item:* Contact Starship Factory (or Symbiont) about using their 3D printers for fast, low-quality prototype prints for parts

**Judges:**

- Patrick Machler or Claudius from Starship Factory
- *Action item:* Email Starship Factory (<pr@starship-factory.ch> or <open@lists.starship-factory.ch>) to confirm judge availability AND discuss partnership/cross-promotion

---

### Track 4: "Massage My Project" (BYOT)

**What participants get:**

- Free code review / architecture audit of their project
- 1 month free of Bolt or Vercel (Pro plan credit)

**Topics:**

- BYOT: Bring Your Own Topic
- Must be a coherent, existing project (not a new idea)
- Longevity, biotech, software, hardware: anything goes as long as they can demo progress

**Judges:**

- *Open position.* Options to consider:
  - Someone from the Basel startup ecosystem (BaselArea network, Startup Academy Basel, i4Challenge alumni)
  - A senior dev from a local company (Roche IT, Baloise, SBB digital)
  - Shem from London (remote judge, already expressed Lambda Biolab interest)
  - *Action item:* Post on LinkedIn asking for volunteer judges, frame it as visibility opportunity

---

## Logistics

### Venue layout

- **Riehenstrasse 6/14** covers both the basement lab (Lambda Biolab) and the apartment
- Wet lab track runs downstairs, computational tracks can run upstairs or in a shared area
- If Andre comes, he stays at Riehenstrasse (Lambda house)

### Timeline suggestion (single-day format)

| Time | Activity |
|------|----------|
| 09:00 | Doors open, coffee, setup |
| 09:30 | Welcome + track intros (15 min) |
| 10:00 | Hacking begins |
| 12:30 | Lunch break (keep it cheap: bakery run to Weil am Rhein or bulk prep something plant-based) |
| 13:30 | Resume hacking |
| 16:00 | Soft deadline: wrap up, prep demos |
| 16:30 | Demos + judging (5-7 min per team) |
| 17:30 | Results + prizes |
| 18:00 | Casual drinks / hangout |

### Food and drink

- Budget-friendly: bread, hummus, fruit, coffee, sparkling water
- Could do a grocery run to Weil am Rhein / Lorrach for supplies
- Consider asking participants to chip in CHF 5-10 for food, or sponsor it through Lamb Consulting as a marketing cost

### Equipment checklist

- Extension cords + power strips (5 people with laptops)
- Wi-Fi credentials printed/posted
- Whiteboard or flip chart for track coordination
- Lab PPE for wet lab track (gloves, coats, goggles)
- Spare keyboard/mouse for beast access

---

## Website

### Approach

- Use a DESIGN.md from VoltAgent/awesome-design-md as your design system reference for Claude Code
- Build a single-page site with: event info, 4 track descriptions, registration form, schedule
- Deploy on Vercel (you already have an account)
- Use the DeepVariant ARM64 fork page structure as a template for layout + registration flow

### Registration

- Simple form: name, email, track preference, own project (Y/N + description if BYOT)
- Deadline: Thursday 16 April
- Cap at ~8-10 to keep it intimate (you said 5 expected, leave room)

### Domain ideas

- lambdahack.ch (if available)
- hack.lambconsulting.bio (subdomain, free)
- lambdabiolab.com/hack (path-based, also free)

---

## Marketing plan

### Platforms and timing

Launch week of April 7 (this week). You have 10 days.

| Platform | Action | Deadline |
|----------|--------|----------|
| **Luma** | Create event page (primary RSVP). Luma has a Basel/Zurich community calendar. Submit to "Basel" or "Zurich" community for organic reach | April 9 |
| **LinkedIn** | Post announcement + create LinkedIn Event. Tag Lambda Biolab, Starship Factory, BaselArea. Use the tagline. | April 9 |
| **Meetup** | Post event on "Starship Factory - your Makerspace in Basel" group (they already exist on Meetup). Also check for Basel tech/biotech Meetup groups | April 10 |
| **BaselArea** | Email <info@baselarea.swiss> asking to feature the event on their curated events page. Position it as Basel life sciences + tech ecosystem activity | April 10 |
| **basel.com** | Submit to the Basel cultural events calendar at basel.com/en/events | April 10 |
| **Eventbrite** | Optional secondary listing for discoverability | April 11 |
| **Kit Braybrooke / FHNW** | Ask Kit to share with the FHNW network (she already referred Shem to you) | April 10 |
| **Shem** | Reply to his email, invite him to attend or judge remotely | April 9 |

### LinkedIn post draft direction

Keep it informal and scrappy. Lean into the "basement lab" origin story. Something like:

> Hosting the first Lambda Hack Basel on April 18.
> Four tracks: wet lab biology, computational bio, hardware/robotics, and BYOT (bring your own topic).
> It's small, it's scrappy, and it's happening in a basement in Basel.
> [tagline]
> Free to attend. Link to register: [Luma link]

---

## Open questions and action items

### This week (by April 11)

- [ ] Confirm event name and tagline
- [ ] Set up Luma event page
- [ ] Build and deploy website (Claude Code + DESIGN.md approach)
- [ ] Reply to Shem, invite to participate or judge
- [ ] Andre to confirm Jonas as IT track judge
- [ ] Email Starship Factory about judge + 3D printing partnership
- [ ] Post LinkedIn announcement
- [ ] Email BaselArea for event listing

### By April 14

- [ ] Confirm all judges (at least 1 per track, or 2 shared judges for smaller event)
- [ ] Finalize 3 biology track topics
- [ ] Post on Meetup + other platforms
- [ ] Confirm vast.ai credit amount for IT track prize
- [ ] Confirm Bolt/Vercel credit for BYOT track prize

### By April 16 (registration deadline)

- [ ] Review registrations, confirm reagent needs for bio track
- [ ] Buy groceries for event day
- [ ] Test beast setup: ensure remote access works for IT track participants
- [ ] Print schedule + Wi-Fi credentials

---

## Things to consider

**Scale expectations.** 5 people is intimate, which is actually ideal for a first edition. Don't over-invest in production. The scrappiness IS the brand. If it goes well, Lambda Hack #2 can be bigger.

**Judge logistics.** With 4 tracks and ~5 people, you might only have 1-2 projects per track. Consider having 2 judges cover all tracks rather than finding 4 separate judges. Reduces coordination overhead significantly.

**Intellectual property.** For the bio and IT tracks, consider a brief statement that participants retain IP on their projects. This is especially relevant for the AlphaFold/Boltz-2 track if results could feed into SP2TX work. Keep it clean.

**Documentation.** Take photos (with consent). A good recap post with photos gets more traction than the announcement post. Ask a participant to write a short testimonial after.

**Shem as collaborator.** He runs Grow Lab in London, has overlapping interests. A remote judge role or even a lightning talk about his lab could be a nice cross-pollination moment. Low effort, high signal.

**Cross-promo with Starship Factory.** They're a natural partner. Offering their membership as a prize builds the relationship. Ask if they'd co-host or at least cross-post.
