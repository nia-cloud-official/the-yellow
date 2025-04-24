import { c as createAstro, a as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead, e as addAttribute } from '../chunks/astro/server_BQCOD6q2.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_BfEIi_D5.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://data-nova.vercel.app");
const $$About = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$About;
  const aboutData = {
    title: "The Yellow,",
    description: "A software company that brings together a team of developers, designers, and strategists to create innovative solutions that stand the test of time. We focus on building digital foundations that are not only functional but also aesthetically pleasing.",
    statistics: [
      {
        label: "Clients Served",
        value: "105+"
      },
      {
        label: "Projects Completed",
        value: "200+"
      },
      {
        label: "Partners",
        value: "20+"
      }
    ]
  };
  const expertiseData = {
    title: "Our Expertise:",
    expertise: [
      {
        title: "Software Development:",
        description: "Crafting robust and scalable software solutions tailored to your unique business needs."
      },
      {
        title: "App Development:",
        description: "Creating user-friendly mobile applications that enhance user engagement and drive business growth."
      },
      {
        title: "Game Development:",
        description: "Designing immersive gaming experiences that captivate players and keep them coming back for more."
      }
    ]
  };
  const seo = {
    title: "About The Yellow",
    description: "A Software Development Company"
  };
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "inLanguage": "en-US",
    "@id": Astro2.url.href,
    "url": Astro2.url.href,
    "name": "About The Yellow",
    "description": "Get to know The Yellow, a software development company that specializes in analytics tools.",
    "isPartOf": {
      "@type": "WebSite",
      "url": `${Astro2.site}`,
      "name": "The Yellow",
      "description": "The Yellow  Inc provide top notch software and web solutions."
    }
  };
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "seo": seo, "schema": schema, "data-astro-cid-kh7btl4r": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="mx-auto max-w-[85rem] px-4 pb-12 pt-48 sm:px-6 lg:px-8" data-astro-cid-kh7btl4r> <div class="max-w-7xl" data-astro-cid-kh7btl4r> <div class="mx-auto max-w-2xl lg:mx-0" data-astro-cid-kh7btl4r> <h1 class="text-balance text-4xl text-slate-800 sm:text-5xl md:text-6xl lg:text-7xl" data-astro-cid-kh7btl4r> ${aboutData.title} </h1> <p class="mt-8 text-pretty text-lg font-medium text-slate-700 sm:text-xl/8" data-astro-cid-kh7btl4r> ${aboutData.description} </p> </div>  <div class="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none" data-astro-cid-kh7btl4r> <dl class="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4" data-astro-cid-kh7btl4r> ${aboutData.statistics.map((stat) => renderTemplate`<div class="flex flex-col-reverse gap-1" data-astro-cid-kh7btl4r> <dt class="text-base/7 text-slate-700" data-astro-cid-kh7btl4r>${stat.label}</dt> <dd class="text-4xl font-semibold tracking-tight text-slate-800" data-astro-cid-kh7btl4r> ${stat.value} </dd> </div>`)} </dl> </div> </div> </section> <section class="mx-auto max-w-[85rem] px-4 py-24 sm:px-6 lg:px-8 lg:py-32" data-astro-cid-kh7btl4r> <div class="group relative isolate overflow-hidden rounded-3xl bg-teal-200 p-5 sm:p-11" data-astro-cid-kh7btl4r> <div class="group pointer-events-none absolute inset-0 -top-[10%] h-[120%] w-full rounded-xl bg-linear-to-r/oklch from-teal-200 to-off-white opacity-0 transition duration-1000 group-hover:opacity-100" data-astro-cid-kh7btl4r></div> <div class="svgBlock mx-auto max-w-7xl" data-astro-cid-kh7btl4r> <h2 class="relative text-balance pl-4 text-2xl font-semibold text-slate-800 md:text-3xl md:leading-tight" data-astro-cid-kh7btl4r> ${expertiseData.title} </h2> <dl class="relative mt-10 grid max-w-xl grid-cols-1 items-start text-base/7 text-slate-600 sm:max-w-none lg:grid-flow-row-dense lg:auto-rows-fr lg:grid-cols-3" data-astro-cid-kh7btl4r> ${expertiseData.expertise.map((item, index) => renderTemplate`<div${addAttribute(`px-5 py-5 sm:px-10 lg:py-0 ${index === 1 ? "h-full border-y border-dashed border-slate-400 lg:border-x lg:border-y-0" : ""}`, "class")} data-astro-cid-kh7btl4r> <dt class="text-balance text-lg font-semibold text-slate-600" data-astro-cid-kh7btl4r> ${item.title} </dt> <dd class="mt-2 text-pretty text-slate-500" data-astro-cid-kh7btl4r> ${item.description} </dd> </div>`)} </dl> </div> </div> </section>  ` })}`;
}, "/home/earlvaltor/Desktop/the-yellow-main/src/pages/about.astro", void 0);

const $$file = "/home/earlvaltor/Desktop/the-yellow-main/src/pages/about.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$About,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
