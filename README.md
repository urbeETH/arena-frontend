# ⚔️ UrbeArena Frontend

Welcome to the official **UrbeArena** frontend repository: the website is built using **NextJs** and **Typescript**.

## 🚀 Running the app

In order to run the app you have two choices: either run it locally or using Docker.

### Run locally

To run the UrbeArena frontend locally you must clone the repository first:

```bash
git clone https://github.com/urbeETH/arena-frontend.git
cd arena-frontend
```

Then, you must install all the required `node_modules` and start the dev server on port 3000:

```bash
npm install
npm run dev
```

If you want to build it locally and run it in "production" mode, then do not run the `npm run dev` command and do the following instead:

```bash
export NODE_ENV=PRODUCTION
npm run build
npm run start
```

Open your browser at `localhost:3000` to see the app running.

### Run with Docker

Running the app with Docker requires almost the same steps as above: like before, clone the repo.

```bash
git clone https://github.com/urbeETH/arena-frontend.git
cd arena-frontend
```

Then you must build the Docker image locally and run it:

```bash
docker build -t arena-frontend:latest .
docker run -it --rm -d -p 3000:3000 arena-frontend:latest
```

Open your browser at `localhost:3000` to see the app running.

## 🗂 Repository structure

Let's explore the repository structure.

### `/components`

Under the `/components` folder you can find all the `.tsx` components used in each page. If you want to create a component that may be reusable in other pages or just to have a better code readibility, this is the folder for you.

#### Current components

```
/components
| AttackLog.tsx // displays the latest attacks registered in UrbeArena in the homepage
| ConnectModal.tsx // modal used to connect the wallet using Metamask and WalletConnect (for now..)
| ConnectWithMetamask.tsx // component used to connect the wallet using Metamask
| ConnectWithWalletConnect.tsx // component used to connect the wallet using WalletConnect
| GladiatorsHome.tsx // component used to display the gladiators home table or grid
| Navbar.tsx // app navbar used for navigation and connection purposes
```

### `/connectors`

Under the `/connectors` folders you can find all the available connectors used to connect the wallet in the UrbeArena app.

#### Current connectors

```
/connectors
| metamask.ts // metamask connector
| walletConnect.ts // wallet connect connector
```

### `/hooks`

Under the `/hooks` folders you can find all the React hooks used throughout the UrbeArena app.

#### Current hooks

```
/hooks
| useMetaMaskOnboarding.ts // hook used to initialize the metamask onboarding
```

### `/pages`

Under the `/pages` folder you can find all the app pages; for each `.tsx` (or `.js`) there will be a new route for the NextJS app.

#### Current pages

```
/pages
| _app.tsx // NextJS app wrapper
| _document.js // NextJS document wrapper
| index.tsx // app homepage (mapped to the '/' route)
```