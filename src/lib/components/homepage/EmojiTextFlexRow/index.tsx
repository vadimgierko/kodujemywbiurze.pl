import styles from "./emoji-text-flex-row.module.css";

export function EmojiTextFlexRow({
	items,
	header,
}: {
	items: { text: string; emoji: string }[];
	header: string;
}) {
	return (
		<section className={styles["emoji-text-row-wrapper"]}>
			{header.length > 0 ? <h2 className="container">{header}</h2> : null}
			<div className={`${styles["emoji-text-row"]} container`}>
				{items.map(({ text, emoji }) => (
					<div key={emoji} className={styles["emoji-text-div"]}>
						<div className={styles["emoji"]}>{emoji}</div>
						<div className={styles["text"]}>{text}</div>
					</div>
				))}
			</div>
		</section>
	);
}
