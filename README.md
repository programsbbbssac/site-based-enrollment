# Site-Based Mentoring Checklist

A website that helps people become site-based mentors ("Bigs") with Big Brothers Big Sisters of the Greater Sacramento Area. It works in English and Spanish and is built for phones.

- **Home page:** a short quiz that suggests a program, plus a card for every program.
- **Program pages:** a step-by-step checklist for each program. Steps open one at a time, in order.

Programs: **Lunch Buddies**, **Level Up!**, **Big Futures** and **High School Bigs**. Program descriptions come from each program's flyer.

Live site: `https://programsbbbssac.github.io/site-based-enrollment/`

Community-based enrollment uses a separate tool and is not part of this project.

## What this site does and doesn't do

- It explains each step and links to the real form or resource.
- It does **not** collect, send or store any applicant information. Checkmarks and quiz answers stay in the person's own browser, on their own device.
- Matchforce/Salesforce is still the official record. A checkmark here does not mean BBBS has received anything.
- No login, no tracking, no analytics, no outside scripts.

## Links to share

| Page | Address |
|---|---|
| Home (quiz and all programs) | `https://programsbbbssac.github.io/site-based-enrollment/` |
| Lunch Buddies | `...?program=lunch-buddies` |
| Level Up! | `...?program=level-up` |
| Big Futures | `...?program=big-futures` |
| High School Bigs | `...?program=high-school-bigs` |

Add `&lang=es` to open any page in Spanish (for example on a Spanish flyer's QR code): `...?program=lunch-buddies&lang=es`. On the home page, use `?lang=es`.

## Privacy rules for this repository

This repository is **public**. Anyone on the internet can read every file.

- Never add participant names, emails, phone numbers, notes, or screenshots.
- Never add passwords or API keys.
- Only use the public, blank version of each form. Don't paste a link copied from inside a filled-out form or from an email sent to one person: those can contain personal tokens.
- Links copied from Outlook often start with `urldefense.com` or `safelinks.protection.outlook.com`. Those are email-security wrappers and can carry personal data. Use the real address inside them. (The page hides wrapped links automatically and shows "Link coming soon" instead.)
- Don't add photos of students without signed photo releases.

## How to change words or links

Everything people read on the site is in **`steps.js`**. You can edit it right on GitHub:

1. Open `steps.js` in this repository.
2. Click the pencil icon (Edit this file).
3. Change only the text between the "quote marks".
4. Click **Commit changes**, add a short note about what you changed, and commit to `main`.
5. Wait a few minutes, then reload the live site to check. Browsers can keep the old version for up to 10 minutes.

`steps.js` has four parts, in this order: **contact**, **ui** (buttons and labels), **quiz**, and **programs** (one block per program). Each program block has its description, highlight tiles, stages, steps and common questions.

### Adding a link

Find the step and replace `COMING SOON` with the full address, starting with `https://`:

```js
link: "https://bbbs.tfaforms.net/1234567",
```

- `"COMING SOON"` shows "Link coming soon" on the page.
- `""` (empty) shows no link at all, for steps that don't need one.
- If a Spanish version of the form exists, put it in `linkEs`. Spanish readers will get that one instead.
- `englishOnly: true` tells Spanish readers the form is only in English. Change it to `false` once a Spanish version exists.

### Draft programs

Level Up!, Big Futures and High School Bigs have `draft: true`. Their steps were drafted from the Lunch Buddies process and the flyers, and their pages show a note asking people to email us before they start. When staff confirm a program's steps, change it to `draft: false`.

### Adding, removing or reordering steps

- Steps open one at a time, in the order they appear in that program's `steps` list. To reorder, move a whole step block (from `{` to `},`).
- To add a step, copy an existing block, paste it where you want it, and give it a new `id` that is unique within that program (lowercase, dashes, no spaces).
- Each step's `stage` must exactly match one of that program's stage ids. If it doesn't match, the step won't show.
- **Don't change a step's `id` or a program's `id` after launch.** Saved checkmarks and shared links use them.
- A step that only applies to some people (for example parent permission for High School Bigs) should say "If it doesn't apply to you, check this step off," since steps can't be skipped.

### Changing the quiz

The `quiz` section has the questions and answers. Each answer does one of three things:

- `result: "high-school-bigs"` ends the quiz with that program.
- `only: ["level-up", "big-futures"]` keeps only those programs as options. If one is left, the quiz ends there.
- `points: { "big-futures": 2 }` adds points. The program with the most points wins.

The quiz is only a suggestion. Every program is always listed on the home page.

### If the page breaks after an edit

The most common causes:

- A missing comma at the end of a line, or a missing quote mark.
- "Curly quotes" pasted from Word or Google Docs around a value. Use straight quotes `"` around values.

Open the file's **History**, compare with the last version that worked, and fix the line. You can always revert to the previous version.

## Spanish review (required before launch)

The Spanish text in `steps.js` is a first draft. A bilingual staff member must review **all** of it before launch, with special care for anything marked `SPANISH REVIEW: legal` (background checks, Live Scan, the sex offender registry check, mandated reporting, TB testing, the Code of Conduct, parent permission, consent). When done, update the note at the top of `steps.js` with who reviewed it and when.

## Changing colors, logo and fonts

- Colors are in the first two blocks of `styles.css`: the site colors, then one **theme** per program (`green` for Lunch Buddies and the home page, `light` for Level Up!, `forest` for Big Futures, `charcoal` for High School Bigs). They were picked from the flyers.
- The logo is `assets/bbbs-logo.png`, taken from a flyer. To use a sharper official file, replace it with a PNG of the same name (white logo on a transparent background, at least 700 pixels wide).
- `assets/pattern.svg` is the flyers' line pattern. `assets/hero-lines.svg` and `assets/hero-lines-dark.svg` are the faint versions in the headers.
- The headline font uses condensed fonts already on people's devices, so nothing loads from outside. If BBBS has official brand font files, add them to the repo and list them first in `--font-display`.
- After changing `styles.css`, `steps.js` or `app.js`, raise the `?v=` number on their links in `index.html` so visitors get the new files.

## Turning on the website (GitHub Pages)

Already on. For reference: **Settings → Pages**, Source **Deploy from a branch**, branch **main**, folder **/ (root)**.

## Before launch checklist

- [ ] Every `COMING SOON` link replaced (or changed to `""` if not needed)
- [ ] Big Futures and High School Bigs application links confirmed
- [ ] High School Bigs parent permission form link
- [ ] Steps for Level Up!, Big Futures and High School Bigs confirmed, then `draft: false`
- [ ] Interview booking link: confirm it's fine to keep it public, or use a shared team booking page
- [ ] Spanish text reviewed by bilingual staff
- [ ] Contact phone number added, or left empty on purpose
- [ ] Brand colors and logo approved
- [ ] Tested on an iPhone and an Android phone, in both languages
- [ ] Tested with a screen reader (VoiceOver on iPhone or TalkBack on Android)

## Files

| File | What it is | Edit it? |
|---|---|---|
| `steps.js` | All words, links, quiz and programs, in English and Spanish | Yes |
| `styles.css` | Colors and layout | Colors only, usually |
| `index.html` | Page structure. Raise the `?v=` numbers after changing other files | Rarely |
| `app.js` | Builds the pages, runs the quiz, saves checkmarks | No |
| `assets/` | Logo and the flyers' line pattern | Replace files only |
| `.nojekyll` | Tells GitHub Pages to serve files as they are | No |
