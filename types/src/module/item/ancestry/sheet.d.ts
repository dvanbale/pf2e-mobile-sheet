import { ABCSheetData, ABCSheetPF2e } from "@item/abc/sheet.ts";
import { AncestryPF2e } from "@item/ancestry/index.ts";
import { SheetOptions } from "@module/sheet/helpers.ts";
declare class AncestrySheetPF2e extends ABCSheetPF2e<AncestryPF2e> {
    getData(options?: Partial<DocumentSheetOptions>): Promise<AncestrySheetData>;
}
interface AncestrySheetData extends ABCSheetData<AncestryPF2e> {
    selectedBoosts: Record<string, Record<string, string>>;
    selectedFlaws: Record<string, Record<string, string>>;
    sizes: SheetOptions;
    languages: SheetOptions;
    additionalLanguages: SheetOptions;
}
export { AncestrySheetPF2e };
