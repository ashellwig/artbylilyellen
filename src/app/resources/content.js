import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Lily",
  lastName: "Ellen",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Artist",
  avatar: "/images/avatar.jpg",
  location: "US/Mountain", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: [], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the intersection of
      creativity and engineering.
    </>
  ),
};

const social = [
  {
    name: "Instagram",
    icon: "insta",
    link: "https://instagram.com/painmelikeoneofyourfrenchgirls",
  },
];

const home = {
  label: "Home",
  title: `Artwork by ${person.name}`,
  description: `Artwork by Lily Ellen`,
  headline: <>Art by Lily Ellen</>,
  subline: (
    <>
      I'm Lily, an artist based in
      <br />
      <InlineCode>Colorado</InlineCode>, where I
      create unique works of art.
    </>
  ),
};

const about = {
  label: "Art by Lily Ellen",
  title: "Art by Lily Ellen",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: false,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Hello friends and strangers!
        <br />
        I&apos;m Lily Ellen
        <br />
        <br />
        Welcome to my page of blood, sweat, and tears converted into art form.
        <br />
        <br />
        Prints and originals available &mdash; on hand and on demand!&nbsp;&#x2728;
      </>
    ),
  },
  work: {
    display: false, // set to false to hide this section
    title: "Work Experience",
    experiences: [],
  },
};

const blog = {
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  label: "Work",
  title: "My projects",
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  label: "Gallery",
  title: "My photo gallery",
  description: `A photo collection by ${person.name}`,
  images: [
    {
      src: "/images/gallery/011.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/010.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/007.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/008.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/009.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/000.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/001.jpg",
      alt: "image",
      orientation: "",
    },
    {
      src: "/images/gallery/002.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/003.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/004.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/005.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/006.jpg",
      alt: "image",
      orientation: "horizontal",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
