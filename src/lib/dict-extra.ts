// Content taken from the company's official site (themultione.com), plus our interactive demo copy.
const xen = {
  hero: {
    eyebrow: 'Automation & Networking · Cairo · Dubai',
    l1: 'Unleash the power of',
    l2: 'your home.',
    sub: 'The MultiOne is the one stop shop for all your automation and networking needs, for residential and commercial clients. Delivered on time, exactly to your requirements, with after-sales support tailored to you.',
    c1: 'Start your project',
    c2: 'Try the live demo',
    scroll: 'Scroll',
  },
  stats: { projects: 'Offices: Cairo & Dubai', clients: 'Core solution lines', years: 'App to control it all', support: 'After-sales support' },
  marquee: ['Home networking', 'Lighting control', 'Shutter control', 'Garden irrigation', 'Security systems', 'Commercial networking', 'Mobile app', 'KNX', 'Fibaro', 'Hikvision', 'Dahua'],
  promise: {
    eyebrow: 'Our promise',
    title: 'On time. As specified. Supported after.',
    items: [
      { t: 'On time', d: 'We pride ourselves on delivering every project on schedule.' },
      { t: 'As per your requirements', d: 'Every solution is built around what you actually asked for.' },
      { t: 'After-sales support', d: 'Custom tailored assistance for each client, so everything keeps running smoothly.' },
    ],
  },
  demo: {
    eyebrow: 'Experience it for yourself',
    title: 'Run a smart home from this page.',
    sub: 'A simplified demo of what the mobile app controls. Pick a room, then play with lights, shutters, climate, security and irrigation.',
    note: 'Simplified demo. It does not show the full capability or exact interface of the product.',
    rooms: { living: 'Living Room', kitchen: 'Kitchen', bedroom: 'Bedroom', office: 'Office', garden: 'Garden' },
    lights: 'Lights', shutters: 'Shutters', climate: 'Climate', security: 'Security', irrigation: 'Irrigation',
    on: 'On', off: 'Off', armed: 'Armed', disarmed: 'Disarmed', open: 'Open', closed: 'Closed', running: 'Running', idle: 'Idle',
    scenes: 'Scenes', sceneNames: { morning: 'Morning', movie: 'Movie', away: 'Away', night: 'Night' },
    welcome: 'Welcome home',
  },
  about2: {
    eyebrow: 'More about us',
    cards: [
      { k: 'Our vision', t: 'Be capable of more with our solutions', img: 'dashboard' },
      { k: 'Our mission', t: 'Feature-rich solutions, effortless smart living', img: 'lock-app' },
      { k: 'We offer', t: 'Residential', img: 'living' },
      { k: 'We offer', t: 'Commercial', img: 'office' },
    ],
  },
  faq: {
    eyebrow: 'FAQs', title: 'Simple and clear answers.',
    items: [
      { q: 'What services does The MultiOne provide?', a: 'We offer tailored networking and automation solutions for residential and commercial clients, including home networking, lighting and shutter control, garden irrigation, security systems, and commercial-grade networking infrastructure.' },
      { q: 'Can I control all my smart devices from one place?', a: 'Yes. All our automation solutions are designed to be simple and user-friendly. You can control multiple devices through a single mobile app, whether you are at home or away.' },
      { q: 'Do you provide after-sales support?', a: 'Absolutely. Each solution comes with custom tailored assistance to make sure everything continues running smoothly.' },
    ],
  },
  services: {
    eyebrow: 'Services', title: 'Automation and networking, under one roof.',
    sub: 'Tailored solutions for residential and commercial clients.',
    items: [
      { t: 'Home networking', d: 'Reliable wired and Wi-Fi networks designed for streaming, work and every connected device in the house.' },
      { t: 'Lighting control', d: 'Scenes, dimming and schedules for every room, controlled from the wall, the app or automatically.' },
      { t: 'Shutter control', d: 'Motorised shutters and blinds that follow your schedule, the sun and your scenes.' },
      { t: 'Garden irrigation', d: 'Automated watering zones with schedules you control from the same app.' },
      { t: 'Security systems', d: 'Cameras, access control and alarms integrated with the rest of your automation.' },
      { t: 'Commercial-grade networking', d: 'Structured networking infrastructure for offices and commercial spaces.' },
    ],
  },
  offers: {
    res: { t: 'Residential', d: 'Villas and apartments that respond to the way you live: lights, shutters, climate, garden and security in one app.' },
    com: { t: 'Commercial', d: 'Offices and commercial spaces with robust networking, access control and automation that saves energy.' },
  },
  contact: {
    eyebrow: 'Contact', title: 'Let\u2019s talk about your project.',
    name: 'Full name', email: 'Email', phone: 'Phone', subject: 'Subject', message: 'Tell us about the project', send: 'Send message', sending: 'Sending\u2026',
    ok: 'Message sent. We will contact you soon.', err: 'Could not send. Please email or call us directly.',
    address: 'Address', hours: 'Find us in Cairo and Dubai', cairo: 'Cairo, Egypt', dubai: 'Dubai, UAE', dubaiAddr: 'Address not yet available',
  },
  footer: { tag: 'One stop shop for automation and networking.', links: 'Explore', contact: 'Contact', rights: 'All rights reserved.', privacy: 'Privacy', terms: 'Terms' },
};

const xar: typeof xen = {
  hero: {
    eyebrow: 'أتمتة وشبكات · القاهرة · دبي',
    l1: 'اكتشف قوة',
    l2: 'بيتك.',
    sub: 'ذا ملتي وان هي مكانك الواحد لكل احتياجات الأتمتة والشبكات للعملاء السكنيين والتجاريين. تسليم في الميعاد وبالظبط حسب طلبك، مع دعم بعد البيع مفصّل لكل عميل.',
    c1: 'ابدأ مشروعك',
    c2: 'جرّب الديمو',
    scroll: 'اسحب',
  },
  stats: { projects: 'مكاتب: القاهرة ودبي', clients: 'خطوط حلول أساسية', years: 'تطبيق واحد يتحكم في كل حاجة', support: 'دعم بعد البيع' },
  marquee: ['شبكات المنازل', 'التحكم في الإضاءة', 'التحكم في الستائر', 'ري الحدائق', 'أنظمة الأمان', 'شبكات تجارية', 'تطبيق موبايل', 'KNX', 'Fibaro', 'Hikvision', 'Dahua'],
  promise: {
    eyebrow: 'وعدنا',
    title: 'في الميعاد. زي المطلوب. ودعم بعد التسليم.',
    items: [
      { t: 'في الميعاد', d: 'بنفتخر بتسليم كل مشروع في موعده.' },
      { t: 'حسب متطلباتك', d: 'كل حل بيتبني حوالين اللي طلبته فعلا.' },
      { t: 'دعم بعد البيع', d: 'مساعدة مفصّلة لكل عميل علشان كل حاجة تفضل شغالة بسلاسة.' },
    ],
  },
  demo: {
    eyebrow: 'جرّبها بنفسك',
    title: 'شغّل بيت ذكي من الصفحة دي.',
    sub: 'ديمو مبسّط للي بيتحكم فيه تطبيق الموبايل. اختار أوضة وجرّب الإضاءة والستائر والتكييف والأمان والري.',
    note: 'ديمو مبسّط. مش بيعرض كل إمكانيات المنتج ولا شكل الواجهة الفعلي.',
    rooms: { living: 'الليفينج', kitchen: 'المطبخ', bedroom: 'أوضة النوم', office: 'المكتب', garden: 'الحديقة' },
    lights: 'الإضاءة', shutters: 'الستائر', climate: 'التكييف', security: 'الأمان', irrigation: 'الري',
    on: 'شغال', off: 'مقفول', armed: 'مفعّل', disarmed: 'متوقف', open: 'مفتوحة', closed: 'مقفولة', running: 'شغال', idle: 'متوقف',
    scenes: 'سيناريوهات', sceneNames: { morning: 'الصباح', movie: 'سينما', away: 'خروج', night: 'ليل' },
    welcome: 'أهلا في بيتك',
  },
  about2: {
    eyebrow: 'أكتر عننا',
    cards: [
      { k: 'رؤيتنا', t: 'كن قادرا على أكتر بحلولنا', img: 'dashboard' },
      { k: 'مهمتنا', t: 'حلول غنية بالمميزات، وحياة ذكية من غير تعب', img: 'lock-app' },
      { k: 'بنقدّم', t: 'سكني', img: 'living' },
      { k: 'بنقدّم', t: 'تجاري', img: 'office' },
    ],
  },
  faq: {
    eyebrow: 'الأسئلة الشائعة', title: 'إجابات بسيطة وواضحة.',
    items: [
      { q: 'إيه الخدمات اللي بتقدمها ذا ملتي وان؟', a: 'بنقدّم حلول شبكات وأتمتة مفصّلة للعملاء السكنيين والتجاريين، منها شبكات المنازل والتحكم في الإضاءة والستائر وري الحدائق وأنظمة الأمان والبنية التحتية للشبكات التجارية.' },
      { q: 'أقدر أتحكم في كل أجهزتي الذكية من مكان واحد؟', a: 'أيوه. كل حلولنا مصممة تكون بسيطة وسهلة. تتحكم في أجهزة كتير من تطبيق موبايل واحد، وإنت في البيت أو بعيد عنه.' },
      { q: 'بتقدموا دعم بعد البيع؟', a: 'طبعا. كل حل جاي مع دعم مفصّل علشان كل حاجة تفضل شغالة بسلاسة.' },
    ],
  },
  services: {
    eyebrow: 'الخدمات', title: 'أتمتة وشبكات تحت سقف واحد.',
    sub: 'حلول مفصّلة للعملاء السكنيين والتجاريين.',
    items: [
      { t: 'شبكات المنازل', d: 'شبكات سلكية وWi-Fi موثوقة مصممة للمشاهدة والشغل وكل جهاز متصل في البيت.' },
      { t: 'التحكم في الإضاءة', d: 'سيناريوهات وتعتيم وجداول لكل أوضة، من الحيطة أو التطبيق أو تلقائيا.' },
      { t: 'التحكم في الستائر', d: 'ستائر وشيش بمحركات بتتبع جدولك والشمس وسيناريوهاتك.' },
      { t: 'ري الحدائق', d: 'مناطق ري أوتوماتيك بجداول بتتحكم فيها من نفس التطبيق.' },
      { t: 'أنظمة الأمان', d: 'كاميرات وتحكم في الدخول وإنذار متكاملين مع باقي الأتمتة.' },
      { t: 'شبكات تجارية', d: 'بنية تحتية منظمة للشبكات في المكاتب والأماكن التجارية.' },
    ],
  },
  offers: {
    res: { t: 'سكني', d: 'فلل وشقق بتستجيب لطريقة عيشتك: إضاءة وستائر وتكييف وحديقة وأمان في تطبيق واحد.' },
    com: { t: 'تجاري', d: 'مكاتب وأماكن تجارية بشبكات قوية وتحكم في الدخول وأتمتة بتوفر طاقة.' },
  },
  contact: {
    eyebrow: 'تواصل معنا', title: 'تعالى نتكلم عن مشروعك.',
    name: 'الاسم', email: 'الإيميل', phone: 'الموبايل', subject: 'الموضوع', message: 'احكيلنا عن المشروع', send: 'ابعت الرسالة', sending: 'جاري الإرسال…',
    ok: 'الرسالة وصلت. هنتواصل معاك قريب.', err: 'مقدرناش نبعت. ابعتلنا إيميل أو اتصل بينا.',
    address: 'العنوان', hours: 'هتلاقينا في القاهرة ودبي', cairo: 'القاهرة، مصر', dubai: 'دبي، الإمارات', dubaiAddr: 'العنوان غير متاح حاليا',
  },
  footer: { tag: 'مكانك الواحد للأتمتة والشبكات.', links: 'استكشف', contact: 'تواصل', rights: 'جميع الحقوق محفوظة.', privacy: 'الخصوصية', terms: 'الشروط' },
};
export { xen, xar };
