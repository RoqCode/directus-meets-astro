# Directus x Astro

## 1. Setup & Installation

In order to use MAMP for the database, create the project in `/Applications/MAMP/htdocs`, then create a MySQL database in phpMyAdmin.

Install Directus in the project folder using:

```
npm init directus-project backend
```

Choose MySQL as the database type, and enter the database name, username, and password.

Follow the rest of the instructions to install Directus.

<br>

Go back to the project folder, create a `/frontend` folder and install Astro using:

```
cd /frontend && npm create astro@latest -- --template minimal
```

### 🚀 Project Structure

Insie of your Astro project, you'll see the following folders and files:

```
/
├── public/
├── src/
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

### 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                | Action                                           |
| :--------------------- | :----------------------------------------------- |
| `npm install`          | Installs dependencies                            |
| `npm run dev`          | Starts local dev server at `localhost:3000`      |
| `npm run build`        | Build your production site to `./dist/`          |
| `npm run preview`      | Preview your build locally, before deploying     |
| `npm run astro ...`    | Run CLI commands like `astro add`, `astro check` |
| `npm run astro --help` | Get help using the Astro CLI                     |

<br>
___
<br>

## 2. Workflow

Start Directus using

```
npx directus start
```

then start Astro using

```
npm run dev
```

By default, Directus runs on port 8055 and Astro runs on port 3000. To change the port, edit the `/backend/directus/.env` file.

Directus provides a GraphQL API, which can be accessed at `http://localhost:8055/graphql`.

To access the API-Endpoint, create a .env file in the `/frontend` folder and add the following:

```
GRAPHQL_URL="http://0.0.0.0:8055/graphql"
```

Inside your Astro component, you can now query the API using:

```
const response = await fetch(import.meta.env.GRAPHQL_URL, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
  body: JSON.stringify({
    query: `
        query {}
      `,
  }),
});
```

To render the response, use:

```
const json = await response.json();
const res = json.data.<name of the query>;

---

<span>{res}</span>
```

Tools like Insomnia and Postman can be used to test the Query.

<br>

## Potential Issues

---

If the API-Endpoint is not working, check the permissions of the element in Directus you are trying to access. Public Elements should be set to `read`.

Every Element needs to have it's own permissions set. Easy to forget, but easy to fix.

Also: to access Images in Directus, you need to set `Directus Files` to `read`.
