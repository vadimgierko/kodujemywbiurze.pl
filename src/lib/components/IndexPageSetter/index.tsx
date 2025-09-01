"use client";

import { useUiStore } from "@/context/useUiStore";
import { useEffect } from "react";

/**
 * THIS IS HELPER CLIENT COMPONENT TO SET INDEX PAGE IS TRUE.
 * RETURNS NULL
 */
export function IndexPageSetter() {
    const { setIsIndexPage } = useUiStore();

    useEffect(() => {
        setIsIndexPage(true);
    }, [setIsIndexPage]);

    return null;
}