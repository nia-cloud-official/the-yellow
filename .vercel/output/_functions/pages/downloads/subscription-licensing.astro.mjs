import { a as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead, e as addAttribute, F as Fragment, u as unescapeHTML } from '../../chunks/astro/server_BQCOD6q2.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout, a as $$Icon } from '../../chunks/BaseLayout_BfEIi_D5.mjs';
/* empty css                                                     */
export { renderers } from '../../renderers.mjs';

const $$SubscriptionLicensing = createComponent(($$result, $$props, $$slots) => {
  const preTitle = "Subscription Licensing";
  const title = "Subscribe to the Advanced Edition of the DataNova Core";
  const subTitle = "Access the full Advanced Edition for just $14.40/month with <i>no upfront costs</i> or <i>minimum license period</i>. Subscribe for as long as you need \u2014 even for <i>just one user</i>.";
  const features = [
    { text: "Full Advanced Edition of DataNova Core" },
    { text: "Low upfront cost" },
    { text: "No minimum subscription period" },
    { text: "Flexible for any number of users" }
  ];
  const subscribeLinkTitle = "Subscribe Now";
  const subscribeLink = "#";
  const infoSection = {
    systemRequirements: {
      title: "System Requirements",
      description: "The DataNova Core works with Windows 10 or Windows 11 and Excel 2016, 2019, 2021, or Office 365. Compatible with 32-bit, 64-bit, and 64-bit Arm versions of Office and Windows. An internet connection is required for activation and subscription verification."
    },
    subscriptionInfo: {
      description: "Your subscription is renewed automatically each month, but you can cancel anytime before the next renewal date. Please note that uninstalling the Core won\u2019t cancel your subscription \u2014 this must be done separately through your account."
    }
  };
  const faqSection = {
    title: "Frequently Asked Questions",
    faqs: [
      {
        question: "Can I Pause My Subscription?",
        answer: "Currently, subscriptions cannot be paused. You can cancel at any time and resubscribe whenever you\u2019re ready without losing access to updates or support."
      },
      {
        question: "Is My Data Secure?",
        answer: "Yes, the Core does not collect or store your data. All operations are performed locally on your machine, ensuring full data privacy for your files."
      },
      {
        question: "Can I Get a Refund?",
        answer: "We currently offer refunds only under certain conditions, such as technical issues that prevent the Core from functioning as expected. Please contact us for more information."
      },
      {
        question: "Can I Share My Subscription with Team Members?",
        answer: "Each subscription is for a single-user license. If you need licenses for multiple users, we offer volume discounts \u2014 contact us for a quote."
      },
      {
        question: "Can I try the DataNova Core before subscribing?",
        answer: "Yes, we offer a free trial so you can explore the features of the Advanced Edition before committing to a subscription. Contact us to get started."
      }
    ]
  };
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "data-astro-cid-ysyjh2lf": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="mx-auto max-w-[85rem] px-4 pb-12 pt-40 sm:px-6 lg:px-8" data-astro-cid-ysyjh2lf> <div class="max-w-7xl" data-astro-cid-ysyjh2lf> <div class="mx-auto max-w-2xl lg:mx-0" data-astro-cid-ysyjh2lf> <p class="text-base/7 font-medium text-slate-400" data-astro-cid-ysyjh2lf> ${preTitle} </p> <h1 class="mt-1 text-balance text-4xl text-slate-800 sm:text-5xl md:text-6xl lg:text-7xl" data-astro-cid-ysyjh2lf> ${title} </h1> <p class="mt-8 text-pretty text-lg font-medium text-slate-700 sm:text-xl/8" data-astro-cid-ysyjh2lf> ${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate`${unescapeHTML(subTitle)}` })} </p> <div class="mt-10 grid auto-rows-fr grid-rows-2 gap-2 sm:gap-6 md:grid-cols-2" data-astro-cid-ysyjh2lf> ${features.map((feature) => renderTemplate`<div class="flex gap-x-2" data-astro-cid-ysyjh2lf> ${renderComponent($$result2, "Icon", $$Icon, { "name": "checkCircle", "data-astro-cid-ysyjh2lf": true })} <div class="grow" data-astro-cid-ysyjh2lf> <p class="text-slate-600" data-astro-cid-ysyjh2lf>${feature.text}</p> </div> </div>`)} </div> <a${addAttribute(subscribeLink, "href")} class="mt-8 block rounded-lg bg-teal-600 px-3.5 py-2.5 text-center font-semibold text-white shadow-xs transition-colors duration-300 hover:bg-teal-600/80 focus:bg-teal-600/80 focus:outline-hidden sm:mt-10 sm:w-1/2" data-astro-cid-ysyjh2lf> ${subscribeLinkTitle}</a> </div> </div> </section> <section class="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 md:py-14 lg:px-8 lg:py-20" data-astro-cid-ysyjh2lf> <div class="relative grid divide-y divide-dashed divide-slate-400 overflow-hidden rounded-3xl bg-teal-300 px-5 py-5 shadow-xl md:grid-cols-2 md:divide-x md:divide-y-0" data-astro-cid-ysyjh2lf> <div class="content-center py-5 sm:p-5" data-astro-cid-ysyjh2lf> <h3 class="text-balance text-2xl font-bold tracking-tight text-slate-800" data-astro-cid-ysyjh2lf> ${infoSection.systemRequirements.title} </h3> <p class="mt-6 text-pretty text-lg/8 text-slate-700" data-astro-cid-ysyjh2lf> ${infoSection.systemRequirements.description} </p> </div> <div class="svgBlock py-5 sm:p-5" data-astro-cid-ysyjh2lf> ${renderComponent($$result2, "Icon", $$Icon, { "name": "info", "class": "size-8", "data-astro-cid-ysyjh2lf": true })} <p class="mt-6 text-pretty text-lg/8 text-slate-700" data-astro-cid-ysyjh2lf> ${infoSection.subscriptionInfo.description} </p> </div> </div> </section> <section class="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 md:py-14 lg:px-8 lg:py-20" data-astro-cid-ysyjh2lf> <div class="mx-auto mb-10 max-w-2xl lg:mb-14" data-astro-cid-ysyjh2lf> <h2 class="text-balance text-2xl font-semibold tracking-tight text-slate-800 md:text-3xl md:leading-tight" data-astro-cid-ysyjh2lf> ${faqSection.title} </h2> </div> <div class="mx-auto max-w-2xl divide-y divide-slate-200" data-astro-cid-ysyjh2lf> ${faqSection.faqs.map((faq) => renderTemplate`<div class="py-8 first:pt-0 last:pb-0" data-astro-cid-ysyjh2lf> <div class="flex gap-x-5" data-astro-cid-ysyjh2lf> ${renderComponent($$result2, "Icon", $$Icon, { "name": "questionMark", "data-astro-cid-ysyjh2lf": true })} <div class="grow" data-astro-cid-ysyjh2lf> <h3 class="font-semibold text-slate-600 md:text-lg" data-astro-cid-ysyjh2lf> ${faq.question} </h3> <p class="mt-1 text-slate-500" data-astro-cid-ysyjh2lf> ${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate`${unescapeHTML(faq.answer)}` })} </p> </div> </div> </div>`)} </div> </section>  ` })}`;
}, "/home/earlvaltor/Desktop/the-yellow-main/src/pages/downloads/subscription-licensing.astro", void 0);

const $$file = "/home/earlvaltor/Desktop/the-yellow-main/src/pages/downloads/subscription-licensing.astro";
const $$url = "/downloads/subscription-licensing";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$SubscriptionLicensing,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
