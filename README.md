# Yu Seungmin Research Portfolio

Astro + MDX + Tailwind CSS 기반 GitHub Pages 포트폴리오입니다.

## Local Development

```bash
npm install
npm run dev
```

Local URL:

```txt
http://127.0.0.1:4321/ysm_hompage/
```

## Build

```bash
npm run build
```

## GitHub Pages

`.github/workflows/deploy.yml`가 `main` branch push 시 정적 사이트를 빌드해 GitHub Pages에 배포합니다.

Repository Settings에서 Pages source를 **GitHub Actions**로 설정하세요.

Expected public URL:

```txt
https://ysmMachine.github.io/ysm_hompage/
```

## Evidence Assets

논문/이력서에서 추출한 figure asset은 `public/assets/papers/`와 `public/assets/resume/`에 있습니다.
