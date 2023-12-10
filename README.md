My notes.

This is a test problem and I've focused on simplicity and semantics.
The downside in considering this test an end goal is that extending the logic after the fact could be painful. For example, it *could* be beneficial to have some top level context but of course this would depend on the features one might like to add, personally I think it would be overkill in this project right now, but I did decide to use NEXT so I can't really talk :)


----


instructions: 

You are free in:

• How much time you are going to invest.

• What you build next to this (but the target is to realize the task)

• How you are going to present your results (next to the git repository)

 

If you can please let us know how long you would need and then aim stick to the timeline afterwards, then we can schedule the next steps accordingly with the team and getting you feedback.

 

Here are a few other tips from things we had seen from unsuccessful past assignments that are appreciated from Simple System.

 

• Tests included in the solution - unit/integration etc

• README file updated

• Certain degree of complexity

• Structure and clean code

• Having a state machine to handle to app state correctly

• Obviously to look nice 😊

 

In case it helps here is another detailed feedback from someone who failed the task… obviously I cannot show you their solution but this might provide some hints, which might also help you:

 

Cons

- the solution provided is quite basic - loading states not handled, error state for repos not handled, empty case for users not handled. This is due to the absence of a state machine for handling the application state correctly. It would be beneficial to utilize an asynchronous state manager like React Query or RTK Query.

- very basic tests to atom components, no tests for the business logic

- no separation between the view and the logic on Home page component

- mobile version alignment issues, such as the search input not fitting the page and elements not being centered, need attention.

- AppRouter is not a molecule

- the "ThemeProviderWrapper" is not stored adjacent to the related context, which can lead to disorganization in larger projects. Ideally, these closely related components should be co-located.

- TypeScript usage could be improved, with unnecessary generics for "useState" hooks, untyped constants for dark and light themes, and redundant type declarations for change events.

- a live demo is missing

- redundant code blocks comments

- unused variables and components, like "Loader," remain in the codebase.

- the name "themeStyle" does not adequately convey that it represents a boolean value.

- the user details card on the users list is not clickable, but gives the impression of such (animation, pointer cursor) - only the link inside is interactive

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

