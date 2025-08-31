"use client";

import {
	createContext,
	useContext,
	useEffect,
	useState,
	ReactNode,
	Dispatch,
	SetStateAction,
} from "react";

type UiStoreType = {
	showOffset: boolean;
	setShowOffset: Dispatch<SetStateAction<boolean>>;
	isScreenLessThan992: boolean | null;
	isIndexPage: boolean;
	setIsScreenLessThan992: (value: boolean) => void;
	setIsIndexPage: (value: boolean) => void;
};

const UiStoreContext = createContext<UiStoreType | undefined>(undefined);

export const UiStoreProvider = ({ children }: { children: ReactNode }) => {
	const [showOffset, setShowOffset] = useState(true);
	const [isScreenLessThan992, setIsScreenLessThan992] = useState<
		boolean | null
	>(null);
	/**
	 * NOT COURSE PAGE
	 *
	 * ...this is smth weird, probably svelte-specific, so need to be investigated,
	 * but for now during dirty rewrite to next it will stay...
	 */
	const [isIndexPage, setIsIndexPage] = useState(true); // not course page

	useEffect(() => {
		if (window.innerWidth < 992) {
			setIsScreenLessThan992(true);
		} else {
			setIsScreenLessThan992(false);
		}

		window.addEventListener("resize", () => {
			if (window.innerWidth < 992) {
				setIsScreenLessThan992(true);
			} else {
				setIsScreenLessThan992(false);
			}
		});
	}, []);

	// Sync showOffset with screen size
	useEffect(() => {
		if (isScreenLessThan992 !== null) {
			setShowOffset(!isScreenLessThan992);
		}
	}, [isScreenLessThan992]);

	return (
		<UiStoreContext.Provider
			value={{
				showOffset,
				setShowOffset,
				isScreenLessThan992,
				isIndexPage,
				setIsScreenLessThan992,
				setIsIndexPage,
			}}
		>
			{children}
		</UiStoreContext.Provider>
	);
};

// Custom hook to use the store
export const useUiStore = () => {
	const context = useContext(UiStoreContext);
	if (!context) {
		throw new Error("useUiStore must be used within a UiStoreProvider");
	}
	return context;
};
