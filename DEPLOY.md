Steps to deploy this portfolio to GitHub Pages

1. Rename your report files to `bao-cao-tuan-1.docx` ... `bao-cao-tuan-7.docx`.
2. Put them in the `public/reports/` folder (create it if missing).
3. Commit and push this repository to GitHub (for example a repo named `Portfolio`). If you want the exact URL `https://vinhthuy0710.github.io/Portfolio/`, push to `https://github.com/vinhthuy0710/Portfolio`.
4. Ensure the default branch is `main` or `master` and push.
5. GitHub Actions will run the `Build and Deploy to GitHub Pages` workflow which exports the site to `out` and publishes it to the `gh-pages` branch. The app is already configured for a repo project page deploy path.
6. After the workflow completes, your site should be available at `https://<your-username>.github.io/<repo-name>/` (e.g. https://vinhthuy0710.github.io/Portfolio/). If it does not appear, enable Pages in repository settings and set source to `gh-pages` branch.

Notes:
- This project uses `next export` which has limitations with the App Router. If any route fails to export, consider deploying to Vercel for full Next.js App Router support.
- If you want me to upload the provided report attachments into `public/reports/`, please add the files to the workspace or grant access.
