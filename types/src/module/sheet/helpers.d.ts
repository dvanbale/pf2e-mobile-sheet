/** Prepare form options on an item or actor sheet */
declare function createSheetOptions(options: Record<string, string>, selections?: SheetSelections, { selected }?: {
    selected?: boolean | undefined;
}): SheetOptions;
declare function createSheetTags(options: Record<string, string>, selections: SheetSelections): SheetOptions;
declare function createTagifyTraits(traits: Iterable<string>, { sourceTraits, record }: TagifyTraitOptions): {
    id: string;
    value: string;
    readonly: boolean;
}[];
/**
 * Process tagify elements in a form, converting their data into something the pf2e system can handle.
 * This method is meant to be called in _getSubmitData().
 */
declare function processTagifyInSubmitData(form: HTMLFormElement, data: Record<string, unknown>): void;
declare function getAdjustment(value: number, reference: number): AdjustedValue;
interface AdjustedValue {
    value: number;
    adjustedHigher: boolean;
    adjustedLower: boolean;
    adjustmentClass: "adjusted-higher" | "adjusted-lower" | null;
}
/** Override to refocus tagify elements in _render() to workaround handlebars full re-render */
declare function maintainFocusInRender(sheet: Application, renderLogic: () => Promise<void>): Promise<void>;
interface SheetOption {
    value: string;
    label: string;
    selected: boolean;
}
type SheetOptions = Record<string, SheetOption>;
type SheetSelections = {
    value: (string | number)[];
} | (string[] & {
    custom?: never;
});
interface TagifyTraitOptions {
    sourceTraits: Iterable<string>;
    record: Record<string, string>;
}
interface TraitTagifyEntry {
    id: string;
    value: string;
    readonly: boolean;
}
export { createSheetOptions, createSheetTags, createTagifyTraits, getAdjustment, maintainFocusInRender, processTagifyInSubmitData, };
export type { AdjustedValue, SheetOption, SheetOptions, TraitTagifyEntry };
