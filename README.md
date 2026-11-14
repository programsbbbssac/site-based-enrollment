# Lunch Buddies Mentor Checklist

A step-by-step checklist for people becoming Lunch Buddies mentors ("Bigs") with Big Brothers Big Sisters of the Greater Sacramento Area. Lunch Buddies is BBBS’s site-based mentoring program for elementary students. It works in English and Spanish and is built for phones. The steps follow the applicant email BBBS sends and the Site-Based Big Process flyer. The look (colors, logo, line pattern, the four program highlights) comes from the Lunch Buddies flyer.

This site is only for **site-based** enrollment through Lunch Buddies. Community-based enrollment uses a separate tool and is not part of this project.

## What this site does and doesn't do

- It explains each step and links to the real form or resource.
- It does **not** collect, send or store any applicant information. Checkmarks are saved only in the applicant's own browser, on their own device.
- Matchforce/Salesforce is still the official record. A checkmark here does not mean BBBS has received anything.
- No login, no tracking, no analytics, no outside scripts.

## Privacy rules for this repository

This repository is **public**. Anyone on the internet can read every file.

- Never add participant names, emails, phone numbers, notes, or screenshots.
- Never add passwords or API keys.
- Only use the public, blank version of each form. Don't paste a link copied from inside a filled-out form or from an email sent to one person: those can contain personal tokens.
- Links copied from Outlook often start with `urldefense.com` or `safelinks.protection.outlook.com`. Those are email-security wrappers and can carry personal data. Use the real address inside them. (The page hides wrapped links automatically and shows "Link coming soon" instead.)

## How to change words or links

Everything people read on the page is in **`steps.js`**. You can edit it right on GitHub:

1. Open `steps.js` in this repository.
2. Click the pencil icon (Edit this file).
3. Change only the text between the "quote marks".
4. Click **Commit changes**, add a short note about what you changed, and commit to `main`.
5. Wait a few minutes, then reload the live site to check. Browsers can keep the old version for up to 10 minutes.

### Adding a link

Find the step and replace `COMING SOON` with the full address, starting with `https://`:

```js
link: "https://bbbs.tfaforms.net/1234567",
```

- `"COMING SOON"` shows "Link coming soon" on the page.
- `""` (empty) shows no link at all, for steps that don't need one.
- If a Spanish version of the form exists, put it in `linkEs`. Spanish readers will get that one instead.
- `englishOnly: true` tells Spanish readers the form is only in English. Change it to `false` once a Spanish version exists.

### Editing the program description and the four highlight tiles

The "What is Lunch Buddies?" text is `aboutText` in the `ui` section of `steps.js`. The four tiles under it are the `highlights` list. Each tile has an `icon` (`people`, `calendar`, `chat` or `school`) and English and Spanish text.

### Editing common questions

The `faq` list at the bottom of `steps.js` holds the questions and answers shown above the contact section. Copy a block to add one. Delete every block to hide the section.

### Adding, removing or reordering steps

- Steps show in the order they appear in `steps.js`. To reorder, move a whole step block (from `{` to `},`).
- To add a step, copy an existing block, paste it where you want it, and give it a new, unique `id` (lowercase, dashes, no spaces).
- Each step's `stage` must exactly match one of the stage ids at the top (`lunch-and-learn`, `application`, `interview`, `welcome`, `orientation`, `launch-day`). If it doesn't match, the step won't show.
- **Don't change a step's `id` after launch.** People's saved checkmarks are tied to it.
- If order matters, say so in the `when` line (for example, "After your interview").

### If the page breaks after an edit

The most common causes:

- A missing comma at the end of a line, or a missing quote mark.
- "Curly quotes" pasted from Word or Google Docs around a value. Use straight quotes `"` around values.

Open the file's **History**, compare with the last version that worked, and fix the line. You can always revert to the previous version.

## Spanish review (required before launch)

The Spanish text in `steps.js` is a first draft. A bilingual staff member must review **all** of it before launch, with special care for anything marked `SPANISH REVIEW: legal` (background checks, Live Scan, the sex offender registry check, mandated reporting, TB testing, the Code of Conduct, consent). When done, update the note at the top of `steps.js` with who reviewed it and when.

## Changing colors, logo and fonts

All colors are in the first block of `styles.css`. They were picked from the Lunch Buddies flyer (green `#0a714e`, mint `#00fb87`, black).

- The logo is `assets/bbbs-logo.png`, taken from the flyer. To use a sharper official file, replace it with a PNG of the same name (white logo on a transparent background, at least 700 pixels wide).
- `assets/pattern.svg` is the flyer's line pattern and `assets/hero-lines.svg` is the faint version in the header.
- The headline font uses condensed fonts already on people's devices (Avenir Next Condensed on iPhone, Roboto Condensed on Android), so nothing loads from outside. If BBBS has official brand font files, add them to the repo and list them first in `--font-display`.
- Don't add photos of students without signed photo releases. This site is public. Text colors must keep at least a 4.5:1 contrast ratio with their background. Check at <https://webaim.org/resources/contrastchecker/>.

## Turning on the website (GitHub Pages)

1. In this repository, go to **Settings → Pages**.
2. Under **Build and deployment**, set Source to **Deploy from a branch**.
3. Choose branch **main** and folder **/ (root)**, then **Save**.
4. After a minute or two, the site will be at `https://programsbbbssac.github.io/site-based-enrollment/`.

## Before launch checklist

- [ ] Every `COMING SOON` link replaced (or changed to `""` if not needed)
- [ ] Interview booking link: it's Marco Ramos's Microsoft Bookings page. Confirm he's fine with it being public, or swap in a shared team booking page so the link doesn't break if staffing changes
- [ ] Spanish text reviewed by bilingual staff
- [ ] Contact phone number added, or left empty on purpose
- [ ] Brand colors and logo approved
- [ ] Tested on an iPhone and an Android phone, in both languages
- [ ] Tested with a screen reader (VoiceOver on iPhone or TalkBack on Android)

## Files

| File | What it is | Edit it? |
|---|---|---|
| `steps.js` | All words, links and contact info, in English and Spanish | Yes |
| `styles.css` | Colors and layout | Colors only, usually |
| `index.html` | Page structure. After changing `app.js` or `styles.css`, raise the `?v=` number on their links here so visitors get the new files | Rarely |
| `app.js` | Builds the page, saves checkmarks | No |
| `assets/` | Logo and the flyer's line pattern | Replace files only |
| `.nojekyll` | Tells GitHub Pages to serve files as they are | No |
