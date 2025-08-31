"use client";

import styled from "styled-components";

const StyledSection = styled.section`
	* {
		font-size: 1.5rem;
		line-height: normal;
		background-color: var(--section-background-color);
	}

	.emoji-text-row {
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
		padding: 4rem 0;
	}

	.emoji-text-div {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 1rem;
		text-align: center;
	}

	.emoji {
		font-size: 100px;
		line-height: 1; /* Ensures proper vertical alignment */
	}

	.text {
		margin-top: 2rem;
	}

	h2 {
		font-size: 2.5rem;
		padding-top: 1em;
	}

	@media screen and (max-width: 568px) {
		h2 {
			font-size: 2rem;
			line-height: normal;
		}
	}
`;

export function EmojiTextFlexRow({
	items,
	header,
}: {
	items: { text: string; emoji: string }[];
	header: string;
}) {
	return (
		<StyledSection>
			{header.length > 0 ? <h2 className="container">{header}</h2> : null}
			<div className="emoji-text-row container">
				{items.map(({ text, emoji }) => (
					<div key={emoji} className="emoji-text-div">
						<div className="emoji">{emoji}</div>
						<div className="text">{text}</div>
					</div>
				))}
			</div>
		</StyledSection>
	);
}
