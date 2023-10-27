import { getCollection, getEntry } from 'astro:content';

export const getTranslations = async (url: URL) => {
    const [, lang] = url.pathname.split('/');
    const content = await getEntry('i18n', lang);
    if (!content) throw new Error(`Language ${lang} not found`);

    return { lang: content.id, translate: content.data.translations, pages: content.data.pages };
};

export const langs = (await getCollection('i18n')).map((i) => ({ lang: i.id, name: i.data.name }));
