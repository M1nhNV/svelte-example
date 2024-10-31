# svelte-example

An example with Svelte, SvelteKit, Typescript, Vite, Tailwind, MeltUI, and Playwright.

Live example: https://svelte.nvminh.com/

## File Naming Convention

> part1_part2_part3.svelte

### Part1

This part includes a prefix that corresponds to the design level:

- **A** => Atom (e.g., `AInput`, `AButton`)
- **M** => Molecule (e.g., `MInputGroup`, `MCardHeader`)
- **O** => Organism (e.g., `OTodoList`, `ONavBar`)
- **T** => Template (e.g., `TUserProfile`, `TDashboard`)

### Part2

The second part should reflect the specific function, feature, or purpose of the component. Common component features like "dropdown," "modal," or "form" would be used here to identify functionality.

- **Examples**:
  - `ADropdown`: An atomic dropdown menu.
  - `MSearchBar`: A molecule combining input and button for a search feature.
  - `OLoginForm`: An organism representing a login form.

### Part3

The third part can be used to denote specific extensions or modifications if necessary, such as variants, states, or additional descriptors. This part is optional but helpful in certain contexts, especially for variations in design.

- **Examples**:
  - `ADropdown_Expanded`: An atom representing the expanded state of a dropdown.
  - `MCard_Header`: Molecule specifically for a header within a card component.
  - `OProductList_Collapsed`: An organism listing products, with a collapsed option.

## Developing

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://svelte.dev/docs/kit/adapters) for your target environment.
