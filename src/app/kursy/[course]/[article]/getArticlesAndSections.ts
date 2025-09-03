import { Article, Section } from "@/lib/types";
import convertMarkdownIntoArticlesArray from "@/lib/utils/convertMarkdownIntoArticlesArray";
import { promises as fs } from "fs";
import path from "path";

export async function getArticlesAndSections({ course }: { course: string }) {
    let sections: Section[] | null = null;
    let articles: Article[] | null = null;

    if (course === 'javascript') {
        const sectionsTitles = [
            { title: 'Wprowadzenie', fileName: 'wprowadzenie' },
            {
                title: 'Moduł 1. Zarządzanie zadaniami za pomocą poleceń JavaScript w konsoli',
                fileName: '1'
            },
            {
                title:
                    'Moduł 2. Zarządzanie zadaniami za pomocą własnych funkcji. Przechowywanie kodu w pliku. Aplikacja w wersji 1.0',
                fileName: '2'
            },
            {
                title: 'Zakończenie (na razie) oraz darmowe źródła do samodzielnej nauki (po angielsku)',
                fileName: 'koniec'
            }
        ];

        sections = await Promise.all(
            sectionsTitles.map(async ({ title, fileName }) => {
                const filePath = path.join(
                    process.cwd(),
                    "public/content/kursy/javascript",
                    `${fileName}.md`
                );

                const mdContent = await fs.readFile(filePath, "utf8");
                const articles = convertMarkdownIntoArticlesArray(mdContent);

                return {
                    title,
                    fileName,
                    mdContent,
                    articles,
                } satisfies Section;
            })
        );
    } else {
        const filePath = path.join(
            process.cwd(),
            "public/content/kursy",
            course,
            "index.md"
        );

        const mdContent = await fs.readFile(filePath, "utf8");
        articles = convertMarkdownIntoArticlesArray(mdContent);
    }

    return {
        articles,
        sections
    };
}