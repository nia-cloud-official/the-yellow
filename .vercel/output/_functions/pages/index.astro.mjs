import { a as createComponent, m as maybeRenderHead, e as addAttribute, r as renderComponent, b as renderTemplate, c as createAstro, F as Fragment, u as unescapeHTML } from '../chunks/astro/server_BQCOD6q2.mjs';
import 'kleur/colors';
import { a as $$Icon, b as $$Button, $ as $$BaseLayout } from '../chunks/BaseLayout_BfEIi_D5.mjs';
import 'clsx';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$AnnouncementBanner = createComponent(($$result, $$props, $$slots) => {
  const text = "Introducing The Yellow";
  const linkText = "Check out some of our work";
  const linkHref = "#work";
  return renderTemplate`${maybeRenderHead()}<div class="flex justify-center"> <div class="rounded-xl bg-slate-50 shadow-md"> <a${addAttribute(linkHref, "href")} target="_blank" class="group flex h-9 w-fit items-center justify-center gap-0 rounded-xl transition duration-300"${addAttribute(`${text} - ${linkText}`, "aria-label")}> <div class="to-teal-700 from-teal-800 flex h-full w-fit items-center gap-2 rounded-xl bg-linear-to-tr/oklch px-3"> <span class="text-sm text-white">${text}</span> </div> <div class="hidden h-full w-fit items-center justify-center gap-2 px-3 sm:flex"> <span class="text-astro-slate-100 text-sm transition duration-300 group-hover:underline">${linkText}</span> ${renderComponent($$result, "Icon", $$Icon, { "name": "chevronRight" })} </div> </a> </div> </div>`;
}, "/home/earlvaltor/Desktop/the-yellow-main/src/components/common/AnnouncementBanner.astro", void 0);

const $$HeroContent = createComponent(($$result, $$props, $$slots) => {
  const title = "We Build Digital Foundations That Last";
  const subTitle = "The Yellow is a coalition of developers, designers, and strategists who believe in substance over spectacle. We don\u2019t chase vanity metrics or viral gimmicks\u2014we solve problems, spark innovation, and ship work that stands the test of time.";
  const secondaryCTA = { text: "Contact Us", href: "mailto:info@theyellow.top" };
  const primaryCTA = { text: "Learn More", href: "/about" };
  return renderTemplate`${maybeRenderHead()}<div class="mx-auto max-w-4xl select-none text-left sm:text-center"> <h1 class="block text-balance text-4xl text-slate-800 sm:text-5xl md:text-6xl lg:text-7xl"> ${title} </h1> </div> <div class="mx-auto max-w-3xl text-left sm:text-center"> <p class="text-pretty text-lg text-slate-700"> ${subTitle} </p> </div>  <div class="flex flex-col justify-center gap-5 sm:flex-row"> ${renderComponent($$result, "Button", $$Button, { "href": secondaryCTA.href, "variant": "secondary", "target": "_blank" }, { "default": ($$result2) => renderTemplate`${secondaryCTA.text}` })} ${renderComponent($$result, "Button", $$Button, { "href": primaryCTA.href, "variant": "primary" }, { "default": ($$result2) => renderTemplate`${primaryCTA.text}` })} </div>`;
}, "/home/earlvaltor/Desktop/the-yellow-main/src/components/common/HeroContent.astro", void 0);

const $$HeroVideo = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate``;
}, "/home/earlvaltor/Desktop/the-yellow-main/src/components/common/HeroVideo.astro", void 0);

const $$HeroSection = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="bg-linear-to-b/oklch from-teal-200 via-transparent to-white"> <div class="mx-auto max-w-[85rem] space-y-8 px-4 pb-12 pt-48 sm:px-6 lg:px-8">  ${renderComponent($$result, "AnnouncementBanner", $$AnnouncementBanner, {})}  ${renderComponent($$result, "HeroContent", $$HeroContent, {})}  ${renderComponent($$result, "HeroVideo", $$HeroVideo, {})} </div> </section>`;
}, "/home/earlvaltor/Desktop/the-yellow-main/src/components/sections/HeroSection.astro", void 0);

const $$FeatureShowcase = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate``;
}, "/home/earlvaltor/Desktop/the-yellow-main/src/components/sections/FeatureShowcase.astro", void 0);

const $$Astro = createAstro("https://data-nova.vercel.app");
const $$FeatureCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$FeatureCard;
  const { icon, description, styleClass } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`z-10 flex w-2/3 flex-col rounded-xl bg-white/50 p-4 shadow-lg ring-1 ring-white/5 backdrop-blur-xl md:p-5 xl:w-1/2 ${styleClass}`, "class")}> <p class="mt-1 text-xs font-medium uppercase text-slate-500"> ${renderComponent($$result, "Icon", $$Icon, { "name": icon })} </p> <p class="mt-2 text-slate-600"> ${description} </p> </div>`;
}, "/home/earlvaltor/Desktop/the-yellow-main/src/components/common/FeatureCard.astro", void 0);

const $$FeatureAnimated = createComponent(($$result, $$props, $$slots) => {
  const title = "We bring your ideas to life!";
  const subTitle = "Whether you want simple softwares for everyday use, or complex systems to manage your business, we have the tools and expertise to make it happen.";
  const tertiaryCTA = { text: "Learn More", href: "#" };
  return renderTemplate`${maybeRenderHead()}<section class="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 md:py-14 lg:px-8 lg:py-20" data-astro-cid-uz547y65> <div class="relative isolate overflow-hidden rounded-3xl bg-teal-400 px-6 pt-16 shadow-xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0" data-astro-cid-uz547y65>  <svg viewBox="0 0 1024 1024" class="absolute left-1/2 top-1/2 -z-10 size-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0" aria-hidden="true" data-astro-cid-uz547y65> <circle cx="512" cy="512" r="512" fill="url(#gradient_2)" fill-opacity="0.7" data-astro-cid-uz547y65></circle> <defs data-astro-cid-uz547y65> <radialGradient id="gradient_2" data-astro-cid-uz547y65> <stop offset="0" stop-color="#087F7F" data-astro-cid-uz547y65></stop> <stop offset="1" stop-color="#087F7F" data-astro-cid-uz547y65></stop> </radialGradient> </defs> </svg>  <div class="mx-auto my-auto max-w-md text-left sm:text-center lg:mx-0 lg:flex-auto lg:text-left" data-astro-cid-uz547y65> <h2 class="text-balance text-2xl font-semibold tracking-tight text-slate-800 md:text-3xl md:leading-tight" data-astro-cid-uz547y65> ${title} </h2> <p class="mt-6 text-pretty text-lg/8 text-slate-700" data-astro-cid-uz547y65> ${subTitle} </p> <div class="mt-10 flex items-center justify-start gap-x-6 sm:justify-center lg:justify-start" data-astro-cid-uz547y65> ${renderComponent($$result, "Button", $$Button, { "href": tertiaryCTA.href, "variant": "tertiary", "className": "group inline-flex items-center justify-center gap-x-2 py-2.5! pl-5 pr-4 text-slate-700", "data-astro-cid-uz547y65": true }, { "default": ($$result2) => renderTemplate`${tertiaryCTA.text}${renderComponent($$result2, "Icon", $$Icon, { "name": "chevronRight", "data-astro-cid-uz547y65": true })}` })} </div> </div>  <div class="relative my-16 flex flex-col gap-y-7 lg:my-8 2xl:h-full" data-astro-cid-uz547y65>  ${renderComponent($$result, "FeatureCard", $$FeatureCard, { "icon": "dataBase", "description": "We build tools that are data driven to produce the best results.", "styleClass": "", "data-astro-cid-uz547y65": true })}  <svg class="line-connector absolute z-0 hidden w-1/2 xl:left-[10%] xl:top-[25%] xl:block" viewBox="0 0 200 300" data-astro-cid-uz547y65> <path class="base-line" d="M1 0.5V50C1 63.8071 12.1929 75 26 75H70" stroke="#F4F9FF" stroke-width="1" fill="transparent" data-astro-cid-uz547y65></path> <path class="beam-line" d="M1 0.5V50C1 63.8071 12.1929 75 26 75H70" stroke="#5AAEAE" stroke-width="1" fill="transparent" data-astro-cid-uz547y65></path> </svg>  ${renderComponent($$result, "FeatureCard", $$FeatureCard, { "icon": "brain", "description": "We use statistics and trends to make informed decisions.", "styleClass": "self-center", "data-astro-cid-uz547y65": true })}  <svg class="line-connector absolute hidden w-1/2 xl:left-[70%] xl:top-[55%] xl:block" viewBox="0 0 200 300" data-astro-cid-uz547y65> <path class="base-line" d="M0.5 1.5H56C69.8071 1.5 81 12.6929 81 26.5V73" stroke="#F4F9FF" stroke-width="1" fill="transparent" data-astro-cid-uz547y65></path> <path class="beam-line" d="M0.5 1.5H56C69.8071 1.5 81 12.6929 81 26.5V73" stroke="#5AAEAE" stroke-width="1" fill="transparent" data-astro-cid-uz547y65></path> </svg>  ${renderComponent($$result, "FeatureCard", $$FeatureCard, { "icon": "lightbulb", "description": "We create solutions that are easy to use and understand.", "styleClass": "self-end", "data-astro-cid-uz547y65": true })} </div> </div> </section> `;
}, "/home/earlvaltor/Desktop/the-yellow-main/src/components/sections/FeatureAnimated.astro", void 0);

const $$FeatureGrid = createComponent(($$result, $$props, $$slots) => {
  const title = 'Why Choose <span class="text-teal-700">The</span><span class="font-normal text-slate-400">Yellow</span>?';
  const subTitle = "We\u2019re not here to sell you buzzwords or empty promises. The Yellow exists because we\u2019re tired of an industry that prioritizes flash over function. We\u2019ve spent over a decade building software that solves problems, games that tell stories, and websites that actually work\u2014not just look pretty. Here\u2019s why people keep coming back:";
  const features = [
    {
      borderClasses: "md:border-l md:border-r",
      gradientClasses: "bg-linear-to-l/oklch from-teal-200 to-transparent",
      icon: "cursorRays",
      heading: "Experience That Matters",
      description: "Our team isn\u2019t made up of interns or AI-generated \u201Cexperts.\u201D We\u2019re engineers, artists, and designers who\u2019ve shipped projects for Fortune 500 companies, indie game studios, and startups you\u2019ve probably heard of. We\u2019ve fixed code so broken it made seasoned developers cry, rescued games abandoned by other studios, and rebuilt websites that were actively losing customers."
    },
    {
      borderClasses: "border-b border-t md:border-b-0",
      gridClasses: "md:col-start-2 md:col-end-3",
      gradientClasses: "bg-linear-to-t/oklch from-teal-200 to-transparent",
      icon: "cog",
      heading: "We Build to Last",
      description: "Most agencies focus on getting projects out the door. We focus on building systems that survive. Whether it\u2019s a mobile game, a SaaS platform, or an e-commerce site, we architect solutions with scalability and maintenance in mind. No shortcuts, no spaghetti code, no \u201Cwe\u2019ll fix it later.\u201D We\u2019ve seen what happens when companies prioritize speed over stability\u2014the result is always a dumpster fire."
    },
    {
      borderClasses: "md:border-l md:border-r md:border-t",
      gridClasses: "md:col-end-4",
      gradientClasses: "bg-linear-to-tl/oklch from-teal-200 to-transparent",
      icon: "puzzle",
      heading: "We Care About Results, Not Ego",
      description: "This isn\u2019t a portfolio-building exercise for us. We measure success by your outcomes\u2014not our creative vision. If a \u201Cboring\u201D solution works better than a flashy one, we\u2019ll fight for it. If your players hate microtransactions, we\u2019ll find ethical ways to monetize. If your users struggle with your app, we\u2019ll redesign it until they don\u2019t. We\u2019ve walked away from projects that demanded predatory design or half-baked code. Reputation matters more than revenue."
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 md:py-14 lg:px-8 lg:py-20"> <div class="grid grid-flow-row-dense grid-cols-1 md:grid-cols-3 md:grid-rows-2">  <div class="mx-auto max-w-lg pb-5 text-center md:col-span-2 lg:mx-0 lg:flex-auto lg:text-left"> <h2 class="text-2xl font-semibold tracking-tight text-balance text-slate-800 md:text-3xl md:leading-tight"> ${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(title)}` })} </h2> <p class="mt-6 text-start text-lg/8 text-pretty text-slate-700 sm:text-center md:text-start"> ${subTitle} </p> </div>  ${features && features.map((feature) => renderTemplate`<div${addAttribute(`group relative mx-auto flex flex-col border-dashed border-slate-400 py-10 ${feature.borderClasses} ${feature.gridClasses}`, "class")}> <div${addAttribute(`group pointer-events-none absolute inset-0 h-full w-full ${feature.gradientClasses} opacity-0 transition duration-300 group-hover:opacity-100`, "class")}></div> <div class="relative z-10 mb-4 px-10"> ${renderComponent($$result, "Icon", $$Icon, { "name": feature.icon })} </div> <div class="relative z-10 mb-2 px-10 text-lg font-semibold"> <span class="inline-block text-balance text-slate-800 transition duration-300 group-hover:translate-x-2"> ${feature.heading} </span> </div> <p class="z-10 max-w-sm px-4 text-sm text-pretty text-slate-700 sm:max-w-lg md:mx-auto"> ${feature.description} </p> </div>`)} </div> </section>`;
}, "/home/earlvaltor/Desktop/the-yellow-main/src/components/sections/FeatureGrid.astro", void 0);

const $$CTA = createComponent(($$result, $$props, $$slots) => {
  const title = "Let\u2019s Build Together";
  const subTitle = "Whether you need a website that converts, an app that simplifies life, or software that scales with your business, we\u2019re here to cut through the noise and get it done right.";
  const primaryCTA = { text: "Email Us", href: "mailto:info@theyellow.top" };
  return renderTemplate`${maybeRenderHead()}<section class="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 md:py-14 lg:px-8 lg:py-20"> <div class="mx-auto mb-10 max-w-3xl text-center lg:mb-14"> <h2 class="text-balance text-4xl text-slate-800 sm:text-5xl"> ${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(title)}` })} </h2> <p class="text-lg\/8 mt-5 text-pretty text-slate-600"> ${subTitle} </p> ${renderComponent($$result, "Button", $$Button, { "href": primaryCTA.href, "variant": "primary", "className": "mt-7 inline-flex border-none px-3.5!" }, { "default": ($$result2) => renderTemplate`${primaryCTA.text}` })} </div> </section>`;
}, "/home/earlvaltor/Desktop/the-yellow-main/src/components/sections/CTA.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$HeroSection, {})} ${renderComponent($$result2, "FeatureShowcase", $$FeatureShowcase, {})} ${renderComponent($$result2, "FeatureAnimated", $$FeatureAnimated, {})} ${renderComponent($$result2, "FeatureGrid", $$FeatureGrid, {})} ${renderComponent($$result2, "CTA", $$CTA, {})} ` })}`;
}, "/home/earlvaltor/Desktop/the-yellow-main/src/pages/index.astro", void 0);

const $$file = "/home/earlvaltor/Desktop/the-yellow-main/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
