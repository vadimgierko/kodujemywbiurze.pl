import styles from "./prev-next-article.module.css";
import { ArrowLeft } from "@/lib/icons/ArrowLeft";
import { ArrowRight } from "@/lib/icons/ArrowRight";
import Link from "next/link";

type PrevNextArticleProps = {
	nextSlug: string | null;
	prevSlug: string | null;
}

export function PrevNextArticle({ prevSlug, nextSlug }: PrevNextArticleProps) {
	return (
		<div className={`${styles["prev-next-article"]} container`}>
			{
				prevSlug
					? <nav>
						<ArrowLeft /> <Link href={`/${prevSlug}`}>Poprzedni artykuł</Link>
					</nav>
					: <div />
			}
			{
				nextSlug && <nav>
					<Link href={`/${nextSlug}`}>Kolejny artykuł</Link>
					<ArrowRight />
				</nav>
			}
		</div>
	);
}


