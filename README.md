# Routing in Next.js

- create folders inside app folder
- create page.js inside each folder

# Nested routing

- create folder inside app folder
- create page.js inside folder
- create folder in same folder where page.js is
- create page.js inside that folder

# Dynamic routing

- create folder inside app folder
- create page.js inside folder
- create folder with square brackets in the same folder where page.js is
- Example: [dynamic-routing]

# Catch all routing

- [...catchAll]
- for getting all the files or routes name

# Optional Catch all routing

- [[...catchAll]]
- for getting all the files or routes name

# Layouts in Next.js

- create layout.js inside folder

# Adding meta data or page title

- create metadata.js inside folder
- export metadata
- export title

# Adding meta data or page title

- export const metadata = {
  title : {
  template: '%s - Technical agency',
  default: 'Technical agency'
  }
  }; in layout.js file
- export const metadata = {
  title: 'About'
  }; in page.js file

- for dynamic metadata
  export async function generateMetadata({ params }) {
  const { blogID } = await params;
  return {
  title: `Blog ${blogID}`,
  description: `This is blog ${blogID}`,
  };
  }
