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
	setIsScreenLessThan992: (value: boolean) => void;
};

const UiStoreContext = createContext<UiStoreType | undefined>(undefined);

export const UiStoreProvider = ({ children }: { children: ReactNode }) => {
	const [showOffset, setShowOffset] = useState(true);
	const [isScreenLessThan992, setIsScreenLessThan992] = useState<
		boolean | null
	>(null);

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
				setIsScreenLessThan992,
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
